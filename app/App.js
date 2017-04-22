import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LoginScreen from './components/LoginScreen';
import './style.sass';
injectTapEventPlugin();

class App extends React.PureComponent {
  render() {
    return(
      <MuiThemeProvider>
        <LoginScreen />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
