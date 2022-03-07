<div align="center">
    <h1 style="text-decoration:underline">Festiworld</h1>
</div>

![Festiworld1](https://i.ibb.co/QM0DqGZ/festiworld1.png)
![Festiworld2](https://i.ibb.co/Ld7HPLc/festiworld2.png)

---

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#authors">Authors</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

For our training at BeCode, we had to create a site that lists different music festivals. The site will include news, different festivals, weather, Airbnb. 


<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [React.js](https://reactjs.org/)
* [Laravel](https://laravel.com)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
* Composer
* Laravel >=8
    

### Installation

1. Clone the repo

    **Install frontend:**

2. cd frontend/
   
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start your local server
   ```sh
   npm start
   ```
    **Install backend:**

5. Import the database 

6. cd backend/

7. Install Composer packages
    ```sh
    composer install
    ```

8. Copy the .env file
    ```sh
    cp .env.example .env
    ```

9. Config your .env file
    ```
    - DB_HOST

    - DB_PORT 

    - DB_DATABASE 

    - DB_USERNAME  

    - DB_PASSWORD 
    ```

10. Get your encryption key
    ```sh
    php artisan key:generate
    ```
11. Start your local server
    ```sh
    php artisan serve
    ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Add Login/Registration
- [x] Add News API
- [x] Add Festivals API
- [ ] Add Weather API
- [ ] Add Airbnb API

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- Authors -->
## Authors

[Onur Gizem](https://github.com/GizemOnur) : Front-end

[Nacer Samir](https://github.com/nass22) : Back-end (API with laravel)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


* [Unsplash](https://unsplash.com)
* [NewsAPI](https://newsapi.org/)
* [Ticketmaster](https://ticketmaster.com)


<p align="right">(<a href="#top">back to top</a>)</p>
