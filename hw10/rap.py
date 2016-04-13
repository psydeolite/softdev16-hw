import time

def wrapper(f):
    def inner(*arg):
        ti=time.time()
        r=f(*arg)
        tf=time.time()
        name=f.func_name
        print "Time taken for function ["+name+"] is " + str(tf-ti)
        return r
    return inner
        
def helloworld():
    a=0
    for x in range(6):
        a+=x
    return a

#@wrapper
#def executioner():
#    return helloworld()

#test=executioner()
#print test

