import Nav from "./Nav";
import Search from "./Search";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from "../script/style";
import AuthApi from "../script/authApi";
import { useContext } from "react";

function Home(){
    const classes = useStyles();
    const authApi = useContext(AuthApi);

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
                