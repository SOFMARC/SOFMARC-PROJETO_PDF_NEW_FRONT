import React, { Fragment } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Slide from "@mui/material/Slide";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})

  (({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// BASIC CARD FOR CUSTOM
export function Basiccard() {
  const [expanded, setExpanded] = React.useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <Fragment>
      {show ?

        (
          <Card className="custom-card">
            <CardActions className="card-header custom-card-header border-bottom-0 ">
              <h5 className="main-content-label tx-dark my-auto tx-medium mb-0">
                Basic Card
              </h5>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                onClick={() => setShow(false)}
                aria-label="close"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto">
              <div className="card-body">
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
                in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                metus varius laoreet
              </div>
              <div className="card-footer">This is Basic card footer</div>
            </Collapse>
          </Card>
        ) : null}
    </Fragment>
  );
}
// Fullscreenbutton
export function Fullscreenbutton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = React.useState(true);
  return (
    <div>
      {show ? (
        <Card className="custom-card">
          <CardActions className="card-header custom-card-header border-bottom-0 ">
            <h5 className="main-content-label tx-dark my-auto tx-medium mb-0">
              Basic Card
            </h5>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
            <FullscreenIcon variant="outlined" onClick={handleClickOpen} />
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <List sx={{ position: "relative" }}>
                <Toolbar>
                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" >fullscreen button</Typography>
                  <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close" className="me-2">
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </List>
              <List>
                <ListItem>
                  <ListItemText secondary="Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                  non proident,sunt in culpa qui officia deserunt mollit anim id est laborum" />
                </ListItem>
              </List>
            </Dialog>
            <IconButton size="small" edge="start" color="inherit"
              onClick={() => setShow(false)} aria-label="close" ><CloseIcon fontSize="small" />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto">
            <div className="card-body">
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
              metus varius laoreet
            </div>
            <div className="card-footer">This is Basic card footer</div>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
}
