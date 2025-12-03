// Function to render a course card HTML structure
import { createCourceCard } from './utils/create-cource-data.js';
import { createFilter } from './utils/create-filter.js';

// DOM Elements
const coursesBlock = document.querySelector('.courses');
const filtersSection = document.querySelector('.filters__section');
const searchInput = document.querySelector('#search-input');

// Data
const coursesData = [
  {
    imgPath: './first-card.png',
    title: 'The Ultimate Google Ads Training Course',
    type: 'Marketing',
    price: '$100',
    lector: 'Jerome Bell',
  },
  {
    imgPath: './course-ux-design.png',
    title: 'Prduct Management Fundamentals',
    type: 'Management',
    price: '$480',
    lector: 'Marvin McKinney',
  },
  {
    imgPath: './course-recruitment.png',
    title: 'HR Management and Analytics',
    type: 'HR & Recruting',
    price: '$200',
    lector: 'Leslie Alexander Li',
  },
  {
    imgPath: './course-business-development.png',
    title: 'Brand Management & PR Communications',
    type: 'Marketing',
    price: '$530',
    lector: 'Kristin Watson',
  },
  {
    imgPath: './course-hr-analytics.png',
    title: 'Graphic Design Basic',
    type: 'Design',
    price: '$500',
    lector: 'Guy Hawkins',
  },
  {
    imgPath: './course-graphic-design.png',
    title: 'Business Development Management',
    type: 'Management',
    price: '$400',
    lector: 'Dianne Russell',
  },
  {
    imgPath: './course-protact-management.png',
    title: 'Highload Software Architecture',
    type: 'Development',
    price: '$600',
    lector: 'Brooklyn Simmons',
  },
  {
    imgPath: './course-highload.png',
    title: 'Human Resources – Selection and Recruitment',
    type: 'HR & Recruting',
    price: '$150',
    lector: 'Kathryn Murphy',
  },
  {
    imgPath: './course-pr-management.png',
    title: 'User Experience, Human-centered Design',
    type: 'Design',
    price: '$240',
    lector: 'Cody Fisher',
  },
];

// Initialize filters data
const initializeFiltersData = () => {
  const filtersMap = new Map();

  // Initialize with "All" filter
  filtersMap.set('All', {
    isActive: true,
    type: 'All',
    count: coursesData.length,
  });

  // Count courses by type
  coursesData.forEach((course) => {
    if (filtersMap.has(course.type)) {
      filtersMap.get(course.type).count += 1;
    } else {
      filtersMap.set(course.type, {
        isActive: false,
        type: course.type,
        count: 1,
      });
    }
  });

  return Array.from(filtersMap.values());
};

// Get active filters
const getActiveFilters = () => {
  const activeFilters = [];
  document
    .querySelectorAll('.filters__button--active')
    .forEach((f) => activeFilters.push(f.dataset.filter));
  return activeFilters;
};

// Filter courses based on search term and active filters
const filterCourses = (searchTerm = '', activeFilters = []) => {
  const hasSearchTerm = searchTerm.trim().length > 0;
  const isAllSelected =
    activeFilters.includes('All') || activeFilters.length === 0;

  return coursesData.filter((course) => {
    // Check search term
    const matchesSearch =
      !hasSearchTerm ||
      course.title.toLowerCase().includes(searchTerm) ||
      course.lector.toLowerCase().includes(searchTerm);

    // Check active filters
    const matchesFilter =
      isAllSelected || activeFilters.some((type) => type === course.type);

    return matchesSearch && matchesFilter;
  });
};

// Render courses
const renderCourses = (courses) => {
  coursesBlock.innerHTML = courses.map(createCourceCard).join('');
};

// Render filters
const renderFilters = (filtersData) => {
  filtersSection.innerHTML = filtersData.map(createFilter).join('');
};

// Update UI based on current state
const updateUI = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const activeFilters = getActiveFilters();
  const filteredCourses = filterCourses(searchTerm, activeFilters);
  renderCourses(filteredCourses);
};

// Initialize filters
const initializeFilters = () => {
  const filtersData = initializeFiltersData();
  renderFilters(filtersData);

  // Add event listeners to filters
  document.querySelectorAll('.filters__button').forEach((filterButton) => {
    filterButton.addEventListener('click', () => {
      const filterType = filterButton.dataset.filter;
      const allFilterButton = document.querySelector('[data-filter="All"]');

      if (filterType === 'All') {
        // Deactivate all other filters, activate "All"
        document.querySelectorAll('.filters__button').forEach((btn) => {
          btn.classList.remove('filters__button--active');
        });
        filterButton.classList.add('filters__button--active');
      } else {
        // Deactivate "All" filter, toggle current filter
        allFilterButton.classList.remove('filters__button--active');
        filterButton.classList.toggle('filters__button--active');

        // If no filters active, activate "All"
        if (
          document.querySelectorAll('.filters__button--active').length === 0
        ) {
          allFilterButton.classList.add('filters__button--active');
        }
      }

      updateUI();
    });
  });
};

// Initialize application
const init = () => {
  // Initialize and render filters
  initializeFilters();

  // Initial render of all courses
  renderCourses(coursesData);

  // Search input event listener
  searchInput.addEventListener('input', updateUI);

  // Load more button functionality (if needed)
  const loadMoreButton = document.querySelector('.load-more__button');
  if (loadMoreButton) {
    // Add load more functionality here
  }
};

// Start the application
document.addEventListener('DOMContentLoaded', init);
