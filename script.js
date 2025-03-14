  $(document).ready(function() {
    // funzione per caricare le attività
  function loadTasks() {
    $.ajax({
      url: 'api/tasks.php',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        let taskHtml = '';
        data.forEach(task => {
          taskHTML =+ `<div class="task" data-id="${task.id}>
                          <h3>${task.title}</h3>
                          <button class="delete">Elimina</button>
                       </div>`;
        });
        $('task-container').html(taskHtml);
      }
    });
  }

  loadTasks();
  

  // Gestione del form per aggiungere una nuova attività
  $('#task-form').submit(function(e) {
    e.preventDefault();
    let title = $('#task-title').val();
    $.ajax({
      url: 'api/tasks.php',
      type: 'POST',
      data: { title: title },
      dataType: 'json',
      success: function(data) {
        $('#task-title').val('');
        loadTasks();
      }
    });
  });

  // Gestione dell'eliminazione di un'attività
  $('#task-container').on('click', '.delete', function() {
    let taskId = $(this).parent().data('id');
    $.ajax({
      url: 'api/tasks.php?id=' + taskId,
      type: 'DELETE',
      dataType: 'json',
      success: function(data) {
        loadTasks();
      }
    });
  });
});
