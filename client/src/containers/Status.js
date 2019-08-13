import React from 'react';
import { getStatus } from '../api/status';

class Status extends React.Component {
  state = {
    status: null
  }

  componentDidMount() {
    getStatus().then(response => {
      this.setState({status: response})
    })
  }

  render() {
    return (
      <div>
        <header className="app-header">
          <h6>API Status: {!this.state.status? 'No Status received from server': this.state.status}</h6>
        </header>
      </div>
    );
  }
}

export default Status;
