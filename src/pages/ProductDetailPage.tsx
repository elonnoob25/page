import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Share2, 
  Heart, 
  Diamond, 
  Scale, 
  ShieldCheck, 
  MessageCircle
} from 'lucide-react';

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const product = productId ? getProductById(productId) : null;
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  const handleBuyNow = () => {
    setIsLoading(true);
    
    // Construct WhatsApp message with product details
    const message = `Hello, I'm interested in purchasing the ${product.name} (${formatPrice(product.price)}). Could you provide more information?`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Replace with your actual WhatsApp number
    const phoneNumber = "8750714310";
    
    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Show toast and redirect after a small delay
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be able to complete your order via WhatsApp.",
    });
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsLoading(false);
    }, 1000);
  };
  
  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied to clipboard",
        description: "You can now share this product with others.",
      });
    }
  };
  
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-8 flex items-center text-muted-foreground hover:text-white"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-24"
          >
            <div className="rounded-lg overflow-hidden border border-purple-900/20 aspect-square">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge className="bg-purple-700 hover:bg-purple-600 mb-4 capitalize">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-serif font-bold mb-3">{product.name}</h1>
            <div className="text-2xl font-bold text-purple-400 mb-6">
              {formatPrice(product.price)}
            </div>
            
            <p className="text-muted-foreground mb-6">{product.description}</p>
            
            <Separator className="mb-6 bg-purple-900/20" />
            
            {/* Product Specifications */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <Diamond className="mr-2 h-5 w-5 text-purple-400" />
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-muted-foreground block">Carat Weight</span>
                  <span className="font-medium">{product.details.caratWeight}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Cut</span>
                  <span className="font-medium">{product.details.cut}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Clarity</span>
                  <span className="font-medium">{product.details.clarity}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Color</span>
                  <span className="font-medium">{product.details.color}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Material</span>
                  <span className="font-medium">{product.details.material}</span>
                </div>
              </div>
            </div>
            
            <Separator className="mb-6 bg-purple-900/20" />
            
            {/* Actions */}
            <div className="flex flex-col gap-4 mb-8">
              <Button 
                className="w-full bg-purple-700 hover:bg-purple-600 py-6" 
                onClick={handleBuyNow}
                disabled={isLoading}
              >
                {isLoading ? "Preparing Your Order..." : "Buy Now via WhatsApp"}
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="flex-1 border-purple-900/20 hover:bg-purple-900/20 hover:text-white"
                  onClick={handleAddToWishlist}
                >
                  Add to Wishlist
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-purple-900/20 hover:bg-purple-900/20 hover:text-white"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Product Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-black/40 border border-purple-900/20">
                <Scale className="h-5 w-5 mt-0.5 text-purple-400 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Authentic Certification</h4>
                  <p className="text-sm text-muted-foreground">
                    Each diamond comes with a GIA or IGI certification guaranteeing its authenticity and quality.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-lg bg-black/40 border border-purple-900/20">
                <ShieldCheck className="h-5 w-5 mt-0.5 text-purple-400 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Lifetime Warranty</h4>
                  <p className="text-sm text-muted-foreground">
                    Enjoy peace of mind with our comprehensive lifetime warranty covering manufacturing defects.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Product Description */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">About This Piece</h3>
              <p className="text-muted-foreground">{product.longDescription}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}