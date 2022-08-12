<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-xl-5">
          <div class="auth-full-page-content form-wrap p-md-5 p-4">
            <div class="w-100">
              <div class="d-flex flex-column h-100">
                <div class="mb-4 mb-md-5">
                  <router-link to="/" class="d-block auth-logo">
                    <img
                        src="@/assets/images/logo-dark.png"
                        alt=""
                        height="18"
                        class="auth-logo-dark"
                    />
                    <img
                        src="@/assets/images/logo-light.png"
                        alt=""
                        height="18"
                        class="auth-logo-light"
                    />
                  </router-link>
                </div>
                <div class="my-auto">
                  <div class="mb-5">
                    <h1 class="text-primary">Welcome back !</h1>
                  </div>
                  <div class="mt-5">
                    <form>
                      <b-form-group
                          class="mb-3 h4"
                          id="input-group-1"
                          label="Email"
                          label-for="input-1"
                      >
                        <b-form-input
                            id="input-1"
                            size="lg"
                            v-model="email"
                            type="text"
                            placeholder="Enter email"
                            class="py-3"
                            :class="{
                            'is-invalid': submitted && v$.email.$error,
                          }"
                        ></b-form-input>
                        <div
                            v-if="submitted && v$.email.$error"
                            class="invalid-feedback"
                        >
                          <span v-if="!v$.email.required"
                          >Email is required.</span
                          >
                          <span v-if="!v$.email.email"
                          >Please enter valid email.</span
                          >
                        </div>
                      </b-form-group>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
export default {
name: "Login"
}
</script>

<style scoped>

</style>
