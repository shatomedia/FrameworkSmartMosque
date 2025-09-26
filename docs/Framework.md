Analisis Kebutuhan (Requirement Analysis)

Tujuan utama dari penelitian ini adalah untuk memahami kebutuhan masjid, pengurus (takmir), dan jamaah secara mendalam, guna memastikan bahwa sistem Smart Mosque yang akan dikembangkan dapat memenuhi ekspektasi dan memberikan manfaat yang signifikan bagi semua pihak yang terlibat. Dengan memahami kebutuhan ini, sistem yang dibangun dapat lebih tepat sasaran dan efektif dalam mendukung operasional masjid. Selanjutnya, penelitian ini bertujuan untuk menentukan fitur dan fungsi yang wajib dimiliki oleh Smart Mosque, seperti otomatisasi penjadwalan waktu sholat, pengelolaan perangkat elektronik, manajemen keuangan, dan penyebaran informasi secara digital. Fitur-fitur ini sangat penting untuk meningkatkan efisiensi operasional masjid dan memperbaiki pengalaman jamaah. Selain itu, penelitian ini juga akan mendokumentasikan kebutuhan fungsional dan non-fungsional sistem, yang mencakup apa yang harus dilakukan oleh sistem (seperti penjadwalan waktu sholat dan kontrol perangkat) serta bagaimana sistem tersebut harus bekerja, termasuk kualitas, keamanan, dan stabilitasnya. Dengan mendokumentasikan kebutuhan ini, diharapkan sistem yang dikembangkan tidak hanya efektif dalam menjalankan tugas-tugas operasional masjid, tetapi juga aman, dapat diandalkan, dan sesuai dengan standar kualitas yang diinginkan.

Langkah-Langkah Analisis Kebutuhan:

1. **Identifikasi stakeholder:**

Langkah pertama dalam analisis kebutuhan untuk pengembangan sistem Smart Mosque adalah identifikasi stakeholder. Stakeholder merupakan pihak-pihak yang terlibat langsung dalam penggunaan, pengelolaan, dan pemeliharaan sistem. Menyusun daftar stakeholder yang lengkap dan memahami peran serta kebutuhannya sangat penting agar sistem yang dikembangkan dapat memenuhi ekspektasi mereka. Berikut adalah stakeholder utama yang perlu diperhatikan dalam pengembangan sistem Smart Mosque:

1. **Pengurus Masjid (Takmir):**

Tugas utama: Pengurus masjid bertanggung jawab untuk mengelola berbagai aspek operasional masjid, termasuk penjadwalan waktu sholat, koordinasi kegiatan masjid, dan pengelolaan keuangan. Takmir juga memiliki peran penting dalam mengontrol perangkat elektronik yang digunakan di masjid, seperti sistem suara, pencahayaan, dan pendingin ruangan.

Kebutuhan: Sistem Smart Mosque harus mempermudah pengelolaan jadwal sholat secara otomatis, memudahkan pengawasan kegiatan masjid, dan memfasilitasi pengelolaan keuangan secara digital dengan transparansi yang lebih baik. Pengurus masjid juga membutuhkan sistem yang dapat mengendalikan perangkat masjid secara efisien, baik secara otomatis maupun manual.

**Metode:** Wawancara / Kuesioner

| No  | Pertanyaan | Jenis Jawaban |
| --- | --- | --- |
| 1   | Apa kendala utama dalam mengelola jadwal sholat dan kegiatan masjid saat ini? | Terbuka |
| 2   | Fitur Smart Mosque apa yang paling penting bagi pengelolaan masjid? (contoh: kontrol sound system, lampu, jadwal sholat otomatis) | Pilihan berganda + opsi lain |
| 3   | Apakah Anda membutuhkan akses kontrol perangkat secara manual melalui aplikasi? | Ya / Tidak |
| 4   | Bagaimana sistem pengelolaan keuangan masjid saat ini? Apa yang perlu ditingkatkan? | Terbuka |
| 5   | Seberapa penting sistem dashboard dan laporan real-time bagi pengurus? | Skala 1–5 |
| 6   | Apa tantangan yang Anda hadapi terkait penggunaan teknologi di masjid? | Terbuka |

1. **Jamaah / Pengguna Masjid:**

Tugas utama: Jamaah adalah pengguna utama masjid yang berpartisipasi dalam kegiatan ibadah dan sosial. Mereka perlu mengakses jadwal sholat, pengumuman kegiatan, serta acara live streaming.

Kebutuhan: Jamaah menginginkan kemudahan dalam mengakses jadwal sholat secara real-time, menerima notifikasi iqomah, dan mengikuti pengajian atau ceramah melalui live streaming. Selain itu, mereka juga membutuhkan sistem untuk memberikan donasi atau sumbangan secara digital, seperti melalui aplikasi mobile, untuk memudahkan transaksi dan meningkatkan transparansi.

**Metode:** Kuesioner / Wawancara singkat

| No  | Pertanyaan | Jenis Jawaban |
| --- | --- | --- |
| 1   | Apakah Anda merasa jadwal sholat di masjid selalu akurat? | Ya / Tidak / Kadang |
| 2   | Fitur Smart Mosque apa yang menurut Anda paling bermanfaat? (contoh: notifikasi iqomah, live streaming, pengumuman digital) | Pilihan berganda + opsi lain |
| 3   | Apakah Anda bersedia menggunakan aplikasi mobile untuk informasi masjid? | Ya / Tidak |
| 4   | Seberapa penting transparansi keuangan masjid bagi Anda? | Skala 1–5 |
| 5   | Apakah Anda membutuhkan informasi kegiatan masjid secara real-time? | Ya / Tidak |
| 6   | Fitur apa lagi yang menurut Anda penting bagi kenyamanan beribadah di masjid? | Terbuka |

1. **Tim Teknis / Developer:**

Tugas utama: Tim teknis bertanggung jawab untuk memastikan bahwa perangkat keras dan perangkat lunak dalam sistem Smart Mosque berfungsi dengan baik dan terintegrasi. Mereka juga menyediakan sistem monitoring untuk memantau kinerja sistem secara keseluruhan dan memastikan adanya pemeliharaan serta perbaikan rutin.

Kebutuhan: Tim teknis membutuhkan sistem yang mudah dipelihara dan diperbarui. Selain itu, mereka memerlukan alat untuk memantau performa sistem secara real-time, serta memastikan keamanan data dan keandalan perangkat.

**Metode:** Wawancara mendalam / Checklist teknis

| No  | Pertanyaan | Jenis Jawaban |
| --- | --- | --- |
| 1   | Perangkat IoT apa yang dibutuhkan untuk mengontrol sistem di masjid? | Terbuka / Checklist |
| 2   | Apakah sistem harus mendukung mode offline dan online? | Ya / Tidak |
| 3   | Bagaimana cara monitoring sistem agar mudah dipelihara? | Terbuka |
| 4   | Apakah ada batasan teknis terkait bandwidth atau jaringan masjid? | Terbuka |
| 5   | Apa tantangan terbesar dalam integrasi perangkat keras dan perangkat lunak di masjid? | Terbuka |
| 6   | Apakah sistem memerlukan fitur remote monitoring / kontrol jarak jauh? | Ya / Tidak |

1. **Penyedia Perangkat & Software (Vendor):**

Tugas utama: Penyedia perangkat dan software bertanggung jawab untuk menyediakan hardware IoT, sensor, aplikasi mobile, dan dashboard yang diperlukan untuk pengoperasian sistem Smart Mosque. Mereka juga akan menyediakan dukungan teknis untuk pemasangan, pemeliharaan, dan peningkatan sistem.

Kebutuhan: Vendor perlu memahami spesifikasi teknis yang diperlukan oleh sistem Smart Mosque agar perangkat keras dan perangkat lunak yang mereka sediakan kompatibel dan dapat terintegrasi dengan baik. Mereka juga harus menyediakan solusi yang dapat dengan mudah di-update dan disesuaikan dengan kebutuhan pengurus masjid.

**Metode:** Wawancara / Kuesioner teknis

| No  | Pertanyaan | Jenis Jawaban |
| --- | --- | --- |
| 1   | Spesifikasi perangkat keras apa yang dapat disediakan untuk masjid? | Terbuka |
| 2   | Apakah perangkat ini kompatibel dengan aplikasi mobile / dashboard? | Ya / Tidak |
| 3   | Apakah vendor menyediakan layanan instalasi dan konfigurasi sistem? | Ya / Tidak |
| 4   | Apakah ada batasan jumlah perangkat atau sensor yang dapat diintegrasikan? | Terbuka |
| 5   | Apakah tersedia dukungan teknis dan pemeliharaan jangka panjang? | Ya / Tidak |
| 6   | Fitur apa yang dapat ditingkatkan untuk memenuhi kebutuhan Smart Mosque? | Terbuka |

Dengan mengidentifikasi stakeholder dan memahami kebutuhan masing-masing pihak, kita dapat merancang sistem Smart Mosque yang sesuai dengan harapan dan tujuan mereka. Stakeholder seperti pengurus masjid, jamaah, tim teknis, dan vendor semuanya memiliki kebutuhan yang berbeda, namun saling berkaitan dalam operasional masjid yang lebih efisien dan efektif. Langkah selanjutnya adalah menyusun kebutuhan fungsional yang dapat memenuhi harapan dari stakeholder-stakeholder tersebut.

1. **Kebutuhan Fungsional (Functional Requirements)**

Kebutuhan fungsional dari sistem **Smart Mosque** menjelaskan apa yang harus dilakukan oleh sistem agar dapat memenuhi kebutuhan pengurus masjid, jamaah, dan pihak terkait lainnya. Kebutuhan ini menjadi landasan bagi desain dan implementasi sistem yang efektif, efisien, dan sesuai dengan ekspektasi stakeholder.

1. **Penjadwalan Waktu Sholat**

**Tujuan:** Memastikan sistem bisa menghitung waktu sholat otomatis berdasarkan lokasi masjid dan dapat melakukan update otomatis saat ada perubahan musim atau lokasi.

sistem harus mampu melakukan **penjadwalan waktu sholat secara otomatis** berdasarkan lokasi geografis masjid dan metode perhitungan yang berlaku, seperti metode Ephemeris atau standar Kementerian Agama. Sistem ini juga harus dapat melakukan **update otomatis** apabila terjadi perubahan musim, waktu, atau lokasi, sehingga jamaah selalu mendapatkan informasi waktu sholat yang akurat.

| No  | Pertanyaan | Jenis Jawaban |     |
| --- | --- | --- | --- |
| 1   | Apakah saat ini sistem waktu sholat di masjid sudah otomatis? | Ya / Tidak |     |
| 2   | Seberapa penting fitur penjadwalan waktu sholat otomatis bagi pengelolaan masjid? | Skala 1–5 (1: Tidak penting, 5: Sangat penting) |     |
| 3   | Apa yang Anda harapkan dari sistem penjadwalan waktu sholat otomatis? | Terbuka |     |
| 4   | Apakah Anda ingin sistem update otomatis saat ada perubahan musim atau lokasi? | Ya / Tidak |     |
| 5   | Apakah ada metode tertentu yang digunakan saat ini untuk menentukan waktu sholat? (misalnya Ephemeris / Kemenag) | Terbuka |     |

1. **Kontrol Perangkat Elektronik**

**Tujuan:** Sistem harus bisa mengontrol perangkat elektronik seperti lampu, sound system, dan pendingin ruangan secara otomatis, dengan opsi mode manual melalui aplikasi Android atau dashboard.

sistem harus mampu mengendalikan **perangkat elektronik** di masjid, seperti lampu, sound system, dan pendingin ruangan. Pengendalian perangkat ini dilakukan secara otomatis sesuai jadwal kegiatan atau sensor lingkungan, namun tetap menyediakan **mode manual** melalui aplikasi Android atau dashboard web bagi pengurus masjid, sehingga fleksibilitas tetap terjaga.

| No  | Pertanyaan | Jenis Jawaban |     |
| --- | --- | --- | --- |
| 1   | Apakah masjid saat ini menggunakan perangkat elektronik yang terkontrol otomatis (lampu, sound system, AC)? | Ya / Tidak |     |
| 2   | Seberapa penting kontrol otomatis untuk perangkat elektronik di masjid? | Skala 1–5 |     |
| 3   | Apakah Anda ingin bisa mengendalikan perangkat elektronik secara manual melalui aplikasi atau dashboard? | Ya / Tidak |     |
| 4   | Fitur kontrol perangkat elektronik apa yang menurut Anda paling dibutuhkan di masjid? | Terbuka |     |
| 5   | Apakah ada masalah atau kendala terkait pengelolaan perangkat elektronik masjid saat ini? | Terbuka |     |

1. **Pengumuman & Informasi Digital**

**Tujuan:** Sistem harus menyediakan pengumuman dan informasi digital melalui berbagai media display seperti LED, TV, dan 7-segment. Selain itu, sistem harus mendukung live streaming pengajian dan pengumuman via aplikasi mobile.

Ketiga, sistem harus menyediakan **pengumuman dan informasi digital** melalui berbagai media tampilan, termasuk LED TV, 7-segment display, atau monitor lainnya. Selain itu, sistem juga harus mendukung **live streaming** pengajian, kajian, atau ceramah, serta **notifikasi melalui aplikasi mobile**, agar jamaah dapat menerima informasi secara real-time, baik di dalam maupun di luar masjid.

| No  | Pertanyaan | Jenis Jawaban |     |
| --- | --- | --- | --- |
| 1   | Apakah masjid saat ini menggunakan layar informasi digital seperti LED, TV, atau 7-segment? | Ya / Tidak |     |
| 2   | Seberapa penting live streaming pengajian atau ceramah bagi jamaah yang tidak dapat hadir? | Skala 1–5 |     |
| 3   | Apakah Anda ingin pengumuman kegiatan masjid ditampilkan di layar informasi atau melalui aplikasi? | Ya / Tidak |     |
| 4   | Fitur apa yang harus ada di aplikasi mobile untuk pengumuman masjid? | Terbuka |     |
| 5   | Apakah Anda membutuhkan notifikasi otomatis untuk setiap kegiatan atau perubahan jadwal? | Ya / Tidak |     |

1. **Manajemen Keuangan Digital**

**Tujuan:** Sistem harus memungkinkan manajemen zakat, infaq, dan wakaf secara digital, serta menyediakan laporan keuangan real-time dan dashboard transparansi untuk jamaah.

sistem harus mendukung **manajemen keuangan digital**, termasuk pencatatan zakat, infaq, dan wakaf. Sistem ini harus menyediakan **laporan keuangan real-time** bagi pengurus dan **dashboard transparansi** yang dapat diakses oleh jamaah, sehingga meningkatkan akuntabilitas dan kepercayaan jamaah terhadap pengelolaan dana masjid.

| No  | Pertanyaan | Jenis Jawaban |     |
| --- | --- | --- | --- |
| 1   | Apakah masjid sudah menggunakan sistem digital untuk mencatat zakat, infaq, dan wakaf? | Ya / Tidak |     |
| 2   | Seberapa penting transparansi dalam pengelolaan keuangan masjid bagi jamaah? | Skala 1–5 |     |
| 3   | Apakah Anda ingin dapat mengakses laporan keuangan masjid secara real-time melalui aplikasi atau website? | Ya / Tidak |     |
| 4   | Apa yang menurut Anda harus ada dalam dashboard transparansi keuangan untuk jamaah? | Terbuka |     |
| 5   | Apa kendala utama yang Anda hadapi dalam pengelolaan keuangan masjid saat ini? | Terbuka |     |

1. **Monitoring & Sensor Lingkungan**

**Tujuan:** Sistem harus memiliki kemampuan untuk memonitor suhu, kelembapan, cahaya, dan deteksi jumlah jamaah (opsional) untuk memantau kapasitas masjid.

sistem harus memiliki kemampuan **monitoring dan sensor lingkungan**, termasuk sensor suhu, kelembapan, cahaya, dan opsional deteksi jumlah jamaah untuk memantau kapasitas ruangan. Fungsi ini bertujuan untuk menciptakan lingkungan masjid yang nyaman, aman, dan efisien dalam penggunaan energi.

| No  | Pertanyaan | Jenis Jawaban |     |
| --- | --- | --- | --- |
| 1   | Apakah saat ini masjid menggunakan sensor untuk memonitor suhu, kelembapan, atau cahaya? | Ya / Tidak |     |
| 2   | Seberapa penting penggunaan sensor untuk memantau kenyamanan jamaah (misalnya suhu, pencahayaan)? | Skala 1–5 |     |
| 3   | Apakah Anda ingin sistem mendeteksi jumlah jamaah yang hadir di masjid secara otomatis? | Ya / Tidak |     |
| 4   | Apa fitur monitoring yang menurut Anda akan meningkatkan kenyamanan jamaah di masjid? | Terbuka |     |
| 5   | Apakah ada masalah terkait lingkungan masjid yang saat ini belum dapat dipantau secara otomatis? | Terbuka |     |

1. **Kolaborasi Multi-Masjid (Opsional Tahap Lanjut)**

Sebagai tambahan, pada **tahap lanjutan**, sistem dapat mendukung **kolaborasi multi-masjid**, dengan kemampuan **sinkronisasi jadwal kegiatan antar masjid** dan menyediakan **platform pengumpulan data serta analisis bersama**. Hal ini memungkinkan jaringan masjid untuk saling berkolaborasi, berbagi informasi, dan mengoptimalkan pengelolaan kegiatan keagamaan dan sosial secara kolektif.

| No  | Pertanyaan | Jenis Jawaban |     |
| --- | --- | --- | --- |
| 1   | Apakah Anda merasa penting untuk memiliki sistem yang memungkinkan masjid berkolaborasi dengan masjid lain? | Ya / Tidak |     |
| 2   | Fitur apa yang menurut Anda perlu ada dalam platform kolaborasi antar masjid? | Terbuka |     |
| 3   | Apakah Anda ingin kegiatan masjid dapat disinkronkan secara otomatis antar masjid? | Ya / Tidak |     |
| 4   | Seberapa penting platform analisis bersama (misal: pengelolaan zakat, laporan kegiatan) bagi masjid? | Skala 1–5 |     |
| 5   | Apa manfaat yang Anda harapkan dari kolaborasi antar masjid menggunakan sistem ini? | Terbuka |     |

Instrumen dapat digunakan dalam bentuk **Google Form**, **kuesioner online**, atau **lembar kuesioner fisik** untuk mengumpulkan data dari masing-masing stakeholder. Data yang terkumpul akan digunakan untuk menentukan **fitur fungsional dan non-fungsional** sistem **Smart Mosque** yang akan dikembangkan. Dengan terpenuhinya kebutuhan fungsional tersebut, sistem **Smart Mosque** diharapkan dapat memberikan manfaat maksimal bagi pengurus, jamaah, dan seluruh pihak terkait, serta menjadi fondasi yang kuat untuk pengembangan fitur-fitur lanjutan di masa depan.

1. **Kebutuhan Non-Fungsional (Non-Functional Requirements)**

Kebutuhan non-fungsional menjelaskan aspek-aspek teknis dan kualitas dari sistem **Smart Mosque**, yang tidak hanya mencakup **apa** yang dilakukan oleh sistem (seperti dalam kebutuhan fungsional), tetapi **bagaimana** sistem tersebut harus bekerja. Berikut adalah penjelasan lebih lanjut mengenai setiap aspek non-fungsional yang perlu dipenuhi oleh sistem ini:

1. **Keamanan Data**

Keamanan data menjadi aspek penting dalam sistem **Smart Mosque**, karena sistem ini akan mengelola berbagai informasi sensitif seperti **data kehadiran jamaah**, **transaksi donasi**, dan **data pribadi** lainnya. Sistem harus memastikan bahwa semua data yang dikumpulkan dari jamaah, seperti data kehadiran dan donasi, dienkripsi dengan **metode enkripsi yang aman**, misalnya menggunakan **AES-256**. Hal ini penting untuk mencegah pencurian data dan menjaga privasi jamaah. Pengurus masjid (takmir) harus memiliki akses penuh untuk **mengelola jadwal sholat**, **melihat laporan keuangan**, dan **kontrol perangkat elektronik**, sementara jamaah hanya dapat mengakses informasi yang bersifat publik (seperti jadwal sholat, pengumuman, dan live streaming). Hak akses ini harus dibatasi menggunakan **sistem otentikasi berbasis peran** (Role-based Access Control - RBAC) untuk memastikan **keamanan dan privasi** data.

**Tujuan:** Memastikan bahwa sistem tetap berjalan stabil meskipun dalam kondisi offline dan dapat kembali mengupdate informasi secara otomatis.

| No  | Pertanyaan | Jenis Jawaban | Kriteria Evaluasi |
| --- | --- | --- | --- |
| 1   | Apakah sistem berfungsi dengan baik dalam mode offline saat internet terputus? | Ya / Tidak | Sistem **offline** bisa tetap menjalankan jadwal sholat dan kontrol perangkat |
| 2   | Apakah update informasi dilakukan secara otomatis saat koneksi internet tersedia kembali? | Ya / Tidak | Update data dilakukan otomatis tanpa intervensi manual |
| 3   | Apakah sistem dapat menangani beban tinggi atau lonjakan aktivitas (misalnya saat sholat Jumat)? | Ya / Tidak | Sistem harus **berjalan lancar** meskipun ada lonjakan jumlah pengguna |
| 4   | Apakah perangkat keras sistem (sensor, display, speaker) memiliki cadangan daya? | Ya / Tidak | Sistem harus dilengkapi dengan **backup UPS** (Uninterruptible Power Supply) |

1. **Keandalan & Stabilitas**

Keandalan dan stabilitas sistem sangat penting agar sistem tetap dapat beroperasi dengan baik, meskipun menghadapi gangguan teknis, seperti pemutusan koneksi internet. Masjid tetap dapat berfungsi secara normal meskipun **koneksi internet terputus**, dengan sistem yang dapat beroperasi **offline** untuk menjalankan fitur dasar, seperti penjadwalan waktu sholat dan kontrol perangkat. Misalnya, sistem **penjadwalan sholat dan kontrol lampu** harus tetap berjalan berdasarkan data lokal yang sudah terinstall sebelumnya di sistem. Ketika koneksi internet terhubung kembali, **sistem harus otomatis memperbarui jadwal** sholat, pengumuman, atau data lainnya yang mungkin telah berubah saat sistem offline. Hal ini memastikan **informasi selalu terbaru** dan tidak ada kekosongan data saat sistem kembali online.

**Tujuan:** Memastikan bahwa sistem dapat memberikan respons cepat (kurang dari 2 detik) untuk pembaruan informasi dan mampu menangani lebih dari satu masjid di masa depan.

| No  | Pertanyaan | Jenis Jawaban | Kriteria Evaluasi |
| --- | --- | --- | --- |
| 1   | Apakah waktu respons sistem untuk memperbarui informasi tidak lebih dari 2 detik? | Ya / Tidak | Waktu respons < 2 detik untuk semua jenis update informasi |
| 2   | Apakah sistem dapat menangani lebih dari satu masjid tanpa menurunkan kinerja? | Ya / Tidak | Sistem dapat **scalable** dan mengelola data dari beberapa masjid secara real-time |
| 3   | Apakah ada penurunan kinerja saat banyak pengguna mengakses aplikasi secara bersamaan? | Ya / Tidak | Sistem harus **stable** meskipun ada banyak pengguna |
| 4   | Apakah sistem bisa melakukan proses pengolahan data secara otomatis dan cepat (misalnya analisis keuangan, sensor)? | Ya / Tidak | **Proses otomatis** harus selesai dalam waktu singkat (tidak lebih dari 3 detik) |

1. **Kinerja & Respons Sistem**

Sistem harus mampu bekerja dengan cepat dan responsif untuk memberikan pengalaman pengguna yang baik. Sistem harus dapat memproses dan menampilkan informasi (seperti **jadwal sholat**, **pengumuman**, atau **donasi**) dalam waktu kurang dari **2 detik** setelah penggunanya melakukan permintaan. Kinerja yang cepat akan meningkatkan kenyamanan pengguna, terutama dalam situasi darurat atau kepadatan waktu sholat. Sistem harus dirancang untuk **scalable**, artinya sistem ini mampu menangani lebih dari satu masjid dalam satu waktu tanpa menurunkan kinerja. Misalnya, saat sistem diterapkan di beberapa masjid, sistem harus tetap dapat mengelola dan menyinkronkan data secara **terpusat** (cloud-based) tanpa mengorbankan kecepatan atau akurasi data.

**Tujuan:** Memastikan bahwa sistem dapat memberikan respons cepat (kurang dari 2 detik) untuk pembaruan informasi dan mampu menangani lebih dari satu masjid di masa depan.

| No  | Pertanyaan | Jenis Jawaban | Kriteria Evaluasi |
| --- | --- | --- | --- |
| 1   | Apakah waktu respons sistem untuk memperbarui informasi tidak lebih dari 2 detik? | Ya / Tidak | Waktu respons < 2 detik untuk semua jenis update informasi |
| 2   | Apakah sistem dapat menangani lebih dari satu masjid tanpa menurunkan kinerja? | Ya / Tidak | Sistem dapat **scalable** dan mengelola data dari beberapa masjid secara real-time |
| 3   | Apakah ada penurunan kinerja saat banyak pengguna mengakses aplikasi secara bersamaan? | Ya / Tidak | Sistem harus **stable** meskipun ada banyak pengguna |
| 4   | Apakah sistem bisa melakukan proses pengolahan data secara otomatis dan cepat (misalnya analisis keuangan, sensor)? | Ya / Tidak | **Proses otomatis** harus selesai dalam waktu singkat (tidak lebih dari 3 detik) |

1. **User-Friendly**

Pengalaman pengguna (user experience / UX) adalah aspek penting dalam memastikan bahwa pengurus masjid dan jamaah dapat menggunakan sistem dengan mudah dan efektif. Baik **pengurus masjid** maupun **jamaah** harus merasa nyaman menggunakan aplikasi atau dashboard. Antarmuka (UI) harus **intuitif** dan mudah dipahami, dengan navigasi yang jelas dan responsif, sehingga pengurus dapat dengan mudah mengelola masjid dan jamaah bisa mengakses informasi dengan cepat. Semua **informasi di dashboard** dan aplikasi harus disajikan dengan tampilan yang **bersih** dan **terstruktur**, dengan **instruksi yang mudah dipahami**. Pengguna tidak harus memiliki latar belakang teknis untuk dapat menggunakan sistem ini, sehingga sangat penting untuk membuat tampilan yang sederhana dan jelas.

**Tujuan:** Memastikan bahwa aplikasi dan dashboard mudah digunakan oleh pengurus dan jamaah, serta tampilan sistem jelas dan informatif.

| No  | Pertanyaan | Jenis Jawaban | Kriteria Evaluasi |
| --- | --- | --- | --- |
| 1   | Apakah tampilan dashboard dan aplikasi mobile mudah dipahami oleh pengurus masjid dan jamaah? | Ya / Tidak | **UI/UX design** harus jelas, dengan instruksi yang mudah dipahami |
| 2   | Apakah aplikasi dan dashboard memiliki navigasi yang intuitif? | Ya / Tidak | Pengguna dapat **menavigasi** fitur tanpa pelatihan khusus |
| 3   | Apakah instruksi di aplikasi dan dashboard mudah dipahami dan membantu pengguna? | Ya / Tidak | **Instruksi** harus sederhana dan mudah diikuti (tanpa jargon teknis) |
| 4   | Apakah pengurus dan jamaah merasa nyaman menggunakan aplikasi ini dalam kehidupan sehari-hari? | Ya / Tidak | **Feedback positif** dari pengguna aplikasi |

1. **Pemeliharaan**

Pemeliharaan sistem yang efektif sangat penting untuk memastikan sistem Smart Mosque tetap berfungsi dengan baik dalam jangka panjang. Sistem harus dirancang agar **mudah diperbarui** (misalnya, pembaruan perangkat lunak dan firmware) dan **diperbaiki** apabila ada masalah. Setiap perangkat keras yang digunakan harus **kompatibel dengan standar industri** agar mudah diganti jika terjadi kerusakan. Sistem harus memiliki fitur **monitoring otomatis** yang dapat mendeteksi **error atau malfungsi** dalam perangkat keras dan perangkat lunak. Jika terjadi masalah, sistem harus dapat memberi **notifikasi otomatis** kepada teknisi untuk mengambil tindakan yang diperlukan.

**Tujuan:** Memastikan bahwa sistem dapat dipelihara dengan mudah oleh teknisi dan monitoring error otomatis dapat memberikan notifikasi jika ada masalah.

| No  | Pertanyaan | Jenis Jawaban | Kriteria Evaluasi |
| --- | --- | --- | --- |
| 1   | Apakah sistem mudah diperbarui atau diperbaiki oleh teknisi? | Ya / Tidak | Sistem harus **modular** dan **kompatibel** untuk perbaikan mudah |
| 2   | Apakah ada mekanisme untuk **monitoring error otomatis** pada perangkat keras atau perangkat lunak? | Ya / Tidak | Sistem harus dapat mendeteksi **error secara otomatis** dan memberi notifikasi |
| 3   | Apakah dokumentasi untuk pemeliharaan dan troubleshooting tersedia bagi teknisi? | Ya / Tidak | **Dokumentasi teknis lengkap** disediakan untuk memudahkan pemeliharaan |
| 4   | Apakah sistem memiliki **backup data otomatis** untuk mencegah kehilangan data? | Ya / Tidak | Backup dilakukan secara otomatis setiap periode tertentu (misal: harian, mingguan) |

Kebutuhan non-fungsional ini memastikan bahwa sistem **Smart Mosque** tidak hanya dapat memenuhi kebutuhan fungsional (seperti penjadwalan waktu sholat dan kontrol perangkat), tetapi juga bekerja dengan **keamanan, stabilitas, kinerja**, dan **kemudahan pemeliharaan** yang optimal. Dengan memenuhi kebutuhan ini, sistem akan memberikan **pengalaman pengguna yang baik**, dapat diandalkan dalam jangka panjang, dan mudah untuk diperbarui atau diperbaiki sesuai perkembangan teknologi dan kebutuhan masjid.

Instrumen ini akan digunakan untuk melakukan **evaluasi teknis** terhadap implementasi sistem **Smart Mosque**, dengan fokus pada aspek **non-fungsional** seperti **keamanan**, **keandalan**, **kinerja**, **kemudahan penggunaan**, dan **pemeliharaan**. Hasil dari evaluasi ini akan memberikan gambaran tentang seberapa baik sistem dapat bekerja sesuai dengan standar yang ditetapkan dalam **kebutuhan non-fungsional** dan seberapa efektif sistem dalam memenuhi ekspektasi pengguna.

1. **Pengumpulan Data dan Informasi**

Pengumpulan data dan informasi merupakan langkah krusial dalam tahap awal pengembangan sistem **Smart Mosque**. Data yang dikumpulkan akan menjadi dasar untuk **menentukan kebutuhan sistem**, baik dari segi fungsional maupun non-fungsional, yang akan mengarahkan desain dan implementasi sistem secara keseluruhan. Oleh karena itu, penting untuk melibatkan berbagai pihak yang memiliki peran dan kepentingan dalam pengelolaan masjid, seperti pengurus masjid, jamaah, teknisi, dan penyedia perangkat. Masing-masing stakeholder ini memiliki kebutuhan dan harapan yang berbeda terkait dengan sistem **Smart Mosque**, sehingga pemahaman yang mendalam tentang kebutuhan mereka akan memastikan bahwa solusi yang dikembangkan dapat memenuhi ekspektasi mereka.

Untuk mendapatkan informasi yang akurat dan relevan, pengumpulan data dilakukan melalui beberapa metode, yaitu:

1. **Wawancara dengan Pengurus Masjid (Takmir):**

Pengurus masjid merupakan pihak yang paling berperan dalam pengelolaan operasional masjid, termasuk penjadwalan waktu sholat, pengelolaan perangkat elektronik, dan keuangan masjid. Wawancara akan digunakan untuk menggali kendala yang ada dalam pengelolaan masjid saat ini dan fitur-fitur yang diharapkan untuk memperbaiki

**Tujuan:** Untuk memahami tantangan dan kebutuhan pengurus masjid dalam mengelola waktu sholat, perangkat elektronik, dan keuangan masjid.

**Metode:** Wawancara langsung atau via Zoom/Google Meet

| No  | Pertanyaan | Jenis Jawaban |
| --- | --- | --- |
| 1   | Apa saja kendala yang Anda hadapi dalam mengelola jadwal sholat masjid saat ini? | Terbuka |
| 2   | Apakah sistem saat ini memungkinkan Anda untuk mengelola perangkat elektronik seperti sound system, lampu, dan AC? | Ya / Tidak |
| 3   | Apakah Anda merasa sistem manajemen keuangan saat ini efektif dalam mencatat zakat, infaq, dan wakaf? | Ya / Tidak |
| 4   | Seberapa sering Anda mengalami kesalahan atau kesulitan dalam mengelola kegiatan masjid? | Skala 1–5 |
| 5   | Fitur apa yang paling Anda butuhkan untuk memperbaiki pengelolaan masjid? (Misalnya: penjadwalan otomatis, kontrol perangkat, laporan keuangan) | Terbuka |

1. **Observasi Lapangan:**

Observasi dilakukan untuk memeriksa langsung bagaimana pengelolaan masjid saat ini, baik dari segi penjadwalan waktu sholat, pengelolaan perangkat, hingga pengumuman kegiatan masjid. Observasi ini memungkinkan pengumpulan data yang lebih objektif terkait bagaimana sistem saat ini berjalan dan bagian mana yang perlu perbaikan atau otomatisasi.

**Tujuan:** Untuk melihat secara langsung bagaimana masjid saat ini mengelola perangkat, jadwal, dan pengumuman, serta menilai kebutuhan yang belum terpenuhi.

**Metode:** Observasi langsung di lapangan, **Checklist Observasi:**

| No  | Aspek yang Diamati | Keterangan | Status |
| --- | --- | --- | --- |
| 1   | Penjadwalan Waktu Sholat | Periksa apakah masjid menggunakan sistem otomatis atau manual untuk waktu sholat | Ya / Tidak |
| 2   | Pengelolaan Perangkat Elektronik | Periksa apakah pengurus masjid mengontrol perangkat elektronik secara manual atau sudah otomatis | Ya / Tidak |
| 3   | Pengumuman & Informasi | Periksa apakah masjid menggunakan layar digital, atau apakah pengumuman masih dilakukan secara manual | Ya / Tidak |
| 4   | Manajemen Keuangan | Lihat bagaimana transaksi zakat, infaq, dan wakaf dicatat dan dikelola | Manual / Digital |
| 5   | Sistem Live Streaming | Periksa apakah masjid menyediakan layanan live streaming untuk kegiatan keagamaan | Ya / Tidak |

1. **Kuesioner / Survey Jamaah:**

Jamaah sebagai pengguna utama masjid memiliki kebutuhan khusus terkait akses informasi dan kenyamanan selama beribadah. Melalui kuesioner atau survey, kita akan mengetahui fitur-fitur yang diinginkan oleh jamaah, seperti aplikasi mobile, live streaming, transparansi keuangan, dan fitur lainnya yang dapat meningkatkan keterlibatan mereka dalam kegiatan masjid.

**Tujuan:** Untuk mengetahui fitur yang dibutuhkan oleh jamaah, seperti aplikasi mobile, live streaming, dan akses keuangan.

**Metode:** Kuesioner online atau fisik, **Pertanyaan:**

| No  | Pertanyaan | Jenis Jawaban |
| --- | --- | --- |
| 1   | Apakah Anda menggunakan aplikasi untuk memeriksa waktu sholat? | Ya / Tidak |
| 2   | Seberapa penting fitur **live streaming pengajian** bagi Anda? | Skala 1–5 |
| 3   | Apakah Anda ingin memiliki akses untuk **melihat laporan keuangan masjid** secara online? | Ya / Tidak |
| 4   | Fitur apa yang paling Anda butuhkan dalam aplikasi masjid? | Pilihan berganda (Notifikasi iqomah, jadwal sholat, live streaming, donasi digital, lainnya) |
| 5   | Seberapa sering Anda mengikuti **pengajian atau ceramah** di masjid? | Skala 1–5 |

1. **Benchmark / Studi Literatur:**

Melakukan studi literatur atau benchmarking terhadap masjid pintar lainnya di dunia, seperti **Masjid Istiqlal Jakarta** atau **Masjid Raya Bandung**, akan memberikan wawasan tentang penerapan teknologi yang sudah terbukti efektif dan dapat diadaptasi di masjid lain. Benchmarking ini penting untuk mengetahui **best practices** dalam pengelolaan masjid pintar dan mencari inspirasi dari masjid-masjid yang sudah berhasil mengimplementasikan sistem serupa.

**Tujuan:** Untuk mengetahui **best practices** atau contoh implementasi **Smart Mosque** yang telah berhasil di masjid lain di dunia.

**Metode:** Studi literatur dan benchmarking terhadap masjid pintar di dunia

**Referensi Masjid**:

1. **Masjid Istiqlal Jakarta (Indonesia):** Penggunaan **chatbot berbasis AI, layar informasi interaktif, dan sistem manajemen pengunjung berbasis digital.**
2. **Masjid Raya Bandung (Indonesia): Integrasi sistem manajemen keuangan digital** dan **monitoring lingkungan dengan sensor.**
3. **Masjid Kampus (misal: UI, UGM): Live streaming pengajian, donasi online,** dan **sistem manajemen kegiatan berbasis aplikasi.**
4. **Masjid di Turki & Timur Tengah (misal: Masjid Al-Haram, Masjid Al-Nour): Kontrol otomatis suhu dan pencahayaan, serta sistem informasi berbasis IoT** untuk jamaah dan pengunjung.

**Pertanyaan untuk Studi Literatur:**

1. **Bagaimana masjid-masjid besar lainnya mengelola waktu sholat, pengumuman, dan kontrol perangkat elektronik?**
2. **Apa solusi teknologi yang telah diterapkan di masjid besar di luar negeri yang dapat diadaptasi di sini?**
3. **Apa keuntungan dan tantangan yang dihadapi oleh masjid pintar lainnya dalam mengimplementasikan teknologi?**

**Instrumen ini dapat disesuaikan** sesuai dengan kebutuhan pengumpulan data di lapangan. Misalnya, Anda bisa mengubah jenis jawaban untuk **kuesioner atau survey** agar lebih sesuai dengan kondisi masjid yang diteliti. Dapat menggunakan **Google Forms** atau **Microsoft Forms** untuk **kuesioner online** atau **observasi lapangan** dengan format checklist. **Data dari wawancara** bisa dianalisis secara kualitatif untuk mengidentifikasi pola atau temuan umum yang dapat menjadi dasar pengembangan sistem

Tujuan utama dari pengumpulan data ini adalah untuk:

- **Mengidentifikasi kebutuhan** dari berbagai stakeholder, baik pengurus masjid, jamaah, teknisi, maupun vendor perangkat, untuk memastikan bahwa sistem **Smart Mosque** yang dikembangkan dapat memenuhi ekspektasi mereka.
- **Menentukan fitur dan fungsi** yang harus ada dalam sistem **Smart Mosque**, seperti penjadwalan waktu sholat otomatis, kontrol perangkat elektronik, pengumuman digital, dan manajemen keuangan digital.
- **Mendokumentasikan kebutuhan fungsional dan non-fungsional** yang akan menjadi dasar pengembangan sistem. Kebutuhan fungsional menjelaskan apa yang dilakukan oleh sistem, sedangkan kebutuhan non-fungsional menjelaskan bagaimana sistem harus bekerja, termasuk keamanan, keandalan, kinerja, dan kemudahan pemeliharaan.

Dengan metode-metode ini, data yang terkumpul diharapkan dapat memberikan gambaran yang jelas tentang bagaimana sistem **Smart Mosque** akan diimplementasikan, serta memastikan bahwa setiap aspek dari sistem tersebut dapat berjalan dengan lancar dan sesuai dengan harapan semua pihak yang terlibat.

1. **Output / Deliverables dari Analisis Kebutuhan**

Setelah tahap **Analisis Kebutuhan** selesai, beberapa **output** atau **deliverables** berikut perlu disusun untuk mendokumentasikan temuan-temuan penting terkait dengan fitur dan fungsi sistem **Smart Mosque**. Output ini akan menjadi referensi utama untuk tahap selanjutnya dalam pengembangan sistem. Berikut adalah tiga deliverables utama yang dihasilkan dari analisis kebutuhan:

### **Dokumen Requirement Specification (SRS)**

Dokumen **SRS (System Requirement Specification)** adalah dokumen yang berisi **daftar fitur fungsional dan non-fungsional**, **diagram stakeholder**, serta **prioritas fitur** yang harus ada dalam sistem **Smart Mosque**. Dokumen ini memberikan gambaran yang jelas mengenai apa yang harus dilakukan sistem dan bagaimana sistem tersebut harus bekerja.

Berikut adalah **tabel yang memuat konten dokumen SRS** (System Requirements Specification) dengan tiga bagian utama yang Anda minta, yaitu **Daftar Fitur Fungsional & Non-Fungsional**, **Diagram Stakeholder**, dan **Prioritas Fitur**. Tabel ini memberikan gambaran yang jelas mengenai spesifikasi kebutuhan sistem **Smart Mosque** yang akan dibangun.

### **Konten Dokumen SRS (System Requirement Specification)**

#### **Daftar Fitur Fungsional & Non-Fungsional**

| **Kategori** | **Fitur** | **Deskripsi** |
| --- | --- | --- |
| **Fungsional** | **Penjadwalan waktu sholat otomatis** | Sistem menghitung otomatis waktu sholat berdasarkan lokasi masjid dan metode Ephemeris / Kemenag, serta memperbarui secara otomatis saat ada perubahan musim atau lokasi. |
| **Kontrol perangkat elektronik** | Mengontrol perangkat seperti lampu, sound system, dan pendingin ruangan secara otomatis atau manual melalui aplikasi mobile atau dashboard. |
| **Pengumuman digital & live streaming** | Menampilkan pengumuman, jadwal sholat, dan acara masjid melalui layar digital (LED, TV, 7-segment), serta menyiarkan pengajian atau ceramah secara online (live streaming). |
| **Manajemen keuangan digital** | Mengelola zakat, infaq, wakaf secara digital dengan pencatatan otomatis, serta menyediakan laporan keuangan dan transparansi untuk pengurus dan jamaah. |
| **Monitoring lingkungan & sensor** | Menggunakan sensor untuk memantau suhu, kelembapan, cahaya, serta deteksi jumlah jamaah untuk kapasitas masjid yang optimal. |
| **Non-Fungsional** | **Keamanan data** | Semua data (kehadiran, donasi, dll) harus terenkripsi menggunakan standar keamanan tinggi (misalnya AES-256) untuk melindungi privasi jamaah dan pengurus. |
| **Keandalan sistem** | Sistem harus dapat berjalan dengan baik meskipun dalam kondisi offline dan kembali menyinkronkan data otomatis saat online. |
| **Performa** | Waktu respons sistem harus kurang dari 2 detik untuk update informasi, serta mendukung sistem scalable untuk beberapa masjid. |
| **Kemudahan penggunaan** | Dashboard dan aplikasi harus mudah digunakan oleh pengurus dan jamaah dengan antarmuka yang jelas, sederhana, dan instruksi mudah dipahami. |
| **Pemeliharaan** | Sistem harus mudah diperbarui dan diperbaiki oleh teknisi, serta dapat melakukan monitoring error otomatis untuk mendeteksi masalah teknis. |

#### **Diagram Stakeholder**

Diagram stakeholder ini menggambarkan **pihak-pihak yang terlibat dan berinteraksi** dengan sistem **Smart Mosque**. Berikut adalah stakeholder utama:

| **Stakeholder** | **Peran dan Kebutuhan** |
| --- | --- |
| **Pengurus Masjid (Takmir)** | Mengelola jadwal sholat, kegiatan masjid, dan pengelolaan keuangan. Mereka juga mengontrol perangkat elektronik dan memantau laporan keuangan serta transparansi untuk jamaah. |
| **Jamaah** | Mengakses jadwal sholat, pengumuman, dan live streaming pengajian. Mereka juga dapat memberikan donasi atau sumbangan secara digital melalui aplikasi masjid. |
| **Tim Teknis / Developer** | Memastikan perangkat keras dan perangkat lunak berfungsi dengan baik, serta menyediakan sistem monitoring dan pemeliharaan. Tim ini juga mengelola pembaruan perangkat dan aplikasi. |
| **Penyedia Perangkat & Software** | Menyediakan perangkat keras IoT, sensor, aplikasi mobile, dan dashboard yang diperlukan untuk operasional sistem Smart Mosque. Mereka juga bertanggung jawab atas penginstalan dan pemeliharaan perangkat. |

#### **Prioritas Fitur**

Tabel ini mengelompokkan fitur berdasarkan **prioritas** yang diperlukan untuk keberlangsungan operasional masjid. Beberapa fitur sangat penting, sementara yang lainnya bisa ditambahkan bertahap sesuai dengan kebutuhan dan pengembangan lebih lanjut.

| **Fitur** | **Prioritas** | **Keterangan** |
| --- | --- | --- |
| **Waktu sholat otomatis** | **Tinggi** | Fungsi utama untuk mengelola jadwal sholat secara otomatis dan akurat. |
| **Kontrol lampu & suara** | **Tinggi** | Penting untuk efisiensi energi dan kenyamanan jamaah saat beribadah. |
| **Pengumuman digital & live streaming** | **Sedang** | Bisa diterapkan pada tahap kedua untuk memperluas akses jamaah, terutama yang tidak bisa hadir di masjid. |
| **Manajemen keuangan digital** | **Tinggi** | Transparansi dan akuntabilitas dalam pengelolaan keuangan masjid secara digital dan real-time. |
| **Sensor lingkungan** | **Sedang** | Opsional untuk meningkatkan kenyamanan jamaah dengan memonitor suhu, kelembapan, dan cahaya di dalam masjid. |
| **Kolaborasi antar masjid** | **Lanjutan** | Fitur jangka panjang untuk sinkronisasi kegiatan dan berbagi data antara masjid di jaringan yang lebih besar. |

Dengan dokumen **System Requirement Specification (SRS)** ini, kita dapat mendefinisikan **fitur fungsional dan non-fungsional** yang harus ada dalam sistem **Smart Mosque**, serta mengidentifikasi **stakeholder** dan **prioritas fitur**. Dokumen ini akan menjadi dasar yang jelas dan terstruktur untuk tahap selanjutnya dalam pengembangan **Smart Mosque**, seperti **desain sistem** dan **pengembangan teknis**.

### **Use Case Diagram / User Story**

Pada tahap ini, kita akan membuat **Use Case Diagram** dan **User Story** untuk menggambarkan interaksi antara sistem **Smart Mosque** dan pengguna (stakeholder), serta tujuan yang ingin dicapai oleh masing-masing aktor dalam sistem.

### **User Story**

**User Story** adalah deskripsi singkat dan sederhana tentang bagaimana pengguna (aktor) berinteraksi dengan sistem untuk mencapai tujuannya. Berikut adalah beberapa contoh **User Story** yang dapat diimplementasikan pada sistem **Smart Mosque**:

User Story Table – Smart Mosque

| No  | User Story | Aktor | Tujuan | Kebutuhan |
| --- | --- | --- | --- | --- |
| 1   | User Story 1: Pengurus Masjid | Pengurus Masjid (Takmir) | Sebagai pengurus masjid, saya ingin jadwal sholat otomatis tampil di layar, agar jamaah bisa melihat waktu tepat untuk sholat. | \- Sistem dapat menampilkan waktu sholat dengan akurat dan otomatis pada layar display (LED TV, 7-segment).<br><br>\- Pengurus masjid dapat mengonfigurasi jadwal sholat melalui aplikasi atau dashboard yang terhubung dengan sistem. |
| 2   | User Story 2: Jamaah | Jamaah | Sebagai jamaah, saya ingin menerima notifikasi iqomah di aplikasi, agar bisa bersiap lebih awal untuk sholat berjamaah. | \- Aplikasi mobile atau notifikasi push yang mengingatkan jamaah sebelum iqomah dimulai.<br><br>\- Jamaah juga bisa mengakses jadwal sholat dan pengumuman kegiatan masjid melalui aplikasi ini. |
| 3   | User Story 3: Teknisi | Teknisi / Developer | Sebagai teknisi, saya ingin memantau status sistem dan memastikan perangkat berjalan dengan baik (termasuk kontrol perangkat elektronik, update jadwal otomatis, live streaming, dll). | \- Sistem menyediakan dashboard pemantauan untuk teknisi, di mana mereka dapat memeriksa status perangkat, melihat laporan kesalahan, dan mengupdate sistem atau perangkat keras jika diperlukan.<br><br>\- Kemudahan dalam melakukan perbaikan dan pembaruan perangkat untuk memastikan kelancaran operasional. |
| 4   | User Story 4: Sistem | Sistem | Sebagai sistem, saya ingin menyediakan data waktu sholat, mengirim notifikasi, dan memperbarui informasi secara otomatis agar masjid tetap berfungsi dengan efisien dan efektif. | \- Sistem dapat menghitung waktu sholat otomatis berdasarkan lokasi dan metode perhitungan yang tepat.<br><br>\- Sistem dapat mengirimkan notifikasi ke aplikasi atau layar masjid mengenai waktu sholat, pengumuman, atau perubahan jadwal.<br><br>\- Data harus selalu diperbarui secara otomatis (misalnya, update waktu sholat atau pengumuman). |

### **Manfaat Tabel User Story:** Memberikan **gambaran jelas** mengenai **fungsi sistem** dari perspektif masing-masing pengguna (aktor). Membantu **validasi** terhadap **fitur-fitur yang harus ada** berdasarkan kebutuhan stakeholder. Menjadi dasar untuk **desain sistem** dan pengembangan **user interface (UI)** serta **user experience (UX)**

### **Use Case Diagram**

**Use Case Diagram** menggambarkan interaksi antara **aktor** dan **sistem** yang dilakukan melalui **use cases** atau fungsionalitas sistem. Berikut adalah **Use Case Diagram** untuk **Smart Mosque**:

Aktor dan Use Cases – Smart Mosque

| Aktor | Use Cases |
| --- | --- |
| Pengurus Masjid (Takmir) | 1\. Mengelola jadwal sholat<br><br>2\. Mengontrol perangkat elektronik (lampu, sound system, AC)<br><br>3\. Melihat laporan keuangan<br><br>4\. Mengirim pengumuman digital |
| Jamaah | 1\. Melihat jadwal sholat<br><br>2\. Menerima notifikasi iqomah<br><br>3\. Mengikuti live streaming<br><br>4\. Melakukan donasi digital (zakat, infaq) |
| Teknisi | 1\. Memantau status sistem<br><br>2\. Memperbaiki atau memperbarui perangkat |
| Sistem | 1\. Menyediakan data waktu sholat<br><br>2\. Mengirim notifikasi<br><br>3\. Memperbarui informasi secara otomatis |

### **Penjelasan Aktor dan Use Cases:**

Dalam sistem **Smart Mosque**, terdapat beberapa **aktor utama** yang memiliki peran penting dalam pengoperasian dan pengelolaan masjid. **Pengurus Masjid (Takmir)**, sebagai aktor utama, bertanggung jawab atas pengelolaan **jadwal sholat**, pengendalian **perangkat elektronik** seperti lampu, sound system, dan pendingin ruangan, serta **pengelolaan keuangan** masjid. Pengurus masjid juga memiliki kewajiban untuk **mengirimkan pengumuman digital**, memastikan informasi penting seperti jadwal kegiatan masjid dan pengumuman disampaikan dengan efisien kepada jamaah. Sebagai contoh, pengurus akan mengelola **jadwal sholat otomatis** yang ditampilkan di layar masjid dan memastikan sistem perangkat berjalan dengan baik.

Selanjutnya, **jamaah** sebagai pengguna utama dari masjid berinteraksi dengan sistem untuk mengakses berbagai informasi. **Jamaah** memiliki kebutuhan untuk **melihat jadwal sholat** secara real-time, **menerima notifikasi iqomah** melalui aplikasi atau layar digital masjid, serta **mengikuti live streaming** jika mereka tidak bisa hadir di masjid. Selain itu, jamaah juga bisa memanfaatkan sistem untuk **melakukan donasi digital**, seperti zakat, infaq, dan wakaf, yang terintegrasi dengan sistem keuangan masjid, memudahkan mereka untuk berpartisipasi dalam kegiatan sosial.

**Teknisi** atau **developer** juga merupakan aktor penting dalam memastikan kelancaran operasional sistem. Teknisi bertanggung jawab untuk **memantau status sistem**, memeriksa apakah perangkat keras dan perangkat lunak berjalan dengan baik, serta **memperbaiki atau memperbarui perangkat** jika terjadi masalah. Mereka juga akan memastikan bahwa sistem dapat berfungsi dengan baik di masjid dan menyediakan **pemeliharaan rutin** agar sistem tetap optimal.

Terakhir, **sistem** itu sendiri memainkan peran sentral dalam **menyediakan data waktu sholat**, **mengirimkan notifikasi**, dan **memperbarui informasi secara otomatis** untuk menjaga kelancaran operasional masjid. Sistem ini tidak hanya harus **menyediakan data waktu sholat otomatis**, tetapi juga mengelola pengumuman dan notifikasi untuk jamaah. Selain itu, sistem juga harus memastikan bahwa informasi terkait pengelolaan masjid, seperti jadwal kegiatan, dapat diperbarui secara otomatis dan selalu akurat.

Dengan mendefinisikan **aktor** dan **use cases** ini, sistem **Smart Mosque** dapat lebih mudah dirancang untuk memenuhi kebutuhan berbagai pihak yang terlibat. Setiap aktor memiliki **tugas dan interaksi spesifik** dengan sistem yang akan memastikan operasional masjid berjalan dengan lebih efisien, transparan, dan dapat diakses oleh semua pengguna secara optimal.

#### **Visual Use Case Diagram:**

1. **Tips Praktis untuk Pengembangan Smart Mosque**
    - 1. **Mulai dari Kebutuhan Dasar**

Fokus pertama harus diberikan pada **kebutuhan dasar** yang paling penting untuk operasi masjid. **Modul wajib pertama** adalah:

- **Jadwal Sholat Otomatis**
- **Kontrol Sound System**
- **Display (LED, 7-segment)**

Modul ini **harus ada** untuk memastikan masjid dapat menjalankan kegiatan ibadah dengan tepat waktu dan memberikan kenyamanan bagi jamaah. Setelah **modul dasar ini** berfungsi dengan baik, barulah kita bisa menambahkan fitur lainnya.

- - 1. **Tambahkan Modul Lain Secara Bertahap**

Setelah fitur dasar berfungsi dengan baik, Anda dapat menambahkan **modul-modul lain** yang juga sangat dibutuhkan, namun bisa diprioritaskan pada **tahap kedua**. Misalnya:

- **Manajemen Keuangan Digital**: Zakat, infaq, wakaf yang terintegrasi dengan aplikasi atau sistem pengelolaan dana masjid.
- **Live Streaming**: Fitur untuk memungkinkan jamaah yang tidak dapat hadir di masjid tetap dapat mengikuti pengajian atau ceramah secara online.
- **Sensor Lingkungan**: Untuk memantau suhu, kelembapan, dan cahaya di dalam masjid demi kenyamanan jamaah.

Dengan menambahkan fitur secara bertahap, sistem tetap dapat berfungsi dengan baik dan tidak terlalu membebani pengelolaan atau pengembangan masjid.

- - 1. **Libatkan Pengurus dan Jamaah Sejak Awal**

Penting untuk melibatkan pengurus masjid dan jamaah dalam proses desain dan pengujian sistem. Dengan melibatkan mereka sejak awal, Anda dapat:

- Memastikan bahwa sistem yang dikembangkan sesuai dengan kebutuhan nyata dan harapan pengurus serta jamaah.
- Menerima masukan berharga mengenai bagaimana fitur yang diinginkan dapat diterapkan dan memberikan manfaat yang maksimal.
- Meningkatkan keterlibatan dan kepercayaan pengurus serta jamaah terhadap sistem yang dikembangkan.

Wawancara, survey, dan observasi lapangan dapat digunakan untuk mengumpulkan feedback dan memastikan sistem memenuhi ekspektasi mereka.

**4\. Gunakan Dokumen Ini sebagai Fondasi Desain Sistem**

Dokumen Requirement Analysis ini adalah fondasi yang sangat penting untuk tahap desain sistem berikutnya. Setiap arsitektur dan prototipe sistem harus merujuk pada:

- **Fitur-fitur yang telah ditentukan** (penjadwalan waktu sholat, kontrol perangkat, pengumuman digital, dll.)
- **Kebutuhan fungsional dan non-fungsional** yang sudah didokumentasikan.
- **Prioritas fitur** berdasarkan kebutuhan masjid dan stakeholder.

Dengan menggunakan **dokumen ini sebagai panduan**, pengembangan sistem dapat berjalan lebih terstruktur, terarah, dan sesuai dengan kebutuhan sebenarnya.

Dengan mengikuti tips praktis ini, kita dapat merancang dan mengimplementasikan Smart Mosque secara bertahap, memastikan sistem yang dibangun relevan dengan kebutuhan masjid serta mampu beradaptasi dengan perkembangan teknologi. Poin penting yang harus diperhatikan adalah mulai dari modul dasar yang wajib, kemudian secara bertahap menambahkan modul-modul lanjutan, serta selalu melibatkan pengurus dan jamaah dalam setiap tahapan. Dengan cara ini, sistem akan berfungsi dengan optimal dan mendapatkan dukungan penuh dari semua pihak yang terlibat.

2\. Desain Sistem (System Design)

Tahap desain sistem bertujuan untuk membuat **blueprint** yang jelas tentang bagaimana sistem **Smart Mosque** akan dibangun dan dioperasikan. Desain ini menjadi pedoman bagi pengembangan perangkat keras, perangkat lunak, jaringan, dan integrasi sistem, sehingga sistem dapat berfungsi sesuai kebutuhan fungsional dan non-fungsional yang telah diidentifikasi sebelumnya.

1. **Arsitektur sistem:**

Arsitektur sistem adalah **struktur dasar yang menentukan bagaimana semua modul perangkat keras, perangkat lunak, dan jaringan berinteraksi** dalam sistem Smart Mosque. Salah satu elemen penting dari arsitektur ini adalah **Mode Offline**, yaitu kemampuan sistem untuk tetap berfungsi **tanpa koneksi internet,** sehingga operasional masjid tidak terganggu ketika jaringan cloud atau internet mengalami gangguan. Arsitektur sistem menentukan bagaimana **modul-modul perangkat keras, perangkat lunak, dan jaringan** berinteraksi. Dalam Smart Mosque, terdapat dua mode utama:

- 1. **Mode Offline**

Dalam arsitektur **Mode Offline,** Smart Mosque memiliki dua fungsi utama yang menjadi dasar operasional masjid, yaitu **menampilkan waktu sholat** dan **mengontrol perangkat elektronik**. Kedua fungsi ini memastikan bahwa meskipun sistem tidak terhubung ke internet, masjid tetap dapat berjalan secara normal. Mode Offline dirancang agar sistem Smart Mosque dapat menjalankan fungsi-fungsi dasar secara mandiri. Sistem tidak tergantung sepenuhnya pada cloud atau server online, sehingga masjid tetap dapat beroperasi meskipun terjadi **gangguan jaringan**. Mode ini sangat penting untuk memastikan **kontinuitas operasional**, terutama pada masjid-masjid yang memiliki keterbatasan akses internet atau berada di lokasi dengan koneksi tidak stabil.

**tabel ringkas poin-poin penting** dari **Mode Offline** dalam arsitektur sistem Smart Mosque. Tabel ini mencakup **fungsi utama, manfaat, dan pertimbangan teknis**, sehingga mudah dijadikan referensi cepat atau dimasukkan ke **System Design Document (SDD).**

Tabel Poin Penting – Mode Offline Smart Mosque

| Kategori | Poin Penting | Keterangan / Contoh |
| --- | --- | --- |
| Fungsi Utama | Menampilkan Waktu Sholat | Menampilkan jadwal sholat secara otomatis pada LED display, 7-segment, atau TV; update otomatis saat sistem online kembali. |
| Mengontrol Perangkat Elektronik | Mengatur lampu, sound system, pendingin ruangan sesuai jadwal; kontrol otomatis atau manual melalui aplikasi/dashboard. |
| Manfaat | Operasional Masjid Tetap Berjalan | Fungsi dasar tetap berjalan meskipun internet mati; jadwal sholat terlihat, perangkat beroperasi sesuai jadwal. |
| Mengurangi Ketergantungan pada Cloud | Sistem dapat berjalan mandiri tanpa koneksi internet; sangat berguna di daerah dengan internet terbatas. |
| Meningkatkan Keamanan dan Kontrol | Data jadwal dan konfigurasi tersimpan di server lokal; pengurus memiliki kendali penuh; risiko kebocoran data berkurang. |
| Pertimbangan Teknis | Database Lokal | Server lokal (ESP32 / Raspberry Pi) menyimpan jadwal, konfigurasi perangkat, dan log operasional untuk mode offline. |
| Mekanisme Fail-Safe | Perangkat kembali ke pengaturan terakhir saat terjadi gangguan listrik atau kesalahan sistem. |
| Integrasi Hardware | Sensor input (suhu, cahaya, gerak) harus akurat dan kompatibel; output (display, sound system) mudah dikendalikan. |
| Backup Power Supply | UPS untuk server dan perangkat penting agar sistem tetap berjalan saat listrik mati. |

Mode Offline adalah **fondasi penting dari arsitektur Smart Mosque**, memastikan bahwa **operasional masjid tetap berjalan tanpa gangguan**, meningkatkan keandalan sistem, dan memberikan fleksibilitas bagi masjid yang memiliki koneksi internet terbatas. Mode ini harus menjadi **modul inti** sebelum mengembangkan fitur-fitur online dan kolaborasi cloud, sehingga sistem tetap stabil dan aman dalam kondisi apa pun.

- - 1. **Menampilkan Waktu Sholat**

Salah satu fungsi paling krusial dari sistem adalah menampilkan **jadwal waktu sholat secara otomatis**. Data jadwal sholat ini tersimpan di **server lokal**, yang biasanya menggunakan **ESP32, ESP8266, atau Raspberry Pi**. Layar masjid, baik berupa **LED display, 7-segment display, maupun TV**, akan menampilkan jadwal sholat sehingga jamaah dapat mengetahui waktu sholat dengan akurat dan tepat waktu.

Fitur ini juga memungkinkan **update jadwal otomatis** ketika sistem terhubung ke internet kembali. Dengan demikian, meskipun masjid sempat beroperasi secara offline, data jadwal sholat akan **disinkronisasi dengan server pusat** tanpa memerlukan intervensi manual dari pengurus. Hal ini menjamin **kontinuitas informasi** bagi jamaah dan mendukung ketepatan ibadah.

- - 1. **Mengontrol Perangkat Elektronik**

Fungsi kedua adalah **pengendalian perangkat elektronik** di masjid, seperti **lampu, sound system, dan pendingin ruangan**. Sistem dapat mengontrol perangkat ini secara otomatis berdasarkan **jadwal yang telah diatur di server lokal**, sehingga seluruh perangkat beroperasi secara sinkron dengan jadwal kegiatan masjid.

Selain kontrol otomatis, sistem juga menyediakan **opsi kontrol manual** melalui aplikasi mobile atau dashboard web, yang memungkinkan pengurus melakukan penyesuaian sesuai kebutuhan, misalnya saat ada acara khusus atau perubahan mendadak pada jadwal. Dengan kombinasi kontrol otomatis dan manual ini, masjid dapat beroperasi dengan lebih **efisien, nyaman, dan fleksibel**, tanpa bergantung sepenuhnya pada koneksi internet.

- - 1. **operasional masjid tetap berjalan**

Mode Offline memiliki manfaat yang sangat penting bagi operasional masjid, terutama dalam situasi di mana koneksi internet terbatas atau ketika terjadi gangguan jaringan. Salah satu manfaat utama adalah **operasional masjid tetap berjalan** meskipun sistem tidak terhubung ke internet. Fungsi-fungsi dasar seperti penjadwalan waktu sholat dan kontrol perangkat elektronik tetap aktif, sehingga jamaah dapat melihat jadwal sholat di layar masjid, dan perangkat seperti lampu serta sound system tetap beroperasi sesuai jadwal yang telah ditetapkan. Dengan demikian, kegiatan ibadah dan pengumuman masjid tidak terganggu, sehingga kelancaran operasional sehari-hari tetap terjaga.

- - 1. **mengurangi ketergantungan pada cloud**

Selain itu, mode offline juga membantu **mengurangi ketergantungan pada cloud**. Sistem dapat berfungsi secara mandiri tanpa harus selalu terkoneksi ke server pusat atau cloud, sehingga sangat bermanfaat bagi masjid yang berada di daerah dengan koneksi internet yang terbatas atau tidak stabil. Hal ini menjamin keandalan operasional masjid tetap terjaga dan meminimalkan risiko gangguan layanan.

- - 1. **Meningkatkan keamanan dan kontrol**

Mode Offline juga **meningkatkan keamanan dan kontrol**. Dengan menggunakan server lokal, pengurus masjid memiliki kendali penuh terhadap data penting, termasuk jadwal sholat, pengaturan perangkat, dan konfigurasi sistem. Karena data tidak harus selalu dikirim melalui internet, risiko kebocoran informasi berkurang secara signifikan. Dengan demikian, mode offline tidak hanya memastikan sistem tetap berjalan, tetapi juga memberikan keamanan data dan kontrol penuh bagi pengurus masjid.

- - 1. **Database Lokal**

Agar Mode Offline dapat berfungsi dengan optimal, beberapa **pertimbangan teknis** harus diperhatikan. Pertama, sistem memerlukan **database lokal** yang tersimpan pada server di masjid, seperti ESP32, ESP8266, atau Raspberry Pi. Database ini digunakan untuk menyimpan jadwal sholat, konfigurasi perangkat elektronik, dan log operasional harian. Dengan adanya database lokal, sistem dapat tetap menampilkan jadwal sholat dan mengontrol perangkat elektronik meskipun koneksi internet tidak tersedia, serta memungkinkan data disinkronkan secara otomatis saat sistem kembali online.

- - 1. **mekanisme fail-safe**

Kedua, sistem harus memiliki **mekanisme fail-safe** untuk mengantisipasi gangguan teknis atau pemadaman listrik. Mekanisme ini memastikan perangkat seperti lampu, sound system, dan display tetap berfungsi sesuai pengaturan terakhir ketika sistem offline. Fail-safe mode menjadi sangat penting untuk menjaga kontinuitas operasional masjid, terutama pada saat kegiatan ibadah berlangsung.

- - 1. **Integrasi Hardware**

Selain itu, integrasi antara **hardware dan software** harus diperhatikan secara matang. Sensor input, seperti sensor suhu, sensor cahaya, dan sensor gerak, harus **akurat dan responsif**, sehingga kontrol otomatis terhadap perangkat dapat berjalan dengan baik. Perangkat output, seperti LED display, 7-segment display, dan sound system, juga harus kompatibel dengan server lokal dan mudah dikendalikan oleh pengurus melalui dashboard atau aplikasi mobile.

- - 1. **Backup Power Supply**

Terakhir, disarankan adanya **backup power supply (UPS)** untuk server dan perangkat penting. Backup ini memastikan bahwa sistem tetap berfungsi sementara saat terjadi pemadaman listrik, sehingga tidak mengganggu operasi masjid. Dengan mempertimbangkan aspek-aspek teknis ini, Mode Offline pada Smart Mosque dapat berjalan **stabil, andal, dan aman**, menjadi fondasi yang kokoh sebelum pengembangan fitur-fitur online seperti live streaming, monitoring jarak jauh, dan sinkronisasi antar-masjid.

- 1. **Mode Online**

Mode Online adalah kondisi di mana sistem **Smart Mosque** terhubung ke internet atau cloud server, sehingga masjid dapat memanfaatkan berbagai layanan tambahan selain fungsi dasar. Sistem ini memungkinkan **monitoring jarak jauh**, **live streaming kegiatan**, dan **sinkronisasi data antar-masjid**, melengkapi operasi yang sudah berjalan di Mode Offline. Dengan adanya Mode Online, masjid dapat meningkatkan **efisiensi operasional**, **transparansi data**, dan **keterlibatan jamaah** secara signifikan.

| Kategori | Poin Penting | Keterangan / Contoh |
| --- | --- | --- |
| Fungsi Utama | Monitoring Jarak Jauh | Pengurus dan teknisi dapat memantau status perangkat dan kegiatan masjid secara online melalui dashboard. |
| Live Streaming | Menyiarkan pengajian, ceramah, atau acara masjid secara real-time ke jamaah yang tidak hadir fisik. |
| Sinkronisasi Multi-Masjid | Jadwal, pengumuman, dan laporan keuangan tersinkronisasi antar-masjid dalam jaringan cloud. |
| Update Otomatis | Pembaruan jadwal, pengumuman, dan konfigurasi sistem dilakukan otomatis saat sistem online. |
| Manfaat | Transparansi Data | Memudahkan pemantauan kegiatan dan keuangan secara real-time oleh pengurus dan jamaah. |
| Keterlibatan Jamaah Lebih Luas | Jamaah yang tidak hadir tetap dapat mengikuti kegiatan masjid. |
| Efisiensi Operasional | Pengurus dapat mengontrol perangkat dan kegiatan dari jarak jauh. |
| Kolaborasi Antar-Masjid | Memungkinkan berbagi data dan sinkronisasi jadwal antar-masjid. |
| Pertimbangan Teknis | Koneksi & Infrastruktur | Internet stabil, bandwidth memadai untuk live streaming, Wi-Fi/LAN untuk koneksi internal. |
| Keamanan Data | Data terenkripsi SSL/TLS, hak akses berbasis peran (RBAC). |
| Skalabilitas | Sistem mampu menangani beberapa masjid secara bersamaan tanpa menurunkan performa. |
| Integrasi dengan Mode Offline | Data offline tersinkronisasi otomatis saat online. |
| Monitoring & Pemeliharaan | Dashboard menampilkan status perangkat, log aktivitas, dan notifikasi kesalahan real-time. |

- - 1. **Fungsi Utama: Monitoring Jarak Jauh**

Salah satu fungsi utama Mode Online adalah **monitoring jarak jauh**. Sistem Smart Mosque memungkinkan pengurus masjid dan teknisi untuk memantau status perangkat elektronik, jadwal sholat, dan seluruh kegiatan masjid secara real-time melalui dashboard online. Hal ini sangat membantu pengurus, terutama di masjid besar atau yang memiliki beberapa lantai, karena mereka tidak harus berada secara fisik untuk memastikan semua perangkat berfungsi dengan baik. Selain itu, monitoring jarak jauh mempermudah teknisi dalam mengidentifikasi dan menangani masalah perangkat secara cepat, sehingga meminimalkan gangguan terhadap kegiatan ibadah.

- - 1. **Fungsi Utama: Live Streaming**

Mode Online juga mendukung fitur **live streaming** untuk pengajian, ceramah, atau kegiatan masjid lainnya. Fitur ini memungkinkan jamaah yang tidak dapat hadir secara langsung tetap mengikuti acara secara real-time melalui aplikasi mobile atau website masjid. Dengan live streaming, masjid dapat memperluas jangkauan dakwah dan keterlibatan jamaah, termasuk mereka yang berada di lokasi jauh atau memiliki keterbatasan mobilitas. Fitur ini meningkatkan interaksi dan partisipasi jamaah secara virtual tanpa mengurangi kualitas kegiatan ibadah.

- - 1. **Fungsi Utama: Sinkronisasi Multi-Masjid**

Fungsi berikutnya adalah **sinkronisasi multi-masjid**, yaitu kemampuan sistem untuk menyamakan jadwal sholat, pengumuman, dan laporan keuangan antar-masjid yang tergabung dalam jaringan cloud. Fitur ini penting bagi organisasi atau yayasan yang mengelola lebih dari satu masjid, sehingga seluruh jadwal dan kegiatan dapat terkoordinasi secara seragam. Sinkronisasi ini juga mendukung kolaborasi antar-masjid, seperti program pengajian berskala regional, penyaluran zakat, dan koordinasi acara sosial.

- - 1. **Fungsi Utama: Update Otomatis**

Sistem Mode Online mampu melakukan **update otomatis** terhadap data jadwal sholat, pengumuman, dan konfigurasi perangkat. Ketika ada perubahan, baik pada jadwal kegiatan atau konfigurasi perangkat, sistem secara otomatis memperbarui informasi pada semua layar display dan aplikasi mobile yang terhubung. Update otomatis ini mengurangi intervensi manual dari pengurus masjid dan memastikan informasi yang diterima jamaah selalu **akurat dan terbaru**.

- - 1. **Manfaat Mode Online: Transparansi Data**

Mode Online meningkatkan **transparansi data** masjid. Semua aktivitas, termasuk jadwal sholat, kehadiran jamaah, dan transaksi keuangan, dapat dipantau secara real-time oleh pengurus dan teknisi. Transparansi ini membantu pengurus dalam pengambilan keputusan, sekaligus meningkatkan kepercayaan jamaah terhadap pengelolaan masjid, khususnya dalam hal keuangan.

- - 1. **Manfaat Mode Online: Keterlibatan Jamaah Lebih Luas**

Fitur online, terutama **live streaming dan notifikasi aplikasi**, memungkinkan jamaah yang tidak hadir secara fisik tetap berpartisipasi dalam kegiatan masjid. Hal ini memperluas jangkauan dakwah dan meningkatkan keterlibatan komunitas secara keseluruhan, sehingga masjid menjadi lebih responsif terhadap kebutuhan jamaah di era digital.

- - 1. **Manfaat Mode Online: Efisiensi Operasional**

Mode Online juga meningkatkan **efisiensi operasional**. Pengurus masjid dapat mengontrol perangkat elektronik, memantau jadwal, dan mengelola kegiatan dari jarak jauh. Hal ini mengurangi kebutuhan pengurus untuk selalu berada di masjid dan memungkinkan mereka fokus pada pengembangan program ibadah dan sosial.

- - 1. **Manfaat Mode Online: Kolaborasi Antar-Masjid**

Kemampuan untuk melakukan **sinkronisasi multi-masjid** memungkinkan kolaborasi yang lebih luas antara masjid-masjid dalam satu jaringan. Masjid dapat berbagi data, mengatur jadwal secara kolektif, dan mengelola kegiatan sosial bersama, sehingga meningkatkan koordinasi dan efektivitas pengelolaan masjid.

- - 1. **Pertimbangan Teknis: Koneksi dan Infrastruktur**

Mode Online memerlukan **koneksi internet yang stabil** dan bandwidth memadai, terutama untuk fitur live streaming. Selain itu, jaringan lokal (Wi-Fi/LAN) harus mendukung komunikasi antara server lokal dan cloud server untuk menjamin data tetap tersinkronisasi secara real-time.

- - 1. **Pertimbangan Teknis: Keamanan Data**

Semua data yang dikirim melalui internet harus **terenkripsi menggunakan SSL/TLS** dan dilengkapi dengan **hak akses berbasis peran (RBAC)**. Hal ini memastikan bahwa hanya pengurus atau teknisi yang memiliki izin dapat mengakses data sensitif, seperti laporan keuangan dan konfigurasi perangkat.

- - 1. **Pertimbangan Teknis: Skalabilitas**

Sistem harus didesain **scalable**, sehingga dapat menangani beberapa masjid sekaligus tanpa mengurangi performa. Hal ini penting untuk yayasan atau organisasi yang mengelola lebih dari satu masjid, sehingga seluruh sistem dapat beroperasi secara efisien.

- - 1. **Pertimbangan Teknis: Integrasi dengan Mode Offline**

Mode Online harus **terintegrasi dengan Mode Offline**, sehingga data yang dikumpulkan saat sistem offline dapat tersinkronisasi otomatis saat koneksi internet tersedia. Dengan begitu, operasional masjid tetap konsisten dan tidak ada kehilangan informasi.

- - 1. **Pertimbangan Teknis: Monitoring dan Pemeliharaan**

Dashboard online harus menampilkan status semua perangkat, log aktivitas, dan notifikasi kesalahan secara real-time. Hal ini mempermudah teknisi melakukan **monitoring, pemeliharaan, dan perbaikan** tanpa harus berada langsung di lokasi.

**+---------------------+**

**| Pengurus Masjid |**

**+---------------------+**

**| | |**

**+------v----+ | +---v---+ +---------+**

**| Jadwal |---|---| Laporan |--| Notifikasi |**

**| Sholat | | | Keuangan | | iqomah |**

**+-----------+ | +---------+ +-------------+**

**|**

**+------------v------------------+**

**| Kontrol Perangkat |**

**+-----------------------------+**

**+--------------+**

**| Teknisi |**

**+--------------+**

**|**

**+-------------v--------------+**

**| Monitoring & Pemeliharaan |**

**+----------------------------+**

**+----------------------+**

**| Sistem |**

**+----------------------+**

**| | |**

**+----------------+ +----------------+**

**| Offline Server | | Cloud Server |**

**+----------------+ +----------------+**

**| |**

**v v**

**+--------------+ +----------------+**

**| Display / TV | | Dashboard Web |**

**+--------------+ | Mobile App |**

**| Sound System | +----------------+**

**+--------------+**

1. **Komponen utama:**

Sistem **Smart Mosque** terdiri dari beberapa komponen utama yang bekerja secara terintegrasi untuk memastikan operasional masjid berjalan efisien dan aman.

Berikut adalah **versi tabel lengkap Komponen Utama** dari sistem **Smart Mosque**, mencakup **server/controller, perangkat IoT, perangkat output, dan jaringan/cloud** beserta **fungsi, peran, dan pertimbangan teknis**. Tabel ini bisa langsung digunakan dalam **System Design Document (SDD)**:

**Tabel Komponen Utama – Smart Mosque**

| Komponen | Fungsi dan Peran | Pertimbangan Teknis |
| --- | --- | --- |
| Server / Controller | Mengelola logika sistem, membaca data dari sensor, memproses aksi, dan mengirim output ke perangkat. | ESP8266, ESP32, atau Raspberry Pi; mendukung **mode offline dan online**; menggunakan sistem operasi ringan (Raspbian atau MicroPython). |
| Perangkat IoT (Input) | Sensor suhu, sensor cahaya, sensor gerak, relay, modul kontrol perangkat elektronik. | Sensor harus **akurat, hemat energi, dan kompatibel** dengan server; relay digunakan untuk kontrol perangkat listrik. |
| Perangkat Output | 7-segment display, LED TV, sound system, aplikasi mobile untuk menampilkan informasi. | Output harus **real-time**, menampilkan jadwal sholat, pengumuman kegiatan masjid, dan notifikasi iqomah secara akurat. |
| Jaringan & Cloud | Wi-Fi atau LAN untuk koneksi online; cloud server untuk monitoring jarak jauh, sinkronisasi data, dan live streaming. | Cloud server (Firebase, AWS, Google Cloud) dengan keamanan tinggi; koneksi harus **stabil dan latency rendah** untuk mendukung live streaming dan sinkronisasi real-time. |

- - 1. **Server atau controller**

menjadi pusat pengendali sistem, yang mengelola logika, membaca data dari sensor, memproses aksi, dan mengirim output ke perangkat. Untuk server ini, digunakan perangkat seperti **ESP8266, ESP32, atau Raspberry Pi**, yang mendukung mode offline maupun online, dan menggunakan sistem operasi ringan seperti **Raspbian** atau **MicroPython**, sehingga mampu memproses data secara real-time tanpa membebani perangkat.

- - 1. **Perangkat IoT (Input)**

Komponen berikutnya adalah **perangkat IoT (input)** yang terdiri dari **sensor suhu, sensor cahaya, sensor gerak, relay**, dan modul kontrol perangkat elektronik. Sensor ini harus **akurat, hemat energi, dan kompatibel** dengan server, agar sistem dapat membaca kondisi lingkungan dan memicu aksi otomatis secara tepat. Relay digunakan untuk mengendalikan perangkat listrik seperti lampu atau sound system, sehingga perangkat dapat dikontrol secara otomatis sesuai jadwal masjid atau manual melalui aplikasi pengurus.

- - 1. **Perangkat Output**

Selanjutnya, **perangkat output** berfungsi untuk menampilkan informasi kepada jamaah dan pengurus. Komponen ini meliputi **7-segment display, LED TV, sound system**, dan **aplikasi mobile**. Output harus bekerja secara **real-time**, sehingga jadwal sholat, pengumuman kegiatan masjid, dan notifikasi iqomah dapat langsung diterima oleh jamaah tanpa penundaan. Perangkat output ini menjadi penghubung antara sistem dan pengguna, memastikan informasi tersampaikan dengan jelas dan tepat waktu.

- - 1. **Jaringan dan cloud**

menjadi komponen penting untuk mode online. Sistem menggunakan Wi-Fi atau LAN untuk komunikasi internal, dan cloud server seperti Firebase, AWS, atau Google Cloud untuk sinkronisasi data, monitoring jarak jauh, dan live streaming. Pertimbangan teknis pada komponen ini meliputi koneksi yang stabil, latency rendah, dan keamanan data yang tinggi agar seluruh informasi, termasuk jadwal sholat dan laporan keuangan, tetap terlindungi saat diakses dari jarak jauh. Dengan integrasi semua komponen ini, sistem Smart Mosque dapat beroperasi secara **efisien, aman, dan andal**, baik dalam kondisi offline maupun online.

1. **Diagram alur kerja:**

Diagram alur kerja sistem Smart Mosque menggambarkan secara konseptual bagaimana data mengalir dari sensor input ke server/controller, kemudian diteruskan ke perangkat output untuk digunakan oleh pengurus dan jamaah. Sistem ini dirancang agar dapat mengelola masjid secara otomatis dan real-time, baik dalam mode offline maupun online, sehingga operasional masjid dapat berjalan lancar dan efisien.



Tahap pertama dari alur kerja adalah input sensor, di mana berbagai sensor IoT seperti sensor suhu, cahaya, dan gerak membaca kondisi lingkungan dan aktivitas masjid. Sensor ini bertugas mengumpulkan data real-time yang menjadi dasar pengambilan keputusan sistem. Data yang dikumpulkan oleh sensor kemudian diteruskan ke server atau controller, yang dapat berupa ESP32, ESP8266, atau Raspberry Pi. Server/controller bertindak sebagai otak dari sistem, memproses data input, menentukan aksi yang harus dilakukan, dan mengelola logika operasional secara otomatis.

Setelah data diproses, sistem kemudian melakukan output ke perangkat yang sesuai. Output ini mencakup display LED atau 7-segment, sound system, dan aplikasi mobile/dashboard. Display menampilkan informasi penting seperti jadwal sholat dan pengumuman kegiatan masjid, sound system mengatur audio untuk iqomah atau pengumuman, dan aplikasi mobile/dashboard memungkinkan pengurus atau jamaah untuk mengakses informasi secara real-time dan melakukan kontrol manual jika diperlukan.

Dengan alur kerja ini, Smart Mosque mampu mengintegrasikan sensor, logika sistem, dan perangkat output secara harmonis, memastikan bahwa semua informasi dan kontrol dapat disampaikan tepat waktu, akurat, dan dapat diandalkan, baik saat beroperasi secara offline maupun online. Diagram blok alur kerja ini menjadi panduan visual yang membantu pengembang dan pengurus masjid memahami bagaimana setiap komponen berinteraksi dalam sistem secara keseluruhan.

1. **Database dan Manajemen Data:**

Database pada sistem Smart Mosque berfungsi sebagai pusat penyimpanan dan pengolahan semua data penting yang dibutuhkan untuk operasional masjid. Data yang dikelola meliputi beberapa jenis, antara lain waktu sholat, kehadiran jamaah, transaksi zakat/infaq, serta pengumuman dan notifikasi. Data waktu sholat mencakup jadwal sholat otomatis berdasarkan lokasi masjid, yang dapat disimpan menggunakan platform seperti MySQL atau Firebase Realtime DB. Data kehadiran jamaah mencatat siapa saja yang hadir di masjid, dan dapat dikelola menggunakan Firebase atau MongoDB. Untuk transaksi zakat, infaq, dan wakaf, pencatatan digital dilakukan dengan MySQL atau Firebase untuk memudahkan pengawasan dan pelaporan real-time. Sementara data pengumuman dan notifikasi iqomah dikelola melalui Firebase Realtime DB atau Node.js, sehingga notifikasi dapat dikirim secara otomatis ke aplikasi atau layar display masjid.

Dalam pengelolaan database, terdapat beberapa pertimbangan teknis penting. Pada mode offline, database lokal digunakan untuk menyimpan data jadwal sholat, konfigurasi perangkat, dan log aktivitas, sehingga sistem tetap dapat berfungsi walaupun tidak terhubung ke internet. Sedangkan pada mode online, database cloud digunakan untuk melakukan sinkronisasi data secara real-time, mendukung monitoring jarak jauh, dan memungkinkan integrasi antar-masjid yang tergabung dalam jaringan. Selain itu, keamanan data menjadi prioritas utama; semua data sensitif harus terenkripsi menggunakan metode AES, dan hak akses diatur secara berbeda antara pengurus masjid, jamaah, dan teknisi untuk memastikan bahwa hanya pihak yang berwenang yang dapat mengakses informasi tertentu.



Dengan manajemen database yang tepat, sistem Smart Mosque dapat menjamin keakuratan data, transparansi operasional, dan keamanan informasi, sehingga operasional masjid berjalan efisien dan aman baik dalam kondisi offline maupun online.

Tabel Database dan Manajemen Data – Smart Mosque

| Jenis Data | Deskripsi | Platform / Teknologi | Mode Offline | Mode Online | Keamanan Data |
| --- | --- | --- | --- | --- | --- |
| Waktu Sholat | Jadwal sholat otomatis berdasarkan lokasi | MySQL, Firebase Realtime DB | Database lokal menyimpan jadwal dan konfigurasi | Sinkronisasi cloud untuk update real-time | Data terenkripsi (AES), hak akses berbeda |
| Kehadiran Jamaah | Data kehadiran jamaah di masjid | Firebase, MongoDB | Disimpan lokal sementara, update saat online | Sinkronisasi ke cloud untuk monitoring jarak jauh | Data terenkripsi, akses terbatas |
| Transaksi Zakat/Infaq | Pencatatan donasi digital | MySQL, Firebase | Catatan transaksi disimpan sementara di server lokal | Update dan sinkronisasi cloud secara real-time | Data transaksi dienkripsi (AES), akses terbatas |
| Pengumuman / Notifikasi | Data pengumuman dan notifikasi iqomah | Firebase Realtime DB, Node.js | Data pengumuman tersimpan lokal sementara | Notifikasi dan update real-time melalui cloud | Hak akses berbeda sesuai peran |

**Penjelasan Database dan Manajemen Data – Smart Mosque**

- - 1. **Waktu Sholat**

Data waktu sholat mencakup jadwal sholat otomatis berdasarkan lokasi masjid. Data ini disimpan dalam **database lokal** pada server offline untuk memastikan sistem tetap dapat menampilkan jadwal sholat walaupun koneksi internet tidak tersedia. Ketika sistem kembali online, data ini akan **disinkronisasi ke cloud** secara real-time, sehingga jadwal selalu diperbarui dan akurat. Platform yang digunakan dapat berupa **MySQL** atau **Firebase Realtime DB**, dengan enkripsi data menggunakan **AES** dan hak akses yang berbeda bagi pengurus, jamaah, dan teknisi untuk menjaga keamanan dan privasi informasi.

- - 1. **Kehadiran Jamaah**

Data kehadiran jamaah mencatat siapa saja yang hadir di masjid pada waktu tertentu. Saat mode offline, data ini disimpan sementara di server lokal, sehingga pengurus tetap dapat memantau kehadiran secara internal. Begitu sistem online, data kehadiran tersinkronisasi ke cloud untuk **monitoring jarak jauh** atau analisis kolektif. Platform yang digunakan dapat berupa **Firebase** atau **MongoDB**, dengan mekanisme enkripsi dan hak akses terbatas agar data sensitif tetap aman.

- - 1. **Transaksi Zakat/Infaq**

Data transaksi mencakup semua pencatatan donasi digital dari jamaah, seperti zakat, infaq, dan wakaf. Pada mode offline, catatan transaksi disimpan sementara di server lokal agar tetap tersedia jika internet tidak aktif. Saat sistem kembali online, data akan diperbarui di cloud secara otomatis untuk mendukung **transparansi keuangan** dan pelaporan real-time. Platform yang digunakan bisa **MySQL** atau **Firebase**, dengan enkripsi AES dan hak akses terbatas agar hanya pengurus dan pihak berwenang yang dapat mengakses data transaksi.

- - 1. **Pengumuman dan Notifikasi**

Data pengumuman dan notifikasi iqomah berfungsi untuk menyampaikan informasi penting kepada jamaah. Pada mode offline, pengumuman disimpan di server lokal sehingga dapat tetap ditampilkan di layar masjid atau aplikasi mobile. Ketika sistem online, pengumuman ini tersinkronisasi ke cloud untuk **pengiriman notifikasi real-time**, live streaming, dan update informasi secara otomatis. Platform yang digunakan dapat berupa **Firebase Realtime DB** atau **Node.js**, dengan pengaturan hak akses yang berbeda agar hanya pengurus yang dapat mengedit pengumuman.

1. **Hasil Akhir Tahap Desain Sistem**

Tahap desain sistem menghasilkan dokumen lengkap yang dikenal sebagai **System Design Document (SDD)**, yang berfungsi sebagai pedoman utama dalam pengembangan sistem Smart Mosque. Salah satu komponen utama SDD adalah **Diagram Arsitektur Sistem**, yang menampilkan semua komponen utama sistem, termasuk sensor IoT, server/controller lokal, perangkat output, jaringan dan cloud, serta hubungan antar modul yang menjamin aliran data dan kontrol sistem berjalan secara efisien. Diagram ini memberikan panduan visual yang memudahkan pengembang dan pengurus masjid untuk memahami bagaimana setiap komponen saling berinteraksi.

Selain itu, SDD mencakup **Flowchart atau Alur Proses**, yang menunjukkan langkah-langkah operasional sistem dari **input sensor**, proses di **controller/server**, hingga ke **output** seperti display LED, sound system, dan aplikasi mobile atau dashboard. Alur ini menjelaskan bagaimana data lingkungan, jadwal sholat, dan pengumuman diproses secara real-time sehingga informasi dapat diterima jamaah dan pengurus secara tepat waktu.

Dokumen ini juga memuat **Skema Database**, yang menjelaskan struktur tabel, relasi antar data, serta alur sinkronisasi antara mode offline dan online. Skema database memastikan bahwa data penting seperti jadwal sholat, kehadiran jamaah, transaksi zakat/infaq, dan pengumuman dapat disimpan, diakses, dan diperbarui dengan aman serta konsisten, baik secara lokal maupun melalui cloud.

Selanjutnya, SDD menyertakan **Spesifikasi Komponen**, yang merinci perangkat keras seperti ESP32, sensor, relay, dan perangkat output, serta perangkat lunak termasuk aplikasi mobile, dashboard web, dan integrasi cloud. Spesifikasi ini memberikan panduan bagi tim pengembang mengenai standar hardware dan software yang digunakan, kompatibilitas antar komponen, serta kebutuhan teknis untuk menjaga performa sistem.

Terakhir, dokumen ini menjelaskan **Mode Operasi**, termasuk detail mode offline dan online, mekanisme fail-safe, backup data, serta sinkronisasi antar-masjid. Dengan informasi ini, pengurus masjid dan pengembang dapat memastikan bahwa sistem Smart Mosque **stabil, andal, dan aman** dalam berbagai kondisi, serta mampu memenuhi kebutuhan operasional dan fungsional masjid secara efisien.

Berikut saya buatkan **versi ringkas hasil desain sistem Smart Mosque** dalam bentuk **tabel + diagram konseptual**, yang menggabungkan semua poin dari **komponen, alur proses, database, dan mode operasi**. Tabel ini bisa langsung dimasukkan ke **System Design Document (SDD)**.

### **Tabel Ringkas Hasil Desain Sistem Smart Mosque**

| **Kategori** | **Deskripsi** | **Detail / Contoh** |
| --- | --- | --- |
| **Diagram Arsitektur Sistem** | Menampilkan semua komponen utama dan hubungan antar modul. | Sensor IoT → Controller/Server → Perangkat Output (Display, Sound, Mobile App) → Cloud / Dashboard. |
| **Flowchart / Alur Proses** | Menunjukkan aliran data dan proses dari input hingga output. | Input sensor → Controller / Server → Output: Display, Sound System, Aplikasi Mobile / Dashboard. |
| **Skema Database** | Menjelaskan struktur tabel, relasi, dan alur sinkronisasi data offline-online. | \- Waktu Sholat: MySQL / Firebase  <br>\- Kehadiran Jamaah: Firebase / MongoDB  <br>\- Transaksi Zakat/Infaq: MySQL / Firebase  <br>\- Pengumuman/Notifikasi: Firebase / Node.js |
| **Spesifikasi Komponen** | Rincian hardware, perangkat output, software, dan integrasi cloud. | \- Server/Controller: ESP32 / ESP8266 / Raspberry Pi  <br>\- Sensor IoT: Suhu, Cahaya, Gerak, Relay  <br>\- Output: LED / 7-segment, TV, Sound System, Aplikasi Mobile  <br>\- Software: Mobile App, Dashboard Web  <br>\- Cloud: Firebase, AWS, Google Cloud |
| **Mode Operasi** | Rincian Mode Offline dan Online, termasuk fail-safe, backup data, dan sinkronisasi antar-masjid. | \- Offline: Database lokal, kontrol perangkat dasar, display jadwal sholat  <br>\- Online: Sinkronisasi cloud, live streaming, monitoring jarak jauh, integrasi multi-masjid, update otomatis |

+----------------+

| Sensor IoT | <-- Suhu, Cahaya, Gerak, Relay

+-------+--------+

|

v

+----------------+

| Controller / | <-- ESP32 / Raspberry Pi

| Server |

+-------+--------+

|

+------------+------------+

| | |

v v v

+---------+ +---------+ +---------+

| Display | | Sound | | Aplikasi|

| LED / | | System | | Mobile /|

| 7-Seg | | | | Dashboard

+---------+ +---------+ +---------+

|

v

+------------+

| Cloud / | <-- Firebase / AWS / Google Cloud

| Dashboard |

+------------+

**Penjelasan Diagram:**

1. **Sensor IoT**: Mengumpulkan data lingkungan dan aktivitas masjid (suhu, cahaya, gerak, relay).
2. **Controller / Server**: Memproses data input, menentukan aksi, dan mengelola logika sistem.
3. **Output**: Menyediakan informasi melalui **display, sound system, dan aplikasi mobile/dashboard** untuk jamaah dan pengurus.
4. **Cloud / Dashboard**: Menyediakan sinkronisasi antar-masjid, monitoring jarak jauh, live streaming, dan update otomatis.

3\. Pemilihan Perangkat Keras dan Perangkat Lunak (Hardware & Software Selection)

Perangkat Keras (Hardware)

1. Prosesor / Controller: ESP32, Raspberry Pi 4
2. Perangkat Input:
    - Sensor gerak (motion sensor)
    - Sensor cahaya & suhu
    - Sensor jarak untuk jumlah jamaah (opsional)
3. Perangkat Output:
    - LED/7-segment display
    - Sound system / speaker
    - TV LED atau monitor untuk informasi
4. Koneksi & Infrastruktur:
    - Wi-Fi Router untuk mode online
    - Backup power supply (UPS)

Perangkat Lunak (Software)

1. Firmware IoT: Arduino IDE / MicroPython untuk ESP32
2. Backend / Server: Node.js / Python Flask / Django
3. Database: Firebase Realtime DB, MySQL, atau MongoDB
4. Frontend / App: Android Studio untuk aplikasi Android; web dashboard (HTML/CSS/JS + framework seperti React atau Vue)
5. Cloud / Online Integration: AWS, Google Cloud, atau Firebase untuk sinkronisasi antar masjid

4\. Pengembangan Sistem (System Development)

Tahapan Pengembangan:

1. Prototyping: Buat prototipe kecil, misal pengendalian satu lampu dan jadwal sholat sederhana
2. Integrasi Modul:
    - Module penjadwalan sholat
    - Module kontrol perangkat elektronik
    - Module pengumuman digital / live streaming
    - Module keuangan dan laporan
3. Testing tiap modul: Pastikan masing-masing berfungsi sebelum digabungkan

Tools:

- Arduino IDE / PlatformIO untuk programming ESP32
- Visual Studio Code untuk backend & dashboard
- Android Studio untuk mobile app
- MQTT / HTTP untuk komunikasi IoT

5\. Pengujian Sistem (System Testing)

Jenis Pengujian:

1. Unit Testing: Tes setiap modul secara terpisah (misal: sensor gerak, display)
2. Integration Testing: Tes integrasi seluruh modul
3. System Testing: Tes seluruh sistem berjalan sesuai SRS
4. User Acceptance Testing (UAT): Pengurus masjid dan jamaah mencoba sistem

Parameter Pengujian:

- Akurasi waktu sholat
- Respons sistem terhadap input sensor
- Kecepatan update data real-time
- Kemudahan penggunaan aplikasi

6\. Implementasi / Deployment

Langkah:

1. Pasang perangkat di masjid
2. Konfigurasi jaringan dan koneksi cloud
3. Instal aplikasi mobile / web dashboard
4. Pelatihan pengurus masjid (takmir) menggunakan sistem
5. Monitoring awal untuk memastikan semua berjalan lancar

Tips: Mulai dari satu masjid sebagai pilot project sebelum diperluas ke masjid lain.

7\. Pemeliharaan dan Monitoring (Maintenance & Monitoring)

Fokus:

1. Pemeliharaan hardware (sensor, display, power supply)
2. Update software (bug fixes, penyesuaian jadwal)
3. Backup data & keamanan data jamaah
4. Analisis performa sistem secara berkala
5. Evaluasi dan penambahan fitur baru (mis. integrasi AI, analisis big data untuk jadwal dan jamaah)

8\. Pengembangan Lanjutan (Future Development)

Ide Pengembangan:

- Integrasi AI & Big Data: Analisis pola jamaah, prediksi kepadatan sholat
- Dashboard untuk multi-masjid (networked Smart Mosque)
- Integrasi dengan smart city / smart community
- Fitur keamanan lebih canggih (CCTV + sensor pintu)
- Integrasi keuangan digital (e-payment untuk zakat, infaq, wakaf)

Diagram Alur Sistem Smart Mosque (Sederhana)

\[Sensors IoT\] → \[Controller ESP32 / Raspberry Pi\] → \[Database / Cloud\]

↓

\[Display / Speaker / TV / Mobile App / Dashboard\]

**Keterangan:**

- _Sensors IoT:_ motion, suhu, cahaya, jarak
- _Controller:_ menjalankan logika, membaca sensor, mengirim data
- _Database/Cloud:_ menyimpan semua data dan sinkronisasi antar masjid
- _Output:_ informasi waktu sholat, pengumuman, audio, tampilan visual, laporan keuangan

**Kesimpulan: Langkah Prioritas Awal**

1. **Buat dokumen SRS** → pahami kebutuhan masjid & jamaah
2. **Rancang arsitektur sistem (SDD)** → tentukan mode offline & online
3. **Pilih hardware & software** sesuai anggaran dan kebutuhan masjid
4. **Bangun prototipe sederhana** → mulai dengan modul penjadwalan waktu sholat + kontrol lampu/speaker
5. **Uji coba dan evaluasi prototipe** → pastikan stabil dan user-friendly
6. **Implementasi di masjid pilot** → training pengurus + monitoring
7. **Kembangkan fitur lanjutan** → integrasi multi-masjid, AI, big data