import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const Container = styled.div`
  margin: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

const HeroTitle = styled.h2`
  color: #4361ee;
  margin-bottom: 1rem;
  font-size: 2.44rem;
`;

const HeroGenre = styled.h3`
  color: #b5179e;
  margin-bottom: 1rem;
  font-size: 1.59rem;
`;

const HeroDescription = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
`;

const HeroButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #4361ee;
  color: #fff;
  cursor: pointer;
`;

const HeroRight = styled.div`
  @media (min-width: 992px) {
    flex-basis: 60%;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
`;

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const url = 'https://www.omdbapi.com/?apikey=cf4d6b5e&i=tt2975590&plot=full';
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, []);

  return (
    <Container>
      <HeroSection>
        <HeroLeft>
          <HeroTitle>{movie.Title}</HeroTitle>
          <HeroGenre>Genre: {movie.Genre}</HeroGenre>
          <HeroDescription>{movie.Plot}</HeroDescription>
          {/* <HeroButton>Watch</HeroButton> */}
          <Button size="md" variant="primary">
       Watch
      </Button>
        </HeroLeft>
        <HeroRight>
          <HeroImage src={movie.Poster} alt={movie.Title} />
        </HeroRight>
      </HeroSection>
    </Container>
  );
};

export default Hero;
