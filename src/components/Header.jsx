import React from 'react';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-8 py-6 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-36 md:w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      <div className='flex'>
        <img
        className='w-12 h-12' 
          alt="user-icon"
          src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
        />
        <button className='font-bold text-white'>(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;
