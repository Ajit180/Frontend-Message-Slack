import WorkspacePreferenceModalConxtext from "@/context/WorkspreferenceModals"
import { useContext } from "react"

export const useWorkPreferenceModal=()=>{
    return useContext(WorkspacePreferenceModalConxtext);
}