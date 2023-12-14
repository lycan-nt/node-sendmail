import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvaider: IMailProvider
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error('User already exists');
        }

        const user = new User(data);
        await this.usersRepository.save(user);
        await this.mailProvaider.sendMail({
            to: {
                name: 'Felipe',
                email: 'lycan.felipe@gmail.com'

            },
            from: {
                name: 'D. Santos',
                email: 'lycan.felipe@gmail.com'
            },
            subject: 'Welcome',
            body: 'Welcome'
        });
    };
}