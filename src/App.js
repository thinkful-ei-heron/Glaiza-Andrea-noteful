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
    folders: dummyStore.folders,
    notes: dummyStore.notes,
  };

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
           {/* <Route exact path ='/' render={() => <MainSideBar folders={this.state.folders}/>}/> */}
           <Route exact path='/MainSideBar' component= {MainSideBar}/>
           {/* <Route path= '/folder/:folderId' component={FolderSideBar}/>
           <Route path= '/note/:noteId' component={NoteSideBar}/> */}
        </div>
        
        {/* <main className="main" role="main">
          <Main folders={this.state.folders} notes={this.state.notes}/>
        </main> */}
      </div>
    );
  }
}


export default App;
