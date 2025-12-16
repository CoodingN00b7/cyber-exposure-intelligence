from flask import Flask
from flask_cors import CORS
from routes.search import search_bp
from routes.dashboard import dashboard_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(search_bp, url_prefix="/api/search")
app.register_blueprint(dashboard_bp, url_prefix="/api/dashboard")

if __name__ == "__main__":
    app.run(debug=True)
