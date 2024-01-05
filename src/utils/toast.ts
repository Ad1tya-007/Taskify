import { toast } from 'react-hot-toast';

export const showToastSuccess = (message: string, theme: string) => {
  toast.success(message, {
    style: {
      background: theme == 'light' ? 'red' : 'green',
      color: '#ffffff',
    },
  });
};

export const showToastError = (message: string, theme: string) => {
  toast.error(message, {
    style: {
      background: theme === 'light' ? '#ffffff' : 'red',
      color: '#ffffff',
    },
  });
};
