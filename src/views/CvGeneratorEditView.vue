<template>
  <h1>Edit CV</h1>
  <pre>{{ cvData }}</pre>
</template>

<script>
export default {
  data() {
    return {
      cvData: {},
    };
  },
  created() {
    fetch(
      "https://23-januar.api.cbe.uber.space/documents/" + this.$route.params.id
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((cvDocumentData) => {
        this.cvData = cvDocumentData;
        localStorage.setItem("existingDocumentId", cvDocumentData.id);
      });
  },
};
</script>
