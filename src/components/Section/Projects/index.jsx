import carwash from "@assets/imageProject/carwash.png";
import parkingapi from "@assets/imageProject/parkingapi.png";
import parkingui from "@assets/imageProject/parkingui.png";
import ProjectItem from "@components/ProjectItem";
import techs from "@data/techs";

const projects = [
  {
    id : 1,
    title : "Carwash Montevideo",
    content : "Desarrollé esta aplicación de Carwash en .NET Framework con el objetivo de optimizar la gestión operativa de un cliente, como parte de mis prácticas en la empresa. El sistema reemplaza los procesos manuales realizados en papel, facilitando la digitalización y el control eficiente de los servicios.",
    projectImage : carwash,
    techs : [
      {
        id : 1,
        name: techs.CSharp.name,
        color: techs.CSharp.color,
      },
      {
        id : 2,
        name: techs.WinForms.name,
        color: techs.WinForms.color,
      },
      {
        id : 3,
        name : techs.SQLServer.name,
        color : techs.SQLServer.color,
      },
      {
        id : 4,
        name : techs.NetFramework.name,
        color : techs.NetFramework.color,
      },
    ],
    urlGitHub : "https://github.com/DanielLS12/Carwash-Montevideo",
  },
  {
    id : 2,
    title : 'Estacionamiento API',
    content : 'API desarrollada para la gestión integral de un estacionamiento, con funcionalidades que incluyen el control de ingreso y salida vehicular, manejo de tarifas, registro de abonos, administración de cajas chicas, gestión de egresos, administración de personal, y control de autenticación y autorización basado en usuarios y roles.',
    projectImage : parkingapi,
    techs : [
      {
        id : 1,
        name : techs.ASPNET.name,
        color : techs.ASPNET.color,
      },
      {
        id : 2,
        name : techs.SQLServer.name,
        color : techs.SQLServer.color,
      },
      {
        id : 3,
        name : techs.CSharp.name,
        color : techs.CSharp.color,
      },
    ],
    urlWeb : "http://playamontevideo.somee.com/swagger/index.html",
    urlGitHub : "https://github.com/DanielLS12/ViteMontevideo_API",
  },
  {
    id : 3,
    title : 'Estacionamiento UI',
    content : 'Aplicación multiplataforma para consumir y gestionar los servicios de la API de un estacionamiento. Permite a los usuarios realizar tareas como registrar ingresos y salidas vehiculares, gestionar tarifas, abonos, y cajas chicas, además de ofrecer funcionalidades de autenticación y autorización según roles, todo desde una interfaz unificada disponible en dispositivos móviles y de escritorio.',
    projectImage : parkingui,
    techs : [
      {
        id : 1,
        name : techs.NETMAUI.name,
        color : techs.NETMAUI.color,
      },
      {
        id : 2,
        name : techs.CSharp.name,
        color : techs.CSharp.color,
      },
      {
        id : 3,
        name : techs.XAML.name,
        color : techs.XAML.color,
      },
    ],
    urlGitHub : 'https://github.com/DanielLS12/ViteMontevideo',
  }
]

function Projects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-14 xl:gap-20">
      {projects.sort((a, b) => b.id - a.id).map(project => (
        <ProjectItem 
          key={project.id}
          title={project.title}
          content={project.content}
          projectImage={project.projectImage}
          techs={project.techs}
          urlWeb={project.urlWeb}
          urlGitHub={project.urlGitHub}/>
      ))}
    </div>
  )
}

export default Projects