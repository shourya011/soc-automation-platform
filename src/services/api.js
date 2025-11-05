import axios from 'axios';

// API base configuration
export const api = axios.create({
  baseURL: 'https://api.soc-automation.com/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor for adding auth tokens
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// API Service Functions
export const apiService = {
  // Dashboard
  getDashboardMetrics: async () => {
    // TODO: Replace with actual API call
    // return api.get('/api/dashboard');
    return mockDashboardData();
  },

  // Alerts
  getAlerts: async (filters = {}) => {
    // TODO: Replace with actual API call
    // return api.get('/api/alerts', { params: filters });
    return mockAlertsData(filters);
  },

  updateAlertStatus: async (alertId, status) => {
    // TODO: Replace with actual API call
    // return api.patch(`/api/alerts/${alertId}`, { status });
    return { success: true, alertId, status };
  },

  // Playbooks
  getPlaybooks: async () => {
    // TODO: Replace with actual API call
    // return api.get('/api/playbooks');
    return mockPlaybooksData();
  },

  runPlaybook: async (playbookId, params) => {
    // TODO: Replace with actual API call
    // return api.post('/api/playbooks/run', { playbookId, params });
    console.log('Running playbook:', playbookId, params);
    return { success: true, executionId: Math.random().toString(36).substr(2, 9) };
  },

  // Investigations
  getInvestigation: async (investigationId) => {
    // TODO: Replace with actual API call
    // return api.get(`/api/investigations/${investigationId}`);
    return mockInvestigationData(investigationId);
  },

  // Audit Logs
  getAuditLogs: async (filters = {}) => {
    // TODO: Replace with actual API call
    // return api.get('/api/audit/logs', { params: filters });
    return mockAuditLogsData(filters);
  },

  // Settings
  getIntegrations: async () => {
    // TODO: Replace with actual API call
    // return api.get('/api/settings/integrations');
    return mockIntegrationsData();
  },

  saveIntegration: async (integration) => {
    // TODO: Replace with actual API call
    // return api.post('/api/settings/integrations', integration);
    console.log('Saving integration:', integration);
    return { success: true, integration };
  },
};

// Mock Data Functions
const mockDashboardData = () => {
  return {
    data: {
      kpis: {
        totalAlerts: 1247,
        resolvedIncidents: 1089,
        avgResponseTime: '4.2 min',
        costSaved: '$247K',
      },
      responseTimeChart: Array.from({ length: 24 }, (_, i) => ({
        time: `${i}:00`,
        responseTime: Math.floor(Math.random() * 10) + 2,
      })),
      alertDistribution: [
        { name: 'Phishing', value: 342, color: '#FF0040' },
        { name: 'Malware', value: 289, color: '#8A2BE2' },
        { name: 'Unauthorized Access', value: 234, color: '#00FFFF' },
        { name: 'DDoS', value: 187, color: '#39FF14' },
        { name: 'Data Exfiltration', value: 195, color: '#FF00FF' },
      ],
      recentAlerts: [
        { id: 'ALT-2024-001', source: 'Firewall', severity: 'critical', status: 'investigating', timestamp: '2 min ago' },
        { id: 'ALT-2024-002', source: 'EDR', severity: 'high', status: 'auto-resolved', timestamp: '15 min ago' },
        { id: 'ALT-2024-003', source: 'SIEM', severity: 'medium', status: 'pending', timestamp: '23 min ago' },
      ],
    },
  };
};

const mockAlertsData = (filters) => {
  const allAlerts = [
    { id: 'ALT-2024-001', source: 'Firewall', severity: 'critical', status: 'investigating', type: 'Unauthorized Access', timestamp: '2024-11-05T10:23:00Z', ip: '192.168.1.45' },
    { id: 'ALT-2024-002', source: 'EDR', severity: 'high', status: 'auto-resolved', type: 'Malware Detection', timestamp: '2024-11-05T10:08:00Z', ip: '10.0.0.89' },
    { id: 'ALT-2024-003', source: 'SIEM', severity: 'medium', status: 'pending', type: 'Phishing Attempt', timestamp: '2024-11-05T10:00:00Z', ip: '172.16.0.34' },
    { id: 'ALT-2024-004', source: 'Cloud Security', severity: 'critical', status: 'escalated', type: 'Data Exfiltration', timestamp: '2024-11-05T09:45:00Z', ip: '203.0.113.42' },
    { id: 'ALT-2024-005', source: 'Network IDS', severity: 'low', status: 'resolved', type: 'Port Scanning', timestamp: '2024-11-05T09:30:00Z', ip: '198.51.100.23' },
    { id: 'ALT-2024-006', source: 'Email Security', severity: 'high', status: 'investigating', type: 'Phishing', timestamp: '2024-11-05T09:15:00Z', ip: 'N/A' },
    { id: 'ALT-2024-007', source: 'Firewall', severity: 'medium', status: 'pending', type: 'DDoS Attempt', timestamp: '2024-11-05T09:00:00Z', ip: '192.168.1.78' },
    { id: 'ALT-2024-008', source: 'EDR', severity: 'critical', status: 'auto-responding', type: 'Ransomware', timestamp: '2024-11-05T08:45:00Z', ip: '10.0.0.112' },
  ];

  return { data: allAlerts };
};

const mockPlaybooksData = () => {
  return {
    data: [
      {
        id: 'PB-001',
        name: 'Phishing Response',
        description: 'Automated response to phishing attempts including email quarantine and user notification',
        category: 'Email Security',
        lastRun: '2 hours ago',
        successRate: 98,
        avgExecutionTime: '45s',
        steps: 12,
      },
      {
        id: 'PB-002',
        name: 'Ransomware Containment',
        description: 'Isolate infected systems, block malicious IPs, and initiate backup recovery',
        category: 'Malware',
        lastRun: '1 day ago',
        successRate: 95,
        avgExecutionTime: '2m 15s',
        steps: 18,
      },
      {
        id: 'PB-003',
        name: 'Unauthorized Access Block',
        description: 'Automatically block suspicious IPs and reset compromised credentials',
        category: 'Access Control',
        lastRun: '30 min ago',
        successRate: 99,
        avgExecutionTime: '30s',
        steps: 8,
      },
      {
        id: 'PB-004',
        name: 'Data Exfiltration Prevention',
        description: 'Detect and block unusual data transfer patterns',
        category: 'Data Loss Prevention',
        lastRun: '5 hours ago',
        successRate: 92,
        avgExecutionTime: '1m 30s',
        steps: 15,
      },
      {
        id: 'PB-005',
        name: 'DDoS Mitigation',
        description: 'Activate rate limiting and redirect traffic through scrubbing centers',
        category: 'Network Security',
        lastRun: '3 days ago',
        successRate: 97,
        avgExecutionTime: '5m',
        steps: 10,
      },
      {
        id: 'PB-006',
        name: 'Insider Threat Detection',
        description: 'Monitor and analyze unusual employee behavior patterns',
        category: 'User Behavior',
        lastRun: '6 hours ago',
        successRate: 88,
        avgExecutionTime: '3m 45s',
        steps: 20,
      },
    ],
  };
};

const mockInvestigationData = (id) => {
  return {
    data: {
      id: id || 'INV-2024-001',
      alertId: 'ALT-2024-001',
      status: 'in-progress',
      severity: 'critical',
      startTime: '2024-11-05T10:23:00Z',
      evidence: [
        { timestamp: '10:23:15', type: 'Network', description: 'Suspicious connection attempt from 192.168.1.45', severity: 'high' },
        { timestamp: '10:23:18', type: 'Authentication', description: 'Multiple failed login attempts detected', severity: 'critical' },
        { timestamp: '10:23:25', type: 'Firewall', description: 'Blocked connection to known malicious IP', severity: 'medium' },
        { timestamp: '10:23:30', type: 'System', description: 'Unusual process execution detected', severity: 'high' },
      ],
      ipIntelligence: {
        ip: '192.168.1.45',
        country: 'Unknown',
        isp: 'Internal Network',
        threatScore: 85,
        knownMalicious: true,
        associatedThreats: ['Brute Force', 'Credential Stuffing'],
      },
      userTimeline: [
        { time: '10:15', action: 'Normal login from workstation', risk: 'low' },
        { time: '10:20', action: 'Accessed sensitive documents', risk: 'medium' },
        { time: '10:23', action: 'Attempted lateral movement', risk: 'critical' },
        { time: '10:25', action: 'Session terminated by system', risk: 'info' },
      ],
      aiAnalysis: {
        confidence: 94,
        recommendation: 'Immediate containment required. Evidence suggests compromised credentials being used for lateral movement.',
        suggestedActions: [
          'Reset user credentials',
          'Isolate affected system',
          'Block source IP',
          'Review access logs for past 24 hours',
        ],
      },
    },
  };
};

const mockAuditLogsData = (filters) => {
  return {
    data: [
      { id: 1, timestamp: '2024-11-05T10:25:30Z', action: 'Playbook Executed', playbook: 'Unauthorized Access Block', user: 'System', status: 'success', details: 'Blocked IP 192.168.1.45' },
      { id: 2, timestamp: '2024-11-05T10:10:15Z', action: 'Alert Auto-Resolved', playbook: 'Phishing Response', user: 'AI Engine', status: 'success', details: 'Quarantined 3 emails' },
      { id: 3, timestamp: '2024-11-05T09:55:42Z', action: 'Manual Investigation', playbook: 'N/A', user: 'analyst@company.com', status: 'in-progress', details: 'Investigating ALT-2024-003' },
      { id: 4, timestamp: '2024-11-05T09:40:20Z', action: 'Integration Updated', playbook: 'N/A', user: 'admin@company.com', status: 'success', details: 'Updated SIEM credentials' },
      { id: 5, timestamp: '2024-11-05T09:30:10Z', action: 'Playbook Executed', playbook: 'Ransomware Containment', user: 'System', status: 'success', details: 'Isolated 2 endpoints' },
      { id: 6, timestamp: '2024-11-05T09:15:05Z', action: 'Alert Escalated', playbook: 'N/A', user: 'System', status: 'escalated', details: 'Critical alert forwarded to SOC lead' },
    ],
  };
};

const mockIntegrationsData = () => {
  return {
    data: [
      { id: 1, name: 'Splunk SIEM', type: 'SIEM', status: 'connected', lastSync: '2 min ago', icon: '🔍' },
      { id: 2, name: 'CrowdStrike EDR', type: 'EDR', status: 'connected', lastSync: '5 min ago', icon: '🛡️' },
      { id: 3, name: 'Palo Alto Firewall', type: 'Firewall', status: 'connected', lastSync: '1 min ago', icon: '🔥' },
      { id: 4, name: 'Azure Sentinel', type: 'Cloud Security', status: 'connected', lastSync: '3 min ago', icon: '☁️' },
      { id: 5, name: 'Proofpoint Email', type: 'Email Security', status: 'disconnected', lastSync: '2 hours ago', icon: '📧' },
      { id: 6, name: 'ServiceNow', type: 'Ticketing', status: 'connected', lastSync: '10 min ago', icon: '🎫' },
    ],
  };
};

export default apiService;
