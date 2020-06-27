from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route("/")
def root():
    return jsonify({"we": "out here"})


@app.route("/all_pics")
def get_all_pics():
    all_pics = []
    for folder in os.listdir("/var/www/html/guesswho/pics"):
        for pic in os.listdir("/var/www/html/guesswho/pics/" + folder):
            ## print(folder + "/" + pic)
            all_pics.append(folder + "/" + pic)
    return jsonify({all_pics})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5005)