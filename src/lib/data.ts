import { colors } from "./colors";

export interface playlist {
    id: string;
    albunId: number;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
    artist: string[];
}

export const playlists: Playlist[] = [
    {
        id: '1',
        albunId: 1,
        title: "Child Lo-fi Music",
        color: colors.yellow,
        cover: 
        "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        artists: ["Kupla","Blue Fox"],
    },
    {
        id: '2',
        albunId: 2,
        title: "Child Lo-fi Music",
        color: colors.green,
        cover: 
            "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
        artists: ["Kupla","Blue Fox"],
    },
    {
        id: '3',
        albunId: 3,
        title: "study Session",
        color: colors.rose,
        cover: 
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353", 
        artists: ["Kupla","Blue Fox"],
    },
    {
        id: '4',
        albunId: 4,
        title: "Child Lo-fi Music",
        color: colors.yellow,
        cover: 
            "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
        artists: ["Kupla","Blue Fox"],
    },
    {
        id: '5',
        albunId: 5,
        title: "Child Lo-fi Music",
        color: colors.yellow,
        cover: 
        "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        artists: ["Kupla","Blue Fox"],
    },
    {
        id: '6',
        albunId: 6,
        title: "Chau Saura Session",
        color: colors.purple,
        cover: 
            "https://f4.bcbits.com/img/a1962013209_16.jpg",
        artists: ["Chau Saura","Amies", "kyu"],
    },
];

export const morePlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
    ... item,
    id: item.id + "_side",
}))

export const allPlaylists =[
    ... playlists,
    ... morePlaylists,
    ... sidebarPlaylists,
]

export interface Song {
    id:number;
    albunId: number;
    title: string;
    image: string;
    artists: string[];
    album: string;
    duration: string;
}

export const songs: Song[] = [
    {
        "id": 1,
        "albunId": 1,
    "title": "moonlit Walk",
    "image":"https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    "artists": ["Lofi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12",
    },
    {
        "id": 2,
        "albunId": 2,
    "title": "moonlit Walk",
    "image": 'https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187',
    "artists": ["Lofi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:22",
    },
    {
        "id": 3,
        "albunId": 3,
    "title": "moonlit Walk",
    "image":"https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    "artists": ["Lofi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12",
    },
]

