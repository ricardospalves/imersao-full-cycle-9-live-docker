# O arquivo _Dockerfile_

O _Dockerfile_ é uma forma de ajudar a organizar melhor um projeto no _Docker_.
Esse arquivo cria uma nova imagem para ser usada no projeto em produção ou
desenvolvimento.

## Criando uma nova imagem

Para criar uma nova imagem baseada no _Dockerfile_ é preciso que o terminal
esteja no mesmo diretório do arquivo e então executar o seguinte comando:

```sh
docker build -t my-docker-image .
```

Pontos importantes sobre o comando acima:

- O `-t my-docker-image` serve para dar um nome para a imagem
- O `my-docker-image` é apenas exemplo, a imagem pode ter qualquer nome
- O `.` (ponto) é o caminho para o _Dockerfile_

O comando acima serve para criar uma imagem baseada em um _Dockerfile_ padrão,
mas podemos especificar o _Dockerfile_ que queremos usar, como um exclusivo para
produção por exemplo. Para isso, nós podemos usar o seguinte comando:

```sh
docker build -t my-production-docker-image -f Dockerfile.prod .
```

Pontos importantes sobre o comando acima:

- O `-t my-production-docker-image` serve para dar um nome para a imagem
- O `my-production-docker-image` é apenas exemplo, a imagem pode ter qualquer nome
- O `-f Dockerfile.prod` serve para especificar o arquivo que será usado para criar a imagem
- O `.` (ponto) é o caminho para o _Dockerfile_

Para rodar a imagem que criamos, basta usar o comando padrão:

```sh
docker run my-docker-image
```

Há também uma opção `-d` que roda o _Docker_ mas evita que o terminal fique
bloqueado:

```sh
docker run -d my-docker-image
```

Entrando no bash da imagem:

```sh
docker exec -it <CONTAINER_ID> /bin/bash
```

Saindo do bash:

```sh
exit
```

Espelhando o projeto:

```sh
docker run -d -v $(pwd):/home/node/app my-docker-image
```

Rodando o servidor express criado:

```sh
docker run -d -v $(pwd):/home/node/app -p 8000:3000 my-docker-image
```
