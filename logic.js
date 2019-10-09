

import React, { Component } from 'react'

export default class logic extends Component {
        constructor(auth) {
            axios.defaults.headers.common['Authorization'] = auth;
            axios.defaults.baseURL = '';
        }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
