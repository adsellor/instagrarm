import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default
class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: "my message"
    }
  }
  render() {
    console.log(this.props)
    return(
      <div>
        <h1>{this.props.message}</h1>
        <FlatButton
          label="change message"
          onTouchTap={() => {
            this.props.changeMessage("new message")
          }
        }
        />
      </div>
    )
  }
}
