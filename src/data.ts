export interface Product {
  id: string;
  name: string;
  category: 'wine' | 'whisky' | 'beer' | 'spirits';
  subcategory: string;
  description: string;
  origin: string;
  priceRange: '₹' | '₹₹' | '₹₹₹' | '₹₹₹₹';
  image: string;
  abv: string;
  isPopular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'macallan-12',
    name: 'Macallan Double Cask 12 Year Old',
    category: 'whisky',
    subcategory: 'Single Malt Scotch',
    description: 'A harmonious blend of American and European sherry oak casks. Complex aromas of vanilla, honey, and fresh ginger.',
    origin: 'Speyside, Scotland',
    priceRange: '₹₹₹₹',
    image: 'https://images.unsplash.com/photo-1508253730747-e833c5d47576?q=80&w=400&auto=format&fit=crop',
    abv: '40%',
    isPopular: true
  },
  {
    id: 'glenfiddich-15',
    name: 'Glenfiddich 15 Year Old Solera',
    category: 'whisky',
    subcategory: 'Single Malt Scotch',
    description: 'Matured in sherry, bourbon, and new oak casks, then married in our unique Solera Vat. Silky smooth with notes of warm spice and honey.',
    origin: 'Speyside, Scotland',
    priceRange: '₹₹₹₹',
    image: 'https://images.unsplash.com/photo-1599390809300-c01e3b6fbf34?q=80&w=400&auto=format&fit=crop',
    abv: '40%',
    isPopular: true
  },
  {
    id: 'amrut-fusion',
    name: 'Amrut Fusion Indian Single Malt',
    category: 'whisky',
    subcategory: 'Indian Single Malt',
    description: 'Crafted from Indian and peated Scottish barley. Rich oak, fresh fruit, and a subtle wisp of peat smoke make this a world-class award-winner.',
    origin: 'Bengaluru, India',
    priceRange: '₹₹₹',
    image: 'https://images.unsplash.com/photo-1569529465841-dfedd6d5843a?q=80&w=400&auto=format&fit=crop',
    abv: '50%'
  },
  {
    id: 'talisker-10',
    name: 'Talisker 10 Year Old',
    category: 'whisky',
    subcategory: 'Single Malt Scotch',
    description: 'A coastal classic with intense sea-salt nose, peat-smoke character, and a sweet, peppery finish. The rugged spirit of the Isle of Skye.',
    origin: 'Isle of Skye, Scotland',
    priceRange: '₹₹₹₹',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=400&auto=format&fit=crop',
    abv: '45.8%'
  },
  {
    id: 'dom-perignon',
    name: 'Dom Pérignon Brut Vintage',
    category: 'wine',
    subcategory: 'Champagne',
    description: 'An iconic luxury champagne of incredible depth and precision. Vivid mineral tension balanced with hints of toasted brioche and white peach.',
    origin: 'Champagne, France',
    priceRange: '₹₹₹₹',
    image: 'https://images.unsplash.com/photo-1594498653385-d5172b532c00?q=80&w=400&auto=format&fit=crop',
    abv: '12.5%',
    isPopular: true
  },
  {
    id: 'penfolds-bin-389',
    name: 'Penfolds Bin 389 Cabernet Shiraz',
    category: 'wine',
    subcategory: 'Red Wine',
    description: 'Often referred to as "Baby Grange." Full-bodied with dark fruit richness, structured tannins, and elegant American oak integration.',
    origin: 'Barossa Valley, Australia',
    priceRange: '₹₹₹',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=400&auto=format&fit=crop',
    abv: '14.5%'
  },
  {
    id: 'whispering-angel',
    name: 'Whispering Angel Rosé',
    category: 'wine',
    subcategory: 'Rosé Wine',
    description: 'The world\'s most popular luxury rosé. Strikingly pale pink, bone dry, and highly refreshing with delicate notes of red berries and grapefruit.',
    origin: 'Provence, France',
    priceRange: '₹₹',
    image: 'https://images.unsplash.com/photo-1553072768-60d3d39ed0df?q=80&w=400&auto=format&fit=crop',
    abv: '13%'
  },
  {
    id: 'cloudy-bay-sauvignon',
    name: 'Cloudy Bay Sauvignon Blanc',
    category: 'wine',
    subcategory: 'White Wine',
    description: 'A vibrant benchmark white wine. Bursting with passionfruit, fresh lime, and mineral complexity. Incredible length and crispness.',
    origin: 'Marlborough, New Zealand',
    priceRange: '₹₹',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=400&auto=format&fit=crop',
    abv: '13.5%',
    isPopular: true
  },
  {
    id: 'chimay-blue',
    name: 'Chimay Blue / Grande Réserve',
    category: 'beer',
    subcategory: 'Belgian Strong Dark Ale',
    description: 'A classic Trappist beer of dark amber copper colour. Offers powerful aromas of fresh yeast, complex caramel malt, and roasted chocolate.',
    origin: 'Scourmont Abbey, Belgium',
    priceRange: '₹₹',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=400&auto=format&fit=crop',
    abv: '9.0%',
    isPopular: true
  },
  {
    id: 'brewdog-punk-ipa',
    name: 'BrewDog Punk IPA',
    category: 'beer',
    subcategory: 'India Pale Ale',
    description: 'The beer that started the craft revolution. Light golden, naturally cloudy with dramatic tropical fruit hops and a refreshing bitter finish.',
    origin: 'Ellon, Scotland',
    priceRange: '₹',
    image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=400&auto=format&fit=crop',
    abv: '5.6%'
  },
  {
    id: 'bira-white',
    name: 'Bira 91 White',
    category: 'beer',
    subcategory: 'Wheat Beer',
    description: 'An extra-refreshing Belgian-style wheat beer with low bitterness. Infused with natural orange peel and coriander for a citrusy, spice finish.',
    origin: 'Delhi, India',
    priceRange: '₹',
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80&w=400&auto=format&fit=crop',
    abv: '4.9%'
  },
  {
    id: 'erdinger-weissbier',
    name: 'Erdinger Weissbier',
    category: 'beer',
    subcategory: 'Hefeweizen',
    description: 'The ultimate German wheat beer. Brewed with fine yeast according to Bavarian tradition. Exceptionally balanced, lively, and fresh.',
    origin: 'Bavaria, Germany',
    priceRange: '₹',
    image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=400&auto=format&fit=crop',
    abv: '5.3%'
  },
  {
    id: 'hendricks-gin',
    name: 'Hendrick\'s Gin',
    category: 'spirits',
    subcategory: 'Super Premium Gin',
    description: 'An extraordinarily odd gin infused with Bulgarian Rosa Damascena and handselected cucumbers, creating a refreshing floral character.',
    origin: 'Girvan, Scotland',
    priceRange: '₹₹',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&auto=format&fit=crop',
    abv: '44%',
    isPopular: true
  },
  {
    id: 'patron-silver',
    name: 'Patrón Silver Tequila',
    category: 'spirits',
    subcategory: 'Tequila Blanc',
    description: 'Handcrafted from 100% Weber Blue Agave. Exceptionally smooth and sweet, featuring fresh citrus aromas and a light, elegant peppery finish.',
    origin: 'Jalisco, Mexico',
    priceRange: '₹₹',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&auto=format&fit=crop',
    abv: '40%',
    isPopular: true
  },
  {
    id: 'grey-goose',
    name: 'Grey Goose Vodka',
    category: 'spirits',
    subcategory: 'Super Premium Vodka',
    description: 'Crafted from the finest soft winter wheat of Picardy and natural spring water filtered through limestone. Extremely clean, round, and elegant.',
    origin: 'Cognac, France',
    priceRange: '₹₹',
    image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?q=80&w=400&auto=format&fit=crop',
    abv: '40%'
  },
  {
    id: 'diplomatico-rum',
    name: 'Diplomático Reserva Exclusiva',
    category: 'spirits',
    subcategory: 'Dark Rum',
    description: 'An exceptional dark sipping rum matured in small oak casks for up to twelve years. Luxuriously sweet with maple syrup, orange peel, and licorice.',
    origin: 'Lara, Venezuela',
    priceRange: '₹₹',
    image: 'https://images.unsplash.com/photo-1514218247612-f1daaeef157a?q=80&w=400&auto=format&fit=crop',
    abv: '40%'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Karan Mehta',
    role: 'Verified Local Guide',
    avatar: 'KM',
    rating: 5,
    text: 'Chincholi Wines in Malad West is definitely the cleanest and most premium boutique in this area. Their selection of single malts is fantastic, and the store staff is highly professional.'
  },
  {
    id: 'rev-2',
    author: 'Aishwarya Sen',
    role: 'Regular Customer',
    avatar: 'AS',
    rating: 5,
    text: 'I always buy wine from Chincholi Wines. They store their premium bottles in a humidity and temperature controlled area, which keeps the wine tasting exactly as it should. Superb boutique!'
  },
  {
    id: 'rev-3',
    author: 'Vikram Rao',
    role: 'Mumbai Local',
    avatar: 'VR',
    rating: 5,
    text: 'Excellent location on Malad Link Road. Ordering for house parties is very simple. I just call them up with my list and they prepare the order for quick pickup.'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Boutique Interior',
    category: 'Luxury Representation',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-2',
    title: 'Whisky Flights',
    category: 'Aged Single Malts',
    image: 'https://oniksds23.sirv.com/sdsdsd.jpg'
  },
  {
    id: 'gal-3',
    title: 'Vintage Cellar',
    category: 'Global Vintages',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-4',
    title: 'Exquisite Mixology',
    category: 'Bar Craftsmanship',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop'
  }
];
