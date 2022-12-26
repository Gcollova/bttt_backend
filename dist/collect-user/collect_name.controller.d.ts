import { CollectUserDto } from './dtos/collect-user.dto';
import { CollectUserService } from './collect_name.service';
export declare class CollectNameController {
    collectUserService: CollectUserService;
    constructor();
    collectUser(body: CollectUserDto): void;
}
