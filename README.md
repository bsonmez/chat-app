# Chat Application

A chat application made by using MeteorJs and ReactJs 

## Running

- Install Meteor `curl https://install.meteor.com/ | sh` (if you haven't already)
- Clone repo `git clone https://github.com/bsonmez/chat-app.git` and `cd chat-app`
- Install NPM modules `npm install`
- Run Meteor `meteor`

#
## Packages

### Meteor (atmospherejs)
- **accounts-password** 
- **reywood:publish-composite** 
- **reactrouter:react-router-ssr**
- **aldeed:collection2** 
- **mdg:validated-method** 
- msavin:mongol [optional]

### Node (npm)
- **react** 
- **react-dom** 
- **react-router** 
- **react-addons-pure-render-mixin** 
- **react-mounter** 
- **react-helmet** 
- **babel-runtime** 
- **bcrypt** 
- moment[optional]

## Features
- Direct Messages (one to one chat)
- Server Side Rendering

## Structure
<table width="100%" style="width: 100%">
    <tbody>
        <tr valign="top">
            <td width="50%" style="width: 50%">
                <p>Folders</p>
                <pre>
simple-chat
  ├── client
  │   └── styles
  │
  ├── imports
  │   ├── api
  │   │   ├── chat-room-members
  │   │   ├── chat-rooms
  │   │   ├── chats
  │   │   └── users
  │   │
  │   ├── startup
  │   │   ├── client
  │   │   ├── common
  │   │   └── server
  │   │
  │   └── ui
  │       └── components
  │           ├── chat
  │           ├── common
  │           └── user
  │
  └── server
            </pre>
        </td>
        <td width="50%" style="width: 50%">
            <p>Folders and Files</p>
            <pre>
simple-chat
  ├── client
  │   ├── styles
  │   ├── index.html
  │   └── index.js
  │
  ├── imports
  │   ├── api
  │   │   ├── chat-room-members
  │   │   │   ├── collection.js
  │   │   │   ├── methods.js
  │   │   │   └── publish.js
  │   │   │
  │   │   ├── chat-rooms
  │   │   │   ├── collection.js
  │   │   │   ├── methods.js
  │   │   │   └── publish.js
  │   │   │
  │   │   ├── chats
  │   │   │   ├── collection.js
  │   │   │   ├── methods.js
  │   │   │   └── publish.js
  │   │   │
  │   │   └── users
  │   │       ├── methods.js
  │   │       └── publish.js
  │   │
  │   ├── startup
  │   │   ├── client
  │   │   │   ├── index.js
  │   │   │   └── routes.js
  │   │   │
  │   │   ├── common
  │   │   │   └── routes.js
  │   │   │
  │   │   └── server
  │   │       ├── api.js
  │   │       ├── index.js
  │   │       ├── routes.js
  │   │       └── seeds.js
  │   │
  │   └── ui
  │       └── components
  │           ├── chat
  │           │    ├── chat-rooms
  │           │    │    ├── create.jsx
  │           │    │    ├── detail.jsx
  │           │    │    ├── detail-container.jsx
  │           │    │    ├── item.jsx
  │           │    │    ├── items.jsx
  │           │    │    ├── list.jsx
  │           │    │    └── list-container.jsx
  │           │    │
  │           │    ├── direct-messages
  │           │    │    ├── detail.jsx
  │           │    │    ├── detail-container.jsx
  │           │    │    ├── item.jsx
  │           │    │    ├── items.jsx
  │           │    │    ├── list.jsx
  │           │    │    └── list-container.jsx
  │           │    │
  │           │    ├── chat-items.jsx
  │           │    └── send-chat.js
  │           │
  │           ├── common
  │           │    ├── menus
  │           │    │    ├── primary.jsx
  │           │    │    ├── primary-container.jsx
  │           │    │    └── secondary.jsx
  │           │    │
  │           │    ├── header.jsx
  │           │    └── header-container.js
  │           │
  │           ├── user
  │           │    ├── login.jsx
  │           │    └── register.js
  │           │
  │           ├── about.jsx
  │           ├── app.jsx
  │           └── page-not-found.jsx
  │
  ├── server
  │   └── index.js
  │
  └── package.json
                </pre>
            </td>
        </tr>
    </tbody>
</table>