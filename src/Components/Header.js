import {NavLink} from "react-router-dom";
import React from "react";

const Header = ()=>(
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true} >DASHBOARD </NavLink>
        <NavLink to="/create" activeClassName="is-active">EXPENSE </NavLink>
        <NavLink to="/edit" activeClassName="is-active">EDIT </NavLink>
        <NavLink to="/help" activeClassName="is-active">HELP </NavLink>
    </div>

)

export default Header