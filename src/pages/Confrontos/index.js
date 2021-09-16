import React, { Component } from 'react'
import api from "../../services/api"


class Confrontos extends Component {
	constructor(props) {
		super(props)

		this.state = {
            DataConfronto: "",
            Time1: "",
            Time2: "",
			PtTime1: 0,
			PtTime2: 0
			
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		api
			.post('camps/1/Confr', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const {  DataConfronto, Time1, Time2  } = this.state
		return (
			
			<div className="container">
				<div className="box">
					<form onSubmit={this.submitHandler}>
						<h1>Definir confrontos</h1>
						<div className="campos">
							<h3>Time 1</h3>
							
							<input
								type="text"
								name="Time1"
								value={Time1}
								onChange={this.changeHandler}
							/>
						</div>
						<div className="campos">
							<h3>Time 2</h3>
                            
							<input
								type="text"
								name="Time2"
								value={Time2}
								onChange={this.changeHandler}
							/>
						</div>
						<div className="campos">
							<h3>Data Inicial</h3>
							
							<input
								type="date"
								name="DataConfronto"
								value={DataConfronto}
								onChange={this.changeHandler}
							/>
						</div>
						<br/>
						<button type="submit">cadastrar</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Confrontos