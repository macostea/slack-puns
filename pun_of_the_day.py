import requests
import re
import html


class PunOfTheDay:
    def __init__(self):
        self.__pun_regex = re.compile(r"document\.write\(\'&quot;(.*)&quot;<br />\'\)")

    def get_random_pun(self):
        res = requests.get("https://www.punoftheday.com/cgi-bin/arandompun.pl")

        pun_raw = res.text.split("\n")[0]
        pun_match = self.__pun_regex.match(pun_raw)
        return html.unescape(pun_match.group(1))
