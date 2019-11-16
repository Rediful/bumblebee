import React from 'react';
import { ListItems } from '../../constants/global';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Omit } from '@material-ui/types';

const index: React.FC<ListItems> = (props: ListItems) => {
  const { icon, primary, to } = props;

  const RenderLink = React.useMemo(() => {
    const RouterLink = React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'innerRef' | 'to'>>(
      (itemProps, ref) => (
        // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
        // See https://github.com/ReactTraining/react-router/issues/6056
        <Link to={to} {...itemProps} innerRef={ref} />
      ),
    );
    RouterLink.displayName = 'RouterLink';
    return RouterLink;
  }, [to]);

  return (
    <ListItem button component={RenderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
};

export default index;
