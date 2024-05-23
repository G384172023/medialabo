let kotae=Math.floor(Math.random()*10)+1;
console.log('答え(デバック用) : '+kotae);

let kaisu=0;

hantei();

function hantei(){
    let yoso=4;
    for(let i=1;i<3;i++){
        console.log(i+'回目の予想: '+yoso);
        if(kotae==yoso && i==2){
            console.log('答えは '+kotae+' でした.すでにゲームは終わっています');
        }
        if(kotae==yoso && i==1){
            console.log('正解です.おめでとう!');
        }else if(kotae>yoso){
            console.log('まちがい、答えはもっと大きいですよ');
        }else if(kotae<yoso){
            console.log('まちがい、答えはもっと小さいですよ');
        }

    }
    console.log('3回目の予想: '+yoso);
    if(kotae==yoso){
        console.log('答えは '+kotae+' でした.すでにゲームは終わっています');
    }else{
        console.log('まちがい、残念でした答えは '+kotae+' です.');
    }
    for(let i=4;i<10;i++){
        console.log(i+'回目の予想: '+yoso);
        console.log('答えは '+kotae+' でした.すでにゲームは終わっています');
    }
}




