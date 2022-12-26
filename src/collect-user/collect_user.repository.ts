import { Injectable } from '@nestjs/common';
import { User } from "./interfaces/user_interface";
import { readFile, writeFile } from "fs/promises";
import { BaseResponse } from "src/interfaces";
import { plainToClass } from "class-transformer";
import { CollectUserDto } from "./dtos/collect-user.dto";
import { validate } from "class-validator";

@Injectable()
export class CollectUserRepository{
    
    async create(user: User){
        
        const content = await readFile('users.json', 'utf-8');
        const users = JSON.parse(content);

        const id = Math.floor(Math.random() * 999);
        users.push({...user,id});
        await writeFile('users.json', JSON.stringify(users));

        

    }
}