const DonationRouteCard = ({ donation }) => {
  
  const {
    id,
    image,
    title,
    price,
    category_name,
    card_background_color,
    text_color,
    category_bg_color,
  } = donation || {};

  return (

    <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{ backgroundColor: card_background_color }}>
      <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <img src={image} alt="image" class="h-full w-full object-cover" />
      </div>
      <div class="p-6">
      <div
          className="badge px-5 py-4"
          style={{
            color: text_color,
            backgroundColor: category_bg_color,
          }}
        >
          {category_name}
        </div>
        <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h4>
        <p class="mb-8 text-2xl block font-sans font-semibold leading-relaxed text-gray-700 antialiased" style={{color:text_color}}>
          ${price}
        </p>
        <a class="inline-block" href="#">
          <button
            class="flex select-none text-white items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            style={{backgroundColor: text_color}}
          >
            View Details
          </button>
        </a>
      </div>
    </div>
  );
};

export default DonationRouteCard;
