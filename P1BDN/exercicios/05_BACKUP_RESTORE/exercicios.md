# 10 EXERCÍCIOS — BACKUP/RESTORE

## 01
**Enunciado:** Backup Receita para pasta.
```bash
mongodump --db Receita --out ./backup
```
**Por quê:** BSON em pasta.

## 02
**Enunciado:** Backup comprimido.
```bash
mongodump --db Receita --out ./backup --gzip
```
**Por quê:** gzip compacta.

## 03
**Enunciado:** Backup em arquivo único.
```bash
mongodump --db Receita --archive=receita.archive
```
**Por quê:** archive = arquivo único.

## 04
**Enunciado:** Backup archive comprimido.
```bash
mongodump --db Receita --archive=receita.archive --gzip
```
**Por quê:** archive + gzip.

## 05
**Enunciado:** Restaure pasta.
```bash
mongorestore --db Receita ./backup/Receita
```
**Por quê:** restaura dump de pasta.

## 06
**Enunciado:** Restaure apagando coleções existentes.
```bash
mongorestore --db Receita --drop ./backup/Receita
```
**Por quê:** --drop limpa antes.

## 07
**Enunciado:** Restaure archive.
```bash
mongorestore --archive=receita.archive
```
**Por quê:** arquivo único.

## 08
**Enunciado:** Restaure archive gzip.
```bash
mongorestore --archive=receita.archive --gzip
```
**Por quê:** o dump foi comprimido.

## 09
**Enunciado:** Restaure archive gzip apagando dados existentes.
```bash
mongorestore --archive=receita.archive --gzip --drop
```
**Por quê:** combina as exigências.

## 10
**Enunciado:** Faça e depois restaure um backup archive gzip.
```bash
mongodump --db Receita --archive=receita.archive --gzip
mongorestore --archive=receita.archive --gzip
```
**Por quê:** primeiro cria, depois restaura.
