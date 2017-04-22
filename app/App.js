import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Layout from './components/Layout';

class App extends React.PureComponent {
  constructor() {
    super();
    injectTapEventPlugin();
    this.state = {
      parentMessage: "message of the parent component"
    }
  }
  changeMessage = (newMessage) => {
    this.setState({parentMessage: newMessage});
  }
  render() {
    return(
      <MuiThemeProvider>
        <Layout
          message={this.state.parentMessage}
          changeMessage={this.changeMessage}
        />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
