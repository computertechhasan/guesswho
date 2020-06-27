from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def root():
    return jsonify({"we": "out here"})




if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5005)