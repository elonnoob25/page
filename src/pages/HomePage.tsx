import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { DiamondIcon, ArrowRight, Gem, Shield, Gift } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <img 
            src="https://images.pexels.com/photos/12151777/pexels-photo-12151777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Luxury diamonds" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Timeless Elegance, <span className="text-purple-400">Eternal Brilliance</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our collection of exquisite diamond jewelry that captures light, enhances beauty, and celebrates life's precious moments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/products?category=all">
                <Button className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-6">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-background to-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12 text-center">
            <DiamondIcon className="h-10 w-10 text-purple-400 mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground max-w-2xl">
              Our most sought-after pieces, each one a masterpiece of design and craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/products?category=all">
              <Button variant="outline" className="border-purple-800 text-purple-400 hover:bg-purple-900/20">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900/50 border border-purple-900/20"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-900/20 mb-6">
                <Gem className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Exceptional Quality</h3>
              <p className="text-muted-foreground">
                Every diamond is hand-selected for its exceptional cut, clarity, color, and carat weight.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900/50 border border-purple-900/20"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-900/20 mb-6">
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lifetime Warranty</h3>
              <p className="text-muted-foreground">
                We stand behind our craftsmanship with a lifetime warranty and complimentary maintenance.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900/50 border border-purple-900/20"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-900/20 mb-6">
                <Gift className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Elegant Packaging</h3>
              <p className="text-muted-foreground">
                Each piece arrives in a luxurious gift box, perfect for that special moment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
              <img 
                src="https://images.pexels.com/photos/905913/pexels-photo-905913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Diamond collection" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 py-16 px-8 md:p-16 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Find Your Perfect Diamond
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mb-8">
                Our diamond specialists are ready to help you find the perfect piece for any occasion.
                Reach out today for personalized assistance.
              </p>
              <Link to="/contact">
                <Button className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}