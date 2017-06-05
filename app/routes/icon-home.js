import Ember from 'ember';

export default Ember.Route.extend({ 
  model(){
       return [{
        "icon":"/assets/images/icon1.png",
        "label":"box1",
        "description":"Description of box 1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "id":"icon1"
        },
        {
        "icon":"/assets/images/icon2.jpg",
        "label":"box2",
        "description":"Description of box 2. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "id":"icon2"
        },
        {
        "icon":"/assets/images/icon3.png",
        "label":"box3",
        "description":"Description of box 3. Contrary to popular belief, Lorem Ipsum is not simply random text",
        "id":"icon3"
        },
        {
        "icon":"/assets/images/icon4.jpg",
        "label":"box4",
        "description":"Description of box 4. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        "id":"icon4"
        },
        {
        "icon":"/assets/images/icon5.jpg",
        "label":"box5",
        "description":"Description of box 5. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
        "id":"icon5"
        },
        {
        "icon":"/assets/images/icon6.jpg",
        "label":"box6",
        "description":"Description of box 6. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
        "id":"icon6"
        },
        {
        "icon":"/assets/images/icon7.png",
        "label":"box7",
        "description":"Description of box 7.  Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella",
        "id":"icon7"
        },
        {
        "icon":"/assets/images/icon8.png",
        "label":"box8",
        "description":"Description of box 8. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus",
        "id":"icon8"
        }
       
        ]
    }
});
