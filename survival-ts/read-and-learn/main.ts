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
