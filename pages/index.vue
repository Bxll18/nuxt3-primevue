<script lang="ts" setup>
import { useToast } from 'primevue/usetoast';

const toast = useToast();
import { captcha, login } from '@/utils/api'
const verifyCodeKey = ref('')
const verifyCode = ref('')
const code = ref('')
captcha('').then((res) => {
  verifyCodeKey.value = res._rawValue.data.verifyCodeKey
  verifyCode.value = res._rawValue.data.captchaImgBase64
})
const errs = ref(null)
function logins() {
  login({
  username:"admin",
    password:"123456",
    verifyCodeKey:verifyCodeKey.value,
    verifyCode: code.value
  }).then((res) => {
  }).catch(err => {
    console.log(err.msg);
    
    toast.add({ severity: 'error', summary: '错误', detail: err.msg, life: 3000 });
  })
}
</script>
<template>
  <div class="card h-[2000px] bg-black">
        <ClientOnly>
          <img :src="verifyCode" />
        </ClientOnly>
        <Button  class="w-[100%]" @click="logins">登录</Button>
        <InputText v-model="code" type="text" />
    </div>
</template>
<style lang="scss" scoped></style>
