import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const listing = 1;
    axios.get('/listings', {
      params: {
        id: listing,
      },
    }).then((res) => {
      this.setState({
        description: res.data,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        React App
      </div>
    );
  }
}

export default App;
