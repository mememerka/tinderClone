import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ChatPage from './pages/ChatPage';
import ChatScreen from './components/organisms/ChatScreen';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/chats" component={ChatPage} />
        <Route exact path="/chats/:id" component={ChatScreen} />
      </Switch>
    </Router>
  );
};

export default AppRouter;