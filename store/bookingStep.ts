import { defineStore } from 'pinia';

export const useBookingStepStore = defineStore('bookingStep', {
  state: () => ({
    currentStep: 0,
  }),
  actions: {
    setStep(step: number) {
      this.currentStep = step;
      if (typeof window !== 'undefined') {
        localStorage.setItem('bookingStep', String(step));
      }
    },
    loadStep() {
      if (typeof window !== 'undefined') {
        const savedStep = localStorage.getItem('bookingStep');
        console.log('Loaded step from localStorage:', savedStep); // Debugging output
        if (savedStep) {
          this.currentStep = Number(savedStep);
        } else {
          this.currentStep = 0;
        }
        console.log('Current step after load:', this.currentStep); // Debugging output
      }
    },
    resetStep() {
      this.currentStep = 0;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('bookingStep'); // Remove the stored step
      }
    },
  },
});
