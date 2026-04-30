# GÜNCELLEME TALİMATI

Bu zip'i açtıktan sonra terminalde şu komutu da çalıştırın (slug aynı kalır, sadece başlık değişir):

```
sed -i '' 's|"Küçük & Orta Göçük Onarımı"|"Mini Onarım"|g' src/lib/service-details.ts
sed -i '' 's|"Küçük & Orta Göçük Düzeltme"|"Mini Onarım"|g' src/lib/service-details.ts
```

Sonra:

```
git add . && git commit -m "yorumlar bölümü, favicon, mini onarım, no:11 adres, kapanış 21:00, detaylı iç temizlik" && git push
```
