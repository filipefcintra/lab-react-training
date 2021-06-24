import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture';
import Carousel from './Carousel';
import Dice from './Dice';
import NumbersTable from './NumbersTable';

// import Greetings from './Greetings';

let people = [
  {
    lastName:"Doe",
    firstName:"John",
    gender:"male",
    height:178,
    birth:"1992-07-14",
    picture:"https://randomuser.me/api/portraits/men/44.jpg"

  },

  {
    lastName:"Delores ",
    firstName:"Obrien",
    gender:"female",
    height:172,
    birth:"1988-05-11",
    picture:"https://randomuser.me/api/portraits/women/44.jpg"

  }
]

function App() {
  return (
    <div className="App">
      {people.map((peopleObject) => {
        return (
          <IdCard
            lastName={peopleObject.lastName}
            firstName={peopleObject.firstName}
            gender={peopleObject.gender}
            height={peopleObject.height}
            birth={peopleObject.birth}
            picture={peopleObject.picture}
          />
        );
      })}
      <div>
        <h1>Greetings</h1>
        <div>
          {/* <h1>Greetings</h1>
       <Greetings lang="en">Lance</Greetings>
       <Greetings lang="es">Pepe</Greetings> */}
        </div>

        <div></div>
      </div>
      <div>
        <h1> Random </h1>

        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <h1> Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <h1>Credit Card</h1>
      <div>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <LikeButton />
      <LikeButton />
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />

      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <Dice />

      <h1>Numbers Table</h1>
      <NumbersTable limit={12} />

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
