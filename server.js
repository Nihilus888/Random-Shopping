const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

//render home page that is not logged in
app.get('/', (req, res) => {
    res.render('home')
})

//render sign in page 
app.get('/Signin', (req, res) => {
    res.render('Signin')
})

//render sign up page
app.get('/Signup', (req, res) => {
    res.render('Signup')
})

//listening on port
app.listen(port, () => {
    console.log(`Budgtr app listening on port ${port}`)
})