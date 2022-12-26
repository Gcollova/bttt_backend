import { BaseResponse } from './../interfaces/index';
import { CollectUserDto } from './dtos/collect-user.dto';
import { CollectUserService } from './collect_user.service';
import { Response } from 'express';
export declare class CollectUserController {
    collectUserService: CollectUserService;
    constructor(collectUserService: CollectUserService);
    collectUser(body: CollectUserDto, response: Response<BaseResponse>): void;
}
