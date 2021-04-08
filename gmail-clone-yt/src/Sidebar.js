import { Button, IconButton } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NoteIcon from '@material-ui/icons/Note';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch} from "react-redux";
import { openSendMessage } from './features/mailSlice';
export default function Sidebar(props) {
    
 const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button className="sidebar__compose" onClick={()=>dispatch(openSendMessage())} startIcon={<AddIcon fontSize="large" />}  >Compose</Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number ={54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number ={54} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number ={54} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number ={54} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number ={54} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number ={54} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number ={54} />
            
            
            
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
<PersonIcon/>
                    </IconButton>
                    <IconButton>
<DuoIcon/>

                    </IconButton>
                    <IconButton>
<PhoneIcon/>
                    </IconButton>
                </div>
            </div>

            

        </div>
    )
}
