// import React from 'react';
// import { Route } from 'react-router-dom';
// import App from './App';
// import Callback from './Components/Callback/Callback';
// import Protected from './Components/Protected/Protected';
// import Auth from './Auth.js';

// const auth = new Auth();

// const handleAuthentication = (nextState, replace) => {
//     if (/access_token|id_token|error/.test(nextState.location.hash)) {
//         auth.handleAuthentication();
//     }
// }

// export const myRoutes = () => {
//     return (
//         <div>
//             <Route exact path='/' component={App} />
//             <Route exact path='/callback' component={Callback} />
//             <SecuredRoute path='/protected'
//                 component={Protected}
//                 checkingSession={this.state.checkingSession} />

//             }} />
//             </div>

//     );
// }