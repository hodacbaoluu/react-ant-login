import { useContext } from "react"
import { AuthContext } from "./Auth"
import {Redirect, Route} from 'react-router-dom'



const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route>
            {...rest}
            render={routerProps =>
                !!currentUser ? (
                    <RouteComponent {...routerProps} />
                ) : (
                    <Redirect to={"/login"}/>
                )
            }
        </Route>
    )
}