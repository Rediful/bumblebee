import React, { ReactNode } from 'react';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

export interface ListItems {
  icon?: ReactNode;
  primary: string;
  to: string;
}

export const LINK_ITEMS: Array<ListItems> = [
  {
    icon: <InboxIcon />,
    to: '/',
    primary: 'Main',
  },
  {
    icon: <DraftsIcon />,
    to: '/chat',
    primary: 'Chat',
  },
];
