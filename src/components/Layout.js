import React, { Component } from 'react';
import io from 'socket.io-client';

const socketUrl = ""

export default class Layout extends Component {

    constructor(props)
        super(props);

        this.state = {
            socket:null
        };
    }

    initSocket = ()=>{
        const socket = io(socketUrl)
    }
    
    render() {
        const { title } =this.props
        return (
            <div className="container"> 
                {title}
            </div>
        );
    }
}