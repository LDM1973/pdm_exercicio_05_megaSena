import React from 'react'
import ReactDOM from 'react-dom'
import MegaSena from './MegaSena'
import './style.css'

class App extends React.Component {
    
    render(){
        return(
            <MegaSena />
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)