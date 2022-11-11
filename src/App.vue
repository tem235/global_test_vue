<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/product">Product</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>

  <AppLayout>
    <router-view />
  </AppLayout>
</template>
  

