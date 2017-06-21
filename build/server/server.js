(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _updateCreationDates = __webpack_require__(4);

var _updateCreationDates2 = _interopRequireDefault(_updateCreationDates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let userSchema = new _mongoose2.default.Schema({
  person: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Person' },
  password: { type: String, require: [true, 'Password is required'] },
  role: { type: String, enum: ['person', 'manager', 'user', 'admin'], default: 'person' },
  manager: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'User' },
  active: { type: Boolean, default: false },
  lastLogin: { type: Date }
});

userSchema.plugin(_updateCreationDates2.default);

let UserModel = _mongoose2.default.model('User', userSchema);

exports.default = UserModel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

let updateCreationDates = (schema, options) => {
  schema.add({ createdOn: { type: Date, default: Date.now } });
  schema.add({ updatedOn: { type: Date } });
};

exports.default = updateCreationDates;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _updateCreationDates = __webpack_require__(4);

var _updateCreationDates2 = _interopRequireDefault(_updateCreationDates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let personSchema = new _mongoose2.default.Schema({
  firstName: { type: String, require: [true, 'Name is required'] },
  middleName: { type: String, require: [false] },
  lastName: { type: String, require: [true, 'Last Name is required'] },
  userName: { type: String, index: true, unique: true, require: [true, 'User Name is required'] },
  phone: { type: String, require: [true, 'Phone number is required'], min: 10, max: 10 },
  email: { type: String, require: [true, 'Phone number is required'] },
  observations: { type: String, max: 100 },
  decision: { type: String, enum: ['granted', 'denied', 'pending'] }
});

personSchema.plugin(_updateCreationDates2.default);

let PersonModel = _mongoose2.default.model('Person', personSchema);

exports.default = PersonModel;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(9);

var _config2 = _interopRequireDefault(_config);

var _bodyParser = __webpack_require__(10);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = __webpack_require__(11);

var _morgan2 = _interopRequireDefault(_morgan);

var _path = __webpack_require__(12);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(13);

var _fs2 = _interopRequireDefault(_fs);

var _noTokenRoutes = __webpack_require__(14);

var _noTokenRoutes2 = _interopRequireDefault(_noTokenRoutes);

var _tokenRoutes = __webpack_require__(18);

var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);

var _spdy = __webpack_require__(21);

var _spdy2 = _interopRequireDefault(_spdy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 3005;
const app = (0, _express2.default)();
let cache = {};
cache['index'] = _fs2.default.readFileSync(_path2.default.join(_path2.default.resolve(process.cwd()), '/src/app/view/index.html'));

app.set('cache', cache);

app.use(_express2.default.static(`${_path2.default.resolve(process.cwd())}/build/static`));
/*app.set('views', path.join(path.resolve(process.cwd()), 'build/views'));
app.set('view engine', 'html');*/

console.log(_path2.default.join(_path2.default.resolve(process.cwd()), 'build/views'));
console.log(`${_path2.default.resolve(process.cwd())}/static`);

_fs2.default.readFile(`${_path2.default.resolve(process.cwd())}/key/private.rsa`, (err, data) => {
  if (err) throw err;
  app.set('privateKey', data);
});

_fs2.default.readFile(`${_path2.default.resolve(process.cwd())}/key/public.rsa`, (err, data) => {
  if (err) throw err;
  app.set('publicKey', data);
});

const serverOpts = {
  key: _fs2.default.readFileSync(`${_path2.default.resolve(process.cwd())}/key/server.key`),
  cert: _fs2.default.readFileSync(`${_path2.default.resolve(process.cwd())}/key/server.crt`)
};

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.createConnection(_config2.default.database(process.env.USERDB, process.env.PASSWDDB));

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use((0, _morgan2.default)('dev')); // use env: process.env.ENV=dev

/*  ******************************************** */
/* Routes with no token validation */
(0, _noTokenRoutes2.default)(app);

/*  ******************************************** */
/* Routes with token validation */
// protecting routes, allowed only for token provided
(0, _tokenRoutes2.default)(app);
/*  ******************************************** */

_spdy2.default.createServer(serverOpts, app).listen(PORT, err => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Listen server https://localhost:${PORT}`);
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const config = {
  'secret': 'siso-app-geolocation',
  'database': (user, password) => `mongodb://${user}:${password}@ds143231.mlab.com:43231/siso`
};

exports.default = config;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authenticate = __webpack_require__(15);

var _authenticate2 = _interopRequireDefault(_authenticate);

var _requestAccess = __webpack_require__(16);

var _requestAccess2 = _interopRequireDefault(_requestAccess);

var _home = __webpack_require__(17);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let noTokenRoutes = app => {
  app.use('/', _home2.default);
  app.use('/auth', _authenticate2.default);
  app.use('/reqAccess', _requestAccess2.default);
};

exports.default = noTokenRoutes;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _user = __webpack_require__(3);

var _user2 = _interopRequireDefault(_user);

var _person = __webpack_require__(5);

var _person2 = _interopRequireDefault(_person);

var _httpStatusCodes = __webpack_require__(1);

var _jsonwebtoken = __webpack_require__(6);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _crypto = __webpack_require__(7);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let auth = _express2.default.Router();

auth.post("/", (req, res) => {
  res.set('Content-type', 'application/json');
  if (!req.body.userName) {
    res.statusCode = _httpStatusCodes.BAD_REQUEST;
    res.json({ err: 'You need send username' });
  }

  if (!req.body.password) {
    res.statusCode = _httpStatusCodes.BAD_REQUEST;
    res.json({ err: 'You need send password' });
  }

  //console.log(cryto.createHash('md5').update(req.body.password).digest('hex'));

  _user2.default.findOne({
    password: _crypto2.default.createHash('md5').update(req.body.password).digest('hex')
  }, 'person manager active role').populate({
    path: 'manager',
    select: 'person',
    populate: {
      path: 'person',
      select: 'firstName middleName lastName'
    }
  }).populate({
    path: 'person',
    select: 'firstName middleName lastName userName phone email',
    match: { userName: req.body.userName }
  }).then(user => {

    if (!user) {
      res.statusCode = _httpStatusCodes.UNAUTHORIZED;
      res.json({ message: 'Authentication failed. User not found.' });
    } else if (user) {
      //console.log(user);
      _jsonwebtoken2.default.sign(user, req.app.get('privateKey'), {
        expiresIn: 1440, // 24 hrs
        algorithm: 'RS256',
        issuer: 'MyCompany'
      }, (err, token) => {
        if (err) {
          res.statusCode = _httpStatusCodes.UNAUTHORIZED;
          res.json({
            err: err.message
          });
        }

        res.statusCode = _httpStatusCodes.ACCEPTED;
        res.json({
          token: token,
          user: {
            name: `${user.person.lastName}, ${user.person.firstName}${user.person.middleName ? ' ' + user.person.middleName : ''}`,
            manager: `${user.manager.person.lastName}, ${user.manager.person.firstName}${user.manager.person.middleName ? ' ' + user.manager.person.middleName : ''}`
          }
        });
      });
    }
  }).catch(err => {
    res.statusCode = _httpStatusCodes.INTERNAL_SERVER_ERROR;
    res.json({
      err: err.message
    });
  });
});

exports.default = auth;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _person = __webpack_require__(5);

var _person2 = _interopRequireDefault(_person);

var _httpStatusCodes = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let personAccess = _express2.default.Router();

personAccess.post('/', (req, res) => {
  res.set('Content-Type', 'application/json');
  console.log('What do I have: ', req.accepts('json'));
  if (!req.accepts('json')) {
    res.statusCode = _httpStatusCodes.BAD_REQUEST;
    return res.json({ err: 'The format received is not json' });
  }

  let person = new _person2.default({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    phone: req.body.phone,
    email: req.body.email,
    observations: req.body.observations
  });

  person.save().then(() => {
    res.statusCode = _httpStatusCodes.CREATED;
    res.json({ message: 'Person was created.' });
  }).catch(err => {
    res.statusCode = _httpStatusCodes.BAD_REQUEST;
    return res.json({ err: err.message });
  });
});

exports.default = personAccess;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let home = _express2.default.Router();

home.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  //res.statusCode = 200;
  console.log('Before rendering');
  res.send(req.app.get('cache')['index']);
});

exports.default = home;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _verifyToken = __webpack_require__(19);

var _verifyToken2 = _interopRequireDefault(_verifyToken);

var _users = __webpack_require__(20);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let tokenRoutes = app => {
  app.use('/api', _verifyToken2.default);
  app.use('/api/users', _users2.default);
};

exports.default = tokenRoutes;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = __webpack_require__(6);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _httpStatusCodes = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  res.set('Content-type', 'application/json');
  if (token) {
    _jsonwebtoken2.default.verify(token, req.app.get('publicKey'), {
      algorithms: ['RS256'],
      ignoreExpiration: true
    }, (err, decoded) => {
      if (err) {
        res.statusCode = _httpStatusCodes.UNAUTHORIZED;
        return res.json({ err: err.message });
      }

      req.userinfo = decoded._doc;
      next();
    });
  } else {
    return res.status(_httpStatusCodes.FORBIDDEN).send({
      message: 'No token provided'
    });
  }
}

exports.default = verifyToken;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _user = __webpack_require__(3);

var _user2 = _interopRequireDefault(_user);

var _crypto = __webpack_require__(7);

var _crypto2 = _interopRequireDefault(_crypto);

var _httpStatusCodes = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let users = _express2.default.Router();

if (!_user2.default.schema.options.toObject) _user2.default.schema.options.toObject = {};
_user2.default.schema.options.toObject.transform = (doc, ret, options) => {
  delete ret.password;
  return ret;
};

users.get("/", (req, res) => {
  res.set('Content-Type', 'application/json');
  _user2.default.find({ active: true }, 'id person role manager'). //{password: 0}
  populate('person', 'middleName lastName userName phone email observations').populate({
    path: 'manager',
    select: { password: 0 },
    populate: {
      path: 'person',
      select: 'firstName middleName lastName'
    }
  }).then(users => {
    res.statusCode = _httpStatusCodes.OK;
    res.json(users);
  }).catch(err => {
    res.statusCode = _httpStatusCodes.BAD_REQUEST;
    res.json({ err: err.message });
  });
});

users.get("/:id", (req, res) => {

  res.set('Content-Type', 'application/json');
  _user2.default.findById(req.params.id, 'person role manager'). //{password: 0}
  populate('person', 'firstName middleName lastName userName phone email').populate({
    path: 'manager',
    select: 'person',
    populate: {
      path: 'person',
      select: 'firstName middleName lastName phone'
    }
  }).then(user => {

    res.statusCode = _httpStatusCodes.OK;
    res.json(user);
  }).catch(err => {
    res.statusCode = _httpStatusCodes.BAD_REQUEST;
    return res.json({ err: err.message });
  });
});

users.post('/', (req, res) => {
  let user = new _user2.default({
    person: req.body.person,
    password: _crypto2.default.createHash('md5').update(req.body.password).digest('hex'),
    role: req.body.role,
    manager: req.body.manager,
    active: true
  });

  res.set('Content-Type', 'application/json');
  user.save().then(user => {
    res.statusCode = _httpStatusCodes.CREATED;
    res.json({ message: 'User was created.', user: user.toObject() });
  }).catch(err => {
    res.statusCode = _httpStatusCodes.BAD_REQUEST;
    return res.json({ err: err.message });
  });
});

exports.default = users;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("spdy");

/***/ })
/******/ ])));