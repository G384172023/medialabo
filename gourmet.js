let b = document.querySelector('#print');
b.addEventListener('click', print);

function print() {
  let resultDiv = document.querySelector('div#result');
  resultDiv.innerHTML = '';

  let g = document.querySelector('select#genre');
  let idx = g.selectedIndex;
  let os = g.querySelectorAll('option');
  let o = os.item(idx);

  console.log('検索キー: ' + o.textContent);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/G0' + o.getAttribute('value') + '.json';

  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  let div = document.querySelector('div#result');

  let resultCount = data.results.shop.length;
  let resultCountMessage = document.createElement('h3');
  resultCountMessage.textContent = `検索結果: ${resultCount}件ヒットしました。`;
  div.appendChild(resultCountMessage);

  data.results.shop.forEach((shop, index) => {
    let h = document.createElement('h3');
    h.textContent = `検索結果${index + 1}件目`;
    div.appendChild(h);

    let ul = document.createElement('ul');

    let li1 = document.createElement('li');
    li1.setAttribute('id', 'name');
    let li2 = document.createElement('li');
    li2.setAttribute('id', 'access');
    let li3 = document.createElement('li');
    li3.setAttribute('id', 'address');
    let li4 = document.createElement('li');
    li4.setAttribute('id', 'budget');
    let li5 = document.createElement('li');
    li5.setAttribute('id', 'catch');
    let li6 = document.createElement('li');
    li6.setAttribute('id', 'genre');
    let li7 = document.createElement('li');
    li7.setAttribute('id', 'open');
    let li8 = document.createElement('li');
    li8.setAttribute('id', 'station');
    let li9 = document.createElement('li');
    li9.setAttribute('id', 'sub-genre');

    li1.textContent = "名前: " + shop.name;
    li2.textContent = "アクセス: " + shop.access;
    li3.textContent = "住所: " + shop.address;
    li4.textContent = "予算: " + shop.budget.name;
    li5.textContent = "キャッチコピー: " + shop.catch;
    li6.textContent = "ジャンル: " + shop.genre.name;
    li7.textContent = "営業時間: " + shop.open;
    li8.textContent = "最寄駅: " + shop.station_name;
    li9.textContent = "サブジャンル: " + (shop.sub_genre ? shop.sub_genre.name : 'なし');

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);
    ul.appendChild(li8);
    ul.appendChild(li9);

    div.appendChild(ul);
  });
}

function showError(err) {
  console.log(err);
}

function finish() {
  console.log('検索が終了しました。');
}
