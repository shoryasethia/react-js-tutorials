import React from 'react'
import { useParams } from 'react-router'

export function User() {
  const {userid}  = useParams()

  return (
    <>
      <div className="bg-gray-600 text-white text-3xl p-4 text-center">Page for "user/{userid}"" do not exist</div>
    </>
  )
}
