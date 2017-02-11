(function(){
    function RoomCtrl($scope, $uibModal, Room, Message, $cookies){
        this.roomList = Room;
        this.messages = Message;
        this.messageList = [];
        
        this.openModal = function(){
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
                templateUrl: '/templates/modal.html',
                backdrop: 'static',
                controller: function($scope, $uibModalInstance){
                    $scope.closeModal = function(){
                        $uibModalInstance.close();
                    };
                    $scope.submitModal = function(data){
                        $uibModalInstance.close(data);
                    };
                },
                size: 'sm',
            });
            
            modalInstance.result.then(function(data){
                Room.addRoom(data);
            });
        };
        
        //Current Room
        
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.setCurrentRoom = function(room){
            var that = this;
            $scope.selectedRoom = room;
            Message.getByRoomId(room.$id)
                .on('value', function(snapshot){
                    var value = snapshot.val();
                    if(!Array.isArray(value) && Array.isArray(value)){
                        value = [value];
                    }
                    that.messageList = value;
                 });
        }
        
        this.newMessage = '';
        this.sendMsg = function(msg){
            Message.send(msg, $scope.selectedRoom.$id);
            this.newMessage = '';
        }
    };
    
    angular
        .module('bloc-chat')
        .controller('RoomCtrl', RoomCtrl);
})();