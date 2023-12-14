import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post('/users', (request, respose) => {
    return createUserController.handle(request, respose);
});

export { router };