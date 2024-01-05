import { toast } from 'react-hot-toast';

export const showToastSuccess = (message: string, theme: string) => {
  toast.success(message, {
    style: {
      background: theme == 'light' ? 'white' : 'rgb(51 65 85)',
      color: theme === 'light' ? 'black' : 'white',
    },
  });
};

export const showToastError = (message: string, theme: string) => {
  toast.error(message, {
    style: {
      background: theme === 'light' ? 'white' : 'rgb(51 65 85)',
      color: theme === 'light' ? 'black' : 'white',
    },
  });
};
