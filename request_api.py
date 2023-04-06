import requests


class RequestApi:
    def __init__(self):
        self.url_api = "http://localhost:8000/api/v1/"

    def getallfilm(self):
        url = self.url_api + "titles/?sort_by=-imdb_score"
        return self.getfilms(url)

    def getworst(self, year: int = None):
        """2020 is the last year in the db"""
        if year is None:
            url = self.url_api + "titles/?sort_by=imdb_score"
        else:
            url = self.url_api + f"titles/?year={year}&sort_by=imdb_score"
        return self.getfilms(url)

    def getbest(self, year: int = None):
        """2020 is the last year in the db"""
        if year is None:
            url = self.url_api + "titles/?sort_by=-imdb_score"
        else:
            url = self.url_api + f"titles/?year={year}&sort_by=-imdb_score"
        return self.getfilms(url)

    def getcategoriefilm(self, categorie):
        url_categorie = self.url_api + f"titles/?genre={categorie}"
        return self.getfilms(url_categorie)

    def getfilm(self, id_film):
        url = self.url_api + f"titles/{id_film}"
        film = requests.get(url)
        if film.status_code == 200:
            return film.json()

    @staticmethod
    def getfilms(url: str, size: int = 8):
        compte = 0
        films = {}
        while compte < size:
            reponse = requests.get(url)
            if reponse.status_code == 200:
                for film in reponse.json()['results']:
                    if compte != size:
                        films[compte] = film
                        compte += 1
                    else:
                        break
            else:
                break
            if reponse.json()['next'] is not None:
                url = reponse.json()['next']
            else:
                break
        return films
