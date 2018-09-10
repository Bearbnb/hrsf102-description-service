import React from 'react';
import axios from 'axios';

import { getRandomInt } from '../../../seedDatabase/helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const listing = getRandomInt(1, 101);
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
