import React from 'react'

function Card({username,clg,ph,email}){
  return (
    <div className="max-w-sm w-11/12 m-4">
      <div className="bg-black/60 backdrop-blur-lg p-6 rounded-2xl text-white border border-white/20 shadow-lg flex flex-col justify-center space-y-3">
        <h1 className="text-3xl font-bold">{username}</h1>
        <p className="text-sm text-gray-300 font-medium">Student at {clg || "IIT Delhi"}</p>
        <p className="text-sm font-semibold">📧 {email}</p>
        <p className="text-sm font-semibold">📞 {ph}</p>
      </div>
    </div> 


  );
}

export default Card