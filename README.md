# MemberBadge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.
The gaal is to convert my first AngularJS project "CLDAA member badge system" into Angular 4 project.

## Dev Log

2017-08-20
  - divide the app into 4 compoments; app, header, photo, footer
  - move header portion HTML/CSS from AngularJS project into header component
  - design a service class to manage membership data which was contained in main.js controller under AngularJS
2017-08-21
  - convert CSV file to JSON for ease of use
  - display member photos from reading JSON file with flexbox
  - members w/o photo will show an fix image no-photo.jpg
  -   ???? header is not fixed to top ?????
  

## Mystery

1. Detecting missing images only works this way
```
       <img src="../assets/member-photo/{{MBR.ID}}.jpg" class="img-rounded img-responsive"
          onError="this.src = '../assets/no-photo.jpg'">
```
It doesn't seem to work this way
``` 
       <img src="../assets/member-photo/{{MBR.ID}}.jpg" class="img-rounded img-responsive"
          (error)="this.src = '../assets/no-photo.jpg'">
```
or this way
``` 
       <img src="../assets/member-photo/{{MBR.ID}}.jpg" class="img-rounded img-responsive"
          onerror="this.src = '../assets/no-photo.jpg'">
```

## Dev Notes

1. Angular 4 can work with Bootstrap 3, edit .angular-cli.json file's "styles" section and "scripts" section
   to include file paths to bootstrap.css, bootstrap.js
   ```
      "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.css",
        "styles.css"
      ],
   ```
   
2. bootstrap.js depends on jquery.js, so make sure to use npm to install jquery first
    ```
      "scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/bootstrap/dist/js/bootstrap.js"
      ],
      
    ``` 
3. Ultimately, we should use Bootstrap's component library instead, that's in ng-bootstrap project

4. In the A4 component world, use serivice under the following 3 conditions, use "Dependency Injection":
    (1) Implement business logic that doesn't have a view
    (2) Access to shared data
    (3) External interactions
    
5. Dependency Injection - a design pattern, framework under A4 via service (hierarchical)  
    (1) Create service code
    (2) Register service at component(and children) that needs this service
    (3) Declare service CTOR of each service user
    
