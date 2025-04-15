from flask import Flask, redirect
app = Flask(__name__)
items = [{'id':1,'name':'Pen','price':5},{'id':2,'name':'Book','price':15}]
cart = []
s = "<style>body{font-family:sans-serif}.item{margin:10px}</style>"

@app.route('/')
def home():
    h = s + "<h2>Products</h2>"
    for i in items: h += f"<div class='item'>{i['name']} ${i['price']} <a href='/add/{i['id']}'>Add</a></div>"
    return h + "<a href='/cart'>Cart</a>"

@app.route('/add/<int:id>')
def add(id):
    cart.append(next(i for i in items if i['id']==id))
    return redirect('/')

@app.route('/cart')
def show():
    h = s + "<h2>Cart</h2>"
    for i,x in enumerate(cart): h += f"<div class='item'>{x['name']} ${x['price']} <a href='/remove/{i}'>X</a></div>"
    return h + "<a href='/'>Back</a>"

@app.route('/remove/<int:i>')
def remove(i): cart.pop(i); return redirect('/cart')

app.run()