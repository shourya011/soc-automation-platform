import { useState, useEffect } from 'react';
import { AlertTriangle, Filter, Search, Play, Ban, ArrowUpCircle } from 'lucide-react';
import apiService from '../services/api';

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterSeverity, setFilterSeverity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // TODO: Fetch alerts from /api/alerts
    const fetchAlerts = async () => {
      try {
        const response = await apiService.getAlerts({ severity: filterSeverity });
        setAlerts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching alerts:', error);
        setLoading(false);
      }
    };

    fetchAlerts();
  }, [filterSeverity]);

  const handleAction = async (alertId, action) => {
    console.log(`Action ${action} on alert ${alertId}`);
    // TODO: Call API endpoint
    // await apiService.updateAlertStatus(alertId, action);
  };

  const filteredAlerts = alerts.filter(alert => {
    const matchesSeverity = filterSeverity === 'all' || alert.severity === filterSeverity;
    const matchesSearch = alert.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          alert.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          alert.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSeverity && matchesSearch;
  });

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-cyber-red border-cyber-red';
      case 'high': return 'text-cyber-purple border-cyber-purple';
      case 'medium': return 'text-yellow-400 border-yellow-400';
      case 'low': return 'text-cyber-blue border-cyber-blue';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'investigating': return 'bg-cyber-blue/20 text-cyber-blue';
      case 'auto-resolved': return 'bg-cyber-green/20 text-cyber-green';
      case 'pending': return 'bg-yellow-400/20 text-yellow-400';
      case 'escalated': return 'bg-cyber-red/20 text-cyber-red';
      case 'resolved': return 'bg-gray-400/20 text-gray-400';
      case 'auto-responding': return 'bg-cyber-purple/20 text-cyber-purple';
      default: return 'bg-gray-400/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6 animate-slide-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-orbitron font-bold text-white mb-2">Alert Management</h1>
          <p className="text-gray-400">Monitor and respond to security alerts in real-time</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="glass-card px-4 py-2">
            <span className="text-sm text-gray-400">Active Alerts: </span>
            <span className="text-lg font-bold text-cyber-red">{filteredAlerts.length}</span>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="glass-card p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by ID, type, or source..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue transition-colors"
            />
          </div>

          {/* Severity Filters */}
          {['all', 'critical', 'high', 'medium', 'low'].map((severity) => (
            <button
              key={severity}
              onClick={() => setFilterSeverity(severity)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterSeverity === severity
                  ? 'bg-cyber-blue text-white'
                  : 'bg-white bg-opacity-5 text-gray-400 hover:bg-opacity-10'
              }`}
            >
              {severity.charAt(0).toUpperCase() + severity.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Alerts Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white border-opacity-10">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Alert ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Source</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">IP Address</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white divide-opacity-5">
              {filteredAlerts.map((alert) => (
                <tr key={alert.id} className="hover:bg-white hover:bg-opacity-5 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <AlertTriangle className={`w-4 h-4 mr-2 ${getSeverityColor(alert.severity).split(' ')[0]}`} />
                      <span className="text-white font-mono text-sm">{alert.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{alert.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{alert.source}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(alert.severity)}`}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(alert.status)}`}>
                      {alert.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300 font-mono text-sm">{alert.ip}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-400 text-sm">
                    {new Date(alert.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAction(alert.id, 'investigate')}
                        className="p-2 bg-cyber-blue bg-opacity-20 text-cyber-blue rounded hover:bg-opacity-30 transition-all"
                        title="Investigate"
                      >
                        <Search className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAction(alert.id, 'auto-respond')}
                        className="p-2 bg-cyber-green bg-opacity-20 text-cyber-green rounded hover:bg-opacity-30 transition-all"
                        title="Auto-Respond"
                      >
                        <Play className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAction(alert.id, 'escalate')}
                        className="p-2 bg-cyber-red bg-opacity-20 text-cyber-red rounded hover:bg-opacity-30 transition-all"
                        title="Escalate"
                      >
                        <ArrowUpCircle className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAction(alert.id, 'block')}
                        className="p-2 bg-gray-400 bg-opacity-20 text-gray-400 rounded hover:bg-opacity-30 transition-all"
                        title="Block"
                      >
                        <Ban className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAlerts.length === 0 && !loading && (
          <div className="text-center py-12">
            <AlertTriangle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No alerts found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alerts;
