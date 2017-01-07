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
        