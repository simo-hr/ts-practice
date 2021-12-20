import express from 'express'
import router from './routes/index'

const app = express()
// JSONオブジェクトの受信設定
app.use(express.json())
// 配列側のオブジェクトの受信設定
app.use(express.urlencoded({ extended: true }))
app.use('/', router)
const port = process.env.PORT || '8000'
app.listen(port)
console.log('Express WebApi listening on port ' + port)
