import React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

export default
class LoginScreen extends React.PureComponent {
  render() {
    const left = {
      marginLeft: 20
    };
    return(
      <div className='center'>
        <Paper zDepth={1}>
          <TextField
            style={left}
            name='login'
            hintText='login'
            underlineShow={false}
          />
          <Divider />
          <TextField
            style={left}
            name='password'
            hintText='password'
            underlineShow={false}
          />
          <Divider />
        </Paper>
      </div>
    )
  }
}
