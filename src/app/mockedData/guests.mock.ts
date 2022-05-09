export interface IGuest {
    couple?: IGuest,
    name: string,
    surname: string
}

export interface IGuestList {
    persons: IGuest[];
}

export const guests: IGuestList = {
    persons: [
        {
        name: 'Dawid',
        surname: 'Fijałkowski',
        couple: {
            name: 'Dominika',
            surname: 'Frączkiewicz'
        }
    },
    {
        name: 'Ludwika',
        surname: 'Kabat',
        couple: {
            name: 'Kamil',
            surname: 'Waligóra'
        }
    },
    {
        name: 'Damian',
        surname: 'Chećko'
    },
    {
        name: 'Nikola',
        surname: 'Milewska',
    },
    {
        name: 'Konrad',
        surname: 'Grelewicz',
        couple: {
            name: 'Anita',
            surname: 'Milewska'
        }
    },
    {
        name: 'Dominika',
        surname: 'Malara',
    },
    {
        name: 'Natalia',
        surname: 'Mikina',
    },
    {
        name: 'Dawid',
        surname: 'Milewski',
        couple: {
            name: 'Pola',
            surname: 'Mazur'
        }
    },
    {
        name: 'Kamil',
        surname: 'Sitek',
        couple: {
            name: 'Małgorzata',
            surname: 'Pastuszka'
        }
    },
    {
        name: 'Michał',
        surname: 'Zawadzki',
        couple: {
            name: 'Jowita',
            surname: 'Zawadzka'
        }
    },
    {
        name: 'Mateusz',
        surname: 'Wójcik',
    },
    {
        name: 'Dawid',
        surname: 'Lechowski',
        couple: {
            name: 'Weronika',
            surname: 'Lechowska'
        }
    },
    {
        name: 'Piotr',
        surname: 'Sutor'
    },
    {
        name: 'Karolina',
        surname: 'Krupa',
    },
    ]
}