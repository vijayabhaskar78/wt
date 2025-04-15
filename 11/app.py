from flask import Flask, request
app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def reg():
    if request.method == "POST":
        f = request.form
        return f"<h2>Registered</h2>Name: {f['name']}<br>Roll: {f['roll']}<br>Year: {f['year']}<br>Class: {f['cls']}"
    return '''
    <div style="text-align:center;">
    <h2>Student Registration</h2>
    <form method=post>
    Name: <input name=name><br><br>
    Roll: <input name=roll><br><br>
    Year: <input name=year><br><br>
    Class: <input name=cls><br><br>
    <button>Register</button></form></div>
    '''

app.run()
