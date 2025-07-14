import random

target = random.randint(1,100)

while True:
    UserNum = int(input("Guess the Target Number or Quit(Q) : "))

    if(UserNum == target):
        print("Successfully Guessed !!!")
        break

    elif(UserNum < target):
        print("Try another Big Number.... ")

    else:
        print("Try another Small Number.... ")


print("   ________GAME OVER________  ")         


 
