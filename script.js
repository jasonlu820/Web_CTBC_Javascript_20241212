console.log("這是外部的 JS");

// 變數 variable (會變的數值)
// 儲存網站內的資料。例如：顏色、字體大小、元素、使用者資料

// 變數語法
// let 變數名稱（指定 預設值）;

// 變數名稱命名規範（守則）：
// 1. 不會使用中文命名
// 2. 不使用數字開頭
// 3. 不使用全形符號＠
// 4. 不會空格 test 1
// 5. 保留字（有作用的關鍵字）if、let

// 建議命名方式（駝峰式命名）：
// 1. 多個單字組成
// 2. 開頭使用小寫
// 3. 單字相連字首用大寫
// 4. 用有意義的名稱命名

let test = 7;
let fontColor = "#f63";

// 取得變數 get
console.log(test);
console.log(fontColor);

// 改定變數 set
test = 9;
console.log(test);

// 資料類型
let varNumber = 1.5;  //數值
let varString = "字串";  // 字串
let varBoolean = true;  //布林值(true, false)

console.log(varNumber);
console.log(varString);
console.log(varBoolean);

// typeof 獲得資料類型
console.log(typeof varNumber);
console.log(typeof varString);
console.log(typeof varBoolean);

// 運算子
// 加減乘除餘次方
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);  // 10除以3 = 3餘1
console.log(10 ** 3);  // 10的3次方

// 指定運算子 (指定符號=)
// 1+2=3 數學內的等號，左右兩邊一定相等，由左至右執行
// = 指定，左右兩邊不一定相等，由右至左執行

let numberTest = 99 + 1;
console.log(numberTest);

numberTest++;
console.log(numberTest);

numberTest--;
console.log(numberTest);

numberTest += 10;          // 適用於 +-*/%
console.log(numberTest);

numberTest -= 10;
console.log(numberTest);

// %c 可以在後面指定顏色(與css)
console.log("%c比較運算子", "color: gold");

// > < >= <= === !== （執行結果是布林值）
console.log(100 > 1);
console.log(100 < 1);
console.log(100 === 1);  // 等於 F
console.log(100 !== 1);  // 不等於 T

// == 與 === （嚴格比較，數值與類型都要相同）
let varNumber10 = 10;
let varString10 = "10";

console.log(varNumber10 == varString10);
console.log(varNumber10 === varString10);  // 嚴格比較，資料類型不同，結果為 false

console.log("%c判斷式", "color: gold");
// 判斷式語法
// if (boolean) {布林值為 true 執行此區塊 block}
if (true) {
    console.log("這裡是判斷式");
}

let score = 0;

// if 要在最上方
// else if 無限次數
// else 要在最下方

if (score >= 60) {
    console.log("你及格了");
} 
else if (score >= 50) {
    console.log("來補考");
} 
else {
    console.log("你被當了");
}

let hp = 70;
if (hp <= 0) {
    console.log("死亡");
}
else if (hp <= 60) {
    console.log("警告");
}
else {
    console.log("安全");
}

let hpTest = 70;
// && 並且
// 如果 hpTest 小於等於 100 並且 hpTest 大於等於 60 就代表安全
if (hpTest <= 100 && hpTest >= 60) {
    console.log("安全");
}
else if (hpTest <= 60 && hpTest > 0) {
    console.log("警告");
}
else {
    console.log("死亡");
}

console.log("%c迴圈", "color: gold");
// for 迴圈
// for 語法：
// for (初始值; 條件; 迭代器) { 程式區塊 }
for (let index = 0; index < 10; index++) {
    console.log("迴圈", index);
}

// 變數 let 
let letCount = 1;
letCount = 2;
letCount = 3;
// 常數 const（不可變的數值）
const constCount = 1;
// constCount = 2;        // 產生錯誤，原因：常數不可改變

// 不可重新定義
// let letCount = 10;        // 產生錯誤，原因： 重複宣告
// const constCount = 10;    // 產生錯誤，原因： 重複宣告

// 常數命名習慣會使用全大寫並使用底線區隔
const PI = 3.14;
const WEB_FONT_SIZE = 24;

// 常數 var (variable)
var varCount = 1;
varCount = 123;        // 可重新賦予值
var varCount = 3;      // 可重新定義（不建議）
console.log(varCount);

// 作用域 Scope {}
// let 與 const 的作用域都在 {} 區塊內
{
    let letTest = 1;
    const constTest = 1;
    var varTest = 1;
    console.log("let:", letTest);
    console.log("const:", constTest);
    console.log("var:", varTest);
}

// console.log("let:", letTest);        // 錯誤：超出作用域
// console.log("const:", constTest);    // 錯誤：超出作用域
console.log("var:", varTest);

console.log("%cfunction 函式、方法或功能", "color: gold");
// 函式語法

// function 函式名稱 () { }
function logLine() {
    console.log("%c----我是分隔線----", "color: gold");
}

// 函式需要被呼叫：函式名稱();
logLine();
logLine();
logLine();
logLine();
logLine();