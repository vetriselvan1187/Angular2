import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';
import {Input} from '@angular/core';


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
  selector: 'joke',
  template: `
      <div class="card card-block">
	<h4 class="card-title">{{data.setup}}</h4>
	<p class="card-text" [hidden]="data.hide">{{data.punchline}}</p>
        <a class="btn btn-primary" (click)="data.toggle()">Tell Me</a>
      </div>
  `
})

class JokeComponent {
    @Input('joke') data: Joke
}


@Component({
   selector: 'joke-list',
   template: `
	<joke *ngFor="let j of jokes" [joke]="j"></joke>
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


@Component({
    selector: 'app',
    template: `
	<joke-list></joke-list>
    `
})

class AppComponent {
    
}

@NgModule({
  imports: [BrowserModule],
  declarations: [
      AppComponent,
      JokeComponent,
      JokeListComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
