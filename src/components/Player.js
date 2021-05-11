import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import './PlayerList.css';
// import '../playerImages';
const Player = ({ searchTerm, playerDetails }) => {
  // let player = playerDetails.filter((player) => {
  //   return player.PFName || player.TName === searchTerm;
  // });
  // console.log(player);
  if(searchTerm){
  return (
    <div>
      {playerDetails
        .filter((player) => player.PFName === searchTerm || player.TName === searchTerm) 
        .map((selectedplayer, i) => {
          {/* console.log(selectedplayer.Id); */}
          var date = new Date(selectedplayer.UpComingMatchesList[0].MDate);
               var dd = date.getDate(); 
               var mm = date.getMonth()+1;
               var yyyy = date.getFullYear(); 
               var time= date.toLocaleTimeString();
               if(dd<10){dd='0'+dd} 
              if(mm<10){mm='0'+mm};
              const d = dd+'/'+mm+'/'+yyyy+ ' '+time;
              {/* console.log(d); */}

              const url= `../playerImages/${selectedplayer.Id}.jpg`;
              console.log(url);
          return (
            <div style={{marginLeft:'550px', marginTop:'50px'}}>
              <Grid item xs={4} key={i}>
                <Card className="card-style" style={{backgroundColor:'#ffd56b', border:'5px solid #f7a440'}}>
                  <CardContent style={{textAlign:'justify', marginLeft:'40px'}}>
                    <img
                       //src={require(`../playerImages/${selectedplayer.Id}.jpg`)}
                       src={{url}}
                    // src={require(`../playerImages/63706.jpg`)}
                        style={{borderRadius:"50%",width:"100px", height:"100px"}}
                        alt="PlayerPhoto"
                    />
                    <p>{selectedplayer.PFName}</p>
                    <p>{selectedplayer.SkillDesc}</p>
                    <p>{`$: ${selectedplayer.Value}`}</p>
                    <p>{`${selectedplayer.CCode} vs ${selectedplayer.UpComingMatchesList[0].VsCCode}`}</p>
                    <p>{d}</p>
                  </CardContent>
                </Card>
              </Grid>
            </div>
          );
        })}
    </div>
  );
};
}

export default Player;
