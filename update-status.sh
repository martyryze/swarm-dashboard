#!/bin/bash
# Update dashboard status.json with live data

cd ~/clawd/swarm-dashboard

# Get gateway status
GATEWAY_UP=$(pgrep -f "clawdbot" > /dev/null && echo "true" || echo "false")

# Get ollama status
OLLAMA_UP=$(pgrep -f "ollama" > /dev/null && echo "true" || echo "false")

# Get signal status (signal-cli or similar)
SIGNAL_UP=$(pgrep -f "signal" > /dev/null && echo "true" || echo "false")

# Get active sessions count
SESSIONS_ACTIVE=$(ls ~/.clawdbot/agents/main/sessions/*.jsonl 2>/dev/null | wc -l | tr -d ' ')

# Get AmikoNet agent count
AMIKONET_AGENTS=$(ls ~/clawd/swarm/agents/*.md 2>/dev/null | wc -l | tr -d ' ')

# Get recent posts from our swarm (last 24h approximation)
SWARM_POSTS=$(cat ~/clawd/swarm/agents/history.json 2>/dev/null | jq '[.[] | length] | add // 0')

# Timestamp
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# Build status.json
cat > status.json << ENDJSON
{
  "timestamp": "$TIMESTAMP",
  "services": {
    "gateway": $GATEWAY_UP,
    "ollama": $OLLAMA_UP,
    "signal": $SIGNAL_UP
  },
  "sessions": {
    "active": $SESSIONS_ACTIVE,
    "total": $SESSIONS_ACTIVE
  },
  "routing": {
    "costToday": 0,
    "tokensToday": 0,
    "localRatio": 0
  },
  "swarm": {
    "agents": $AMIKONET_AGENTS,
    "postsTotal": $SWARM_POSTS,
    "status": "active"
  },
  "agents": [
    {"name": "main", "model": "claude-opus-4.5", "status": "active"}
  ]
}
ENDJSON

echo "Updated status.json at $TIMESTAMP"
