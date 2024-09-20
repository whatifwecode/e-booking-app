// ~/services/timeSlotService.ts

const mockTimeSlots = {
    '2024-09-21': ['09:00 - 09:30', '10:00 - 10:30', '11:00 - 11:30'],
    '2024-09-22': ['13:00 - 13:30', '14:00 - 14:30', '15:00 - 15:30'],
    '2024-09-23': ['09:00 - 09:30', '10:30 - 11:00', '14:00 - 14:30'],
    '2024-09-15': ['09:00 - 09:30', '10:00 - 10:30'],
    '2024-09-29': ['11:00 - 11:30', '14:00 - 14:30'],
};

export const fetchTimeSlotsFromApi = async (start: string, end: string): Promise<string[]> => {
    return new Promise<string[]>((resolve) => {
        setTimeout(() => {
            const availableSlots: string[] = [];
            for (const date in mockTimeSlots) {
                if (date >= start && date <= end) {
                    availableSlots.push(...mockTimeSlots[date].map(slot => `${date} ${slot}`));
                }
            }
            resolve(availableSlots);
        }, 1000); // Simulate network delay
    });
};
