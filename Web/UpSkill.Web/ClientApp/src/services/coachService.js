const numberCoachesToShow = 6;
const numberCoachesSessionsToShow = 3;

const activeCoachesCompanyOwnerCount = 3;

const initialCoachesMock = [
    {
      id: 'lsdl21k12o1212',
      fullName: 'Anne Foster',
      coachField: 'Leadership ',
      company: 'Google',
      price: 50,
      imageUrl: 'https://i.guim.co.uk/img/uploads/2017/10/09/Sonia_Sodha,_L.png?width=300&quality=85&auto=format&fit=max&s=045793b916f0ff6e7228468ca6aa61c5',
    },
    {
      id: 'gbv23ghk12o1212',
      fullName: 'Philipa Key',
      coachField: 'Nutrition',
      company: 'Amazon',
      price: 60,
      imageUrl: 'https://static.independent.co.uk/s3fs-public/Rachel_Hosie.png',
    },
    {
      id: 'uiy343k12o1212',
      fullName: 'Jenna Jameson',
      coachField: 'Management',
      company: 'Google',
      price: 80,
      imageUrl: 'https://i.guim.co.uk/img/uploads/2017/10/06/Laura-Bates,-L.png?width=300&quality=85&auto=format&fit=max&s=0349fb29cd3cef227473ea2c4dd11b2f',
    },
    {
      id: 'vbk3423dffxz',
      fullName: 'Brent Foster',
      coachField: 'Leadership',
      company: 'Google',
      price: 50,
      imageUrl: 'https://secure.gravatar.com/avatar/03fd0c159222fdf134fe37e9a8b74f0e?s=400&d=mm&r=g',
    },    
    {
      id: 'koclvko34jk3o4j',
      fullName: 'Jimmy Hanks',
      coachField: 'Art',
      company: 'Google',
      price: 100,
      imageUrl: 'http://www.lukasman.cz/wp-content/uploads/2020/09/foto-homepage-1-1024x549.png',
    },  
    {
      id: 'cvoojro3oko2k32',
      fullName: 'Ben Levis',
      coachField: 'Management',
      company: 'Google',
      price: 60,
      imageUrl: 'https://www.freepnglogos.com/uploads/man-png/man-your-company-formations-formation-registrations-10.png',
    },    
    {
      id: 'hvjji3434ioi32',
      fullName: 'Emma Milton',
      coachField: 'Nutrition',
      company: 'Google',
      price: 40,
      imageUrl: 'https://www.g20.org/wp-content/uploads/2021/01/people.jpg',
    },
  ];

  const coachesCompanyOwnerMock = [
    { id:'8', name: 'August', coaches: [
            { name: 'Brent Foster', enrolled: 3 },
            { name: 'Phillip Pena', enrolled: 15 },
            { name: 'Veronica Casey', enrolled: 2 },
            { name: 'Sara Dean', enrolled: 5 },
            { name: 'John Brown', enrolled: 1 }
    ]},
    {id:'9', name: 'September', coaches: [
        { name: 'Veronica Casey', enrolled: 8 },
        { name: 'Phillip Pena', enrolled: 4 },
        { name: 'John Brown', enrolled: 3 },
        { name: 'Sara Dean', enrolled: 9 }
    ]},
    {id:'10', name: 'October', coaches: [
        { name: 'Sara Dean', enrolled: 9 },
        { name: 'Brent Foster', enrolled: 1 },
        { name: 'John Brown', enrolled: 3 }
    ]}];

export const getCoaches = async (currentPage) => {
            let arr = [];
            arr.push(...initialCoachesMock
                .slice(0, currentPage * numberCoachesToShow + numberCoachesToShow));    
            
           return arr;
    }
    

export const getActiveCoachesCompanyOwner = async (uId) => {
              
             return activeCoachesCompanyOwnerCount;
}
  
export const getCoachesSessionsForCompanyOwner = async (uId, currentPage, currentMount) => {
        let mount = coachesCompanyOwnerMock.filter(m=> m.id == currentMount)[0];
        let arr = mount.coaches
            .slice(0, currentPage * numberCoachesSessionsToShow + numberCoachesSessionsToShow);    
        
       return [mount.name, arr];
}
    