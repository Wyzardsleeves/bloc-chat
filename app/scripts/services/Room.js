(function(){
    function Room($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        function addRoom(name){
            rooms.$add({name: name});
        };
        
        return{
            all: rooms,
            addRoom: addRoom
        };
    }
    
    angular
        .module('bloc-chat')
        .factory('Room', ['$firebaseArray', Room]);
})();


/*  Prototype
        rooms.$add({id: "name"}).then(function(ref){
            var id = ref.name;
            rooms.$indexFor(id); //returns location in the array
        });
*/

/* Old version

(function(){
    function Room($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        function addRoom(name){
            rooms.$add({name: name});
        };
        
        return{
            all: rooms,
            addRoom: addRoom
        };
    }
    
    angular
        .module('bloc-chat')
        .factory('Room', ['$firebaseArray', Room]);
})();

*/
