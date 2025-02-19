import {useState,useEffect} from 'react'; 
import './App.css';
import SearchIcon from './Search.svg';
import MovieCard from './MovieCard';    


const API_URL = 'https://www.omdbapi.com?apikey=6e157c62';  

const App = () => {

    const [movies , setMovies] = useState([]);
    const [scarchTerm, setScarchTerm] = useState('');   



    const fetchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data =  await response.json();
        console.log(data); // Add this line to log the data
        setMovies(data.Search);
    }


    useEffect(() => {
        fetchMovies('batman');  
    },[]);
    
    return(
        <div className='app'>
            <h1>75MovieRulz</h1>

            <div className='search'>
                <input placeholder='Scarch for the movie'
                value= {scarchTerm}
                onChange={(e) => setScarchTerm(e.target.value)} 
                />
                <img 
                src={SearchIcon} 
                alt="scarch"
                onClick={() => fetchMovies(scarchTerm)}
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className='container'>
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie} />
                            )
                        )}
                    </div>

                ) : (
                    <div className = 'empty'>
                        <h2> No Movie Found</h2>
                    </div>
                ) 
            }
        </div>

        
    );
}



export default App;