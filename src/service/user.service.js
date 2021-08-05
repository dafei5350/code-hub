const connection = require('../app/database')


class UserService {
  async create(user) {
    const { name, password } = user;
    const statement =  `INSERT INTO users (name, password) VALUES(?, ?);`;
    const result = await connection.execute(statement, [name, password])
    console.log(user,"123123");
    return result[0]
  }

  
  async getUserByName(name) {
    const statement = `SELECT * FROM users WHARE name = ?;`
    const result = await connection.execute(statement, [name])

    return result[0]
  }

}

module.exports = new UserService();