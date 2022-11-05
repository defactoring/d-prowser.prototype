import React from 'react';
import {Dialog} from '@mui/material';

type Props = {
  open: boolean
  onClose: () => void
}

export const AddDialog: React.FC<Props> = ({open, onClose}) => <Dialog open={open} onClose={onClose}>
  dialog
</Dialog>
