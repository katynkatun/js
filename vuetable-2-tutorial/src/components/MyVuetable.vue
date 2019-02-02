<template>
  <vuetable ref="vuetable"
    api-url="https://vuetable.ratiw.net/api/users"
    :fields="fields"
  ></vuetable>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  components: {
    Vuetable
  },
  data () {
    return {
      fields: [
        {
          name:'__sequence',
          title:'#'
        },
        'name', 'email', 'birthdate',
        {
          name:'address.line1',
          title:'Address first'
        },
         'address.line2', 'address.zipcode'
      ]
    }
  }
}
</script>
