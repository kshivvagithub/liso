import config from "./config";
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import noTokenRoutes from "./routes/noTokenRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import spdy from 'spdy';


const PORT = process.env.PORT || 3005;
const app = express();
let cache = {};
cache['index'] = fs.readFileSync( path.join(path.resolve(process.cwd()), '/src/app/view/index.html'));

app.set('cache', cache);

app.use(express.static(`${path.resolve(process.cwd())}/build/static`));
/*app.set('views', path.join(path.resolve(process.cwd()), 'build/views'));
app.set('view engine', 'html');*/

console.log(path.join(path.resolve(process.cwd()), 'build/views'));
console.log(`${path.resolve(process.cwd())}/static`);

fs.readFile(`${path.resolve(process.cwd())}/key/private.rsa`, (err, data) => {
  if (err) throw err;
  app.set('privateKey', data);
});

fs.readFile(`${path.resolve(process.cwd())}/key/public.rsa`, (err, data) => {
  if (err) throw err;
  app.set('publicKey', data);
});

const serverOpts = {
  key: fs.readFileSync(`${path.resolve(process.cwd())}/key/server.key`),
  cert: fs.readFileSync(`${path.resolve(process.cwd())}/key/server.crt`)
};


mongoose.Promise = global.Promise;
mongoose.createConnection(config.database(process.env.USERDB, process.env.PASSWDDB));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev')); // use env: process.env.ENV=dev

/*  ******************************************** */
/* Routes with no token validation */
noTokenRoutes(app);

/*  ******************************************** */
/* Routes with token validation */
// protecting routes, allowed only for token provided
tokenRoutes(app);
/*  ******************************************** */

spdy.createServer(serverOpts, app).listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Listen server https://localhost:${PORT}`);
});
