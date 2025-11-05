import { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, DollarSign, TrendingUp, Activity } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import apiService from '../services/api';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch data from /api/dashboard
    const fetchData = async () => {
      try {
        const response = await apiService.getDashboardMetrics();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <Activity className="w-16 h-16 text-cyber-blue animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  const kpiCards = [
    { 
      icon: AlertTriangle, 
      label: 'Total Alerts', 
      value: data?.kpis.totalAlerts || 0, 
      color: 'text-cyber-red',
      bgColor: 'from-cyber-red/20 to-red-900/20'
    },
    { 
      icon: CheckCircle, 
      label: 'Resolved Incidents', 
      value: data?.kpis.resolvedIncidents || 0, 
      color: 'text-cyber-green',
      bgColor: 'from-cyber-green/20 to-green-900/20'
    },
    { 
      icon: Clock, 
      label: 'Avg Response Time', 
      value: data?.kpis.avgResponseTime || '0 min', 
      color: 'text-cyber-blue',
      bgColor: 'from-cyber-blue/20 to-blue-900/20'
    },
    { 
      icon: DollarSign, 
      label: 'Cost Saved', 
      value: data?.kpis.costSaved || '$0', 
      color: 'text-cyber-purple',
      bgColor: 'from-cyber-purple/20 to-purple-900/20'
    },
  ];

  return (
    <div className="space-y-6 animate-slide-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-orbitron font-bold text-white mb-2">Security Operations Center</h1>
          <p className="text-gray-400">Real-time monitoring and automation dashboard</p>
        </div>
        <div className="glass-card px-4 py-2">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyber-green rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-gray-300">Live Monitoring Active</span>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, idx) => (
          <div key={idx} className="glass-card-hover p-6 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${kpi.bgColor} rounded-full blur-2xl opacity-50 -mr-16 -mt-16`}></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <kpi.icon className={`w-8 h-8 ${kpi.color}`} />
                <TrendingUp className="w-5 h-5 text-cyber-green" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{kpi.value}</div>
              <div className="text-sm text-gray-400">{kpi.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Response Time Chart */}
        <div className="lg:col-span-2 glass-card p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <Activity className="w-5 h-5 text-cyber-blue mr-2" />
            Incident Response Time (Last 24h)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data?.responseTimeChart || []}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" label={{ value: 'Minutes', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0A0F1F', border: '1px solid #00FFFF40', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Line 
                type="monotone" 
                dataKey="responseTime" 
                stroke="#00FFFF" 
                strokeWidth={3}
                dot={{ fill: '#00FFFF', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Alert Distribution */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <AlertTriangle className="w-5 h-5 text-cyber-red mr-2" />
            Alert Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data?.alertDistribution || []}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {(data?.alertDistribution || []).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#0A0F1F', border: '1px solid #00FFFF40', borderRadius: '8px' }}
              />
              <Legend 
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                formatter={(value) => <span style={{ color: '#9CA3AF', fontSize: '12px' }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-white mb-6">Recent Critical Alerts</h3>
        <div className="space-y-3">
          {(data?.recentAlerts || []).map((alert, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all cursor-pointer border-l-4" style={{ borderColor: alert.severity === 'critical' ? '#FF0040' : alert.severity === 'high' ? '#8A2BE2' : '#00FFFF' }}>
              <div className="flex items-center space-x-4">
                <AlertTriangle className={`w-5 h-5 ${alert.severity === 'critical' ? 'text-cyber-red' : 'text-cyber-blue'}`} />
                <div>
                  <div className="text-white font-semibold">{alert.id}</div>
                  <div className="text-sm text-gray-400">{alert.source}</div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  alert.severity === 'critical' ? 'bg-cyber-red/20 text-cyber-red' :
                  alert.severity === 'high' ? 'bg-cyber-purple/20 text-cyber-purple' :
                  'bg-cyber-blue/20 text-cyber-blue'
                }`}>
                  {alert.severity.toUpperCase()}
                </span>
                <span className="text-sm text-gray-400">{alert.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
