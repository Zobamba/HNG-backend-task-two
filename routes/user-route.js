import UserController from "../controller/UserController.js";
import { validateFormData, validParamId, userFormConstraints } from "../middleware/user-validate.js";

export default function userRoute(app) {
  app.post('/api', userFormConstraints, validateFormData, UserController.createUser);

  app.get('/api/:user_id', validParamId, validateFormData, UserController.fetchUserByIdParam);

  app.put('/api/:user_id', validParamId, userFormConstraints, validateFormData, UserController.updateUserByIdParam);

  app.delete('/api/:user_id', validParamId, validateFormData, UserController.deleteUserByIdParam);
}