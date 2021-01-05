<script>
export default {
  name: 'HelloWorld'
}
</script>

<template>
	<div>
	<span v-if="this.$store.getters.getAuth">
	<a href="/change_stats"><q-btn name="ChangeStats" :label="$t('buttons.changa_state')" /></a>
	<div class="small">
		<my-dialog :a="a" :b="b" :c="c" :lx="lx" :hx="hx" :showDlg="showDlg" @closeEditDlg="showDlg=false" @setNewValue="setParam">
			
		
		</my-dialog>


		<p>a={{a}}, b={{b}} c={{c}} lx={{lx}} hx={{hx}}</p>
		<q-btn color="primary" :label= "$t('buttons.params')" class="q-ml-md" @click="showDlg=true"></q-btn>
		<!--Вывод диаграммы.
		data collection-данные для диаграммы,
		options-параметры отображения диаграммы-->

		<line-chart :chart-data="datacollection" :options="options"> </line-chart>
		
		<q-btn color="primary" :label="$t('buttons.clean')" @click="cleanData()"></q-btn>


	</div>
	</span>
	<span v-else>
       <h4>{{$t('labels.pleas_login')}}</h4>
    </span>
</div>
</template>

<script>

	import LineChart from '../components/LineCharts.js'

	import MyDialog from '../components/Dialog.vue'
	//Подключение компонента QBtn из библиотеки Quasar 
	import {QBtn} from 'quasar'

	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	//Подключение компонента для отображения диаграммы

	export default {
		//Описание используемых в шаблоне компонентов
		components: {
			LineChart,
			QBtn,
			MyDialog
		},
		data() {
			return {
			//Данные для диаграммы
			datacollection:null,

			a: 5,
			b:3,
			c:2,
			lx:0,
			hx:10,
			showDlg:false,

			errors: [],

			dataList:null,
			count: 0,
			lowx:0,
			highX:10,
			datas:null,
			//Настройка параметров диаграммы
			options:null,

			}
		},
		//Заполнение this.datacollection и this.options начальными статическими значениями
		created() {
			this.datacollection={}
			this.datas = []
			this.dataList = []
			this.options={responsive:true,
				title:{
					display:true,
					text:this.$t('labels.title')
				},
				tooltips:{
					mode:'index',
					intersect:false,
				},
				hover:{ 
					mode:'nearest',
					intersect:true,
				},scales:{
					xAxes:[{
						display:true,
						scaleLabel:{
							display:true,
							labelString:'X'
						}
					}],
					yAxes:[{
						display:true,
						scaleLabel:{
							display:true,
							labelString:'Y'
						}
					}]
				}
			}
		},
		mounted() {
			//Заполнение данных с помощью функции fillData
			this.fillData()
		},
		methods:{
			setParam(param) {
				this.errors = [];
					this.a=param.a
					this.b=param.b
					this.c=param.c
					this.lx=param.lx
					this.hx=param.hx
					this.showDlg=false
					this.fillData()
				
			},
			//Функция,которая производит заполнение данных случайным образом
			fillData(){
			/*	var lowX = parseInt(document.getElementById("lowX").value);
				var highX = parseInt(document.getElementById("highX").value);


				var A = parseInt(document.getElementById("val_A").value);
				var B = parseInt(document.getElementById("val_B").value);
				var C = parseInt(document.getElementById("val_C").value);
				*/
				var lowX = parseFloat(this.lx);
				var highX = parseFloat(this.hx);


				var A = parseFloat(this.a);
				var B = parseFloat(this.b);
				var C = parseFloat(this.c);
				this.count += 1;
				var lbc = [];
				var ct = (highX - lowX) / 100;
				var cd = ct * 10;

				var dt = [];
				var clr = getRandomColor();

				var newDt = {
					lable: this.$t('labels.chart') + ' №' + this.count,
					color:clr,
					A: A,
					B: B,
					C: C,
					dtL: [],
				}
				this.dataList.push(newDt);

				for (var i = lowX; i <= highX + ct; i+= ct){
					lbc.push(i);
				}


				this.datacollection={
					labels:lbc,
					datasets:[],
				}
			//	console.log(dateasT);
				var dateasT = [];
				for (var j = 0; j < this.dataList.length;j++){
					var Av = this.dataList[j].A;
					var Bv = this.dataList[j].B;
					var Cv = this.dataList[j].C;
					this.dataList[j].dtL = [];
					for (var i = lowX; i <= highX + ct; i+= ct){
						
						this.dataList[j].dtL.push(this.funcGenerate(i, Av, Bv, Cv));

					}
					var newData = {
						label:this.$t('labels.chart') + ' №' + (j+1),
						backgroundColor:this.dataList[j].color,
						borderColor:this.dataList[j].color,
						data:this.dataList[j].dtL,
						fill:false,
					}
					this.datacollection.datasets.push(newData);
				}

		//	console.log(this.datacollection.datasets);

			},
			funcGenerate(x, A, B, C){
				return A*x*Math.sin(B*x)-C
			},
			cleanData(){
				this.count = 0;
				this.datacollection={
					labels:[],
					datasets:[],
				}
				this.datas = [];
				this.dataList = [];
			//	console.log(this.dataList.length);
			},
		},
		watch: {
			'$route'(to,from) {
				//обрабатываем изменение параметров маршрута...
				this.fillData()
			}
		},
	}
</script>
<style>
	.small {
		max-width:600px;
		margin:150px auto;
	}
</style>