import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewer from "./Viewer";
import Recommdeds from "./Recommends";
import NewDisney from "./NewDisney";
import Orignals from "./Orignals";
import Trending from "./Trending";

import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, getDocs} from "firebase/firestore";


const Home = (props) => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'movies'));

        const recommend = [];
        const newDisney = [];
        const original = [];
        const trending = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          switch (data.type) {
            case 'recommend':
              recommend.push({ id: doc.id, ...data });
              break;
            case 'newDisney':
              newDisney.push({ id: doc.id, ...data });
              break;
            case 'original':
              original.push({ id: doc.id, ...data });
              break;
            case 'trending':
              trending.push({ id: doc.id, ...data });
              break;
            default:
              break;
          }
        });

        dispatch(
          setMovies({
            recommend,
            newDisney,
            original,
            trending,
          })
        );
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    if (userName) {
      fetchMovies();
    }
  }, [userName]);

  // Your component JSX and rendering logic here
  
    return (
        <Contianer>
            <ImgSlider/>
            <Viewer/>
            <Orignals/>
            <Recommdeds/>
            <Trending/>
            <NewDisney/>
        </Contianer>
    )
};


const Contianer = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;