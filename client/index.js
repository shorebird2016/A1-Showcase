
var app = angular.module('myApp', ['ngRoute'])
   .config(function ($routeProvider) {
      $routeProvider
      .when('/setup', {templateUrl: 'tpl/app/quote.html'})
      .when('/inputs', {templateUrl: 'tpl/app/calc.html'})
      .when('/outputs', {templateUrl: 'tpl/app/album.html'})
      .when('/processing', {templateUrl: 'tpl/app/x-men.html'})
         .otherwise( { redirectTo: '/' })
   })

   .controller('myCtrl', function ($location) {
      var vm = this;

      vm.calcLeftMargin = function (index) {
         return ((index+1) / vm.actors.length) * 30; //in percent
      };
      vm.actors =[
         { name: 'Hugh Jackson', screenName: 'Wolverine', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Wolverine_AKA_James_%22Logan%22_Howlett.png' },
         { name: 'Patrick Stewart', screenName: 'Professor X', imageUrl: 'https://vignette1.wikia.nocookie.net/xmenmovies/images/4/43/Professor_X_03.jpg/revision/latest?cb=20110613063951' },
         { name: 'Jean Grey', screenName: 'Phoenix', imageUrl: 'http://orig02.deviantart.net/27bd/f/2016/103/5/3/jean_grey_from_x_men_apocalypse_by_ruan2br-d9yune8.jpg' },
         { name: 'James Marsden', screenName: 'Cyclops', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Cyclopsjc.jpg' },
         { name: 'Anna Paquin', screenName: 'Rougue', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e4/RogueCoverv3.jpg' },
         { name: 'Rebecca Romijn', screenName: 'Mystique', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Mystique11.png' },
      ];
      vm.collection1 = [
         { imageUrl: 'asset/1.jpg', description: 'Fried Frog Legs', date: '2017-03-05' },
         { imageUrl: 'asset/2.jpg', description: 'Special Fruit',   date: '2017-03-05' },
         { imageUrl: 'asset/3.jpg', description: 'Art Museum',      date: '2017-03-05' },
         { imageUrl: 'asset/4.jpg', description: 'River Observation Platform',     date: '2017-03-05' },
         { imageUrl: 'asset/5.jpg', description: 'Lake Tower',      date: '2017-03-05' },
         { imageUrl: 'asset/3.jpg', description: 'Water City',      date: '2017-03-05' }
      ];
      vm.collection2 = [
         { imageUrl: 'asset/11.jpg', description: 'Arrival Putung',  date: '2017-03-04' },
         { imageUrl: 'asset/12.jpg', description: 'Arrive Hotel',    date: '2017-03-04' },
         { imageUrl: 'asset/13.jpg', description: 'Checking in',     date: '2017-03-04' },
         { imageUrl: 'asset/14.jpg', description: 'Flowery Lobby',   date: '2017-03-04' },
         { imageUrl: 'asset/16.jpg', description:  'Lobby Decor',    date: '2017-03-04' },
         { imageUrl: 'asset/15.jpg', description: 'Delicious',       date: '2017-03-04' }
      ];
      vm.collection3 = [
         { imageUrl: 'asset/21.jpg', description: 'Breakfast',       date: '2017-03-07' },
         { imageUrl: 'asset/22.jpg', description: 'Crowne Plaza',    date: '2017-03-07' },
         { imageUrl: 'asset/23.jpg', description: 'After Shopping',  date: '2017-03-07' },
         { imageUrl: 'asset/24.jpg', description: 'Dr. Sun Tomb',    date: '2017-03-07' },
         { imageUrl: 'asset/25.jpg', description: 'Night Street',    date: '2017-03-07' }
      ];
      vm.collection4 = [
         { imageUrl: 'asset/31.jpg', description: 'Hotel Elevator',  date: '2017-03-09' },
         { imageUrl: 'asset/32.jpg', description: 'Jade Art',        date: '2017-03-09' },
         { imageUrl: 'asset/33.jpg', description: 'Special Show',    date: '2017-03-09' },
         { imageUrl: 'asset/34.jpg', description: 'Shopping Mall',   date: '2017-03-09' },
         { imageUrl: 'asset/35.jpg', description: 'Time Space Show', date: '2017-03-09' },
         { imageUrl: 'asset/35.jpg', description: 'Tea House',       date: '2017-03-09' }
      ]
   })

   .directive('xmenTile', function () {
      return {
         restrict: 'E',
         templateUrl: 'tpl/directive/x-men/xmen-tile.html',
         scope: {
            character: '=',//TODO why = works and @ does NOT??????????
            targetMargin: '@'
         },
         controller: function ($scope, $interval) {
            // $scope.targetMargin;//copy over
            $scope.curMargin = 0;
            //every 1 sec move 1% of margin till target reached
            $interval(function () {
               $scope.curMargin += 0.1;
               if ($scope.curMargin >= $scope.targetMargin)
                  $scope.curMargin = 0;
            }, 200);
         }
      }
   })

   .directive('photoBox', function () {
      return {
         restrict: 'E',
         templateUrl: 'tpl/directive/photo-box/photo-box.html',
         scope: {
            photos: '=',//TODO change this to = and strange error occurs
            interval: '@'
         },
         controller: function ($scope, $interval) {
            $scope.curIndex = 0;
            $scope.photoCollection = $scope.photos;
            $scope.timeout = $scope.interval;
            $interval(function () {
               $scope.curIndex++;
               if ($scope.curIndex === $scope.photoCollection.length)
                  $scope.curIndex = 0;
            }, $scope.interval);
         }
      }
   })

   .directive('myInspiration', function () {
      return {
         restrict: 'E',
         templateUrl: 'tpl/directive/my-inspiration/my-inspiration.html',
         scope: {
            msg1: '@',//TODO change this to = and strange error occurs
            msg2: '@',
            bkcolor: '@',
            targetWidth: '@'
         },
         controller: function ($scope, $interval) {
            $scope.curWidth = 90;//in percent
            $interval(function () {
               $scope.curWidth -= 2;
               if ($scope.curWidth <= $scope.targetWidth)
                  $scope.curWidth = 90;
            }, 500);
         }
      }
   })

   .directive('calculator', function () {
      return {
         restrict: 'E',
         templateUrl: 'tpl/directive/calculator/calculator.html',
         scope: {
            object: '=', //TODO change this to @ and strange error occurs
            opResult: '@'
         },
         controllerAs: 'CTRL',
         controller: calcCtrl
      }
   });

//controller logic
function calcCtrl() {
   var vm = this;
   vm.data = vm.object;
   vm.name = vm.opResult;

   vm.display = 0;//value shown on LCD
   vm.userEntry = '';//data model, stored as string
   vm.newEntry = true;
   vm.periodEntered = false;
   vm.result = undefined;//store number (not string), holds intermediate results when chained
   vm.prevOp = undefined;//look ahead operator
   vm.opResult = 3333;

   //---a digit was clicked
   vm.digitClicked = function (digit) {
      if (vm.userEntry.length === 10) return;//exceeding limit
      if (vm.newEntry) {
         vm.userEntry = digit;
         vm.newEntry = false;
      }
      else
         vm.userEntry = vm.userEntry + digit;//simple append
      vm.display = vm.userEntry;//copy to display
   };

   //---period was clicked
   vm.periodClicked = function () {
      if (vm.userEntry.length === 10) return;//exceeding limit
      if (vm.periodEntered) return;//do not allow more than period
      vm.periodEntered = true;//parse on equal
      vm.userEntry += '.';
      vm.display = vm.userEntry;//copy to display
   };

   //---plus or minus sign clicked
   vm.signClicked = function () {
      if (vm.userEntry[0] === '-')
         vm.userEntry = vm.userEntry.substr(1, vm.userEntry.length);
      else
         vm.userEntry = '-' + vm.userEntry;
      vm.display = vm.userEntry;//copy to display
   };

   //---CE clicked, remove last entry
   vm.ceClicked = function () {
      vm.periodEntered = false;
      vm.newEntry = true;
      vm.userEntry = '';
      vm.display = "0";
   };

   //---C clicked
   vm.cClicked = function () {
      vm.periodEntered = false;
      vm.newEntry = true;
      vm.result = undefined;
      vm.userEntry = '';
      vm.display = "0";//TODO what's diff from CE??????
   };

   //---operator clicked
   vm.operatorClicked = function (op) {
      if (vm.result === undefined) {//xfer user entry to result when no result is around
         if (vm.userEntry === "") return; //nop both empty
         if (op === '=') {
            //new entry cycle
            vm.newEntry = true;
            vm.periodEntered = false;
            vm.userEntry = "";
            return;
         }
         //+ - x / operators, get user entry, put into result as real number
         vm.result = parseFloat(vm.userEntry);
         vm.opResult = vm.result;
         vm.prevOp = op;
         vm.newEntry = true;
         vm.periodEntered = false;
         vm.userEntry = "";
         return;
      }

      if (vm.userEntry === "") return; //cases when operator follows another operator
      //already has result, operate on both
      var entry = parseFloat(vm.userEntry);
      switch(vm.prevOp) {//already has operand, operate operand vs currentEntry, save in operand, clear currentEntry
         case '+':
            vm.result += entry;
            vm.opResult = vm.result;
            break;

         case '-':
            vm.result -= entry;
            vm.opResult = vm.result;
            break;

         case 'x':
            vm.result *= entry;
            vm.opResult = vm.result;
            break;

         case '/':
            if (entry === 0)
               vm.result = NaN;
            else
               vm.result /= entry;
            vm.opResult = vm.result;
            break;
      }

      //apply formatting on result
      var df1 = new DecimalFormat("#,##0.00");
      // var df2 = new DecimalFormat("0.##E0");
      if (vm.result > 100000000)
      // vm.display = df2.format(vm.result); TODO this does NOT work
         vm.display = vm.result.toPrecision(8.2);
      else
         vm.display = df1.format(vm.result);

      //new entry cycle
      vm.newEntry = true;
      vm.periodEntered = false;
      vm.userEntry = '';
      vm.prevOp = op;
      if (op === '=') {
         vm.result = undefined;//start over after finish
         vm.opResult = vm.result;
      }
   };
}

