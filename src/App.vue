<template>
  <div
    flex="~ col"
    min-h-screen
    items-center
    justify-center
  >
    <h1
      text="center 5xl red"
      mb-10
    >
      Hello world
    </h1>
    <button
      flex="~"
      border="~ blue-600/30"
      bg="blue-600/90"
      class="px-8 py-3 text-white sm:mb-0 btn hover:(border-blue-800 bg-blue-800)"
      type="button"
      role="button"
      gap-2
      rounded-3xl
    >
      <div class="i-carbon-logo-github h-6 w-6"></div>
      Primary
    </button>
  </div>
</template>
