# GEOSER GEOSENTETİK CRM v2.0

GEOSER Geosentetik müşteri ilişkileri yönetim sistemi (CRM).

**Canlı Site:** [https://www.geosercrm.com](https://www.geosercrm.com)

## Teknolojiler

- HTML5 / CSS3 / JavaScript
- Firebase Authentication & Firestore
- GitHub Pages (Hosting)
- Let's Encrypt SSL Sertifikası
- Progressive Web App (PWA)

## Özellikler

- Müşteri yönetimi (ekleme, düzenleme, silme)
- Teklif ve sipariş takibi
- Dashboard istatistikleri
- Takvim görünümü
- Mobil uyumlu tasarım (responsive)
- PWA desteği (offline çalışma)
- Giriş rate limiting (5 deneme / 30 saniye kilitleme)
- HTTPS zorunlu yönlendirme

## Proje Yapısı

```
geoser-crm/
├── index.html        # Ana uygulama dosyası
├── manifest.json     # PWA manifest dosyası
├── sw.js             # Service Worker
├── CNAME             # Custom domain
└── README.md         # Bu dosya
```

## Yapılan Güncellemeler (Mart 2026)

### Güvenlik
- Content-Security-Policy meta etiketi eklendi
- X-Content-Type-Options: nosniff eklendi
- HTTPS zorunlu yönlendirme scripti eklendi
- Giriş formu rate limiting eklendi (5 başarısız deneme sonrası 30 sn kilitleme)
- Form method="post" ve action güvenliği eklendi
- Input alanlarına autocomplete ve minlength özellikleri eklendi

### SEO
- Meta description eklendi
- Meta keywords eklendi
- Meta robots (noindex, nofollow) eklendi
- Meta author eklendi
- Canonical URL eklendi
- Open Graph etiketleri eklendi (title, description, type, url, image, locale, site_name)
- Twitter Card etiketleri eklendi (card, title, description, image)

### Erişilebilirlik (Accessibility)
- 60+ aria-label form alanlarına eklendi
- 12 aria-label sidebar navigasyonuna eklendi
- 8 aria-label arama inputlarına eklendi
- 5 aria-label filtre selectlerine eklendi
- role="main" ve role="navigation" semantik roller eklendi

### UX Geliştirmeleri
- "Beni Hatırla" checkbox eklendi
- "Şifremi Unuttum" bağlantısı eklendi
- Favicon linkleri eklendi (192x192, 512x512)
- Telif hakkı yılı 2026 olarak güncellendi + dinamik yıl scripti eklendi

### Hosting & SSL
- GitHub Pages üzerinde barındırma yapılandırıldı
- Natro DNS kayıtları ayarlandı (4 A kaydı + CNAME)
- Let's Encrypt SSL sertifikası aktif edildi
- Enforce HTTPS etkinleştirildi

## DNS Yapılandırması

| Kayıt Türü | Host | Değer |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | erdal0007.github.io |

## Lisans

© 2026 GEOSER GEOSENTETİK - Tüm hakları saklıdır.
