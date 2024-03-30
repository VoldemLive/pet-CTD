import React from "react"

const PrivacyPolicy = () => {
  return (
    <div className="flex text-gray-600 bg-slate-200 p-5 justify-center w-full h-full ">
      <div className="flex max-w-[1100px] bg-slate-50 shadow-sm p-5">
        <div className="px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

          <h2 className="text-xl font-semibold mb-3">
            Data Provider Acknowledgment
          </h2>
          <p className="text-lg mb-4">
            <strong>Arthive</strong> utilizes the Art Institute of Chicago's API
            to furnish our users with access to a diverse collection of
            artworks. This service is pivotal in enriching your exploration and
            appreciation of art through our platform. The Art Institute of
            Chicago owns all rights to the artworks and related data.
          </p>

          <h2 className="text-xl font-semibold mb-3">
            Copyright and Content Ownership
          </h2>
          <p className="text-lg mb-4">
            The intellectual property rights of the artworks and their detailed
            information sourced from the Art Institute of Chicago's API are
            fully retained by the Art Institute. <strong>Arthive</strong> serves
            as a conduit for art appreciation and education, without claiming
            any ownership over the content displayed.
          </p>

          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <p className="text-lg mb-4">
            <strong>Arthive</strong> is committed to ensuring the privacy and
            security of our visitors. We do not collect, store, process, or
            transmit any personal data of our users. Your exploration of art
            through <strong>Arthive</strong> is private and untracked.
          </p>

          <h2 className="text-xl font-semibold mb-3">
            How We Use Your Information
          </h2>
          <p className="text-lg mb-4">
            Since we do not collect personal information, there is no usage of
            user data to outline. Your journey through <strong>Arthive</strong>{" "}
            remains solely between you and the artworks you engage with.
          </p>

          <h2 className="text-xl font-semibold mb-3">Data Security</h2>
          <p className="text-lg mb-4">
            Although we do not collect personal information, we are dedicated to
            ensuring our site's security. We strive to protect our platform from
            unauthorized access, alteration, disclosure, or destruction of any
            information we might host.
          </p>

          <h2 className="text-xl font-semibold mb-3">
            Changes to Our Privacy Policy
          </h2>
          <p className="text-lg mb-4">
            <strong>Arthive</strong>
            reserves the right to update this privacy policy at any time. Such
            changes will be effective immediately upon posting on this page. We
            encourage our users to review our policy periodically to stay
            informed about how we are protecting the privacy of the information
            we do not collect.
          </p>

          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <p className="text-lg mb-4">
            For any inquiries or concerns regarding our privacy policy, please
            contact us at <strong>volodymyr.shynkarov[att]gmail.com</strong>.
            Your privacy and security are of utmost importance to us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
