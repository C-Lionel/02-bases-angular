import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  standalone: true,
  templateUrl: './hero-page.component.html',
  imports: [ UpperCasePipe ]
})

export class HeroPageComponent {

    name = signal('Ironman');
    age = signal(45);

    heroDescription = computed( () => {
      const description = `${ this.name() } - ${ this.age() }`;
      return description;
    } );

    capitalizeName = computed( () => {
      const name = `${ this.name().toUpperCase() }`
      return name;
    } );

    changeHero() {
      return ` ${ this.name.set('Spiderman') } - ${this.age.set(22)} `
    }

    resetForm() {
      this.name.set('Ironman');
      this.age.set(45);
    }

    chageAge(age: number) {
      return this.age.set( age )
    }

}
