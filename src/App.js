import React from 'react';
import dummyStore from './dummy-store';
import Main from './components/Main';

class App extends React.Component {
  state={
    folders: dummyStore.folders,
    notes: dummyStore.notes,
  };

  render(){
    return(
      <div className='app'>
        <header>
          <h1>Noteful</h1>
        </header>
        <Main folders={this.state.folders} notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
