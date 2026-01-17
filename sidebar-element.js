class SideBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="sidebar" style="display: flex !important; flex-direction: column !important; height: 100vh !important; background-color: #1e293b; color: white; position: fixed; width: 260px;">
            
            <div class="sidebar-header" style="padding: 20px; font-weight: 700; font-size: 1.2rem; border-bottom: 1px solid rgba(255,255,255,0.1); shrink: 0;">
                ONLINE SYSTEM SAMARINDA
            </div>
            
            <div style="flex: 1; overflow-y: auto; padding: 10px 0;">
                <ul class="menu-list" style="list-style: none; padding: 0; margin: 0;">
                    <li><a href="index.html" class="menu-item">Pengumuman!!</a></li>

                    <li class="menu-item-wrapper">
                        <a href="#" class="menu-item dropdown-trigger">Evaluasi Sales <span>›</span></a>
                        <ul class="submenu" style="display: none; list-style: none; padding-left: 20px; background: rgba(0,0,0,0.2);">
                            <li><a href="sales-harian.html" class="submenu-item">Sales Harian</a></li>
                            <li><a href="perbandingan-bin.html" class="submenu-item">Perbandingan 2 Bin</a></li>
                            <li><a href="trend-sales.html" class="submenu-item">Trend Sales Unit</a></li>
                            <li><a href="p3.html" class="submenu-item">P3</a></li>
                        </ul>
                    </li>

                    <li class="menu-item-wrapper">
                        <a href="#" class="menu-item dropdown-trigger">Administrasi <span>›</span></a>
                        <ul class="submenu" style="display: none; list-style: none; padding-left: 20px; background: rgba(0,0,0,0.2);">
                            <li><a href="pk.html" class="submenu-item">PK</a></li>
                            <li><a href="ccs.html" class="submenu-item">CCS</a></li>
                            <li><a href="kmo.html" class="submenu-item">KMO</a></li>
                            <li><a href="usi-oral.html" class="submenu-item">USI - Oral / Indeks</a></li>
                            <li><a href="generik.html" class="submenu-item">Generik</a></li>
                        </ul>
                    </li>

                    <li class="menu-item-wrapper">
                        <a href="#" class="menu-item dropdown-trigger">Akun + Kunjungan <span>›</span></a>
                        <ul class="submenu" style="display: none; list-style: none; padding-left: 20px; background: rgba(0,0,0,0.2);">
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
            </div>

            <div class="sidebar-footer" style="padding: 15px 20px; background: #0f172a; border-top: 1px solid rgba(255,255,255,0.1); shrink: 0;">
                <p style="margin: 0; font-size: 0.65rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">&copy; 2026 Online System</p>
                <p style="margin: 3px 0 0 0; font-size: 0.85rem; color: #fff; font-weight: 600;">
                    Created by <span style="color: #10b981;">Whisper</span>
                </p>
            </div>
        </div>
        `;

        this.initLogic();
    }

    initLogic() {
        // Logika Dropdown
        const triggers = this.querySelectorAll('.dropdown-trigger');
        triggers.forEach(t => {
            t.onclick = (e) => {
                e.preventDefault();
                const sub = t.nextElementSibling;
                sub.style.display = (sub.style.display === 'block') ? 'none' : 'block';
            };
        });

        // Logika Active State
        const current = window.location.pathname.split("/").pop() || "index.html";
        this.querySelectorAll('a').forEach(link => {
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
                const p = link.closest('.submenu');
                if (p) p.style.display = 'block';
            }
        });
    }
}

customElements.define('main-sidebar', SideBar);
