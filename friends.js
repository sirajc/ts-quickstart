if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var DisplayComponent = (function () {
    function DisplayComponent() {
        this.myName = "Alice";
        this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
        setInterval(function () { this.time = (new Date()).toLocaleString(); }.bind(this), 1000);
    }
    DisplayComponent.prototype.addNames = function (todo) {
        this.names.push(todo);
    };
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'display'
        }),
        angular2_1.View({
            template: "\n    {{ myName }}\n    <ul>\n      <li *for=\"#name of names\">\n        {{ name }}\n      </li>\n    </ul>\n    <br />\n    <p>Current time: {{ time }}</p>\n    \n  ",
            directives: [angular2_1.For, angular2_1.If]
        }), 
        __metadata('design:paramtypes', [])
    ], DisplayComponent);
    return DisplayComponent;
})();
angular2_1.bootstrap(DisplayComponent);
