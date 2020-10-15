<template>
  <div class="modal" :class="{'is-active':isActive}">
    <div class="modal-content">Modal</div>
  </div>
</template>

<script>
export default {
  data() {
    return{
        isActive: false
    }
  }
};
</script>


<style scoped lang="scss">
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  &-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    width: 80%;
    border: 1px solid #888;
  }

  &.is-active {
    display: block;
  }
}
</style>

