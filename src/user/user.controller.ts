import { Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){

    }

    @Post('create/user')
    createUser(){
        console.log('entrooo');
        this.userService.createUser();
        return "creado";
    }

    @Post('create/post')
    createPost(){
        
        this.userService.createPost();
        return "creado";
    }

    @Get()
    findOne(){
        return this.userService.findOne();
    }

    @Get('all')
    getAll(){
       return this.userService.findAll();
    }

}
