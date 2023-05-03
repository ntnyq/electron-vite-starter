<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <Component :is="Component"></Component>
    </KeepAlive>
  </RouterView>
</template>
