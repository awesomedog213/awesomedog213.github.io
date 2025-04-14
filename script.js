const photoContainer = document.getElementById('photoContainer');
const imageUrls = [
  'https://media.istockphoto.com/id/1398462038/photo/online-exam-or-test.jpg?s=612x612&w=0&k=20&c=hvaH_2oA0Dm-tpQ8T5JBF_39QF3xhpic38Yi2AngaCE=',
  'https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/10/29145941/types-of-testing-1.jpg',
  'https://www.asaecenter.org/-/media/ASAE/Images/Resources/Articles/AN_Plus/2023/8-August/Stefanyk_user-testing/stefanyk_user-testing_39x22.ashx',
  'https://picsum.photos/id/8/367/267',
  // Add more image URLs here
];

imageUrls.forEach(url => {
  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Buck Williams work';
  photoContainer.appendChild(img);
});
