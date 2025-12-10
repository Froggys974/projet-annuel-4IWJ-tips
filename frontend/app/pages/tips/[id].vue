<script setup lang="ts">
import ProfilPicture from '~/components/ProfilPicture.vue'
import CommentsSection from '~/components/CommentsSection.vue' // Assure-toi d'avoir créé ce composant
const route = useRoute()
const tipId = route.params.id

// Fetch Tip Data
const { data: tip, error } = await useFetch<Tip>(`/api/tips/${tipId}`)

if (error.value || !tip.value) {
  throw createError({ statusCode: 404, statusMessage: 'Tip introuvable', fatal: true })
}

useSeoMeta({
  title: () => tip.value?.title,
  description: () => tip.value?.description?.substring(0, 160),
  ogTitle: () => `Astuce : ${tip.value?.title}`,
  ogDescription: () => `Découvrez ce tips de ${tip.value?.author?.name} sur AideFlash !`,
})
</script>

<template>
  <div class="max-w-6xl mx-auto py-6 md:py-10 space-y-12 px-4 md:px-0">

    <header>
      <h1 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 leading-tight">
        {{ tip.title }}
      </h1>

      <div class="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-6">
        <div class="flex items-center gap-1">
          <Icon name="tabler:clock" class="w-3.5 h-3.5" />
          <span>Publié {{ tip.publishedAgo }}</span>
        </div>
        <div class="hidden md:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
        <div class="flex items-center gap-1">
          <Icon name="tabler:edit" class="w-3.5 h-3.5" />
          <span>Mis à jour {{ tip.updatedAgo }}</span>
        </div>
        <div class="hidden md:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
        <div class="flex items-center gap-1">
          <Icon name="tabler:eye" class="w-3.5 h-3.5" />
          <span>{{ tip.views }} vues</span>
        </div>
      </div>

      <hr class="border-purple-100 dark:border-purple-900/50">
    </header>

    <!-- CONTENU PRINCIPAL (Layout 2 colonnes) -->
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

      <!-- COLONNE GAUCHE : Contenu du Tip -->
      <article class="flex-1 w-full min-w-0">
        <!-- Carte Contenu -->
        <div
          class="rounded-3xl bg-linear-to-br from-white/50 to-purple-50/50 dark:from-slate-800 dark:to-slate-900/50 border border-purple-100/50 dark:border-slate-700/50 shadow-lg p-6 md:p-8">

          <!-- Description (Supporte le Markdown via une lib si besoin, ici texte brut pour l'exemple) -->
          <div
            class="prose dark:prose-invert max-w-none mb-8 text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
            {{ tip.description }}
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-8">
            <span v-for="tag in tip.tags" :key="tag"
              class="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-700 border border-purple-100 dark:border-slate-600 text-xs font-bold text-purple-600 dark:text-purple-300 shadow-sm uppercase tracking-wide">
              #{{ tag }}
            </span>
          </div>

          <!-- Difficulté -->
          <div
            class="flex items-center justify-between p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-purple-50 dark:border-slate-700">
            <span class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Niveau de
              difficulté</span>
            <div class="flex items-center gap-1" title="Difficulté 1/5">
              <Icon v-for="i in 5" :key="i" name="tabler:bolt-filled" class="w-5 h-5"
                :class="i <= tip.difficulty ? 'text-green-400 drop-shadow-sm' : 'text-gray-200 dark:text-slate-700'" />
            </div>
          </div>

        </div>
      </article>

      <!-- COLONNE DROITE : Auteur & Actions (Sticky) -->
      <aside class="w-full lg:w-72 flex flex-col gap-6 lg:sticky lg:top-24">

        <!-- Carte Auteur -->
        <div
          class="rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-md p-5 flex flex-col items-center text-center">
          <div class="relative mb-3">
            <ProfilPicture :src="tip.author.avatar" class="mb-4" />
            <div
              class="absolute -bottom-2 -right-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-white dark:border-slate-800">
              LVL {{ Math.floor(tip.author.xp / 100) }}
            </div>
          </div>

          <h3 class="font-bold text-slate-800 dark:text-white text-lg">{{ tip.author.name }}</h3>
          <p class="text-xs text-purple-500 font-medium uppercase tracking-wide mb-1">{{ tip.author.role }}</p>
          <p class="text-xs text-gray-400">{{ tip.author.xp.toLocaleString() }} XP totaux</p>

          <button
            class="mt-4 w-full py-2 rounded-xl border border-gray-200 dark:border-slate-600 text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
            Voir le profil
          </button>
        </div>

        <!-- Boutons Actions -->
        <div class="grid grid-cols-1 gap-3">
          <button
            class="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 transition-all transform active:scale-95 font-bold text-sm">
            <Icon name="tabler:bulb" class="w-5 h-5" />
            Proposer une amélioration
          </button>

          <button
            class="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 text-gray-600 dark:text-gray-300 transition-colors font-medium text-sm">
            <Icon name="tabler:share" class="w-5 h-5" />
            Partager
          </button>
        </div>

      </aside>

    </div>

    <CommentsSection />

  </div>
</template>
