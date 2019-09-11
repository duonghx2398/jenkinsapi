const API = '/api/json'
const JOB_INFO = '/%s' + API 


class Job {
    constructor(jenkins){
        this.jenkins = jenkins;
    }

    async JobInfo(name){
        let endpoint_raw = this.getJobFolder(name);
        let endpoint = this.jenkins.stringQuery(JOB_INFO,endpoint_raw);
        let log = await this.jenkins.callAPI(`${endpoint}`,"GET");
        console.log(log.data)
    }

    getJobFolder(name){
        let arr = name.split("/")
        let map = arr.map(x => "job/"+x+"/")
        return (map.join(""))
    }

}

module.exports.Job = Job;