import combinedContext from "@/utils/CombinedProvider";
import { AuthContextProvider } from "./UseContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
import { WorkspacePreferenceModalsContextProvider } from "./WorkspreferenceModals";

export const AppcontextProvider = combinedContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferenceModalsContextProvider
);