<script>
    const frontEndDev = {
        title: "Frontend Development",
        details: 'Demo data for front end development.'
    }
    const uiUx = {
        title: "UI/UX Development",
        details: 'Demo data for front end ui/ux dev.'
    }
    const backEndDev = {
        title: "Backend Development",
        details: 'Demo data for back end dev.'
    }
    const mobileAppDev = {
        title: "Mobile App Development",
        details: 'Demo data for mobile app dev.'
    }
    const productManagement = {
        title: "Product Management",
        details: 'Demo data for product management.'
    }
    const projectManagement = {
        title: "Project Management",
        details: 'Demo data for project management.'
    }
    const platformDevelopment = {
        title: "Platform Development",
        details: 'Demo data for platform development.'
    }
    const devOpsInfra = {
        title: "DevOps + Infrastructure",
        details: 'Demo data for dev ops infrastructure.'
    }

    let expertiseData = "Demo data for front end development.";
    let expertiseTitle = "Frontend Development"
    function loadExpertise(data, title) {
        expertiseData = data;
        expertiseTitle = title;
    }
    let setActive = 'frontEnd';
</script>
<div class="container-fluid">
    <div class="row d-flex align-items-center">
        <div class="col-md-4">
            <div class="row">
                <div class="ms-2 heading-2-regular fs-1">
                    Our Expertise
                </div>
                <div class="ms-2 heading-3-medium mt-2 text-color-secondary">
                    Our Team Has Years Of Experience In....
                </div>
            </div>
            <div class="row mt-3">
                <div class="point ms-2 show d-flex align-items-center mt-2" on:click={()=>
                    loadExpertise(frontEndDev.details,frontEndDev.title)}>
                    <span class={setActive === 'frontEnd' ? '' : 'hide'}>
                        <i class="fa-solid fa-arrow-right text-danger me-2"></i>
                    </span>
                    <span class="body-1-regular text-color-secondary" id="expertise"
                    class:active={setActive === 'frontEnd' ? 'activePointer' : ''}  on:click={()=> (setActive = 'frontEnd')} >Frontend
                        Development</span>
                </div>
                <div class=" point ms-2 show d-flex align-items-center mt-2" 
                on:click={()=>
                    loadExpertise(uiUx.details,uiUx.title)}>
                    <span class={setActive === 'ui' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='ui'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'ui')}>UI/UX Design</span>
                </div>
                <div class="point ms-2 show d-flex align-items-center mt-2" on:click={()=>
                    loadExpertise(backEndDev.details,backEndDev.title)}>
                    <span class={setActive === 'backEnd' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='backEnd'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'backEnd')}>Backend Development</span>
                </div>
                <div class="point ms-2 show d-flex align-items-center mt-2" on:click={()=>
                    loadExpertise(mobileAppDev.details,mobileAppDev.title)}>
                    <span class={setActive === 'mobileApp' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='mobileApp'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'mobileApp')}>Mobile App Development</span>
                </div>
                <div class="point ms-2 show d-flex align-items-center mt-2" on:click={()=>
                    loadExpertise(productManagement.details,productManagement.title)}>
                    <span class={setActive === 'product' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='product'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'product')}>Product Management</span>
                </div>
                <div class="point ms-2 show d-flex align-items-center mt-2" on:click={()=>
                    loadExpertise(projectManagement.details,projectManagement.title)}>
                    <span class={setActive === 'project' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='project'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'project')}>Project Management</span>
                </div>
                <div class="point ms-2 show d-flex align-items-center mt-2" on:click={()=>
                    loadExpertise(platformDevelopment.details,platformDevelopment.title)}>
                    <span class={setActive === 'platform' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='platform'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'platform')}>Platform Development</span>
                </div>
                <div class="point ms-2 show d-flex align-items-center mt-2" on:click={()=>
                    loadExpertise(devOpsInfra.details,devOpsInfra.title)}>
                    <span class={setActive === 'devOps' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='devOps'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'devOps')}>DevOps + Infrastructure</span>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="row web-dev">
                <img alt="Expertise" src="src/assets/contentCard.png" />
                <div class="col-md-12 centered">
                    <div class="row">
                        <div class="col-md-12 overlay">
                            <span class="ms-4 ps-2 heading-3-regular fs-3">{expertiseTitle}</span>
                        </div>
                        <span>{expertiseData}</span>
                        <div class="col-md-12 overlay">
                            <p class="body-1-regular ms-4 ps-4 fs-6">
                                We have 10+ years of experience in developing web
                            </p>
                            <p class="body-1-regular ms-4 ps-4">
                                applications that help elevate user's experience
                            </p>
                        </div>
                        <div class="col-md-12 overlay mt-4">
                            <p class="body-1-regular">
                                - Front-end in React,Angular,Vue,Eleventy,++
                            </p>
                        </div>
                        <div class="col-md-12 overlay">
                            <p class="body-1-regular">
                                - Backend in GraphQl , ReST APIs,Node.js,++
                            </p>
                        </div>
                        <div class="col-md-12 overlay">
                            <p class="body-1-regular">
                                - Designing and buliding complex applications,
                            <p class="body-1-regular ms-2">
                                Microservices,Serverless,Distrbuted Services,++
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>