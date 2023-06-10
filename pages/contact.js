const contact = () => {
  return (
    <>
      <div className="text-center pt-10">
        <h1 class="font-bold text-4xl md:text-4xl lg:text-5xl pb-4">Lurer du på noe...</h1>
        <p class="text-lg md:text-xl lg:text-2xl">
          Send oss en mail så tar vi raskt kontakt
        </p>
        <p class="text-sm md:text-base lg:text-lg">
          <i>
            psstr... husk å bruke subjekt slik at rett avdeling kan svare så
            raskt så mulig
          </i>
        </p>
      </div>
      <div className="flex w-full my-20 justify-center items-center">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:items-stretch md:space-x-12 bg-blue-500 w-full max-w-4xl p-8 sm:px-12 sm:py-10 rounded-xl shadow-lg text-white overflow-hidden">
          <div className="md:py-4 flex-grow flex flex-col space-y-8 md:justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Kontakt Oss</h1>
              <p className="pt-2 text-gray-100 text-sm">
                Send oss en mail så svarer vi så fort som mulig
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="call"
                  className="text-gray-300 text-xl"
                ></ion-icon>
                <span> 400 54 496</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="mail"
                  className="text-gray-300 text-xl"
                ></ion-icon>
                <span> info@iosenter.com </span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="location"
                  className="text-gray-300 text-xl"
                ></ion-icon>
                <span> Bergsagelveien 9, 4016 Stavanger </span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="https://www.facebook.com/pages/category/religious-organization/Islamsk-Oppl%C3%A6ringssenter-Masjid-Al-Noor-565284760294957/">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </div>
          </div>
          <div>
            <div className="w-full h-full bg-white p-8 text-gray-600 rounded-xl shadow-lg">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="" className="text-sm">
                    Ditt navn
                  </label>
                  <input
                    type="text"
                    placeholder="Ditt navn"
                    className="ring-1 ring-blue-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="ring-1 ring-blue-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Subjekt
                  </label>
                  <input
                    type="text"
                    placeholder="Subjekt"
                    className="ring-1 ring-blue-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Din henvendelse
                  </label>
                  <textarea
                    placeholder="Din henvendelse"
                    rows={5}
                    className="ring-1 ring-blue-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
                  ></textarea>
                </div>
                <button className="inline-block self-end bg-blue-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                  Send Mail
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
