import { Link } from 'react-router-dom';
import { Shield, Zap, Network, TrendingUp, CheckCircle, AlertTriangle, DollarSign, Clock } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-cyber-dark overflow-x-hidden transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-light-blue dark:bg-cyber-blue opacity-10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-light-purple dark:bg-cyber-purple opacity-10 rounded-full blur-3xl top-40 -right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-96 h-96 bg-light-green dark:bg-cyber-green opacity-10 rounded-full blur-3xl -bottom-20 left-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8 animate-float">
            <Shield className="w-16 h-16 text-light-blue dark:text-cyber-blue mr-4" />
            <h1 className="text-4xl font-orbitron font-black gradient-text">SecureOps AI</h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-6xl md:text-7xl font-orbitron font-black mb-6 animate-slide-in text-gray-900 dark:text-white">
            Automate. <span className="text-light-blue dark:text-cyber-blue">Orchestrate.</span> <span className="text-light-green dark:text-cyber-green">Secure.</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-in" style={{ animationDelay: '0.2s' }}>
            AI-powered SOC automation that reduces incident response time by <span className="text-light-green dark:text-cyber-green font-bold">95%</span>.
            <br />Transform your security operations from reactive to proactive.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/app" className="btn-primary text-lg px-8 py-4">
              Try Demo Dashboard
            </Link>
            <button className="btn-secondary text-lg px-8 py-4">
              Book a Call
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-slide-in" style={{ animationDelay: '0.6s' }}>
            {[
              { label: 'Alerts Processed', value: '10M+', icon: AlertTriangle },
              { label: 'Response Time', value: '< 5 min', icon: Clock },
              { label: 'Cost Reduction', value: '70%', icon: DollarSign },
              { label: 'Success Rate', value: '99.2%', icon: CheckCircle },
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-6">
                <stat.icon className="w-8 h-8 text-light-blue dark:text-cyber-blue mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-cyber-darker transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-gray-900 dark:text-white">
            The <span className="text-red-600 dark:text-cyber-red">Challenge</span> Security Teams Face
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: 'Alert Overload',
                description: 'Security teams drown in 10,000+ alerts daily. 95% are false positives.',
                color: 'text-red-600 dark:text-cyber-red',
              },
              {
                icon: Clock,
                title: 'Analyst Burnout',
                description: 'Manual triaging and response leads to fatigue, errors, and talent shortage.',
                color: 'text-yellow-600 dark:text-yellow-400',
              },
              {
                icon: DollarSign,
                title: 'Rising Costs',
                description: 'Average data breach costs $4.45M. Manual SOC operations are expensive.',
                color: 'text-light-purple dark:text-cyber-purple',
              },
            ].map((problem, idx) => (
              <div key={idx} className="glass-card-hover p-8 text-center">
                <problem.icon className={`w-16 h-16 ${problem.color} mx-auto mb-4`} />
                <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{problem.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-light-bg dark:bg-cyber-dark transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-gray-900 dark:text-white">
            Our <span className="gradient-text">AI-Powered</span> Solution
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Automated Playbooks',
                description: 'Pre-built and custom workflows for instant incident response',
                gradient: 'from-light-blue dark:from-cyber-blue to-blue-500',
              },
              {
                icon: Network,
                title: 'Tool Orchestration',
                description: 'Seamless integration with SIEM, EDR, Firewalls, and 50+ tools',
                gradient: 'from-light-purple dark:from-cyber-purple to-purple-500',
              },
              {
                icon: TrendingUp,
                title: 'AI Incident Triage',
                description: 'Machine learning models prioritize real threats instantly',
                gradient: 'from-light-green dark:from-cyber-green to-green-500',
              },
              {
                icon: Shield,
                title: 'Risk Prioritization',
                description: 'Context-aware scoring reduces noise by 90%',
                gradient: 'from-light-pink dark:from-cyber-pink to-pink-500',
              },
            ].map((feature, idx) => (
              <div key={idx} className="glass-card-hover p-8 text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-cyber-darker transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-gray-900 dark:text-white">
            Integrates With Your <span className="text-light-blue dark:text-cyber-blue">Security Stack</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Splunk', icon: '🔍' },
              { name: 'CrowdStrike', icon: '🛡️' },
              { name: 'Palo Alto', icon: '🔥' },
              { name: 'Microsoft', icon: '☁️' },
              { name: 'AWS', icon: '📦' },
              { name: 'ServiceNow', icon: '🎫' },
              { name: 'Fortinet', icon: '🔐' },
              { name: 'Cisco', icon: '🌐' },
              { name: 'Check Point', icon: '✅' },
              { name: 'Okta', icon: '🔑' },
              { name: 'Azure', icon: '⚡' },
              { name: 'Google', icon: '🔒' },
            ].map((tech, idx) => (
              <div key={idx} className="glass-card-hover p-6 flex flex-col items-center justify-center">
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-4 bg-light-bg dark:bg-cyber-dark transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-light-blue/10 dark:from-cyber-blue/10 via-light-purple/10 dark:via-cyber-purple/10 to-light-green/10 dark:to-cyber-green/10"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Automate Your SOC?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's build the future of cybersecurity together.
            </p>
            <Link to="/app" className="btn-primary text-lg px-10 py-4 inline-block">
              Launch Demo Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-300 dark:border-white dark:border-opacity-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 SecureOps AI. All rights reserved. Built for the future of cybersecurity.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
