import AuthContext from "@/context/UseContext"
import { useContext } from "react"

export const useAuth=()=>{
    return useContext(AuthContext);
};