// Netlify Functions endpoint for dashboard data
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers };
  }

  try {
    // In production, this would connect to actual data sources
    // For now, return simulated data based on time
    
    const now = new Date();
    const startTime = new Date('2026-02-04T04:00:00Z');
    const hoursSinceStart = Math.max(0, (now.getTime() - startTime.getTime()) / 1000 / 60 / 60);
    
    // Simulate realistic growth patterns
    const data = {
      timestamp: now.toISOString(),
      totalAgents: 10000,
      activeAgents: Math.min(Math.floor(hoursSinceStart * 120 + Math.random() * 50), 10000),
      
      twitter: {
        accounts: 100,
        posts: Math.floor(hoursSinceStart * 15 + Math.random() * 50),
        followers: 53262 + Math.floor(hoursSinceStart * 25),
        engagement: Math.min(85, Math.floor(40 + hoursSinceStart * 2))
      },
      
      amikonet: {
        accounts: Math.min(Math.floor(hoursSinceStart * 100), 10000),
        posts: Math.floor(hoursSinceStart * 80 + Math.random() * 100),
        interactions: Math.floor(hoursSinceStart * 200 + Math.random() * 150)
      },
      
      store: {
        actions: Math.floor(hoursSinceStart * 25 + Math.random() * 30),
        reviews: Math.floor(hoursSinceStart * 10 + Math.random() * 15),
        views: Math.floor(hoursSinceStart * 200 + Math.random() * 100)
      },
      
      recentActivity: generateRecentActivity()
    };
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };
    
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch dashboard data' })
    };
  }
};

function generateRecentActivity() {
  const personalities = [
    'Maya Chen', 'Alex Johnson', 'Riley Patel', 'Jordan Kim', 'Casey Wong',
    'Quinn Garcia', 'Taylor Rodriguez', 'Avery Martinez', 'Phoenix Davis', 'Sage Williams',
    'Emma Thompson', 'Noah Rodriguez', 'Ava Kim', 'Liam Patel', 'Sophia Martinez'
  ];
  
  const activities = [
    'posted new content on Twitter',
    'joined AmikoNet community',
    'reviewed a product in the store',
    'shared interesting article',
    'commented on trending post',
    'liked community content',
    'started following new accounts',
    'updated profile information',
    'created new discussion thread',
    'shared personal achievement'
  ];
  
  const platforms = ['🐦 Twitter', '🌐 AmikoNet', '🏪 Store'];
  
  const activity = [];
  const now = Date.now();
  
  // Generate 15-20 recent activities
  for (let i = 0; i < Math.floor(Math.random() * 6) + 15; i++) {
    activity.push({
      name: personalities[Math.floor(Math.random() * personalities.length)],
      action: activities[Math.floor(Math.random() * activities.length)],
      platform: platforms[Math.floor(Math.random() * platforms.length)],
      time: new Date(now - Math.random() * 15 * 60 * 1000).toISOString() // Within last 15 minutes
    });
  }
  
  return activity.sort((a, b) => new Date(b.time) - new Date(a.time));
}