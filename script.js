 <script>
    document.addEventListener("DOMContentLoaded", () => {
      const gallery = document.getElementById("gallery");
      const uploadInput = document.getElementById("uploadInput");

      const savedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
      savedPhotos.forEach(src => createPhotoCard(src));

      uploadInput.addEventListener("change", handleUpload);

      function handleUpload(event) {
        const files = Array.from(event.target.files);
        files.forEach(file => {
          const reader = new FileReader();
          reader.onload = () => {
            const src = reader.result;
            createPhotoCard(src);
            savePhoto(src);
          };
          reader.readAsDataURL(file);
        });
      }

      function createPhotoCard(src) {
        const div = document.createElement("div");
        div.className = "photo";
        div.innerHTML = `<img src="${src}" alt="foto" />`;
        gallery.prepend(div);
      }

      function savePhoto(src) {
        const savedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
        savedPhotos.unshift(src);
        localStorage.setItem("photos", JSON.stringify(savedPhotos));
      }
    });
  </script>