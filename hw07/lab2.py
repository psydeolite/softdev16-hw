def repeat(s):
    def times(n):
        r=''
        while n>0:
            r+=s
            n-=1
        return r
    return times

r1=repeat('hello')
r2=repeat('goodbye')
print 'r1(2) -> ' + r1(2)
print 'r2(2) -> ' + r2(2)
print 'repeat("cool")(3) -> '+repeat('cool')(3)
