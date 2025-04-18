
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const EmbedInstructions = () => {
  const { toast } = useToast();
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Code copied!",
      description: "The embed code has been copied to your clipboard."
    });
  };

  // Updated embed code with more flexibility
  const embedCode = `<iframe 
  src="https://your-ayur-glow-url.com/embedded-questionnaire" 
  width="100%" 
  height="800" 
  style="border:none; max-width: 1200px; margin: 0 auto; display: block;"
  allow="fullscreen">
</iframe>`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-ayurveda-sand/30">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <h1 className="font-lora text-3xl md:text-4xl font-semibold text-ayurveda-forest mb-4">
                Embed Ayur Glow On Your Website
              </h1>
              <p className="text-lg text-ayurveda-forest/80 max-w-2xl mx-auto">
                Follow these instructions to add the Ayur Glow dosha quiz to your website.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Embed Code</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1"
                    onClick={() => copyToClipboard(embedCode)}
                  >
                    <Copy className="h-4 w-4" /> Copy
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <pre className="text-sm">{embedCode}</pre>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-medium">Important notes:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Replace "https://your-ayur-glow-url.com" with your actual deployed app URL</li>
                    <li>Adjust width, height, and styling as needed for your website</li>
                    <li>The iframe is set to 100% width with a max-width of 1200px for responsiveness</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EmbedInstructions;
