import "./Mail.css";
import React from 'react'
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useHistory } from "react-router-dom";
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { selectOpenMail } from "./features/mailSlice";
import {useSelector} from "react-redux";
export default function (props) {
    
    const history =useHistory();
    const selectedMail= useSelector(selectOpenMail);
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
<IconButton onClick={()=>history.push("/")}>
<ArrowBackIcon/>
</IconButton>
<IconButton>
<MoveToInboxIcon/>
</IconButton>
<IconButton>
<ErrorIcon/>


</IconButton>
<IconButton>
    <DeleteIcon/>


</IconButton>
<IconButton>
<ClearIcon/>
</IconButton>
<IconButton><WatchLaterIcon/>
</IconButton>
<IconButton><CheckCircleIcon/>
</IconButton>
<IconButton><LabelImportantIcon/>
</IconButton>
<IconButton><MoreVertIcon/>
</IconButton>
                </div>
                <div className="mail__toolsRight">
                
<IconButton><UnfoldMoreIcon/>
</IconButton>
<IconButton><PrintIcon/>
</IconButton>
<IconButton><MoveToInboxIcon/>
</IconButton>
                </div>
            </div>
            <div className="mail__body">
<div className="mail__bodyHeader">
    <h2>
        {selectedMail?.subject}
        </h2>
        <LabelImportantIcon className="mail__important"/>
        <p className="mail__title">
        {selectedMail?.title}
        </p>
        <p className="mail__time">
        {selectedMail?.time}
        </p>
    
</div>
<div className="mail__message">
  <p>
  {selectedMail?.description}
  </p>
</div>
            </div>
        </div>
    )
}
