import type { Request } from 'express';
import { Controller, Get, Post,Body, Req, Param, Patch, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(@Query('role') role?: 'intern'| 'admin'){
        return this.usersService.findAll();
        return {role}
    }

    @Get(":id")
    findOne(@Param('id') id:number){
        return {id}
    }

    @Post()
    create(@Body() user:CreateUserDto){
        return this.usersService.create(user)
    }

    @Get()
    getUsers(@Req() request: Request){
        console.log(request.headers);
        return "check console for info";
    }

    @Patch(":id")
    update(@Param('id') id:string){
        return {id}
    }

}
