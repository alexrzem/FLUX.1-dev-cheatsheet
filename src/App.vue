<template>
    <div class="flex relative lg:static bg-surface-200 dark:bg-surface-950 h-full">
        <AppSidebar />
        <div class="overflow-auto flex-1 flex flex-col gap-8 transition-all pl-2 pr-2">
            <Splitter class="h-full" :gutterSize="4">
                <SplitterPanel class="pr-2" :size="20" :minSize="10">
                    <AppControls />
                </SplitterPanel>
                <SplitterPanel class="flex items-center justify-center" :size="80" :minSize="10">Panel 2

                </SplitterPanel>
            </Splitter>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import { useLayout } from "./composables/useLayout";

import AppSidebar from './components/AppSidebar.vue';
import AppControls from './components/AppControls.vue';
import StatsWidget from './components/dashboard/StatsWidget.vue';
import SalesTrendWidget from './components/dashboard/SalesTrendWidget.vue';
import RecentActivityWidget from './components/dashboard/RecentActivityWidget.vue';
import ProductOverviewWidget from './components/dashboard/ProductOverviewWidget.vue';

const { isDarkMode, toggleDarkMode } = useLayout();

const checked1 = ref(false);
const selectedStyle = ref();

const promptPositive = ref('');
const promptNegative = ref('');

const styles = ref([
    { name: 'Home', code: 'pi pi-home' },
    { name: 'Bookmark', code: 'pi pi-bookmark' },
    { name: 'Users', code: 'pi pi-users' },
    { name: 'Comments', code: 'pi pi-comments' },
    { name: 'Calendar', code: 'pi pi-calendar' },
]);
</script>
