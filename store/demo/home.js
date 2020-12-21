import moment from 'moment'

export const state = () => ({
    welcomScreen: {
        gameIcon: { src: 'icons/battlegrounds-icon.svg', alt: "battlegrounds" },
        title: 'StarSeries i-League CSGO Season 8',
        description: 'Parimatch League CS:GO is the new online league in Counter-Strike: Global Offensive from Parimatch and StarLadder, with $100,000 total prize pool. 16 teams from Europe and the CIS will take part in the League, with 4 teams going to League through open qualifiers.',
        buttonAnnouncement: { text: 'Read Announcement', icon: 'arrow' },
        buttonTickets: { text: 'GET TICKETS', icon: 'tickets' },
        extraInfo: [
            {
                id: 0,
                type: "Место",
                value: "Берлин, Германия"
            },
            {
                id: 1,
                type: "Даты",
                value: "22 Сентября – 30 Октября 2020"
            },
            {
                id: 2,
                type: "Призы",
                value: "$1,000,000"
            },
        ]
    },
    tourneyBlock: {
        title: "Расписание и результаты",
        matches: {
            id: 0,
            name: "Matches",
            tourney: [
                {
                    id: 0,
                    name: "Asia Minor: Play-Off",
                    status: 'Live',
                    time: "WATCH LIVE!",
                    dateTime: moment().add(-1, "hours"),

                    team1: {
                        id: 0,
                        logo: 'image/teamIcons/GloriaHenry.svg',
                        name: "Gloria Henry",
                        rate: '53.22'
                    },
                    team2: {
                        id: 1,
                        logo: 'image/teamIcons/AlbertWarren.svg',
                        name: "Albert Warren",
                        rate: '3.22'
                    },
                    system: 'Bо 3',
                    partner: 'icons/ggbet.svg'
                },
                {
                    id: 1,
                    name: "Asia Minor: Play-Off",
                    status: 'Upcoming',
                    time: "19:00",
                    date: "29 октября",
                    dateTime: moment().add(1, "hours").add(5, "minutes"),
                    team1:
                    {
                        id: 0,
                        logo: 'image/teamIcons/ReginaWatson.svg',
                        name: "Regina Watson",
                        rate: '3.22'
                    },
                    team2: {
                        id: 1,
                        logo: 'image/teamIcons/KathrynJones.svg',
                        name: "Kathryn Jones",
                        rate: '53.22'
                    },
                    system: 'Bо 3',
                    partner: 'icons/ggbet.svg'
                },
                {
                    id: 2,
                    name: "Asia Minor: Play-Off",
                    status: 'Upcoming',
                    time: "19:00",
                    date: "29 октября",
                    dateTime: moment().add(5, "hours").add(15, "minutes"),
                    team1:
                    {
                        id: 0,
                        logo: 'image/teamIcons/RicardoHawkins.svg',
                        name: "Ricardo Hawkins",
                        rate: '3.22'
                    },
                    team2: {
                        id: 1,
                        logo: 'image/teamIcons/BruceSimmmons.svg',
                        name: "Bruce Simmmons",
                        rate: '53.22'
                    },
                    system: 'Bо 3',
                    partner: 'icons/ggbet.svg'
                },
                {
                    id: 3,
                    name: "Asia Minor: Play-Off",
                    status: 'Upcoming',
                    time: "19:00",
                    date: "29 октября",
                    dateTime: moment().add(10, "hours").add(25, "minutes"),
                    team1:
                    {
                        id: 0,
                        logo: 'image/teamIcons/JennyBell.svg',
                        name: "Jenny Bell",
                        rate: '3.22'
                    },
                    team2: {
                        id: 1,
                        logo: 'image/teamIcons/ArleneRobertson.svg',
                        name: "Arlene Robertson",
                        rate: '53.22'
                    },
                    system: 'Bо 3',
                    partner: 'icons/ggbet.svg'
                },
            ]
        },
        battles: {
            id: 0,
            name: "Battles",
            tourney: [
                {
                    id: 0,
                    name: "Group Stage",
                    status: 'Live',
                    time: "WATCH LIVE!",
                    dateTime: moment().add(-1, "hours"),
                    disciplines: 'icons/disciplines.svg',
                    groups: ["Group A", "Group B"],
                    match: "Match #1",
                    map: "Map: Erangel"
                },
                {
                    id: 1,
                    name: "Group Stage",
                    time: "19:00",
                    date: "March 8",
                    status: 'Upcoming',
                    dateTime: moment().add(1, "hours").add(5, "minutes"),
                    disciplines: 'icons/disciplines.svg',
                    groups: ["Group A", "Group B"],
                    match: "Match #2",
                    map: "Map: Erangel"
                },
                {
                    id: 2,
                    name: "Group Stage",
                    time: "19:00",
                    date: "March 8",
                    status: 'Upcoming',
                    dateTime: moment().add(1, "hours").add(15, "minutes"),
                    disciplines: 'icons/disciplines.svg',
                    groups: ["Group A", "Group B"],
                    match: "Match #3",
                    map: "Map: Erangel"
                },
                {
                    id: 3,
                    name: "Group Stage",
                    time: "19:00",
                    date: "March 8",
                    status: 'Upcoming',
                    dateTime: moment().add(1, "hours").add(25, "minutes"),
                    disciplines: 'icons/disciplines.svg',
                    groups: ["Group A", "Group B"],
                    match: "Match #4",
                    map: "Map: Erangel"
                },

            ]
        }
    },
    stages: {
        title: "Этапы проведения",
        description: "The path to every Major begins with the open qualifiers for the regional Minor Championships, spanning Europe, CIS, Americas, and Asia. <a href='/' class='a'>Here is</a> the schedule of every qualifying stage of StarLadder Major."
    },
    listOfParticipants: [
        {
            id: "353",
            name: "Dianne Russell",
            flag: 'icons/flag.svg'
        },
        {
            id: "2",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "3",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "4",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "5",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "6",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "7",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "8",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "9",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "10",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "11",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "12",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "13",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "14",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "15",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },
        {
            id: "16",
            name: "Natus Vincere",
            flag: 'icons/flag.svg'
        },

    ],
    infoPopupRegistration: {
        title: 'Вы зарегистрированы',
        team: ' Natus vincere (#353)'
    },
    menuPage: [
        {
            id: 0,
            page: 'Support',
            link: "/"
        },
        {
            id: 1,
            page: 'Rules',
            link: "/"
        },
        {
            id: 2,
            page: 'FAQ',
            link: "/"
        },
    ]


})
