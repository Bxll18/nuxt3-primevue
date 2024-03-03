<script lang='ts' setup>

</script>
<template>
    <div class="min-h-screen">
        <AppTopbar/>
        <div class="fixed w-[300px] left-[20px] top-[90px] h-[calc(100vh-110px)] shadow-[10px_10px_10px_10px_rgba(0,0,0,0.3)] rounded-lg bg-white select-none z-[999]">
            <AppSidebar />
        </div>
       
        <div class="ml-[340px] min-h-screen flex flex-col justify-between pt-[90px] pr-[20px] pb-[20px]">
            <slot />    
        </div>
    </div>
   
    <!-- <div class="layout-wrapper" :class="containerClass">
        <app-topbar></app-topbar>
        <div class="layout-sidebar">
            <app-sidebar></app-sidebar>
        </div>
        <div class="layout-main-container">
            <div class="layout-main">
                <router-view></router-view>
            </div>
            <app-footer></app-footer>
        </div>
        <app-config></app-config>
        <div class="layout-mask"></div>
    </div> -->
</template>
<style lang='scss' scoped>

</style>