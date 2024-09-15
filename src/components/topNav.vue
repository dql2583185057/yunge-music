<script setup type="ts">
import Button from './ui/button/Button.vue';
import { ChevronLeft } from 'lucide-vue-next'
</script>

<template>
    <div class="w-[calc(100%-240px)] h-[80px] fixed right-0 border border-cyan-800">
        <div class="ml-10 mt-5">
            <Button variant="outline" size="icon">
                <ChevronLeft class="w-8 h-8" />
            </Button>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>