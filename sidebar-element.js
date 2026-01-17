class SideBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="sidebar" style="display: flex; flex-direction: column; min-height: 100vh;">
            <div class="sidebar-header">ONLINE SYSTEM SAMARINDA</div>
            
            <ul class="menu-list" style="flex: 1;">
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

            <div style="padding: 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 20px;">
                <p style="margin: 0; font-size: 0.7rem; color: #94a3b8; letter-spacing: 0.5px;">&copy; 2026 ONLINE SYSTEM</p>
                <p style="margin: 5px 0 0 0; font-size: 0.8rem; color: #fff; font-weight: 500;">
                    Created by <span style="color: #10b981;">Whisper</span>
                </p>
            </div>
        </div>
        `;

        this.init();
    }

    init() {
        // 1. Logika Klik Dropdown (Penting agar menu bisa dibuka)
        const dropdowns = this.querySelectorAll('.menu-item-wrapper > .menu-item');
        dropdowns.forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const sub = btn.nextElementSibling;
                sub.style.display = (sub.style.display === 'block') ? 'none' : 'block';
            };
        });

        // 2. Logika Active Menu (Warna Hijau otomatis)
        const current = window.location.pathname.split("/").pop() || "index.html";
        this.querySelectorAll('a').forEach(link => {
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
                const parent = link.closest('.submenu');
                if (parent) parent.style.display = 'block';
            }
        });
    }
}

customElements.define('main-sidebar', SideBar);
