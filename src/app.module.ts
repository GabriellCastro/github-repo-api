import { Module } from '@nestjs/common';
import { ReposModule } from './repos/repos.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [ReposModule, FavoritesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
