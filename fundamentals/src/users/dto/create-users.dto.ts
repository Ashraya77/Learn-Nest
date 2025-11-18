import {IsString, IsNumber} from "class-validator"

export class CreateUserDto{
  

    @IsString()
    name: string;

    role: 'intern' | 'admin'
}