print ("hello world")
for i in range (5):
    print ("hi")

hello = "hello"



def a ():
    global hello
    print (hello)
a()


class patient:
    
    patientNum = 0; #keeps track of number  of patients



    
    #constructor 
    def __init__(self, name, age, gender, condition, conditoinValue, pregnancy ):
        self.age = age
        self.name = name
        self.gender = gender
        self.condition = condition 
        self.pregnancy = pregnancy
##        patientNum += 1
##        self.value = assignValue(conditoinValue, age, pregnancy, elapsedTimeSinceDisease)
        
     #finds the priority value of the patient 
        def assignValue(conditoinValue, age, pregnancy):
            if (age < 5 or age >= 60):
                ageValue = 2
            elif (age < 16 or 41 < age < 60):
                ageValue = 1
            else :
                ageValue = 0
    
            if (pregnancy > 9):
                pregnancyValue = 9
            
            value = conditionValue * 100 + agevalue +  pregnancyValue
            return value


class category:
    def __init__(self, name):
        self.name  = name

ali = patient(1,2,1,1,1,1)
billy = patient ("Billy Bill", 22, "M", "COLD", 2, 0)
patient.patientNum += 1
print(ali.age + patient.patientNum)
print (billy.name ,  billy.age, billy.condition)
