export default function objectSample() {
  const a: object = {
    name: 'tora',
    age: 28,
  }
  // a.name // エラー
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object object sample 1', country)

  country = {
    language: 'English',
    name: 'US',
  }
  console.log('Object object sample 2', country)

  //  オプショナルとreadonly
  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'Yamada',
    firstName: 'Taro',
  }
  torahack.gender = 'male'
  torahack.lastName = 'Kamado'
  // torahack.firstName = 'Tanjiro' // エラー
  console.log('Object object sample 3', torahack)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    japan: 'Tokyo',
    korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'
  console.log('Object object sample 4', capitals)
}
