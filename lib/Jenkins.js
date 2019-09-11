const {Job} = require('./Job')
const axios = require('axios')

class Jenkins{
    constructor(BaseUrl){
        this.BaseUrl = BaseUrl;
        this.Job = new Job(this);
    }

    async callAPI(endpoint, method = 'GET'){
           return await axios({
                method:method,
                url:`${this.BaseUrl}/${endpoint}`
            });
    }

    async getJenkinsCrumb(){
        return await this.callAPI('crumbIssuer/api/json','GET');
    }

    stringQuery(string,...arr){
        let str = "";
        for(let i = 0;i < arr.length;i++){
            if(i === 0){
                str = string.replace('%s',arr[i]);
            }else{
                str = str.replace('%s',arr[i]);
            }
        }
        return str;
    }
}

module.exports.Jenkins = Jenkins;