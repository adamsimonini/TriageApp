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
        def assignValue():
            if (self.age < 5 or self.age >= 60):
                ageValue = 2
            elif (self.age < 16 or 41 < self.age < 60):
                ageValue = 1
            else :
                ageValue = 0
    
            if (self.pregnancy > 9):
                pregnancyValue = 9
            
            value = self.conditionValue * 100 + agevalue +  pregnancyValue
            return value


class category:
    def __init__(self, name):
        self.name  = name

ali = patient(1,2,1,1,1,1)
billy = patient ("Billy Bill", 22, "M", "COLD", 2, 0)
patient.patientNum += 1
print(ali.age + patient.patientNum)
print (billy.name ,  billy.age, billy.condition)
patients = []


def newPatient():
    global patients
    print ("New patient: ")
    print("Enter name")
    name  = str(input())
    print("enter age")
    age = input()
    print("Enter gender")
    gender  = str(input())
    print("Enter condition")
    condition  = str(input())
    print("enter condition value")
    conditionValue = input()
    print("enter pregnancy")
    pregnancy = input()
    newAdd = patient(name, age, gender, condition, conditionValue, pregnancy)
    patients.append(newAdd)
    print("patient successfully added." , "Patient value is", patients[len(patients)-1].assignValue() )


newPatient()
print(patients[0].name)




