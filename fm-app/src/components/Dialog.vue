<script>
export default {
  name: 'MyDialog'
}
</script>

<template>
  <q-dialog v-model="showDlg" @show="onShow()">
    <q-layout view="lHh lpr lFf" container style="height:400px" class="shadow-2 rounded-borders bg-white">
      <q-header class="bg-primary">
        <q-toolbar>
          <q-toolbar-title>{{$t('dialog.title')}}</q-toolbar-title>
          <q-btn flat round dense icon="close" @click="closeDlg"/>
        </q-toolbar>
      </q-header>
      <q-footer class="bg-primary">
      <q-toolbar>
        <q-toolbar-title></q-toolbar-title>
        <q-btn :label="$t('buttons.cancel')" @click="closeDlg()" class="q-mr-sm"/>
        <q-btn :label="$t('buttons.addNew')" @click="submit()"/>
      </q-toolbar>
      </q-footer>
    <q-page-container>

      <q-page padding>
        <div class="doc-containerq-ma-md">
          <q-field :label="$t('dialog.a_val.title')">
            <q-input ref="A" v-model="form.a" type="number" :rules="[
          val => val !== null && val !== '' || $t('dialog.a_val.empty'),
          val => val > -10 && val < 10 || $t('dialog.a_val.error')
        ]"/>
          </q-field>
          <q-field :label="$t('dialog.b_val.title')">
            <q-input ref="B" v-model="form.b" type="number" :rules="[
          val => val !== null && val !== '' || $t('dialog.b_val.empty'),
          val => val > -10 && val < 10 || $t('dialog.b_val.error')
        ]"/>
          </q-field>
          <q-field :label="$t('dialog.c_val.title')">
            <q-input ref="C" v-model="form.c" type="number" :rules="[
          val => val !== null && val !== '' || $t('dialog.c_val.empty'),
          val => val > -25 && val < 25 || $t('dialog.c_val.error')
        ]"/>
          </q-field>
          <q-field :label="$t('dialog.x_low.title')">
            <q-input ref="lX" v-model="form.lx" type="number" :rules="[
          val => val !== null && val !== '' || $t('dialog.x_low.empty'),
          val => val > -100 && val < form.hx || $t('dialog.x_low.error')
        ]"/>
          </q-field>
          <q-field :label="$t('dialog.x_high.title')">
            <q-input ref="hX" v-model="form.hx" :rules="[
          val => val !== null && val !== '' || $t('dialog.x_high.empty'),
          val => val > form.lx && val < 100 || $t('dialog.x_high.error')
        ]"/>
          </q-field>
        </div>
      </q-page>
    </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script>
//Импорт используемых компонентов Quasar 
import { QInput, QField, QDialog, QFooter} from 'quasar'
export default {
  data() {
    return {
    //Поля формы ввода
    //QLayout зачем?
      form:{
        a:2,
        b:2,
        c:2,
        lx:0,
        hx:10,
        accept: false
      }
    }
  }, 
  //Свойства,которые передаются из родительского компонента при его вызове
  props:{
    //Флаг видимости компонента
    showDlg:null,
    //Параметры
    a:null,
    b:null,
    c:null,
    lx:null,
    hx:null
  },
  methods:{
    //Метод вызывается при каждом показе формы на экране
    onShow:function() {
      this.form.a=this.a
      this.form.b=this.b
      this.form.c=this.c
      this.form.lx=this.lx
      this.form.lx=this.lx
    },
    //Обработчик кнопки "Добавить/Редактировать"
    submit:function() {
      
      var tA = this.$refs.A.validate()
      var tB = this.$refs.B.validate()
      var tC = this.$refs.C.validate()
      var tLX = this.$refs.lX.validate()
      var tHX = this.$refs.hX.validate()
      if (tA && tB && tC && tLX && tHX){
        this.$emit('setNewValue',this.form);
      }
    },
    //Функция закрытия диалогового окна
    closeDlg:function() {
      //Формирует событие closeEditDlg,которое отслеживает родительский компонент,вызвавший это окно
      this.$emit('closeEditDlg')}
    },
    components:{QInput,QField,QDialog,QFooter}
  }
</script>