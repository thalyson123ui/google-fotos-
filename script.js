  <script>
    const gallery = document.getElementById("gallery");

    window.onload = () => {
      const savedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
      savedPhotos.forEach(src => createPhotoCard(src));
    };

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
  </script>