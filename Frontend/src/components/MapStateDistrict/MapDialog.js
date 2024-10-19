import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Tooltip } from 'react-tooltip';
import StateChart from './StateChart';

const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'relative',
      backgroundColor: '#509609',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    overlayContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 10,  // Ensure it stacks over other content
      backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Semi-transparent background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlayContent: {
      width: '80%',
      height: '80%',
      backgroundColor: 'black',
      borderRadius: '10px',
      padding: theme.spacing(2),
      position: 'relative',
      zIndex: 11,
    },
}));

const MapOverlay = props => {
    const classes = useStyles();
    const [contentD, setContentD] = useState("");
    const [DTName, setDTName] = useState("");

    return (
        <>
            {/* Conditional rendering: Overlay only when props.show is true */}
            {props.show && (
                <div className={classes.overlayContainer}>
                    <div className={classes.overlayContent}>
                        <AppBar className={classes.appBar}>
                            <Toolbar>
                                <IconButton edge="start" color="inherit" onClick={props.closeModal} aria-label="close">
                                    <CloseIcon />
                                </IconButton>
                                {!DTName ? (
                                    <Typography variant="h6" className={classes.title}>
                                        No district selected
                                    </Typography>
                                ) : (
                                    <Typography variant="h6" className={classes.title}>
                                        Selected District: {DTName}
                                    </Typography>
                                )}
                            </Toolbar>
                        </AppBar>
                        <CssBaseline />
                        <Container maxWidth="md" style={{ height: '100%' }}>
                            {/* StateChart should use data-tooltip-content and data-tooltip-id */}
                            <StateChart setTooltipContent={setContentD} setDistrictName={setDTName} selectedState={props.StateName} />
                            
                            {/* Tooltip component with the matching ID */}
                            <Tooltip id="district-tooltip" />
                        </Container>
                    </div>
                </div>
            )}
        </>
    );
};

export default MapOverlay;
