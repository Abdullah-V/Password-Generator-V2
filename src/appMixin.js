export var appMixin = {
    data(){
        return {
            password:"Here is your random password",
            passkeys:"",
            customPassKeys:"",

            uppersModel:false,
            lowersModel:false,
            numbersModel:false,
            sym1Model:false,
            bracketsModel:false,
            sym2Model:false,
            lengthModel:16,

            allKeys:{
                upperKeys:"QWERTYUIOPASDFGHJKLZXCVBNM",
                lowerKeys:"qwertyuiopasdfghjklzxcvbnm",
                numbersKeys:"0123456789",
                sym1Keys:"~!@#$%^&*_+?-",
                bracketsKeys:"()[]{}<>",
                sym2Keys:"`\\/|';:,.",
            },

            errors:[]
        }
    },
    methods:{
        cbClick(which){
            if(this.passkeys.includes(which)){
                this.passkeys = this.passkeys.replace(which,"")
            }
            else{
                this.passkeys += which
            }
        },
        generate(k){
            this.errors = []
            var ret = false
            if(this.lengthModel > 99999 || this.lengthModel <=0){
                this.errors.push("Maximum length is 99999 and minimum length is 1 !")
                ret = true
            }
            if(k.length < 1){
                this.errors.push("Please select a password keys!")
                ret = true
            }
            if(ret === true){
                return
            }
            this.password = ""
            for(var i = 0;i<this.lengthModel;i++){
                this.password += k[Math.floor(Math.random() * k.length)]
            }
            document.querySelector(".output-input").focus()
        },
        copy(){
            var copyText = document.querySelector(".output-input")

            copyText.select()
            copyText.setSelectionRange(0, 99999)

            document.execCommand("copy")

            alert("Password is copied: " + copyText.value)
        }
    }
}