import * as React from 'react';
import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import { Button } from './Button';

/** ============================ Components ================================ */
const DialogComponent = (props) => <MuiDialog {...props} />;
const DialogActions = (props) => <MuiDialogActions {...props} />;
const DialogContent = (props) => <MuiDialogContent {...props} />;
const DialogContentText = (props) => <MuiDialogContentText {...props} />;
const DialogTitle = (props) => <MuiDialogTitle {...props} />;

const DeleteDialog = (props) => {
  const { onClose, onClickDelete, title, message, open } = props;
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="delete-dialog-title">
      <Dialog.Title id="delete-dialog-title">{title}</Dialog.Title>
      <Dialog.Content>
        <Dialog.ContentText>{message}</Dialog.ContentText>
      </Dialog.Content>
      <Dialog.Actions>
        <Button.Text onClick={onClose}>Cancel</Button.Text>
        <Button.Text
          color="primary"
          onClick={() => {
            onClose();
            onClickDelete();
          }}
        >
          Delete
        </Button.Text>
      </Dialog.Actions>
    </Dialog>
  );
};

export const Dialog = Object.assign(DialogComponent, {
  Actions: DialogActions,
  Content: DialogContent,
  ContentText: DialogContentText,
  Delete: DeleteDialog,
  Title: DialogTitle,
});
