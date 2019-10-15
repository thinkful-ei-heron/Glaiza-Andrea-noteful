import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default class Folder extends React.Component {

    render() {
        const folderId = this.props.match.params.folderId;
        const filterNotes = this.props.notes.filter(item => item.folderId === folderId);

        const filterNotesMap = filterNotes.map(note => {
            return (
                <div className="folder-item" key={note.id}>
                    <Link to={note.id}>
                        <h3>{note.name}</h3>
                        <p>Date modified on <span>{format(new Date(note.modified), 'yyyy-MM-dd')}</span></p>
                    </Link>
                    <button type="button" onClick={ () => this.props.handleDelete(note.id)}>Delete Note</button>
                </div>

            )
        })
        return (
            <div>
                {filterNotesMap}
            </div>
        )
    }
}
