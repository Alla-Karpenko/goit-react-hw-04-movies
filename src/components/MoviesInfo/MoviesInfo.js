// import React, { Component } from 'react';
// import { Link} from 'react-router-dom';
// import { fetchSearch }from '../../services/moviesApi';
// import routes from '../../services/routes';

// export default class MoviesInfo extends Component {
//     state = {
//         movie: null ,
//         status: 'idle',
//         error: null,
//     }

//     componentDidUpdate(prevProps, prevState) {
//         const prevFilm  = prevProps.movie;
//         const nextFilm = this.props.movie;
        
//         if (prevFilm !== nextFilm) {
//             this.setState({ status: 'pending' })

//             fetchSearch(nextFilm)
//             .then(movie => this.setState({ movie, status: 'resolved' }))
//             .catch(error => this.setState({ error, status: 'rejected' }))
//         }
//     };
   
//     render() {
//         const { movie, error, status } = this.state;
     
//         if(status === 'idle'){
//             return <div>Введите название фильма</div>
//         }
    
//         if(status === 'pending'){
//             return <div>Загружаем...</div>
//         }
    
//         if(status === 'rejected'){
//             return <h1>С таким названием нет фильма</h1>
//         }
    
//         if(status === 'resolved'){
//             return (
//                 <ul>
//                     {movie.map( movies => (
//                     <li key={movies.id}>
//                        <Link to={`${routes.movie}/${movies.id}`}>{movies.title }</Link>
//                     </li>))}
//                 </ul>
//             )
//         }
//     }
// }

