import React from 'react';
import { useHistory, Link } from 'react-router-dom';


export default function SavedList(props) {
  // const history = useHistory;

  // const routeToHome = () => {
  //   history.push('/')
  // }

  return (
    <div className='saved-list'>
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className='saved-movie'>{movie.title}</span>
      ))}
      <Link to={'/'}>
      <div className='home-button'>Home</div>
      </Link>
    </div>
  )
}
