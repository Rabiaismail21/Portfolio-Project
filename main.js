const projectsArray = [
  {
    id: 1,
    projectName: "Recipe Blog",
    projectImg: "./assets/recipe page img.png",
    category: 'React'
  },
  {
    id: 2,
    projectName: "Construction Page",
    projectImg: "./assets/construction-linkedin.png",
    category: 'Responsive'
  },
  {
    id: 3,
    projectName: "Edie homepage",
    projectImg: "./assets/edie homepage.png",
    category: 'Vue'
  },
];

let projectWrap = document.querySelector('.project-article');
let allBtns = document.querySelectorAll('.btns');

window.addEventListener('DOMContentLoaded', () => {
    displayProjectsItem(projectsArray);
})

// filter Btns
allBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let category = e.target.dataset.id;
        let projectCategory = projectsArray.filter(projectItem => {
           if(projectItem.category === category){
            return projectItem;
           }
        });

        if(category === 'All'){
            displayProjectsItem(projectsArray);
        } else {
          displayProjectsItem(projectCategory);
        }

    })
})

// function to display Projects
const displayProjectsItem = (projectItems) => {
    let displayProjects = projectItems.map(item => {
 return `<div class="card w-full md:w-4/12 bg-white rounded-xl px-4 pt-4 pb-6">
        <div class="img w-full h-80 bg-neutral-950 px-2 flex justify-center py-3 rounded-xl">
          <div class="img-info mr-3">
            <h4 class="text-white text-lg">${item.projectName}</h4>
            <hr class="border-2 w-10 my-2 border-yellow-500">
            <p class="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>
          </div>
          <img src="${item.projectImg}" alt="" class="w-40 h-full object-cover">
        </div>
 
        <div class="tags flex gap-2 mt-4 mb-5">
          <p class="text-lg text-gray-600">#HTML</p>
          <p class="text-lg text-gray-600">#CSS</p>
          <p class="text-lg text-gray-600">#responsive</p>
        </div>
 
        <h2 class="text-2xl mb-4">${item.projectName}</h2>
        <p class="text-gray-500 text-lg pr-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Hic quisquam quidem ea rerum fugit repellendus nesciunt delectus at odit debitis.</p>
           <div class="btns flex mt-6 gap-2">
            <button class="border-2 border-blue-500 w-30 rounded-lg px-8 py-1 bg-blue-500 text-white">Demo</button>
            <button class="border-2 border-blue-500 w-30 rounded-lg px-8 py-1 text-blue-700">Code</button>
           </div>
      </div>`;
     })
     displayProjects  = displayProjects.join('');
     projectWrap.innerHTML = displayProjects;
}
