<template>
  <ul class="pagination pagination-sm mb-0 justify-content-end">
    <li
      v-for="(page, index) in getPages"
      :key="index"
      class="page-item"
      :class="[{ active: page.active }, { disabled: page.page == null }]"
    >
      <router-link
        class="page-link"
        :to="{
          name: 'index-empleado',
          query: { page: page.page ? page.page : 1 },
        }"
        >{{ page.label }}</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "LaravelPaginacion",
  props: {
    pages: Array,
  },
  computed: {
    getPages() {
      return this.pagination(this.pages);
    },
  },
  methods: {
    pagination(pages) {
      let pageItems = [];
      pages.forEach((page, index) => {
        pageItems.push({
          page: page.url ? this.urlSearchParams(page.url).get("page") : null,
          label:
            index == 0 ? "«" : index == pages.length - 1 ? "»" : page.label,
          active: page.active,
        });
      });
      return pageItems;
    },
    urlSearchParams(url) {
      return new URLSearchParams(new URL(url).search);
    },
  },
};
</script>