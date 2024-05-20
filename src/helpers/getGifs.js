export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=WVx0lkk6b6JoJ3H4Bpe3BGWg6ZIfrbxn&q=${category}&limit=2`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    img: img.images.downsized_medium.url,
  }));
  return gifs;
};
