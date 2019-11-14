import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemLink from '../ListItemLink';
import { LINK_ITEMS } from '../../constants/global';
import { useStyles } from './styles';
import { useTheme } from '@material-ui/core/styles';

interface Props {
  open: boolean;
  handleCloseDrawer: () => void;
}

const index: React.FC<Props> = ({ open, handleCloseDrawer }: Props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleCloseDrawer}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {LINK_ITEMS.map(item => (
          <ListItemLink {...item} key={item.primary} />
        ))}
      </List>
    </Drawer>
  );
};

export default index;
