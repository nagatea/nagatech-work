<template>
  <div class="md-layout md-gutter item-contents">
    <div v-for="data in datas" :key="data.id" class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
      <md-card>
        <md-card-media v-if="data.img_path">
          <img :src="data.img_path" class="works-img">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{ data.title }}</div>
        </md-card-header>
        <md-card-content>
          <div>
            {{ data.description }}
          </div>
          <hr>
          <div v-if="data.links">
            <div v-for="link in data.links" :key="link.id">
              <li>
                <md-icon>play_arrow</md-icon>
                <a :href="link.link_url" target="_blank">{{ link.link_title }}</a>
              </li>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class WorkCard extends Vue {
  @Prop(Object) readonly datas!: Object
}
</script>

<style scoped>
li {
  list-style: none;
}
.md-layout-item {
  padding-top: 10px;
  padding-bottom: 10px;
}
.works-img {
  height: 180px;
  object-fit: cover;
}
</style>
