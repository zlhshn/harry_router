import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div>
        <div className="about__bio-image">
          <h2>BIO</h2>
          <p>
            Harry Potter is a series of seven fantasy novels written by British
            author J. K. Rowling. The novels chronicle the lives of a young
            wizard, Harry Potter, and his friends Hermione Granger and Ron
            Weasley, all of whom are students at Hogwarts School of Witchcraft
            and Wizardry. The main story arc concerns Harry's conflict with Lord
            Voldemort, a dark wizard who intends to become immortal, overthrow
            the wizard governing body known as the Ministry of Magic, and
            subjugate all wizards and Muggles (non-magical people)..
          </p>
        </div>

        {/* <!-- ABOUT MAIN --> */}

        <main className="about">
          <div className="about__container">
            <div className="about__job">
              <h2 className="text-secondary">2011 - 2010</h2>
              <h3>Harry Potter and the Deathly Hallows</h3>
              <h6>Director- David Yates</h6>
              <p>
                News arrives during the wedding that the Ministry has fallen and
                Scrimgeour is dead. Death Eaters attack and Harry, Ron, and
                Hermione escape to Number 12, Grimmauld Place. While there, Ron
                realizes that Sirius' brother, Regulus Black, is the R.A.B. who
                stole Salazar Slytherin's locket from Voldemort. Local thief
                Mundungus Fletcher later sold it to Dolores Umbridge.
              </p>
            </div>
            <div className="about__job">
              <h2 className="text-secondary">2009</h2>
              <h3>Harry Potter and the Half-Blood Prince</h3>
              <h6>Director- David Yates</h6>
              <p>
                Lord Voldemort tightens his grip on the wizarding and Muggle
                worlds: his Death Eaters kidnap Mr Ollivander and destroy
                London's Millennium Bridge. With Lucius Malfoy incarcerated in
                Azkaban, Voldemort chooses his son, Draco Malfoy, to carry out a
                secret mission at Hogwarts. Draco's mother, Narcissa, and aunt
                Bellatrix Lestrange seek out Severus Snape, who gains their
                confidence by claiming he is a mole within the Order of the
                Phoenix.
              </p>
            </div>
            <div className="about__job">
              <h2 className="text-secondary">2007</h2>
              <h3>Director- David Yates</h3>
              <h6>Harry Potter and the Order of the Phoenix</h6>
              <p>
                While staying at the Dursleys', Harry Potter and Dudley are
                attacked by Dementors. Harry repels them using a Patronus spell.
                The Ministry of Magic detects the underaged Harry using magic
                and expels him from Hogwarts, though he is later exonerated.
              </p>
            </div>
            <div className="about__job">
              <h2 className="text-secondary">2005</h2>
              <h3>Director- Mike Newell</h3>
              <h6>Harry Potter and the Goblet of Fire</h6>
              <p>
                Harry Potter has a nightmare in which a Muggle caretaker is
                murdered after overhearing a plot by Lord Voldemort, Peter
                Pettigrew and another man whom Harry does not recognise. Harry,
                along with the Weasleys, Hermione, Cedric Diggory and his father
                Amos attend the Quidditch World Cup. Death Eaters attack the
                tournament and the man from Harry's nightmare casts the Dark
                Mark.
              </p>
            </div>
            <div className="about__job">
              <h2 className="text-secondary">2004</h2>
              <h3>Director- Alfonso Cuarón</h3>
              <h6>Harry Potter and the Order of the Phoenix</h6>
              <p>
                Harry Potter spends another dissatisfying summer with the
                Dursleys. On his thirteenth birthday, Vernon's visiting sister
                Marge viciously insults Harry and his parents, and an angry
                Harry causes her to inflate and float away.
              </p>
            </div>
            <div className="about__job">
              <h2 className="text-secondary">2002</h2>
              <h3>Director- Chris Columbus</h3>
              <h6>Harry Potter and the Chamber of Secrets</h6>
              <p>
                Spending the summer with the Dursleys, Harry Potter meets Dobby,
                a house-elf who warns him not to return to Hogwarts or danger
                will strike. When Harry refuses, Dobby sabotages an important
                dinner for the Dursleys, who lock up Harry to prevent his
                departure
              </p>
            </div>
            <div className="about__job">
              <h2 className="text-secondary">2001</h2>
              <h3>Director- Chris Columbus</h3>
              <h6>Harry Potter and the Philosopher's Stone</h6>
              <p>
              Late one night, Albus Dumbledore and Minerva McGonagall, professors at Hogwarts School of Witchcraft and Wizardry, along with groundskeeper Rubeus Hagrid, deliver an orphaned infant wizard named Harry Potter to his Muggle aunt and uncle, Petunia and Vernon Dursley, his only living relatives.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
