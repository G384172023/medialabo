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
  console.log(url);

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

  if (!data.results.shop || data.results.shop.length === 0) {
    console.log("該当するデータがありません。");
    let div = document.querySelector('div#result');
    let p = document.createElement('p');
    p.textContent = "該当するデータがありません。";
    div.appendChild(p);
    return;
  }

  let h1 = document.createElement('h3');
  h1.textContent = '検索結果1件目';

  let div = document.querySelector('div#result');

  let shop1 = data.results.shop[0];
  console.log("名前:" + shop1.name);
  console.log("アクセス:" + shop1.access);
  console.log("住所:" + shop1.address);
  console.log("予算:" + shop1.budget.name);
  console.log("キャッチコピー:" + shop1.catch);
  console.log("ジャンル:" + shop1.genre.name);
  console.log("営業時間:" + shop1.open);
  console.log("最寄駅:" + shop1.station_name);
  console.log("サブジャンル:" + (shop1.sub_genre ? shop1.sub_genre.name : "なし"));

  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');
  let p5 = document.createElement('p');
  let p6 = document.createElement('p');
  let p7 = document.createElement('p');
  let p8 = document.createElement('p');
  let p9 = document.createElement('p');

  p1.textContent = "名前: " + shop1.name;
  p2.textContent = "アクセス: " + shop1.access;
  p3.textContent = "住所: " + shop1.address;
  p4.textContent = "予算: " + shop1.budget.name;
  p5.textContent = "キャッチコピー: " + shop1.catch;
  p6.textContent = "ジャンル: " + shop1.genre.name;
  p7.textContent = "営業時間: " + shop1.open;
  p8.textContent = "最寄駅: " + shop1.station_name;
  p9.textContent = "サブジャンル: " + (shop1.sub_genre ? shop1.sub_genre.name : "なし");

  div.insertAdjacentElement('beforeend', h1);
  h1.insertAdjacentElement('afterend', p1);
  p1.insertAdjacentElement('afterend', p2);
  p2.insertAdjacentElement('afterend', p3);
  p3.insertAdjacentElement('afterend', p4);
  p4.insertAdjacentElement('afterend', p5);
  p5.insertAdjacentElement('afterend', p6);
  p6.insertAdjacentElement('afterend', p7);
  p7.insertAdjacentElement('afterend', p8);
  p8.insertAdjacentElement('afterend', p9);

  if (data.results.shop.length > 1) {
    let h2 = document.createElement('h3');
    h2.textContent = '検索結果2件目';

    let shop2 = data.results.shop[1];
    console.log("名前:" + shop2.name);
    console.log("アクセス:" + shop2.access);
    console.log("住所:" + shop2.address);
    console.log("予算:" + shop2.budget.name);
    console.log("キャッチコピー:" + shop2.catch);
    console.log("ジャンル:" + shop2.genre.name);
    console.log("営業時間:" + shop2.open);
    console.log("最寄駅:" + shop2.station_name);
    console.log("サブジャンル:" + (shop2.sub_genre ? shop2.sub_genre.name : "なし"));

    let p11 = document.createElement('p');
    let p12 = document.createElement('p');
    let p13 = document.createElement('p');
    let p14 = document.createElement('p');
    let p15 = document.createElement('p');
    let p16 = document.createElement('p');
    let p17 = document.createElement('p');
    let p18 = document.createElement('p');
    let p19 = document.createElement('p');

    p11.textContent = "名前: " + shop2.name;
    p12.textContent = "アクセス: " + shop2.access;
    p13.textContent = "住所: " + shop2.address;
    p14.textContent = "予算: " + shop2.budget.name;
    p15.textContent = "キャッチコピー: " + shop2.catch;
    p16.textContent = "ジャンル: " + shop2.genre.name;
    p17.textContent = "営業時間: " + shop2.open;
    p18.textContent = "最寄駅: " + shop2.station_name;
    p19.textContent = "サブジャンル: " + (shop2.sub_genre ? shop2.sub_genre.name : "なし");

    p9.insertAdjacentElement('afterend', h2);
    h2.insertAdjacentElement('afterend', p11);
    p11.insertAdjacentElement('afterend', p12);
    p12.insertAdjacentElement('afterend', p13);
    p13.insertAdjacentElement('afterend', p14);
    p14.insertAdjacentElement('afterend', p15);
    p15.insertAdjacentElement('afterend', p16);
    p16.insertAdjacentElement('afterend', p17);
    p17.insertAdjacentElement('afterend', p18);
    p18.insertAdjacentElement('afterend', p19);
  }
}

function showError(err) {
  console.log(err);
  let div = document.querySelector('div#result');
  let p = document.createElement('p');
  p.textContent = "エラーが発生しました。";
  div.appendChild(p);
}

function finish() {
  console.log('検索完了');
}
