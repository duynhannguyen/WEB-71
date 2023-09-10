import users from "../datas/users.js";
import { logInfor } from "../datas/logInfo.js";
const logRequestMiddleware = (req, res, next) => {
  const { apiKey } = req.query;
  
  const userIndex = users.findIndex((user) => user.apiKey === apiKey);
  const inforUser = {
    Name: users[userIndex].username,
    Method: req.method,
    Endpoint: req.path,
    Time: new Date().toString(),
  };
  const logRequest = [...logInfor,inforUser]
  console.log(logRequest);


  next();
};

export default logRequestMiddleware;
