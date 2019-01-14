import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {filter} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor( private titleService: Title,
               private metaService: Meta,
               private router: Router) { }

  public addSeoData(): void {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let root = this.router.routerState.snapshot.root;
      while (root) {
        if (root.children && root.children.length) {
          root = root.children[0];
        } else if (root.data && root.data["title"]) {
          this.titleService.setTitle(root.data["title"] + "");
          const tags = root.data["metatags"];
          for (let tag in tags) {
            this.metaService.addTag({ name: tag, content: tags[tag] });
          }
          return;
        } else {
          return;
        }
      }
    });
  }
}
