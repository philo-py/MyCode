process.stdin.resume();
process.stdin.setEncoding('utf8');

let hp = 50;
while (hp > 0) {
    let damage = Math.floor(Math.random() * 10);
    console.log("ゴブリンに" + damage + "のダメージを与えた！");
    hp -= damage;
}
console.log("ゴブリンを倒したよ！");