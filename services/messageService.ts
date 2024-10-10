import { ref } from 'vue';

export interface MessageService {
    fallbackMessage: Ref<string>;
    showMessage: Ref<boolean>;
    closeMessage: () => void;
    showMessageFn: (message: string) => void;
}

const fallbackMessage = ref<string>('');
const showMessage = ref<boolean>(false);
const timeout = 3000;

const closeMessage = (): void => {
    showMessage.value = false;
};

const showMessageFn = (message: string): void => {
    fallbackMessage.value = message;
    showMessage.value = true;

    setTimeout(() => {
        closeMessage();
    }, timeout);
};

export const useMessageService = (): MessageService => {
    return {
        fallbackMessage,
        showMessage,
        closeMessage,
        showMessageFn,
    };
};
