(function(){
    function RoomCtrl($scope, $uibModal, Room, Message){
        this.roomList = Room;
        this.messages = Message;
        this.messageList = [];
        
        /*
        this.selectedRoom(room){
            var yoyo = Message.getByRoomId(room.$id);
            this.selectedRoom = yoyo;
        }
        */
        
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
        
        this.setCurrentRoom = function(room){
            var that = this;
            Message.getByRoomId(room.$id)
                .on('value', function(snapshot){
                    //that.messageList = [].concat(snapshot.val());
                    var value = snapshot.val();
                    //if(!Array.isArray(value))
                    if(!Array.isArray(value) && Array.isArray(value)){
                        value = [value];
                    }
                    that.messageList = value;
                });
        }
    };
    
    angular
        .module('bloc-chat')
        .controller('RoomCtrl', RoomCtrl);
})();

/*  This is currently working
(function(){
    function RoomCtrl($scope, $uibModal, Room){
        this.roomList = Room;
        
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
    };
    
    angular
        .module('bloc-chat')
        .controller('RoomCtrl', RoomCtrl);
})();
*/

/* Current one
(function(){
    function RoomCtrl($scope, $uibModal, Room, Message){
        this.roomList = Room;
        this.messageList = Message;
        
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
    };
    
    angular
        .module('bloc-chat')
        .controller('RoomCtrl', RoomCtrl);
})();
*/