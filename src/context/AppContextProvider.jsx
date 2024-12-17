import combinedContext from "@/utils/CombinedProvider";
import { AuthContextProvider } from "./UseContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";

export const AppcontextProvider = combinedContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider
);