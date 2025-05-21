export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets';
  imageUrl: string;
  featured: boolean;
  details: {
    caratWeight: string;
    cut: string;
    clarity: string;
    color: string;
    material: string;
  };
  longDescription: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Radiant Solitaire Diamond Ring',
    description: 'A stunning solitaire ring featuring a brilliant-cut diamond set in 18k white gold.',
    price: 3499,
    category: 'rings',
    imageUrl: 'https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    details: {
      caratWeight: '1.2ct',
      cut: 'Excellent',
      clarity: 'VS1',
      color: 'D',
      material: '18k White Gold'
    },
    longDescription: 'This exquisite solitaire ring showcases a stunning 1.2-carat diamond with excellent cut, VS1 clarity, and D color, set in lustrous 18k white gold. The classic design features a four-prong setting that elevates the diamond, allowing maximum light reflection for incomparable brilliance. The slim, polished band enhances the center stone\'s prominence, creating a timeless symbol of elegance and commitment. Perfect for engagements or special occasions, this ring embodies sophistication with its clean lines and exceptional craftsmanship.'
  },
  {
    id: '2',
    name: 'Sapphire Halo Diamond Ring',
    description: 'A royal blue sapphire surrounded by a halo of brilliant diamonds.',
    price: 4250,
    category: 'rings',
    imageUrl: 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    details: {
      caratWeight: '1.5ct center, 0.5ct diamonds',
      cut: 'Cushion',
      clarity: 'VVS2',
      color: 'Royal Blue + F',
      material: 'Platinum'
    },
    longDescription: 'Inspired by royal jewelry collections, this magnificent ring features a 1.5-carat cushion-cut blue sapphire of exceptional quality. The vivid center stone is embraced by a halo of 0.5 carats of round brilliant diamonds (F color, VVS2 clarity) that enhance its rich color and add spectacular sparkle. Crafted in platinum for lasting durability and luxurious appeal, the band is pavé-set with additional diamonds for extra brilliance. The sapphire\'s deep blue hue symbolizes loyalty and wisdom, making this piece both a fashion statement and a meaningful treasure to pass down through generations.'
  },
  {
    id: '3',
    name: 'Emerald Cut Diamond Necklace',
    description: 'An elegant emerald-cut diamond pendant on a delicate platinum chain.',
    price: 2899,
    category: 'necklaces',
    imageUrl: 'https://images.pexels.com/photos/10950783/pexels-photo-10950783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    details: {
      caratWeight: '0.9ct',
      cut: 'Emerald',
      clarity: 'VS2',
      color: 'E',
      material: 'Platinum'
    },
    longDescription: 'This sophisticated necklace features a striking 0.9-carat emerald-cut diamond of exceptional quality (E color, VS2 clarity). The clean lines and step-cut facets of the emerald cut create a hall-of-mirrors effect, displaying the diamond\'s exceptional clarity. Suspended from a delicate yet strong platinum chain, the pendant hangs at the perfect length to catch the light with every movement. The secure four-prong setting ensures the diamond remains the center of attention while keeping it safely in place. This versatile piece transitions effortlessly from day to evening wear, making it an indispensable addition to any fine jewelry collection.'
  },
  {
    id: '4',
    name: 'Diamond Tennis Bracelet',
    description: 'A classic tennis bracelet featuring 36 round brilliant diamonds in a seamless line.',
    price: 5999,
    category: 'bracelets',
    imageUrl: 'https://images.pexels.com/photos/12924438/pexels-photo-12924438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    details: {
      caratWeight: '3.0ct total',
      cut: 'Round Brilliant',
      clarity: 'VS1-VS2',
      color: 'F-G',
      material: '18k Yellow Gold'
    },
    longDescription: 'This timeless tennis bracelet features 36 perfectly matched round brilliant diamonds with a combined weight of 3 carats. Each stone (F-G color, VS1-VS2 clarity) is meticulously set in an 18k yellow gold four-prong setting that maximizes diamond visibility while ensuring security. The articulated design allows the bracelet to wrap comfortably around the wrist with elegant flexibility. A hidden, secure clasp maintains the unbroken appearance of diamonds encircling the wrist. Originally called an "eternity bracelet," this design became known as a tennis bracelet after tennis star Chris Evert\'s bracelet broke during a 1987 US Open match, creating an enduring symbol of understated luxury.'
  },
  {
    id: '5',
    name: 'Diamond Drop Earrings',
    description: 'Elegant drop earrings with pear-shaped diamonds surrounded by halos of smaller stones.',
    price: 3750,
    category: 'earrings',
    imageUrl: 'https://images.pexels.com/photos/11638817/pexels-photo-11638817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    details: {
      caratWeight: '1.8ct total',
      cut: 'Pear & Round Brilliant',
      clarity: 'VS1',
      color: 'F',
      material: '18k White Gold'
    },
    longDescription: 'These captivating drop earrings feature pear-shaped diamonds (0.7ct each) suspended beneath round brilliant diamonds, creating a cascading effect that flatters the face and catches light with every movement. Each pear diamond is surrounded by a halo of smaller round diamonds, with a total weight of 1.8 carats. Crafted in 18k white gold with secure lever backs for comfort and security, these earrings make a statement at special occasions yet are refined enough for everyday luxury. The articulated design allows for subtle movement, creating an enchanting sparkle from every angle.'
  },
  {
    id: '6',
    name: 'Three-Stone Diamond Engagement Ring',
    description: 'A symbolic ring featuring three graduated diamonds representing past, present, and future.',
    price: 5499,
    category: 'rings',
    imageUrl: 'https://images.pexels.com/photos/6341552/pexels-photo-6341552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    details: {
      caratWeight: '2.1ct total',
      cut: 'Round Brilliant',
      clarity: 'VVS2',
      color: 'D-E',
      material: 'Platinum'
    },
    longDescription: 'This meaningful three-stone ring represents the journey of a relationship with diamonds symbolizing your past, present, and future together. The center stone is a dazzling 1.25-carat round brilliant diamond flanked by two 0.45-carat side stones, all with exceptional D-E color and VVS2 clarity. The trilogy is set in enduring platinum with a comfort-fit band that tapers slightly toward the center for an elegant profile. Each diamond is held in a classic four-prong setting at a perfect height to maximize light return and brilliance. This meaningful design makes it an ideal choice for engagements, anniversaries, or any significant commitment.'
  },
  {
    id: '7',
    name: 'Diamond Hoop Earrings',
    description: 'Classic inside-out diamond hoop earrings that add sparkle from every angle.',
    price: 2199,
    category: 'earrings',
    imageUrl: 'https://images.pexels.com/photos/5442444/pexels-photo-5442444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    details: {
      caratWeight: '1.5ct total',
      cut: 'Round Brilliant',
      clarity: 'SI1',
      color: 'G',
      material: '14k White Gold'
    },
    longDescription: 'These stunning inside-out hoop earrings feature 1.5 carats of round brilliant diamonds (G color, SI1 clarity) set on both the exterior and interior of the hoops, ensuring they sparkle from every angle. The secure snap-back closures keep these 1.25-inch diameter hoops safely in place while remaining discreet. Crafted in 14k white gold, they strike the perfect balance between statement and versatility. These hoops are substantial enough to make an impression yet comfortable for all-day wear, making them go-to accessories for both special occasions and elevating everyday ensembles.'
  },
  {
    id: '8',
    name: 'Diamond Station Necklace',
    description: 'A delicate necklace with diamonds spaced along a fine gold chain.',
    price: 1899,
    category: 'necklaces',
    imageUrl: 'https://images.pexels.com/photos/12861017/pexels-photo-12861017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    details: {
      caratWeight: '1.0ct total',
      cut: 'Round Brilliant',
      clarity: 'VS2',
      color: 'F',
      material: '18k Yellow Gold'
    },
    longDescription: 'This sophisticated station necklace features seven bezel-set round brilliant diamonds (F color, VS2 clarity) with a combined weight of 1 carat, spaced elegantly along an 18-inch 18k yellow gold chain. The bezel settings protect the diamonds while creating a modern, streamlined look that lies perfectly against the collarbone. Versatile and refined, this necklace can be worn alone as a subtle statement or layered with other necklaces for a more personalized style. The adjustable length with loops at 16 and 18 inches provides flexibility for different necklines and styling preferences.'
  },
  {
    id: '9',
    name: 'Princess Cut Diamond Stud Earrings',
    description: 'Timeless princess-cut diamond studs secured with screw backs.',
    price: 2499,
    category: 'earrings',
    imageUrl: 'https://images.pexels.com/photos/10545118/pexels-photo-10545118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    details: {
      caratWeight: '1.6ct total',
      cut: 'Princess',
      clarity: 'VS1',
      color: 'E',
      material: '14k White Gold'
    },
    longDescription: 'These essential princess-cut diamond stud earrings feature two perfectly matched 0.8-carat diamonds (1.6 carats total) with exceptional E color and VS1 clarity. The square princess cut maximizes the diamonds\' fire and brilliance while the four-prong basket setting in 14k white gold securely holds each diamond at the perfect angle for maximum light return. Fitted with comfortable and secure screw backs, these earrings stay perfectly positioned throughout the day and night. Their classic design transcends trends, making them a foundational piece for any fine jewelry collection and an heirloom to be passed down through generations.'
  },
  {
    id: '10',
    name: 'Oval Diamond Halo Ring',
    description: 'A breathtaking oval diamond surrounded by a halo of smaller brilliant diamonds.',
    price: 4999,
    category: 'rings',
    imageUrl: 'https://images.pexels.com/photos/12084257/pexels-photo-12084257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    details: {
      caratWeight: '1.75ct center, 0.35ct halo',
      cut: 'Oval',
      clarity: 'VVS1',
      color: 'D',
      material: 'Platinum'
    },
    longDescription: 'This show-stopping ring centers on a magnificent 1.75-carat oval diamond with rare D color and VVS1 clarity. The elongated shape of the oval cut creates a flattering illusion of length on the finger while maximizing the diamond\'s surface area for exceptional brilliance. Surrounding the center stone is a halo of 0.35 carats of meticulously matched round brilliant diamonds that enhance the center stone\'s size and sparkle. The platinum band features additional pavé-set diamonds that extend halfway around the ring. The elevated setting allows light to enter from all angles, creating maximum fire and scintillation for a truly captivating effect.'
  },
  {
    id: '11',
    name: 'Diamond Bangle Bracelet',
    description: 'An elegant bangle bracelet with a continuous line of diamonds.',
    price: 3799,
    category: 'bracelets',
    imageUrl: 'https://images.pexels.com/photos/8891651/pexels-photo-8891651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    details: {
      caratWeight: '2.0ct total',
      cut: 'Round Brilliant',
      clarity: 'VS2',
      color: 'F-G',
      material: '18k Rose Gold'
    },
    longDescription: 'This sophisticated bangle features 2 carats of round brilliant diamonds channel-set in lustrous 18k rose gold. The continuous line of diamonds (F-G color, VS2 clarity) creates an uninterrupted sparkle that catches the light with every movement. The oval shape and hinged design ensure a comfortable fit that slides easily over the hand while maintaining a secure closure. The warm tone of the rose gold complements the diamonds\' brilliance and flatters all skin tones. This versatile piece works equally well as a standalone statement or stacked with other bracelets for a more personalized look.'
  },
  {
    id: '12',
    name: 'Diamond Pendant Necklace',
    description: 'A stunning pear-shaped diamond pendant suspended from a delicate chain.',
    price: 3299,
    category: 'necklaces',
    imageUrl: 'https://images.pexels.com/photos/13766634/pexels-photo-13766634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    details: {
      caratWeight: '1.1ct',
      cut: 'Pear',
      clarity: 'VS1',
      color: 'E',
      material: '18k White Gold'
    },
    longDescription: 'This captivating pendant showcases a 1.1-carat pear-shaped diamond of exceptional quality (E color, VS1 clarity). The elegant teardrop shape of the pear cut combines the brilliance of a round diamond with the elongated grace of a marquise cut, creating a flattering and distinctive look. The diamond is secured in a three-prong setting that maximizes the stone\'s visibility while keeping it secure. Suspended from an adjustable 16-18" 18k white gold chain with a secure lobster clasp, this pendant hangs at the perfect length to catch the light and draw the eye. The versatile design transitions seamlessly from day to evening wear.'
  }
];

export const getProductsByCategory = (category?: string) => {
  if (!category) return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};