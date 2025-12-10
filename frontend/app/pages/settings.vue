<script setup lang="ts">
const { user } = useAuth()

const activeTab = ref('profile')
const notifications = ref(true)

const form = reactive({
  name: user.value?.name || '',
  email: user.value?.email || '',
  bio: 'Développeur passionné.',
})

watch(user, (newUser) => {
  if (newUser) {
    form.name = newUser.name
    form.email = newUser.email
  }
})

const saveProfile = () => {
  alert('Profil mis à jour ! (Simulation)')
}
</script>

<template>
  <div class="min-h-screen py-12 px-4 max-w-6xl mx-auto">
    <h1 class="text-3xl font-black text-slate-900 dark:text-white mb-8">Paramètres</h1>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

      <!-- Sidebar Settings -->
      <div class="space-y-2">
        <button v-for="tab in ['profile', 'notifications', 'security']" :key="tab"
          class="w-full text-left px-4 py-3 rounded-xl font-bold transition-all capitalize flex items-center justify-between group"
          :class="activeTab === tab
            ? 'bg-white dark:bg-slate-800 text-purple-600 shadow-md'
            : 'text-gray-500 hover:bg-white/50 dark:hover:bg-slate-800/50'" @click="activeTab = tab">
          {{ tab }}
          <Icon name="tabler:chevron-right" class="opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      <!-- Content Area -->
      <div
        class="md:col-span-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700 shadow-xl p-8 min-h-[500px]">

        <!-- Section Profil -->
        <div v-if="activeTab === 'profile'" class="space-y-6 animate-fade-in">
          <h2 class="text-xl font-bold border-b border-gray-200 dark:border-slate-700 pb-4">Mon Profil Public</h2>

          <div class="flex items-center gap-6">
            <div class="relative group cursor-pointer">
              <!-- Mock Avatar -->
              <img :src="user?.avatar_profile || 'https://i.pravatar.cc/150?u=99'"
                class="w-24 h-24 rounded-2xl object-cover">
              <div
                class="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold text-xs">
                Modifier
              </div>
            </div>
            <div class="w-full">
              <label class="block text-sm font-bold text-gray-500 mb-1">Nom d'affichage</label>
              <input v-model="form.name" type="text"
                class="bg-transparent border-b border-gray-300 dark:border-slate-600 font-bold text-lg focus:border-purple-500 outline-none w-full mb-4">

              <label class="block text-sm font-bold text-gray-500 mb-1">Email</label>
              <input v-model="form.email" type="email"
                class="bg-transparent border-b border-gray-300 dark:border-slate-600 font-bold text-lg focus:border-purple-500 outline-none w-full">
            </div>
          </div>

          <div class="flex justify-end pt-4">
            <button @click="saveProfile"
              class="px-6 py-2 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-700 transition-colors">
              Enregistrer
            </button>
          </div>
        </div>

        <!-- Section Notifications -->
        <div v-if="activeTab === 'notifications'" class="space-y-6 animate-fade-in">
          <h2 class="text-xl font-bold border-b border-gray-200 dark:border-slate-700 pb-4">Préférences</h2>

          <div class="flex items-center justify-between p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
            <div>
              <div class="font-bold">Notifications Email</div>
              <div class="text-xs text-gray-500">Recevoir un résumé hebdomadaire</div>
            </div>
            <button
              class="w-12 h-7 rounded-full transition-colors duration-300 relative focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              :class="notifications ? 'bg-purple-600' : 'bg-gray-200 dark:bg-slate-700'"
              @click="notifications = !notifications">
              <div
                class="absolute top-1 left-1 bg-white w-5 h-5 rounded-full shadow-md transition-transform duration-300 ease-in-out"
                :class="notifications ? 'translate-x-5' : 'translate-x-0'" />
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
