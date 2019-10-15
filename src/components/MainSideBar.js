import React from 'react'
import { Link } from 'react-router-dom';

export default class MainSideBar extends React.Component {
    render() {
        const folders = this.props.folders.map((item) => {
            return (
                <div className="item-folder" key={item.id}>
                    <Link to={item.id}>
                        <h3>{item.name}</h3>
                    </Link>
                </div>

            ); 
        })
        return (
            <div>
                {folders}
                <button type="button" className="Add Folder">Add Folder</button>
            </div>
        )
    }
}
