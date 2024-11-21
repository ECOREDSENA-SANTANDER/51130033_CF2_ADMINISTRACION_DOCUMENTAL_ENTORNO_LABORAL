export default {
  global: {
    componenteFormativo: 'Administración de comunicaciones oficiales',
    descripcionCurso:
      'En la administración documental existe un campo de especial manejo y cuidado, que es la gestión de comunicaciones oficiales, en este componente además de desmenuzar el tema de la administración documental, explicar sus características y los principios y pautas, se detallan los procesos para el manejo responsable de documentos oficiales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La administración',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Pasos para la administración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Administración documental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Finalidad de la administración documental',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Funciones de la administración documental ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Principios y normas archivísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Pautas para la administración de comunicaciones oficiales',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Comunicaciones oficiales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'comunicaciones oficiales internas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'comunicaciones oficiales recibidas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'comunicaciones oficiales enviadas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'formatos para la recepción y despacho de documentos',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Embalaje de los documentos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '4.1 Pautas para la administración de comunicaciones oficiales',
      referencia:
        'ACUERDO No. 001 del 2024. (s/f). Gov.co. Recuperado el 21 de noviembre de 2024, de https://normativa.archivogeneral.gov.co/acuerdo-no-001-del-2024/',
      tipo: 'Norma',
      link: 'https://normativa.archivogeneral.gov.co/acuerdo-no-001-del-2024/',
    },
  ],
  glosario: [
    {
      termino: 'Abreviatura',
      significado:
        'Representación gráfica de una palabra reducida en una o varias de sus letras',
    },
    {
      termino: 'Archivo electrónico',
      significado:
        'Conjunto de documentos electrónicos, producidos y tratados archivísticamente, siguiendo la estructura orgánico-funcional del productor, acumulados en un proceso natural por una persona o institución pública o privada, en el transcurso de su gestión.',
    },
    {
      termino: 'Comunicaciones oficiales',
      significado:
        'Son todas aquellas recibidas o producidas en desarrollo de las funciones asignadas legalmente a una entidad, independientemente de medio utilizado.',
    },
    {
      termino: 'Gestión documental',
      significado:
        'Conjunto de actividades administrativas y técnicas, tendientes a la planificación, manejo y organización de la documentación producida y recibida por las entidades.',
    },
    {
      termino: 'Proceso',
      significado:
        'Conjunto de actividades mutuamente relacionadas, o que interactúan para generar valor, mediante la transformación de elementos de entrada en resultados.',
    },
    {
      termino: 'Radicación',
      significado:
        'Procedimiento por medio del cual las organizaciones asignan un número consecutivo a las comunicaciones recibidas o producidas, dejando constancia de la fecha y hora del recibo o del envío.',
    },
  ],
  referencias: [
    {
      referencia: 'ACUERDO No. 001 del 2024. (s/f). Gov.co. Recuperado de',
      link: 'https://normativa.archivogeneral.gov.co/acuerdo-no-001-del-2024/',
    },
    {
      referencia: 'Banco Terminológico. (s/f). Gov.co. Recuperado de ',
      link:
        'https://www.archivogeneral.gov.co/Gestion-del-Conocimiento/Banco-Terminologico',
    },
    {
      referencia: '(S/f). Studocu.com. Recuperado de ',
      link:
        'https://www.studocu.com/co/document/instituto-tecnico-de-administracion-y-salud/espanol/norma-gtc-185-guia-tecnica-colombiana/23264923',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carmen Milena Ferreira Ardila',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Desarrollador de contenido',
          centro:
            'Centro Industrial de Mantenimiento Integral - CIMI. - Regional Santander',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Asesor Pedagógico Experto temático',
          centro:
            'Centro Industrial de Mantenimiento Integral - CIMI. - Regional Santander',
        },
        {
          nombre: 'Oscar Julian Márquez Sanabria',
          cargo: 'Diseño',
          centro:
            'Centro Industrial de Mantenimiento Integral - CIMI. - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Programación',
          centro:
            'Centro Industrial de Mantenimiento Integral - CIMI. - Regional Santander',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
