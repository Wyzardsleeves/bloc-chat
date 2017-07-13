(function(){
    function BlocChatCookies($cookies, $uibModal){
        //var currentUser = $cookies.blocChatCurrentUser;
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === ''){
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
                templateUrl: '/templates/get_name_modal.html',
                backdrop: 'static',
                controller: function($scope, $uibModalInstance){
                    $scope.newUser = '';
                    $scope.setUser = function(){
                        var trap = $scope.newUser;
                        $uibModalInstance.close(trap);
                        console.log(trap);
                    };
                    /* this doesn't work had to use method above
                    $scope.setUser = function(data){
                        $uibModalInstance.close(data);
                    }; */
                },
                size: 'sm',
            });
            
            modalInstance.result.then(function(data){
                $cookies.put('blocChatCurrentUser', data);
            });
        }
        // tricks go here
        //console.log(currentUser);
        //$cookies.remove('blocChatCurrentUser');
    };
    
    angular
        .module('bloc-chat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

/* stuff
if(message == '' || !message){
    message.remove();
}
*/