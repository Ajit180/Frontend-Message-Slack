import { createContext, useState } from 'react'

const WorkspacePreferenceModalContext = createContext();

export const WorkspacePreferenceModalsContextProvider=({children})=>{


    const [openPreference,setOpenPreference]=useState(false);

    const [intialValue,setInitialValue]=useState('Edit Workspace');


    return(
        <WorkspacePreferenceModalContext.Provider value={{openPreference,setOpenPreference,intialValue,setInitialValue}}>
          {children}
        </WorkspacePreferenceModalContext.Provider>
    );
}

export default WorkspacePreferenceModalContext;