import hashlib
import json

def sha1_hash(value):
    return hashlib.sha1(value.encode()).hexdigest().upper()

def k_anonymous_lookup(value, db_path):
    hashed = sha1_hash(value)
    prefix = hashed[:5]

    with open(db_path) as f:
        breaches = json.load(f)

    matches = []
    for entry in breaches:
        if entry["hash"].startswith(prefix):
            matches.append(entry)

    return matches
