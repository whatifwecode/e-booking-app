import { services, doctors } from './mockData';

export const fetchServices = async () => {
    return new Promise<Service[]>((resolve) => {
        setTimeout(() => {
            resolve(services);
        }, 500);
    });
};

export const fetchDoctorsByService = async (service: string) => {
    return new Promise<Doctor[]>((resolve) => {
        setTimeout(() => {
            resolve(doctors[service] || []);
        }, 500);
    });
};
