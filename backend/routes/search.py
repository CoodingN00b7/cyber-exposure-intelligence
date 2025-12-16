from flask import Blueprint, request, jsonify
from services.hash_lookup import k_anonymous_lookup
from services.severity_engine import calculate_severity

search_bp = Blueprint("search", __name__)

@search_bp.route("/", methods=["POST"])
def search():
    payload = request.json
    identifier = payload.get("value")

    results = k_anonymous_lookup(identifier, "data/sample_breach_db.json")

    enriched = []
    for r in results:
        r["severity"] = calculate_severity(r)
        enriched.append(r)

    return jsonify(enriched)
