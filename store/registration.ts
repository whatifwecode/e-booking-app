import { defineStore } from 'pinia';

interface RegistrationData {
    fullName: string;
    phone: string;
    email: string;
    idNumber: string;
}

export const useRegistrationStore = defineStore('registration', {
    state: () => ({
        registrationData: {
            fullName: '',
            phone: '',
            email: '',
            idNumber: '',
        } as RegistrationData,
    }),
    actions: {
        setRegistrationData(data: Partial<RegistrationData>) {
            this.registrationData = { ...this.registrationData, ...data };
        },
    },
});
