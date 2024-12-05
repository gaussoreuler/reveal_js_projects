const genSectionHeadersAndToc = () => {
  const mainSections = document.querySelectorAll('.main-section');
  let mainSectionNameList = [];
  mainSections.forEach(section => mainSectionNameList.push(section.getAttribute('data-section-name')));

  for(let i=0;i<mainSections.length;i++){
    genHeader(mainSections[i], mainSectionNameList[i]);
    genToc(mainSections[i], mainSectionNameList[i], mainSectionNameList);
    genTocCoverpage(mainSectionNameList[i]);
  }
}

const genHeader = (section, mainSectionName) =>{
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', `header-${mainSectionName}`)
  wrapper.classList.add('stripe-wrapper', 'stripe-top-left', 'section-header');
  const stripe = document.createElement('div');
  stripe.classList.add('stripe', 'stripe-tall', 'royal-blue');
  const sectionHeader = document.createElement('h3');
  sectionHeader.classList.add('header');
  sectionHeader.innerText = mainSectionName;
  stripe.appendChild(sectionHeader);
  wrapper.appendChild(stripe);
  const stripeEnd = document.createElement('div');
  stripeEnd.classList.add('stripe-tall', 'stripe-end', 'royal-blue-svg');
  stripeEnd.innerHTML = '<svg viewBox="0 0 5 10" height="100%" xmlns="http://www.w3.org/2000/svg"><path d="M 0,10 C 2.5,10 2.5,7.5 2.5,7.5 v -5 C 2.5,2.5 2.5,0.0 5,0 H 0 Z" style="" /></svg>'
  wrapper.appendChild(stripeEnd);
  section.appendChild(wrapper);
}

const genToc = (section, mainSectionName, mainSectionNameList) =>{
  const tocOverviewSlide = section.querySelector('.toc-overview');
  const wrapper = document.createElement('div');
  wrapper.classList.add('toc', 'white-smoke');
  const orderedList = document.createElement('ol');
  for(let i=0;i<mainSectionNameList.length;i++){
    const tocItem = document.createElement('li');
    if(mainSectionNameList[i]==mainSectionName){
      tocItem.classList.add('color-red');
    }
    tocItem.innerText = mainSectionNameList[i];
    orderedList.appendChild(tocItem);
  }
  wrapper.appendChild(orderedList);
  tocOverviewSlide.appendChild(wrapper);
}

const genTocCoverpage = (mainSectionName) =>{
  // tocCoverpage = document.getElementById('tocCoverpage');
  const item = document.createElement('li');
  item.innerText = mainSectionName
  document.getElementById('tocCoverpage').appendChild(item);
}

genSectionHeadersAndToc();
