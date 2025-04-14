
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle, Users, Cpu, Cloud, Database, Server, Shield } from 'lucide-react';

const Consulting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Expert IT Consulting Services</h1>
            <p className="text-white/70 max-w-3xl text-lg">
              With 35 years of experience in Computing, Infrastructure, CTO services, Cloud Technologies, 
              Azure, VMware Horizon, and Storage, we provide comprehensive consulting solutions to meet 
              your organization's technology needs.
            </p>
          </div>
          
          {/* Services Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
              <div className="bg-aiba-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Cpu className="text-aiba-purple-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Infrastructure Optimization</h3>
              <p className="text-white/70 mb-4">
                Design and implement resilient, scalable IT infrastructure tailored to your business needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Network architecture design
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Server virtualization
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Storage solutions
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
              <div className="bg-aiba-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Cloud className="text-aiba-purple-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Migration & Strategy</h3>
              <p className="text-white/70 mb-4">
                Navigate the complexities of cloud adoption with expert guidance and proven methodologies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Azure cloud implementation
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Hybrid cloud architectures
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Cloud cost optimization
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
              <div className="bg-aiba-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-aiba-purple-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">CTO Advisory Services</h3>
              <p className="text-white/70 mb-4">
                Strategic technology leadership to drive innovation and align IT with business objectives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Technology roadmap development
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Digital transformation strategy
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    IT governance and standards
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
              <div className="bg-aiba-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Server className="text-aiba-purple-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">VMware Horizon Solutions</h3>
              <p className="text-white/70 mb-4">
                Design and implementation of virtual desktop infrastructure for secure remote access.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    VDI architecture and deployment
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Remote workspace optimization
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Performance tuning and monitoring
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
              <div className="bg-aiba-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Database className="text-aiba-purple-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Storage Solutions</h3>
              <p className="text-white/70 mb-4">
                Enterprise-grade storage architectures to meet your data management needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    SAN/NAS architecture design
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Data backup and recovery
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Storage optimization and tiering
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
              <div className="bg-aiba-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="text-aiba-purple-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
              <p className="text-white/70 mb-4">
                Protect your organization with comprehensive security strategies and compliance frameworks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Security architecture design
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Regulatory compliance assessments
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 text-aiba-accent-green">
                    <Check size={14} />
                  </div>
                  <div className="text-sm text-white/70">
                    Disaster recovery planning
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Consulting Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Our Consulting Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="bg-aiba-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-2xl font-semibold">1</span>
                </div>
                <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-aiba-purple/50 to-transparent -z-10"></div>
                <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                <p className="text-white/70">
                  Comprehensive evaluation of your current technology landscape and business objectives.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-aiba-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-2xl font-semibold">2</span>
                </div>
                <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-aiba-purple/50 to-transparent -z-10"></div>
                <h3 className="text-xl font-semibold mb-2">Strategy</h3>
                <p className="text-white/70">
                  Development of a tailored roadmap aligned with your business goals and technology needs.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-aiba-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-2xl font-semibold">3</span>
                </div>
                <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-aiba-purple/50 to-transparent -z-10"></div>
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-white/70">
                  Expert execution of solutions with minimal disruption to your business operations.
                </p>
              </div>
              
              <div>
                <div className="bg-aiba-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-semibold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Optimization</h3>
                <p className="text-white/70">
                  Continuous improvement and optimization to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="bg-card-gradient border border-white/10 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Our Consulting Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-aiba-purple-light mb-4 flex justify-center">
                  <Users size={36} />
                </div>
                <h3 className="font-semibold text-lg mb-2">35 Years of Experience</h3>
                <p className="text-white/70">
                  Decades of hands-on experience across multiple technology domains and industries.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-aiba-purple-light mb-4 flex justify-center">
                  <Cpu size={36} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Technical Expertise</h3>
                <p className="text-white/70">
                  Deep technical knowledge in infrastructure, cloud, virtualization, and enterprise IT.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-aiba-purple-light mb-4 flex justify-center">
                  <MessageCircle size={36} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Business-Focused Approach</h3>
                <p className="text-white/70">
                  Solutions aligned with your specific business objectives and constraints.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-aiba-purple/30 to-transparent border border-aiba-purple/30 rounded-lg p-8 text-center">
            <h2 className="text-xl font-semibold mb-3">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how our consulting expertise can help solve your technology challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-aiba-purple hover:bg-aiba-purple-dark transition-colors btn-glow">
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 transition-all">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Consulting;
