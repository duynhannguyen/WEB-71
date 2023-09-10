import users from "./users.js";

const staticsticUser = users.map((user) => ({
    user: user.username,
    student: 0,
    teacher: 0,
    subject: 0,
}))
console.log(staticsticUser);

export default staticsticUser;