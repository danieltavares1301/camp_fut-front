import React, { Component } from 'react'
import axios from 'axios'
import _map from 'lodash/map'
import { Link } from 'react-router-dom'

export default class VerTimes extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  getData(){
    axios.get(`http://localhost:5500/camps/${localStorage.getItem("id")}/times`).then(res => {
      var data = res.data
      this.setState({data : data})
    })
  }
  componentDidMount(){
    this.getData()
   
  }
  render() {
    return (
      <div className="container">
        <div className="box">
        <ul>
        {_map(this.state.data.times, d => {return(
            <article key={d.id} className="listar">
                <strong>{d.NomeTime}</strong>
                {localStorage.setItem(`${d.NomeTime}`, d.NomeTime)}
            </article>
            
        )})} 
      </ul>
          <div>
            <button type="button"> <Link to="/confrontos">Confrontos</Link></button>
          </div>
        </div>
      </div>
    )
  }
}