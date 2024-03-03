// history.js
function showSearchHistory() {
    // クッキーから検索履歴を読み取り表示する
    const history = getCookie('searchHistory');
    if (history) {
        document.getElementById('searchHistory').innerHTML = '<strong>検索履歴:</strong> ' + history;
    }
}
