<template>
  <div>
    <p class="text-center text-dark pb-3 h1 p-3">
      <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, officia</strong>
    </p>
    <hr class="mb-0">
    <div class="d-flex justify-content-between pb-4">
      <div>
        <i class="fa-solid fa-calendar"></i>
        <span><time class=" ml-2 times">{{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
      </div>
      <div class="px-2">
        <i class="fas fa-share mr-1"></i>
        <span><time class="times">123</time></span>
      </div>

    </div>
    <div class="d-flex justify-content-center">
      <img class="image" src="@/img/image3.jpg" alt="adead"/>
    </div>

    <div class="single-content pt-5">
      <p class="lh-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
        aliquam architecto aut blanditiis consequuntur distinctio earum, eius
        enim eos error et excepturi expedita facilis hic id illo itaque
        laboriosam laborum libero magni minima neque non obcaecati officiis
        omnis perferendis perspiciatis rem repellat repellendus sapiente sed
        similique suscipit tenetur vel voluptatem voluptatum. Consectetur
        debitis deleniti dicta dolorem eveniet facilis hic impedit ipsam iure
        laborum molestias nihil non, officia pariatur provident repellat
        repellendus temporibus ullam veritatis voluptate. Ab consequuntur
        deserunt enim eum explicabo facilis natus, praesentium qui quisquam
        velit! Ad autem beatae consectetur deleniti deserunt ducimus eius enim
        eveniet exercitationem hic impedit incidunt iste laborum maiores non
        odit officiis qui quo repellendus reprehenderit repudiandae sed sint
        sunt ut, voluptas voluptatem voluptatibus voluptatum? A accusamus alias
        animi consequatur corporis culpa deleniti dignissimos eligendi eos
        eveniet illo magnam minus mollitia, nobis odio omnis quia repudiandae
        sequi veritatis voluptate! Ad asperiores deleniti libero maxime natus
        nulla perferendis quisquam unde, voluptatum! Accusamus cupiditate dicta,
        ex laudantium natus odit omnis quidem quos rerum sint soluta suscipit
        veritatis. Debitis doloribus incidunt odit quas velit! Amet aspernatur
        doloribus dolorum magni molestiae repellendus. Ab, aliquid consectetur
        corporis esse eveniet excepturi fugit, minima necessitatibus, pariatur
        provident quae quo sequi sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        A adipisci aut, beatae consectetur culpa, incidunt iure labore laboriosam minus modi nesciunt non rem
        repellat repudiandae saepe tempora vel. Fugiat, perferendis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aperiam asperiores beatae corporis
        delectus dolores ea eligendi enim illo, illum impedit labore laudantium, magnam magni molestias nesciunt
        nobis numquam optio placeat praesentium quia reiciendis rerum similique vel voluptas voluptates. Aperiam
        cupiditate dolor hic libero magni porro reiciendis sit totam!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis eius eos fugiat illo iste modi
        odit perspiciatis saepe voluptates? Accusantium deserunt expedita fugiat illum incidunt ipsum,
        libero minus modi molestiae nobis odio placeat quod ratione rem repudiandae tempora veniam!
        Dolore dolorem ea, eveniet expedita illo labore libero neque sequi.
      </p>
      <div id="carouselExampleCaptions" class="carousel slide my-5" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex justify-content-center">
              <img src="@/img/image2.png" class="d-block  imgs" alt="...">
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center">
              <img src="@/img/image1.jpg" class="d-block  imgs" alt="...">
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center">
              <img src="@/img/image3.jpg" class="d-block  imgs" alt="...">
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#"  data-target="#carouselExampleCaptions" data-slide="prev">
          <span class="carousel-control-prev-icon" ></span>

        </a>
        <a class="carousel-control-next" href="#" data-target="#carouselExampleCaptions" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
    <div>
      <div>
        <hr>
        <div class=" d-flex justify-content-between align-items-baseline">
          <div class="d-flex ">
            <h5>Ulashish:</h5>
            <a href="javascript:void(0)" class="share share-network-facebook" style="margin-left: 10px !important;">
              <svg
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.109 3.76741H9.81311V0.799413C9.51911 0.758969 8.508 0.667969 7.33045 0.667969C4.87345 0.667969 3.19034 2.21341 3.19034 5.05386V7.66797H0.479004V10.986H3.19034V19.3346H6.51456V10.9867H9.11623L9.52923 7.66875H6.51378V5.38286C6.51456 4.42386 6.77278 3.76741 8.109 3.76741Z"
                    fill="#9FABB9"
                ></path>
              </svg>
            </a>
            <a
                href="javascript:void(0)"
                class=" share share-network-telegram" style="margin-left: 10px !important;">
              <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.99098 10.4749L7.6822 14.818C8.12398 14.818 8.31531 14.6282 8.54475 14.4003L10.616 12.4209L14.9078 15.5639C15.6949 16.0025 16.2494 15.7715 16.4618 14.8397L19.2789 1.63931L19.2796 1.63853C19.5293 0.474972 18.8589 0.0199716 18.092 0.305416L1.53309 6.64508C0.402976 7.08375 0.420087 7.71375 1.34098 7.99919L5.57442 9.31597L15.4079 3.16297C15.8706 2.85653 16.2914 3.02608 15.9453 3.33253L7.99098 10.4749Z"
                    fill="#9FABB9"></path>
              </svg>
            </a>
            <a
                href="javascript:void(0)"
                class="share share-network-twitter" style="margin-left: 10px !important;"
            >
              <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.4152 4.2003C18.1743 3.6613 18.8128 2.98852 19.3332 2.21386V2.21308C18.6386 2.51719 17.8997 2.71941 17.1282 2.81741C17.9215 2.34375 18.5274 1.59941 18.8121 0.702635C18.0724 1.14364 17.2557 1.45475 16.3854 1.62897C15.6831 0.880746 14.6821 0.417969 13.5901 0.417969C11.4714 0.417969 9.76573 2.13764 9.76573 4.24541C9.76573 4.54875 9.79139 4.84041 9.85439 5.11808C6.67328 4.96252 3.85773 3.43808 1.96617 1.11486C1.63639 1.68808 1.44195 2.34375 1.44195 3.04919C1.44195 4.37452 2.12406 5.54897 3.14217 6.22952C2.52695 6.21786 1.92417 6.03897 1.41317 5.75819V5.80019C1.41317 7.65986 2.73928 9.20452 4.47917 9.56075C4.16728 9.6463 3.82817 9.68674 3.47584 9.68674C3.23084 9.68674 2.9835 9.67275 2.75173 9.62141C3.24717 11.1365 4.65495 12.2511 6.32717 12.2876C5.02517 13.3057 3.37161 13.9194 1.58195 13.9194C1.2685 13.9194 0.967504 13.9054 0.666504 13.8673C2.36206 14.9601 4.37028 15.5846 6.53717 15.5846C13.2906 15.5846 17.6921 9.95041 17.4152 4.2003Z"
                    fill="#9FABB9"></path>
              </svg>
            </a>
          </div>
          <div>
            <button class="btn" onclick="window.print()">
            <span>
              <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.4615 19.654H21.673C22.208 19.6524 22.7207 19.4391 23.099 19.0608C23.4774 18.6824 23.6906 18.1698 23.6922 17.6347V9.55781C23.6906 9.02276 23.4774 8.51009 23.099 8.13176C22.7207 7.75343 22.208 7.54017 21.673 7.53857H6.32685C5.79181 7.54017 5.27913 7.75343 4.9008 8.13176C4.52247 8.51009 4.30922 9.02276 4.30762 9.55781V17.6347C4.30922 18.1698 4.52247 18.6824 4.9008 19.0608C5.27913 19.4391 5.79181 19.6524 6.32685 19.654H7.53839"
                    stroke="#9FABB9"
                    stroke-width="2"
                    stroke-linejoin="round">
                </path>
                <path
                    d="M19.2335 13.1924H8.76578C8.08774 13.1924 7.53809 13.742 7.53809 14.4201V22.4647C7.53809 23.1427 8.08774 23.6924 8.76578 23.6924H19.2335C19.9115 23.6924 20.4612 23.1427 20.4612 22.4647V14.4201C20.4612 13.742 19.9115 13.1924 19.2335 13.1924Z"
                    stroke="#9FABB9"
                    stroke-width="2"
                    stroke-linejoin="round"
                ></path>
                <path
                    d="M20.4612 7.53839V6.32685C20.4596 5.79181 20.2463 5.27913 19.868 4.9008C19.4896 4.52247 18.977 4.30922 18.4419 4.30762H9.55732C9.02227 4.30922 8.5096 4.52247 8.13127 4.9008C7.75294 5.27913 7.53968 5.79181 7.53809 6.32685V7.53839"
                    stroke="#9FABB9"
                    stroke-width="2"
                    stroke-linejoin="round"
                ></path>
                <path
                    d="M20.8658 11.5769C21.5349 11.5769 22.0774 11.0345 22.0774 10.3653C22.0774 9.69623 21.5349 9.15381 20.8658 9.15381C20.1967 9.15381 19.6543 9.69623 19.6543 10.3653C19.6543 11.0345 20.1967 11.5769 20.8658 11.5769Z"
                    fill="#9FABB9"
                ></path>
              </svg>
              Chop etish
            </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear()
    };
  }
}
</script>
<style scoped>
.imgs {
  text-align: center;
  width: 950px;
  height: 600px;
}

.carousel-control-prev-icon {
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23c593d8' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23c593d8' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}

.lh-base {
  line-height: 30px !important;
  font-family: sans-serif;
}
.image {
  width: 92%;
  //width: 1100px;
  height: 600px;
}
</style>
