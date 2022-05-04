const Datastore = require("nedb");
const bcrypt = require("bcrypt");
const saltRounds = 10;
class UserDAO {
  constructor(dbFilePath) {
    this.db = new Datastore({ filename: "users.db", autoload: true });
  }
  // for the demo the password is the bcrypt of the user name
  init() {
    this.db.insert({
      user: "Paul",
      password: "$2a$10$aeAQZ/3ohRsaSrRrAvDbn.SOu94c/sKaDer9Qm67mTLgCl85GH28W",
    });
    return this;
  }
  create(username, password) {
    const that = this;
    bcrypt.hash(password, saltRounds).then(function (hash) {
      var entry = {
        user: username,
        password: hash,
      };
      that.db.insert(entry, function (err) {
        if (err) {
          console.log("Can't insert user: ", username);
        }
      });
    });
  }
  lookup(user, cb) {
    this.db.find({ user: user }, function (err, entries) {
      if (err) {
        return cb(null, null);
      } else {
        if (entries.length == 0) {
          return cb(null, null);
        }
        return cb(null, entries[0]);
      }
    });
  }
}
const dao = new UserDAO();
dao.init();
module.exports = dao;
