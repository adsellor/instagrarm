import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass';

class App extends React.PureComponent {
  render() {
    return(
      <div>
        Hello world
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
