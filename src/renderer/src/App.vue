<template>
  <main class="relative h-screen of-hidden">
    <Navbar />
    <div class="h-[calc(100vh-var(--h-navbar))]">
      <RouterView />
    </div>
  </main>
</template>
