
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileBarChart2, AlertCircle, Calendar, FileCheck, ChevronUp, ChevronDown } from 'lucide-react';

const EnterpriseRisk = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold">Enterprise Risk Management</h1>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" className="border-white/20 hover:bg-white/5 flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Last 30 Days</span>
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5 flex items-center gap-2">
                  <FileBarChart2 size={16} />
                  <span>Export</span>
                </Button>
              </div>
            </div>
            
            <p className="text-white/70 max-w-2xl">
              Centralized visibility across your organization with comprehensive risk assessment and monitoring.
            </p>
          </div>
          
          {/* Risk Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card-gradient border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-card-header-blue px-4 pt-3 pb-2 geometric-header">
                <h3 className="font-semibold">Operational</h3>
                <p className="text-sm text-white/70">Day-to-day operational activities</p>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="text-sm text-white/60 mb-1">Current Score</div>
                  <div className="text-3xl font-semibold">42</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-white/60">Trend (30d)</div>
                  <div className="text-sm text-aiba-accent-red flex items-center">
                    <ChevronDown size={16} className="mr-1" />
                    -8%
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card-gradient border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-card-header-purple px-4 pt-3 pb-2 geometric-header">
                <h3 className="font-semibold">Financial</h3>
                <p className="text-sm text-white/70">Financial reporting and liquidity</p>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="text-sm text-white/60 mb-1">Current Score</div>
                  <div className="text-3xl font-semibold">65</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-white/60">Trend (30d)</div>
                  <div className="text-sm text-aiba-accent-green flex items-center">
                    <ChevronUp size={16} className="mr-1" />
                    +12%
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card-gradient border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-card-header-teal px-4 pt-3 pb-2 geometric-header">
                <h3 className="font-semibold">Compliance</h3>
                <p className="text-sm text-white/70">Regulatory and legal requirements</p>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="text-sm text-white/60 mb-1">Current Score</div>
                  <div className="text-3xl font-semibold">78</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-white/60">Trend (30d)</div>
                  <div className="text-sm text-white/60">±2%</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card-gradient border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-card-header-orange px-4 pt-3 pb-2 geometric-header">
                <h3 className="font-semibold">Strategic</h3>
                <p className="text-sm text-white/70">Long-term organizational goals</p>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="text-sm text-white/60 mb-1">Current Score</div>
                  <div className="text-3xl font-semibold">29</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-white/60">Trend (30d)</div>
                  <div className="text-sm text-aiba-accent-green flex items-center">
                    <ChevronUp size={16} className="mr-1" />
                    +5%
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Risk Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Risk Overview</h2>
            <div className="bg-card-gradient border border-white/10 rounded-lg p-6">
              <p className="text-white/70 mb-8">
                This page shows a prototype of the Enterprise Risk Management System. The complete application
                provides detailed risk analytics, automated monitoring, and customized reports across all
                organizational domains.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-aiba-accent-green">
                        <FileCheck size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Comprehensive Risk Dashboard</h4>
                        <p className="text-sm text-white/70">Real-time visibility across all risk categories</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-aiba-accent-green">
                        <FileCheck size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Automated Risk Monitoring</h4>
                        <p className="text-sm text-white/70">Continuous scanning for potential issues</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-aiba-accent-green">
                        <FileCheck size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Compliance Tracking</h4>
                        <p className="text-sm text-white/70">Ensure adherence to regulations and standards</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-aiba-accent-green">
                        <FileCheck size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Customizable Reporting</h4>
                        <p className="text-sm text-white/70">Generate tailored reports for stakeholders</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-aiba-accent-green">
                        <FileCheck size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Improved Decision Making</h4>
                        <p className="text-sm text-white/70">Data-driven insights for strategic decisions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-aiba-accent-green">
                        <FileCheck size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Reduced Risk Exposure</h4>
                        <p className="text-sm text-white/70">Proactive identification and mitigation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-aiba-accent-green">
                        <FileCheck size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Enhanced Operational Efficiency</h4>
                        <p className="text-sm text-white/70">Streamlined processes and reduced overhead</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-aiba-accent-green">
                        <FileCheck size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Regulatory Compliance</h4>
                        <p className="text-sm text-white/70">Stay ahead of changing requirements</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-aiba-purple/20 border border-aiba-purple/30 rounded-lg p-8 text-center">
            <AlertCircle className="mx-auto mb-4 text-aiba-purple-light" size={32} />
            <h2 className="text-xl font-semibold mb-3">Ready to Take Control of Your Organizational Risk?</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Get in touch with our team to schedule a personalized demo of our Enterprise Risk Management System.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-aiba-purple hover:bg-aiba-purple-dark transition-colors btn-glow">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 transition-all">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EnterpriseRisk;
