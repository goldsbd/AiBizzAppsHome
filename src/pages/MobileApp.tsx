
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Smartphone, Check, Download, Star } from 'lucide-react';

const MobileApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AiBizzApps Mobile</h1>
            <p className="text-white/70 max-w-3xl">
              Access all your business applications on the go with our powerful iPhone application.
              Stay connected and make informed decisions from anywhere.
            </p>
          </div>
          
          {/* App Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Take Your Business Everywhere</h2>
              <p className="text-white/70 mb-6">
                Our mobile application brings the power of AiBizzApps to your iPhone, 
                allowing you to access critical business data, monitor risks, and review 
                contracts from anywhere, at any time.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-aiba-accent-green">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Real-time Dashboards</h4>
                    <p className="text-sm text-white/70">Access your business metrics on the go</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-aiba-accent-green">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Push Notifications</h4>
                    <p className="text-sm text-white/70">Receive alerts for critical events and actions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-aiba-accent-green">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Offline Access</h4>
                    <p className="text-sm text-white/70">View cached data even without internet connection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-aiba-accent-green">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Secure Authentication</h4>
                    <p className="text-sm text-white/70">Biometric login and enterprise-grade security</p>
                  </div>
                </li>
              </ul>
              
              <Button className="bg-aiba-purple hover:bg-aiba-purple-dark transition-colors btn-glow flex items-center">
                <Download size={16} className="mr-2" />
                <span>Download on App Store</span>
              </Button>
            </div>
            
            <div className="relative flex justify-center">
              {/* Phone mockup with app */}
              <div className="relative">
                <div className="absolute -inset-4 bg-aiba-purple/30 rounded-full blur-xl"></div>
                <div className="relative bg-black border-4 border-gray-800 rounded-[36px] h-[580px] w-[280px] overflow-hidden shadow-xl">
                  {/* App Screen Mockup */}
                  <div className="h-full w-full bg-gradient-to-b from-aiba-bg-dark to-aiba-bg-light p-4">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-xs">9:41</div>
                      <div className="w-24 h-5 bg-black rounded-full"></div>
                    </div>
                    
                    {/* App Content */}
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold text-gradient">AiBizzApps</h3>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3 mb-4">
                      <h4 className="text-sm font-medium mb-2">Enterprise Risk</h4>
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-xs text-white/60">Overall Score</div>
                        <div className="text-xs text-aiba-accent-green">+5%</div>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-aiba-purple w-3/4 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <h4 className="text-xs font-medium mb-2">Contracts</h4>
                        <div className="text-lg font-semibold">24</div>
                        <div className="text-xs text-white/60">Pending Review</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <h4 className="text-xs font-medium mb-2">Tasks</h4>
                        <div className="text-lg font-semibold">7</div>
                        <div className="text-xs text-white/60">Due Today</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="text-sm font-medium mb-2">Recent Activity</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-xs">
                          <div className="w-2 h-2 bg-aiba-accent-green rounded-full mr-2"></div>
                          <div className="text-white/80">Risk assessment updated</div>
                        </div>
                        <div className="flex items-center text-xs">
                          <div className="w-2 h-2 bg-aiba-accent-yellow rounded-full mr-2"></div>
                          <div className="text-white/80">New contract uploaded</div>
                        </div>
                        <div className="flex items-center text-xs">
                          <div className="w-2 h-2 bg-aiba-accent-blue rounded-full mr-2"></div>
                          <div className="text-white/80">Meeting reminder: 3PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* App Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Key Mobile Features</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
                <h3 className="text-lg font-semibold mb-3">Enterprise Risk Dashboard</h3>
                <p className="text-white/70 mb-4">
                  Monitor risk scores and key metrics from your mobile device.
                </p>
                <div className="flex items-center text-aiba-purple-light">
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                </div>
              </div>
              
              <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
                <h3 className="text-lg font-semibold mb-3">Contract Review</h3>
                <p className="text-white/70 mb-4">
                  Review and approve contracts on the go with full markup capabilities.
                </p>
                <div className="flex items-center text-aiba-purple-light">
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                </div>
              </div>
              
              <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
                <h3 className="text-lg font-semibold mb-3">Task Management</h3>
                <p className="text-white/70 mb-4">
                  Track and update tasks assigned to you or your team members.
                </p>
                <div className="flex items-center text-aiba-purple-light">
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1 text-white/20" />
                </div>
              </div>
              
              <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
                <h3 className="text-lg font-semibold mb-3">Document Scanner</h3>
                <p className="text-white/70 mb-4">
                  Capture and process physical documents using your phone's camera.
                </p>
                <div className="flex items-center text-aiba-purple-light">
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1 text-white/20" />
                </div>
              </div>
              
              <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
                <h3 className="text-lg font-semibold mb-3">Secure Messaging</h3>
                <p className="text-white/70 mb-4">
                  Communicate securely with team members about sensitive matters.
                </p>
                <div className="flex items-center text-aiba-purple-light">
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                </div>
              </div>
              
              <div className="bg-card-gradient border border-white/10 rounded-lg p-6 hover:card-glow transition-all">
                <h3 className="text-lg font-semibold mb-3">Analytics & Reports</h3>
                <p className="text-white/70 mb-4">
                  Access key business insights and export reports directly from your phone.
                </p>
                <div className="flex items-center text-aiba-purple-light">
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1" />
                  <Star size={16} className="mr-1 text-white/20" />
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-aiba-purple/20 border border-aiba-purple/30 rounded-lg p-8 text-center">
            <Smartphone className="mx-auto mb-4 text-aiba-purple-light" size={32} />
            <h2 className="text-xl font-semibold mb-3">Get the AiBizzApps Mobile Experience</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Download our app today and experience the power of AiBizzApps wherever you go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-aiba-purple hover:bg-aiba-purple-dark transition-colors btn-glow flex items-center">
                <Download size={16} className="mr-2" />
                <span>Download on App Store</span>
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

export default MobileApp;
