import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './Heroes/hero';
import { HeroService } from './Heroes/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    constructor(private HeroService: HeroService){}

    ngOnInit(): void{
        this.HeroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }
 }