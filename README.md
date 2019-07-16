# NestJS Nats Demo

## Installation

```bash
git clone https://github.com/beeman/nestjs-nats
cd nestjs-nats
yarn install
```

## Usage

Make sure nats is running:

```bash
docker-compose up nats
```

Then in another terminal start the master:

```bash
yarn start:master
```

And in another terminal start the minion:

```bash
yarn start:minion
```

You can now use curl to invoke the sum method on the master using a http call:

```bash
curl 'localhost:3333/api/sum?digits=13,29'
# [master] MasterAppController picks up the request, splits the digits in to number[]
# [master] Sum method gets called on MasterAppService passing in the number[]
# [master] MasterAppService sends the { cmd: 'sum' } passing along the number[]
# [nats]
# [minion] MinionAppController picks up the { cmd: 'sum' }
# [minion] Sum method gets called on MinionAppService generation the result
# Results gets passed back the same route upwards.
42
```


```bash
curl 'localhost:3333/api/reverse?message=hello'
olleh
```

# License 

MIT 2019 Bram Borggreve
