# Multi-Agent Systems Examples

This directory contains working examples of multi-agent systems for the Agentics TV5 Hackathon.

## 🎬 Entertainment Discovery System

**File**: `entertainment_discovery.py`

A fully functional multi-agent system that solves the "45-minute decision problem" - helping users quickly find what to watch across multiple streaming platforms.

### Architecture

```
CoordinatorAgent (Orchestrator)
├── ResearchAgent     → Searches content across platforms
├── AnalysisAgent     → Analyzes and ranks options
└── RecommendationAgent → Generates personalized recommendations
```

### Features

- **Multi-Agent Collaboration**: 4 specialized agents working together
- **Async Execution**: Non-blocking agent operations
- **Memory System**: Agents remember and share information
- **Logging**: Real-time visibility into agent activities
- **Rich Output**: User-friendly recommendation display

### Running the Example

```bash
# Navigate to project root
cd /home/user/agentic-pancakes

# Run the entertainment discovery system
python3 agents/entertainment_discovery.py
```

### Expected Output

The system will:
1. Research content across Netflix, Disney+, and HBO Max
2. Analyze 7+ shows and rank by rating
3. Generate top 3 personalized recommendations
4. Display results with explanations

### Agents Explained

#### 1. **CoordinatorAgent**
- **Role**: Workflow orchestration
- **Responsibilities**:
  - Manages the overall workflow
  - Delegates tasks to specialized agents
  - Handles errors and failures
  - Provides execution summary

#### 2. **ResearchAgent**
- **Role**: Content research
- **Responsibilities**:
  - Searches across multiple platforms
  - Gathers content metadata
  - Returns structured data

#### 3. **AnalysisAgent**
- **Role**: Data analysis
- **Responsibilities**:
  - Processes research data
  - Ranks content by rating
  - Identifies genre patterns
  - Calculates statistics

#### 4. **RecommendationAgent**
- **Role**: Recommendation generation
- **Responsibilities**:
  - Creates personalized recommendations
  - Generates explanations
  - Formats output for users

### Key Concepts Demonstrated

✅ **Agent Coordination**: Coordinator pattern for multi-agent orchestration
✅ **Async Communication**: Agents communicate asynchronously
✅ **Memory Management**: Agents store and retrieve information
✅ **Error Handling**: Graceful failure recovery
✅ **Modularity**: Each agent has a single responsibility
✅ **Scalability**: Easy to add more agents or platforms

### Extending the System

#### Add More Streaming Platforms

```python
# In ResearchAgent.execute()
results = {
    "netflix": [...],
    "disney_plus": [...],
    "hbo_max": [...],
    "prime_video": [...],  # Add more platforms
    "apple_tv": [...]
}
```

#### Add New Agent Types

```python
class PersonalizationAgent(Agent):
    """Agent that learns user preferences"""
    def __init__(self):
        super().__init__("PersonalizeBot", "Preference Learning")

    async def execute(self, user_history: Dict) -> Dict:
        # Analyze viewing history
        # Learn preferences
        # Return personalized filters
        pass
```

#### Integrate with Real APIs

```python
# Replace simulated data with real API calls
import httpx

class ResearchAgent(Agent):
    async def execute(self, task: str):
        async with httpx.AsyncClient() as client:
            # Call real streaming APIs
            netflix_data = await client.get("https://api.netflix.com/...")
            return netflix_data
```

### Performance

- **Execution Time**: ~3 seconds (with simulated delays)
- **Agents**: 4 (1 coordinator + 3 workers)
- **Platforms**: 3 (Netflix, Disney+, HBO Max)
- **Content Analyzed**: 7 shows
- **Memory Usage**: Minimal (<10MB)

### Next Steps

1. **Add Real Data**: Integrate with actual streaming APIs
2. **User Preferences**: Implement preference learning
3. **More Agents**: Add review aggregation, trailer fetching
4. **Google ADK**: Port to Google ADK framework
5. **Vertex AI**: Deploy to Google Cloud

### Learning Resources

- **Multi-Agent Guide**: `../docs/MULTI_AGENT_SYSTEMS_GUIDE.md`
- **Google ADK**: https://google.github.io/adk-docs/
- **Async Python**: https://docs.python.org/3/library/asyncio.html

### Troubleshooting

**Issue**: Script doesn't run
**Solution**: Ensure Python 3.11+ is installed: `python3 --version`

**Issue**: Import errors
**Solution**: No external dependencies needed - uses Python stdlib only

**Issue**: Want to see more detail
**Solution**: Add more `self.log()` calls in agent methods

---

**Created**: 2025-12-05
**Track**: Multi-Agent Systems
**Status**: ✅ Working Demo
