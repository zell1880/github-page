<template>
  <div>
    <b-navbar  toggleable="sm" type="dark" variant="dark" fixed="bottom" >
      <b-navbar-brand>
      Just A Empty Portfolio
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/about" class="px-2"><b-icon-person/> About </b-nav-item>
        <b-nav-item to="/timeline" class="px-2"><b-icon-clock/> Timeline </b-nav-item>
        <b-nav-item to="/skills"><b-icon-tools/> Skills </b-nav-item>
        <b-nav-item to="/todo" class="px-2"><b-icon-card-checklist/> ToDo </b-nav-item>
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>

</style>