$(document).ready(function() {
  $.getJSON('js/products.json', function(products) {
    products.forEach(function(product) {
      $('#products').append(`
        <div class="col-md-4 mb-4">
          <div class="card h-100 text-center p-3">
            <div class="mb-2"><i class="${product.icon} fa-2x"></i></div>
            <h5>${product.name}</h5>
            <p>${product.description}</p>
          </div>
        </div>
      `);
    });
  });

  $('#contactForm').submit(function(e) {
    e.preventDefault();
    alert('Thank you for contacting EcoGlow Goods!');
    $(this)[0].reset();
  });
});