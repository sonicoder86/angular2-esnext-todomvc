# Angular 2 ES6 TodoMVC 
[![Dependency Status](https://david-dm.org/blacksonic/angular2-es6-todomvc.svg)](https://david-dm.org/blacksonic/angular2-es6-todomvc)
[![devDependency Status](https://david-dm.org/blacksonic/angular2-es6-todomvc/dev-status.svg)](https://david-dm.org/blacksonic/angular2-es6-todomvc#info=devDependencies)

TodoMVC application built with Angular 2 ES6.
To get an insight how it works [Colin Eberhardt's tutorial](http://blog.scottlogic.com/2015/12/07/angular-2.html) gives a good starting point.
The structure of the project comes from a [starter pack](https://github.com/blacksonic/angular2-es6-starter).

### Concepts it covers

- Creating @Component with directives (ngIf, ngFor).
- Creating child @Component and communicating with parent (@Input, @Output).
- Using Dependency Injection for service.
- Use @Pipe inside @Component.
- Routing.

### Quick Start

```bash

git clone https://github.com/blacksonic/angular2-es6-todomvc.git
cd angular2-es6-todomvc
npm install

gulp serve

```

Open it in your browser [http://localhost:9000](http://localhost:9000).

### Deployment (to Heroku)

```bash

gulp dist

cd dist
git init
git add -A .
git commit -m "Deploy #1" && echo Committed
git push -f git@heroku.com:angular2-es6-todomvc.git master

```

Check out the [deployed version](https://angular2-es6-todomvc.herokuapp.com/).