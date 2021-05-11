import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlayersList from './components/PlayersList';
import Search from './components/Search';
import Player from './components/Player';

const App = () => {
   
    const [playerDetails, setPlayerDetails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    
   useEffect(() => {
       const fetchData = async() => {
         const {data} = await axios.get('https://api.npoint.io/20c1afef1661881ddc9c');
        //  console.log(data);
        setPlayerDetails(data.playerList);
        // console.log(playerDetails);
       };

       fetchData();
   },[])
  
   const onSearchSubmit= (term) => {
       setSearchTerm(term);
    //    console.log("in" +searchTerm);
   }

//    console.log("out" +searchTerm);
    return(
        <div>
            <Search playerDetails={playerDetails} onSubmit={onSearchSubmit} />
            {searchTerm ? <Player searchTerm={searchTerm} playerDetails={playerDetails} />: null}
            <PlayersList playerDetails={playerDetails} />
        </div>
    )
}

export default App;