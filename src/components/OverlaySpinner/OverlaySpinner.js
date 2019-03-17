import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const OverlaySpinner = ({ classes: { root } }) => {
  return (
    <div className={root}>
      <CircularProgress variant="indeterminate" color="secondary" />
    </div>
  );
};

export default withStyles(styles)(OverlaySpinner);
