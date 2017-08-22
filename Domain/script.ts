import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';

class Joke {
    public setup : string;
    public punchline: string;
    public hide: true;

    constructor(setup: string, punchline: string) {
	this.setup = setup;
	this.punchline = punchline;
	this.hide = true;
    }

    toggle() {
	this.hide=!this.hide;
    }
}

@Component({
  selector: 'joke-list',
  template: `
    <div class="card card-block" *ngFor="let joke of jokes">
	<h4 class="card-title">{{joke.setup}}</h4>
	<p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
        <a class="btn btn-primary" (click)="joke.toggle()">Tell Me</a>
    </div>
  `
})


class JokeListComponent {
    jokes: Joke[];
   
    constructor() {
	this.jokes = [
		new Joke("This is the first joke", "First joke is the one really hard to laugh"),
		new Joke("This is the second jone", "Second joke is the one really hard to laugh"),
		new Joke("This is the third joke", "Third joke is the on really hard to laugh"),
	];
    }

    toggle(joke) {
	joke.hide=!joke.hide;
    }

}

@NgModule({
  imports: [BrowserModule],
  declarations: [JokeListComponent],
  bootstrap: [JokeListComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
