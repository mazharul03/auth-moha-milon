import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const authInfo = {name: 'nodi sagar khal bil'}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.protoTypes = {
    children: PropTypes.node
}


/**
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the Auth provider file in the main.jsx
 * 4. access children in the Auth provider component children and use it in the middle of the provider **/