# フィジカルビューティー

## プロジェクト概要
このプロジェクトは、ユーザーが料理名や食材名を入力し、それを基にLLM(ELYZA-japanese-Llama-2-7b/13b)を使用して栄養素に関する情報を取得し、整形してユーザーに返すものです。

## コンポーネント(Web/Mobile App)
ユーザーが料理名や食材名を入力するためのUIを提供。
サーバーにリクエストを送信し、応答を表示する。

## サーバーサイド (Flask)
フロントエンドからのリクエストを受け取り、テンプレートに当てはめて整形。
LLMにリクエストを送り、結果を整形してフロントエンドに返す。
MySQLデータベースにアクセスして必要なデータを取得。

## 言語AIモデル(ELYZA-japanese-Llama-2-7b/13b)
テキスト生成により、栄養素に関する情報を推論。

## 通信
フロントエンドとサーバーサイドの通信はRESTful APIを使用。
サーバーサイドとAI言語モデルの通信もRESTful APIまたはモデルの提供元の指定に従う。
サーバーサイドとMySQLデータベースの通信はSQLクエリを使用。

## データフロー
ユーザーがフロントエンドで料理名や食材名を入力。
フロントエンドがサーバーサイドにリクエストを送信。
サーバーサイドがリクエストを整形し、LLMにリクエストを送信。
LLMが結果を生成し、サーバーサイドが受け取り整形。
サーバーサイドがMySQLデータベースにアクセスして必要なデータを取得。
サーバーサイドが整形された結果をフロントエンドに返信。
フロントエンドが結果を表示。

## データベース
MySQLデータベースを使用して、栄養素に関するデータを格納。

## セキュリティ
HTTPSを使用して通信を暗号化。
入力データの検証とエスケープを行い、セキュリティ対策を施す。

## ディレクトリ構成
app_physical_beauty/  
|-- app/  
|　　|-- static/　静的ファイル (CSS, JavaScript, 画像)  
|　　|-- templates/　テンプレートファイル (HTML)  
|　　|-- __init__.py　アプリケーションの初期化  
|　　|-- routes.py　ルートやビューロジック  
|　　|-- models.py　データモデル  
|-- venv/　仮想環境  
|-- requirements.txt　依存ライブラリ  
|-- config.py　アプリケーションの設定  
|-- run.py　アプリケーションを実行するためのエントリポイント  

## 環境構築
pythinをインストール
version 3.7.6

プロジェクトのディレクトリに移動し、仮想環境を作成
python -m venv venv

仮想環境をアクティベート
source venv/bin/activate

Flaskのインストール
pip install Flask

MySQL用のFlask拡張モジュールのインストール
pip install flask-mysql

LLMとの通信に使用するライブラリのインストール
pip install requests

MySQLドライバのインストール
pip install pymysql

MySQLのインストール
Server version: 8.3.0 MySQL
ユーザー名　ShinYamamoto
パスワード　@9019192865



pip install Flask-SQLAlchemy
pip install Flask-Migrate
pip install --upgrade Flask Flask-Migrate
flask db init
flask db upgrade
python -m pip install --upgrade pip
pip install cryptography
