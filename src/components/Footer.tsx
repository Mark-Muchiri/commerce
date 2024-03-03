function Footer() {
  // Example array of lists with headings and items
  const lists = [
    {
      heading: "Navigation",
      items: [ "Home", "About", "Categories", "Testimonial", "Contact" ],
    },
    {
      heading: "Contact us",
      items: [ "For all enquiries contact @womenfashiontrend.net or head over to our Contact page and send us a message." ],
    },
    {
      heading: "Install the app",
      items: [ "Lorem ipsum dolor sit amet consectetur" ],
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-10 px-5 md:px-20 py-10">
      <div>
        <div className="py-2">
          <p className="text-4xl font-extrabold items-center">
            Logo
          </p>
        </div>
      </div>
      {lists.map((list, index) => (
        <div key={index} className="">
          <p className="text-2xl font-bold text-black">{list.heading}</p>
          <ul>
            {list.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-lg text-neutral-900 mt-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Footer;