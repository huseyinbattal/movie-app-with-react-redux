import React, { Component } from 'react'
import { Embed } from 'semantic-ui-react'

export default class HomePage extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h1>Coming Soon...</h1>
                <Embed
                    id='125292332'
                    placeholder='/images/vimeo-example.jpg'
                    source='vimeo'
                />
            </div>

        )
    }
}



