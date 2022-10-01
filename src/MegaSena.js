import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import './style.css'

class MegaSena extends React.Component {

    state = {
        n1: null,
        n2: null,
        n3: null,
        n4: null,
        n5: null,
        n6: null,
        mostrarResultado: false
    }

    geraNumeros = () => {
        this.setState({
            n1: Math.floor((Math.random() * 60) + 1),
            n2: Math.floor((Math.random() * 60) + 1),
            n3: Math.floor((Math.random() * 60) + 1),
            n4: Math.floor((Math.random() * 60) + 1),
            n5: Math.floor((Math.random() * 60) + 1),
            n6: Math.floor((Math.random() * 60) + 1),
            mostrarResultado: true
        })
    }
    
    render(){
        return (
            <Container>
                <Card bg="dark">
                    <div className="card-body p-5 text-center">
                        <div className="d-flex align-items-center justify-content-center mb-2">
                            <img src="/logoMS.png" width="32" height="32" alt="logoMegaSena" />
                            <p className="m-3 text-success">Mega-Sena</p>
                        </div>
                        { 
                        this.state.mostrarResultado && (
                            <div className="flex-fill align-items-center mt-3">
                                <ListGroup horizontal>
                                    <ListGroup.Item variant='success'>{this.state.n1}</ListGroup.Item>
                                    <ListGroup.Item variant='success'>{this.state.n2}</ListGroup.Item>
                                    <ListGroup.Item variant='success'>{this.state.n3}</ListGroup.Item>
                                    <ListGroup.Item variant='success'>{this.state.n4}</ListGroup.Item>
                                    <ListGroup.Item variant='success'>{this.state.n5}</ListGroup.Item>
                                    <ListGroup.Item variant='success'>{this.state.n6}</ListGroup.Item>
                                </ListGroup>
                            </div>
                        )}
                        <Button variant='outline-success' onClick={this.geraNumeros} className="mt-5">
                            Gerar Números
                        </Button>
                    </div>
                </Card>
            </Container>
        )
    }
}

export default MegaSena