import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAlreadyExist = this.usersRepository.findById(user_id)
    if(userAlreadyExist){
      if(userAlreadyExist.admin){
        return this.usersRepository.list()
      }
      throw new Error("NOT IS ADMIN")

    }
    throw new Error("USER  DOES NOT EXIST")
  }
}

export { ListAllUsersUseCase };
