export type Service = {
    id: number;
    name: string;
    icon: string;
    description: string;
};

export interface Doctor {
    id: number;
    name: string;
}

export interface ServiceItem {
    id: number;
    name: string;
    description: string;
    price: number;
}

export const services: Service[] = [
    { id: 1, name: 'Silmaarstid', icon: 'fas fa-eye', description: 'Silmade kontroll ja ravi.' },
    { id: 2, name: 'Üldarstid', icon: 'fas fa-user-md', description: 'Üldine arstlik kontroll.' },
    { id: 3, name: 'Hambaarstid', icon: 'fas fa-tooth', description: 'Hammaste ravi ja hooldus.' },
    { id: 4, name: 'Pediaatrid', icon: 'fas fa-baby', description: 'Laste tervishoiu spetsialistid.' },
    { id: 5, name: 'Günekoloogid', icon: 'fas fa-female', description: 'Naiste tervise kontroll ja ravi.' },
    { id: 6, name: 'Psühholoogid', icon: 'fas fa-brain', description: 'Vaimse tervise nõustamine.' },
    { id: 7, name: 'Füsioterapeudid', icon: 'fas fa-running', description: 'Füüsilise taastusravi teenused.' },
    { id: 8, name: 'Kardioloogid', icon: 'fas fa-heartbeat', description: 'Südame tervise jälgimine.' },
    { id: 9, name: 'Nahaarstid', icon: 'fas fa-sun', description: 'Naha tervise spetsialistid.' },
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

export const servicesData = {
    'Silmaarstid': [
        { id: 1, name: 'Silmade kontroll', description: 'Üldine silmade kontroll.', price: 60 },
        { id: 2, name: 'Laseroperatsioon', description: 'Nägemise parandamiseks mõeldud operatsioon.', price: 350 },
        { id: 3, name: 'Katarakti operatsioon', description: 'Katarakti eemaldamine operatsiooni kaudu.', price: 400 },
        { id: 4, name: 'Glaukoomi test', description: 'Glaukoomi varajane avastamine silmades.', price: 75 }
    ],
    'Üldarstid': [
        { id: 1, name: 'Üldine tervisekontroll', description: 'Üldine tervisehinnang.', price: 40 },
        { id: 2, name: 'Haiguse ravi', description: 'Ravi levinud haiguste jaoks.', price: 80 },
        { id: 3, name: 'Vererõhu mõõtmine', description: 'Vererõhu regulaarne kontrollimine ja hindamine.', price: 30 },
        { id: 4, name: 'Vaktsineerimine', description: 'Üldine vaktsineerimisteenus, sealhulgas gripivaktsiin.', price: 25 }
    ],
    'Hambaarstid': [
        { id: 1, name: 'Hambakivi eemaldamine', description: 'Professionaalne puhastus ja hambakivi eemaldamine.', price: 50 },
        { id: 2, name: 'Hamba implantaat', description: 'Hamba asendamine kunsthamba implantaatidega.', price: 200 },
        { id: 3, name: 'Kahjustatud hamba täitmine', description: 'Hambatäidised valusate ja lõhenenud hammaste jaoks.', price: 100 },
        { id: 4, name: 'Ortodontia konsultatsioon', description: 'Konsultatsioon hambumusprobleemide korral.', price: 120 }
    ],
    'Pediaatrid': [
        { id: 1, name: 'Laste tervisekontroll', description: 'Tervisekontroll lastele.', price: 30 },
        { id: 2, name: 'Vaktsineerimine', description: 'Laste vaktsineerimine vastavalt ajakavale.', price: 40 },
        { id: 3, name: 'Laste allergiatest', description: 'Kohandatud testid laste allergiate määramiseks.', price: 70 },
        { id: 4, name: 'Pediaatriline nõustamine', description: 'Spetsialisti nõustamine laste toitumise ja arenguga.', price: 60 }
    ],
    'Günekoloogid': [
        { id: 1, name: 'Aasta tervisekontroll', description: 'Günekoloogi poolt läbi viidud tervisekontroll.', price: 100 },
        { id: 2, name: 'Raseduse jälgimine', description: 'Kogu raseduse jälgimine ja nõustamine.', price: 150 },
        { id: 3, name: 'Pap test', description: 'Emakakaela vähi varajaseks avastamiseks mõeldud test.', price: 45 },
        { id: 4, name: 'Menopausi nõustamine', description: 'Nõustamine menopausi ajal esinevate sümptomite leevendamiseks.', price: 80 }
    ],
    'Psühholoogid': [
        { id: 1, name: 'Psühholoogiline nõustamine', description: 'Üks-ühele nõustamine, et arutada muresid ja probleeme.', price: 80 },
        { id: 2, name: 'Grupiteraapia', description: 'Rühmaseminarid ja grupiteraapia sessioonid.', price: 50 },
        { id: 3, name: 'Stressi juhtimine', description: 'Kohandatud nõustamine stressi maandamiseks ja juhtimiseks.', price: 70 },
        { id: 4, name: 'Pereteraapia', description: 'Pereliikmete vaheliste suhete parandamine läbi teraapia.', price: 120 }
    ],
    'Füsioterapeudid': [
        { id: 1, name: 'Lihaspingete leevendamine', description: 'Füüsilised harjutused lihaspingete leevendamiseks ja lihaste lõdvestamiseks.', price: 50 },
        { id: 2, name: 'Pärastoperatiivne taastumine', description: 'Taastusravi pärast operatsiooni, et tagada täielik taastumine.', price: 100 },
        { id: 3, name: 'Postuuriharjutused', description: 'Kohandatud harjutused kehahoia parandamiseks.', price: 60 },
        { id: 4, name: 'Sportliku vigastuse taastumine', description: 'Füsioteraapia sportliku vigastuse kiireks taastumiseks.', price: 90 }
    ],
    'Kardioloogid': [
        { id: 1, name: 'EKG test', description: 'Südame elektrilise aktiivsuse mõõtmine.', price: 70 },
        { id: 2, name: 'Vererõhu test', description: 'Vererõhu jälgimine ja hindamine südame tervise jaoks.', price: 40 },
        { id: 3, name: 'Südame ultraheli', description: 'Südame ultraheli uuring südame probleemide avastamiseks.', price: 150 },
        { id: 4, name: 'Holteri test', description: '24-tunnine südame jälgimine Holteri ekg-ga.', price: 120 }
    ],
    'Nahaarstid': [
        { id: 1, name: 'Naha tervisekontroll', description: 'Nahahaiguste ja nahavähkide varajane avastamine.', price: 60 },
        { id: 2, name: 'Akne ravi', description: 'Akne ravi ja nahahooldusprogramm.', price: 70 },
        { id: 3, name: 'Dermatoloogiline konsultatsioon', description: 'Konsultatsioon naha probleemide lahendamiseks.', price: 90 },
        { id: 4, name: 'Laserhooldus', description: 'Laserteraapia naha ühtlustamiseks ja noorendamiseks.', price: 200 }
    ],
    'Oftalmoloogid': [
        { id: 1, name: 'Silmade kontroll', description: 'Üldine silmade tervisekontroll ja testimine.', price: 60 },
        { id: 2, name: 'Läbipaistvuskatse', description: 'Silmade läbipaistvuse testimine ja analüüs.', price: 80 },
        { id: 3, name: 'Lasik operatsioon', description: 'Laseri abil nägemise korrigeerimise operatsioon.', price: 350 },
        { id: 4, name: 'Diabeedi silmade test', description: 'Silmahaiguste testimine diabeedi mõju tõttu.', price: 90 }
    ]
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

export const fetchServiceItems = (serviceName: string) => {
    return new Promise<ServiceItem[]>((resolve) => {
        setTimeout(() => {
            resolve(servicesData[serviceName] || []);
        }, 50);
    });
};
