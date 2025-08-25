document.addEventListener("DOMContentLoaded", () => {
    // ================== ANIMACIÓN DE PRODUCTOS ==================
    const productos = document.querySelectorAll(".producto");
    productos.forEach((prod, i) => {
        prod.style.opacity = 0;
        prod.style.transform = "translateY(20px)";
        setTimeout(() => {
            prod.style.transition = "all 0.5s ease";
            prod.style.opacity = 1;
            prod.style.transform = "translateY(0)";
        }, i * 150);
    });

    // ================== BUSCADOR (solo si existe tabla) ==================
    const searchInput = document.getElementById("searchInput");
    const table = document.getElementById("productTable");
    const noResult = document.getElementById("noResult");

    if (searchInput && table && noResult) {
        const normalize = str => str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        searchInput.addEventListener("input", () => {
            const filter = normalize(searchInput.value);
            let found = false;

            const rows = table.getElementsByTagName("tr");
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                const text = normalize(row.innerText);

                if (text.includes(filter)) {
                    row.style.display = "";
                    found = true;
                } else {
                    row.style.display = "none";
                }
            }
            noResult.style.display = found ? "none" : "block";
        });
    }

    // ================== MODAL DE OPCIONES ==================
    const modal = document.getElementById("modalOpciones");
    const cerrarBtn = document.querySelector(".cerrar");
    const listaOpciones = document.getElementById("listaOpciones");

    if (modal && cerrarBtn && listaOpciones) {
        const opcionesPorProducto = {
            "Alien Stage – Figuras Bebés 2025": [
                { nombre: "Ivan", precio: 80 },
                { nombre: "Till", precio: 73 },
                { nombre: "Luka", precio: 70 },
                { nombre: "Sua", precio: 52 },
                { nombre: "Mizi", precio: 40 },
                { nombre: "Hyuna", precio: 30 },
                { nombre: "Set Completo", precio: 345 }
            ],
            "Alien Stage – LLaveros Peluches Bebés 2025": [
                { nombre: "Ivan", precio: 95 },
                { nombre: "Till", precio: 90 },
                { nombre: "Luka", precio: 75 },
                { nombre: "Sua", precio: 60 },
                { nombre: "Mizi", precio: 51 },
                { nombre: "Hyuna", precio: 40 },
                { nombre: "Set Completo", precio: 409 }
            ],
            "Alien Stage – Teclas Bebés 2025": [
                { nombre: "Ivan", precio: 55 },
                { nombre: "Till", precio: 50 },
                { nombre: "Luka", precio: 45 },
                { nombre: "Sua", precio: 36 },
                { nombre: "Mizi", precio: 31 },
                { nombre: "Hyuna", precio: 28 },
                { nombre: "Set Completo", precio: 231 }
            ],
            "Alien Stage – Figuras GAF 2025": [
                { nombre: "Ivan", precio: 80 },
                { nombre: "Till", precio: 73 },
                { nombre: "Luka", precio: 70 },
                { nombre: "Sua", precio: 52 },
                { nombre: "Mizi", precio: 40 },
                { nombre: "Hyuna", precio: 30 },
                { nombre: "Set Completo", precio: 345 }
            ],
            "Alien Stage – LLaveros Pompones 2025": [
                { nombre: "Ivan", precio: 40 },
                { nombre: "Till", precio: 40 },
                { nombre: "Luka", precio: 35 },
                { nombre: "Sua", precio: 35 },
                { nombre: "Mizi", precio: 30 },
                { nombre: "Hyuna", precio: 25 },
                { nombre: "Set Completo", precio: 210 }
            ],
            "Alien Stage – Rabit Set A 2025": [
                { nombre: "Ivan", precio: 40 },
                { nombre: "Till", precio: 40 },
                { nombre: "Luka", precio: 35 },
                { nombre: "Sua", precio: 35 },
                { nombre: "Mizi", precio: 30 },
                { nombre: "Hyuna", precio: 25 },
                { nombre: "Set Completo", precio: 210 }
            ],
            "Dollls ORV 2025": [
                { nombre: "Ivan", precio: 40 },
                { nombre: "Till", precio: 40 },
                { nombre: "Luka", precio: 35 },
                { nombre: "Sua", precio: 35 },
                { nombre: "Mizi", precio: 30 },
                { nombre: "Hyuna", precio: 25 },
                { nombre: "Set Completo", precio: 210 }
            ],
            "Figuras ORV 2026": [
                { nombre: "Ivan", precio: 40 },
                { nombre: "Till", precio: 40 },
                { nombre: "Luka", precio: 35 },
                { nombre: "Sua", precio: 35 },
                { nombre: "Mizi", precio: 30 },
                { nombre: "Hyuna", precio: 25 },
                { nombre: "Set Completo", precio: 210 }
            ],
            "Alien Stage – Rabit Set B 2025": [
                { nombre: "Ivan", precio: 40 },
                { nombre: "Till", precio: 40 },
                { nombre: "Luka", precio: 35 },
                { nombre: "Sua", precio: 35 },
                { nombre: "Mizi", precio: 30 },
                { nombre: "Hyuna", precio: 25 },
                { nombre: "Set Completo", precio: 210 }
            ],
            "Photocards Tragedy": [
                { nombre: "Ivan", precio: 18 },
                { nombre: "Luka", precio: 13 },
                { nombre: "Till", precio: 14 },
                { nombre: "Mizi", precio: 8 }
            ],
            "Colección Sua": [
                { nombre: "Sua Nycc", precio: 22 },
                { nombre: "Sua Id Café", precio: 25 },
                { nombre: "Sua Id Anakt", precio: 20 },
                { nombre: "Sua Pin", precio: 8 },
                { nombre: "Sua Set", precio: 60 }
            ],
            "Rabbit Set Malasia Limited": [
                { nombre: "Mizi", precio: 17 },
                { nombre: "Till", precio: 28 },
            ]
        };

        document.querySelectorAll(".producto button").forEach(boton => {
            boton.addEventListener("click", function() {
                const nombreProducto = this.parentElement.querySelector("h3").textContent;
                listaOpciones.innerHTML = "";
                if (opcionesPorProducto[nombreProducto]) {
                    opcionesPorProducto[nombreProducto].forEach(opcion => {
                        const li = document.createElement("li");
                        li.textContent = `${opcion.nombre} – S/ ${opcion.precio}`;
                        li.addEventListener("click", () => {
                            alert(`Has seleccionado ${opcion.nombre} (${nombreProducto})`);
                            modal.style.display = "none";
                        });
                        listaOpciones.appendChild(li);
                    });
                } else {
                    listaOpciones.innerHTML = "<li>No hay opciones disponibles</li>";
                }
                modal.style.display = "block";
            });
        });

        cerrarBtn.onclick = () => modal.style.display = "none";
        window.onclick = (event) => {
            if (event.target === modal) modal.style.display = "none";
        };
    }

    // ================== REPRODUCTOR ==================
    const audioPlayer = document.getElementById("player");
    if (audioPlayer) {
        const savedSrc = localStorage.getItem("songSrc");
        const savedTime = localStorage.getItem("songTime");

        if (savedSrc) {
            audioPlayer.src = savedSrc;
            audioPlayer.currentTime = savedTime ? parseFloat(savedTime) : 0;
            audioPlayer.play().catch(() => {});
        }

        audioPlayer.addEventListener("timeupdate", () => {
            localStorage.setItem("songTime", audioPlayer.currentTime);
        });

        audioPlayer.addEventListener("play", () => {
            localStorage.setItem("songSrc", audioPlayer.src);
        });

        document.querySelectorAll(".cancion").forEach(el => {
            el.addEventListener("click", () => {
                const song = el.getAttribute("data-src");
                audioPlayer.src = song;
                audioPlayer.play();
                localStorage.setItem("songSrc", song);
                localStorage.setItem("songTime", 0);
            });
        });
    }

    // ================== SLIDER ==================
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots");

    if (slides && images.length > 0) {
        let index = 0;

        images.forEach((_, i) => {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => showSlide(i));
            dotsContainer.appendChild(dot);
        });
        const dots = document.querySelectorAll(".dot");

        function showSlide(i) {
            index = i;
            slides.style.transform = `translateX(${-index * 100}%)`;
            dots.forEach(dot => dot.classList.remove("active"));
            dots[index].classList.add("active");
        }

        function nextSlide() {
            index = (index + 1) % images.length;
            showSlide(index);
        }

        function prevSlide() {
            index = (index - 1 + images.length) % images.length;
            showSlide(index);
        }

        if (nextBtn) nextBtn.addEventListener("click", nextSlide);
        if (prevBtn) prevBtn.addEventListener("click", prevSlide);

        setInterval(nextSlide, 5000);
    }
});

// ================== FILTRO POR CATEGORÍA ==================
const filtroCategoria = document.getElementById("filtroCategoria");
const noResultProductos = document.getElementById("noResultProductos");
const productosCards = document.querySelectorAll(".producto");

// 🔹 Cargar categorías únicas dinámicamente
if (filtroCategoria) {
    const categorias = new Set();
    productosCards.forEach(prod => {
        const cat = prod.querySelector(".categoria").textContent.trim();
        categorias.add(cat);
    });
    categorias.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat;
        filtroCategoria.appendChild(opt);
    });
}

// 🔹 Función principal de filtrado
function filtrarProductos() {
    const categoria = filtroCategoria.value;
    let visible = 0;

    productosCards.forEach(prod => {
        const cat = prod.querySelector(".categoria").textContent.trim();

        const coincideCategoria = (categoria === "todos" || categoria === cat);

        if (coincideCategoria) {
            prod.style.display = "";
            visible++;
        } else {
            prod.style.display = "none";
        }
    });

    noResultProductos.style.display = visible === 0 ? "block" : "none";
}

// 🔹 Eventos
if (filtroCategoria) {
    filtroCategoria.addEventListener("change", filtrarProductos);
}
