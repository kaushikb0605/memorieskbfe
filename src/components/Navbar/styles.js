import { makeStyles } from '@material-ui/core/styles';
import { blue, deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]:{
      padding:'5px 10px'
    }
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]:{
        fontSize:"medium"
    }
  },
  image: {
    marginLeft: '15px',
    [theme.breakpoints.down('sm')]:{
      marginLeft:'5px',
      marginRight:'2px'
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]:{
      fontSize:'small',
      paddingRight:'100px',
      color:blue

    }
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down('sm')]:{
      backgroundColor:'lime',

    }
  },
  logout:{
    [theme.breakpoints.down('sm')]:{
      justifyContent:'flex-end'
  }
  }
}));
