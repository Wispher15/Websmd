class SideBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="sidebar" style="background-color: #fff; border-right: 1px solid #e2e8f0;">
            <div class="sidebar-header" style="color: #10b981; border-bottom: 1px solid #f1f5f9;">ONLINE SYSTEM SAMARINDA</div>
            
            <ul class="menu-list">
                <li><a href="index.html" class="menu-item">Pengumuman!!</a></li>

                <li class="menu-item-wrapper">
                    <a href="#" class="menu-item dropdown-trigger">Evaluasi Sales <span>›</span></a>
                    <ul class="submenu" style="display: none; background-color: #ffffff;">
                        <li><a href="http://103.130.242.190:8090/ReportSales" class="submenu-item">Sales Harian</a></li>
                        <li><a href="http://103.135.49.43:8090/dev2026/misis_2026/" class="submenu-item">Perbandingan 2 Bin</a></li>
                        <li><a href="http://103.135.49.43:8090/dev2026/TrendSalesUnit_2026/" class="submenu-item">Trend Sales Unit</a></li>
                        <li><a href="http://103.130.242.190:8090/RP32" class="submenu-item">P3</a></li>
                    </ul>
                </li>

                <li class="menu-item-wrapper">
                    <a href="#" class="menu-item dropdown-trigger">Administrasi <span>›</span></a>
                    <ul class="submenu" style="display: none; background-color: #ffffff;">
                        <li><a href="http://103.135.49.43:8090/PK_2026/" class="submenu-item">PK</a></li>
                        
                        <li class="menu-item-wrapper">
                            <a href="#" class="submenu-item dropdown-trigger" style="font-weight: 600; color: #10b981;">CCS Menu <span>›</span></a>
                            <ul class="submenu" style="display: none; background-color: #f8fafc; border-left: 2px solid #10b981;">
                                <li><a href="http://103.135.49.43:8090/BukuCCS/" class="submenu-item">Bcs</a></li>
                                <li><a href="http://103.135.49.43:8090/dev2026/CCS_2026/" class="submenu-item">Ccs branded</a></li>
                                <li><a href="http://103.135.49.43:8090/dev2026/CCS_2026/?P=G" class="submenu-item">Ccs generik</a></li>
                            </ul>
                        </li>

                        <li><a href="http://103.135.49.43:8090/dev2026/KartuMonitor_2026/" class="submenu-item">KMO</a></li>

                        <li class="menu-item-wrapper">
                            <a href="#" class="submenu-item dropdown-trigger" style="font-weight: 600; color: #10b981;">USI Menu <span>›</span></a>
                            <ul class="submenu" style="display: none; background-color: #f8fafc; border-left: 2px solid #10b981;">
                                <li><a href="http://103.135.49.43:8090/dev2026/USI_2026/?P=R" class="submenu-item">Rekap USI Rayon</a></li>
                                <li><a href="http://103.135.49.43:8090/dev2026/USI_2026/?P" class="submenu-item">Buat USI</a></li>
                                <li><a href="buat-uspon.html" class="submenu-item">Buat USPON</a></li>
                                <li><a href="http://103.135.49.43:8090/dev2026/ReportOutletPerSystem_2026/" class="submenu-item">History 3 Periode</a></li>
                            </ul>
                        </li>

                        <li><a href="generik.html" class="submenu-item">Generik</a></li>
                    </ul>
                </li>

                <li class="menu-item-wrapper">
                    <a href="#" class="menu-item dropdown-trigger">Akun + Kunjungan <span>›</span></a>
                    <ul class="submenu" style="display: none; background-color: #ffffff;">
                        <li><a href="http://103.135.49.43:8090/dev2026/akunrekun_2026/rekun/" class="submenu-item">Kunjungan (Akun)</a></li>
                        <li><a href="http://103.135.49.43:8090/PengajuanLinkOutletCustomer/" class="submenu-item">Tambah Alamat ID</a></li>
                        <li><a href="http://103.135.49.43:8090/PengajuanCustomer/" class="submenu-item">Buat Alamat ID</a></li>
                        <li><a href="http://103.135.49.43:8090/PengajuanOutlet/" class="submenu-item">Tambah Outlet ID</a></li>
                    </ul>
                </li>

                <li><a href="stok-distributor.html" class="menu-item">Stok Distributor</a></li>
                <li><a href="hitung-sales.html" class="menu-item">Hitung Sales</a></li>
                <li><a href="http://103.135.49.43:8090/cuti_onleave/sign-in.php" class="menu-item" style="color: #ef4444; font-weight: 700;">Cuti-Cuti !!!</a></li>
                <li><a href="http://103.135.49.43:8090/rbkuccd/" class="menu-item">BKU</a></li>
                <li><a href="ppf.html" class="menu-item">PPF 2026</a></li>
            </ul>

            <div style="padding: 20px; border-top: 1px solid #f1f5f9; margin-top: 30px;">
                <p style="margin: 0; font-size: 0.65rem; color: #94a3b8;">&copy; 2026 ONLINE SYSTEM</p>
                <p style="margin: 5px 0 0 0; font-size: 0.8rem; color: #64748b;">
                    Created by <span style="color: #10b981; font-weight: 600;">Whisper</span>
                </p>
            </div>
        </div>
        `;

        this.init();
    }

    init() {
        const triggers = this.querySelectorAll('.dropdown-trigger');
        triggers.forEach(t => {
            t.onclick = (e) => {
                const currentSubmenu = t.nextElementSibling;
                if (!currentSubmenu) return;

                e.preventDefault();
                e.stopPropagation();
                const parentUl = t.closest('ul');
                parentUl.querySelectorAll(':scope > li > .submenu').forEach(sub => {
                    if (sub !== currentSubmenu) sub.style.display = 'none';
                });
                currentSubmenu.style.display = (currentSubmenu.style.display === 'block') ? 'none' : 'block';
            };
        });

        const current = window.location.pathname.split("/").pop() || "index.html";
        this.querySelectorAll('a').forEach(link => {
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
                let parent = link.closest('.submenu');
                while (parent) {
                    parent.style.display = 'block';
                    parent = parent.parentElement.closest('.submenu');
                }
            }
        });
    }
}
customElements.define('main-sidebar', SideBar);
