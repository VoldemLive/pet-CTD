import React from "react"
import { Link } from "react-router-dom"

const logo = ({ compact }) => {
  return (
    <>
      <Link
        to="/"
        className="cursor-pointer text-gray-300 hover:text-gray-200 transition-all duration-300"
      >
        <div className="flex flex-row items-center">
          <div>
            <div className="flex flex-col content-center justify-center items-center">
              <svg width="64" height="64" viewBox="0 0 956 957">
                <path
                  fill="currentcolor"
                  d="M447 34.6c-48.1 6.2-76.7 14-127 34.8-20.6 8.5-63.9 29.7-82.8 40.5-39.4 22.7-72.1 49.2-105.1 85.6-25.5 28.1-25.2 27.6-13.7 23.9 19.8-6.3 40.3-8.8 65.7-8.1 26.5.7 41.1 3.9 63.9 13.9 14.7 6.4 20.9 9.8 52.5 28.6l53 31.5 47.5 28.2c44.3 26.5 63.8 33.5 92.8 33.5 20-.1 40.3-4.8 60-14.2 14.9-7.1 30.9-17.9 29.5-20.1-.3-.5-.2-.7.4-.4 1.3.8 4.8-1.7 4.8-3.5 0-.7.5-1.3 1.2-1.3 1.5 0 2.8-1.3 2.8-2.8 0-.7.5-1.2 1.2-1.2 1.4 0 2.8-1.3 2.8-2.8.1-.7.6-1.1 1.3-1 1.6.4 10.3-10.6 9.5-12-.3-.7-.2-.9.2-.4 1.1.9 8.6-10.3 7.8-11.7-.3-.6-.3-.8.2-.4 1.5 1.4 11.1-16.4 9.9-18.3-.4-.7-.3-.9.3-.6 1.3.8 4.7-6.8 3.8-8.4-.5-.7-.4-1 .2-.6 1.2.8 2.6-2 1.7-3.4-.3-.5-.1-.9.4-.9 2.4 0 8.8-26.1 10.2-41 3.8-41.2-10.7-78-44.4-112.8C561.2 51.6 523 35.3 469 34.5c-10.2-.2-20.1-.1-22 .1zm56 109.8c18.5 6.5 35.2 21.1 43.9 38.1 8.6 16.9 8.2 39.1-1 56.4-13.2 24.7-31 37.1-58 40.2-11.2 1.3-18.2.4-28.7-3.6-11.9-4.5-15.4-6.8-24.7-16-7.7-7.6-9.8-10.5-13.8-18.5-12.3-24.7-9.7-48.9 7.6-71.7 8.9-11.8 26-23.2 40.4-26.8 9-2.3 24.9-1.4 34.3 1.9zm136.5-72.6c1.6 2 4.2 5.3 6 7.2 4 4.3 12.3 15.3 15.4 20.3 1.2 2 2.8 3.7 3.3 3.7.6 0 .9.3.5.6-.7.7 5.1 11.5 6.7 12.6.6.4.8.8.4.8-1 0 1.2 6 2.3 6 .4 0 .5.7.2 1.7-.5 1.2-.3 1.4.7.8.8-.5 1.1-.4.7.2-.6 1 2 10.3 3.2 11.3.3.3.6 1.2.6 2 .2 4.3 1.9 11.9 2.6 11.5.4-.3.5 1 .2 3-.3 1.9-.1 3.5.4 3.5s.9 1.9.9 4.2l.2 28 .2 23.8h73.5l73.5-.9c0-1-32.5-35.8-42.9-45.9-16.3-15.8-35.7-31.6-52.7-43-19.8-13.2-74.5-44.2-91.8-52.1l-6.8-3.1 2.7 3.8zM142 257c-12.3.9-37.6 5.5-47.5 8.7-9.8 3.1-12.3 5.1-19.7 16.3-3.9 5.8-10.3 17.2-14.4 25.5-17 34.8-26.4 65.4-33.8 109.5-2.6 15.4-4.6 65.7-2.8 70.2 1.2 2.9 2.9.6 6.1-8 9.5-25.8 25.6-49.5 50.3-74.4 16.7-16.8 34.7-28.4 61.4-39.7 31.5-13.3 59.3-19.1 90.8-19.1 18.2 0 27.6 1.3 43.6 6 22.5 6.7 23 7 121 62.2l111.5 61.3 43 23.5c5.5 3.1 18.8 10.4 29.5 16l36.8 20.2c24.7 14.1 51.1 27.2 62.7 31.2 18.3 6.2 24.1 7.1 44.5 7.1 17.5 0 19.2-.2 31.3-3.3 29.7-7.4 59.9-24.6 83.8-47.4 10.3-9.8 20.1-21.6 19.3-23.1-.4-.7-.4-.9.1-.5 1.3 1.2 12.1-14.1 11-15.5-.3-.4-.2-.5.1-.2 1.1.8 7.6-10.4 6.8-11.6-.4-.7-.3-.9.3-.6 1.2.8 4.6-6.1 3.7-7.5-.4-.6-.2-.8.3-.5 1.3.8 2.6-2 1.6-3.5-.3-.6-.1-.8.4-.5 1.2.8 2.6-2 1.7-3.4-.3-.5-.1-.9.5-.9s.7-.7.4-1.7c-.4-1-.2-1.4.4-1 1.4.9 8.8-19.3 11.7-32.3 3.7-16.2 4.6-23.7 4.6-39.5 0-29.7-7.8-60.4-23.2-91-8.4-16.7-12.6-23.8-17.4-29.3l-2.9-3.2h-91c-86.4-.1-91 0-91.3 1.7-.6 3.3-6.4 16.7-12.5 28.8-9.5 19.1-18.2 31.1-33.6 46.5-15 15-22.5 20.9-38.1 30.2-36.5 21.8-68.4 30.8-104 29.5-24.3-1-42.1-5.6-65.7-17.1-13.7-6.7-19-9.7-70.8-40.1L296 303.4l-36.5-21.2c-25-14.6-38.9-20-61-23.8-11.1-1.9-39.8-2.6-56.5-1.4zm72 136.7c-40.4 3.9-69.5 16.7-98.5 43.3-27.4 25.1-44.9 51.3-55.5 83-15.6 46.8-13 87.1 8.7 136 8.2 18.5 25.3 47.1 31.4 52.6 1.9 1.7 4.6 2 24.7 2.7 12.5.4 51.9.6 87.7.5l65-.3 5.1-14.5c7.3-20.9 17.8-38.9 35.3-59.9 14.1-17.1 28.5-28.1 52.8-40.4 30.3-15.3 58.5-21.5 92.7-20.4 14.6.4 18.9 1 29.3 3.6 28.2 7.1 40.6 13.4 116.8 59.3l44 26.8c23 14.4 61.5 34.8 74.3 39.4 19.3 6.9 39.7 9.1 68.2 7.5 13.4-.8 43.4-5.5 49.2-7.8 3.2-1.2 6-4.5 17.1-19.9 24.4-33.7 35.7-57.9 45.6-97.7 7.9-31.6 11.1-51.6 13.1-82l1.6-21.8c.8-8.1-.7-9-3.1-1.8-10.1 30.4-33.1 64.2-57.5 84.6-43.8 36.4-102.6 56.7-152.2 52.5-24.5-2-43.9-7.2-65.1-17.3-6.2-3-33.5-17.8-60.7-32.9a6812.2 6812.2 0 0 0-104.5-57.1L441 490.5l-41.5-23-67.7-37.6c-33.7-19-53.8-28.5-68.8-32.4-13.6-3.5-35-5.2-49-3.8zm217.8 228.8c-12.4 2-18.7 4-32.6 10.6-25.1 11.8-46.8 32.4-61.5 58.3-11 19.3-18.7 47.4-18.7 68.1 0 7.2 2.7 25.6 5.5 38 5.6 24.1 21.2 49.8 45.4 74.9 25.8 26.6 58.1 42.8 96.1 48.2 15.7 2.2 52.8 1.5 71.8-1.5 27.1-4.2 61.9-14.2 94.7-27.3 17.7-7.1 52.5-23.8 68-32.7 22.9-13.1 52.7-34.1 71.5-50.2 15.4-13.2 48-48.4 48-51.8 0-.9-.7-1.1-2.2-.7-1.3.3-12.9.9-25.8 1.2-51.6 1.5-75-5-130.5-36.3L557 661.2c-31.2-19.3-46.3-27-66.4-33.9-18-6.1-39-7.8-58.8-4.8zm12 49c12 3.6 19.2 13.2 20 26.7.4 7.2.2 8.3-2.7 14.3-5.4 10.9-12.8 15.9-25.7 17.2-14.7 1.5-32.4-13.4-32.4-27.3 0-7.1 3.5-16.6 8.1-21.8 4.5-5.1 5.9-6 13.4-8.7 6.2-2.3 12.5-2.4 19.3-.4zm-170.5 84.6c-.7.7-21.4 1.2-65.9 1.5-71.8.5-77.4.7-77.4 3.1 0 2.3 45.6 47.5 57 56.5 44.5 35.2 70.6 50.9 122.5 74 23.2 10.3 25.4 11.2 26.1 10.5.3-.3-2.6-3.8-6.4-7.8-8.5-9-9.9-10.7-19.4-23.4-22.9-30.6-33.7-62.8-33.8-100.5 0-12.7-.7-15.9-2.7-13.9z"
                />
              </svg>
              {!compact && <div>arthive</div>}
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default logo
