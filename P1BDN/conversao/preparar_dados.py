# preparar_dados.py
# Exemplo de preparação do arquivo antes do mongoimport.

entrada = "socios.csv"
saida = "socios_sem_aspas"

with open(entrada, "r", encoding="utf-8") as arquivo:
    linhas = arquivo.readlines()

with open(saida, "w", encoding="utf-8") as arquivo:
    for linha in linhas:
        arquivo.write(linha.replace('"', ''))
