import React from 'react';
import { getStatus, getUsers, getHotels } from '../api/status';

class Status extends React.Component {
  state = {
    status: null,
    hotels: []
  }

  componentDidMount() {
    getStatus().then(response => {
      this.setState({status: response.data})
    })
    getHotels().then(response => {
      this.setState({hotels: response.data});
    })


  }

  render() {
    return (
      <div>
        <header className="app-header">
          <h6>API Status: {!this.state.status? 'No Status received from server': this.state.status}</h6>
        </header>
        hotels:
        <ul>
          {
            this.state.hotels.map(hotel => <li key={hotel.id}>hotel: {hotel.name}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Status;
