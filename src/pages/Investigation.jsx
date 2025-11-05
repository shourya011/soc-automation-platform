import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Search, Shield, Globe, User, Clock, AlertTriangle, ChevronDown, ChevronUp, Brain } from 'lucide-react';
import apiService from '../services/api';

const Investigation = () => {
  const { id } = useParams();
  const [investigation, setInvestigation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    evidence: true,
    ipIntel: true,
    timeline: true,
    aiAnalysis: true,
  });

  useEffect(() => {
    // TODO: Fetch investigation from /api/investigations/:id
    const fetchInvestigation = async () => {
      try {
        const response = await apiService.getInvestigation(id);
        setInvestigation(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching investigation:', error);
        setLoading(false);
      }
    };

    fetchInvestigation();
  }, [id]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <Search className="w-16 h-16 text-cyber-blue animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading investigation data...</p>
        </div>
      </div>
    );
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-cyber-red bg-cyber-red/20 border-cyber-red';
      case 'high': return 'text-cyber-purple bg-cyber-purple/20 border-cyber-purple';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400';
      case 'low': return 'text-cyber-blue bg-cyber-blue/20 border-cyber-blue';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'critical': return 'text-cyber-red';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-cyber-green';
      case 'info': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6 animate-slide-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-orbitron font-bold text-white mb-2">Investigation Center</h1>
          <p className="text-gray-400">Deep dive analysis and threat correlation</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className={`px-4 py-2 rounded-lg border font-semibold ${getSeverityColor(investigation?.severity)}`}>
            {investigation?.severity?.toUpperCase()}
          </span>
          <span className="glass-card px-4 py-2 text-sm">
            ID: <span className="font-mono text-cyber-blue">{investigation?.id}</span>
          </span>
        </div>
      </div>

      {/* Investigation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card p-6">
          <AlertTriangle className="w-8 h-8 text-cyber-red mb-3" />
          <div className="text-sm text-gray-400 mb-1">Alert ID</div>
          <div className="text-lg font-bold text-white">{investigation?.alertId}</div>
        </div>
        <div className="glass-card p-6">
          <Clock className="w-8 h-8 text-cyber-blue mb-3" />
          <div className="text-sm text-gray-400 mb-1">Start Time</div>
          <div className="text-lg font-bold text-white">
            {new Date(investigation?.startTime).toLocaleString()}
          </div>
        </div>
        <div className="glass-card p-6">
          <Shield className="w-8 h-8 text-cyber-green mb-3" />
          <div className="text-sm text-gray-400 mb-1">Status</div>
          <div className="text-lg font-bold text-cyber-green">{investigation?.status}</div>
        </div>
        <div className="glass-card p-6">
          <Brain className="w-8 h-8 text-cyber-purple mb-3" />
          <div className="text-sm text-gray-400 mb-1">AI Confidence</div>
          <div className="text-lg font-bold text-cyber-purple">{investigation?.aiAnalysis?.confidence}%</div>
        </div>
      </div>

      {/* Evidence Log */}
      <div className="glass-card">
        <button
          onClick={() => toggleSection('evidence')}
          className="w-full flex items-center justify-between p-6 hover:bg-white hover:bg-opacity-5 transition-colors"
        >
          <div className="flex items-center">
            <AlertTriangle className="w-6 h-6 text-cyber-blue mr-3" />
            <h3 className="text-xl font-bold text-white">Evidence Log</h3>
          </div>
          {expandedSections.evidence ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </button>
        
        {expandedSections.evidence && (
          <div className="px-6 pb-6 space-y-3">
            {investigation?.evidence?.map((item, idx) => (
              <div key={idx} className="flex items-start p-4 bg-white bg-opacity-5 rounded-lg border-l-4" style={{ borderColor: item.severity === 'critical' ? '#FF0040' : item.severity === 'high' ? '#8A2BE2' : item.severity === 'medium' ? '#FFB800' : '#00FFFF' }}>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400 font-mono">{item.timestamp}</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(item.severity)}`}>
                      {item.type}
                    </span>
                  </div>
                  <p className="text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* IP Intelligence */}
      <div className="glass-card">
        <button
          onClick={() => toggleSection('ipIntel')}
          className="w-full flex items-center justify-between p-6 hover:bg-white hover:bg-opacity-5 transition-colors"
        >
          <div className="flex items-center">
            <Globe className="w-6 h-6 text-cyber-purple mr-3" />
            <h3 className="text-xl font-bold text-white">IP Intelligence</h3>
          </div>
          {expandedSections.ipIntel ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </button>
        
        {expandedSections.ipIntel && (
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">IP Address</div>
                  <div className="text-lg font-mono text-white">{investigation?.ipIntelligence?.ip}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Country</div>
                  <div className="text-lg text-white">{investigation?.ipIntelligence?.country}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">ISP</div>
                  <div className="text-lg text-white">{investigation?.ipIntelligence?.isp}</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Threat Score</div>
                  <div className="flex items-center">
                    <div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden mr-3">
                      <div className="h-full bg-gradient-to-r from-cyber-green via-yellow-400 to-cyber-red" style={{ width: `${investigation?.ipIntelligence?.threatScore}%` }}></div>
                    </div>
                    <span className="text-lg font-bold text-cyber-red">{investigation?.ipIntelligence?.threatScore}/100</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Known Malicious</div>
                  <div className={`text-lg font-bold ${investigation?.ipIntelligence?.knownMalicious ? 'text-cyber-red' : 'text-cyber-green'}`}>
                    {investigation?.ipIntelligence?.knownMalicious ? 'YES' : 'NO'}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Associated Threats</div>
                  <div className="flex flex-wrap gap-2">
                    {investigation?.ipIntelligence?.associatedThreats?.map((threat, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyber-red bg-opacity-20 text-cyber-red rounded-full text-xs font-semibold">
                        {threat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* User Timeline */}
      <div className="glass-card">
        <button
          onClick={() => toggleSection('timeline')}
          className="w-full flex items-center justify-between p-6 hover:bg-white hover:bg-opacity-5 transition-colors"
        >
          <div className="flex items-center">
            <User className="w-6 h-6 text-cyber-green mr-3" />
            <h3 className="text-xl font-bold text-white">User Behavior Timeline</h3>
          </div>
          {expandedSections.timeline ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </button>
        
        {expandedSections.timeline && (
          <div className="px-6 pb-6">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-red"></div>
              
              {/* Timeline Items */}
              <div className="space-y-6">
                {investigation?.userTimeline?.map((event, idx) => (
                  <div key={idx} className="relative flex items-start ml-4">
                    <div className={`w-8 h-8 rounded-full border-4 border-cyber-dark flex items-center justify-center z-10 ${
                      event.risk === 'critical' ? 'bg-cyber-red' :
                      event.risk === 'medium' ? 'bg-yellow-400' :
                      event.risk === 'low' ? 'bg-cyber-green' :
                      'bg-gray-400'
                    }`}>
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div className="ml-6 flex-1 glass-card p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-sm text-gray-400">{event.time}</span>
                        <span className={`text-xs font-semibold ${getRiskColor(event.risk)}`}>
                          {event.risk.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-white">{event.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AI Analysis */}
      <div className="glass-card border-2 border-cyber-purple">
        <button
          onClick={() => toggleSection('aiAnalysis')}
          className="w-full flex items-center justify-between p-6 hover:bg-white hover:bg-opacity-5 transition-colors"
        >
          <div className="flex items-center">
            <Brain className="w-6 h-6 text-cyber-purple mr-3" />
            <h3 className="text-xl font-bold text-white">AI-Powered Analysis</h3>
          </div>
          {expandedSections.aiAnalysis ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </button>
        
        {expandedSections.aiAnalysis && (
          <div className="px-6 pb-6 space-y-6">
            <div className="flex items-center justify-between p-4 bg-cyber-purple bg-opacity-10 rounded-lg">
              <span className="text-gray-300">AI Confidence Level</span>
              <span className="text-2xl font-bold text-cyber-purple">{investigation?.aiAnalysis?.confidence}%</span>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-3">RECOMMENDATION</h4>
              <p className="text-white text-lg leading-relaxed">
                {investigation?.aiAnalysis?.recommendation}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-3">SUGGESTED ACTIONS</h4>
              <div className="space-y-2">
                {investigation?.aiAnalysis?.suggestedActions?.map((action, idx) => (
                  <div key={idx} className="flex items-center p-3 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-cyber-blue flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-bold text-white">{idx + 1}</span>
                    </div>
                    <span className="text-white">{action}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full btn-primary py-4">
              Execute Recommended Actions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Investigation;
