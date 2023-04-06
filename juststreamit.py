from flask import Flask, render_template
from flask_cors import CORS
from request_api import RequestApi
app = Flask(__name__)
CORS(app)


@app.route('/best')
def best8():
    request = ra.getbest(2020)
    return request


@app.route('/bestalltime')
def best8alltime():
    request = ra.getbest()
    return request


@app.route('/worst')
def worst8():
    request = ra.getworst()
    return request


@app.route('/genre/romance')
def categorie8():
    request = ra.getcategoriefilm("romance")
    return request


@app.route('/film/<identity>')
def film(identity):
    request = ra.getfilm(identity)
    return request


@app.route('/')
def index():
    return render_template('juststreamit.html')


ra = RequestApi()
app.run()
