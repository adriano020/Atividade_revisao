numero1 = float(input("digite o primeiro numero:"))
numero2 = float(input("digite o segundo numero:"))

soma = numero1 + numero2
subtracao = numero1 - numero2
multiplicacao = numero1 * numero2

print("-" * 30)
print(f"resultado para os numeros {numero1} e {numero2}:")
print("- * 30")
print(f"Soma: {soma}")
print(f"Subtraçao: {subtracao}")
print(f"Multiplicação: {multiplicacao}")

if numero1!=0:
    divisao = numero1 / numero2
    print(f"Divisao: {divisao}")
else:
    print("Divisao: nao é possivel dividir por zaro!")
    print("-" * 30)
