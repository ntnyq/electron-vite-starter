<template>
  <main class="relative h-screen of-hidden font-sans">
    <Navbar />
    <div class="h-[calc(100vh-var(--h-navbar))]">
      <RouterView />
    </div>

    <Suspense>
      <Updater />
    </Suspense>
  </main>
</template>
