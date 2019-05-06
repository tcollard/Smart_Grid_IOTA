# Smart_Grid_IOTA
Porject. Smart Grid using IOTA tangle

# STEP TO RUN IT
```
$> git clone https://github.com/tcollard/Smart_Grid_IOTA.git
$> cd Smart_Grid_IOTA/IOTA_front && npm install && npm run dev
```
open new terminal for each actors:
- api `node api.js`
- consumer `node consummer.js`
- energie_storage `node storage.js`
- generator_prod `node solar_panel.js`

# BUILD AND RUN WITH DOCKER
docker-compose --file local-dev.yml build && docker-compose --file local-dev.yml up --force-recreate
