
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileText, Check, AlertTriangle, FileCheck, FileSearch } from 'lucide-react';

const ContractsChecker = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Contracts Checker</h1>
            <p className="text-white/70 max-w-3xl">
              Our advanced AI system analyzes contracts to identify risks, ensure compliance, 
              and highlight opportunities, saving you time and reducing legal exposure.
            </p>
          </div>
          
          {/* Screenshots Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <img 
                  src="assets/HomePage.png" 
                  alt="Contract Checker Home Page" 
                  className="w-full h-auto rounded-lg border border-white/10 shadow-lg hover:shadow-xl transition-all"
                />
              </div>
              <div className="flex-1">
                <img 
                  src="assets/Collection.png" 
                  alt="Contract Collection View" 
                  className="w-full h-auto rounded-lg border border-white/10 shadow-lg hover:shadow-xl transition-all"
                />
              </div>
            </div>
          </div>
          
          {/* Feature Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
              <div className="bg-aiba-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileSearch className="text-aiba-purple-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Contract Analysis</h3>
              <p className="text-white/70">
                Our AI scans contracts of any length, extracting key terms, obligations, and potential issues.
              </p>
            </div>
            
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
              <div className="bg-aiba-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <AlertTriangle className="text-aiba-purple-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Identification</h3>
              <p className="text-white/70">
                Automatically flags clauses that present potential risks or are missing important protections.
              </p>
            </div>
            
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
              <div className="bg-aiba-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Check className="text-aiba-purple-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Verification</h3>
              <p className="text-white/70">
                Ensures contract language meets regulatory requirements and internal policies.
              </p>
            </div>
          </div>
          
          {/* How It Works */}
          <div className="bg-card-gradient border border-white/10 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-aiba-purple/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-semibold text-lg">1</span>
                </div>
                <h3 className="font-medium mb-2">Upload</h3>
                <p className="text-sm text-white/70">Upload your contract document in any standard format</p>
              </div>
              
              <div className="text-center">
                <div className="bg-aiba-purple/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-semibold text-lg">2</span>
                </div>
                <h3 className="font-medium mb-2">Analysis</h3>
                <p className="text-sm text-white/70">AI processes and analyzes the document content</p>
              </div>
              
              <div className="text-center">
                <div className="bg-aiba-purple/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-semibold text-lg">3</span>
                </div>
                <h3 className="font-medium mb-2">Review</h3>
                <p className="text-sm text-white/70">Receive detailed analysis with flagged concerns</p>
              </div>
              
              <div className="text-center">
                <div className="bg-aiba-purple/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-semibold text-lg">4</span>
                </div>
                <h3 className="font-medium mb-2">Implement</h3>
                <p className="text-sm text-white/70">Apply recommended changes to strengthen your contracts</p>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-aiba-purple-light mb-2">98%</div>
              <p className="text-white/70">Accuracy in identifying contract risks</p>
            </div>
            
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-aiba-purple-light mb-2">75%</div>
              <p className="text-white/70">Time saved in contract review process</p>
            </div>
            
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-aiba-purple-light mb-2">24/7</div>
              <p className="text-white/70">Availability for contract processing</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-aiba-purple/30 to-transparent border border-aiba-purple/30 rounded-lg p-8 text-center">
            <FileText className="mx-auto mb-4 text-aiba-purple-light" size={32} />
            <h2 className="text-xl font-semibold mb-3">Ready to Transform Your Contract Management?</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Get started today and experience the power of AI-driven contract analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-aiba-purple hover:bg-aiba-purple-dark transition-colors btn-glow">
                Request a Demo
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 transition-all">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContractsChecker;
