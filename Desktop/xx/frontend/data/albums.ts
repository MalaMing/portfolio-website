export interface Album {
  id: number
  description: string
  image : string
  name : string
}

export interface makeForYouAlbum {
  id: number
  description: string
  image : string
  name : string
}

  
  export const madeForYouAlbums: makeForYouAlbum[] = [
    {
      id: 1,
      name: 'Thinking Components',
      description: 'Lena Logic',
      image:
        'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80',
    },
    {
      id: 2,
      name: 'Functional Fury',
      description: 'Beth Binary',
      image:
        'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
    },
    {
      id: 3,
      name: 'React Rendezvous',
      description: 'Ethan Byte',
      image:
        'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80',
    },
    {
      id: 4,
      name: 'Stateful Symphony',
      description: 'Beth Binary',
      image:
        'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80',
    },
    {
      id: 5,
      name: 'Async Awakenings',
      description: 'Nina Netcode',
      image:
        'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    },
    {
      id: 6,
      name: 'The Art of Reusability',
      description: 'Lena Logic',
      image:
        'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
    },
  ]