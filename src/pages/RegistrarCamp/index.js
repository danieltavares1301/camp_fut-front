import React, { Component } from 'react'
import api from "../../services/api"



class RegistrarCamp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			NomeCampeonato: '',
            Modalidade: '',
			NumTimes: '',
            Data: ''
			
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		api
			.post('camps', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const {  NomeCampeonato, Modalidade, NumTimes, Data } = this.state
		return (
			
			<div className="container">
				<div className="box">
					<form onSubmit={this.submitHandler}>
						<h1>Insira as informações do Campeonato</h1>
						<div className="campos">
							<h3>Nome do Campeonato</h3>
							
							<input
								type="text"
								name="NomeCampeonato"
								value={NomeCampeonato}
								onChange={this.changeHandler}
							/>
						</div>
						<div className="campos">
							<h3>Modalidade</h3>
                            
							<input
								type="text"
								name="Modalidade"
								value={Modalidade}
								onChange={this.changeHandler}
							/>
						</div>
						<div className="campos">
							<h3>Numero de times</h3>
							
							<input
								type="number"
								name="NumTimes"
								value={NumTimes}
								onChange={this.changeHandler}
							/>
						</div>
						<div className="campos">
							<h3>Data Inicial</h3>
							
							<input
								type="date"
								name="Data"
								value={Data}
								onChange={this.changeHandler}
							/>
						</div>
						<br/>
						<button type="submit">Cadastrar</button>
					</form>
				</div>
			</div>
		)
	}
}

export default RegistrarCamp