import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { type Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const { id, name, description, price, category, imageUrl } = product;
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={cn("overflow-hidden bg-black/50 border-purple-900/20 h-full flex flex-col", className)}>
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
          />
          <Badge className="absolute top-3 right-3 bg-purple-700 hover:bg-purple-600 capitalize">
            {category}
          </Badge>
        </div>
        
        <CardContent className="flex-1 p-6">
          <h3 className="text-xl font-medium mb-2 line-clamp-2">{name}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
          <div className="text-lg font-bold text-purple-400">{formatPrice(price)}</div>
        </CardContent>
        
        <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
          <Button asChild variant="default" className="w-full bg-purple-700 hover:bg-purple-600">
            <Link to={`/products/${id}`}>
              View Details
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}