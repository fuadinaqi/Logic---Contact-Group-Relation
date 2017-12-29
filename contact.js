var contacts = [{
  Id: 1,
  name: 'Andi',
  gender: 'male',
  group_ids: [1,2,3]
},{
  Id: 2,
  name: 'Budi',
  gender: 'male',
  group_ids: [1,2]
},{
  Id: 3,
  name: 'Cindy',
  gender: 'male',
  group_ids: [1]
},{
  Id: 4,
  name: 'David',
  gender: 'male',
  group_ids: [1,2]
},{
  Id: 5,
  name: 'Emily',
  gender: 'male',
  group_ids: [1,2,3]
}]

// lanjut ke halaman berikutnya
var groups = [{
  id: 1,
  name: 'Teman SMP'
}, {
  id: 2,
  name: 'Teman SMA'
}, {
  id: 3,
  name: 'Teman Kuliah'
}]

function showContactByGroup(group_name) {
  //find group id
  let groupId = 0;
  for (let i = 0; i < groups.length; i++) {
    if (groups[i].name == group_name) {
      groupId = groups[i].id;
    }
  }

  //find person name by comparing person id and group id
  let arrContacts = [];
  for (let j = 0; j < contacts.length; j++) {
    for (let k = 0; k < contacts[j].group_ids.length; k++) {
      if (contacts[j].group_ids[k] == groupId) {
        arrContacts.push(contacts[j].name)
      }
    }
  }

  return console.log(arrContacts);
}

//Contoh 1 :
showContactByGroup('Teman Kuliah')

//result yang diharapkan :
//["Andi", "Emily"]


//Contoh 2 :
showContactByGroup('Teman SMA')

//result yang diharapkan :
//["Andi", "Budi", "David", "Emily"]


//Contoh 3 :
showContactByGroup('Teman SMP')

//result yang diharapkan :
//["Andi", "Budi", "Cindy", "David", "Emily"]
