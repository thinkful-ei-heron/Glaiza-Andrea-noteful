import React from 'react'
import {format} from 'date-fns';

export default class Note extends React.Component {

    render() {
        const noteId = this.props.match.params.noteId;
        const filterNote = this.props.notes.filter(note => note.id === noteId);
        const filterNoteMap = filterNote.map(note => {
            return(
                <div className="note" key={note.id}>
                    <h3>{note.name}</h3>
                    <p>Date modified on <span>{format(new Date(note.modified), 'yyyy-MM-dd')}</span></p>
                    <p>{note.content}</p>
                    <button type="button" onClick={ () => this.props.handleDelete()}>Delete Note</button>}
                </div>
            );
        })
        return (
            <div>
                {filterNoteMap}
            </div>
        )
    }
}
