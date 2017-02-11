(function(){
    function Message($firebaseArray, $cookies, $scope){
        var refMessages = firebase.database().ref().child('messages');
        var messages = $firebaseArray(refMessages);
        
        return{
            all: messages,
            getByRoomId: function(roomId){
                return refMessages.orderByChild('roomId').equalTo(roomId);
            },

            //prototype
            send: function(message, roomId){
                var addMessage = {
                    username: $cookies.get('blocChatCurrentUser'),
                    content: message,
                    roomId: roomId,//'-KbyPgmBGkhYmfC9F96V',
                    sentAt: "0:00"
                }
                messages.$add(addMessage);
            }
        }
    }

    angular
        .module('bloc-chat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();

/* Original that worked
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
*/


/* My variant

(function(){
    function Message($firebaseArray, $cookies){
        var refMessages = firebase.database().ref().child('messages');
        var messages = $firebaseArray(refMessages);
        
        
        function addMessage(message){
            var send = {
                username: $cookies.blocChatCurrentUser,
                content: '',
                roomId: selectedRoom.roomId,
                sentAt: "0:00"
            }
            send.content = message;
            messages.$add(send);
        };
        
        
        return{
            all: messages,
            getByRoomId: function(roomId){
                return refMessages.orderByChild('roomId').equalTo(roomId)
            },
            
            //prototype
            addmessage: addMessage
        };
    }

    angular
        .module('bloc-chat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();

*/