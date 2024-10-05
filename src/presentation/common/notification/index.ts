import { toasts } from 'svelte-toasts';

interface IMessage {
    title?: string;
    description?: string;
    placement?:
    | 'bottom-right'
    | 'bottom-left'
    | 'top-right'
    | 'top-left'
    | 'top-center'
    | 'bottom-center'
    | 'center-center';
}

export const message = {
    success: (options: IMessage): any => {

        return toasts.add({
            title: options.title || '',
            description: options.description || '',
            duration: 1500, // 0 or negative to avoid auto-remove
            placement: 'top-left',
            theme: 'dark',
            showProgress: false,
            type: 'success'
        });
    },
    info: (options: IMessage): any => {
        return toasts.add({
            title: options.title || '',
            description: options.description || '',
            duration: 2000, // 0 or negative to avoid auto-remove
            placement: 'top-left',
            theme: 'dark',
            showProgress: false,
            type: 'info'
        });
    },
    warning: (options: IMessage): any => {
        return toasts.add({
            title: options.title || '',
            description: options.description || '',
            duration: 2000, // 0 or negative to avoid auto-remove
            placement: 'top-left',
            theme: 'dark',
            showProgress: false,
            type: 'warning'
        });
    },
    error: (options: IMessage): any => {
        return toasts.add({
            title: options.title || '',
            description: options.description || '',
            duration: 2000, // 0 or negative to avoid auto-remove
            placement: 'top-left',
            theme: 'dark',
            showProgress: false,
            type: 'error'
        });
    }
};