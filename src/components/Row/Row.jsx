import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import Movie from '../Movie/Movie';

function Row({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);

  const sliderLeft = () => {
    document.getElementById('slider' + rowID).scrollLeft -= 500;
  };

  const sliderRight = () => {
    document.getElementById('slider' + rowID).scrollLeft += 500;
  };

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className=" relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={'slider' + rowID}
          className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth
          scrollbar-hide relative
          "
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="bg-white rounded-full right-0  absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default Row;

Row.propTypes = {
  title: propTypes.string.isRequired,
  fetchURL: propTypes.string.isRequired,
  rowID: propTypes.string.isRequired,
};
