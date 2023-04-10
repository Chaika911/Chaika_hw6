import React from "react";
import "./Form.scss";
import style from "./Form.module.css";


class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userFirstName: '',
            userLastName: '',
            userAge: '',
        }
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        switch(name){
            case 'userFirstName':
                e.target.className = value.length < 3 ? style.error : '';
                break;
            case 'userLastName':
                e.target.className = value.length < 3 ? style.error : '';
                break;
            case 'userAge':
                const age = +value;
                e.target.className = isNaN(age) ? style.error : '';
                break;
        }


        this.setState({[name]: value});
    }

    handleSubmit(e){
        e.preventDefault();

        const inputs = document.getElementsByTagName('input');
        let hasErrors = false;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].classList.contains(style.error)) {
                hasErrors = true;
                break;
            }
        }

       
        hasErrors ? alert('submit error'): console.log('submit success')
    }

    render(){
        return(
            <div>
                <form className="form-style" onSubmit={this.handleSubmit.bind(this)}>
                    <label className="label-style" >Firstname </label>
                    <input  type="text" name="userFirstName" onChange={this.handleChange.bind(this)} /> <br />
                    <label className="label-style" >Lastname </label>
                    <input type="text" name="userLastName" onChange={this.handleChange.bind(this)} /><br />
                    <label className="label-style" >Age </label>
                    <input type="text" name="userAge" onChange={this.handleChange.bind(this)} /> <br />

                    <button className={style.button}>Submit</button>

                </form>
            </div>
        )
    }
}

export default Form;