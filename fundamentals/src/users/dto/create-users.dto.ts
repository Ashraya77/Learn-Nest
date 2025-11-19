import {IsString, IsNumber, IsEnum, IsNotEmpty} from "class-validator"

export class CreateUserDto{
  

    @IsString()
    @IsNotEmpty
    name: string;
    
    @IsEnum(['intern', 'admin'], {
        message: "Valid role required"
    })
    role: 'intern' | 'admin'
}