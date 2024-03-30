import React from "react"

const TermsOfService = () => {
  return (
    <div className="flex text-gray-600 bg-slate-200 p-5 justify-center w-full h-full ">
      <div className="flex flex-col max-w-[1100px] bg-slate-50 shadow-sm p-5">
        <div className="px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>

          <h2 className="text-xl font-semibold mb-3">Introduction</h2>
          <p className="text-lg mb-4">
            These Terms of Service govern your use of <strong>Arthive</strong>{" "}
            and provide information about the <strong>Arthive</strong> service
            outlined below. By using
            <strong>Arthive</strong>, you agree to these terms.
          </p>

          <h2 className="text-xl font-semibold mb-3">Use of Content</h2>
          <p className="text-lg mb-4">
            Content provided through <strong>Arthive</strong>, especially that
            sourced from the Art Institute of Chicago's API, is intended for
            educational and informational purposes only. Users are responsible
            for respecting copyright and related rights.
          </p>

          <h2 className="text-xl font-semibold mb-3">User Conduct</h2>
          <p className="text-lg mb-4">
            Users of <strong>Arthive</strong> are expected to use the website in
            a respectful manner, adhering to all applicable laws and respecting
            the rights and dignity of others.
          </p>

          <h2 className="text-xl font-semibold mb-3">
            Limitation of Liability
          </h2>
          <p className="text-lg mb-4">
            <strong>Arthive</strong> and its operators assume no responsibility
            for any direct or indirect damages arising from the use of the
            website, including access to or use of Art Institute of Chicago's
            API content.
          </p>

          <h2 className="text-xl font-semibold mb-3">Changes to the Terms</h2>
          <p className="text-lg mb-4">
            We reserve the right to modify these terms at any time. Your
            continued use of <strong>Arthive</strong> constitutes agreement to
            any modifications.
          </p>

          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-lg mb-4">
            If you have any questions about these Terms of Service, please
            contact us at <strong>volodymyr.shynkarov[att]gmail.com</strong>.
          </p>
        </div>{" "}
      </div>
    </div>
  )
}

export default TermsOfService
