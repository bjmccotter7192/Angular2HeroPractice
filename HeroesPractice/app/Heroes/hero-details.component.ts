import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';
import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: './hero-details.component.html'
})

export class HeroDetailComponent implements OnInit {

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    @Input() hero: Hero;

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
    //Lets see what happens if i change something
}
