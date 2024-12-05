Reveal.on('pdf-ready', () => {
  document.querySelectorAll('.pdf-page').forEach(page => {
    const sectionName = page.getElementsByTagName("section")[0].getAttribute('data-section-name');
    if(sectionName!=undefined){
      page.appendChild(document.getElementById(`header-${sectionName}`).cloneNode(true));
    }
    page.appendChild(document.getElementById("footer").cloneNode(true));
  });
  document.querySelector(".slides").querySelectorAll(".main-section").forEach((item) => {
    document.getElementById('hide').appendChild(item.querySelector(".section-header"));
  });
});
