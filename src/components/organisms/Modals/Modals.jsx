import { CreateWorkspaceModals } from "@/components/molecules/CreateWorkspaceModals/CreateWorkspaceModals";
import { WorkspacePanel } from "../Workspace/WorkspacePanels";
import WorkspacePreferenceModalContext from "@/context/WorkspreferenceModals";
import { WorkSpacePreferenceModals } from "@/components/molecules/Workspace/WorkspacePreferanceModals";

export const Modals =()=>{
    return(
        <>
           <CreateWorkspaceModals/>
           <WorkSpacePreferenceModals/>
        </>
    );
}