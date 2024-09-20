export const hospitalConfig = {
    hospital1: {
        name: 'Hospital A',
        apiEndpoint: 'https://api.hospitalA.com',
        theme: {
            primaryColor: 'theme-light-green',
            secondaryColor: 'theme-light-blue',
        },
    },
    hospital2: {
        name: 'Hospital B',
        apiEndpoint: 'https://api.hospitalB.com',
        theme: {
            primaryColor: 'theme-light-blue',
            secondaryColor: 'theme-light-green',
        },
    },
};

export const getCurrentHospitalConfig = (hospitalKey: string) => {
    return hospitalConfig[hospitalKey];
};
