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
    localStorage.setItem("existingDocumentId", this.$route.params.id);
    fetch(
      "https://23-januar.api.cbe.uber.space/documents/" + this.$route.params.id
    )
      .then((response) => response.json())
      .then((cvDocumentData) => (this.cvData = cvDocumentData));
  },
};
</script>
