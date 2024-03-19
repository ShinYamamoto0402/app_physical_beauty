from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)

class Nutrient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    dish_name = db.Column(db.String(120), nullable=False)
    carbs = db.Column(db.Integer, nullable=False)
    protein = db.Column(db.Integer, nullable=False)
    fat = db.Column(db.Integer, nullable=False)
    vitamins = db.Column(db.Integer, nullable=False)
    minerals = db.Column(db.Integer, nullable=False)
    registration_date = db.Column(db.DateTime, nullable=False)
    update_date = db.Column(db.DateTime, nullable=False)
