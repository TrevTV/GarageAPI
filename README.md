# GarageAPI
A simulated garage I made for a school project.<br>
<b>Note: this was made to be used for [LPRGarage](https://github.com/TrevTV/LPRGarage)</b>

## How It Works
The main HTML frontend uses JavaScript to constantly check for changes in `status.json`, if `garageStatus` equals `closed`, the garage is closed. If the variable equals `open`, the garage is open. <br> <br>

In the backend, the code waits for requests to the API, which tells the frontend garage either to be opened or closed.

## How To Use It

Once cloned, open a command prompt and navigate to the folder containing GarageAPI.<br>
In the prompt type `npm install` and let it download all needed dependencies. <br>
Go to `localhost:5050` in your web browser. <br> <br>

If the garage is closed (default), send a GET request to `localhost:5050/api/open`. <br>
If the garage is opened, send a GET request to `localhost:5050/api/close`.


## Screenshots
![Open Garage](https://i.gyazo.com/372a7816c22614d2f8afd6e7fa831c1e.png)
![Closed Garage](https://i.gyazo.com/59e0dc507e063f5a530295f41165d25b.png)


![Signature](https://i.ibb.co/c60k2sw/045995e009d085e509c3f8b30012150a.png)
