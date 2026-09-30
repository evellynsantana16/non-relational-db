# Treino igual ao fluxo do professor

Agora existem três arquivos importantes:

- `socios.csv` — arquivo original de treino
- `socios_sem_aspas` — arquivo já preparado, pronto para o `mongoimport`
- `socios_sem_aspas.csv` — mesma versão preparada, caso o terminal do Windows facilite trabalhar com extensão

## Fluxo

```text
socios.csv
   ↓
preparar_dados.py
   ↓
socios_sem_aspas
   ↓
mongoimport
   ↓
MongoDB
```

Para o treino da prova, vamos usar `socios_sem_aspas`.

O próximo passo será montar juntos o comando `mongoimport`.
