import React, { Component } from 'react'
import api from "../../services/api"



export default class Resultado extends Component {
	constructor(props) {
		super(props)

		this.state = {
            PtTime1: "",
			PtTime2: ""
		}
		this.apagar = this.apagar.bind(this)
	}

	apagar(){
		api.delete(`camps/${localStorage.getItem("id")}/confr`)
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		api
			.put(`camps/${localStorage.getItem("id")}/confr`, this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { PtTime1, PtTime2 } = this.state
		return (
            <div className="container">
				<div className="box">
					<form onSubmit={this.submitHandler}>
						<h1>Alterar Resultado</h1>
						<div className="campos">
							<h3>Ponto time 1</h3>
							
							<input
								type="number"
								name="PtTime1"
								value={PtTime1}
								onChange={this.changeHandler}
							/>
						</div>
						<div className="campos">
							<h3>Ponto time 2</h3>
                            
							<input
								type="number"
								name="PtTime2"
								value={PtTime2}
								onChange={this.changeHandler}
							/>
						</div>
						<br/>
						<button type="submit">Alterar</button>
						<button onClick={this.apagar}>Apagar</button>
					</form>
				</div>
			</div>

        )
    }
}