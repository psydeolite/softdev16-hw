def union(a,b):
    return a+[x for x in b if x not in a]
    #return [x for x in a]
    pass

def intersect(a,b):
    return [x for x in a if x in a and  x in b]

def set_diff(u,a):
    return [x for x in u if x in u and x not in a]

def sym_diff(a,b):
    return set_diff(union(a,b), intersect(a,b))

def cart_prod(a,b):
    return [(x,y) for x in a for y in b]

a=[1,2,3]
b=[2,3,4]

ca=[1,2]
cb=['red','white']

print union(a,b)
print intersect(a,b)
print set_diff(a,b)
print sym_diff(a,b)
print cart_prod(ca,cb)
