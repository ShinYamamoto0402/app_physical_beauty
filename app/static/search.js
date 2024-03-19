document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", function () {
        var dishInputValue = document.getElementById("dishInput").value;
        var error = document.getElementById("error");
        var exceptionError = document.getElementById("exceptionError");

        if (dishInputValue.trim() === "") {
            error.innerText = "料理名または食材名を入力してください。";
            exceptionError.innerText = "";
            return;
        }

        error.innerText = "";

        var requestData = "・日本語でレスポンスをしてください。\n・" + dishInputValue + " 100gあたりのカロリーとたんぱく質量を教えてください。小数点第一位までお願いします。\n・" + dishInputValue + " は料理名または食材名でしょうか？もし違うのであれば下記テンプレートを無視して「exceptionError」と文字列をだけを返して処理を中断してください（それ以外の文言は一切付け加えないこと）。\n・下記テンプレートに当てはめてjson形式でレスポンスをしてください。\n{\n  \"" + dishInputValue + "\": {\n    \"カロリー\": \"kal\",\n    \"たんぱく質\": \"g\"\n  }\n}";

        // GPT3.5からのレスポンス結果
        var result = "exceptionError";

        if (result === "exceptionError") {
            exceptionError.innerText = "料理名または食材名が間違っています。";
            return;
        }
    });

    document.getElementById("dishInput").addEventListener("click", function () {
        document.getElementById("error").innerText = "";
        document.getElementById("exceptionError").innerText = "";
    });
});
