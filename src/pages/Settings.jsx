import { useState, useEffect } from 'react';
import { Settings as SettingsIcon, Link as LinkIcon, CheckCircle, XCircle, RefreshCw, Save } from 'lucide-react';
import apiService from '../services/api';

const Settings = () => {
  const [integrations, setIntegrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch integrations from /api/settings/integrations
    const fetchIntegrations = async () => {
      try {
        const response = await apiService.getIntegrations();
        setIntegrations(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching integrations:', error);
        setLoading(false);
      }
    };

    fetchIntegrations();
  }, []);

  const handleSaveIntegration = async (integration) => {
    // TODO: Call API to save integration - POST /api/settings/integrations
    try {
      await apiService.saveIntegration(integration);
      alert(`Integration ${integration.name} saved successfully!`);
    } catch (error) {
      console.error('Error saving integration:', error);
    }
  };

  return (
    <div className="space-y-6 animate-slide-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-orbitron font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">Configure integrations and system preferences</p>
        </div>
      </div>

      {/* Integration Settings */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <LinkIcon className="w-6 h-6 text-light-blue dark:text-cyber-blue mr-3" />
          Security Tool Integrations
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Connect your security tools for automated orchestration</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => (
            <div key={integration.id} className="glass-card-hover p-6">
              {/* Status Indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{integration.icon}</div>
                <div className="flex items-center">
                  {integration.status === 'connected' ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-light-green dark:text-cyber-green mr-2" />
                      <span className="text-light-green dark:text-cyber-green font-semibold">Connected</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-600 dark:text-cyber-red mr-2" />
                      <span className="text-red-600 dark:text-cyber-red font-semibold">Disconnected</span>
                    </>
                  )}
                </div>
              </div>

              {/* Integration Info */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{integration.name}</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Type: <span className="text-gray-900 dark:text-white">{integration.type}</span></div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Last Sync: <span className="text-gray-900 dark:text-white">{integration.lastSync}</span>
              </div>

              {/* Connection Form */}
              <div className="space-y-3 mb-4">
                <input
                  type="text"
                  placeholder="API Endpoint"
                  className="w-full px-4 py-2 bg-white dark:bg-white bg-opacity-5 border border-gray-300 dark:border-white dark:border-opacity-10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-light-blue dark:focus:border-cyber-blue transition-colors text-sm"
                />
                <input
                  type="password"
                  placeholder="API Key / Token"
                  className="w-full px-4 py-2 bg-white dark:bg-white bg-opacity-5 border border-gray-300 dark:border-white dark:border-opacity-10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-light-blue dark:focus:border-cyber-blue transition-colors text-sm"
                />
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleSaveIntegration(integration)}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                    integration.status === 'connected'
                      ? 'bg-light-blue dark:bg-cyber-blue text-white hover:bg-light-blue/80 dark:hover:bg-cyber-blue/80'
                      : 'bg-light-green dark:bg-cyber-green text-white hover:bg-light-green/80 dark:hover:bg-cyber-green/80'
                  }`}
                >
                  <Save className="w-4 h-4 inline mr-2" />
                  {integration.status === 'connected' ? 'Update' : 'Connect'}
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-white dark:bg-opacity-5 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-opacity-10 transition-all">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Settings */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <SettingsIcon className="w-6 h-6 text-light-purple dark:text-cyber-purple mr-3" />
          System Preferences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Automation Settings */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Automation Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Auto-Response Enabled</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-light-blue/20 dark:peer-focus:ring-cyber-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-blue dark:peer-checked:bg-cyber-blue"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">AI Triage Active</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-light-blue/20 dark:peer-focus:ring-cyber-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-blue dark:peer-checked:bg-cyber-blue"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Real-time Monitoring</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-light-blue/20 dark:peer-focus:ring-cyber-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-blue dark:peer-checked:bg-cyber-blue"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Critical Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-light-blue/20 dark:peer-focus:ring-cyber-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-blue dark:peer-checked:bg-cyber-blue"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Playbook Execution</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-light-blue/20 dark:peer-focus:ring-cyber-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-blue dark:peer-checked:bg-cyber-blue"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Email Reports</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-light-blue/20 dark:peer-focus:ring-cyber-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-blue dark:peer-checked:bg-cyber-blue"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Alert Thresholds */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Alert Thresholds</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Critical Alert Threshold</label>
                <input
                  type="number"
                  defaultValue="90"
                  className="w-full px-4 py-2 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Auto-Response Delay (seconds)</label>
                <input
                  type="number"
                  defaultValue="30"
                  className="w-full px-4 py-2 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Log Retention (days)</label>
                <input
                  type="number"
                  defaultValue="90"
                  className="w-full px-4 py-2 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors"
                />
              </div>
            </div>
          </div>

          {/* API Configuration */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-4">API Configuration</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">API Base URL</label>
                <input
                  type="text"
                  defaultValue="https://api.soc-automation.com/"
                  className="w-full px-4 py-2 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors font-mono text-sm"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Request Timeout (ms)</label>
                <input
                  type="number"
                  defaultValue="10000"
                  className="w-full px-4 py-2 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button className="btn-primary px-8 py-3">
            <Save className="w-5 h-5 inline mr-2" />
            Save All Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
