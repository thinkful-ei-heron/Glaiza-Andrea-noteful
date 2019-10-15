import React from 'react';
import dummyStore from './dummy-store';
import Main from './components/Main';
import MainSideBar from './components/MainSideBar';

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
        <div className="sidebar">
          <MainSideBar folders={this.state.folders}/>
        </div>
        <main className="main" role="main">
          <Main folders={this.state.folders} notes={this.state.notes}/>
        </main>
      </div>
    );
  }
}

export default App;
