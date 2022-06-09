### Workshop TreinaWeb Multi-Stack #3

Backend desenvolvido em PHP + Laravel

Siga os passos abaixo para instalar e rodar apenas o backend.

#### Instalação
- `composer install`

#### Para rodar o projeto
- `php artisan migrate:fresh --seed`
- `php artisan serve`

#### Endpoints BACKEND
- `(GET) /pets - lista todos os pets`
- `(POST) /pets - cadastra novos pets - parâmetros: {name, history, photo}`
- `(GET) /adoptions - lista todos as adoções`
- `(POST) /adoptions - cadastra novas adoções - parâmetros: {email, value, pet_id}`

Obs: para o projeto funcionar perfeitamente o backend deve rodar em conjunto com o frontend.