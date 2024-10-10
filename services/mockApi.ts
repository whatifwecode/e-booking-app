export interface Service {
    id: number;
    name: string;
}

export interface Doctor {
    id: number;
    name: string;
}

export const services: Service[] = [
    { id: 1, name: 'Silmaarstid' }, // Eye Doctors
    { id: 2, name: 'Üldarstid' },   // General Physicians
    { id: 3, name: 'Hambaarstid' },  // Dentists
    { id: 4, name: 'Pediaatrid' },   // Pediatricians
    { id: 5, name: 'Günekoloogid' }, // Gynecologists
    { id: 6, name: 'Psühholoogid' }, // Psychologists
    { id: 7, name: 'Füsioterapeudid' }, // Physiotherapists
    { id: 8, name: 'Kardioloogid' }, // Cardiologists
    { id: 9, name: 'Nahaarstid' },   // Dermatologists
    { id: 10, name: 'Oftalmoloogid' } // Ophthalmologists
];

export const doctors: { [key: string]: Doctor[] } = {
    'Silmaarstid': [
        { id: 1, name: 'Andres Jõgi' },
        { id: 2, name: 'Maria Kask' },
        { id: 3, name: 'Kristiina Oja' },
        { id: 4, name: 'Tanel Pärn' },
    ],
    'Üldarstid': [
        { id: 5, name: 'Peeter Lill' },
        { id: 6, name: 'Liina Vihma' },
        { id: 7, name: 'Marek Tamme' },
        { id: 8, name: 'Kadi Rummo' },
    ],
    'Hambaarstid': [
        { id: 9, name: 'Jüri Rist' },
        { id: 10, name: 'Anu Kivi' },
    ],
    'Pediaatrid': [
        { id: 11, name: 'Reet Kallas' },
        { id: 12, name: 'Mati Kallio' },
    ],
    'Günekoloogid': [
        { id: 13, name: 'Evelin Saare' },
        { id: 14, name: 'Arvo Tammes' },
    ],
    'Psühholoogid': [
        { id: 15, name: 'Anne Puur' },
        { id: 16, name: 'Rainer Mets' },
    ],
    'Füsioterapeudid': [
        { id: 17, name: 'Eliise Jõgeva' },
        { id: 18, name: 'Karl Kask' },
    ],
    'Kardioloogid': [
        { id: 19, name: 'Tiina Mägi' },
        { id: 20, name: 'Sven Rätsepp' },
    ],
    'Nahaarstid': [
        { id: 21, name: 'Merike Laane' },
        { id: 22, name: 'Rita Veer' },
    ],
    'Oftalmoloogid': [
        { id: 23, name: 'Jaanus Paju' },
        { id: 24, name: 'Kaia Mardis' },
    ],
};

export const fetchServices = async (): Promise<Service[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(services);
        }, 500);
    });
};

export const fetchDoctorsByService = async (service: string): Promise<Doctor[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(doctors[service] || []);
        }, 500);
    });
};
