import staticsticUser from "../datas/staticsticInfor.js"

const staticsticMiddleware = (resourceName, userIndex)  => {
    const resourceCounter = staticsticUser[userIndex][resourceName] + 1
    console.log("stu",resourceCounter);
    staticsticUser[userIndex] = {...staticsticUser[userIndex], [resourceName]: resourceCounter}
    console.log('staUser', staticsticUser);
}

export default staticsticMiddleware
