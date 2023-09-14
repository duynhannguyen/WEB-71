
import jwt from 'jsonwebtoken'
const authMiddleware = (req, res,next) => {
    const accessToken = req.headers['x-access-token']

    try {
        if(!accessToken){
            return res.status(400).json({
                message: "Missing Token"
            })
        }
        const decoded = jwt.verify(accessToken,process.env.SECRET_KEY)
        next()
    } catch (error) {
        if(error instanceof jwt.TokenExpiredError){
            return res.status(400).json({
                message: 'Token has expired'
            })
        } else {
            return res.status(400).json({
                error: error.message,
                stack: error.stack
            })
        }
    }

}

export default authMiddleware