/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';
import Cards from './Card';
import Tabs from './Tabs';
import img from '../assets/see.png';
import CarPartsForm from './CarPartsForm'
const Main = styled.div`

  height: 100%;
  width: 100%;
  position: relative;
`;


const NavBar = styled.nav`
  color: #CA8A71;
  font-family: cursive;
  padding: 0;
  display: flex;
  justify-content:center;
  font-size: 1.5rem;
  height: 90px;
 background-image: url(${img}); // Correct usage of the imported image
  background-repeat: repeat; /* Ensures the pattern repeats */
  background-attachment: fixed;
`;

const P = styled.span`
     background:transparent;
  color: #004358;
  font-family: "Dosis", sans-serif;
  font-size: 60px;
  font-weight: bold;
  margin: 0;
  width: fit-content;
  display: flex;
  text-align:center;
`;

const Sticky = styled.div`
     background-image: url(${img}); // Correct usage of the imported image
  background-repeat: repeat; /* Ensures the pattern repeats */
  background-attachment: fixed;
  position: sticky;
  top: 0;
  background-color: white;
`;

const S = styled.span`
  background:transparent;
  font-size: 40px;
  color:#004358;
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
  padding-left: 10px;
  font-weight: lighter;
  font-family: "East Sea Dokdo", sans-serif;
`;

const Dis = styled.p`
     background-image: url(${img}); // Correct usage of the imported image
  background-repeat: repeat; /* Ensures the pattern repeats */
  background-attachment: fixed;
  padding: 0 10px 0 10px;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: #6a6a6a;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  border: none;
  border-radius: 19px;
  padding: 15px;
  box-shadow: 10px 10px 20px rgba(0.1, 0.1, 0.1, 0.15);
  background-color:white;
`;

const SearchBar = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  padding-left: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Main>
      <Sticky>
        <NavBar>
          <P>Liyu  </P>
          <S> Auto spare parts</S>
        </NavBar>
        <Dis>See your favorite spare!</Dis>
        <Search>
          <FaSearch />
          <SearchBar
            placeholder="Search spare"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Search>
        <div className="App">
      <button onClick={() => setShowForm(true)} style={{ padding:"7px", marginLeft:"10px", borderRadius:"5px", border:"none",  color:"white " ,backgroundColor:"#808b96 ",fontFamily: '"Playfair Display", serif'}}>Open Spare Parts Form</button>
      {showForm && <CarPartsForm showForm={setShowForm} />}
    </div>
        <Tabs />
      </Sticky>
   
      <Cards searchQuery={searchQuery} />
     
    </Main>
  );
};

export default Home;
