import React, { Component } from 'react'
import Item from './Item'

export class List extends Component {

    render() {
        return (
            <div className="list">
                <ul>
                {this.props.data.map( (item,index) =>
                    (<Item key={index} data={item} />) )}
                </ul>
            </div>
            )
    }
}

export default List
