import React, {Component} from 'react'
import Card from './card'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

class MainScreen extends Component{
  render(){
    return(
      <div>
        <div className="header">
          <div className="header_logo">
            <img src="https://cdn4.iconfinder.com/data/icons/SUNNYDAY/project_managment/png/72/holidays.png" alt='error'/>
            <Link to='/'>
              <h1>Выходные в СПБ</h1>
            </Link>
          </div>         
          <div className="header_sort">
            <button onClick={()=> { this.forceUpdate() ; this.props.onDecrease()}}>По убыванию</button>
            <button onClick={()=> { this.forceUpdate(); this.props.onIncrease()}}>По возрастанию</button>
          </div>
          <div className="header_filter"> 
            <button onClick={()=> {this.props.onReset() ; this.forceUpdate(); this.props.onFilter('festival')}}>Фестивали</button>
            <button onClick={()=> {this.props.onReset() ; this.forceUpdate(); this.props.onFilter('cinema')}}>Кино </button>
            <button onClick={()=> {this.forceUpdate(); this.props.onReset()}}>Cброс </button>
          </div>
          <div className="header_search">
            <input type='text' placeholder="Поиск" value={this.props.search} onChange={(event)=>{this.props.onSearchInputChange(event.target.value)}}></input>
            <button onClick={()=>{this.props.onReset() ; this.forceUpdate(); this.props.onSearch(this.props.search)}}>Найти</button>
            <button onClick={()=> {this.forceUpdate(); this.props.onReset()}}>Cброс </button>
          </div>
          <Link to='/favorites'>Избранные</Link>
        </div>
        <div className="card_container">
          {this.props.events.map(event => <Card event={event} key={event.id}/>)}
        </div>
      </div>
    )
  }   
}

function mapStateToProps(state) {
  return {
    events: state.events.events,
    search: state.events.search
  }
}
  
function mapDispatchToProps(dispatch) {
  return {
    onDecrease: ()=> dispatch({type: 'DECREASE'}),
    onIncrease: ()=> dispatch({type: 'INCREASE'}),
    onFilter: (filterType)=> dispatch({type: 'FILTER', value: filterType}),
    onReset: ()=> dispatch({type: 'RESET_EVENTS'}),
    onSearchInputChange: (event)=>dispatch({type: 'INPUTCHANGE', value: event}),
    onSearch: (search)=>dispatch({type: 'SEARCH', value: search})
  }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(MainScreen)