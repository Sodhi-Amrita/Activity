require('dotenv').config()

const username = process.env.USER_NAME;
const password = process.env.PASS_WORD;
module.exports = {
    mongoDBUrl: `mongodb+srv://${username}:${password}@cluster0.ke9tebn.mongodb.net/User?retryWrites=true&w=majority`
}
