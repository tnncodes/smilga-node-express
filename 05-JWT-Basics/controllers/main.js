const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
  const {username, password} = req.body

  if(!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400)
  }

  // just for demo, normally provided by DB
  const id = new Date().getDate()

  // try to keep payload small, better experience for user
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {expiresIn: '30d'})

  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
  console.log(req.headers)

  const luckNumber = Math.floor(Math.random()*100)
  res.status(200).json({msg: `Hello, John Doe`, secret: `Here is your authorized data, your luck number is ${luckNumber}`})
}

module.exports = {
  login,
  dashboard
}