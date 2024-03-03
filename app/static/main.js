var dishTimeout;
var ingredientTimeout;

function delayedSearchDish() {
    clearTimeout(dishTimeout);
    dishTimeout = setTimeout(function () {
        searchDish();
    }, 3000);
}

function delayedSearchIngredient() {
    clearTimeout(ingredientTimeout);
    ingredientTimeout = setTimeout(function () {
        searchIngredient();
    }, 3000);
}

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

function performDummyAsyncOperation(name) {
    // 仮の非同期処理（ダミーのサーバーレスポンス）
    setTimeout(function () {
        var result = formatResult(name);
        displayResult(result);
    }, 1000); // 1秒後に処理が完了したと仮定
}

function formatResult(name) {
    // 仮の結果整形処理
    var result = `
        <h2>${name}</h2>
        <p>Success</p>
    `;
    return result;
}

function displayResult(result) {
    var resultArea = document.getElementById('resultArea');
    resultArea.innerHTML = result;
}
