X sends to Y

publish
    send
    routing
    receive
events



an IoG node learns about the network topology



questions

+ how to advance pod in tube
+ how to detect/emit pod location
+ how to connect node-to-node
+ how to detect networked nodes


+ to use Erlang for core?



tube cells

```
A  B  C  D  E  F  G
x  x  x  x  x  x  x

-  +  +  +  +  +  +
+  -  +  +  +  +  +
+  +  -  +  +  +  +
+  +  +  -  +  +  +
+  +  +  +  -  +  +
+  +  +  +  +  -  +
+  +  +  +  +  +  -
```

+ who controls the cells' activations?
