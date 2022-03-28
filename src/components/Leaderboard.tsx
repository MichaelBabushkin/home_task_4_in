import React, {useState,useEffect} from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@material-ui/core/Button';
import useStyles from "./Style";
import { RankRow } from "./Types";
import { ILeaderboard } from "./Interfaces";

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Rank',
    width:10,
    flex: 1
  },
  {
    field: 'nickname',
    headerName: 'Nickname',
    sortable: false,
    flex: 1
  },
  {
    field: 'moves',
    headerName: 'Highscore(moves)',
    flex: 1
  },
  {
    field: 'time',
    headerName: 'Time',
    sortable: false,
    flex: 1
  },
  {
    field: 'date',
    headerName: 'Date',
    sortable: false,
    flex: 1
  },
];


const Leaderboard: React.FC<ILeaderboard> = ({ setStartNewGameEvent}) => {

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
    let prevLeaderboardArr = prevLeaderboard ? JSON.parse(prevLeaderboard) : [];
    setHighscoreData(prevLeaderboardArr)
  }, [])
  

    return (
      <div className={classes.leaderboard}>
        <DataGrid
          getRowId={(row) => row.id}
          rows={highscoreData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
        <Button variant="contained" color="primary" className = {classes.newGameBtn} onClick={() =>setStartNewGameEvent(true)}> Start New Game</Button>
      </div>

      );
}

export default Leaderboard;