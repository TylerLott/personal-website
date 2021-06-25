from flask import Flask, jsonify
import json
from pathlib import Path

app = Flask(__name__)

@app.route('/api/<information>')
def api_info(information):
    path = Path("resumeData/%s.json" % information)
    if path.exists():
        f = open(path)
        data = json.load(f)
        f.close()
        return jsonify(data)
    else:
        return jsonify({"Err 404": "That api call does not exist, silly"})

if __name__ == '__main__':
    app.run(debug=True) 