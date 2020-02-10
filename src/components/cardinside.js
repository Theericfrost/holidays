import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class CardInside extends Component {
  render() {
    return(
      <div>
        <div className="header">
          <div className="header_logo">
            <img src="https://cdn4.iconfinder.com/data/icons/SUNNYDAY/project_managment/png/72/holidays.png" alt='error'/>
            <Link to='/'>
              <h1>На главную</h1>
            </Link>
          </div>
        </div>
        <div className="card_inside">
          <h1>{this.props.events.find((event)=> event.id.toString() === this.props.match.params.id).title}</h1>
          {this.props.events.find((event)=> event.id.toString() === this.props.match.params.id).image ? <img src={this.props.events.find((event)=> event.id.toString() === this.props.match.params.id).image} alt="error"/> : null}
          <p>{this.props.events.find((event)=> event.id.toString() === this.props.match.params.id).description}</p>
          <p>{this.props.events.find((event)=> event.id.toString() === this.props.match.params.id).body}</p>
          {this.props.events.find((event)=> event.id.toString() === this.props.match.params.id).price? <h3>Цена {this.props.events.find((event)=> event.id.toString() === this.props.match.params.id).price} руб.</h3> : <h3>Посещение бесплатно</h3> }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events.events
  }
}
  
export default connect(mapStateToProps)(CardInside)