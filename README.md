# learningReact

## laravel セットアップ

.envファイルに

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=任意
DB_USERNAME=任意
DB_PASSWORD=任意
```
を記述し、Backend/storeApp　ディレクトリ直下にて

```
php artisan key:generate
php artisan config:clear
php artisan migrate

// 起動
php artisan serve
```
apiサーバー的な役割をさせているので表示
