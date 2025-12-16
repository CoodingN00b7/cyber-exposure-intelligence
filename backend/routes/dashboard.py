from flask import Blueprint, jsonify
import json

dashboard_bp = Blueprint("dashboard", __name__)

@dashboard_bp.route("/stats")
def stats():
    with open("data/sample_breach_db.json") as f:
        data = json.load(f)

    return jsonify({
        "total_breaches": len(data),
        "critical": sum(1 for d in data if d["type"] in ["Aadhaar", "PAN"]),
        "darkweb": sum(1 for d in data if d["source"] == "Dark Web"])
    })
