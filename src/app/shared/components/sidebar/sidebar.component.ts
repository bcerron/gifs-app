import { Component, Input, input } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  private searchHistory: string[] = [];

  constructor(private gifsService: GifsService) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string): void {
    this.gifsService.searchApiTag(tag);
  }
}
