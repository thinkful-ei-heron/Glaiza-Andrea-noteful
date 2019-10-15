import React from 'react';
// import { format } from 'url';
import { format } from 'date-fns';
import {Link} from 'react-router-dom';

export class Main extends React.Component {
    render() {
        // console.log(this.props.notes);
        // console.log(this.props.folders);
    const notes= this.props.notes.map((item) => {
        return (
            <div className='item' key={item.id}>
                <Link to={item.id}>
                    <h3>{item.name}</h3>
                    <p>Date modified on <span>{format(new Date(item.modified), 'yyyy-MM-dd')}</span></p>
                </Link>
                <button type='button' onClick={() => {
                    this.props.handleDelete(item.id)
                }}>Delete Note</button>
            </div>
        );
    })
        return (
            <div>
                {notes}
                <button className='addNote'>Add Note</button>
            </div>
        );
    }
}



export default Main
