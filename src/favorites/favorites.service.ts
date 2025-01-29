import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritesService {
  private readonly favorites: any[] = [
    {
      nome: 'adx-backend',
    },
  ];

  getFavorites(): any[] {
    return this.favorites;
  }

  addFavorite(repo: any) {
    if (
      !this.favorites.some((existingRepo) => existingRepo.nome === repo.nome)
    ) {
      this.favorites.push({
        nome: repo.nome,
      });
    } else {
      console.log(`Repositório "${repo.nome}" já existe nos favoritos.`);
    }
  }

  removeFavorite(repoName: string): { status: number; message: string } {
    const index = this.favorites.findIndex((repo) => repo.nome === repoName);
    if (index > -1) {
      this.favorites.splice(index, 1);
      return { status: 200, message: 'Repositório removido com sucesso!' };
    } else {
      return { status: 404, message: 'Repositório não encontrado.' };
    }
  }
}
