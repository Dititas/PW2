import { Children, createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){

    const [user,setUser]=useState(null);

    const login = (userCredentials) => {
		setUser({ id: 1, name: 'Luis', email: 'luis@gmail.com' })};
    const logout=()=>setUser(null);

    const isLogged =()=>!!user;
    const hasRole=(role)=> role&& user?.role === role;

    const contextValue = {
        user,
		isLogged,
		hasRole,
		login,
		logout,
    };

    return <AuthContext.Provider value={{contextValue}}>
        {children}
    </AuthContext.Provider>;
}
