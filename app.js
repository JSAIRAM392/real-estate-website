const properties = [
  {
    id: "garden-flat",
    title: "Sunlit 2 BHK with a leafy private garden",
    type: "Apartment / Flat",
    price: 6800000,
    location: "Indiranagar, Bengaluru",
    address: "12 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038",
    showAddress: true,
    beds: 2,
    baths: 2,
    area: 1120,
    owner: "Ananya Rao",
    phone: "+91 98765 43210",
    description: "A calm, light-filled home with a leafy private patio and plenty of room to unwind. Walk to neighbourhood cafés, the metro, and the Sunday market. The building is friendly, the plants are thriving, and the morning light is especially lovely.",
    coordinates: [12.9719, 77.6412],
    photos: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=82",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "family-home",
    title: "Independent 3 BHK home with a sunny garden",
    type: "Independent House",
    price: 9200000,
    location: "Baner, Pune",
    address: "18 Green Park Lane, Baner, Pune, Maharashtra 411045",
    showAddress: true,
    beds: 3,
    baths: 2,
    area: 1860,
    owner: "Meera Shah",
    phone: "+91 98220 54321",
    description: "A welcoming family home with a generous garden, lovely afternoon light, and thoughtful updates throughout. Set on a quiet, tree-lined lane close to schools, local shops, and the trails on Baner Hill.",
    coordinates: [18.559, 73.7868],
    photos: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1100&q=82",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "hilltop-villa",
    title: "A peaceful hillside villa with a view",
    type: "Villa",
    price: 9800000,
    location: "Lonavala, Maharashtra",
    address: "7 Hillcrest Road, Tungarli, Lonavala, Maharashtra 410401",
    showAddress: true,
    beds: 4,
    baths: 3,
    area: 2450,
    owner: "Dev Khanna",
    phone: "+91 98230 11122",
    description: "A relaxed hillside retreat with a wraparound veranda, an open-plan living space, and sweeping valley views. Thoughtfully renovated and ready to move in, with a garden that comes alive during the monsoon.",
    coordinates: [18.7557, 73.4091],
    photos: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=82",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "old-town-apartment",
    title: "Old-town 2 BHK, full of character",
    type: "Apartment / Flat",
    price: 5400000,
    location: "Fontainhas, Panaji",
    address: "9 Rua de Ourem, Fontainhas, Panaji, Goa 403001",
    showAddress: false,
    beds: 2,
    baths: 1,
    area: 980,
    owner: "Isabel Fernandes",
    phone: "+91 98221 76543",
    description: "A one-of-a-kind apartment in the heart of the Latin Quarter. Restored original details meet a fresh, airy interior, with local bakeries, galleries, and the river all just around the corner.",
    coordinates: [15.5009, 73.8278],
    photos: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1100&q=82",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "garden-plot",
    title: "Ready-to-build residential plot near the lake",
    type: "Residential Plot / Land",
    price: 3200000,
    location: "Doddaballapur, Bengaluru",
    address: "Site 42, Lakeview Layout, Doddaballapur, Bengaluru Rural, Karnataka 561203",
    showAddress: false,
    beds: null,
    baths: null,
    area: 2400,
    owner: "Arjun Nair",
    phone: "+91 98450 22233",
    description: "A well-situated residential plot in a quiet, approved layout with road access and utilities nearby. An excellent opportunity to build a home to your own plans, with open green space and the lake within easy reach.",
    coordinates: [13.2927, 77.5378],
    photos: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=82",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "bright-commercial-space",
    title: "Bright, versatile commercial space",
    type: "Commercial Property",
    price: 7800000,
    location: "Koramangala, Bengaluru",
    address: "22 5th Cross Road, Koramangala, Bengaluru, Karnataka 560034",
    showAddress: true,
    beds: null,
    baths: 2,
    area: 1500,
    owner: "Kavya Menon",
    phone: "+91 98450 67890",
    description: "A bright, flexible commercial property in a well-connected neighbourhood. The open layout suits a studio, boutique office, or local business, with street access, two washrooms, and cafés and transit nearby.",
    coordinates: [12.9352, 77.6245],
    photos: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=82",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "indiranagar-rental-flat",
    listingType: "rent",
    title: "Bright 2 BHK near Indiranagar Metro",
    type: "Apartment / Flat",
    rentPrice: 32000,
    location: "Indiranagar, Bengaluru",
    address: "Indiranagar, Bengaluru, Karnataka",
    showAddress: false,
    beds: 2,
    baths: 2,
    area: 1080,
    owner: "Rohan Mehta",
    phone: "+91 98765 43211",
    description: "A bright, well-kept apartment with a balcony, practical storage, and easy access to the metro, local cafés, and everyday shops.",
    coordinates: [12.9719, 77.6412],
    photos: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=82",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "baner-rental-home",
    listingType: "rent",
    title: "Spacious 3 BHK home with a garden",
    type: "Independent House",
    rentPrice: 38000,
    location: "Baner, Pune",
    address: "Baner, Pune, Maharashtra",
    showAddress: false,
    beds: 3,
    baths: 2,
    area: 1720,
    owner: "Priya Kulkarni",
    phone: "+91 98220 54322",
    description: "A comfortable family home with a private garden, generous living space, and schools, shops, and local parks nearby.",
    coordinates: [18.559, 73.7868],
    photos: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1100&q=82",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "kondapur-rental-apartment",
    listingType: "rent",
    title: "Move-in-ready 1 BHK close to Kondapur IT parks",
    type: "Apartment / Flat",
    rentPrice: 18000,
    location: "Kondapur, Hyderabad",
    address: "Kondapur, Hyderabad, Telangana",
    showAddress: false,
    beds: 1,
    baths: 1,
    area: 720,
    owner: "Sana Reddy",
    phone: "+91 98490 12345",
    description: "A tidy, light-filled apartment with a functional kitchen and convenient access to transit, grocery stores, and nearby workplaces.",
    coordinates: [17.4698, 78.357],
    photos: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1100&q=82",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "panaji-rental-apartment",
    listingType: "rent",
    title: "Airy 2 BHK in the heart of Panaji",
    type: "Apartment / Flat",
    rentPrice: 24000,
    location: "Panaji, Goa",
    address: "Panaji, Goa",
    showAddress: false,
    beds: 2,
    baths: 1,
    area: 940,
    owner: "Aarav Fernandes",
    phone: "+91 98221 76544",
    description: "A welcoming apartment with an airy layout and easy access to local markets, cafés, and the riverfront.",
    coordinates: [15.4909, 73.8278],
    photos: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=82",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const userListingsKey = "houzio-sale-properties-v2";
const reviewsKey = "houzio-community-reviews-v1";
const isRentPage = window.location.pathname.split("/").pop().toLowerCase() === "rent.html";
const listingTypes = ["sale", "rent", "both"];
const initialPriceRange = isRentPage ? { min: 5000, max: 1000000, step: 5000 } : { min: 1000000, max: 10000000, step: 100000 };

function listingTypeOf(property) {
  return listingTypes.includes(property.listingType) ? property.listingType : "sale";
}

function saleStatusOf(property) {
  return property.saleStatus ?? (property.listingStatus === "sold" && listingTypeOf(property) !== "rent" ? "sold" : "active");
}

function rentStatusOf(property) {
  return property.rentStatus ?? (property.listingStatus === "sold" && listingTypeOf(property) !== "sale" ? "occupied" : "active");
}

function hasAvailableListing(property) {
  const listingType = listingTypeOf(property);
  return (listingType !== "rent" && saleStatusOf(property) !== "sold")
    || (listingType !== "sale" && rentStatusOf(property) !== "occupied");
}

function isArchivedListing(property) {
  const listingType = listingTypeOf(property);
  return (listingType !== "rent" && saleStatusOf(property) === "sold")
    || (listingType !== "sale" && rentStatusOf(property) === "occupied");
}

function listingStatusesLabel(property) {
  const listingType = listingTypeOf(property);
  const statuses = [];
  if (listingType !== "rent") statuses.push(saleStatusOf(property) === "sold" ? "Sold" : "For sale");
  if (listingType !== "sale") statuses.push(rentStatusOf(property) === "occupied" ? "Occupied" : "For rent");
  return statuses.join(" · ");
}

function hasPositivePrice(value) {
  return value !== null && value !== undefined && value !== "" && Number.isFinite(Number(value)) && Number(value) > 0;
}

function hasValidListingPrices(property) {
  const listingType = listingTypeOf(property);
  const hasSalePrice = hasPositivePrice(property.salePrice ?? property.price);
  const hasRentPrice = hasPositivePrice(property.rentPrice);
  return listingType === "sale" ? hasSalePrice : listingType === "rent" ? hasRentPrice : hasSalePrice && hasRentPrice;
}

function matchesCurrentListingType(property) {
  const listingType = listingTypeOf(property);
  return isRentPage
    ? (listingType === "rent" || listingType === "both") && rentStatusOf(property) !== "occupied"
    : (listingType === "sale" || listingType === "both") && saleStatusOf(property) !== "sold";
}

function isRentListingView(property) {
  return listingTypeOf(property) === "rent" || listingTypeOf(property) === "both" && isRentPage;
}

function listingPrice(property) {
  return Number(isRentListingView(property) ? property.rentPrice : property.salePrice ?? property.price);
}

function formattedListingPrice(property) {
  return `${rupees(listingPrice(property))}${isRentListingView(property) ? " / month" : ""}`;
}

function listingPriceSummary(property) {
  const salePrice = property.salePrice ?? (listingTypeOf(property) !== "rent" ? property.price : null);
  const rentPrice = property.rentPrice;
  const prices = [];
  if (hasPositivePrice(salePrice)) prices.push(`Sale ${rupees(salePrice)}`);
  if (hasPositivePrice(rentPrice)) prices.push(`Rent ${rupees(rentPrice)} / month`);
  return prices.join("<br>");
}

function updateListingPriceFields() {
  const listingType = $("#listing-type").value;
  const needsSalePrice = listingType === "sale" || listingType === "both";
  const needsRentPrice = listingType === "rent" || listingType === "both";
  $("#sale-price-field").classList.toggle("hidden", !needsSalePrice);
  $("#rent-price-field").classList.toggle("hidden", !needsRentPrice);
  $("#sale-price").required = needsSalePrice;
  $("#rent-price").required = needsRentPrice;
}

let userListings = [];
let communityReviews = [];
try {
  const saved = JSON.parse(localStorage.getItem(userListingsKey) || "[]");
  if (Array.isArray(saved)) {
    userListings = saved
      .filter((item) => item && item.id && item.title)
      .map((item) => {
        const listingType = listingTypeOf(item);
        const salePrice = item.salePrice ?? (listingType !== "rent" ? item.price : null);
        const rentPrice = item.rentPrice ?? (listingType === "rent" ? item.price : null);
        const { listingStatus, ...listing } = item;
        return {
          ...listing,
          listingType,
          salePrice,
          rentPrice,
          saleStatus: item.saleStatus ?? (listingStatus === "sold" && listingType !== "rent" ? "sold" : "active"),
          rentStatus: item.rentStatus ?? (listingStatus === "sold" && listingType !== "sale" ? "occupied" : "active")
        };
      })
      .filter(hasValidListingPrices);
  }
} catch (error) {
  console.warn("Saved properties could not be loaded.", error);
}
try {
  const savedReviews = JSON.parse(localStorage.getItem(reviewsKey) || "[]");
  if (Array.isArray(savedReviews)) {
    communityReviews = savedReviews.filter((review) => review && review.name && review.message && Number(review.rating) >= 1 && Number(review.rating) <= 5);
  }
} catch (error) {
  console.warn("Saved reviews could not be loaded.", error);
}
let listings = [...userListings, ...properties];
let activeFilters = { location: "", type: "", min: initialPriceRange.min, max: initialPriceRange.max, beds: "", area: "" };
let uploadedPhotos = [];
let editingListingId = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const rupees = (value) => `₹${Number(value).toLocaleString("en-IN")}`;

function validMapLink(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
  } catch {
    return "";
  }
}

function cardMarkup(property) {
  const image = property.photos?.[0] || properties[0].photos[0];
  const beds = Number.isFinite(Number(property.beds)) && Number(property.beds) > 0 ? `<span>▤ &nbsp;${escapeHTML(property.beds)} ${Number(property.beds) === 1 ? "bed" : "beds"}</span>` : "";
  const area = Number.isFinite(Number(property.area)) ? `${Number(property.area).toLocaleString("en-IN")} sq ft` : property.area;
  return `<article class="listing-card" data-id="${escapeHTML(property.id)}" tabindex="0" role="link" aria-label="View ${escapeHTML(property.title)}">
    <div class="listing-photo-wrap"><img class="listing-photo" src="${escapeHTML(image)}" alt="${escapeHTML(property.title)}" loading="lazy" /><span class="photo-count"><span>▧</span> ${property.photos?.length || 1} photos</span><span class="listing-badge">${isRentPage ? "For rent" : "For sale"}</span></div>
    <div class="listing-info"><div class="listing-price">${formattedListingPrice(property)}</div><h3 class="listing-title">${escapeHTML(property.title)}</h3><div class="listing-location">⌖ &nbsp;${escapeHTML(property.location)}</div>
    <div class="listing-features"><span>⌂ &nbsp;${escapeHTML(property.type)}</span>${beds}<span>◫ &nbsp;${escapeHTML(area)}</span></div>
    <div class="listing-foot"><span class="owner-mini">By <strong>${escapeHTML(property.owner)}</strong></span><span class="card-arrow">↗</span></div></div></article>`;
}

function bindCards(container) {
  $$(".listing-card", container).forEach((card) => {
    const open = () => navigate("detail", card.dataset.id);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function renderFeatured() {
  $("#featured-listings").innerHTML = listings.filter(matchesCurrentListingType).slice(0, 3).map(cardMarkup).join("");
  bindCards($("#featured-listings"));
}

function getFilteredListings() {
  let matches = listings.filter(matchesCurrentListingType).filter((property) => {
    const location = `${property.location} ${property.showAddress ? property.address : ""}`.toLocaleLowerCase();
    const beds = Number(property.beds);
    const area = Number(property.area);
    return (!activeFilters.location || location.includes(activeFilters.location.toLocaleLowerCase()))
      && (!activeFilters.type || property.type === activeFilters.type)
      && listingPrice(property) >= activeFilters.min
      && listingPrice(property) <= activeFilters.max
      && (!activeFilters.beds || (Number.isFinite(beds) && beds >= Number(activeFilters.beds)))
      && (!activeFilters.area || (Number.isFinite(area) && area >= Number(activeFilters.area)));
  });
  const sort = $("#sort-select").value;
  if (sort === "low") matches.sort((a, b) => listingPrice(a) - listingPrice(b));
  if (sort === "high") matches.sort((a, b) => listingPrice(b) - listingPrice(a));
  return matches;
}

function renderListings() {
  const matches = getFilteredListings();
  $("#all-listings").innerHTML = matches.map(cardMarkup).join("");
  bindCards($("#all-listings"));
  $("#results-count").textContent = `${matches.length} ${matches.length === 1 ? "property" : "properties"} for ${isRentPage ? "rent" : "sale"}`;
  $("#all-listings").classList.toggle("hidden", matches.length === 0);
  $("#empty-state").classList.toggle("hidden", matches.length !== 0);
}

function navigate(page, id) {
  const validPages = ["home", "listings", "post", "about", "contact", "reviews", "account", "history"];
  if (page !== "detail" && !validPages.includes(page)) page = "home";
  $$(".page").forEach((element) => element.classList.add("hidden"));
  if (page === "detail") {
    const property = listings.find((item) => item.id === id);
    if (!property) {
      navigate("listings");
      return;
    }
    renderDetail(property);
    $("#detail-page").classList.remove("hidden");
  } else {
    $(`#${page}-page`).classList.remove("hidden");
    if (page === "listings") renderListings();
    if (page === "account") renderSellerDashboard();
    if (page === "reviews") renderReviews();
    if (page === "history") renderHistory();
  }
  $$("[data-page-link]").forEach((link) => {
    const active = link.dataset.pageLink === (page === "listings" && isRentPage ? "rent" : page);
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  const route = page === "detail" ? `detail/${encodeURIComponent(id)}` : page;
  if (window.location.hash !== `#${route}`) window.location.hash = route;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDetail(property) {
  const addressText = property.showAddress ? property.address : `${property.location} · Exact address shared by owner`;
  const mapQuery = property.showAddress ? property.address : property.location;
  const mapURL = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  const gallery = (property.photos || []).slice(0, 5);
  const bedCount = Number(property.beds);
  const bathCount = Number(property.baths);
  const area = Number.isFinite(Number(property.area)) ? `${Number(property.area).toLocaleString("en-IN")} sq ft` : property.area;
  const isRentDetail = isRentListingView(property);
  const availabilityStatus = isRentDetail ? rentStatusOf(property) : saleStatusOf(property);
  const availabilityLabel = availabilityStatus === "sold" ? "Sold" : availabilityStatus === "occupied" ? "Occupied" : isRentDetail ? "For rent" : "For sale";
  const mapLocationLink = validMapLink(property.mapLocation);
  const mapLink = mapLocationLink ? `<a class="map-address" href="${escapeHTML(mapLocationLink)}" target="_blank" rel="noopener noreferrer">↗ &nbsp;Open property location in Google Maps</a>` : `<div class="map-address">⌖ &nbsp;${escapeHTML(addressText)}</div>`;
  $("#detail-content").innerHTML = `<div class="detail-wrap">
    <button class="back-link" type="button" data-back>← &nbsp;Back to properties</button>
    <div class="detail-gallery">${gallery.map((image, index) => `<img src="${escapeHTML(image)}" alt="${escapeHTML(property.title)} photo ${index + 1}" ${index > 2 ? 'loading="lazy"' : ""} />`).join("")}<button class="gallery-more" type="button" data-gallery>▧ &nbsp;See all ${gallery.length} photos</button></div>
    <div class="detail-main"><div class="detail-body">
      <div class="detail-kicker"><span>${availabilityLabel}</span>${escapeHTML(property.type)}</div>
      <h1 class="detail-title">${escapeHTML(property.title)}</h1><p class="detail-address">⌖ &nbsp;${escapeHTML(addressText)}</p>
      <div class="detail-price">${formattedListingPrice(property)}</div>
      <div class="detail-specs">${Number.isFinite(bedCount) && bedCount > 0 ? `<span>▤ &nbsp;${bedCount} ${bedCount === 1 ? "bedroom" : "bedrooms"}</span>` : ""}${Number.isFinite(bathCount) && bathCount > 0 ? `<span>◫ &nbsp;${bathCount} ${bathCount === 1 ? "bathroom" : "bathrooms"}</span>` : ""}<span>⌂ &nbsp;${escapeHTML(area)}</span></div>
      <h2>About this property</h2><p class="detail-description">${escapeHTML(property.description)}</p>
      <section class="map-section"><h2>Property location</h2><p class="map-note">${property.showAddress ? "The property address and location are shown on the map." : "The map shows the approximate neighbourhood. Contact the owner for the exact address."}</p><iframe class="map-frame" title="Map showing ${escapeHTML(property.showAddress ? property.address : property.location)}" src="${mapURL}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>${mapLink}</section>
    </div><aside class="contact-card"><div class="contact-owner"><span class="owner-avatar">${escapeHTML(String(property.owner || "O").trim().charAt(0))}</span><span><strong>${escapeHTML(property.owner)}</strong><small>Property owner</small></span></div>${availabilityStatus !== "active" ? `<p class="sold-notice">This listing has been marked ${availabilityStatus}.</p>` : `<a class="button button-green" href="tel:${escapeHTML(String(property.phone).replace(/[^\d+]/g, ""))}">☎ &nbsp; Call owner</a><p>You'll speak directly with the owner.</p>`}</aside></div>
    </div>`;
  $("[data-back]", $("#detail-content")).addEventListener("click", () => navigate("listings"));
  $("[data-gallery]", $("#detail-content")).addEventListener("click", () => {
    const first = $(".detail-gallery img", $("#detail-content"));
    if (first?.requestFullscreen) first.requestFullscreen();
    else first?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function updatePriceRange() {
  const minInput = $("#price-min");
  const maxInput = $("#price-max");
  let min = Number(minInput.value);
  let max = Number(maxInput.value);
  const step = Number(minInput.step) || initialPriceRange.step;
  if (min > max - step) {
    if (document.activeElement === minInput) min = max - step;
    else max = min + step;
    minInput.value = String(min);
    maxInput.value = String(max);
  }
  activeFilters.min = min;
  activeFilters.max = max;
  const rangeMin = Number(minInput.min);
  const rangeMax = Number(maxInput.max);
  $("#range-selected").style.left = `${((min - rangeMin) / (rangeMax - rangeMin)) * 100}%`;
  $("#range-selected").style.right = `${100 - ((max - rangeMin) / (rangeMax - rangeMin)) * 100}%`;
  $("#min-label").textContent = rupees(min);
  $("#max-label").textContent = rupees(max);
  $("#price-summary").textContent = `${rupees(min)} – ${rupees(max)}`;
  renderListings();
}

function clearFilters() {
  activeFilters = { location: "", type: "", min: initialPriceRange.min, max: initialPriceRange.max, beds: "", area: "" };
  $("#filter-location").value = "";
  $("#filter-type").value = "";
  $("#filter-beds").value = "";
  $("#filter-area").value = "";
  $("#hero-location").value = "";
  $("#hero-type").value = "";
  $("#price-min").value = String(initialPriceRange.min);
  $("#price-max").value = String(initialPriceRange.max);
  $("#sort-select").value = "recommended";
  updatePriceRange();
}

function persistUserListings() {
  try {
    localStorage.setItem(userListingsKey, JSON.stringify(userListings));
    return true;
  } catch (error) {
    console.warn("Your changes are available until the page is closed, but could not be saved in this browser.", error);
    return false;
  }
}

function renderSellerDashboard() {
  $("#seller-listing-count").textContent = String(userListings.length);
  $("#seller-active-count").textContent = String(userListings.filter(hasAvailableListing).length);
  const container = $("#seller-listings");
  if (!userListings.length) {
    container.innerHTML = `<div class="account-empty"><span>⌂</span><h2>No properties posted yet</h2><p>When you post a property, you can preview and manage it here.</p><a class="button button-green" href="#post">Post your first property <span>→</span></a></div>`;
    return;
  }
  container.innerHTML = `<div class="seller-table-wrap"><table class="seller-table"><thead><tr><th>Property</th><th>Type</th><th>Availability</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead><tbody>${userListings.map((property) => {
    const listingType = listingTypeOf(property);
    const actions = [
      ...(listingType !== "rent" ? [`<button type="button" class="seller-action" data-toggle-sale="${escapeHTML(property.id)}">${saleStatusOf(property) === "sold" ? "Relist sale" : "Mark sold"}</button>`] : []),
      ...(listingType !== "sale" ? [`<button type="button" class="seller-action" data-toggle-rent="${escapeHTML(property.id)}">${rentStatusOf(property) === "occupied" ? "Relist rental" : "Mark occupied"}</button>`] : [])
    ].join("");
    const archived = !hasAvailableListing(property);
    return `<tr data-seller-listing="${escapeHTML(property.id)}" class="${archived ? "seller-row-sold" : ""}"><td><strong>${escapeHTML(property.title)}</strong><small>${escapeHTML(property.location)}</small></td><td>${escapeHTML(property.type)}</td><td>${escapeHTML(listingStatusesLabel(property))}</td><td>${listingPriceSummary(property)}</td><td><span class="seller-status ${archived ? "seller-status-sold" : "seller-status-active"}">${archived ? "History" : "Active"}</span></td><td class="seller-actions"><button type="button" class="seller-action" data-preview="${escapeHTML(property.id)}">Preview</button><button type="button" class="seller-action" data-edit="${escapeHTML(property.id)}">Edit</button>${actions}<button type="button" class="seller-action seller-action-delete" data-delete="${escapeHTML(property.id)}">Delete</button></td></tr>`;
  }).join("")}</tbody></table></div>`;
  $$("[data-preview]", container).forEach((button) => button.addEventListener("click", () => navigate("detail", button.dataset.preview)));
  $$("[data-edit]", container).forEach((button) => button.addEventListener("click", () => editProperty(button.dataset.edit)));
  $$("[data-toggle-sale]", container).forEach((button) => button.addEventListener("click", () => toggleListingAvailability(button.dataset.toggleSale, "sale")));
  $$("[data-toggle-rent]", container).forEach((button) => button.addEventListener("click", () => toggleListingAvailability(button.dataset.toggleRent, "rent")));
  $$("[data-delete]", container).forEach((button) => button.addEventListener("click", () => deleteProperty(button.dataset.delete)));
}

function renderHistory() {
  const archivedListings = userListings.filter(isArchivedListing);
  const container = $("#history-listings");
  container.innerHTML = archivedListings.map((property) => {
    const photos = Array.isArray(property.photos) ? property.photos : [];
    const cover = photos[0] || properties[0].photos[0];
    const photoStrip = photos.length > 1
      ? `<div class="history-photo-strip">${photos.slice(1).map((photo, index) => `<img src="${escapeHTML(photo)}" alt="${escapeHTML(property.title)} photo ${index + 2}" loading="lazy" />`).join("")}</div>`
      : "";
    return `<article class="listing-card">
      <div class="listing-photo-wrap"><img class="listing-photo" src="${escapeHTML(cover)}" alt="${escapeHTML(property.title)}" loading="lazy" /><span class="photo-count">${photos.length} ${photos.length === 1 ? "photo" : "photos"}</span><span class="listing-badge">${escapeHTML(listingStatusesLabel(property))}</span></div>
      <div class="listing-info"><div class="listing-price">${listingPriceSummary(property)}</div><h3 class="listing-title">${escapeHTML(property.title)}</h3><div class="listing-location">⌖ &nbsp;${escapeHTML(property.location)}</div>${photoStrip}</div>
    </article>`;
  }).join("");
  const sampleStatuses = ["Sold", "Occupied", "Sold"];
  $("#history-sample-cards").innerHTML = properties.slice(0, 3).map((property, index) => `
    <article class="history-sample">
      <div class="history-sample-photo">
        <img src="${escapeHTML(property.photos[0])}" alt="${escapeHTML(property.title)}" loading="lazy" />
        <span class="history-sample-status">${sampleStatuses[index]}</span>
      </div>
      <div><h3>${escapeHTML(property.title)}</h3><p>${escapeHTML(property.location)}</p></div>
    </article>`).join("");
  container.classList.toggle("hidden", archivedListings.length === 0);
  $("#history-empty").classList.toggle("hidden", archivedListings.length !== 0);
  $("#history-samples").classList.toggle("hidden", archivedListings.length !== 0);
}

function renderReviews() {
  const count = communityReviews.length;
  const average = count ? communityReviews.reduce((sum, review) => sum + Number(review.rating), 0) / count : 0;
  $("#review-summary").innerHTML = count
    ? `<strong class="review-average">${average.toFixed(1)}</strong><span><span class="review-stars" aria-label="${average.toFixed(1)} out of 5 stars">${"★".repeat(Math.round(average))}${"☆".repeat(5 - Math.round(average))}</span><small>${count} ${count === 1 ? "community review" : "community reviews"}</small></span>`
    : `<strong class="review-average">—</strong><span><span class="review-stars" aria-label="No ratings yet">☆☆☆☆☆</span><small>Be the first to review Houzio</small></span>`;
  $("#review-list").innerHTML = count
    ? communityReviews.map((review) => `<article class="review-card"><div class="review-card-stars" aria-label="${Number(review.rating)} out of 5 stars">${"★".repeat(Number(review.rating))}${"☆".repeat(5 - Number(review.rating))}</div><h2>${escapeHTML(review.name)}</h2><p>${escapeHTML(review.message)}</p><small>${escapeHTML(review.date || "")}</small></article>`).join("")
    : `<div class="review-empty">No reviews yet. Share your experience to help the Houzio community.</div>`;
}

function saveCommunityReviews() {
  try {
    localStorage.setItem(reviewsKey, JSON.stringify(communityReviews));
    return true;
  } catch (error) {
    console.warn("Your review could not be saved in this browser.", error);
    return false;
  }
}

function toggleListingAvailability(id, mode) {
  const property = userListings.find((item) => item.id === id);
  if (!property) return;
  const statusKey = mode === "sale" ? "saleStatus" : "rentStatus";
  const unavailableStatus = mode === "sale" ? "sold" : "occupied";
  property[statusKey] = property[statusKey] === unavailableStatus ? "active" : unavailableStatus;
  listings = listings.map((item) => item.id === id ? { ...item, [statusKey]: property[statusKey] } : item);
  persistUserListings();
  renderSellerDashboard();
  renderFeatured();
  renderListings();
}

function editProperty(id) {
  const property = userListings.find((item) => item.id === id);
  if (!property) return;
  editingListingId = property.id;
  const form = $("#post-form");
  form.elements.listingType.value = listingTypeOf(property);
  form.elements.type.value = property.type;
  form.elements.title.value = property.title;
  form.elements.description.value = property.description;
  form.elements.salePrice.value = property.salePrice ?? (listingTypeOf(property) !== "rent" ? property.price : "");
  form.elements.rentPrice.value = property.rentPrice ?? (listingTypeOf(property) === "rent" ? property.price : "");
  updateListingPriceFields();
  form.elements.beds.value = property.beds ?? "";
  form.elements.baths.value = property.baths ?? "";
  form.elements.area.value = property.area;
  form.elements.address.value = property.address;
  form.elements.location.value = property.location;
  form.elements.mapLocation.value = property.mapLocation || "";
  form.elements.showAddress.checked = property.showAddress;
  form.elements.owner.value = property.owner;
  form.elements.phone.value = property.phone;
  uploadedPhotos = property.photos || [];
  $("#photo-names").textContent = uploadedPhotos.length ? `${uploadedPhotos.length} existing photo${uploadedPhotos.length === 1 ? "" : "s"}; select new photos to replace` : "";
  $("#form-heading").textContent = "Edit property details";
  $("#form-submit-button").innerHTML = "Save changes <span>→</span>";
  $("#cancel-edit").classList.remove("hidden");
  navigate("post");
}

function cancelEdit() {
  editingListingId = null;
  uploadedPhotos = [];
  $("#post-form").reset();
  updateListingPriceFields();
  $("#photo-names").textContent = "";
  $("#form-heading").textContent = "Property details";
  $("#form-submit-button").innerHTML = "Preview your listing <span>→</span>";
  $("#cancel-edit").classList.add("hidden");
  navigate("account");
}

function deleteProperty(id) {
  const property = userListings.find((item) => item.id === id);
  if (!property || !window.confirm(`Delete "${property.title}" from your listings?`)) return;
  userListings = userListings.filter((item) => item.id !== id);
  listings = listings.filter((item) => item.id !== id);
  persistUserListings();
  renderSellerDashboard();
  renderFeatured();
}

function setHashRoute() {
  const route = window.location.hash.slice(1);
  if (!route || route === "home") navigate("home");
  else if (route.startsWith("detail/")) navigate("detail", decodeURIComponent(route.slice(7)));
  else navigate(route);
}

$("#hero-search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const search = new URLSearchParams();
  const location = $("#hero-location").value.trim();
  const type = $("#hero-type").value;
  if (location) search.set("location", location);
  if (type) search.set("type", type);
  const query = search.toString();
  window.location.href = `${isRentPage ? "rent.html" : "buy.html"}${query ? `?${query}` : ""}`;
});
$("#filter-location").addEventListener("input", (event) => {
  activeFilters.location = event.target.value.trim();
  renderListings();
});
$("#filter-type").addEventListener("change", (event) => {
  activeFilters.type = event.target.value;
  renderListings();
});
$("#filter-beds").addEventListener("change", (event) => {
  activeFilters.beds = event.target.value;
  renderListings();
});
$("#filter-area").addEventListener("change", (event) => {
  activeFilters.area = event.target.value;
  renderListings();
});
$("#sort-select").addEventListener("change", renderListings);
$("#price-min").addEventListener("input", updatePriceRange);
$("#price-max").addEventListener("input", updatePriceRange);
$("#clear-filters").addEventListener("click", clearFilters);
$("#empty-clear").addEventListener("click", clearFilters);

updateListingPriceFields();
$("#listing-type").addEventListener("change", updateListingPriceFields);

$("#post-form").elements.photos.addEventListener("change", async (event) => {
  const files = [...event.target.files].slice(0, 6);
  uploadedPhotos = await Promise.all(files.map((file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  })));
  uploadedPhotos = uploadedPhotos.filter(Boolean);
  $("#photo-names").textContent = files.length ? `${files.length} photo${files.length === 1 ? "" : "s"} selected` : "";
});

$("#review-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  communityReviews.unshift({
    id: `review-${Date.now()}`,
    name: String(data.get("name")).trim(),
    rating: Number(data.get("rating")),
    message: String(data.get("message")).trim(),
    date: new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date())
  });
  if (saveCommunityReviews()) {
    form.reset();
    $("#review-message").textContent = "Thanks for sharing your review!";
  } else {
    communityReviews.shift();
    $("#review-message").textContent = "Your review could not be saved. Please try again.";
  }
  renderReviews();
});

$("#post-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const listingType = String(data.get("listingType"));
  const salePrice = listingType === "rent" ? null : Number(data.get("salePrice"));
  const rentPrice = listingType === "sale" ? null : Number(data.get("rentPrice"));
  const existingListing = userListings.find((item) => item.id === editingListingId);
  const newListing = {
    id: editingListingId || `owner-${Date.now()}`,
    listingType,
    title: String(data.get("title")).trim(),
    type: String(data.get("type")),
    price: salePrice ?? rentPrice,
    salePrice,
    rentPrice,
    location: String(data.get("location")).trim(),
    address: String(data.get("address")).trim(),
    mapLocation: String(data.get("mapLocation") || "").trim(),
    saleStatus: salePrice === null ? null : existingListing?.saleStatus || "active",
    rentStatus: rentPrice === null ? null : existingListing?.rentStatus || "active",
    showAddress: data.has("showAddress"),
    beds: data.get("beds") ? Number(data.get("beds")) : null,
    baths: data.get("baths") ? Number(data.get("baths")) : null,
    area: Number(data.get("area")),
    owner: String(data.get("owner")).trim(),
    phone: String(data.get("phone")).trim(),
    description: String(data.get("description")).trim(),
    photos: uploadedPhotos.length ? uploadedPhotos : [properties[0].photos[0]]
  };
  if (editingListingId) {
    listings = listings.map((item) => item.id === editingListingId ? newListing : item);
    userListings = userListings.map((item) => item.id === editingListingId ? newListing : item);
  } else {
    listings.unshift(newListing);
    userListings.unshift(newListing);
  }
  persistUserListings();
  editingListingId = null;
  form.reset();
  updateListingPriceFields();
  uploadedPhotos = [];
  $("#photo-names").textContent = "";
  $("#form-heading").textContent = "Property details";
  $("#form-submit-button").innerHTML = "Preview your listing <span>→</span>";
  $("#cancel-edit").classList.add("hidden");
  renderFeatured();
  renderSellerDashboard();
  navigate("detail", newListing.id);
});

$("#cancel-edit").addEventListener("click", cancelEdit);
window.addEventListener("hashchange", () => {
  const route = window.location.hash.slice(1);
  if (!route || route === "home") navigate("home");
  else if (route.startsWith("detail/")) navigate("detail", decodeURIComponent(route.slice(7)));
  else navigate(route);
});

const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("location") || searchParams.has("type")) {
  activeFilters.location = searchParams.get("location") || "";
  activeFilters.type = searchParams.get("type") || "";
  $("#filter-location").value = activeFilters.location;
  $("#filter-type").value = activeFilters.type;
  $("#hero-location").value = activeFilters.location;
  $("#hero-type").value = activeFilters.type;
}

renderFeatured();
updatePriceRange();
if (window.location.hash) {
  const route = window.location.hash.slice(1);
  if (route.startsWith("detail/")) navigate("detail", decodeURIComponent(route.slice(7)));
  else navigate(route);
} else {
  const file = window.location.pathname.split("/").pop().toLowerCase();
  const initialPage = {
    "buy.html": "listings",
    "rent.html": "listings",
    "post.html": "post",
    "about.html": "about",
    "contact.html": "contact",
    "reviews.html": "reviews",
    "account.html": "account",
    "history.html": "history"
  }[file] || "home";
  navigate(initialPage);
}