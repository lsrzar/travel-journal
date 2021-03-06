const data: {
  id: number;
  title: string;
  location: string;
  googleMapsUrl: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
}[] = [
  {
    id: 1,
    title: 'Mount Fuji',
    location: 'Japan',
    googleMapsUrl: 'https://goo.gl/maps/1DGM5WrWnATgkSNB8',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
    imageUrl:
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 2,
    title: 'Sydney Opera House',
    location: 'Australia',
    googleMapsUrl: 'https://goo.gl/maps/CkDXaQFeNFH6aXvH9',
    startDate: '27 May, 2021',
    endDate: '8 Jun, 2021',
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
    imageUrl:
      'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
  },
  {
    id: 3,
    title: 'Geirangerfjord',
    location: 'Norway',
    googleMapsUrl: 'https://goo.gl/maps/H3SfMho8j3KNgYbb9',
    startDate: '01 Oct, 2021',
    endDate: '18 Nov, 2021',
    description:
      'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.',
    imageUrl:
      'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 4,
    title: 'Cuernos del Paine',
    location: 'Chile',
    googleMapsUrl: 'https://goo.gl/maps/GB9iJHYzFfeQ2Uw67',
    startDate: '05 Feb, 2022',
    endDate: '20 Feb, 2022',
    description:
      "The Cuernos del Paine or 'Paine horns' is a collective name given to a set of spiky granite peaks in Torres del Paine National Park located in Chile's Patagonia region, all of which stand at over 2000 metres high.",
    imageUrl:
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
];

export default data;
