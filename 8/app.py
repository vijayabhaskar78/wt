from flask import Flask, request

app = Flask(__name__)
data = {'item': 'Widget'}

@app.route('/item', methods=['GET', 'POST', 'PUT', 'DELETE'])
def item():
    if request.method == 'GET': return data
    if request.method == 'POST': data['item'] = request.json['item']
    if request.method == 'PUT': data['item'] = request.json['item']
    if request.method == 'DELETE': data.clear()
    return data if request.method != 'DELETE' else '', 204

if __name__ == '__main__':
    app.run(debug=True)
