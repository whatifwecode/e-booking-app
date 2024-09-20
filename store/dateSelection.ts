import { defineStore } from 'pinia';

interface DateSelectionState {
    startDate: string;
    endDate: string;
    timeSlots: string[];
    selectedTimeSlot: string | null;
}

export const useDateSelectionStore = defineStore('dateSelection', {
    state: (): DateSelectionState => ({
        startDate: '',
        endDate: '',
        timeSlots: [],
        selectedTimeSlot: null,
    }),
    actions: {
        setStartDate(date: string) {
            this.startDate = date;
        },
        setEndDate(date: string) {
            this.endDate = date;
        },
        setTimeSlots(slots: string[]) {
            this.timeSlots = slots;
        },
        setSelectedTimeSlot(slot: string | null) {
            this.selectedTimeSlot = slot;
        },
    },
});
