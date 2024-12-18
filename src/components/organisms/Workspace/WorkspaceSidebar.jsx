import { UserButton } from "@/components/atoms/UserButton/UserButton";
import { SideBarButton } from "@/components/molecules/SideBarButtons/SideBarButton";
import { BellIcon, HomeIcon, MessageSquareIcon, MoreHorizontalIcon } from "lucide-react";

export const WorkspaceSidebar=()=>{
    return(
        <aside className="w-[70px] h-full bg-slack-dark flex flex-col 
        gap-y-4 items-center pt-[10px] pb-[5px]">

            <SideBarButton
              Icon={HomeIcon}
              label="Home"
            />

             <SideBarButton
              Icon={MessageSquareIcon}
              label="DMs"
            />

            <SideBarButton
              Icon={BellIcon}
              label="Notifications"
            />

             <SideBarButton
              Icon={MoreHorizontalIcon}
              label="More"
            />
             
             <div className="flex flex-col items-center justify-center mt-auto mb-5 gap-y-1">
                <UserButton/>
             </div>


        </aside>
    );
}