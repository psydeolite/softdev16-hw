def isValid(p):
    r=isValidHelp(p)
    return 1 in r and 2 in r and 3 in r and len(r)>8

def isValidHelp(p):
    uc='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    lc='abcdefghijklmnopqrstuvwxyz'
    n='1234567890'
    s='.?!&#,;:-_*'
    r=[1 if x in uc else 2 if x in lc else 3 if x in n else 4 if x in s else 0for x in p]
    return r

print isValid('hello1')
print isValid('Hello1')

def rate(p):
    #perfect password: H3lL0t#3rE?!
    #max: 30/11
    vals=isValidHelp(p)
    total=sum(vals)
    strength=(len(vals)*total*10)/330
    if strength>10:
        return 10
    else:
        return strength

print rate('H3lL0t#3rE?!')
print rate('hello1')
print rate('He344%%%llo123')
