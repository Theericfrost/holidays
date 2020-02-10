import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Card extends Component {
  render() {
    return(
      <div className="card">
        {this.props.event.image ? <Link to={`/card/${this.props.event.id}`} event={this.props.event}><img src={this.props.event.image} alt="error"/></Link> : null}
        <Link to={`/card/${this.props.event.id}`} event={this.props.event}><h1>{this.props.event.title}</h1></Link>
        <p>{this.props.event.description}</p>
        {this.props.event.price? <h3>Цена {this.props.event.price} руб.</h3> : <h3>Посещение бесплатно</h3> }
        <div className="card_footer ">
          <div></div>
          {this.props.favorites.includes(this.props.event) ?  <div className="swing"><img className="card_favorite__img" src="https://cdn4.iconfinder.com/data/icons/refresh_cl/128/Misc/Heart_broken.png" alt="error" onClick={()=> this.props.onDelete(this.props.event)} /></div> :<div className="swing"> <img className="card_favorite__img" src='https://cdn4.iconfinder.com/data/icons/refresh_cl/128/Symbols/Favourite2.png' alt='error' onClick={()=> {this.props.onAdd(this.props.event) }} /> </div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites.favorites      
  }
}
  
function mapDispatchToProps(dispatch) {
  return {
    onAdd: (event)=> dispatch({type: 'ADD', value: event}),
    onDelete: (event)=>dispatch({type: 'DELETE', value: event})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)