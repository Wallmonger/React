//#region Imports
import React, { Component } from 'react';
import Car from './components/Car';
import './css/myCss.css';
import styled from 'styled-components';
import CustomBtn from './components/customBtn';

//#endregion

const Title = styled.h1`
    color : red;
    font-size : 80px;
    text-decoration: underline;
`

const Button = styled.button`
    background : black;
    color: #ffffff;
    padding: 12px 13px; 
    font-size: 15px;
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

    //#endregion

    render () {

        const success = {
            backgroundColor: 'green',
            color: 'black',
        }

        const danger = {
            backgroundColor : 'red',
            borderRadius : '20px'
        }

        const primary = {
            backgroundColor : 'blue',
            borderRadius: '5px'
        }

        return (
            <div>
                <Car width="60" height="60" color={this.state.color}/>

                <div>
                    <Title>Commentaire 1</Title>
                    <CustomBtn btnStyle={success}>Normal</CustomBtn>
                    <CustomBtn btnStyle={danger}>Red</CustomBtn>
                    <CustomBtn btnStyle={primary}>Blue</CustomBtn>
                </div>
                    

                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label style = {{ marginRight : '10px'}}>Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo} /> 
                    </div>

                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index) => {
                                    return <option value={color} key={index}>{color}</option>
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <label>Commentaire</label>
                        <textarea value={this.state.comment} onChange={this.handleComments}></textarea>
                    </div>

                    <button type="submit">Soumettre</button>
                    <Button>Styled button</Button>
                    
                </form>
            </div>
        )
    }
}

export default Form;