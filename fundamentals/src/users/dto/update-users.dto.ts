import { CreateUserDto } from "./create-users.dto";
import { PartialType } from '@nestjs/swagger';
export class UpdateUserClass extends PartialType(CreateUserDto){ } 
