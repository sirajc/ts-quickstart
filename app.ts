/// <reference path="typings/angular2/angular2.d.ts" />

import { Component, View, bootstrap } from 'angular2/angular2';

@Component({
	selector: 'my-app'
})
@View({
	template: '<div>My first Angular2 TS App {{ name }}</div>'
})
class MyAppComponent {
	name: string;
	
	constructor() {
		this.name = 'Yeah!!!';
	}
	
}

bootstrap(MyAppComponent);
