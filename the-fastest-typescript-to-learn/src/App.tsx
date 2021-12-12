import React from "react";
import logo from "./logo.svg";
import "./App.css";

// JSONデータの型推論
import Data from "./data.json";
type USERS = typeof Data;

// 明示的に型を決定することをannotationと呼ぶ
// annotationしなくても型推論で方が決定される
// VSCODEの場合はホバーで型推論の結果を確認できる
let username = "Hello";

// 配列の中の値にも型がある
let array1 = [true, false, true];
let array2 = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string;
}

interface NAME2 {
  first: string;
  last?: string;
}

let nameObj: NAME = { first: "Yamada", last: "Taro" };
let nameObj2: NAME2 = { first: "Yamada" };

// 返り値の型を推論してnumberに設定してくれる
const func1 = (x: number, y: number) => {
  return x + y;
};
// 明示的にする場合
const func2 = (x: number, y: number): number => {
  return x + y;
};

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

// Union Types
let value: boolean | number;
value = true;
value = 10;
// value = "hello"

const userA: USER = {
  age: 30,
  city: "Osaka",
  username: "Yamada",
  password: "Taro",
};

let arrayUni: (number | string)[];
arrayUni = [0, 2, "hello"];
// arrayUni = [0, 2, "hello", true];

//
let company: "meta" | "Google" | "Amazon";
company = "Amazon";
// company = "Apple"

// typeof
// json等のデータ構造が複雑な場合でも、typeofを使うことで簡単に型を指定できる
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";
// msg2 = 10;

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

// keyof
// キーをユニオンタイプで取り出してくれる
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";
// key = "third"
type POKEMON = {
  pikachu: string;
  zenigame: string;
};

let pikachu: keyof POKEMON;
pikachu = "pikachu";
pikachu = "zenigame";
// pikachu = "fushigidane";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";
keySports = "baseball";
// keySports = "Baseball"

// enum(列挙型)
enum OS {
  Windows,
  Mac,
  Linux,
}

interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// 型の互換性

// できる
const comp1 = "test";
let comp2: string = comp1;

// できない
// let comp3: string = "test";
// let comp4: "test" = comp3;

// Generics ジェネリックス
// 型をエイリアスにしておき、実際に使用するときに型を指定する
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "hello" };
const gen1: GEN<number> = { item: 12 };
// 型を指定しないとエラー
// cosnt gen1: GEN = {item:"hello"}

// デフォルトの型を指定できる
interface GEN1<T = string> {
  item: T;
}
const gen2: GEN1 = { item: "hello" };

// extendsで使用できる型を指定できる
interface GEN2<T extends string | number> {
  item: T;
}
const gen3: GEN2<string> = { item: "hello" };
const gen4: GEN2<number> = { item: 12 };
// const gen5: GEN2<boolean> = { item: true };

function funcGen<T>(props: T) {
  return { item: props };
}
// 型推論
const gen5 = funcGen("test");
// const gen5 = funcGen<string>("test");
const gen6 = funcGen<string | null>(null);

// 関数のextends
function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen7 = funcGen1("hello");
const gen8 = funcGen1(null);
// const gen9 = funcGen1(10)

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}

const gen10 = funcGen3({ price: 10 });
// const gen11 = funcGen3({ price: "10" });

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
