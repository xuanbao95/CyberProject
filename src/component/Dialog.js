import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import playVideo from "../images/img/play-video.png";
export default function Dialog1(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="play">
            <img src={playVideo} onClick={handleClickOpen} />
            <Dialog onClose={handleClose} aria-labelledby="draggable-dialog-title" open={open}  >
                <iframe width="560" height="315" src={props.trailer}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Dialog >
        </div >
    )
}
