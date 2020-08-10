import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService extends MessageService {



  getHeroes(): Observable<Hero[]> {
    this.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}