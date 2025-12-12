<script setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { registerSchema } from './registerSchema'
import SuccessCard from './SuccessCard.vue'

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  birthYear: '',
  acceptTerms: false,
  newsletter: false,
}

// Itt tároljuk a sikeres regisztráció adatait
const lastUser = ref(null)

const handleSubmit = (values, { resetForm }) => {
  // A jelszavakat nem adjuk át a megjelenítő kártyának, csak a többi adatot
  const { password, passwordConfirm, ...safeValues } = values
  lastUser.value = safeValues
  
  // Opcionális: űrlap törlése
  resetForm()
}
</script>

<template>
  <div>
    <Form
      :validation-schema="registerSchema"
      :initial-values="initialValues"
      @submit="handleSubmit"
      v-slot="{ meta }"
      class="bg-white shadow-md rounded-lg px-6 py-5 space-y-4"
    >
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Név</label>
        <Field
          id="name"
          name="name"
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
        />
        <ErrorMessage name="name" class="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
        />
        <ErrorMessage name="email" class="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Jelszó</label>
        <Field
          id="password"
          name="password"
          type="password"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
        />
        <ErrorMessage name="password" class="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <label for="passwordConfirm" class="block text-sm font-medium text-gray-700">Jelszó ismét</label>
        <Field
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
        />
        <ErrorMessage name="passwordConfirm" class="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <label for="birthYear" class="block text-sm font-medium text-gray-700">Születési év</label>
        <Field
          id="birthYear"
          name="birthYear"
          type="number"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
        />
        <ErrorMessage name="birthYear" class="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <div class="flex items-center">
          <Field
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="acceptTerms" class="ml-2 block text-sm text-gray-700">
            Elfogadom az ÁSZF-et
          </label>
        </div>
        <ErrorMessage name="acceptTerms" class="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <div class="flex items-center">
          <Field
            id="newsletter"
            name="newsletter"
            type="checkbox"
            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="newsletter" class="ml-2 block text-sm text-gray-700">
            Kérek hírlevelet
          </label>
        </div>
      </div>

      <button
        type="submit"
        :disabled="!meta.valid || !meta.dirty"
        class="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Regisztráció
      </button>
    </Form>

    <SuccessCard v-if="lastUser" :user="lastUser" />
  </div>
</template>