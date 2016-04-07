def quicksort(liszt):
    if (liszt==[]):
        return liszt
    pivot=liszt[0]
    high=quicksort([x for x in liszt[1:] if x>=pivot])
    low =quicksort([x for x in liszt[1:] if x< pivot])
    return low+[pivot]+high

print quicksort([4,5,2,9,9,7,1])
