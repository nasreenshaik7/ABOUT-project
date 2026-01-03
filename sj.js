function showSection(sectionId) {
    // hide all sections
    const sections = document.querySelectorAll(
        '.login-section, .list-section, .incident-section, .reports-section, .servicenowhelp-section'
    );

    sections.forEach(section => {
        section.classList.remove('active');
    });

    // show selected section
    document.getElementById(sectionId).classList.add('active');
}
