import { createContext, useState } from 'react'

const WorkspacePreferenceModalContext = createContext();

export const WorkspacePreferenceModalsContextProvider=({children})=>{


    const [openPreference,setOpenPreference]=useState(false);

    const [intialValue,setInitialValue]=useState('Edit Workspace');
    const [workspace,setWorkspace] = useState(null);


    return(
        <WorkspacePreferenceModalContext.Provider value={{openPreference,setOpenPreference,intialValue,setInitialValue,workspace,setWorkspace}}>
          {children}
        </WorkspacePreferenceModalContext.Provider>
    );
}

export default WorkspacePreferenceModalContext;