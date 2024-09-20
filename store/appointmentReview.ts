import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useRegistrationStore } from '~/store/registration';
import { useServiceSelectionStore } from '~/store/serviceSelection';
import { useDateSelectionStore } from '~/store/dateSelection';

interface User {
    fullName: string;
    email: string;
    phone: string;
    idNumber: string;
}

interface Service {
    name: string;
    description?: string;
}

interface Doctor {
    name: string;
    specialization: string;
}

interface TimeSlot {
    start: string;
    end: string;
}

interface ReviewData {
    user: User;
    service: Service;
    doctor: Doctor;
    timeSlot: TimeSlot;
}

export const useAppointmentReviewStore = defineStore('appointmentReview', () => {
    const registrationStore = useRegistrationStore();
    const serviceSelectionStore = useServiceSelectionStore();
    const dateSelectionStore = useDateSelectionStore();

    const reviewData = computed<ReviewData>(() => ({
        user: registrationStore.registrationData,
        service: serviceSelectionStore.selectedService,
        doctor: serviceSelectionStore.selectedDoctor,
        timeSlot: dateSelectionStore.selectedTimeSlot,
    }));

    return {
        reviewData,
    };
});
