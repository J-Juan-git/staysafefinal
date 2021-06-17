class Features{
    constructor(query,queryString){
        this.query = query;
        this.queryString = queryString;
    }
    search(){
        const location = this.queryString.location ? {
            address:{
                $regex: this.queryString.location,
                $options: 'i'
            }} : {}
            console.log(location)
            this.query = this.query.find({...location})
            return this;
    }
    filter(){
        const q2 = {...this.queryString};
        const del = ['location'];
        console.log(q2)
        del.forEach(element => delete q2[element]);
        console.log(q2)
        this.query = this.query.find(q2);
        return this;
    }

}
export default Features