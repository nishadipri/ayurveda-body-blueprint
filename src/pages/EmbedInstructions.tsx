
import React from 'react';

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

  const embedCode = `<iframe 
  src="https://your-deployed-app-url.com/embedded-questionnaire" 
  width="100%" 
  height="800" 
  frameborder="0" 
  scrolling="yes"
  allow="fullscreen">
</iframe>`;

  return (
    <div className="min-h-screen flex flex-col">
    
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-ayurveda-sand/30">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <h1 className="font-lora text-3xl md:text-4xl font-semibold text-ayurveda-forest mb-4">
                Embed Ayur Glow On Your Website
              </h1>
              <p className="text-lg text-ayurveda-forest/80 max-w-2xl mx-auto">
                Follow these instructions to add the Ayur Glow dosha quiz to your Squarespace site or any other website.
              </p>
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Step 1: Deploy Your Quiz App</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Before embedding, you need to deploy this React application to a hosting service like:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Netlify (recommended for ease of use)</li>
                    <li>Vercel</li>
                    <li>GitHub Pages</li>
                    <li>AWS Amplify</li>
                  </ul>
                  <p>Once deployed, you'll have a URL like <code className="bg-gray-100 px-2 py-1 rounded">https://your-ayur-glow-quiz.netlify.app</code></p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: Add an HTML Code Block in Squarespace</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>Log in to your Squarespace account and navigate to the page where you want to add the quiz</li>
                    <li>Click "Add Block" or the "+" icon</li>
                    <li>Search for "Code" or find the "Code" block under "More"</li>
                    <li>Select "Code" block</li>
                    <li>Paste the iframe code below into the HTML editor</li>
                    <li>Click "Apply" or "Save"</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Step 3: Copy This Embed Code</span>
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
                      <li>Replace "https://your-deployed-app-url.com/embedded-questionnaire" with your actual deployed app URL</li>
                      <li>Adjust the height value if needed to fit your specific page layout</li>
                      <li>Some Squarespace templates may require additional CSS to make the iframe responsive</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Step 4: Customize Display Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>For better integration with your site:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Consider adding <code className="bg-gray-100 px-2 py-1 rounded">style="border:none"</code> to remove the iframe border</li>
                    <li>We've created special embedded versions of the questionnaire without header and footer for seamless integration</li>
                    <li>For responsive height adjustment, consider using a percentage-based height or a JavaScript resize handler</li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="text-center mt-8">
                <p className="mb-4">Need more help with embedding? Contact us for assistance.</p>
                <Button className="bg-ayurveda-leaf hover:bg-ayurveda-forest text-white">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
};

export default EmbedInstructions;
