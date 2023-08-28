//#region Imports
import React, { Component } from 'react';
import {Container, Button} from 'react-bootstrap';
import Car from './components/Car';
import './css/myCss.css';
import styled from 'styled-components';


//#endregion

const Title = styled.h1`
    color : black;
    font-size : 40px;
    text-align: center;
`




class Form extends Component {

    state = {
        username: '',
        color: '',
        colors: ["", "red", "blue", "green", "black", "pink"],
        comment: '',
    }

    //#region state functions
    handlePseudo = e => {
       this.setState({
        username: e.target.value
       })
    }

    handleColor = e => {
        this.setState({
            color : e.target.value
        })
    }

    handleComments = e => {
        this.setState({
            comment : e.target.value
        })
    }

    handleSubmitForm = e => {
        e.preventDefault();
        console.log(`Username : ${this.state.username}, Color : ${this.state.color}, Comment: ${this.state.comment}`);
    }

    randColorStatus = () => {
        let randNumb = Math.floor(Math.random() * 4);
        this.setState({
            color: this.state.colors[randNumb]
        });
        console.log(this.state.color);
    }

    //#endregion

    render () {

        const success = {
            backgroundColor: 'green',
            color: 'white'
        }

        

        return (
            <Container>
                <Container className='d-flex justify-content-center'>
                     <Car width="60" height="60" color={this.state.color}/>
                </Container>
               

                <div className='text-center'>
                    <Title>Un titre</Title>
                    <Button className='' onClick={this.randColorStatus}>Change status</Button>
                </div>
                    
                <Container>
                    <form onSubmit={this.handleSubmitForm}>
                        <div>
                            <label style = {{ marginRight : '10px'}}>Pseudo</label>
                            <input type="text" value={this.state.username} onChange={this.handlePseudo}  className='form-control'/> 
                        </div>

                        <div>
                            <label>Couleur</label>
                            <select value={this.state.color} onChange={this.handleColor} className='form-control'>
                                {
                                    this.state.colors.map((color, index) => {
                                        return <option value={color} key={index}>{color}</option>
                                    })
                                }
                            </select>

                        </div>

                        <div>
                            <label>Commentaire</label>
                            <textarea value={this.state.comment} onChange={this.handleComments} className='form-control'></textarea>
                            <Button 
                                type="submit" 
                                className='btn btn-primary mt-2' 
                                style={{display : 'block', margin: '5px auto'}}
                            >Soumettre
                            </Button>
                        </div>

                        
                       
                        
                    </form>
                </Container>
                


                
            </Container>
        )
    }
}

export default Form;