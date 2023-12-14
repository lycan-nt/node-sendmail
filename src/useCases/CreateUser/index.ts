import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUseRepository } from "../../repositories/implementations/PostgresUseRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUseRepository = new PostgresUseRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUseRepository,
    mailtrapMailProvider
);

const createUserController = new CreateUserController( createUserUseCase);

export { createUserUseCase, createUserController };