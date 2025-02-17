<template>
  <main class="font-sans h-screen relative of-hidden">
    <Navbar />
    <div class="h-[calc(100vh-var(--h-navbar))]">
      <RouterView />
    </div>

    <Suspense>
      <Updater />
    </Suspense>
  </main>
</template>
