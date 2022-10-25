import { request } from "express";
import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): void {
    const userAlreadyExist = this.usersRepository.findByEmail(email)
   
    if(userAlreadyExist){
      throw new Error("User already exists")
    }
      this.usersRepository.create({email, name})    

  }
}

export { CreateUserUseCase };
