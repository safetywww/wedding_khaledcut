export const data = {
    bride: {
        L: {
            id: 1,
            name: 'MKhaled',
            child: 'Putra ke empat',
            father: 'Alm. Hasyem AR',
            mother: 'Alm. NurainiS',
            image: './src/assets/images/profil1.jpg'
        },
        P: {
            id: 2,
            name: 'CutFitriani',
            child: 'Putri pertama',
            father: 'Muktar Rusli',
            mother: 'Jawarni Sunartik',
            image: './src/assets/images/profil2.jpg'
        },

        couple: './src/assets/images/gl3.jpg'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Januari',
            date: '13',
            day: 'Senin',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Juni',
            date: '18',
            day: 'Rabu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        address: 'Dusun. Suka Mulia, RT 000/ RW 000, Desa.Glg Meurak, Kec.Peureulak Timur, Kab.Aceh Timur'
    },

    link: {
        calendar: 'https://calendar.app.google/n8yAEYjCawv7XiJRA',
        map: 'https://maps.app.goo.gl/UUKaJeKKBJXHPjZk6',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/gl1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/gl2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/gl3.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/gl4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/gl5.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Klg. Mempelai Pria',
            icon: './src/assets/images/bsibaru1.png',
            rekening: 'Terimakasih Sudah Hadir'
        },
        {
            id: 2,
            name: 'Klg. Mempelai Wanita',
            icon: './src/assets/images/bsibaru.png',
            rekening: 'Terimakasih Sudah Hadir'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: '',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
