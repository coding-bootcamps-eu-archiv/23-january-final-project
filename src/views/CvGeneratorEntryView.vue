<template>
  <p v-if="isLoading && !existingDocumentId">Prepare your Document...</p>
  <template v-if="!isLoading && existingDocumentId">
    <p>
      Seems like you already used our generator, would you like to edit your
      last document or do you like to create a new cv?
    </p>
    <button @click="createNewApiEntry">Create new CV</button>
    <button @click="goToEditPage(existingDocumentId)">
      Continue with previous
    </button>
  </template>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      existingDocumentId: "",
    };
  },
  methods: {
    createNewApiEntry() {
      const createnewEntryApiCall = fetch(
        "https://23-januar.api.cbe.uber.space/documents",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      createnewEntryApiCall
        .then((response) => {
          if (!response.ok) {
            throw new Error("Something went wrong");
          }

          return response.json();
        })
        .then((newCvApiEntry) => this.goToEditPage(newCvApiEntry.id))
        .catch((error) => {
          console.error(error.msg);
        });
    },
    goToEditPage(id) {
      this.$router.push({
        name: "document-edit",
        params: { id },
      });
    },
  },
  created() {
    if (localStorage.getItem("existingDocumentId")) {
      this.existingDocumentId = localStorage.getItem("existingDocumentId");
      this.isLoading = false;
    } else {
      this.createNewApiEntry();
    }
  },
};
</script>
