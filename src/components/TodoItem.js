import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    
    getStyle = () => {
        // if(this.props.todo.completed) {
        //     return {
        //         textDecoration: 'list-through'
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through': 'none'
        }
    }

    
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                { title }
                <button style={btnStyle}>DELETE</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#a41515',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
