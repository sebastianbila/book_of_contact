<template>
  <div class="navbar">
    <a href="#" class="navbar__item">List of contacts </a>
    <a href="#" class="navbar__item">Contact information </a>
  </div>
</template>

<style scoped lang="scss">
  .navbar {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    background: white;
    z-index: 10;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      color: #000;
      letter-spacing: 0.1rem;
      transition: all 0.5s ease;
      font-size: 0.8rem;
      font-family: 'Montserrat', sans-serif;

      &:hover {
        color: white;
        background: rgba(102, 177, 241, 0.8);
        transition: all 0.5s ease;
      }
    }
  }
</style>
