import CreateWorkspaceContext from "@/context/CreateWorkspaceContext"
import { useContext } from "react"

export const useCreateWorkspaceModals =()=>{

    return useContext(CreateWorkspaceContext);
};