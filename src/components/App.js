// import React, { Component } from 'react';
//
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       </div>
//     );
//   }
// }
//
// export default App;









// import React, { Component } from 'react';
// // import logo from './logo.svg';
// // import './App.css';
// import Cable from "actioncable";
//
//
// class App extends Component {
//
//   constructor(props) {
//   super(props);
//   this.state = {
//     currentChatMessage: ''
//   };
//   this.handleSendEvent = this.handleSendEvent.bind(this);
// }
//
// componentWillMount() {
//   this.createSocket();
// }
// handleSendEvent(event) {
//   event.preventDefault();
//   this.chats.create(this.state.currentChatMessage);
//   this.setState({
//     currentChatMessage: ''
//   });
// }
// createSocket() {
//   let cable = Cable.createConsumer('http://localhost:3333/cable');
//   this.chats = cable.subscriptions.create({
//     channel: 'ChatChannel'
//   }, {
//     connected: () => {},
//     received: (data) => {
//       console.log(data);
//     },
//     create: function(chatContent) {
//       this.perform('create', {
//         content: chatContent
//       });
//     }
//   });
// }
// updateCurrentChatMessage(event) {
//   this.setState({
//     currentChatMessage: event.target.value
//   });
// }
//   render() {
//     return (
//       <div className='App'>
//         <div className='stage'>
//           <h1>Chat</h1>
//           <div className='chat-logs'>
//           </div>
//           <input
//     value={ this.state.currentChatMessage }
//     onChange={ (e) => this.updateCurrentChatMessage(e) }
//     type='text'
//     placeholder='Enter your message...'
//     className='chat-input' />
//     <button
//   onClick={ (e) => this.handleSendEvent(e) }
//   className='send'>
//   Send
// </button>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default App;




import React, { Component } from "react";
import Cable from "actioncable";
import jwtDecoder from "jwt-decode";
// import "./Chatroom.css";
import axios from 'axios';
import './App.css';
import moment from "moment";
import Footer from "./Footer/Footer";
import _ from "lodash";
import RaisedButton from "material-ui/RaisedButton";


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentChatMessage: "",
//       chatLogs: [],
//       user: {},
//       loading: false
//     };
//   }
//   componentWillMount() {
//     debugger;
//     const user = jwtDecoder(localStorage.getItem('jwtToken'));
//     // const user = await jwtDecoder(this.props.token);
//     console.log('CHAT USER',user);
//      this.setState({
//       user:user,
//       loading: true
//     });
//     console.log(this.state.user);
//     this.fetchHistoryMessages();
//     this.createSocket();
//
//   }
//   componentDidMount = async () => {
//     debugger
//     const user = jwtDecoder(localStorage.getItem('jwtToken'));
//     // const user = await jwtDecoder(this.props.token);
//     console.log('CHAT USER',user);
//     await this.setState({
//       user:user,
//       loading: true
//     });
//
//      this.fetchHistoryMessages();
//
//     await this.createSocket();
//
//     this.setState({
//       loading: false
//     });
//   };
//
//   fetchHistoryMessages = () => {
//     axios(
//       {
//         url: 'https://codersappserver.herokuapp.com/messages.json'
//
//       }
//     )
//       .then(res => {
//         // console.log(chatLogs);
//         this.setState({
//           chatLogs: res.data
//         })
//       })
//   }
//
//   createSocket = () => {
//     // debugger;
//     const user_name = this.state.user.name;
//     const user_id = this.state.user.sub;
//     console.log(user_id, user_name);
//     let cable = Cable.createConsumer("wss://codersappserver.herokuapp.com/cable");
//     this.chats = cable.subscriptions.create(
//       {
//         channel: `MessagesChannel`
//       },
//       {
//         connected: () => {},
//         received: data => {
//           let chatLogs = this.state.chatLogs;
//           chatLogs.push(data);
//           this.setState({ chatLogs: chatLogs });
//         },
//         create: function(message) {
//           this.perform("create", {
//             content: message,
//             user_id: user_id,
//             user_name: user_name
//           });
//         }
//       }
//     );
//   };
//
//   renderChatLog() {
//     console.log('IN RENEDER CHAT', this.state)
//     debugger;
//     return this.state.chatLogs.map((el, i) => {
//       if(el.user_name === null){
//         return(
//           <li key={`chat_${i}`}>
//             <span className="chat-message">{"Anonymous"}</span>
//             <span className="chat-message">{el.content}</span>
//             <span className="chat-created_at">{moment(el.created_at).format(
//               "h:mm:ss a"
//             )}</span>
//           </li>
//         );
//       }
//       else{
//         return (
//           <li key={`chat_${i}`}>
//             <span className="chat-message"><strong>{el.user_name}: </strong>{el.content}</span>
//
//             <span className="chat-created_at">{moment(el.created_at).format(
//               "h:mm:ss a"
//             )}</span>
//           </li>
//         );
//       }
//     });
//   }
//
//   render() {
//     if (this.state.loading) {
//       return <h1>Initiating Chatroom...</h1>;
//     }
//
//     return (
//       <div className="App">
//         <div className="stage">
//           <h1>Chat</h1>
//           <div className="chatBox">
//             <ul className="chat-logs">{this.renderChatLog()}</ul>
//           </div>
//           <input
//             onKeyPress={e => this.handleChatInputKeyPress(e)}
//             value={this.state.currentChatMessage}
//             onChange={e => this.updateCurrentChatMessage(e)}
//             type="text"
//             placeholder="Enter your message..."
//             className="chat-input"
//             autoFocus
//           />
//
//           <RaisedButton
//            className="send"
//             label="Send"
//             primary={true}
//             onClick={e=> this.handleSendEvent(e)}
//           />
//
//
//         </div>
//         < Footer />
//       </div>
//     );
//   }
//
//   updateCurrentChatMessage(event) {
//     this.setState({
//       currentChatMessage: event.target.value
//     });
//   }
//
//   handleChatInputKeyPress(event) {
//     if (event.key === "Enter") {
//       this.handleSendEvent(event);
//     } //end if
//   }
//
//   handleSendEvent(event) {
//     event.preventDefault();
//     this.chats.create(this.state.currentChatMessage);
//     this.setState({
//       currentChatMessage: ""
//     });
//   }
// }
//
// export default App;



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChatMessage: "",
      chatLogs: [],
      user: null,
      loading: false
    };
  }

  componentDidMount = async () => {
    // const user = await jwtDecoder(this.props.token);
    const user = await jwtDecoder(this.props.token);
    await this.setState({
      user:user,
      loading: true
    });

    await this.fetchHistoryMessages();

    await this.createSocket();

    this.setState({
      loading: false
    });
  };

  fetchHistoryMessages = () => {


    axios.get(`https://codersappserver.herokuapp.com/messages.json`)
      .then(res => {
        this.setState({
          chatLogs: res.data
        })
      })
  }

  createSocket = () => {
    const user_name = this.state.user.name;
    const user_id = this.state.user.sub;

    let cable = Cable.createConsumer("wss://codersappserver.herokuapp.com/cable");
    this.chats = cable.subscriptions.create(
      {
        channel: `MessagesChannel`
      },
      {
        connected: () => {},
        received: data => {
          let chatLogs = this.state.chatLogs;
          chatLogs.push(data);
          this.setState({ chatLogs: chatLogs });
        },
        create: function(message) {
          this.perform("create", {
            content: message,
            user_id: user_id,
            user_name: user_name
          });
        }
      }
    );
  };

  renderChatLog() {
    debugger;
    this.fetchHistoryMessages()
    console.log(this.state)
    return this.state.chatLogs.map((el, i) => {
      if(el.user_name === null){
        return(
          <li key={`chat_${i}`}>
            <span className="chat-message">{"Anonymous"}</span>
            <span className="chat-message">{el.content}</span>
            <span className="chat-created_at">{moment(el.created_at).format(
              "h:mm:ss a"
            )}</span>
          </li>
        );
      }
      else{
        return (
          <li key={`chat_${i}`}>
            <span className="chat-message">{el.user_name}</span>
            <span className="chat-message">{el.content}</span>
            <span className="chat-created_at">{moment(el.created_at).format(
              "h:mm:ss a"
            )}</span>
          </li>
        );
      }
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>Initiating Chatroom...</h1>;
    }

    return (
      <div className="App">
        <div className="stage">
          <h1>Chat</h1>
          <div className="chatBox">
            <ul className="chat-logs">{this.renderChatLog()}</ul>
          </div>
          <input
            onKeyPress={e => this.handleChatInputKeyPress(e)}
            value={this.state.currentChatMessage}
            onChange={e => this.updateCurrentChatMessage(e)}
            type="text"
            placeholder="Enter your message..."
            className="chat-input"
            autoFocus
          />
          <RaisedButton onClick={e => this.handleSendEvent(e)} className="send">
            Send
          </RaisedButton>
        </div>
        < Footer />
      </div>
    );
  }

  updateCurrentChatMessage(event) {
    this.setState({
      currentChatMessage: event.target.value
    });
  }

  handleChatInputKeyPress(event) {
    if (event.key === "Enter") {
      this.handleSendEvent(event);
    } //end if
  }

  handleSendEvent(event) {
    event.preventDefault();
    this.chats.create(this.state.currentChatMessage);
    this.setState({
      currentChatMessage: ""
    });
  }
}

export default App;
