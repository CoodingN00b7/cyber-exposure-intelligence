def calculate_severity(breach):
    score = 0

    if breach["type"] in ["Aadhaar", "PAN"]:
        score += 5
    if breach["source"] == "Dark Web":
        score += 3
    if breach["recency_days"] < 30:
        score += 2

    if score >= 8:
        return "Critical"
    elif score >= 5:
        return "High"
    elif score >= 3:
        return "Medium"
    else:
        return "Low"
