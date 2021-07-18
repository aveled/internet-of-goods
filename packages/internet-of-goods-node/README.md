<p align="center">
    <a target="_blank" href="https://github.com/aveled/internet-of-goods/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-DEL-blue.svg?colorB=1380C3&style=for-the-badge" alt="License: DEL">
    </a>
</p>



<h1 align="center">
    Internet of Goods
</h1>



<h3 align="center">
    Infrastructure for Tangible Goods Transportation
</h3>



The Internet of Goods provides the specification, hardware designs, and software implementations for a network of tubes and routers to ensure the delivery of goods across significant distance.


<p align="center">
    <img src="https://raw.githubusercontent.com/aveled/internet-of-goods/master/about/images/iog-sketch.png" height="500px">
</p>


The `goods` are packaged in an appropriately sized `pod` and are sent from a `node` across the `network` to their `destination`.

The `pod` is a metallic, pill-shaped container.

The `node` has connections to other nodes through `tube`s.

The `tube` uses magnetic levitation to transport the `pod`.

Each `node` has one or more `router`s.


```
    GOODS
      |
      |
     POD
      |
      |
    NODE: SENDER TUBE --- ROUTER --- TUBE --- NODE: INTERMEDIARY TUBE
                                                |
                                                |
                                              ROUTER
                                                |
                                                |
                                               TUBE
                                                |
                                                |
                                                ...
                                                |
                                                |
                                                --- ... --- NODE: DESTINATION
```
