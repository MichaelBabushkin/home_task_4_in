import React, {useState,useEffect} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


import useStyles from "./Style";


type RankRow = {
  id:number,
  rank:number,
  nickname:string,
  moves : number,
  time:string,
  date:string,
}


const columns: GridColDef[] = [
  {field: 'id', headerName: 'Rank', width: 90 },
  {
    field: 'nickname',
    headerName: 'Nickname',
    sortable: false,
    width: 150,
  },
  {
    field: 'moves',
    headerName: 'Highscore(moves)',
    width: 150,
  },
  {
    field: 'time',
    headerName: 'Time',
    sortable: false,
    width: 110,
  },
  {
    field: 'date',
    headerName: 'Date',
    sortable: false,
    width: 160,
  },
];



function Leaderboard(){
  const classes = useStyles();
  const [highscoreData, setHighscoreData] = useState<Array<RankRow>>([{
    id:0,
    rank:0,
    nickname:"",
    moves : 0,
    time:"",
    date:"",
  }])
  
  useEffect(() => {
    
    let prevLeaderboard = localStorage.getItem('leaderboard') || '';
    console.log(prevLeaderboard);
    
    let prevLeaderboardArr = prevLeaderboard ? JSON.parse(prevLeaderboard) : [];

    setHighscoreData(prevLeaderboardArr)
  }, [])
  

    return (
    //   <TableContainer component={Paper}>
    //   <Table className={classes.leaderboardTable} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell >Rank</TableCell>
    //         <TableCell align="right">Nickname</TableCell>
    //         <TableCell align="right">Highscore(moves)</TableCell>
    //         <TableCell align="right">Time</TableCell>
    //         <TableCell align="right">Date</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {highscoreData.map((row,index) => (
    //         <TableRow key={index+1}>
    //           <TableCell component="th" scope="row">
    //             {index+1}
    //           </TableCell>
    //           <TableCell align="right">{row.nickname}</TableCell>
    //           <TableCell align="right">{row.moves}</TableCell>
    //           <TableCell align="right">{row.time}</TableCell>
    //           <TableCell align="right">{row.date}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row.id}
        rows={highscoreData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        disableSelectionOnClick
      />
    </div>

      );
}

export default Leaderboard;