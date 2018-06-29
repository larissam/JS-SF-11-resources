const images = {
  dog: 'https://a-z-animals.com/media/animals/images/470x370/dingo1.jpg',
  cat: 'http://www.pets4homes.co.uk/images/articles/2355/large/burmese-cat-health-and-genetics-547d89dd3bffd.jpg',
  fish: 'https://cdn.petbarn.com.au/petspot/wp-content/uploads/2015/10/new-fish-to-tank-blog.jpg',
  elephant: 'https://d31j74p4lpxrfp.cloudfront.net/sites/default/files/styles/landscape_driver_block/public/us_files/adult_and_infant_elephant_hub_page_3_0.jpg?itok=UG47LpoM',
  squirrel: 'https://a-z-animals.com/images/blog/britishwinter3.jpg',
  bird: 'http://ingridkuhn.com/themes/petz/img/service1.jpg',
  gorilla: 'https://www.zoo.org.au/sites/default/files/styles/zv_aggregate_featured/public/gorilla2-MZ-animal-web460.jpg?itok=8NctJnfW',
  giraffe: 'https://www.australiazoo.com.au/our-animals/amazing-animals/images/profile_305_600.jpg',
  bear: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png/1200px-Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png'
};

const $gallery = $('.gallery');
const $buttons = $('#animalsList li');
const $images = $('.image');

// PART 1 - Chaining
// 1. use chaining
$buttons.on('click', function(){
  const $animal = $(this);
  const id = $animal.attr('id');

  $animal.addClass('showing');

  const $newTile = $('<div>').addClass('image');
  const $newImage = $('<img>').attr('src', images[id]).addClass('animal');
  const $caption = $('<p>').text(id);

  $newTile.append($caption);
  $newTile.append($newImage);
  $gallery.append($newTile);
})

// PART 2 - Event Delegation
// 1. use event delegation so these handlers are attached to programmatically created images
// PART 3 - Attaching Multiple Handlers
// 1. combine the handlers above
$gallery.on('mouseenter', '.image', function() {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
}).on('mouseleave', '.image', function() {
  $(this).removeClass('active');
});