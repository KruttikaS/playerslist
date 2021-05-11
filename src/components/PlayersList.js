import React  from 'react';
import {Card, Grid, CardContent} from '@material-ui/core';
import './PlayerList.css';
import logo from '../playerImages/101528.jpg';
const PlayersList = ({playerDetails}) => {

    
return(<div>
   
   <ul className="grid_list">
      {playerDetails && playerDetails.length > 0 ? 
          playerDetails.map((player, i) => {

               var date = new Date(player.UpComingMatchesList[0].MDate);
               var dd = date.getDate(); 
               var mm = date.getMonth()+1;
               var yyyy = date.getFullYear(); 
               var time= date.toLocaleTimeString();
               if(dd<10){dd='0'+dd} 
              if(mm<10){mm='0'+mm};
              const d = dd+'/'+mm+'/'+yyyy+ ' '+time;
              {/* console.log(d); */}

              const url= `../playerImages/${player.Id}.jpg`;
              console.log(url);

              return(
     
        <Grid item xs={11} key={i}>
         <Card className="card-style" style={{backgroundColor:'#ffd56b'}}>
           <CardContent style={{textAlign:'justify', marginLeft:'40px'}}>
                {/* <img src={`../playerImages/${player.Id}.jpg`} width="50px"  height="50px" alt="PlayerPhoto"/> */}
                <img src={url}  alt="PlayerPhoto" style={{borderRadius:"50%",width:"100px", height:"100px"}}/>
               <p>{player.PFName}</p>
               <p>{player.SkillDesc}</p>
                 <p>{`$: ${player.Value}`}</p>
                 <p>{`${player.CCode} vs ${player.UpComingMatchesList[0].VsCCode}`}</p>
                 <p>{d}</p> 
                {/* <p>{localDate}</p> */}
          </CardContent>
         </Card>
      </Grid>
      
              )
          }) : null
      }
  </ul>
  
</div>)
  

}
export default PlayersList;