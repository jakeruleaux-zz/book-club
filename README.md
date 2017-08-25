# Lonely Hearts Book Club

## Book Club Member App, 08/25/2017

## By Jacob Ruleaux

## Description
The App will allow users to view members in a book club, see the details about each member. It will allow an 'admin' add, edit and delete members.

## Planning

1. Set-up new Angular project file "book-club".

2. Specs
    Spec 1: User will be able to see a full list of current members.

    Spec 2: User will be able to click on a member and view details of that member on a separate page.

    Spec 3: User will be able to click on links for an 'about' and 'contact' page.

    Spec 4:
    * Input: User/Admin may enter "new member" with details of name, reading, has read, thoughts.
    * Output: The member profile entered will be displayed.

    Spec 5:
    *  Input: User/Admin will be able to click on individual member and edit the details of the animal. *  Output: Edited details will be displayed.

    Spec 6:
    * Input: User/Admin will be able to delete member from roster.
    * Output: The selected user will be removed from database.

3. Integration

  * component.ts and base html file.
  * bookclub-component folder to display list of members.
  * member-detail-component to view data about each member.
  * admin-component to save new members.
  * edit-member-component to update and delete members.

4. UX/UI

  * Logical and easy to understand page lay-out. Usage should be easy to understand. Links displayed in navbar and footer.

5. Polish/Wishlist

  * Clean-up indents and unnecessary code.
  * Add styling and images.
  * Add message board to display members notes.


## Installation
  * In terminal "git clone https://github.com/jakeruleaux/book-club".
  * In terminal "cd book-club".
  * In terminal "npm install".
  * In terminal "bower install".

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## FireBase Set-up
  * Go to "https://firebase.google.com/" and set-up an account.
  * Click 'get started'.
  * Click 'create'.
  * Click 'web based'.
  * In terminal 'npm install angularfire2@4.0.0-rc.0 firebase --save'.
  * In terminal 'touch src/app/api-keys.ts'
  * In the src/app/api-keys.ts add 'export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };'
  * Place API key into the 'xxxx' fields.
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Technologies Used

* Angular 2
* Bootstrap
* Typescript
* Javascript
* HTML
* CSS
* Firebase

## Known Bugs

* App may run an error after adding Firebase.
    * Error: Module not found: Error: Can't resolve 'promise-polyfill' in `.../firebase/app'`
    * In terminal install 'npm install promise-polyfill --save-exact'

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contact

Contact the author at jakeruleaux@hotmail.com.

## License

MIT

### Copyright 2017 Jacob Ruleaux
