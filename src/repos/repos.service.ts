import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ReposService {
  private readonly githubApiUrl = 'https://api.github.com';

  async getMyRepos() {
    const response = await axios.get(
      `${this.githubApiUrl}/users/gabriellcastro/repos`,
    );
    return response.data.map((repo) => ({
      nome: repo.name,
      descricao: repo.description,
      linguagem: repo.language,
      ultimaDataDeAtualizacao: repo.updated_at,
      donoDoRepositorio: repo.owner.login,
      contribuidores: repo.contributors_url,
    }));
  }

  async searchRepos(query: string) {
    const response = await axios.get(
      `${this.githubApiUrl}/search/repositories?q=${query}+user:gabriellcastro`,
    );
    return response.data.items.map((repo) => ({
      nome: repo.name,
      descricao: repo.description,
      linguagem: repo.language,
      ultimaDataDeAtualizacao: repo.updated_at,
      donoDoRepositorio: repo.owner.login,
      contribuidores: repo.contributors_url,
    }));
  }
}
