import auth from "./authenticate";
import personAccess from './requestAccess';
import home from './home';

let noTokenRoutes = (app) => {
  app.use('/', home);
  app.use('/auth', auth);
  app.use('/reqAccess', personAccess);

};

export default noTokenRoutes;