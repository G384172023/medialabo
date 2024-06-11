// APIのエンドポイント
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// ユーザーリストを表示する要素
const userList = document.getElementById('user-list');

// Fetch APIを使用してデータを取得
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTPエラー！ステータスコード: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
         // データを取得して表示
        userList.innerHTML = ''; // ローディングメッセージを削除
        data.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `ユーザー名: ${user.username}, メール: ${user.email}`;
            userList.appendChild(listItem);
        });
    })
    .catch(error => {
        // エラーハンドリング
        console.error('データの取得中にエラーが発生しました:', error);
        userList.innerHTML = 'データの取得中にエラーが発生しました。';
    });
