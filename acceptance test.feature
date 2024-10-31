Feature: US01 - Registro de usuario

  Scenario: Registro exitoso
    Given El usuario está en la página de registro
    When El usuario ingresa el nombre "example", correo electrónico "example@example.com"
    And Selecciona "Registrar"
    Then La cuenta será creada exitosamente
    And El usuario verá un mensaje de confirmación "Registro exitoso".

  Scenario: Error en el registro
    Given El usuario está en la página de registro
    When El usuario deja el campo de correo electrónico vacío
    And Selecciona "Registrar"
    Then El usuario verá un mensaje de error "El campo correo electrónico es obligatorio".

Feature: US02 - Acceso a perfil de usuario

  Scenario: Acceso exitoso
    Given El usuario ha iniciado sesión correctamente
    When El usuario selecciona "Mi perfil"
    Then La página de perfil se cargará exitosamente
    And El usuario verá su información personal y el estado de sus plantas.


Feature: US03 - Recuperación de contraseña

  Scenario: Recuperación exitosa
    Given El usuario está en la página de inicio de sesión
    And Selecciona "Olvidé mi contraseña"
    When El usuario ingresa su correo "example@example.com"
    Then Recibirá un enlace de recuperación de contraseña en su correo.

Feature: US04 - Identificación de plantas mediante IA

  Scenario: Identificación exitosa
    Given El usuario está en la página de identificación de plantas
    When El usuario sube una foto de la planta
    Then La IA identificará correctamente la planta
    And El sistema mostrará el nombre de la planta y recomendaciones de cuidado.

  Scenario: Fallo en la identificación
    Given El usuario sube una foto borrosa de la planta
    When La IA analiza la imagen
    Then El sistema mostrará un mensaje "No se pudo identificar la planta, suba una imagen más clara".

Feature: US05 - Escaneo múltiple de plantas

  Scenario: Escaneo exitoso
    Given El usuario está en la página de escaneo de plantas
    When El usuario sube varias fotos de plantas
    Then La IA identificará todas las plantas correctamente
    And El sistema mostrará un resumen con los nombres y recomendaciones de cuidado para cada planta.

  Scenario: Fallo en la identificación de algunas plantas
    Given El usuario sube varias fotos de plantas
    When La IA no puede identificar algunas plantas
    Then El sistema mostrará un mensaje de error "Algunas plantas no pudieron ser identificadas" 
    And Pedirá subir imágenes más claras.

Feature: US06 - Identificación de problemas en las plantas

  Scenario: Identificación exitosa de problemas
    Given El usuario está en la página de identificación de problemas
    When El usuario sube una foto de una planta afectada
    Then La IA identificará el problema correctamente (por ejemplo, plagas o enfermedades)
    And El sistema mostrará las posibles soluciones.


Feature: US07 - Configuración de recordatorios de riego

  Scenario: Configuración exitosa
    Given El usuario está en la página de configuración de recordatorios de riego
    When Selecciona una planta y establece un cronograma
    Then El recordatorio será configurado exitosamente
    And El usuario recibirá notificaciones según el cronograma configurado.

Feature: US08 - Notificaciones de cuidado

  Scenario: Notificaciones exitosas
    Given El usuario activó las notificaciones en la aplicación
    When Es el momento de realizar una tarea de cuidado (riego, poda, etc.)
    Then El usuario recibirá una alerta con instrucciones detalladas.

Feature: US09 - Activación y desactivación de notificaciones

  Scenario: Activación de notificaciones
    Given El usuario accede a la página de configuración
    When Activa las notificaciones
    Then Comenzará a recibir recordatorios de cuidado.

  Scenario: Desactivación de notificaciones
    Given El usuario accede a la página de configuración
    When Desactiva las notificaciones
    Then Dejará de recibir recordatorios de cuidado.


Feature: US10 - Visualización del crecimiento en realidad aumentada

  Scenario: Visualización exitosa
    Given El usuario está en la sección de RA
    When Apunta la cámara hacia la planta
    Then Verá una proyección en RA del crecimiento futuro de la planta bajo las condiciones actuales de cuidado.

Feature: US11 - Simulación de ambientes

  Scenario: Simulación exitosa
    Given El usuario selecciona una condición ambiental (luz, temperatura, etc.)
    When La simulación se carga en RA
    Then El sistema mostrará cómo la planta reaccionaría bajo esas condiciones.

Feature: US12 - Monitoreo de la salud de las plantas

  Scenario: Monitoreo exitoso
    Given El usuario ha agregado plantas a la aplicación
    When El sistema detecta cambios en el estado de una planta
    Then El usuario recibirá una notificación con recomendaciones de tratamiento.

Feature: US13 - Alerta de condiciones no óptimas

  Scenario: Alerta exitosa
    Given El usuario tiene plantas registradas en la aplicación
    When Las condiciones de luz o temperatura cambian negativamente
    Then El sistema enviará una alerta con recomendaciones para ajustar las condiciones.


Feature: US14 - Optimización del espacio para el cultivo

  Scenario: Recomendaciones personalizadas
    Given El usuario introduce detalles sobre el espacio disponible y la luz
    When Busca plantas recomendadas
    Then El sistema mostrará una lista de especies que se adaptan a las condiciones del usuario.


Feature: US15 - Sugerencias para reorganización del espacio

  Scenario: Sugerencias exitosas
    Given El usuario selecciona la opción de reorganización de espacio
    When El sistema analiza el espacio disponible y las condiciones de luz
    Then El sistema sugerirá reubicaciones para optimizar el crecimiento de las plantas.
