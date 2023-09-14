import express from 'express'
import jwt from 'jsonwebtoken';
const router = express.Router();

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

router.post('/login', (req, res) => {
    const {email, password} = req.body

    if(!(email && password)){
        return res.json({
            message: 'Missing required key'
        })        
    }

    const existingUser = userMockData.find((user) => user.email === email && user.password === password)

    if(!existingUser){
        return res.json({
            message: "Email or password is not correct"
        })
    }
    
    const payload = {
      id: existingUser.id,
      email: existingUser.email,
      fullname: existingUser.fullname
    }


    const token = jwt.sign(payload,process.env.SECRET_KEY,{
      expiresIn:  process.env.JWT_EXPIRED_TIME
    })

    console.log('body', req.body);
    res.json({
        message:'Login successfully',
        accessToken: token
    })
})

router.post('/signup', (req, res) => {
    
})

export default router       