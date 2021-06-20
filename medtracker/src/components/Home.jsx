import Nav from "./Nav";
import Search from "./Search";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from "../script/style";


function Home(){
    const classes = useStyles();

    return (
        <div>
        <Nav/>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Search/>
        </div>
         </Container>
    </div>
    );
}
export default Home;
<Nav/>
                