import React , {Component} from 'react'
import {connect} from 'react-redux'
import Card from './card'
import { Link } from 'react-router-dom'

class Favorites extends Component {
  render(){
    return(
      <div className="favorites" >
        <div className="header">
          <div className="header_logo">
            <img src="https://cdn4.iconfinder.com/data/icons/SUNNYDAY/project_managment/png/72/holidays.png" alt='error'/>
            <Link to='/'>
              <h1>Выходные в СПБ</h1>
            </Link>
          </div>
        </div>
        <h1 className="favorites_title">Избранные события</h1>
        <div className='card_container'>
          {this.props.favorites.length === 0 ?  <p>Нет избранных событий</p> : this.props.favorites.map((event)=> <Card event={event} key={event.id}/>)}
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

export default connect(mapStateToProps)(Favorites)