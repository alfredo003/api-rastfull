## What is REST?

um acranimo para Representational State Transfer ( Transferência de Estado Representativo).


A transferecia de dados, geralmente, usano o protocolo HTTP

O REST , delimita algumas obrigações nessas transferências de dados.

## what is RESTFULL?

Restfull, é a aplicação dos padrões REST

## 5  Constraints para ser RESTFULL

- _Client-server_ : Separação do cliente e do armazenamento de dados (Servidor), dessa forma poderemos ter uma portabiblidade do nosso sistema , usando o React para Web e React native para o Smartphone, por exemplo.

- _Stateless_ : Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender o responder (RESPONSE), requisição (REQUEST). Exemplo A sessão do usuário deverá ser enviada  em todas as requisições, para saber se aquele usuário  está autenticado e apto a usar os serviços, e o servidor não pooder lembrar que o cliente foi autenticado na requisição anterior.  

- _Cacheable_ : As respostas para uma requisição , deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.

- _Layered System_ :  O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo  necessários para o servidor responder a requisição , ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on demand (Optional)_ :  Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente



