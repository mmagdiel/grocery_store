(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();const d=[{id:1,name:"Mango Tommy",category:"frutas",price:3500,unit:"kg",image:"https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80",description:"Mangos frescos y dulces, perfectos para jugos o comer directamente.",inStock:!0,featured:!0},{id:2,name:"Banano",category:"frutas",price:2500,unit:"kg",image:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80",description:"Bananos maduros de la mejor calidad.",inStock:!0},{id:3,name:"Papaya",category:"frutas",price:4e3,unit:"kg",image:"https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=400&q=80",description:"Papaya fresca y dulce, rica en vitaminas.",inStock:!0},{id:4,name:"Piña",category:"frutas",price:5e3,unit:"unidad",image:"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&q=80",description:"Piña madura y jugosa.",inStock:!0},{id:5,name:"Guayaba",category:"frutas",price:3e3,unit:"kg",image:"https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=400&q=80",description:"Guayabas frescas para jugos o postres.",inStock:!0},{id:6,name:"Tomate",category:"verduras",price:2800,unit:"kg",image:"https://serreslavoie.com/cdn/shop/articles/shutterstock_267812054.jpg?crop=center&height=1023&v=1652289544&width=1540",description:"Tomates frescos y rojos, ideales para ensaladas.",inStock:!0,featured:!0},{id:7,name:"Cebolla Cabezona",category:"verduras",price:2200,unit:"kg",image:"https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&q=80",description:"Cebolla fresca para tus preparaciones.",inStock:!0},{id:8,name:"Zanahoria",category:"verduras",price:2500,unit:"kg",image:"https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80",description:"Zanahorias frescas y crujientes.",inStock:!0},{id:9,name:"Lechuga",category:"verduras",price:2e3,unit:"unidad",image:"https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&q=80",description:"Lechuga fresca para ensaladas.",inStock:!0},{id:10,name:"Papa Criolla",category:"verduras",price:3500,unit:"kg",image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80",description:"Papa criolla colombiana, perfecta para freír.",inStock:!0},{id:11,name:"Pechuga de Pollo",category:"carnes",price:12e3,unit:"kg",image:"https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80",description:"Pechuga de pollo fresca y sin hueso.",inStock:!0,featured:!0},{id:12,name:"Carne Molida",category:"carnes",price:15e3,unit:"kg",image:"https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&q=80",description:"Carne molida de res, ideal para hamburguesas.",inStock:!0},{id:13,name:"Costilla de Cerdo",category:"carnes",price:18e3,unit:"kg",image:"https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&q=80",description:"Costillas de cerdo frescas para asar.",inStock:!0},{id:14,name:"Chuleta de Cerdo",category:"carnes",price:16e3,unit:"kg",image:"https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80",description:"Chuletas de cerdo jugosas.",inStock:!0},{id:15,name:"Chorizo",category:"carnes",price:14e3,unit:"kg",image:"https://images.unsplash.com/photo-1613564834361-9436948817d1?w=400&q=80",description:"Chorizo artesanal colombiano.",inStock:!0},{id:16,name:"Leche Entera",category:"lacteos",price:3500,unit:"litro",image:"https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",description:"Leche fresca entera.",inStock:!0},{id:17,name:"Queso Campesino",category:"lacteos",price:8e3,unit:"500g",image:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80",description:"Queso campesino fresco y artesanal.",inStock:!0,featured:!0},{id:18,name:"Yogurt Natural",category:"lacteos",price:4500,unit:"litro",image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",description:"Yogurt natural sin azúcar.",inStock:!0},{id:19,name:"Mantequilla",category:"lacteos",price:6e3,unit:"500g",image:"https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80",description:"Mantequilla cremosa.",inStock:!0},{id:20,name:"Cuajada",category:"lacteos",price:7e3,unit:"500g",image:"https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&q=80",description:"Cuajada fresca colombiana.",inStock:!0},{id:21,name:"Pan Francés",category:"panaderia",price:500,unit:"unidad",image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",description:"Pan francés recién horneado.",inStock:!0},{id:22,name:"Pandebono",category:"panaderia",price:1500,unit:"unidad",image:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&q=80",description:"Pandebono tradicional colombiano.",inStock:!0,featured:!0},{id:23,name:"Almojábana",category:"panaderia",price:1800,unit:"unidad",image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",description:"Almojábana fresca de queso.",inStock:!0},{id:24,name:"Buñuelo",category:"panaderia",price:1200,unit:"unidad",image:"https://media.istockphoto.com/id/1351588746/es/foto/bu%C3%B1uelos-cocina-navide%C3%B1a-colombiana-pan-de-queso-frito.jpg?s=612x612&w=0&k=20&c=pjkr5LdTuty41J4tKOgx2t1TWgoWzcZyeY5Tq13q0Bk=",description:"Buñuelos colombianos crujientes.",inStock:!0},{id:25,name:"Pan Integral",category:"panaderia",price:8e3,unit:"unidad",image:"https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&q=80",description:"Pan integral artesanal.",inStock:!0},{id:26,name:"Arroz",category:"despensa",price:4500,unit:"kg",image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",description:"Arroz blanco de primera calidad.",inStock:!0},{id:27,name:"Frijol",category:"despensa",price:5e3,unit:"kg",image:"https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=400&q=80",description:"Frijol rojo colombiano.",inStock:!0},{id:28,name:"Aceite de Cocina",category:"despensa",price:12e3,unit:"litro",image:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80",description:"Aceite vegetal para cocinar.",inStock:!0},{id:29,name:"Panela",category:"despensa",price:3e3,unit:"500g",image:"https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400&q=80",description:"Panela colombiana pura.",inStock:!0},{id:30,name:"Café Colombiano",category:"despensa",price:15e3,unit:"500g",image:"https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80",description:"Café colombiano premium molido.",inStock:!0,featured:!0}],u=document.querySelector("#app");u&&(u.innerHTML=`
    <!-- Navigation -->
    <div class="navbar bg-base-100 shadow-lg sticky top-0 z-50 px-2">
      <div class="flex-1 min-w-0">
        <a href="#" class="text-lg md:text-2xl font-bold text-primary truncate">
          🏪 La Esquina del Sabor
        </a>
      </div>
      <div class="flex gap-1 md:gap-2">
        <div class="form-control hidden sm:block">
          <input 
            type="text" 
            id="searchInput"
            placeholder="Buscar productos..." 
            class="input input-bordered w-32 sm:w-48 md:w-64 search-input" 
          />
        </div>
        <button class="btn btn-ghost btn-circle btn-sm md:btn-md" id="cartBtn">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="badge badge-xs md:badge-sm badge-primary indicator-item cart-badge" id="cartCount">0</span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Search (visible only on small screens) -->
    <div class="sm:hidden bg-base-100 px-4 py-2 shadow">
      <input 
        type="text" 
        id="searchInputMobile"
        placeholder="Buscar productos..." 
        class="input input-bordered w-full search-input" 
      />
    </div>

    <!-- Hero Section -->
    <section class="hero min-h-[50vh] md:min-h-[60vh] relative overflow-hidden" style="background-image: url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80');">
      <div class="hero-overlay"></div>
      <div class="hero-content text-center text-neutral-content px-4">
        <div class="max-w-2xl">
          <h1 class="mb-3 md:mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            La Esquina del Sabor
          </h1>
          <p class="mb-3 md:mb-5 text-lg sm:text-xl md:text-2xl text-white drop-shadow-md">
            Frescura y tradición, cerquita de tu corazón
          </p>
          <p class="mb-6 md:mb-8 text-base md:text-lg text-white/90 px-4">
            Tu tienda de barrio de confianza. Frutas, verduras, carnes, lácteos y más.
          </p>
          <button class="btn btn-primary btn-md md:btn-lg" onclick="document.getElementById('products').scrollIntoView({behavior: 'smooth'})">
            Ver Productos
          </button>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="bg-base-200 py-4 md:py-6 overflow-x-auto">
      <div class="container mx-auto px-2 md:px-4">
        <div class="flex flex-nowrap md:flex-wrap gap-2 justify-start md:justify-center min-w-max md:min-w-0" id="categoryFilter">
          <button class="btn btn-xs md:btn-sm category-badge whitespace-nowrap" data-category="all">Todos</button>
          <button class="btn btn-xs md:btn-sm btn-outline category-badge whitespace-nowrap" data-category="frutas">🍎 Frutas</button>
          <button class="btn btn-xs md:btn-sm btn-outline category-badge whitespace-nowrap" data-category="verduras">🥬 Verduras</button>
          <button class="btn btn-xs md:btn-sm btn-outline category-badge whitespace-nowrap" data-category="carnes">🥩 Carnes</button>
          <button class="btn btn-xs md:btn-sm btn-outline category-badge whitespace-nowrap" data-category="lacteos">🥛 Lácteos</button>
          <button class="btn btn-xs md:btn-sm btn-outline category-badge whitespace-nowrap" data-category="panaderia">🥖 Panadería</button>
          <button class="btn btn-xs md:btn-sm btn-outline category-badge whitespace-nowrap" data-category="despensa">🛒 Despensa</button>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-12" id="products">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-8 text-primary">Nuestros Productos</h2>
        <div id="productGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <!-- Products will be loaded here -->
        </div>
      </div>
    </section>

    <!-- WhatsApp Floating Button -->
    <a 
      href="https://wa.me/573001234567?text=Hola,%20quiero%20hacer%20un%20pedido" 
      target="_blank"
      class="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg whatsapp-pulse z-50 transition-all hover:scale-110"
      title="Contactar por WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>

    <!-- Cart Modal -->
    <dialog id="cartModal" class="modal">
      <div class="modal-box max-w-2xl">
        <h3 class="font-bold text-2xl mb-4">🛒 Tu Carrito</h3>
        <div id="cartItems" class="space-y-4 mb-6">
          <!-- Cart items will be loaded here -->
        </div>
        <div class="divider"></div>
        <div class="flex justify-between items-center text-xl font-bold mb-4">
          <span>Total:</span>
          <span id="cartTotal">$0</span>
        </div>
        <div class="modal-action">
          <button class="btn" onclick="document.getElementById('cartModal').close()">Cerrar</button>
          <button class="btn btn-primary" id="checkoutBtn">
            Hacer Pedido por WhatsApp
          </button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

    <!-- Product Detail Modal -->
    <dialog id="productModal" class="modal">
      <div class="modal-box max-w-3xl">
        <div id="productDetail">
          <!-- Product details will be loaded here -->
        </div>
        <div class="modal-action">
          <button class="btn" onclick="document.getElementById('productModal').close()">Cerrar</button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

    <!-- Footer -->
    <footer class="footer footer-center p-10 bg-base-200 text-base-content mt-12">
      <aside>
        <p class="text-2xl font-bold text-primary">🏪 La Esquina del Sabor</p>
        <p class="text-lg">Frescura y tradición, cerquita de tu corazón</p>
        <p class="mt-4">📍 Calle 45 #23-15, Barrio El Poblado</p>
        <p>📞 +57 300 123 4567</p>
        <p>🕐 Lunes a Sábado: 7:00 AM - 8:00 PM | Domingo: 8:00 AM - 2:00 PM</p>
      </aside>
    </footer>
  `);function m(t){return new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}).format(t)}function b(t){return`
    <div class="card bg-base-100 shadow-xl product-card cursor-pointer" data-product-id="${t.id}">
      <figure class="h-48 overflow-hidden">
        <img src="${t.image}" alt="${t.name}" class="w-full h-full object-cover" />
      </figure>
      <div class="card-body p-4">
        <h3 class="card-title text-lg">${t.name}</h3>
        <p class="text-sm text-base-content/70 line-clamp-2">${t.description}</p>
        <div class="flex justify-between items-center mt-2">
          <span class="text-xl font-bold text-primary">${m(t.price)}</span>
          <span class="text-sm text-base-content/60">/${t.unit}</span>
        </div>
        <div class="card-actions justify-end mt-2">
          <button class="btn btn-primary btn-sm add-to-cart" data-product-id="${t.id}">
            Agregar
          </button>
        </div>
      </div>
    </div>
  `}function l(t=d){const e=document.getElementById("productGrid");if(e){if(t.length===0){e.innerHTML=`
      <div class="col-span-full text-center py-12">
        <p class="text-xl text-base-content/60">No se encontraron productos</p>
      </div>
    `;return}e.innerHTML=t.map(b).join("")}}l();let r="all",n="";function g(){return d.filter(t=>{const e=r==="all"||t.category===r,o=n===""||t.name.toLowerCase().includes(n.toLowerCase())||t.description.toLowerCase().includes(n.toLowerCase());return e&&o})}function h(){document.querySelectorAll("[data-category]").forEach(e=>{e.getAttribute("data-category")===r?(e.classList.remove("btn-outline"),e.classList.add("btn-primary")):(e.classList.add("btn-outline"),e.classList.remove("btn-primary"))})}function f(t){const o=t.target.closest("[data-category]");o&&(r=o.getAttribute("data-category")||"all",h(),l(g()))}function p(t){n=t.target.value,l(g())}function y(){const t=document.getElementById("categoryFilter");t&&t.addEventListener("click",f);const e=document.getElementById("searchInput");e&&e.addEventListener("input",p);const o=document.getElementById("searchInputMobile");o&&o.addEventListener("input",p);const i=document.getElementById("productGrid");i&&i.addEventListener("click",w)}y();function v(t){const e=d.find(a=>a.id===t);if(!e)return;const o=document.getElementById("productModal"),i=document.getElementById("productDetail");!o||!i||(i.innerHTML=`
    <div class="flex flex-col md:flex-row gap-6">
      <div class="md:w-1/2">
        <img src="${e.image}" alt="${e.name}" class="w-full rounded-lg shadow-lg" />
      </div>
      <div class="md:w-1/2">
        <h2 class="text-3xl font-bold mb-2">${e.name}</h2>
        <div class="badge badge-primary mb-4">${x(e.category)}</div>
        <p class="text-base-content/70 mb-4">${e.description}</p>
        
        <div class="bg-base-200 p-4 rounded-lg mb-4">
          <div class="flex justify-between items-center">
            <span class="text-lg">Precio:</span>
            <span class="text-3xl font-bold text-primary">${m(e.price)}</span>
          </div>
          <div class="text-sm text-base-content/60 text-right">por ${e.unit}</div>
        </div>

        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Cantidad</span>
          </label>
          <div class="flex gap-2 items-center">
            ${e.inStock?'<div class="alert alert-success"><span>✓ Disponible</span></div>':'<div class="alert alert-warning"><span>⚠ Agotado</span></div>'}
            <button class="btn btn-circle btn-sm" onclick="decrementQuantity()">-</button>
            <input 
              type="number" 
              id="quantityInput" 
              value="1" 
              min="1" 
              max="100"
              class="input input-bordered w-20 text-center weight-input"
            />
            <button class="btn btn-circle btn-sm" onclick="incrementQuantity()">+</button>

          </div>
        </div>

        <div class="flex gap-2">
          <button class="btn btn-primary flex-1" onclick="addToCartFromDetail(${e.id})">
            Agregar al Carrito
          </button>
        </div>

      </div>
    </div>
  `,o.showModal())}function x(t){return{frutas:"🍎 Frutas",verduras:"🥬 Verduras",carnes:"🥩 Carnes",lacteos:"🥛 Lácteos",panaderia:"🥖 Panadería",despensa:"🛒 Despensa"}[t]||t}window.incrementQuantity=function(){const t=document.getElementById("quantityInput");t&&(t.value=String(Math.min(100,parseInt(t.value)+1)))};window.decrementQuantity=function(){const t=document.getElementById("quantityInput");t&&(t.value=String(Math.max(1,parseInt(t.value)-1)))};function w(t){const e=t.target,o=e.closest("[data-product-id]");if(!(e.classList.contains("add-to-cart")||e.closest(".add-to-cart"))&&o){const i=parseInt(o.getAttribute("data-product-id")||"0");v(i)}}
