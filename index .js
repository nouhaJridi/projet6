
  class Human {
    name;
    job;
    skills;

    constructor() {
      this.job = "unemployed";
      this.skills=[];
    }

    getJob(new_job){
      this.job=new_job;
    }
    leaveJob(){
      this.job="unemployed";
    }
    learnNewSkill(new_skill){
   (this.skills).push(new_skill);
    }
    forgetSkill(ancien_skill){
      this.skills.forEach((elment , index ) =>
         { if(ancien_skill === elment ) 
          this.skills.splice(index,1);
        
      });
    }
  }

  class Student extends Human{

  
    constructor() {
      super();
    }
  }

  const me = new Student();
  console.log(me.job);
  me.getJob("webDev");
  console.log(me.job);
  me.leaveJob();
  console.log(me.job);
  console.log(me.skills);
  me.learnNewSkill("React");
  me.learnNewSkill("Java");
  me.learnNewSkill("c++");
  me.forgetSkill("React");
 