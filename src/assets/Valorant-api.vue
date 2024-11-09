<script>
import axios from 'axios';

export default {
  data() {
    return {
      agents: [],
    };
  },
  methods: {
    async fetchAgents() {
      try {
        const response = await axios.get('https://valorant-api.com/v1/agents/');
        this.agents = response.data.data; // Store fetched agents data
        console.log(this.agents); // Log the fetched data
        this.$emit('agents-fetched', this.agents); // Emit the agents data
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    },
  },
  mounted() {
    this.fetchAgents(); // Fetch agents when component is mounted
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>