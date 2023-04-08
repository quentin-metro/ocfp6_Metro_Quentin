# ocfp4_Metro_Quentin
OpenClassroom , formation python , projet6 - Développez une interface utilisateur pour une application web Python

## LIRE AVEC ATTENTION ET EN ENTIER AVANT DE TENTER QUOI QUE CE SOIT:
Prototype de la version web de 'JustStreamIt', affichant des propositions de film (et leurs informations) se basant sur l'Api OCMovies-API

## Prérequis, installation, déploiement:
- Pour télécharger la dernière version, cliquer ci-dessus: Code -> Download ZIP
- apres avoir téléchargé et extraire le ZIP dans un nouveau dossier
- assurer d'avoir une version à jour de 'python'
- assurer vous que le serveur de l'Api `OCMovies-API` soit actif
- Ouvrir un terminal de commandes et placez-vous dans le dossier du projet
- lancer l'environnement virtuel `.\env\Scripts\activate`
- lancer la commande `pip install -r requirements.txt` afin d'installer les packages nécessaire
- puis la commande `python .\juststreamit.py`
  - pour fermer le serveur du site, appuyez sur les touches `CTRL+C`

## Le site JustStreamIt
- Ouvrir le site par le raccourci `juststreamit.html` ou par son url grace à un navigateur internet
- apres un temps d'initialisation le site affichera le meilleur film et divers carrousels
- les différentes 'affiches' de films afficheront une fenêtre modale en cliquant dessus.

## Carrousel
- les différents carrousels sont composés d'un titre de categorie, de fleches 'précédente/suivante' et d'affiche
- les différentes affiches rangées dans un carrousel sont affiché dans un nombre limité (4)
- les fleches sont cliquables et permettent de faire dérouler le carrousel dans le sens voulu (celui-ci revenant au debut)

## Modale
- lors d'un clic sur une affiche , une fenêtre modale apparaitra
- celle-ci contient les différentes informations connues sur un film
- une icône 'X' ou un clic à l'extérieur de la modale permettra de fermer la fenêtre modale
