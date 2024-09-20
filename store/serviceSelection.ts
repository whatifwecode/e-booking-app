import { defineStore } from 'pinia';
interface AppointmentState {
    selectedService: string;
    selectedDoctor: string;
}

export const useAppointmentStore = defineStore('appointment', {
    state: (): AppointmentState => ({
        selectedService: '',
        selectedDoctor: '',
    }),
    actions: {
        setService(service: string) {
            this.selectedService = service;
        },
        setDoctor(doctor: string) {
            this.selectedDoctor = doctor;
        },
    },
});
