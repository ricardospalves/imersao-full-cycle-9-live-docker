# Rodando um servidor com o _Docker_

Para este exemplo usaremos o servidor _nginx_.

Rodando a imagem do nginx:

```sh
docker run nginx:1.23.1-alpine
```

## Acessando o servidor via browser

Para acessar o servidor no browser, é preciso fazer uma ligação entre o _Docker_
e a máquina.

Primeiro nós pegamos a porta que está sendo usada internamente no _Docker_ com
o comando:

```sh
docker run nginx:1.23.1-alpine
```

O resultado será parecido com esse:

```sh
| CONTAINER ID | IMAGE               | COMMAND                | CREATED        | STATUS       | PORTS  | NAMES         |
| ------------ | ------------------- | ---------------------- | -------------- | ------------ | ------ | ------------- |
| e65561c57b24 | nginx:1.23.1-alpine | "/docker-entrypoint.…" | 12 seconds ago | Up 9 seconds | 80/tcp | sweet_darwin  |
```

A porta usada no _Docker_ é a **80**, como é mostrado no `80/tcp`.

Agora nós informamos a porta que queremos acessar no browser interligando à
porta do _Docker_:

```sh
docker run -p 8000:80 nginx:1.23.1-alpine
```

A opção `-p 8000:80` é onde informamos a porta, onde o `8000` é a porta que
queremos acessar no browser e o `80` é a porta que está sendo usada no _Docker_.

Agora é só acessar `http://localhost:8000` no browser e a página de boas-vindas
do _nginx_ será exibida.

## Exibindo uma página HTML no servidor

Para exibir uma página HTML personalizada no servidor é preciso usar a opção
`-v` que significa _volumes_. Ele basicamente vai espelhar os arquivos que estão
na máquina para o _Container_:

```sh
docker run -p 8000:80 -v $(pwd):/usr/share/nginx/html nginx:1.23.1-alpine
```

No exemplo acima estamos espelhando os arquivos da nosso diretório atual, que
nesse caso é representado pelo comando `$(pws)`, no diretório do _nginx_ que é o
`/usr/share/nginx/html`.

É importante ressaltar que toda alteração feita na máquina irá refletir no
_Container_ e toda alteração feita no _Container_ irá refletir na máquina. Então
se criarmos uma novo arquivo na nossa máquina, ela será refletida no _Container_
e vice-versa.

Pra simular uma alterção no _Container_ que reflete na máquina, podemos entrar
no _Container_ através da linha de comando:

```sh
docker exec -it <CONTAINER_ID> /bin/sh
```

Nós podemos ver os diretórios e arquivos do _Container_ através do comendo:

```sh
ls
```

Agora precisamos acessar a pasta em que nossow arquivos estão sendo espelhados:

```sh
cd usr/share/nginx/html/
```

E finalmente podemos criar um arquivo:

```sh
touch file.txt
```

Agora podemos notar que esse arquivo criado através do _Container_ será
refletido na nossa máquina.
