export const statusColor = (status: 'Paid' | 'Pending' | 'Overdue') => {
  switch (status) {
    case 'Paid':
      return 'success';
    case 'Pending':
      return 'warning';
    case 'Overdue':
      return 'destructive';
    default:
      return 'info';
  }
}
