import { Component } from '@angular/core';
import { Hero } from './Heroes/hero';
import { HeroService } from './Heroes/hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  template:  `<h2>My Heroes</h2>
                <ul class="heroes">
                  <li *ngFor="let hero of heroes"
                    [class.selected]="hero === selectedHero"
                    (click)="onSelect(hero)">
                    <span class="badge">{{hero.id}}</span> {{hero.name}}
                  </li>
                </ul>
                <my-hero-detail [hero]="selectedHero"></my-hero-detail>`,

    styles: ['app/styles.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}
  
  getHeroes(): void{ 
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
