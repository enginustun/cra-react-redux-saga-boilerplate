import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Pages.scss';

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>Hello from HomePage!</p>
        <p>
          <Link to="/connected">Connected Page</Link>
        </p>
      </div>
    );
  }
}

export default HomePage;
