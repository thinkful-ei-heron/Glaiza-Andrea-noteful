import React from 'react';

export default class NoteSideBar extends React.Component {
    render() {
        const noteId= this.props.match.params.noteId;
        const note= this.props.notes.filter(note => note.id === noteId);
        //folderId temporary assignment
        const folderFilter= this.props.folders.filter(folder => folder.id === note[0].folderId);
        return (
            <div className= 'note-sidebar'>
                {folderFilter}
                <button type='button'>Go back</button>
                <h3>{folderFilter[0].name}</h3>
            </div>
        )
    }
}
