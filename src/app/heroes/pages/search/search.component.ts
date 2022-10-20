import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputValue: string = "";
  heroes : Hero[] = [];
  selectedHero!: Hero | undefined;

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
  }

  searching(){
    this.heroService.getSuggestion(this.inputValue.trim())
    .subscribe(heroes => this.heroes = heroes);
  }

  selectedOption(event:MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.selectedHero = undefined;
      return;
    }else{
    const hero: Hero = event.option.value;
    this.inputValue = hero.superhero;
    this.heroService.getHeroById( hero.id! )
    .subscribe(hero => this.selectedHero = hero);
    }
  }
}
