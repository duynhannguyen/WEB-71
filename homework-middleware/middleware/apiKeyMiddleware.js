import users from '../datas/users.js'

 const apiKeyMiddleware = (req, res, next) => {
    const { apiKey } = req.query;

    if(!apiKey){
        return res.json({
            message: "API key is missing"
        })
    }

     const existingUser = users.find((user) => apiKey === user.apiKey)

     if(!existingUser){
        return res.status(401).json({
            message: "API key is not valid"
        })
     }

     next();

};

export default apiKeyMiddleware;
