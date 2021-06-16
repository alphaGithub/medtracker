import axios from "axios";
import { useState } from "react";
import Nav from "./Nav";
import Search from "./Search";

function Home(){
    return (
        <div>
        <Nav/>
        <Search/>
        </div>
    );
}
export default Home;