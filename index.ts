const objects = {
  fruits: [
    { key: 'apple', value: 'りんご' },
    { key: 'orange', value: 'オレンジ' },
    { key: 'grape', value: 'ぶどう' },
  ],
  animals: [
    { key: 'dog', value: '犬' },
    { key: 'cat', value: '猫' },
    { key: 'bird', value: '鳥' },
  ],
} as const

// type ObjectKey<T extends string> = { [K in T]: K }
// type Fruits = { [K in typeof objects.fruits[number]['key']]: K }
// type Animals = { [K in typeof objects.animals[number]['key']]: K }

// type Hoge = ObjectKey<'hoge'>

// type ObjectKey<T extends Readonly<Array<{ key: string; value: string }>>> = { [K in T[number]['key']]: K }
type ObjectKey<T extends Readonly<Array<{ key: string; value: string }>>> = { [K in T[number]['key']]: K }
type Fruits = ObjectKey<typeof objects.fruits>
// type Animals = ObjectKey<typeof objects.animals>
// type Hoge = ObjectKey<'hoge'>

/*
type Fruits = {
  apple: "apple";
  orange: "orange";
  grape: "grape";
}
*/
