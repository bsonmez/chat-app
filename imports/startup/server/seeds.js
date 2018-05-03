// Imports
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// App Imports
import ChatRooms from '../../api/chat-rooms/collection';
import ChatRoomMembers from '../../api/chat-room-members/collection';
import Chats from '../../api/chats/collection';

// User
if(Meteor.users.find().count() == 0) {
    let users = [
        { username: 'Burak', password: '123456'  },
        { username: 'Dogan', password: '123456'  },
        { username: 'crazy_boy26', password: '123456'  }
    ];

    users.forEach((user) => {
        Accounts.createUser(user);
    });

    const burak = Meteor.users.findOne({ username: 'Burak' });
    const dogan = Meteor.users.findOne({ username: 'Dogan' });
    const crazy = Meteor.users.findOne({ username: 'crazy_boy26' });

    // Chat Rooms
    if(ChatRooms.find().count() == 0) {
        const chatRoomId = ChatRooms.insert({ userId: burak._id, title: 'Glocalzone', description: 'Its so cool', isPubic: true });
        const chatRoomTwoId = ChatRooms.insert({ userId: dogan._id, title: 'Kısmet Bu işler', description: 'Beni e verin', isPubic: true });

        // Chat Room Members
        if(ChatRoomMembers.find().count() == 0) {
            ChatRoomMembers.insert({ chatRoomId, userId: burak._id });
            ChatRoomMembers.insert({ chatRoomId, userId: dogan._id });
            ChatRoomMembers.insert({ chatRoomId, userId: crazy._id });
        }

        // Chats
        if(Chats.find().count() == 0) {
            Chats.insert({ chatRoomId, userId: burak._id, message: 'Hello from Burak' });
            Chats.insert({ chatRoomId, userId: dogan._id, message: 'Hello from Dogan' });
            Chats.insert({ chatRoomId, userId: crazy._id, message: 'Hello from Crazy_Boy26' });
        }
    }
}