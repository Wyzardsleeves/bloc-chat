(function(){
    function RoomCtrl(Room){
        this.rooms = Room;
        
    }
    
    angular
        .module('bloc-chat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();