(function(){
    function Modal($uibModal){
        $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: 'templates/modal.html',
          controller: 'ModalCtrl',
        });
        
        $uibModal.close();
    };
    
    angular
        .module('bloc-chat')
        .factory('Modal', ['$uibModal', Modal]);
})();


// templateUrl
//
//

/*

var ref = firebase.database().ref().child("rooms");
var rooms = $firebaseArray(ref);
// checkpoint-3
rooms.$add({id: "name"}).then(function(ref){
    var id = ref.name;
    rooms.$indexFor(id); //returns location in the array
});

return{
    all: rooms
};
*/