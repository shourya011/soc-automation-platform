import { useState, useEffect } from 'react';
import { Layers, Play, Edit, FileText, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import apiService from '../services/api';

const Playbooks = () => {
  const [playbooks, setPlaybooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // TODO: Fetch playbooks from /api/playbooks
    const fetchPlaybooks = async () => {
      try {
        const response = await apiService.getPlaybooks();
        setPlaybooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching playbooks:', error);
        setLoading(false);
      }
    };

    fetchPlaybooks();
  }, []);

  const handleRunPlaybook = async (playbookId) => {
    // TODO: Call API to run playbook - POST /api/playbooks/run
    try {
      const result = await apiService.runPlaybook(playbookId, {});
      alert(`Playbook ${playbookId} executed successfully! Execution ID: ${result.executionId}`);
    } catch (error) {
      console.error('Error running playbook:', error);
    }
  };

  const categories = ['all', ...new Set(playbooks.map(p => p.category))];
  const filteredPlaybooks = selectedCategory === 'all' 
    ? playbooks 
    : playbooks.filter(p => p.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Email Security': 'from-cyber-blue to-blue-500',
      'Malware': 'from-cyber-red to-red-500',
      'Access Control': 'from-cyber-green to-green-500',
      'Data Loss Prevention': 'from-cyber-purple to-purple-500',
      'Network Security': 'from-cyber-pink to-pink-500',
      'User Behavior': 'from-yellow-400 to-orange-500',
    };
    return colors[category] || 'from-gray-400 to-gray-600';
  };

  return (
    <div className="space-y-6 animate-slide-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-orbitron font-bold text-gray-900 dark:text-white mb-2">Playbook Automation</h1>
          <p className="text-gray-600 dark:text-gray-400">Automated response workflows for security incidents</p>
        </div>
        <button className="btn-primary">
          <Play className="w-5 h-5 inline mr-2" />
          Create New Playbook
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Playbooks', value: playbooks.length, icon: Layers, color: 'text-light-blue dark:text-cyber-blue' },
          { label: 'Executions Today', value: '127', icon: Play, color: 'text-light-green dark:text-cyber-green' },
          { label: 'Avg Success Rate', value: '96%', icon: CheckCircle, color: 'text-light-purple dark:text-cyber-purple' },
          { label: 'Time Saved', value: '45h', icon: Clock, color: 'text-light-pink dark:text-cyber-pink' },
        ].map((stat, idx) => (
          <div key={idx} className="glass-card p-6">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <TrendingUp className="w-5 h-5 text-light-green dark:text-cyber-green" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-light-blue dark:bg-cyber-blue text-white'
                : 'glass-card text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {category === 'all' ? 'All Categories' : category}
          </button>
        ))}
      </div>

      {/* Playbooks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaybooks.map((playbook) => (
          <div key={playbook.id} className="glass-card-hover overflow-hidden group">
            {/* Category Badge */}
            <div className={`h-2 bg-gradient-to-r ${getCategoryColor(playbook.category)}`}></div>
            
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor(playbook.category)} flex items-center justify-center`}>
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">{playbook.id}</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-light-blue dark:group-hover:text-cyber-blue transition-colors">
                {playbook.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {playbook.description}
              </p>

              {/* Category Tag */}
              <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-white dark:bg-opacity-5 rounded-full text-xs text-gray-700 dark:text-gray-300 mb-4">
                {playbook.category}
              </span>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-gray-300 dark:border-white dark:border-opacity-10">
                <div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Success Rate</div>
                  <div className="text-lg font-bold text-light-green dark:text-cyber-green">{playbook.successRate}%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Steps</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{playbook.steps}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Avg Time</div>
                  <div className="text-lg font-bold text-light-blue dark:text-cyber-blue">{playbook.avgExecutionTime}</div>
                </div>
              </div>

              {/* Last Run */}
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                Last run: <span className="text-gray-900 dark:text-white">{playbook.lastRun}</span>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleRunPlaybook(playbook.id)}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-cyber-green to-green-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyber-green/50 transition-all font-semibold"
                >
                  <Play className="w-4 h-4 inline mr-2" />
                  Run
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-white dark:bg-opacity-5 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-opacity-10 transition-all">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-white dark:bg-opacity-5 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-opacity-10 transition-all">
                  <FileText className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPlaybooks.length === 0 && !loading && (
        <div className="glass-card p-12 text-center">
          <Layers className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">No playbooks found in this category</p>
        </div>
      )}
    </div>
  );
};

export default Playbooks;
