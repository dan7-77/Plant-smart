  function showSection(sectionId) {
      // Oculta todas as seções
      document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
      });
      
      // Mostra apenas a seção selecionada
      const section = document.getElementById(sectionId);
      if (section) {
        section.style.display = 'block';
      }
    }


    function showSection(sectionId) {
      document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
      });
      document.getElementById(sectionId).style.display = 'block';
    }









    