
// ======================================
// MI RUTA DEV
// Horario semanal de estudio
// ======================================

const schedules = {

    lunes: {
        title: "Lunes - HTML y CSS",
        items: [
            ["9:00 - 9:15", "Organizar objetivos", "Preparar el entorno y revisar pendientes."],
            ["9:15 - 10:15", "Udemy: HTML y CSS", "Estudiar las lecciones correspondientes."],
            ["10:15 - 10:25", "Receso", "Descansar la vista e hidratarse."],
            ["10:25 - 11:25", "Práctica de programación", "Realizar ejercicios sin copiar."],
            ["11:25 - 11:35", "Receso", "Caminar y estirar."],
            ["11:35 - 12:20", "ITLA", "Teoría y asignaciones."],
            ["12:20 - 1:00", "Almuerzo", "Comida equilibrada."],
            ["1:00 - 2:15", "Proyecto Web", "Construir una página web."],
            ["2:15 - 2:25", "Receso", "Descanso breve."],
            ["2:25 - 3:15", "HolaMundo", "Reforzar conceptos."],
            ["3:15 - 3:25", "Receso", "Hidratación."],
            ["3:25 - 4:00", "Git y documentación", "Guardar avances."]
        ]
    },

    martes: {
        title: "Martes - CSS y Responsive Design",
        items: [
            ["9:00 - 9:15", "Repaso", "Revisar lo aprendido."],
            ["9:15 - 10:15", "Udemy: CSS3", "Flexbox y Grid."],
            ["10:15 - 10:25", "Receso", "Descanso."],
            ["10:25 - 11:25", "Práctica Responsive", "Diseño para móviles y escritorio."],
            ["11:25 - 11:35", "Receso", "Caminar."],
            ["11:35 - 12:20", "ITLA", "Ejercicios y asignaciones."],
            ["12:20 - 1:00", "Almuerzo", "Comida equilibrada."],
            ["1:00 - 2:15", "Proyecto Web", "Crear una interfaz."],
            ["2:15 - 2:25", "Receso", "Descanso."],
            ["2:25 - 3:15", "HolaMundo", "Buenas prácticas CSS."],
            ["3:15 - 3:25", "Receso", "Hidratación."],
            ["3:25 - 4:00", "Correcciones", "Revisar errores y Git."]
        ]
    },

    miercoles: {
        title: "Miércoles - JavaScript",
        items: [
            ["9:00 - 9:15", "Repaso", "Conceptos anteriores."],
            ["9:15 - 10:15", "Udemy: JavaScript", "Lecciones del curso."],
            ["10:15 - 10:25", "Receso", "Descanso."],
            ["10:25 - 11:25", "Programación", "Variables, funciones y condiciones."],
            ["11:25 - 11:35", "Receso", "Caminar."],
            ["11:35 - 12:20", "ITLA", "Prácticas."],
            ["12:20 - 1:00", "Almuerzo", "Comida equilibrada."],
            ["1:00 - 2:15", "Proyecto JavaScript", "Crear funcionalidades."],
            ["2:15 - 2:25", "Receso", "Descanso."],
            ["2:25 - 3:15", "HolaMundo", "Ejercicios de programación."],
            ["3:15 - 3:25", "Receso", "Hidratación."],
            ["3:25 - 4:00", "GitHub", "Guardar avances y documentación."]
        ]
    },

    jueves: {
        title: "Jueves - Mobile Development",
        items: [
            ["12:00 - 12:30", "Almuerzo", "Comida ligera."],
            ["12:30 - 1:20", "Mobile Development", "Fundamentos de aplicaciones móviles."],
            ["1:20 - 1:30", "Receso", "Descanso."],
            ["1:30 - 2:20", "Práctica", "Ejercicios de JavaScript."],
            ["2:20 - 2:30", "Receso", "Caminar."],
            ["2:30 - 3:20", "Udemy / HolaMundo", "Reforzar conceptos."],
            ["3:20 - 3:30", "Receso", "Descanso."],
            ["3:30 - 4:00", "Documentación", "Registrar lo aprendido."]
        ]
    },

    viernes: {
        title: "Viernes - Proyecto y Evaluación",
        items: [
            ["12:00 - 12:30", "Almuerzo", "Comida equilibrada."],
            ["12:30 - 1:20", "Proyecto semanal", "Completar una funcionalidad."],
            ["1:20 - 1:30", "Receso", "Descanso."],
            ["1:30 - 2:20", "Depuración", "Corregir errores."],
            ["2:20 - 2:30", "Receso", "Caminar."],
            ["2:30 - 3:15", "GitHub", "Actualizar el portafolio."],
            ["3:15 - 3:25", "Receso", "Hidratación."],
            ["3:25 - 4:00", "Evaluación semanal", "Revisar objetivos y planificar."]
        ]
    }
};


// ======================================
// MOSTRAR HORARIO
// ======================================

const scheduleContainer = document.getElementById("schedule");

function showSchedule(day) {

    const selectedDay = schedules[day];

    let html = `
        <div class="schedule-header">
            <h3>${selectedDay.title}</h3>
        </div>
    `;

    selectedDay.items.forEach(item => {

        html += `
            <div class="schedule-row">
                <div class="schedule-time">${item[0]}</div>

                <div>
                    <div class="schedule-title">${item[1]}</div>
                    <div class="schedule-detail">${item[2]}</div>
                </div>
            </div>
        `;

    });

    scheduleContainer.innerHTML = html;
}


// ======================================
// CAMBIAR DÍA
// ======================================

const dayButtons = document.querySelectorAll(".day");

dayButtons.forEach(button => {

    button.addEventListener("click", () => {

        dayButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const day = button.dataset.day;

        showSchedule(day);

    });

});


// ======================================
// CHECKLIST DE PROGRESO
// ======================================

const goals = [
    "Completé las lecciones de Udemy",
    "Avancé en el curso de ITLA",
    "Realicé ejercicios sin copiar código",
    "Reforcé conceptos con HolaMundo",
    "Subí código a GitHub",
    "Construí una funcionalidad",
    "Documenté lo aprendido",
    "Identifiqué temas por reforzar"
];

const checklist = document.getElementById("checklist");

const progressBar = document.getElementById("progress-bar");

const progressCount = document.getElementById("progress-count");

const progressPercent = document.getElementById("progress-percent");

const STORAGE_KEY = "miRutaDevProgress";


// Recuperar progreso guardado

function getSavedProgress() {

    try {
        const saved = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "[]"
        );

        return Array.isArray(saved)
            ? saved.filter(i =>
                Number.isInteger(i) &&
                i >= 0 &&
                i < goals.length
            )
            : [];

    } catch {
        return [];
    }
}

let completed = getSavedProgress();


// Mostrar checklist

function renderChecklist() {

    checklist.innerHTML = "";

    goals.forEach((goal, index) => {

        const label = document.createElement("label");

        label.className = "check-item";

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = completed.includes(index);

        const span = document.createElement("span");

        span.textContent = goal;

        label.appendChild(checkbox);

        label.appendChild(span);

        if (checkbox.checked) {
            label.classList.add("done");
        }

        checkbox.addEventListener("change", () => {

            if (checkbox.checked) {

                completed.push(index);

            } else {

                completed = completed.filter(
                    item => item !== index
                );

            }

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(completed)
            );

            renderChecklist();

        });

        checklist.appendChild(label);

    });

    updateProgress();

}


// Actualizar porcentaje

function updateProgress() {

    const total = goals.length;

    const count = completed.length;

    const percentage = Math.round(
        (count / total) * 100
    );

    progressCount.textContent =
        `${count} de ${total} objetivos`;

    progressPercent.textContent =
        `${percentage}%`;

    progressBar.style.width =
        `${percentage}%`;

}


// Reiniciar progreso

document.getElementById("reset-progress")
    .addEventListener("click", () => {

        const confirmReset = confirm(
            "¿Deseas reiniciar el progreso semanal?"
        );

        if (confirmReset) {

            completed = [];

            localStorage.removeItem(STORAGE_KEY);

            renderChecklist();

        }

    });


// ======================================
// INICIALIZAR APLICACIÓN
// ======================================

showSchedule("lunes");

renderChecklist();
