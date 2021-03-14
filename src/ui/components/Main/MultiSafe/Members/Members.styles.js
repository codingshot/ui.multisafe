import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: 'calc(100% - 48px)',
  },
  header: {
    margin: '30px 12px',
    fontWeight: 900
  },
  tableRow: {
    '&:hover': {
      backgroundColor: "rgba(0, 0, 0, 0.04)"
    }
  },
  table: {
    tableLayout: 'fixed',
    minWidth: 620
  },
  tableCell: {
    padding: "16px",

  },
  tableCellActions: {
    padding: "0 16px",
  }
};

export const useStyles = makeStyles(styles, { name: 'Members' });
