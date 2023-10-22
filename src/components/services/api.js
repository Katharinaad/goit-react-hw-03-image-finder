import axios from 'axios';

export const fetchPics = async () => {
  const url =
    'https://pixabay.com/api/?q=cat&page=1&key=38980097-7acd167c88be026b0eb497bb1&image_type=photo&orientation=horizontal&per_page=12';
  const { data } = await axios.get(url);

  console.log(data.hits);
  return data.hits;
};

export const findPictureByName = async query => {
  const url = `https://pixabay.com/api/?q=${query}&page=1&key=38980097-7acd167c88be026b0eb497bb1&image_type=photo&orientation=horizontal&per_page=12`;
  const { data } = await axios.get(url);

  console.log(data.hits);
  return data.hits;
};
