<template>
  <article class="card">
    <div class="card__body">
      <div class="info">
        <div class="brand">
          <div class="brand__logo">
            <img
              src=" https://aviata.kz/static/airline-logos/80x80/KC.png"
              alt="Лого авиаперевозчика"
            >
          </div>
          <div class="brand__name">
            Air Astana
          </div>
        </div>
        <date-time />

        <itinerary-segments />

        <date-time />
      </div>

      <div class="additional-info">
        <a
          class="additional-info__link"
          href="#"
          @click.prevent
        >
          Детали перелета
        </a>
        <a
          class="additional-info__link"
          href="#"
          @click.prevent
        >
          Условия тарифа
        </a>
        <span class="additional_info__label">
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.62478 4.63247L2.18383 5.00014L2 3.77966L5.66142 3.22817L6.21291
                6.88958L4.99244 7.07341L4.62478 4.63247Z" fill="#707276"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.50024 3.53116C3.45478 4.96007 2.1168 7.33198 2.1168 10.0164C2.1168
              14.3825 5.65618 17.9218 10.0222 17.9218C14.3883 17.9218 17.9277 14.3825
              17.9277 10.0164C17.9277 5.66297 14.4087 2.13144 10.0601 2.11105L10.035
              3.11098C13.8429 3.11789 16.9277 6.2069 16.9277 10.0164C16.9277 13.8302
              13.836 16.9218 10.0222 16.9218C6.20847 16.9218 3.1168 13.8302 3.1168
              10.0164C3.1168 7.82671 4.13598 5.87507 5.72584 4.60995L5.50024
              4.61576V3.99864V3.53116Z" fill="#707276"
            />
            <path
              d="M1.64918 16.7664L1.2933 17.1176L1.64451 17.4735L2.51148 18.352L2.86269
                18.7078L3.21857 18.3566L18.2986 3.47419L18.6545 3.12298L18.3032 2.7671L17.4363
                1.88863L17.0851 1.53275L16.7292 1.88397L1.64918 16.7664Z"
              fill="#707276"
              stroke="white"
            />
          </svg>
          невозвратный
        </span>
      </div>
    </div>
    <div class="card__footer">
      <p class="price">
        590 240
        <span class="price__currency">₸</span>
      </p>
      <button class="btn btn--buy">Выбрать</button>
      <p class="helper-text">Цена за всех пассажиров</p>
      <div>
        Нет багажа
        <button class="btn btn--info btn--sm">+ Добавить багаж</button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import DateTime from '@/components/DateTime.vue';
import ItinerarySegments from '@/components/ItinerarySegments.vue';

@Component({
  components: {
    DateTime,
    ItinerarySegments,
  },
})
export default class Card extends Vue {
  @Prop({ required: true })
  flight!: Flight;
}
</script>

<style scoped>
.card {
  display: flex;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  color: var(--deepDark);
  margin-bottom: 12px;
}

.card__body {
  flex: 1 1 auto;
  padding: 40px 20px 16px;
}

.card__footer {
  flex: 0 0 240px;
  background-color: #f5f5f5;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  padding: 12px 20px 15px;
  text-align: center;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 46px;
}

.brand {
  display: flex;
  width: 100px;
}

.brand__logo {
  width: 20px;
  margin-right: 8px;
}

.brand__logo > img {
  width: 100%;
}

.brand__name {
  flex: 1 1 auto;
  line-height: 20px;
}

.additional-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.additional-info__link {
  border-bottom: 1px dashed var(--buttonBlue);
  color: var(--buttonBlue);
  font-size: 12px;
  line-height: 16px;
  text-decoration: none;
}

.additional_info__label {
  display: flex;
  align-items: center;
  color: var(--dark);
  font-size: 12px;
  line-height: 14px;
}

.additional_info__label svg {
  margin-right: 8px;
}

.price {
  font-family: Arial, sans-serif;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 12px;
}

.price__currency {
  font-size: 18px;
}

.btn {
  background-color: var(--gray);
  border: none;
  border-radius: 4px;
  color: var(--deepDark);
  cursor: pointer;
  font-size: 1em;
  height: 32px;
  padding-left: .5em;
  padding-right: .5em;
}

.btn--buy {
  background-color: var(--brandColor);
  color: white;
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  width: 100%;
  margin-bottom: 8px;
}

.btn--sm {
  border-radius: 2px;
  font-size: 12px;
  height: 24px;
}

.btn--info {
  background-color: #eaf0fa;
  color: #5763b3;
}

.helper-text {
  color: var(--dark);
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 12px;
}
</style>
