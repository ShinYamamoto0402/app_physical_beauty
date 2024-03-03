// search.js
function searchDish() {
    var dishName = document.getElementById('dishInput').value;
    // 仮の非同期処理（ダミーのサーバーレスポンス）
    performDummyAsyncOperation(dishName);
}

function searchIngredient() {
    var ingredientName = document.getElementById('ingredientInput').value;
    // 仮の非同期処理（ダミーのサーバーレスポンス）
    performDummyAsyncOperation(ingredientName);
}

// main.js
// ... その他の関数や変数の定義

function performDummyAsyncOperation(name) {
    // 仮の非同期処理（ダミーのサーバーレスポンス）
    setTimeout(function () {
        var result = formatResult(name);
        displayResult(result);
    }, 1000); // 1秒後に処理が完了したと仮定
}

// ... その他の関数や変数の定義
