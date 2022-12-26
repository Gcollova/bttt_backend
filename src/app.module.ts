import { Module } from '@nestjs/common';
import { InfoModule } from './info/info.module';
import { CollectUserModule } from './collect-user/collect_user.module';


@Module({
  imports: [InfoModule, CollectUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
