const authenticatedmdw = (req, res,next) => {
    let isAuthen = true

    console.log("You are authenticated");

    if(!isAuthen){
        res.status(400).json({
            message: 'You are not authenticated'

        })
    }

    next();
}

export default authenticatedmdw