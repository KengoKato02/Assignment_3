Vue.createApp({

    data() {

        return {

            text: null,
            howMany: null,
            isButtonClicked: false,
            repeatedText: "", 
        }

    },
    computed: {
        Repeat(){
            this.isButtonClicked = true;
            for (i = 0; i < this.howMany; i++) {
                this.repeatedText += this.text;
            }
              return this.repeatedText;
        }
    },

    methods: {
        isNumberPositive(){
            if(this.howMany>=0){
                return true;
            }
            else return false;
        }

    }

}).mount("#app")