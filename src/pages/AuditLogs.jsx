import { useState, useEffect } from 'react';
import { FileText, Filter, Search, Download } from 'lucide-react';
import apiService from '../services/api';

const AuditLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // TODO: Fetch audit logs from /api/audit/logs
    const fetchLogs = async () => {
      try {
        const response = await apiService.getAuditLogs({ status: filterStatus });
        setLogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching audit logs:', error);
        setLoading(false);
      }
    };

    fetchLogs();
  }, [filterStatus]);

  const filteredLogs = logs.filter(log => {
    const matchesStatus = filterStatus === 'all' || log.status === filterStatus;
    const matchesSearch = 
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.playbook.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.user.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'bg-cyber-green/20 text-cyber-green';
      case 'in-progress': return 'bg-cyber-blue/20 text-cyber-blue';
      case 'escalated': return 'bg-cyber-red/20 text-cyber-red';
      case 'failed': return 'bg-red-500/20 text-red-500';
      default: return 'bg-gray-400/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6 animate-slide-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-orbitron font-bold text-gray-900 dark:text-white mb-2">Audit Logs</h1>
          <p className="text-gray-600 dark:text-gray-400">Complete history of all automation actions and system events</p>
        </div>
        <button className="btn-secondary">
          <Download className="w-5 h-5 inline mr-2" />
          Export Logs
        </button>
      </div>

      {/* Filters */}
      <div className="glass-card p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Search */}
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search actions, playbooks, users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-white bg-opacity-5 border border-gray-300 dark:border-white dark:border-opacity-10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-light-blue dark:focus:border-cyber-blue transition-colors"
            />
          </div>

          {/* Status Filters */}
          {['all', 'success', 'in-progress', 'escalated', 'failed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterStatus === status
                  ? 'bg-light-blue dark:bg-cyber-blue text-white'
                  : 'bg-gray-200 dark:bg-white dark:bg-opacity-5 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-opacity-10'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card p-6">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Events</div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{filteredLogs.length}</div>
        </div>
        <div className="glass-card p-6">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Successful</div>
          <div className="text-3xl font-bold text-light-green dark:text-cyber-green">
            {filteredLogs.filter(l => l.status === 'success').length}
          </div>
        </div>
        <div className="glass-card p-6">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">In Progress</div>
          <div className="text-3xl font-bold text-light-blue dark:text-cyber-blue">
            {filteredLogs.filter(l => l.status === 'in-progress').length}
          </div>
        </div>
        <div className="glass-card p-6">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Escalated</div>
          <div className="text-3xl font-bold text-red-600 dark:text-cyber-red">
            {filteredLogs.filter(l => l.status === 'escalated').length}
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 dark:border-white dark:border-opacity-10">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Action</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Playbook</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-white dark:divide-opacity-5">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-5 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300 text-sm font-mono">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 text-light-blue dark:text-cyber-blue mr-2" />
                      <span className="text-gray-900 dark:text-white font-semibold">{log.action}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    {log.playbook !== 'N/A' ? log.playbook : <span className="text-gray-500">—</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">{log.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(log.status)}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400 text-sm max-w-md truncate">
                    {log.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredLogs.length === 0 && !loading && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">No audit logs found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditLogs;
