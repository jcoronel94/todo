<template>
  <modal ref="modal">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input v-model="form.title" class="form-input" type="text" />
      </div>
      <div class="form-control">
        <label class="label">Description</label>
        <textarea
          v-model="form.description"
          cols="30"
          rows="5"
          class="form-input"
        >
        </textarea>
      </div>
      <div class="app-error">
        <div class="form-error">
          {{ formError }}
        </div>
      </div>
      <button @click="createTodo" type="button" class="app-button is-primary">
        Confirm
      </button>
    </form>
  </modal>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
      formError: "",
    };
  },
  computed: {
    isFormValid() {
      if (this.form.title.length > 8 && this.form.description.length > 10) {
        return true;
      } else {
        return false;
      }
    },
    modal() {
      return this.$refs.modal;
    },
  },
  methods: {
    createTodo() {
      if (this.isFormValid) {
        this.formError=''
        this.$emit("formSubmitted", { ...this.form });
        this.modal.closeModal();
        this.resetForm();
      } else {
        this.formError =
          "Form Error ! Title needs to be longer than 8 chars" +
          "and description needs to be longe rthan 10 chars";
      }
    },
    resetForm() {
      this.form.title = "";
      this.form.description = "";
    },
  },
  components: {
    Modal,
  },
};
</script>


<style lang="scss" scoped>
.form-error {
  margin: 0 0 10px 0;
}
</style>



