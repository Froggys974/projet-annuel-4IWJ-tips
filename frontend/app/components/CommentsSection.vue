<script setup lang="ts">
import { ref } from 'vue'
import CommentItem from '~/components/CommentItem.vue'

// MOCK DATA (Structure Arborescente)
const comments = ref([
  {
    id: 1,
    author: { name: 'Owens', avatar: 'https://i.pravatar.cc/150?u=1' },
    publishedAgo: 'il y a 4h',
    likes: 12,
    body: "Super astuce ! J'avais justement ce problème avec le centrage vertical. Par contre, est-ce que ça marche aussi sur IE11 ?",
    replies: [
      {
        id: 2,
        author: { name: 'Firstname (Auteur)', avatar: 'https://i.pravatar.cc/150?u=99' },
        publishedAgo: 'il y a 3h',
        likes: 5,
        body: "Hello Owens, non Flexbox a des soucis sur IE11. Il vaut mieux utiliser display: table pour une compatibilité 100% rétrograde, mais bon courage !",
        replies: []
      }
    ]
  },
  {
    id: 3,
    author: { name: 'SarahDev', avatar: 'https://i.pravatar.cc/150?u=3' },
    publishedAgo: 'il y a 1j',
    likes: 42,
    body: "Merci pour le partage. J'ajouterais qu'on peut aussi utiliser `place-items: center` avec Grid, c'est encore plus court !\n\nVoici un exemple :\n.container { display: grid; place-items: center; }",
    replies: []
  }
])

const newComment = ref('')
</script>

<template>
  <section class="space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100">
        Discussion <span class="text-gray-400 text-sm font-normal">({{ comments.length }})</span>
      </h2>
    </div>

    <hr class="border-purple-200 dark:border-purple-700" >

    <!-- Zone d'ajout de commentaire principal -->
    <div class="flex gap-3 mb-8">
      <div class="w-8 h-8 rounded-full bg-emerald-500 shrink-0" /> <!-- Placeholder avatar user -->
      <div class="flex-1">
        <textarea
v-model="newComment"
          class="w-full p-3 text-sm border border-gray-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm transition-all"
          rows="3" placeholder="Ajouter un commentaire constructif..." />
        <div class="flex justify-end mt-2">
          <button
            class="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-emerald-600 transition">
            Publier
          </button>
        </div>
      </div>
    </div>

    <!-- Liste des commentaires -->
    <div class="space-y-6">
      <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" />
    </div>
  </section>
</template>
