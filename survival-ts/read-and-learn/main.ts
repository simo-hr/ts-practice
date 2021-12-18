// 余剰プロパティチェック (excess property checking)
let onlyX: { x: number };
onlyX = { x: 1 };
// onlyX = { x: 1, y: 2 }; エラー

// 余剰プロパティチェックはリテラルの代入時のみで変数代入時は働かない
// TSが安全性より利便性を優先しているため
const xy: { x: number; y: number } = { x: 1, y: 2 };
onlyX = xy;

// インデックス型 (index signature)
// フィールド名を指定せずに定義する
// Kの部分は任意だが、Kやkeyにするのが慣習
let obj: {
  [K: string]: number;
};
obj = { a: 1, b: 2 }; // OK
obj.c = 4; // OK
obj["d"] = 5; // OK

const obj2: { [K: string]: number } = { a: 1 };
const b: number | undefined = obj2.b;
console.log(b); //=> undefined

// Record<K, T>を用いたインデックス型
// インデックス型はRecord<K, T>ユーティリティ型を用いても表現できます。次の2つの型注釈は同じ意味になります。
let obj3: { [K: string]: number };
let obj4: Record<string, number>;

// オブジェクトの分割代入 (destructuring assignment)
function safari(): Wild {
  return {
    name: "pika",
    no: 1,
    genre: "?",
    height: 30,
    weight: 10,
  };
}
type Wild = {
  name: string;
  no: number;
  genre: string;
  height: number;
  weight: number;
};
const pokemon: Wild = safari();
const { no, genre }: Wild = safari();

console.log(no);

// オプショナルチェーン (optional chaining)
// nullやundefinedのプロパティを誤って参照しないようにしつつ、記述量を抑えられる書き方。
// オプショナルチェーンは?.演算子を用いる
const book = undefined;
const title = book?.title;
console.log(title); // undefined;

const book2 = { title: "サバイバルTypeScript" };
const title2 = book2?.title;
console.log(title2);
("サバイバルTypeScript");

// TypeScriptでオプショナルチェーンを使った場合、得られる値の型は、最後のプロパティの型とundefinedのユニオン型になります。
let book3: undefined | { title3: string };
const title3 = book3?.title3;
// Null合体演算子と組み合わせる
// オプショナルチェーンがundefinedを返したときに、デフォルト値を代入したい場合があります。その際には、Null合体演算子??を用いると便利です。

const book5 = undefined;
const title5 = book5?.title ?? "デフォルトタイトル";
console.log(title); //"デフォルトタイトル"

// for-in文ではhasOwnPropertyを使おう

// どのオブジェクトもhiプロパティが無いことを確認
const foo = { yahoo: 1 };
const date = new Date();
const arr = [1, 2, 3];
console.log(foo.hi, date.hi, arr.hi); // undefined undefined undefined

// プロトタイプにプロパティを追加する
Object.prototype.hi = "Hi!";

// どのオブジェクトもhiプロパティを持つようになる
// console.log(foo.hi, date.hi, arr.hi); Hi! Hi! Hi!

// 配列の型注釈 (type annotation)
// ２つ書き方があるが、どちらで書くかは好み。統一する。
let array1: number[];
array1 = [1, 2, 3];
let array2: Array<number>;
array2 = [1, 2, 3];

// 配列はオブジェクト
// インスタンスが異なると比較してもfalseになる
// lodashのisEqualなどのパッケージを使うのがお勧め。
const list1 = [1, 2, 3];
const list2 = [1, 2, 3];
console.log(list1 == list2); // false

// 配列要素へのアクセス
const abc: string[] = ["a", "b", "c"];
const character: string = abc[0];
console.log(character); //=> undefined
// コンパイル時にはエラーにならず、実行時にエラーになる
character.toUpperCase();
// TypeScriptにこの問題を指摘してもらうようにするには、コンパイラーオプションのnoUncheckedIndexedAccessを有効にする。
// これを有効にすると、たとえば、string[]配列から要素アクセスで得た値の型は、string型もしくはundefined型を意味するstring | undefinedになります。
// string | undefined型のままではtoUpperCaseなどの文字列型のメソッドは呼び出せません。そこで、if文で変数が文字列型だけになるように絞り込みます。すると、文字列型のメソッドを呼び出してもコンパイルエラーで指摘されることがなくなります。
// 絞り込み条件
if (typeof character === "string") {
  character.toUpperCase(); // コンパイルエラーにならない
}
// 配列要素へのアクセスを安全にするために、noUncheckedIndexedAccessを有効にしておくことを推奨します。

// 配列の分割代入 (destructuring assignment)
const oneToFive = [1, 2, 3, 4, 5];
const [one, two, three] = oneToFive;
console.log(one); //=> 1
console.log(two); //=> 2
console.log(three); //=> 3
console.log(six); //=> undefined

// 配列の破壊的操作
// 破壊的なメソッドを安全に使う方法
// 破壊的なメソッドを非破壊的に使うには、破壊的操作を行う前に、配列を別の配列にコピーします。配列のコピーはスプレッド構文...を用います。
const original = [1, 2, 3];
const copy = [...original]; // コピーを作る
copy.reverse();
const reversed = [...original].reverse(); // こっちでも
console.log(original); // 破壊的操作の影響がない
// [ 1, 2, 3 ]
console.log(copy);
// [ 3, 2, 1 ]

// インターセクション型を使いこなす
// 混ざってて見にくい
type Parameter = {
  id: string;
  index?: number;
  active: boolean;
  balance: number;
  photo?: string;
  age?: number;
  // ...
};
// Required<T>, Partial<T>をつけて分割
type Mandatory = Required<{
  id: string;
  active: boolean;
  balance: number;
}>;
type Optional = Partial<{
  index: number;
  photo: string;
  age: number;
}>;

type Parameter2 = Readonly<Mandatory & Optional>;

// インターフェースと型エイリアスの使い分け
// インターフェースは型の宣言であり、型エイリアスは型に名前をつける機能です。この定義に立ち返って使い分けをしましょう。
