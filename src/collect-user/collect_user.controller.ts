import { BaseResponse } from './../interfaces/index';
import { CollectUserDto } from './dtos/collect-user.dto';
import { Body, Controller, Get, Post, Param, Res } from '@nestjs/common';
import { CollectUserService } from './collect_user.service';
import { User } from './interfaces/user_interface';
import { Response } from 'express';

@Controller('collect')
export class CollectUserController {
    
    constructor(public collectUserService: CollectUserService) {};

    @Post()
    collectUser(@Body() body:CollectUserDto,@Res() response: Response<BaseResponse>){

        if (body && body !== undefined) {
            this.collectUserService.create(body);
            response.status(200).json(
                {
                    success:true,
                    data:"Utente convalidato correttamente"
                }
            )
        } else{
            response.status(200).json(
                {
                    success:false,
                    errors:[]
                }
            )

        }
        
          
        
        

    };
    
}
