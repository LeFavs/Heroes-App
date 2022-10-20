import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'imgfavs',
  pure: false
})
export class ImgfavsPipe implements PipeTransform {

  transform(hero: Hero): string {
    
    if (!hero.id && !hero.alt_img){
      return "assets/no-image.png";
    }else if(hero.alt_img){
      return hero.alt_img;
    }else{
      return `assets/heroes/${hero.id}.jpg`;
    }
  }

}
