import os

class Config:
    SECRET_KEY = 'your_secret_key' # 秘密鍵(ランダムに生成した文字列を入れる)
    SQLALCHEMY_DATABASE_URI = os.environ.get('postgresql://ShinYamamoto:%409019192865Ma@localhost:5432/app_physical_beauty')
    SQLALCHEMY_TRACK_MODIFICATIONS = False