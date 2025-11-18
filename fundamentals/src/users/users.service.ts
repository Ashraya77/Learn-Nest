import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';

@Injectable()
export class UsersService {

    private readonly users: any[] = [];

    findAll() {
        return "hello users"
    }

    // findOne(id: number){
    //     const user = this.users.find(id => user.id === id)
    //     return user;
    // }
    create(user: CreateUserDto) {
        this.users.push(user);
        return user;
    }


}
