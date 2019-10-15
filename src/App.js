import React from 'react';
import { Route, Link } from 'react-router-dom'
import dummyStore from './dummy-store';
import Main from './components/Main';
import MainSideBar from './components/MainSideBar';
import Folder from './components/Folder';
import FolderSideBar from './components/FolderSideBar';
import Note from './components/Note';
import NoteSideBar from './components/NoteSideBar';


class App extends React.Component {
  state={
    currentNote: {
      note: {},
      folder: ''
    },
    currentFolder: null,
    folders: dummyStore.folders,
    notes: dummyStore.notes,
  };

  folderClicked = (id) => {
    this.setState({currentFolder: id});
  }

  noteClicked = (id) => {

  }
  
  let result = newArray.reduce((result, item) => {
    let key = Object.keys(item);
    result[key] = item[key];
    return result;
  })

  this.setState({counter: result})
  // handleDelete = (noteId) => {
  //   console.log('for handleDelete');
  // }

  render(){
    return(
      <div className='app'>
        <header>
          <h1>Noteful</h1>
        </header>
        <div className="sidebar">
          {/* <MainSideBar folders={this.state.folders}/> */}
          <Route path='/' component={() => <MainSideBar folders={this.state.folders} folderClicked={this.state.folderClicked} counter={this.state.counter} currentFolder={this.state.currentFolder}/>} />
        </div>
        
        <main className="main" role="main">
          {/* <Main folders={this.state.folders} notes={this.state.notes}/> */}
          <Route path='/' component={() => <Main folders={this.state.folders} notes={this.state.notes}/>} />
        </main>
      </div>
    );
  }
}


export default App;
