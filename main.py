from flask import Flask
from flask_restful import Resource, Api
from pun_of_the_day import PunOfTheDay


app = Flask(__name__)
api = Api(app)

pun_of_the_day = PunOfTheDay()


class Pun(Resource):
    def post(self):
        return pun_of_the_day.get_random_pun()


api.add_resource(Pun, "/randompun")

if __name__ == "__main__":
    app.run(debug=True)
