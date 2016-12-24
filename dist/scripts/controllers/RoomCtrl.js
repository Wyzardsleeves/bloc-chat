(function(){
    function RoomCtrl(Room, $scope){
        this.roomList = Room;
        // this.roomList = Room.all;
    }
    
    angular
        .module('bloc-chat')
        .controller('RoomCtrl', RoomCtrl);
})();