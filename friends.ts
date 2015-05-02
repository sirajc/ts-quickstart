import {Component, View, bootstrap, For, If} from 'angular2/angular2';

@Component({
  selector: 'display'
})
@View({
  template: `
    {{ myName }}
    <ul>
      <li *for="#name of names">
        {{ name }}
      </li>
    </ul>
    <br />
    <p>Current time: {{ time }}</p>
    
  `,
  directives: [For, If]
})
class DisplayComponent {
  myName: string;
  names: Array<string>;
  
  constructor() {
    this.myName = "Alice";
    this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    setInterval(function () { this.time = (new Date()).toLocaleString(); }.bind(this), 1000);  
  }
  
  addNames(todo: string) {
    this.names.push(todo);
  }
  
}

bootstrap(DisplayComponent);
