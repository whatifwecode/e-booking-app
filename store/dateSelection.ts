// store/dateSelection.ts
import { defineStore } from 'pinia';

export const useDateSelectionStore = defineStore('dateSelection', {
    state: () => ({
        startDate: '',
        endDate: '',
        timeSlots: [] as string[],
        selectedTimeSlot: null as string | null,
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
