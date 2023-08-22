//#region Imports
import React, { Component } from 'react';
import Car from './Car';
import MyHead from './myHeaderOne'
import './css/myCss.css';

// Importing a module won't work on children
import styles from './css/myCss.module.css';
//#endregion

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

        return (
            <div>
                <Car width="60" height="60" color={this.state.color}/>

                <div className='row d-flex justify-content-center'>
                    <h1 className="py-2 bg-primary bg-opacity-75 rounded w-75 text-white">Commentaire 1</h1>
                </div>
                    

                <form onSubmit={this.handleSubmitForm} className='bg-primary-subtle mx-5 p-4'>
                    <div className="row d-flex justify-content-center">
                        <label className="h5" style = {{ marginRight : '10px'}}>Pseudo</label>
                        <input className="form-control w-50" type="text" value={this.state.username} onChange={this.handlePseudo} /> 
                    </div>

                    <div className='row d-flex justify-content-center mb-5'>
                        <label className='h5'>Couleur</label>
                        <select className="form-select w-50" value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index) => {
                                    return <option value={color} key={index}>{color}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="row d-flex justify-content-center mb-5">
                        <label className='h5'>Commentaire</label>
                        <textarea className="form-control w-50" value={this.state.comment} onChange={this.handleComments}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Soumettre</button>
                    
                </form>
            </div>
        )
    }
}

export default Form;