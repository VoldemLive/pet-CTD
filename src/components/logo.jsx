import React from "react"
import { Link } from "react-router-dom"

const logo = () => {
  return (
    <>
      <Link
        to="/"
        className="cursor-pointer text-slate-300 hover:text-slate-200 transition-all duration-300"
      >
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <span className="font-thin text-sm sm:text-lg">Art</span>
              <span className="ml-1 font-thin text-sm sm:text-lg">Dive</span>
            </div>
            <span className="font-thin text-sm sm:text-lg">Chicago</span>
          </div>
          <div className="m-2">+</div>
          <div>
            <svg width="72" height="72" viewBox="0 0 100 100">
              <path
                fill="transparent"
                stroke="currentColor"
                d="M0 0h92v92H0z"
              ></path>
              <path
                fill="currentColor"
                d="M14.445 56.001l-1.14-2.54H9.687l-.036.098c-.32.738-.663 1.583-.97 2.343H7.332l2.918-6.28c.478-1.03.798-1.752 1.067-2.463l.32-.087 2.943 6.316c.345.76.822 1.755 1.214 2.514zm-1.594-3.546l-1.361-3.052-1.349 3.052zM23.645 55.989l-2.207-3.472H20.1v1.62c0 .477.011 1.422.049 1.765h-1.361c.061-.589.085-2.16.085-2.956v-2.71c0-.785-.024-2.367-.085-2.956.441 0 1.691-.048 2.256-.06 2.159-.037 3.347 1.153 3.311 2.513a2.675 2.675 0 01-1.803 2.502l1.252 1.84c.33.466 1.006 1.41 1.287 1.753zM20.101 51.5h1.238a1.608 1.608 0 001.754-1.607c0-1.055-.638-1.605-1.925-1.605-.393 0-.736.011-1.056.035-.01.246-.01.528-.01.711zM34.243 48.323c-.945-.012-1.766-.024-2.858-.024-.013.258-.013.576-.013.772v5.066c0 .477.013 1.422.05 1.765h-1.36c.06-.589.084-2.159.084-2.955v-2.661c0-.503-.011-1.3-.036-1.987-1.092 0-1.95.012-2.894.024a10.674 10.674 0 00.049-1.116 101.42 101.42 0 007.077 0 7.828 7.828 0 00-.099 1.116M8.656 69.78c.063-.585.086-2.146.086-2.938v-2.696c0-.78-.023-2.352-.086-2.938a11.909 11.909 0 001.362-.06c-.037.353-.049 1.328-.049 1.804v5.073c0 .462.012 1.415.049 1.756zM21.67 62.951l-.085 5.147c0 .476-.012 1.464.024 1.805l-.318.085-5.63-6.427v4.463c0 .476.012 1.416.05 1.756h-1.35c.074-.585.135-2.146.147-2.939l.05-2.937c.012-.781.012-2.233-.05-2.818L14.84 61l5.679 6.524v-3.378c0-.78-.025-2.352-.098-2.938a11.95 11.95 0 001.349-.06c-.05.353-.087 1.328-.1 1.804M27.633 70a4.864 4.864 0 01-2.415-.72l.073-1.292a4.04 4.04 0 002.415.914c.92 0 1.57-.45 1.57-1.354 0-1.705-3.715-1.791-3.715-4.036A2.563 2.563 0 0128.27 61a3.43 3.43 0 012.011.635l-.405 1.073a2.898 2.898 0 00-1.654-.61c-.897 0-1.436.477-1.436 1.245 0 1.524 3.704 1.597 3.704 4.036A2.613 2.613 0 0127.633 70M40.229 62.244a196.86 196.86 0 00-2.857-.023c-.014.255-.014.572-.014.767v5.037c0 .475.013 1.414.05 1.756h-1.36c.06-.586.084-2.147.084-2.94v-2.645c0-.5-.011-1.293-.037-1.975-1.09 0-1.95.01-2.893.023a10.568 10.568 0 00.049-1.109c1.116.036 2.159.06 3.495.06s2.452-.024 3.581-.06a7.88 7.88 0 00-.098 1.109M43.554 69.78c.063-.585.087-2.146.087-2.938v-2.696c0-.78-.024-2.352-.087-2.938a11.904 11.904 0 001.362-.06c-.037.353-.049 1.328-.049 1.804v5.073c0 .462.012 1.415.049 1.756zM55.097 62.244c-.945-.013-1.766-.023-2.858-.023-.013.255-.013.572-.013.767v5.037c0 .475.013 1.414.05 1.756h-1.36c.06-.586.084-2.147.084-2.94v-2.645c0-.5-.012-1.293-.036-1.975-1.092 0-1.95.01-2.894.023a10.566 10.566 0 00.049-1.109c1.115.036 2.159.06 3.495.06s2.452-.024 3.581-.06a7.741 7.741 0 00-.098 1.109M65.915 61.22l-2.747 6.245c-.453 1.035-.748 1.742-.993 2.449l-.319.086-2.746-6.268a58.54 58.54 0 00-1.154-2.5l1.35-.097 2.685 6.402 1.656-3.987c.294-.72.614-1.561.896-2.33zM75.164 62.244c-.945-.013-1.765-.023-2.857-.023-.013.255-.013.572-.013.767v5.037c0 .475.013 1.414.05 1.756h-1.361c.061-.586.085-2.147.085-2.94v-2.645c0-.5-.012-1.293-.037-1.975-1.091 0-1.95.01-2.893.023a10.568 10.568 0 00.048-1.109c1.116.036 2.16.06 3.496.06s2.451-.024 3.58-.06a7.81 7.81 0 00-.098 1.109M83.826 69.83c-.737-.05-1.644-.062-2.515-.062s-1.791.013-2.514.061c.06-.585.086-2.158.086-2.938v-2.818c0-.791-.025-2.353-.086-2.938a49.629 49.629 0 004.869 0 7.513 7.513 0 00-.1 1.085c-.722-.012-1.47-.024-2.341-.024-.368 0-.736 0-1.092.012-.024.22-.024.536-.024.72v1.841h2.98a12.27 12.27 0 00-.037 1H80.11v2.256c0 .182 0 .512.024.73.355 0 .724.013 1.092.013.993 0 1.852-.012 2.685-.036a9.684 9.684 0 00-.085 1.098M15.034 83.18a4.494 4.494 0 01-2.809.98 4.252 4.252 0 01-4.291-4.304 4.55 4.55 0 014.524-4.745 4.604 4.604 0 012.55.772l-.343 1.128a3.732 3.732 0 00-2.28-.797A3.2 3.2 0 009.195 79.6c0 2.243 1.374 3.457 3.102 3.457a3.925 3.925 0 002.822-1.238zM24.418 83.94c.073-.59.098-2.159.098-2.957v-1.028h-4.5v2.22c0 .465.01 1.423.048 1.766h-1.362c.061-.59.087-2.16.087-2.957v-2.71c0-.785-.026-2.366-.087-2.955a11.623 11.623 0 001.362-.062c-.037.356-.049 1.337-.049 1.816v1.876h4.501v-.675c0-.785-.025-2.366-.098-2.955a12.214 12.214 0 001.386-.062c-.05.356-.062 1.337-.062 1.816v5.101c0 .466.012 1.424.061 1.766zM30.196 83.94c.063-.59.086-2.159.086-2.957v-2.71c0-.785-.023-2.365-.086-2.955a11.63 11.63 0 001.362-.062c-.036.356-.05 1.337-.05 1.816v5.102c0 .465.014 1.423.05 1.766zM42.34 83.18a4.497 4.497 0 01-2.81.98 4.252 4.252 0 01-4.291-4.304 4.55 4.55 0 014.525-4.745 4.603 4.603 0 012.55.772l-.344 1.128a3.731 3.731 0 00-2.281-.797 3.2 3.2 0 00-3.188 3.385c0 2.243 1.374 3.457 3.102 3.457a3.925 3.925 0 002.821-1.238zM51.98 84.039l-1.14-2.54h-3.617l-.036.1c-.32.735-.663 1.58-.97 2.342h-1.349l2.919-6.28c.478-1.03.797-1.753 1.066-2.464l.32-.087 2.943 6.316c.345.761.822 1.754 1.214 2.515zm-1.593-3.545l-1.361-3.054-1.349 3.054zM61.93 79.892c.489-.006.731-.018 1.27-.046-.061.465-.043 1.666-.043 2.464v.943a5.13 5.13 0 01-3.055.908 4.38 4.38 0 01-4.439-4.305 4.604 4.604 0 014.672-4.746 5.202 5.202 0 012.723.772l-.344 1.128a4.249 4.249 0 00-2.453-.797 3.213 3.213 0 00-3.335 3.386 3.165 3.165 0 003.25 3.457 3.6 3.6 0 001.778-.392V81.17c0-.185 0-.515-.024-.736zM75.09 79.415a4.467 4.467 0 01-4.427 4.746 4.16 4.16 0 01-4.182-4.305 4.466 4.466 0 014.428-4.746 4.16 4.16 0 014.182 4.304m-1.263.197c0-2.171-1.326-3.46-3.055-3.46-1.814 0-3.028 1.596-3.028 3.509 0 2.17 1.323 3.46 3.053 3.46 1.816 0 3.03-1.596 3.03-3.509"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </>
  )
}

export default logo