import React from 'react';

const About = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-20 md:pt-24 md:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hvem er vi
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Flerkulturellmuslimsk trossamfunn som organiserer mange muslimer
              med forskjellige etniske tilhørighet. Vårt formål er blant annet
              å:
            </p>
            <ul className="list-disc mt-4 pl-6 text-xl text-gray-500">
              <li>Ta vare på medlemmenes tro, moral, verdier og styrke muslimenes forhold til Islam.</li>
              <li>Fremme likeverd, fredelig sameksistens mellom forskjellige folkegrupper og samtidig vise respekt for andre menneskers religiøse ståsted.</li>
              <li>Gi riktig informasjon om Islam.</li>
              <li>Jobbe for at ungdommer utvikler positive holdninger om seg selv og om samfunnet rundt omkring dem.</li>
              <li>Motvirke ekstreme holdninger og bidra til at ungdommene er til nytte for seg selv og samfunnet.</li>
            </ul>
            <h3 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Vi kan i tillegg hjelpe med følgende:</h3>
            <ul className="list-disc mt-4 pl-6 text-xl text-gray-500">
              <li>Organisering av islamsk leksjoner, forelesninger, emnekvelder om Islam, seminarer i administrasjon, og sosiale samlinger.</li>
              <li>Hjelp med organisering av Quran-undervisning til barna, undervisningsmateriell, islamsk litteratur, rådgivning om forskjellige saker, Bønnetimeplan, organisering av begravelse uansett hvor du bor i landet.</li>
              <li>Organisering av Islamsk vigsel for de som skal gifte seg.</li>
              <li>Hjelp til organisering av helligvask, Janazabonn og islamsk begravelse ved dødsfall av nære familiemedlemmer uansett hvor du bor i landet.</li>
            </ul>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img src="hqdefault.jpg" alt="" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="/mat.jpg" alt="Bilde av samhold" className="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="/eid.jpg" alt="Eid feiring" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="/seminar1.jpg" alt="Bilde fra seminar" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="/aktivitet1.jpg" alt="Aktivitet" className="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="/together.jpg" alt="Bilde av samhold" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="/kaba.jpg" alt="Kaba i Mekkah" className="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
