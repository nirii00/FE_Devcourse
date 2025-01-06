<script>
export default {
  data() {
    return {
      isViewAll: false,
      customers: [
        { name: "Neil Sims", email: "email@windster.com", amount: 320 },
        { name: "James", email: "james@gmail.com", amount: 250 },
        { name: "Smith", email: "smith@gmail.com", amount: 600 },
        { name: "Mike", email: "mike@gmail.com", amount: 200 },
        { name: "Yarn", email: "yarn@gmail.com", amount: 140 },
        { name: "Npm", email: "npm@gmail.com", amount: 220 },
        { name: "Han", email: "han@gmail.com", amount: 450 },
      ],
    };
  },
  methods: {
    changeViewAll() {
      this.isViewAll = true;
    },
  },
};
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black">
    <div
      class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex items-center justify-between mb-4">
        <h5
          class="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          Latest Customers
        </h5>
        <a
          href="#"
          class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          @click="changeViewAll()"
        >
          View all
        </a>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li
            class="py-3 sm:py-4"
            v-for="(customer, index) in customers"
            :key="index"
            v-if="isViewAll"
          >
            <div class="flex items-center">
              <div class="flex-1 min-w-0 ms-4">
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-white"
                >
                  {{ customer.name }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ customer.email }}
                </p>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                ${{ customer.amount }}
              </div>
            </div>
          </li>
          <li
            class="py-3 sm:py-4"
            v-for="(customer, index) in customers.slice(0, 5)"
            :key="customer.name"
            v-else
          >
            <div class="flex items-center">
              <div class="flex-1 min-w-0 ms-4">
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-white"
                >
                  {{ customer.name }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ customer.email }}
                </p>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                ${{ customer.amount }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style></style>
