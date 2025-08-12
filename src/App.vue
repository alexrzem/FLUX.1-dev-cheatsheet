<template>
    <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-5xl">
            <div class="mb-4">
                <h1 class="text-center">FLUX.1 [dev] Cheat Sheet</h1>
                <p>
                    A collection of what FLUX.1 [pro] generates when prompted with "Style of [artist name]" for 906 artists. Huge thanks to fluxpro.art for generation resources,
                    and Github user SupaGruen for the basis of this project. Follow this project on Github.
                </p>
                <p>Prompts were run with 25 steps, guidance 3, and seed 1.</p>
                <p>Updates, additions, refinement, and analysis to come.</p>
            </div>

            <div>
                <h2 class="text-center">Artists</h2>
            </div>

            <div li v-for="artist in artistsStore.artists" :key="artist.id" class="card">
                <div class="px-2 py-1 bg-zinc-500 flex">
                    <div class="flex-grow">{{ artist.name }}</div>
                    <div class="flex-shrink-0">{{ artist.prefix }}</div>
                </div>
                <div class="p-2">
                    <div class="grid grid-cols-4 gap-x-2 gap-y-4" >
                        <div class="text-zinc-800 bg-zinc-300 rounded-lg p-2 h-48">
                            <img src="http://localhost:5173/assets/artists/ossip_zadkine_2.jpg" />
                        </div>
                        <div class="text-zinc-800 bg-zinc-300 rounded-lg p-2 h-48">
                            <img :src="'/assets/artists/' + artist.prefix + '_1.jpg'" />
                        </div>
                        <div class="text-zinc-800 bg-zinc-300 rounded-lg p-2 h-48">
                            <img :src="'/assets/artists/' + artist.prefix + '_2.jpg'" />
                        </div>
                        <div class="text-zinc-800 bg-zinc-300 rounded-lg p-2 h-48">
                            <img :src="'/assets/artists/' + artist.prefix + '_3.jpg'" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useArtistsStore } from './store';

const artistsStore = useArtistsStore();
</script>
