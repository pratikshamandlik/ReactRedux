import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

import {connect} from 'react-redux';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import {TextField, OutlinedInput, CircularProgress, InputBase} from '@material-ui/core';
import PropTypes from 'prop-types';
import FormLabel from '@material-ui/core/FormLabel';
import Logo from '../../logo192.png';
import Bg from '../../DSC_1695.JPG';
import { mergeClasses } from "@material-ui/styles";
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Persons1 from "../../containers/Persons1";
import * as actionTypes from '../../store/actions';



const useStyles=makeStyles(theme => ({
    root:{
        flexGrow:1,
        padding:1,
        height:'100vh',
        width:'100%'
    },
    leftPanel:{
        width:'50%',
        float:'left',
       backgroundColor:'white',
       height:'calc(100%-0px)',
       minHeight:'calc(100%-0px)',
       backgroundSize:'cover',
       backgroundPosition:'center right',
       backgroundRepeat:'no-repeat',
       "&::before":{
           height:'calc(100%-0px)',
           minHeight:'calc(100%-0px)'
       },
       "&::after":{
        height:'calc(100%-0px)',
        minHeight:'calc(100%-0px)'
    },

    },
    rightPanel:{
        width:'50%',
        float:'left',
        position:'relative',
        top:'50%',
        transform:'translateY(-50%)',
        backgroundColor:'#e6e6e6'
    },
    headerFont:{
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"start",
        paddingTop:7,
        paddingRight:10,
        fontWeight:700
    },
    centerContent:{
        display:'flex',
        flex:'1 1 auto',
        flexDirection:'column',
        justifyContent:'flex-start',
        width:'50%',
        marginButtom:25,
        margin:'0 auto'
    },
    mainHeader:{
        fontSize:16,
        fontWeight:600,
        marginButtom:20,
        color:'#000'
    },
    formGroup:{
        display:'flex',
        flexWrap:'wrap',
        marginButtom:15,
        width:'100%'
    },
    groupContent:{
        display:'flex',
        color:'#000'
    },
    textControl:{
        fontSize:14,
        padding:'15px !important',
        border: "2px solid red"
       // color:'#000'
    },
    buttonProgress:{
        position:'absolute',
        top:'50%',
        left:'50%',
        marginTop:-12,
        marginLeft:-12,
    },
    relativeContent:{
        width:'100%',
        height:'calc(100%-100px)'
    },
    alignRight:{
        textAlign:"right"
    },
    textField:{
       "& .MuiOutlinedInput-notchedOutline":{
            borderColor:"red",
        },
       // borderColor:"blue",
        borderColor: "2px solid green",
        border: "2px solid red"

    },
    noPadding:{
        padding:'0px'
    },
    mainHeading:{
        position:'absolute',
        top:'50%',
        color:"#ffffff",
        margin:'0 auto',
        textAlign:'center',
        width:'50%',
        wordBreak:'break-word',
        whiteSpace:'normal',
        overflow:'hidden',
        padding:'0 1rem',
        fontSize:'2.5em',
        fomtWeight:200,
        transform:'translateY(-50%)'

    },
    signInButton:{
        width:'100%'
    },
    centerLogo:{
        width:'50%',
        margin:'4rem 2.5rem 0'
    },
    errorPanel:{
        position:'absolute',
        top:'-3rem'
    },
    ssoLabel:{
        width:'99%',
        position:'absolute',
        fontSize:16,
        fontWeight:600,
        bottom:10,
        color:'#616161',
        textAlign:'center'
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "yellow !important"
      }
}));

function Login({login}){
    const classes=useStyles();
    const [psid, setPSID]=useState("");
    const [password,setPassword]=useState("");
    const [success, setSuccess]=useState(false);
    const dispatch= useDispatch();
    const [loginError, setLoginError]= useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [errors, setErrors] = useState({
        psid:false,
        password:false
    })

    const handleTextChange=(event)=>{
        switch(event.target.name){
            case "user_PSID":
                setPSID(event.target.value);
                setErrors({...errors, psid:false});
                break;
            case "password":
                setPassword(event.target.value);
                setErrors({...errors, password:false});
                break;
        }
    }

    const checkEnterPressed=(event)=>{
        if(event.keyCode===13 && event.shiftKey===false){
            event.preventDefault();
            handleSubmit();
        }
    }

    const handleSubmit=()=>{
        if(psid==="" || password==="")
        {
            setErrors({
                ...errors,
                psid:(psid==="")?"Please enter psid":false,
                password:(password==="")?"Please enter password":false
            });
            
            return;
        }
       else{
      //  dispatch({type: actionTypes.LOGIN,userData:{uname:psid,pass:password}})
    //    login;
    login(psid,password);
        setIsSubmitted(true);
       }
    }

    const renderForm = (
        <div className={classes.root}>
            <div className={classes.leftPanel}>
               <div className={classes.centerLogo}>
                   <img src={Bg} alt="logo" style={{margin:'0 auto'}} />
                   </div>
                <h1 className={classes.mainHeading}>My operation</h1>
            </div>
            <div className={classes.rightPanel}>
               <div className={classes.centerContent}>
                   <h1 className={classes.mainHeader}> Welcome to dd Simplification</h1>
                   <h3 className={classes.mainHeader}>Enter PSID</h3>
                  
                   <FormControl error={(errors.psid)?true:false}>
                   <InputBase id="user_PSID"
                          name="user_PSID"
                        style={{ margin: 8, backgroundColor: "white", borderRadius: 25, borderWidth: "1px",borderColor: "yellow !important",border:'1px solid black' }}
                         placeholder="Placeholder"
                          fullWidth 
                          margin="normal"
                          startAdornment={<AccountCircle/>}
                         // classes={classes.textControl}
                          variant="outlined"                         
                          error={(errors.psid)?true:false}
                          onKeyDown={checkEnterPressed}
                          value={psid}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                           onChange={handleTextChange}
                         InputLabelProps={{
      shrink: true
    }}
  />  {(errors.psid)?<FormHelperText>Please enter PSID</FormHelperText>:false}
                   </FormControl>
                   <h3 className={classes.mainHeader}>Enter Password444</h3>
                   <FormControl error={(errors.password)?true:false}>
                   <InputBase id="password" name="password"
    style={{ margin: 8, backgroundColor: "white", borderRadius: 25 }}
    placeholder="Placeholder"
    fullWidth
    margin="normal"
    classes={classes.textField.border}
    InputLabelProps={{
      shrink: true
    }}
    error={(errors.password)?true:false}
                          onKeyDown={checkEnterPressed}
                          value={password}
                           onChange={handleTextChange}
  />
                       
                    {(errors.password)?<FormHelperText>Please enter Password</FormHelperText>:false}
                   </FormControl>
                  
                   <div style={{position:'relative',marginTop:20}}>
                     <Button size="large"
                     variant="contained"
                     color="secondary"
                     className={classes.signInButton}
                     style={{ borderRadius: 25 }}
                     onClick={handleSubmit}>Sign In </Button>


                   </div>
                   {(loginError!==false) &&
                     <FormControl variant="outlined" classes={{root:classes.errorPanel}} style={{verticalAlign:'middle',marginLeft:10}} error={(loginError)? true:false}>
                         <FormLabel component="legend" classes={{root:classes.FormLabel}} style={{margin:0}}>
                             <span style={{margin:0}}>{loginError}</span>
                         </FormLabel>
                     </FormControl>
                   }
                                   
               </div>
               </div>
               <h3 className={classes.ssoLabel}> SSO ............................</h3>
        </div>
    );

    return (
        <div className="app">
          <div className="login-form">
           
            {isSubmitted ? <Persons1></Persons1> : renderForm}
          </div>
        </div>
      );
}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      login: (id,pass) => { dispatch({type: actionTypes.LOGIN,userData:{uname:id,pass:pass}}) }

    }
  }
export default connect(null,mapDispatchToProps)(Login);