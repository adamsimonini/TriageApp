from flask import Flask
app=Flask(__name__)

#tying a url to a python function
@app.route('/')
def index():
    return 'INDEX'

#start server when file is called dierectly
if __name__== "__main__":
    app.run(debug=True)
