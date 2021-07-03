import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const usersAlreadyExists = this.usersRepository.findById(user_id);

    if (!usersAlreadyExists) {
      throw new Error("User does not exist!");
    }

    if (usersAlreadyExists.admin === false) {
      throw new Error("Mensagem do erro");
    }

    const listUsers = this.usersRepository.list();

    return listUsers;
  }
}

export { ListAllUsersUseCase };
