import React, { Component } from 'react'
import axios from 'axios'
import api from '../../services/api'


class RegistrarTime extends Component {
	constructor(props) {
		super(props)

		this.state = {
			NomeTime: '',
			NumJogadores:''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		api
			.post(`camps/${localStorage.getItem('id')}/times`, this.state)
			.then(response => {
				console.log(response)
				
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { NomeTime, NumJogadores } = this.state
		return (
			<div className="container">
				<div className="box">
				<form onSubmit={this.submitHandler}>
					<div>
						<h3>Nome do time</h3>
						<input
							type="text"
							name="NomeTime"
							value={NomeTime}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<h3>Numero de Jogadores</h3>
						<input
							type="number"
							name="NumJogadores"
							value={NumJogadores}
							onChange={this.changeHandler}
						/>
					</div>
					<br/>
			
					<button type="submit" onClick={()=>alert("time cadastrado")}>enviar</button>
					<br/>
				</form>
				</div>
			</div>
		)
	}
}

export default RegistrarTime