Do you have tens of imageUploading, buttonClicking, imageLoading state in your component?

useBusy keep tracks of events in a intuitive way.
# Reference

``` 
const { busy, isBusy, notBusy, busyList } = useBusy({ warning: true});
```

### How to use?

```
onClick={() => isBusy('Waiting for image to load')}

busy('Waiting for image to load') //returns true
```

```
onClick={() => notBusy('Waiting for image to load')}

busy('Waiting for image to load') //returns false
```

```
onClick={() => isBusy('For for 5 Seconds', 5000)}

busy('Busy for 5 Seconds') // returns true, returns false in 5 seconds

```

```
console.log(busyList) //returns array of items you are busy with.
```

Note: Only strings accepted. Use {warning: true} if you want to see warning in development. (default is false)


