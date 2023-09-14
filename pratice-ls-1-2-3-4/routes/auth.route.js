import express from 'express'
import jwt from 'jsonwebtoken'
import {v4 as uuidv4} from 'uuid'
const router = express.Router()

const userMockData = [
    {
      id: '1',
      email: 'alice@gmail.com',
      password: 'alice@123',
      fullname: 'Alice H',
    },
    {
      id: '2',
      email: 'bob@gmail.com',
      password: 'bob@123',
      fullname: 'Bobby',
    },
    {
      id: '3',
      email: 'charlie@gmail.com',
      password: 'charlie@123',
      fullname: 'Charlie Put',
    },
  ];

router.post('/login', (req,res) => {
    const {email, password} = req.body || {}

    if(!(email && password)){
        return res.status(400).json({
            message: 'Missing required key'
        })
    }

    const exitstingUser = userMockData.find((user) => user.email === email && user.password === password )

    if(!exitstingUser){
        return res.status(400).json({
            message: 'Email or password is not correct'
        })
    }

    const payload = {
        id:exitstingUser.id,
        email: exitstingUser.email,
        fullname: exitstingUser.fullname
    }

    const token = jwt.sign(payload,process.env.SECRET_KEY,{
        expiresIn: process.env.EXPIRED_TIME
    })

    res.json({
        accessToken: token,
        message: 'Login successfully'
    })
})

router.post('/signup', (req, res) =>{
    const {email, password, fullname} = req.body || {}

    if(!(email && password && fullname)){
        return res.status(400).json({
            message: "Missing required key"
        })
    }

    const exitstingUser = userMockData.find((user) => user.email === email)

    if(exitstingUser){
        return res.json({
            message: "Email already taken"
        })
    }

    userMockData.push({
        id: uuidv4(),
        email,
        password,
        fullname,
    })

    res.json({
        message: 'Sign up successfully',
        data: userMockData
    })



})

export default router