import React, { Component } from 'react'

export class Item extends Component {
    render() {
        const data = this.props.data;
        return (
            <li>
                <h2>{data.name}</h2>
                <div className="Stats">
                   <p>Gender: {data.gender}</p>
                   <p>Eye Color: {data.eye_color} 2</p>
                   <p>Skin Color: {data.skin_color} 3</p>
                </div>
            </li>
        )
    }
}

export default Item
