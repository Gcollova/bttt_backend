import { Module } from '@nestjs/common';
import { CollectUserController } from './collect_user.controller';
import { CollectUserRepository } from './collect_user.repository';
import { CollectUserService } from './collect_user.service';

@Module({
  controllers: [CollectUserController],
  providers: [CollectUserService,CollectUserRepository]
})
export class CollectUserModule {}
