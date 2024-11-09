<template>
  <!-- Web Header -->
  <div class="w-screen h-10 bg-slate-300"></div>
  <ValorantApi @agents-fetched="handleAgentsFetched" />
    <h2>Agents List</h2>
    <ul>
      <li v-for="agent in agents" :key="agent.uuid">
        <div v-if="agent.abilities[1]">Second Ability: {{ agent.abilities[4].displayName }}</div>
      </li>
    </ul>
  
  <div class="bg-slate-500 m-0 p-0 flex max-w-screen max-h-screen">
    <!-- Side bar -->
    <div class="SideBar w-24 h-screen bg-slate-400">sidebar
      z<button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button>
    </div>
    <!-- Main Content -->
    <ContentBuild :agentName="agents.length > 0 ? agents[0].name : ''" />
  </div>
</template>

<script>
import ValorantApi from './assets/Valorant-api.vue';
import ContentBuild from './components/content-build.vue';

  
  export default { 
    name: 'App',
    components: { 
    ContentBuild,
    ValorantApi
    },
    data( ) {
      return {
        agents: [],
      }
    },
    props:[
      'aa'
    ],
    methods: {
      handleAgentsFetched(agents) {
      this.agents = agents; // Store the fetched agents in the parent component
      console.log('Agents received from child:', this.agents);
    },
      
    },
  };
</script>

<style lang="scss" scoped>

</style>