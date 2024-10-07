document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
  
      // Close other accordion sections
      document.querySelectorAll('.accordion-content').forEach((item) => {
        if (item !== content) {
          item.style.maxHeight = null;
        }
      });
  
      // Toggle current section
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });