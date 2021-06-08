import requests
from bs4 import BeautifulSoup


class PunOfTheDay:
    def __init__(self):
        pass

    def get_random_pun(self):
        res = requests.get("https://pun.me/random/")
        soup = BeautifulSoup(res.text, 'html.parser')

        all_puns = soup.find_all("ul", {"class": "puns single"})
        all_puns[0].li.span.decompose()
        pun = all_puns[0].li.get_text()

        return pun
