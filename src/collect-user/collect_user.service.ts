import { CollectUserRepository } from './collect_user.repository';
import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user_interface';
import { BaseResponse } from 'src/interfaces';

@Injectable()
export class CollectUserService {
    
    constructor(public collectUserRepo: CollectUserRepository) {}

    async create(user:User){
        return this.collectUserRepo.create(user);
     
    }
}
