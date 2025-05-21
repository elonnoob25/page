import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Diamond } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="text-center">
        <Diamond className="h-16 w-16 text-purple-400 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          We couldn't find the page you were looking for. 
          Perhaps you'd like to browse our collection instead?
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild className="bg-purple-700 hover:bg-purple-600">
            <Link to="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-purple-900/20 hover:bg-purple-900/20">
            <Link to="/products">View Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}