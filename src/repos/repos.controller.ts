import { Controller, Get, Query } from '@nestjs/common';
import { ReposService } from './repos.service';

@Controller('repos')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

  @Get('my-repos')
  async getMyRepos() {
    return this.reposService.getMyRepos();
  }

  @Get('search')
  async searchRepos(@Query('q') query: string) {
    return this.reposService.searchRepos(query);
  }
}
