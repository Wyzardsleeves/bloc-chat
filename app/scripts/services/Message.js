(function(){
    function Message($firebaseArray){
        var refMessages = firebase.database().ref().child('messages');
        var messages = $firebaseArray(refMessages);
        
        return{
            all: messages,
            getByRoomId: function(roomId){
                return refMessages.orderByChild('roomId').equalTo(roomId);
            }
        };
}

    angular
        .module('bloc-chat')
        .factory('Message', ['$firebaseArray', Message]);
})();

/*
function Message($firebaseArray){
    var refMessages = firebase.database().ref().child('messages').orderByChild('roomId');//.equalTo(roomId);
    var messages = $firebaseArray(refMessages);
    
    return{
        all: messages
    };
}
*/