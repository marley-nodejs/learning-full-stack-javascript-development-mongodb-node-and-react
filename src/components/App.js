import React from 'react';

import Header from './Header.js';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>...</div>
      </div>
    );
  }
}

export default App;
