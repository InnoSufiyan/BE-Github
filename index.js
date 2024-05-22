import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=> {p
    res.send('hello world')
})
app.post('/about', (req, res)=> {
    res.send('hello world')
})

app.listen(4000, ()=> {
    console.log('server chal gaya')
})