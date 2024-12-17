import { createContext, useState } from "react";

const CreateWorkspaceContext = createContext();

 export const CreateWorkspaceContextProvider =({children})=>{

    const [openCreateWorkSpaceModal,setOpenCreateWorkSpaceModal] = useState(false);

    return(
         
          <CreateWorkspaceContext.Provider 
          value={{openCreateWorkSpaceModal,setOpenCreateWorkSpaceModal}}>
             {children}
          </CreateWorkspaceContext.Provider>

    );
 }

export default CreateWorkspaceContext;