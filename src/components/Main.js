export default function Main() {
  return (
    <section className="text-gray-600 body-font mt-16">
      <div className=" flex py-24 md:flex-row flex-col items-center justify-between">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md: mb-40 items-center text-center">
          <h1 className="text-start mb-5 sm:text-xl md:text-2xl items-center Avenir xl:w-2/2 text-gray-900">
            Easily remove backgrounds, edit photos, and apply stunning templates. Create eye-catching images in minutes!
          </h1>
          <p className="text-start mb-4 xl:w-3/4 text-gray-600 text-lg">
            Transform your photos instantly with our all-in-one photo editing solution! Remove backgrounds in one tap, enhance your images, and create stunning designs with beautiful templates.

          </p>
          <div className="md:flex ">
            <div className="flex mt-3 w-48 h-14 bg-gray-800 hover:bg-gray-700 text-white rounded-lg items-center justify-center">
              <div className="mr-3">
                <svg viewBox="30 336.7 120.9 129.2" width="30">
                  <path
                    fill="#FFD400"
                    d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                  />
                  <path
                    fill="#FF3333"
                    d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                  />
                  <path
                    fill="#48FF48"
                    d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                  />
                  <path
                    fill="#3BCCFF"
                    d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                  />
                </svg>
              </div>
              <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.softcodes.eventplanner">
                <div className="text-xs">GET IT ON</div>
                <div className="text-xl font-semibold font-sans -mt-1">
                  Google Play
                </div>
              </a>
            </div>
            <div className="flex mt-3 md:ml-4 w-48 h-14 bg-transparent hover:bg-gray-300 text-black border border-black rounded-xl items-center justify-center">
              <div className="mr-3">
                <svg viewBox="0 0 384 512" width="30">
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-2xl font-semibold font-sans -mt-1">
                  App Store
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:mr-44 md:flex p-4 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 md:mr-48 md:ml-20">
          <img
            className="w-64 md:ml-1 border-2 m-2 border-gray-500 rounded-xl"
            alt="iPhone-12"
            src="/images/main-2.jpeg"
          ></img>
          <img
            className="w-64 m-2 border-2 border-gray-500 rounded-xl"
            alt="iPhone-12"
            src="/images/main-1.jpeg"
          ></img>
        </div>
      </div>

      <div className="grr max-w-7xl md:pt-20 mx-auto ">
        <h1 className="mb-8 text-lg md:text-xl Avenir font-semibold text-gray-700">
          🎯 KEY FEATURES:
        </h1>
        <ul className="list-disc list-inside  text-gray-700 mx-auto ">
          <li>Instant Background Removal</li>
          <li>AI-powered technology for precise background removal</li>
          <li>Save with transparent background (PNG)</li>
          <li>Remove backgrounds from portraits, products, and any image</li>
        </ul>
        <h2 className="mt-4 text-lg md:text-xl Avenir font-semibold text-gray-700">
          Professional Photo Editor
        </h2>
        <ul className="list-disc list-inside  text-gray-700 mx-auto ">
          <li>Adjust brightness, contrast, and saturation</li>
          <li>Apply filters and effects</li>
          <li>Crop, rotate, and resize images</li>
          <li>Fine-tune colors and lighting</li>
          <li>Add text and stickers</li>
        </ul>
        <h2 className="mt-4 text-lg md:text-xl Avenir font-semibold text-gray-700">
          Creative Templates
        </h2>
        <ul className="list-disc list-inside  text-gray-700 mx-auto ">
          <li>Hundreds of ready-to-use templates</li>
          <li>New year post templates</li>
          <li>Story templates for Instagram</li>
        </ul>
        <h2 className="mt-4 text-lg md:text-xl Avenir font-semibold text-gray-700">
          All-in-One Workflow
        </h2>
        <ul className="list-disc list-inside  text-gray-700 mx-auto ">
          <li>Remove background and edit in one place</li>
          <li>Apply templates to edited photos</li>
          <li>Save custom presets</li>
          <li>Batch processing</li>
          <li>High-resolution export</li>
        </ul>
        <h2 className="mt-4 text-lg md:text-xl Avenir font-semibold text-gray-700">
          Perfect for:
        </h2>
        <ul className="list-disc list-inside  text-gray-700 mx-auto ">
          <li>📱 Social media creators</li>
          <li>🛍️ Online sellers</li>
          <li>💼 Business professionals</li>
          <li>🎨 Digital artists</li>
          <li>📸 Photography enthusiasts</li>
        </ul>
        <h2 className="mt-4 text-lg md:text-xl Avenir font-semibold text-gray-700">
          Why Choose Our App:
        </h2>
        <ul className="list-disc list-inside  text-gray-700 mx-auto ">
          <li>User-friendly interface</li>
          <li>Professional-grade results</li>
          <li>Fast processing</li>
          <li>Regular updates with new features</li>
          <li>No watermarks</li>
          <li>HD quality exports</li>
        </ul>
        <p className="mt-6 text-lg text-gray-700">
          Download now and transform your photos into professional masterpieces in minutes!
        </p>
        <p className="mt-4 text-gray-500">
          Keywords: background remover, photo editor, image editor, background eraser, photo background changer, picture editor, template maker, photo templates
        </p>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg">
          <img
            className="object-cover object-center md:w-3/4 mb-10 md:rounded-lg shadow-md"
            alt="Placeholder Image"
            src="./images/placeholder1.jpeg"
          ></img>
        </div>
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-16 md:py-36">
            <h1 className="mb-5 text-xl md:text-6xl Avenir font-semibold text-gray-900">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-md md:text-2xl font-semibold text-gray-600">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-600 md:w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform  border rounded-lg bg-gray-700"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
