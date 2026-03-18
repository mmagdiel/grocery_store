import "./styles.css";
import { fetchProducts } from "./pocketbaseClient";
import type { Product } from "./uiProduct";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
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
  `;
}

/*
<nav>
  <div class="grid grid-flow-col gap-4">
    <a href="#" class="link link-hover">Facebook</a>
    <a href="#" class="link link-hover">Instagram</a>
    <a href="#" class="link link-hover">WhatsApp</a>
  </div>
</nav>
<aside>
  <p>© 2024 La Esquina del Sabor. Todos los derechos reservados.</p>
</aside>
*/


// Format price in Colombian pesos
function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);
}

// Render product card
function renderProductCard(product: Product): string {
  const imageUrl = product.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80";
  console.log(product.image)
  return `
    <div class="card bg-base-100 shadow-xl product-card cursor-pointer" data-product-id="${product.id}">
      <figure class="h-48 overflow-hidden">
        <img src="${imageUrl}" alt="${product.name}" class="w-full h-full object-cover" />
      </figure>
      <div class="card-body p-4">
        <h3 class="card-title text-lg">${product.name}</h3>
        <p class="text-sm text-base-content/70 line-clamp-2">${product.description}</p>
        <div class="flex justify-between items-center mt-2">
          <span class="text-xl font-bold text-primary">${formatPrice(product.price)}</span>
          <span class="text-sm text-base-content/60">/${product.unit}</span>
        </div>
        <div class="card-actions justify-end mt-2">
          <button class="btn btn-primary btn-sm add-to-cart" data-product-id="${product.id}">
            Agregar
          </button>
        </div>
      </div>
    </div>
  `;
}

// Render all products
function renderProducts(productsToRender: Product[]): void {
  const productGrid = document.getElementById("productGrid");
  if (!productGrid) return;

  if (productsToRender.length === 0) {
    productGrid.innerHTML = `
      <div class="col-span-full text-center py-12">
        <p class="text-xl text-base-content/60">No se encontraron productos</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = productsToRender.map(renderProductCard).join("");
}

function renderLoading(): void {
  const productGrid = document.getElementById("productGrid");
  if (!productGrid) return;

  productGrid.innerHTML = `
    <div class="col-span-full text-center py-12">
      <span class="loading loading-spinner loading-lg"></span>
      <p class="mt-4 text-base-content/60">Cargando productos...</p>
    </div>
  `;
}

function renderError(message: string): void {
  const productGrid = document.getElementById("productGrid");
  if (!productGrid) return;

  productGrid.innerHTML = `
    <div class="col-span-full text-center py-12">
      <div class="alert alert-error inline-flex">
        <span>${message}</span>
      </div>
    </div>
  `;
}


// State management
let currentCategory = "all";
let searchQuery = "";
let allProducts: Product[] = [];

// Filter products based on category and search
function filterProducts(): Product[] {
  return allProducts.filter((product) => {
    const matchesCategory =
      currentCategory === "all" || product.category === currentCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

// Update category filter UI
function updateCategoryButtons(): void {
  const buttons = document.querySelectorAll("[data-category]");
  buttons.forEach((button) => {
    const category = button.getAttribute("data-category");
    if (category === currentCategory) {
      button.classList.remove("btn-outline");
      button.classList.add("btn-primary");
    } else {
      button.classList.add("btn-outline");
      button.classList.remove("btn-primary");
    }
  });
}

// Handle category filter click
function handleCategoryClick(event: Event): void {
  const target = event.target as HTMLElement;
  const button = target.closest("[data-category]") as HTMLElement;
  if (!button) return;

  currentCategory = button.getAttribute("data-category") || "all";
  updateCategoryButtons();
  renderProducts(filterProducts());
}

// Handle search input
function handleSearch(event: Event): void {
  const input = event.target as HTMLInputElement;
  searchQuery = input.value;
  renderProducts(filterProducts());
}

// Setup event listeners
function setupEventListeners(): void {
  // Category filter
  const categoryFilter = document.getElementById("categoryFilter");
  if (categoryFilter) {
    categoryFilter.addEventListener("click", handleCategoryClick);
  }

  // Search input (desktop)
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }

  // Search input (mobile)
  const searchInputMobile = document.getElementById("searchInputMobile");
  if (searchInputMobile) {
    searchInputMobile.addEventListener("input", handleSearch);
  }

  // Product card clicks
  const productGrid = document.getElementById("productGrid");
  if (productGrid) {
    productGrid.addEventListener("click", handleProductClick);
  }
}

// Initialize event listeners
setupEventListeners();


// Show product detail modal
function showProductDetail(productId: string): void {
  const product = allProducts.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("productModal") as HTMLDialogElement;
  const productDetail = document.getElementById("productDetail");
  if (!modal || !productDetail) return;

  productDetail.innerHTML = `
    <div class="flex flex-col md:flex-row gap-6">
      <div class="md:w-1/2">
        <img src="${product.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"}" alt="${product.name}" class="w-full rounded-lg shadow-lg" />
      </div>
      <div class="md:w-1/2">
        <h2 class="text-3xl font-bold mb-2">${product.name}</h2>
        <div class="badge badge-primary mb-4">${getCategoryName(product)}</div>
        <p class="text-base-content/70 mb-4">${product.description}</p>
        
        <div class="bg-base-200 p-4 rounded-lg mb-4">
          <div class="flex justify-between items-center">
            <span class="text-lg">Precio:</span>
            <span class="text-3xl font-bold text-primary">${formatPrice(product.price)}</span>
          </div>
          <div class="text-sm text-base-content/60 text-right">por ${product.unit}</div>
        </div>

        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Cantidad</span>
          </label>
          <div class="flex gap-2 items-center">
            ${product.inStock ? 
              '<div class="alert alert-success"><span>✓ Disponible</span></div>' : 
              '<div class="alert alert-warning"><span>⚠ Agotado</span></div>'
            }
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
          <button class="btn btn-primary flex-1" onclick="addToCartFromDetail('${product.id}')">
            Agregar al Carrito
          </button>
        </div>

      </div>
    </div>
  `;

  modal.showModal();
}

// Get category display name
function getCategoryName(product: Product): string {
  if (product.categoryName && product.categoryName.trim().length > 0) {
    return product.categoryName;
  }

  const categoryNames: Record<string, string> = {
    frutas: "🍎 Frutas",
    verduras: "🥬 Verduras",
    carnes: "🥩 Carnes",
    lacteos: "🥛 Lácteos",
    panaderia: "🥖 Panadería",
    despensa: "🛒 Despensa",
  };
  return categoryNames[product.category] || product.category;
}

// Quantity controls for product detail
(window as any).incrementQuantity = function() {
  const input = document.getElementById("quantityInput") as HTMLInputElement;
  if (input) {
    input.value = String(Math.min(100, parseInt(input.value) + 1));
  }
};

(window as any).decrementQuantity = function() {
  const input = document.getElementById("quantityInput") as HTMLInputElement;
  if (input) {
    input.value = String(Math.max(1, parseInt(input.value) - 1));
  }
};

// Handle product card click
function handleProductClick(event: Event): void {
  const target = event.target as HTMLElement;
  const card = target.closest("[data-product-id]") as HTMLElement;
  
  // Don't open modal if clicking the "Agregar" button
  if (target.classList.contains("add-to-cart") || target.closest(".add-to-cart")) {
    return;
  }
  
  if (card) {
    const productId = card.getAttribute("data-product-id") || "";
    if (!productId) return;
    showProductDetail(productId);
  }
}

async function initProducts(): Promise<void> {
  renderLoading();

  try {
    allProducts = await fetchProducts();
    renderProducts(filterProducts());
  } catch {
    renderError("No se pudieron cargar los productos. Verifica que PocketBase esté corriendo.");
  }
}

initProducts();
