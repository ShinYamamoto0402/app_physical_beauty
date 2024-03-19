# 公式の Python 実行環境を親イメージとして使用
FROM python:3.7.6

# 作業ディレクトリを /app に設定
WORKDIR /app

# 現在のディレクトリの内容をコンテナ内の /app にコピー
COPY . /app

# requirements.txt で指定された必要なパッケージをインストール
RUN pip install --no-cache-dir -r requirements.txt

# ポート 5000 をコンテナの外部に公開
EXPOSE 5000

# 環境変数の定義
ENV NAME World

# コンテナが起動したときに app.py を実行
CMD ["python", "app.py"]
