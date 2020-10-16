<template>
  <div>
    <div @click="isOpen = true" class="app-button">create</div>
    <div class="modal" :class="{ 'is-active': isOpen }">
      <div class="modal-content">
        <span @click="closeModal" class="close">&times;</span>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    close(isClose, preIsClose) {
      console.log(preIsClose);
      if (isClose && this.isOpen) {
        this.isOpen = false;
      }
    },
  },
  methods: {
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>


<style scoped lang="scss">
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  line-height: 8px;
  &:hover {
    cursor: pointer;
  }
}

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

