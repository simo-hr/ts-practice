// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

// 基本の定義
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'
// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// 関数の型定義
// import { logMessage, logMessage2, logMessage3, logMessage4, alwaysThrowError } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumPrice } from './function/parameters'
// logMessage('Hello TypeScript!')
// logMessage2('Hello TypeScript!')
// logMessage3('Hello TypeScript!')
// logMessage4('Hello TypeScript!')
// alwaysThrowError('error!')
isUserSignedIn('ABC', 'tora')
isUserSignedIn('DFG')
isUserSignedIn2('ABC')
const sum = sumPrice(100, 200, 300)
console.log('Function parameters sample 5:', sum)
