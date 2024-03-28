import './App.css';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>Ranked</h1>
      </header>
      <main className='container'>
        <Content album='good kid, m.A.A.d city' artist='Kendrick Lamar' description='Good Kid, M.A.A.D City (stylized as good kid, m.A.A.d city) is the second studio album by the American rapper Kendrick Lamar. It was released on October 22, 2012, by Top Dawg Entertainment, Aftermath Entertainment and Interscope Records. The album features guest appearances from Drake, Dr. Dre, Jay Rock, Anna Wise and MC Eiht. It is Lamars first major label album, after his independently released first album Section.80 in 2011 and his signing to Aftermath and Interscope the following year.' image='kendrick' />
        <Content album='2014 Forest Hills Drive' artist='J. Cole' description='2014 Forest Hills Drive is the third studio album by American rapper J. Cole. It was released on December 9, 2014, by ByStorm Entertainment, Columbia Records, Dreamville Records and Roc Nation. 2014 Forest Hills Drive received generally positive reviews from critics who admired its ambitious concept, production and lyrics. The album debuted at number one on the US Billboard 200, selling 353,000 copies in its first week. As of September 2015, the album has sold one million copies in the United States.' image='jcole' />
        <Content album='Nothing Was The Same' artist='Drake' description='Nothing Was the Same is the third studio album by Canadian rapper Drake. It was released on September 24, 2013, through OVO Sound, Young Money Entertainment, Cash Money Records, and Republic Records. Work on the record began in 2012 and continued through 2013. As an executive producer, Drake enlisted collaborators such as 2 Chainz, Big Sean, Majid Jordan, Jay-Z, Jhené Aiko and Sampha for guest appearances on the album. The albums production was primarily handled by 40 and other OVO Sound producers; including Boi-1da, Mike Zombie, Nineteen85 and Detail.' image='drake' />
        <Content album='My Beautiful Dark Twisted Fantasy' artist='Kanye West' description='My Beautiful Dark Twisted Fantasy is the fifth studio album by the American rapper and producer Kanye West. It was released by Def Jam Recordings and Roc-A-Fella Records on November 22, 2010. Retreating to a self-imposed exile in Hawaii after a period of controversy in 2009, following his interruption of Taylor Swift at the MTV Video Music Awards (VMAs), he recorded the album at Honolulus Avex Recording Studio in a communal environment involving numerous musicians. Additional recording sessions took place at Glenwood Place Studios in Burbank, California, along with the New York City studios Electric Lady and Platinum Sound.' image='kanye' />
      </main>
    </div>
  );
}

export default App;