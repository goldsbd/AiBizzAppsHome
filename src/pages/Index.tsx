
import { ChevronRight, BarChart2, FileText, Smartphone, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AppCard from '@/components/AppCard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Apps Section */}
        <section className="py-16" id="applications">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Applications</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Discover our suite of AI-powered applications designed to transform your business operations and decision-making.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard 
                title="Enterprise Risk Management" 
                description="Centralized visibility across your organization with comprehensive risk assessment and monitoring."
                icon={<BarChart2 size={24} className="text-white" />}
                stats={[
                  {
                    label: "Current Score",
                    value: 65,
                    trend: "Trend (30d)",
                    trendValue: "+12%",
                    trendUp: true
                  }
                ]}
                headerStyle="bg-card-header-blue"
                linkTo="/enterprise-risk"
              />
              
              <AppCard 
                title="Contracts Checker" 
                description="AI-powered contract analysis to identify risks, opportunities, and ensure compliance."
                icon={<FileText size={24} className="text-white" />}
                stats={[
                  {
                    label: "Processed Today",
                    value: 183,
                    trend: "Trend (30d)",
                    trendValue: "+8%",
                    trendUp: true
                  }
                ]}
                headerStyle="bg-card-header-purple"
                linkTo="/contracts-checker"
              />
              
              <AppCard 
                title="Mobile Application" 
                description="Take your business on the go with our powerful iPhone application."
                icon={<Smartphone size={24} className="text-white" />}
                stats={[
                  {
                    label: "Active Users",
                    value: "2.4k",
                    trend: "Trend (30d)",
                    trendValue: "+22%",
                    trendUp: true
                  }
                ]}
                headerStyle="bg-card-header-teal"
                linkTo="/mobile-app"
              />
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/applications" className="inline-flex items-center text-aiba-purple hover:text-aiba-purple-light transition-colors">
                <span>View all applications</span>
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Consulting Section */}
        <section className="py-16 bg-black/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Consulting Services</h2>
                <p className="text-white/70 mb-6">
                  With 35 years of experience in Computing, Infrastructure, CTO services, Cloud Technologies, 
                  Azure, VMware Horizon, and Storage, we provide comprehensive consulting solutions to help
                  your business thrive.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 bg-aiba-purple/20 p-1 rounded-full">
                      <Cpu size={16} className="text-aiba-purple-light" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Infrastructure Optimization</h3>
                      <p className="text-white/70 text-sm">Modern solutions for scalable and efficient IT infrastructure.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 bg-aiba-purple/20 p-1 rounded-full">
                      <Cpu size={16} className="text-aiba-purple-light" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Cloud Migration & Strategy</h3>
                      <p className="text-white/70 text-sm">Expert guidance for seamless cloud transitions and hybrid architectures.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 bg-aiba-purple/20 p-1 rounded-full">
                      <Cpu size={16} className="text-aiba-purple-light" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">CTO Advisory Services</h3>
                      <p className="text-white/70 text-sm">Strategic technology leadership to drive innovation and growth.</p>
                    </div>
                  </li>
                </ul>
                <Button asChild className="bg-aiba-purple hover:bg-aiba-purple-dark transition-colors btn-glow">
                  <Link to="/consulting">
                    Learn More About Our Services
                  </Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-aiba-purple/30 to-transparent rounded-lg blur-xl"></div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 relative z-10">
                  <h3 className="text-2xl font-semibold mb-6">Areas of Expertise</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded p-4 hover:bg-white/10 transition-colors">
                      <h4 className="font-semibold mb-2">Azure Cloud</h4>
                      <p className="text-sm text-white/70">Expert implementation and optimization</p>
                    </div>
                    <div className="bg-white/5 rounded p-4 hover:bg-white/10 transition-colors">
                      <h4 className="font-semibold mb-2">VMware Horizon</h4>
                      <p className="text-sm text-white/70">Virtual desktop infrastructure solutions</p>
                    </div>
                    <div className="bg-white/5 rounded p-4 hover:bg-white/10 transition-colors">
                      <h4 className="font-semibold mb-2">Enterprise Storage</h4>
                      <p className="text-sm text-white/70">High-performance storage solutions</p>
                    </div>
                    <div className="bg-white/5 rounded p-4 hover:bg-white/10 transition-colors">
                      <h4 className="font-semibold mb-2">IT Infrastructure</h4>
                      <p className="text-sm text-white/70">Design, deployment and management</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-center text-white/70">
                      35+ years of expertise at your service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-aiba-purple/20 to-transparent"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-white/70 mb-8 text-lg">
                Get started today with our AI applications and expert consulting services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-aiba-purple hover:bg-aiba-purple-dark text-white transition-colors btn-glow">
                  Schedule a Demo
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5 transition-all">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
