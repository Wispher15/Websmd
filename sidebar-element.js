class SideBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            /* Memastikan sidebar memiliki sistem flex untuk mendorong footer ke bawah */
            .sidebar {
                display: flex !important;
                flex-direction: column !important;
                height: 100vh !important; /* Full tinggi layar */
                position: fixed;
                left: 0;
                top: 0;
                overflow-y: auto;
            }
            .sidebar-footer {
                margin-top: auto; /* Dorong ke paling bawah */
                padding: 20px;
                border-top: 1px solid rgba(255,255,255,0.1);
                background: rgba(0,0,0,0.1);
            }
        </style>

        <div class="sidebar">
            <div class="sidebar-header">ONLINE SYSTEM SAMARINDA</div>
            
            <ul class="menu-list">
                <li><a href="index.html" class="menu-item">Pengumuman!!</a></li>

                <li class="menu-item-wrapper">
                    <a href="#" class="menu-item">Evaluasi Sales <span>›</span></a>
                    <ul class="submenu">
                        <li><a href="sales-harian.html" class="submenu-item">Sales Harian</a></li>
                        <li><a href="perbandingan-bin.html" class="submenu-item">Perbandingan 2 Bin</a></li>
                        <li><a href="trend-sales.html" class="submenu-item">Trend Sales Unit</a></li>
                        <li><a href="p3.html" class="submenu-item">P3</a></li>
                    </ul>
                </li>

                <li class="menu-item-wrapper">
                    <a href="#" class="menu-item">Administrasi <span>›</span></a>
                    <ul class="submenu">
                        <li><a href="pk.html" class="submenu-item">PK</a></li>
                        <li><a href="ccs.html" class="submenu-item">CCS</a></li>
                        <li><a href="kmo.html" class="submenu-item">KMO</a></li>
                        <li><a href="usi-oral.html" class="submenu-item">USI - Oral / Indeks</a></li>
                        <li><a href="generik.html" class="submenu-item">Generik</a></li>
                    </ul>
                </li>

                <li class="menu-item-wrapper">
                    <a href="#" class="menu-item">Akun + Kunjungan <span>›</span></a>
                    <ul class="submenu">
                        <li><a href="kunjungan-akun.html" class="submenu-item">Kunjungan (Akun)</a></li>
                        <li><a href="tambah-alamat.html" class="submenu-item">Tambah Alamat ID</a></li>
                        <li><a href="buat-alamat.html" class="submenu-item">Buat Alamat ID</a></li>
                        <li><a href="tambah-outlet.html" class="submenu-item">Tambah Outlet ID</a></li>
                    </ul>
                </li>

                <li><a href="stok-distributor.html" class="menu-item">Stok Distributor</a></li>
                <li><a href="hitung-sales.html" class="menu-item">Hitung Sales</a></li>
                <li><a href="cuti.html" class="menu-item" style="color: #ef4444; font-weight: 700;">Cuti-Cuti !!!</a></li>
                <li><a href="bku.html" class="menu-item">BKU</a></li>
                <li><a href="ppf.html" class="menu-item">PPF 2026</a></li>
            </ul>

            <div class="sidebar-footer">
                <p style="margin: 0; font-size: 0.7rem; color: #94a3b8;">&copy; 2026 Online System</p>
                <p style="margin: 5px 0 0 0; font-size: 0.75rem; color: #94a3b8;">Created by <span style="color: #10b981; font-weight: 600;">Whisper</span></p>
            </div>
        </div>
        `;

        this.setActiveMenu();
    }

    setActiveMenu() {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const links = this.querySelectorAll('a');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
                const parentSub = link.closest('.submenu');
                if (parentSub) {
                    parentSub.style.display = 'block';
                }
            }
        });
    }
}

customElements.define('main-sidebar', SideBar);


