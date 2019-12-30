import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import MyFriends from './components/MyFriends'
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute'
import FriendShow from './components/FriendShow'
import styled from 'styled-components';


const App = () => (
  <>
  <Navbar />
    <AppContainer>
    <FetchUser>
    <Container>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path='/my_friends' component={MyFriends} />
        <ProtectedRoute exact path="/friends/:id" component={FriendShow} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </FetchUser>
  </AppContainer>
  </>
)

const AppContainer = styled.div`



background-color:black;
background-image:

radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
`;


export default App;

