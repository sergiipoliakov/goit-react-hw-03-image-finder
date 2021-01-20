import axios from 'axios';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  const KEYAPI = '19156782-f4e949a45fa5f59b2c0db0877';
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEYAPI}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchImagesWithQuery,
};
