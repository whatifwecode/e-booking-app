const mockTimeSlots = {
    '2024-11-26': {
        'Silmade kontroll': [
            { date: '2024-11-26', doctor: 'Dr. Maarika Tamm', timeSlots: ['09:00 - 09:30', '10:00 - 10:30', '11:00 - 11:30'], price: '50' },
            { date: '2024-11-26', doctor: 'Dr. Jaanus Kukk', timeSlots: ['09:00 - 09:30', '10:00 - 10:30', '11:00 - 11:30'], price: '55' }
        ],
        'Laseroperatsioon': [
            { date: '2024-11-26', doctor: 'Dr. Maarika Tamm', timeSlots: ['13:00 - 14:00', '14:30 - 15:30'], price: '250' }
        ],
        'Katarakti operatsioon': [
            { date: '2024-11-26', doctor: 'Dr. Anu Õun', timeSlots: ['16:00 - 17:00'], price: '350' }
        ],
        'Glaukoomi test': [
            { date: '2024-11-26', doctor: 'Dr. Maarika Tamm', timeSlots: ['09:00 - 09:30', '15:00 - 15:30'], price: '80' },
            { date: '2024-11-26', doctor: 'Dr. Jaanus Kukk', timeSlots: ['09:00 - 09:30', '15:00 - 15:30'], price: '85' }
        ],
        'Hambakivi eemaldamine': [
            { date: '2024-11-26', doctor: 'Dr. Anneli Saar', timeSlots: ['10:00 - 11:00', '14:00 - 15:00'], price: '150' }
        ],
        'Ortodontia konsultatsioon': [
            { date: '2024-11-26', doctor: 'Dr. Mari Tõnisson', timeSlots: ['11:00 - 12:00', '13:00 - 14:00'], price: '120' }
        ],
        'Psühholoogiline nõustamine': [
            { date: '2024-11-26', doctor: 'Dr. Tiina Leht', timeSlots: ['09:00 - 10:00', '13:00 - 14:00'], price: '90' }
        ],
        'EKG test': [
            { date: '2024-11-26', doctor: 'Dr. Kertu Jõgi', timeSlots: ['11:00 - 12:00', '15:00 - 16:00'], price: '70' }
        ],
        'Laste tervisekontroll': [
            { date: '2024-11-26', doctor: 'Dr. Liis Vahter', timeSlots: ['09:30 - 10:30', '14:00 - 15:00'], price: '100' }
        ],
    },
    '2024-11-27': {
        'Silmade kontroll': [
            { date: '2024-11-27', doctor: 'Dr. Maarika Tamm', timeSlots: ['09:00 - 09:30', '10:00 - 10:30', '11:00 - 11:30'], price: '50' },
            { date: '2024-11-27', doctor: 'Dr. Jaanus Kukk', timeSlots: ['09:00 - 09:30', '10:00 - 10:30', '11:00 - 11:30'], price: '55' }
        ],
        'Laseroperatsioon': [
            { date: '2024-11-27', doctor: 'Dr. Maarika Tamm', timeSlots: ['13:00 - 14:00', '14:30 - 15:30'], price: '250' }
        ],
        'Katarakti operatsioon': [
            { date: '2024-11-27', doctor: 'Dr. Anu Õun', timeSlots: ['16:00 - 17:00'], price: '350' }
        ],
        'Glaukoomi test': [
            { date: '2024-11-27', doctor: 'Dr. Maarika Tamm', timeSlots: ['09:00 - 09:30', '15:00 - 15:30'], price: '80' },
            { date: '2024-11-27', doctor: 'Dr. Jaanus Kukk', timeSlots: ['09:00 - 09:30', '15:00 - 15:30'], price: '85' }
        ],
        'Hambakivi eemaldamine': [
            { date: '2024-11-27', doctor: 'Dr. Anneli Saar', timeSlots: ['10:00 - 11:00', '14:00 - 15:00'], price: '150' }
        ],
        'Ortodontia konsultatsioon': [
            { date: '2024-11-27', doctor: 'Dr. Mari Tõnisson', timeSlots: ['11:00 - 12:00', '13:00 - 14:00'], price: '120' }
        ],
        'Psühholoogiline nõustamine': [
            { date: '2024-11-27', doctor: 'Dr. Tiina Leht', timeSlots: ['09:00 - 10:00', '13:00 - 14:00'], price: '90' }
        ],
        'EKG test': [
            { date: '2024-11-27', doctor: 'Dr. Kertu Jõgi', timeSlots: ['11:00 - 12:00', '15:00 - 16:00'], price: '70' }
        ],
        'Laste tervisekontroll': [
            { date: '2024-11-27', doctor: 'Dr. Liis Vahter', timeSlots: ['09:30 - 10:30', '14:00 - 15:00'], price: '100' }
        ],
    },
    '2024-11-28': {
        'Silmade kontroll': [
            { date: '2024-11-28', doctor: 'Dr. Maarika Tamm', timeSlots: ['09:00 - 09:30', '10:00 - 10:30', '11:00 - 11:30'], price: '50' },
            { date: '2024-11-28', doctor: 'Dr. Jaanus Kukk', timeSlots: ['09:00 - 09:30', '10:00 - 10:30', '11:00 - 11:30'], price: '55' }
        ],
        'Laseroperatsioon': [
            { date: '2024-11-28', doctor: 'Dr. Maarika Tamm', timeSlots: ['13:00 - 14:00', '14:30 - 15:30'], price: '250' }
        ],
        'Katarakti operatsioon': [
            { date: '2024-11-28', doctor: 'Dr. Anu Õun', timeSlots: ['16:00 - 17:00'], price: '350' }
        ],
        'Glaukoomi test': [
            { date: '2024-11-28', doctor: 'Dr. Maarika Tamm', timeSlots: ['09:00 - 09:30', '15:00 - 15:30'], price: '80' },
            { date: '2024-11-28', doctor: 'Dr. Jaanus Kukk', timeSlots: ['09:00 - 09:30', '15:00 - 15:30'], price: '85' }
        ],
        'Hambakivi eemaldamine': [
            { date: '2024-11-28', doctor: 'Dr. Anneli Saar', timeSlots: ['10:00 - 11:00', '14:00 - 15:00'], price: '150' }
        ],
        'Ortodontia konsultatsioon': [
            { date: '2024-11-28', doctor: 'Dr. Mari Tõnisson', timeSlots: ['11:00 - 12:00', '13:00 - 14:00'], price: '120' }
        ],
        'Psühholoogiline nõustamine': [
            { date: '2024-11-28', doctor: 'Dr. Tiina Leht', timeSlots: ['09:00 - 10:00', '13:00 - 14:00'], price: '90' }
        ],
        'EKG test': [
            { date: '2024-11-28', doctor: 'Dr. Kertu Jõgi', timeSlots: ['11:00 - 12:00', '15:00 - 16:00'], price: '70' }
        ],
        'Laste tervisekontroll': [
            { date: '2024-11-28', doctor: 'Dr. Liis Vahter', timeSlots: ['09:30 - 10:30', '14:00 - 15:00'], price: '100' }
        ],
    },
};

export { mockTimeSlots };



export const fetchTimeSlotsFromApi = async (start: string, end: string, serviceName: string): Promise<any[]> => {
    return new Promise<any[]>((resolve) => {
        setTimeout(() => {
            const availableSlots: any[] = [];

            console.log('Fetching time slots...');
            console.log('Start:', start);
            console.log('End:', end);
            console.log('Service Name:', serviceName);

            if (start === end) {
                console.log(`Start and end are the same: ${start}`);

                const slotsForService = mockTimeSlots[start]?.[serviceName];
                console.log('Slots for service:', slotsForService);

                if (slotsForService) {
                    slotsForService.forEach(slot => {
                        availableSlots.push({
                            date: slot.date,
                            doctor: slot.doctor,
                            time: slot.timeSlots,
                            price: slot.price
                        });
                    });
                } else {
                    console.log(`No slots available for service "${serviceName}" on ${start}`);
                }
            } else {
                console.log('Iterating over date range...');

                for (const date in mockTimeSlots) {
                    console.log('Checking date:', date);

                    if (date >= start && date <= end) {
                        console.log(`Date ${date} is within the range ${start} to ${end}`);

                        const slotsForService = mockTimeSlots[date]?.[serviceName];
                        console.log('Slots for service on this date:', slotsForService);

                        if (slotsForService) {
                            slotsForService.forEach(slot => {
                                availableSlots.push({
                                    date: slot.date,
                                    doctor: slot.doctor,
                                    time: slot.timeSlots,
                                    price: slot.price
                                });
                            });
                        } else {
                            console.log(`No slots available for service "${serviceName}" on ${date}`);
                        }
                    }
                }
            }

            console.log('Available slots:', availableSlots);
            resolve(availableSlots);
        }, 500);
    });
};






