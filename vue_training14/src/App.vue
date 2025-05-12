<template>
  <div>
    <h1>Router 総復習</h1>
    <nav>
      <RouterLink to="/">ホーム</RouterLink> |
      <RouterLink to="/users">ユーザーリスト</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
