<template lang="pug">
  .popover.arrow-box(class='', :style='popoverStyle')
    slot
</template>
<script>
const config = require('../../../config/components/commons/popover/popover.config');
module.exports = {
  props: {
    width: {
      type: String,
      default: config.POPOVER_WIDTH
    }
  },

  data() {
    return {
      popoverStyle: {}
    }
  },

  created() {
    this.popoverStyle = {};
    this.popoverStyle.width = this.width;
  }
};
</script>
<style lang="sass">
@import '../../../../scss/variables';

.popover {
  position: absolute;
  background-color: white;
  padding: 4px;
  border-radius: 4px;
  border: solid 1px $granite;
  max-width: 100%;
  margin-top: 44px;
}

.popover-container {
  position: relative;
}

@media (max-width:768px) {
  .popover {
    right: 0;
  }
}
</style>
