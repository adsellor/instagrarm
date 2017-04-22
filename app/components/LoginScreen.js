import React from 'react';
import TextField from 'material-ui/TextField';

export default
class LoginScreen extends React.PureComponent {
  render() {
    return(
      <div>
        <TextField
          name='login'
          floatingLabelText='login'
        />
      </div>
    )
  }
}
