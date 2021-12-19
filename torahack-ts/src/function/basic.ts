export const logMessage = (message: string): void => {
  console.log('Function basic sample 1:', message)
}
export function logMessage2(message: string): void {
  console.log('Function basic sample 2:', message)
}
// 関数式
export const logMessage3 = function (message: string): void {
  console.log('Function basic sample 3:', message)
}
// アロー関数の省略気泡
export const logMessage4 = (message: string) => console.log('Function basic sample 4:', message)

export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

// 呼び出しシグネチャ
type LogMessage = (message: string) => void
export const logMessage5: LogMessage = (message: string) => {
  console.log('Function parameters sample 5:', message)
}

// 完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}
export const logMessage6: FullLogMessage = (message: string) => {
  console.log('Function parameters sample 6:', message)
}
