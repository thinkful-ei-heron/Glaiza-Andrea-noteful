import React from 'react'
import { Link } from 'react-router-dom';

export default class MainSideBar extends React.Component {
    render() {
        const folders = this.props.folders.map((item) => {
            return (
                <li key={item.id} className={this.props.currentFolder === item.id ? 'highlight' : ''}>
                    <Link to={`/folder/${item.id}`} onClick={ () => this.props.folderClicked(item.id)}>{item.name}</Link>
                </li>

            ); 
        })
        return (
            <ul className='sidebar-ul'>
                {folders}
                <button type="button" className="Add Folder">Add Folder</button>
            </ul>
        )
    }
}
