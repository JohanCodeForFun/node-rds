# node api
använd följande för att node servern,
- `node --env-file=.env index.js`

- [ ] git clone till din dator
- [ ] öppna projektet
- [ ] npm install dependencies
- [ ] Skapa AWS RDS Postgres server
- [ ] Ladda ned Certificate authority, rds-ca-rsa2048-g1
  - [ ] Läs, https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html
  - [ ] ladda ner, https://truststore.pki.rds.amazonaws.com/eu-north-1/eu-north-1-bundle.pem
  - [ ] Skapa ny mapp, /.ssh
  - [ ] Lägg eu-north-1-bundle.pem i /.ssh
- [ ] Kopiera innehållet i env.example
- [ ] Skapa ny .env fil
- [ ] Klistra in värden från env.example
- [ ] Fyll i tomma fälten från AWS RDS databasen
- [ ] Kör lokalt med, `node --env-file=.env index.js`
- [ ] Testa med postman, GET http://localhost:3000/reviews
- [ ] Ladda upp till EC2 instans,
  - [ ] `scp -i ~/downloads/key.pem ~/path/to/files ec2-user@<ip.till.din.ec2>:/home/ec2-user`
- [ ] Kör med, `nohup node --env-file=.env index.js &`
  - Kommandot `nohup ... &` gör att node servern körs i bakgrunden
- [ ] Testa att det fungerar med postam,
  - [ ] GET `http://<ip.till.din.EC2>:3000/reviews`

## Bra jobbat!
Nu har du kopplat backend server som körs i bakgrunden till en relations databas i molnet!
