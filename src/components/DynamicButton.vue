<template></template>
<script>
import { withDirectives, h, resolveDirective } from 'vue';
import Button from 'primevue/button';

export default {
  name: 'DynamicButton',
  props: {
    msg: String,
  },
  components: {
    Button,
  },

  setup() {
    const tooltip = resolveDirective('tooltip');

    return () => {
      const vnode = withDirectives(
        h(Button, { label: "I'am dynamic button, hover me too" }),
        [[tooltip, 'tooltip directive with render function']]
      );

      return vnode;
    };
  },
};
</script>
