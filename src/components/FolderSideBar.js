import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class FolderSideBar extends Component {
    render() {
        const folderSideBarMap = this.props.folders.map(folder => {
            return (
                <div className="folder-sidebar" key={folder.id}> 
                    <NavLink to={folder.id}>
                        <h3>{folder.name}</h3>
                    </NavLink>
                </div>
            );
        });
        return (
            <div>
                {folderSideBarMap}
                <button type="button">Add folder</button>
            </div>
        );
    }
}
