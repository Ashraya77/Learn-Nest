import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';

@Injectable()
export class UsersService {

    private users = [
        {
            "id": 1,
            "name": "Alice Johnson",
            "role": "admin"
        },
        {
            "id": 2,
            "name": "Bob Smith",
            "role": "intern"
        },
        {
            "id": 3,
            "name": "Carol Davis",
            "role": "admin"
        },
        {
            "id": 4,
            "name": "David Lee",
            "role": "intern"
        },
        {
            "id": 5,
            "name": "Emma Wilson",
            "role": "admin"
        }];

    findAll(role?: 'intern' | 'admin') {
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id: number) {
        return this.users.find(item => item.id === id);
    }

    create(user: CreateUserDto) {

        const usersByHigh = [...this.users].sort((a, b) => b.id - a.id)

        const newUser = {
            id: usersByHigh[0].id + 1,
            ...user
        }
        this.users.push(newUser);
        return user;
    }

    update(id: number, updatedUser: { name?: string, role?: 'intern' | 'admin' }) {
        this.users = this.users.map(user => {
            if (user.id == id) {
                return { ...user, ...updatedUser }
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }
}
