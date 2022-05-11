export type OptionalKeyOf<T extends object> = {
  [K in keyof T]: T extends Record<K, T[K]> ? never : K
}[keyof T]

type Data = {
  foo: string
  bar?: number
  baz?: boolean
  hoge: undefined
  piyo?: undefined
}

type Sample1 = Data extends Record<'foo', Data['foo']> ? never : 'aiye'
type Sample2 = Record<'foo', Data['foo']>
type Sample3 = Data extends Record<'bar', Data['bar']> ? never : 'aiye'
type Sample4 = Record<'bar', Data['bar']>

// "bar" | "baz" | "piyo"
type OptionalKeyOfData = OptionalKeyOf<Data>
