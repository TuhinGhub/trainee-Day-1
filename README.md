# trainee-Day-1

12 FACTOR APP:
SO basically 12 factor app is a set of practises developed by Heroku(a cloud platform developer) for creating scalable,maintainable and portable web applications.
1)Codebase-Each project should have a single codebase tracked in revision control. Multiple deployments should be made from the same codebase.
2)Dependencies: Dependencies should be explicitly declared and isolated. This means using tools like package managers to manage dependencies and ensuring consistent environments .
3)Config: Configuration should be stored in the environment rather than hardcoding it into the application.This provides greater portability and security.
4)Backing services:The backing services(databases, message queues, etc.) should be treated as attached resources. The application should be able to connect to these services through environment variables or other means without requiring code changes.
5)Build, release, run: Keep the build, release, and run stages separate. This ensures that the application can be built and deployed consistently across different environments.
6)Processes: Applications should be executed as stateless processes. This allows for easier scaling and fault tolerance since multiple instances of the application can run concurrently without sharing state.
7)Port binding: Services should be self-contained and export services via a port binding. This allows the application to be executed in various environments without modification.
8)Concurrency: Scale out via the process model. Applications should be designed to scale horizontally by adding more instances rather than vertically by increasing the resources of individual instances.
9)Disposability: Applications should be designed to start up quickly and shut down gracefully. This allows for easier deployment and scaling since instances can be spun up or down as needed without affecting the overall system.
10)Dev/prod parity: Keep development, staging, and production environments as similar as possible. This reduces the likelihood of issues occurring in production that were not encountered during development.
11)Logs: Treat logs as event streams. Applications should emit logs to standard output, and log aggregation tools can then collect and analyze these logs.
12)Admin processes: Run admin/management tasks as one-off processes. These tasks should be separate from the application code and executed as needed.

Atomic Design:
Atomic design is a methodology for creating design systems in a structured and systematic way, primarily used in user interface (UI) and user experience (UX) design. It was introduced by Brad Frost as a way to break down complex UIs into smaller, reusable components. The term "atomic" comes from the idea of breaking down UI elements into their smallest, indivisible parts, much like the atoms of a chemical element.

The main concept of atomic design revolves around five distinct levels, which are:

Atoms: Atoms are the basic building blocks of UI elements, such as buttons, input fields, icons, and text labels. These are the smallest, indivisible components that cannot be broken down further without losing their meaning. In HTML/CSS terms, atoms might correspond to HTML tags like <input>, <button>, or <p>.

Molecules: Molecules are formed by combining multiple atoms together to create more complex UI elements. For example, a search bar might consist of a text input atom, a button atom, and perhaps an icon atom. These combinations form functional units that represent simple components of an interface.

Organisms: Organisms are higher-level components that are made up of groups of molecules and/or atoms. They represent distinct sections or modules of a UI. Examples of organisms might include headers, navigation bars, forms, or sidebars. These are more complex components that serve a specific purpose within the interface.

Templates: Templates are the next level up and represent the layout structure of a page or a section of a page. They define the overarching structure and arrangement of organisms within a page layout but don't contain actual content. Templates provide a framework for displaying content and organizing different components.

Pages: Pages are the highest level in the atomic design hierarchy. They represent actual instances of UI views with real content. Pages are created by populating templates with specific content and data. Each page is a unique representation of the interface that users interact with.
