import {NavLink, useLocation} from "react-router-dom";

export default function Querynavlink({to, ...props}) {
    let location = useLocation();
    // console.log("to =>", to);
    // console.log(props);
    // console.log(location);
    return (<NavLink to={to + location.search} {...props} />);
}
