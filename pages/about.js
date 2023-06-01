import React from 'react';

const about = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
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
            <p className="mt-4 text-xl text-gray-500">
              1. Ta vare på medlemmenes tro, moral, verdier og styrke muslimenes
              forhold til Islam.{' '}
            </p>
            <p className="mt-4 text-xl text-gray-500">
              2. Fremme likeverd, fredelig sameksistens mellom forskjellige
              folkegrupper og samtidig vise respekt for andre menneskers
              religiøse ståsted.{' '}
            </p>
            <p className="mt-4 text-xl text-gray-500">
              3. Gi riktig informasjon om Islam{' '}
            </p>
            <p className="mt-4 text-xl text-gray-500">
              4. Jobbe for at ungdommer utvikler positive holdninger om seg selv
              og om samfunnet rundt omkrig dem. Vi vil hjelpe ungdommene slik at
              de får en sunn oppvekst som er langt fra kriminalitet, gjeng
              miljøer, lovbrudd og narkotika.{' '}
            </p>
            <p className="mt-4 text-xl text-gray-500">
              5. Vi motvirker ekstreme holdninger og bidrar slik at ungdommene
              skal være til nytte for seg selv og ellers for samfunnet.{' '}
            </p>
            <p className="mt-4 text-xl text-black-500-bold ">
              Vi kan i tillegg hjelpe med følgende:
            </p>
            <p className="mt-4 text-xl text-gray-500">
              Vi organiserer islamsk leksjoner, forelesninger, emne kvelder om
              Islam, seminarer i administrasjon, og sosiale samlinger.{' '}
            </p>
            <p className="mt-4 text-xl text-gray-500">
              Bor du lang vekke fra Stavanger Vi kan hjelpe med organisering av
              Quran undervisning til barna, undervisnings materiell, islamsk
              litteratur, rådgivning om forskjellige saker, Bønnetimeplan,
              organisering av begravelse uansett hvor du bor I landet. Vi kan
              også organisere Islamsk vigsel for de som skal gifte seg. Ved
              dødsfall av nære familie medlemmer kan vi UANSETT hvor du bor i
              landet, hjelpe til med organisering av hellig- vask, Janazabonn og
              islamsk begravelse.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="src\assets\Islamske.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="src\assets\Islamske.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="src\assets\Islamske.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="src\assets\Islamske.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="src\assets\Islamske.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="src\assets\Islamske.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="src\assets\Islamske.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
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

export default about;
