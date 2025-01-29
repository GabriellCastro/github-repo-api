import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get('')
  async getFavorites() {
    return this.favoritesService.getFavorites();
  }

  @Post('')
  async addFavorite(@Body() repo: any) {
    const result = this.favoritesService.addFavorite(repo);
    return result;
  }

  @Delete('')
  async removeFavorite(@Body('repoName') repoName: string) {
    const result = this.favoritesService.removeFavorite(repoName);
    return result;
  }
}
