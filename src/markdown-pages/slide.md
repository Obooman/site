---
slug: "/slide"
date: "2020-03-14"
title: "Take snapshot of camera stream to mock local media"
---

## Schema Definition

Here is the schema and request URL definition.
the URL request will have JPEG file data as a response.

```js
schema = "some-schema"
host = “localframe”
URL = "some-schema://localframe?n=0"
```

## Tech explanation

> Native( android, iOS ) keeps capturing video from device camera, every unit of thenative handling unit we call it the _frame._
> ￼
> /process In general/

While web page want to get local video capturing frame slice as an image, an URL compose is needed. For example, in the EVC-kids project, a web page need to create an image which src attribute will be like this:

```js
const image = document.createElement(“img”);
image.src = "some-schema://localframe"
document.body.append(image);
```

By loading the image, the browser will send a network request to get the resource, the network request will be handled by native logic, waiting until next frame been got, the frame raw data will be converted to JPEG image buffer and be returned to webpage as the network response. while doing the frame to JPEG jobs, there are one rule we take, we won’t optimize the JPEG which cost CPU. If the frame is not ready or there’s something wrong with the image convert processing, the network request will be handled with a 404 response, under which condition frontend will try to have another request in 60ms.

Reason to return next frame instead of the current holding frame at the time web page the request arrives is that in this way native would not need to cache anything or store any data, all media info is in the memory.

While having two image switches to simulate the video, we have 2 image elements in the document, A and B.First, we set the src attribute of A to _some_schema://localframe?n=0_ , upon the onload event of A been fired we set it as visible, at the same time set the src attribute of B to _some_schema://localframe?n=1_, upon the onload event of B been fired we replace A with B and at the same time set src attribute of A to _some-schema://localframe?n=2_, so and so and the video animate.
