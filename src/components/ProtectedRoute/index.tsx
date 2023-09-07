import { Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props: any) => {
  const token = Cookies.get("jwt_token");
  if (token === undefined) {
    return <Navigate to="/login" />;
  } 
  return <Route {...props} />;
};

export default ProtectedRoute;