$(document).ready(function () {
    //Tween Animation
    var tlNav = new TimelineMax();
    var tlHome = new TimelineMax();
    var tlTestimonial=  new TimelineMax(
        {repeat:-1}
    );

    var tlTestimonialMessage=  new TimelineMax(
        {repeat:-1}
    );

    var tlWhoWeAre = new TimelineMax();
    var tlWhatWeDo = new TimelineMax();
    var tlSkill = new TimelineMax({
        onComplete: function () {
            mouseMove();
        }
    });

    var tlService = new TimelineMax();
    var tlIndustries = new TimelineMax();
    var tlCoreTechnologoies = new TimelineMax();
    var tlContact = new TimelineMax();
    var tlAboutUs = new TimelineMax();
    var tlCloud = new TimelineMax();
    var tlSharePoint = new TimelineMax();
    var tlDynamics = new TimelineMax();
    var tlBi = new TimelineMax();
    var tlUi = new TimelineMax();
    var tlMobile = new TimelineMax();
    var tlleftMenu = new TimelineMax();
    var tlsliderInit = new TimelineMax();
    var tlslider1 = new TimelineMax(
        {repeat:-1}
    );
    var tlslider2 = new TimelineMax(
        {repeat:-1}
    );
    var getActiveID;
    var getCoreActiveId;
    var serviceActive = 0;
    var caseIndex = 0;
    var coreActivePage = "cloud";
    var currentServiceId =0;
    var activeSericeId;
    $(document).ready(function () {
        homeIn();
    });

    $(".nav-item").click(function (e) {
        if(!$(this).hasClass("active"))
        {
            $(".nav-item").removeClass("active");
            $(this).addClass("active");
      //      tlNav.fromTo(".menuFix>.active",{scale:0},{scale:1});
        }

        var id = "#" + $(this).attr("page-id");

        if (!$(id).hasClass("active")) {
            getActiveID = $("section")
                .filter(".active")
                .attr("id");
            $("#" + getActiveID).removeClass("active");
            eval(getActiveID + "Out" + "()");
            $(id).addClass("active");
            eval($(this).attr("page-id") + "In" + "()");
        }
    });

    $(".core-item").click(function (e) {
        caseIndex = 0;
        var id = "#" + $(this).attr("core-id");
        //  var menuId= '#'+ $(this).attr('id')
        if (!$(id).hasClass("active")) {
            getCoreActiveId = $(".coreContent")
                .filter(".active")
                .attr("id");
            $("#" + getCoreActiveId).removeClass("active");
            eval(getCoreActiveId + "Out" + "()");
            $(id).addClass("active");
            eval($(this).attr("core-id") + "In" + "()");
            coreActivePage = $(this).attr("core-id");
        }
    });

    function coreReset(){
     //   var id = $(".core-item").hasClass("active").attr("core-id");

        var id = $(".core-item")
                .filter(".act")
                .attr("id");
              $("#"+id).removeClass("act");
              $("#mcloud").addClass("act");

              tlleftMenu.to("#mcloud", 0.2, {
        css: { fontWeight: 600, color: "rgba(0, 0, 0, 0.85)" }
    });

            tlleftMenu.to("#" + id, 0.2, {
                css: {
                    fontSize: "1.2rem",
                    fontWeight: 100,
                    color: "rgba(0, 0, 0, 0.5)"
                }
            });
          var  getCoreActiveId = $(".coreContent")
                .filter(".active")
                .attr("id");
                $("#"+getCoreActiveId).removeClass("active");
              $("#cloud").addClass("active");
            eval(getCoreActiveId + "Out" + "()");
            cloudIn();
       
        
    }

    // Skill

    tlleftMenu.to("#mcloud", 0.2, {
        css: { fontWeight: 600, color: "rgba(0, 0, 0, 0.85)" }
    });

    $(".coreLeft ul li").click(function (e) {
        var currentClickId = $(this).attr("id");

        $(".coreLeft ul li").each(function () {
            if ($(this).hasClass("act")) {
                if ($(this).attr("id") != currentClickId) {
                    $(this).removeClass("act");
                    $("#" + currentClickId).addClass("act");
                    tlleftMenu.to("#" + currentClickId, 0.2, {
                        css: {
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "rgba(0, 0, 0, 0.85)"
                        }
                    });
                    tlleftMenu.to("#" + $(this).attr("id"), 0.2, {
                        css: {
                            fontSize: "1.2rem",
                            fontWeight: 100,
                            color: "rgba(0, 0, 0, 0.5)"
                        }
                    });
                }
            }
        });

        // tlleftMenu.to("#"+currentClickId,0.2,{css: {fontSize: "1.2rem",fontWeight:600}})
    });

    //Tween

    //Nav

    tlNav.from(
        ".nav-item",
        1,
        { autoAlpha: 0, y: -50, stagger: 0.1, ease: "power4.out", duration: 1 },
        "+=1"
    );

    //home
    tlHome
        .from(
            "#from",
            0.3,
            {
                autoAlpha: 0,
                y: -500,
                stagger: 0.05,
                ease: "power4.out",
                duration: 0.1
            },
            "+=2"
        )

        .to("#from", 0.3, {
            morphSVG: "#to",
            duration: 3,
            ease: "elastic.out(1, 0.3)"
        })
        .to("#svgPathBlueRight", 0.3, { morphSVG: "#svgPathRight", autoAlpha: 1 })
        .to("#svgPathRightFrom", 0.3, {
            morphSVG: "#svgPathRight",
            ease: "power4.out",
            duration: 1
        })
        .to("#svgPathBlueRight", { opacity: 0 }, "-=2.5")

        .fromTo("#illustrationImage", 0.3,{ scaleX: 0, scaleY: 0 },{ scaleX: 1, scaleY: 1, duration: 1.5, ease: "back.out(1.7)"})
        .to("#svgPathBlueRight",0.2,{opacity:0},"-=0.5")
        .to("#svgPathRightFrom",0.2,{opacity:0},"-=0.5")
        .from("#home .leftContainer",0.2,{autoAlpha:0})
        .from("#home .testimonialFixed .testimo",1,{autoAlpha:0})
        
        
        .from("#track1",0.2,{autoAlpha: 0,x: -50, scaleX: 1, scaleY: 1, stagger: 0.03, ease: "power4.out", duration: 0.1},"-=2")
        .from("#track2", 0.2,
            {autoAlpha: 0,x: -50,
                scaleX: 1,
                scaleY: 1,
                stagger: 0.03,
                ease: "power4.out",
                duration: 0.1
            },
            "-=2"
        )
        .from(
            "#track3",
            0.2,
            {
                autoAlpha: 0,
                x: -50,
                scaleX: 1,
                scaleY: 1,
                stagger: 0.03,
                ease: "power4.out",
                duration: 0.1
            },
            "-=2"
        )
        .from(
            "#row1",
            0.2,
            {
                autoAlpha: 0,
                y: -50,
                scaleX: 1,
                scaleY: 1,
                stagger: 0.03,
                ease: "power4.out",
                duration: 0.1
            },
            "-=2"
        )
        .from(
            "#row2",
            0.2,
            {
                autoAlpha: 0,
                y: -50,
                scaleX: 1,
                scaleY: 1,
                stagger: 0.03,
                ease: "power4.out",
                duration: 0.1
            },
            "-=2"
        )
        .from(
            "#row3",
            0.2,
            {
                autoAlpha: 0,
                y: -50,
                scaleX: 1,
                scaleY: 1,
                stagger: 0.03,
                ease: "power4.out",
                duration: 0.1
            },
            "-=2"
        )
        .from(
            "#row4",
            0.2,
            {
                autoAlpha: 0,
                y: -50,
                scaleX: 1,
                scaleY: 1,
                stagger: 0.03,
                ease: "power4.out",
                duration: 0.1
            },
            "-=2"
        )
   
    .add(tlsliderInit)
   .add(tlslider1)
   .add(tlslider2)
   .add(tlTestimonial)
      
        tlsliderInit
        .fromTo("#slide1>.maskBox>h1",0.1,{opacity:0},{ opacity: 1})   
        .fromTo("#slide1>.maskBox>h2",0.1,{opacity:0},{ opacity: 1}) 
        .fromTo("#slide2>.maskBox>h1",0.1,{yPercent:0},{ yPercent: 100})   
        .fromTo("#slide3>.maskBox>h1",0.1,{yPercent:0},{ yPercent: 100})  
        .fromTo("#slide2>.maskBox>h2",0.1,{yPercent:0},{ yPercent: 100})   
        .fromTo("#slide3>.maskBox>h2",0.1,{yPercent:0},{ yPercent: 100})  
        .fromTo(".testiMask>h1.slide1",0.1,{xPercent:0},{xPercent:-100})
        .fromTo(".testiMask>h1.slide2",0.1,{xPercent:0},{xPercent:-100})
        .fromTo(".testiMask>h1.slide3",0.1,{xPercent:0},{xPercent:-100})  
        .fromTo(".testiMask2>h3.slide1",0.1,{xPercent:-100},{xPercent:0})   
        .fromTo(".testiMask2>h3.slide2",0.1,{xPercent:0},{xPercent:-100})
        .fromTo(".testiMask2>h3.slide3",0.1,{xPercent:0},{xPercent:-100})
        .fromTo(".testiMask2",1,{css:{minHeight:"70px"}},{css:{minHeight:"90px"}});
        
    
        tlslider1
        .fromTo("#slide1>.maskBox>h1",1,{yPercent:100},{ yPercent: 0,ease: Back.easeOut})   
        .fromTo("#slide1>.maskBox>h1",0.5,{yPercent:0},{ yPercent: 100,ease: Back.easeOut},"+=15")        
        .fromTo("#slide2>.maskBox>h1",1,{yPercent:100},{ yPercent: 0,ease: Back.easeOut})   
        .fromTo("#slide2>.maskBox>h1",0.5,{yPercent:0},{ yPercent: 100,ease: Back.easeOut},"+=15")
        .fromTo("#slide3>.maskBox>h1",1,{yPercent:100},{ yPercent: 0,ease: Back.easeOut})   
        .fromTo("#slide3>.maskBox>h1",0.5,{yPercent:0},{ yPercent: 100,ease: Back.easeOut},"+=15");  

        

        tlslider2
        .fromTo("#slide1>.maskBox>h2",1,{yPercent:100},{ yPercent: 0,ease: Back.easeOut})   
        .fromTo("#slide1>.maskBox>h2",0.5,{yPercent:0},{ yPercent: 100,ease: Back.easeOut},"+=15")    
        .fromTo("#slide2>.maskBox>h2",1,{yPercent:100},{ yPercent: 0,ease: Back.easeOut})   
        .fromTo("#slide2>.maskBox>h2",0.5,{yPercent:0},{ yPercent: 100,ease: Back.easeOut},"+=15")  
        .fromTo("#slide3>.maskBox>h2",1,{yPercent:100},{ yPercent: 0,ease: Back.easeOut})   
        .fromTo("#slide3>.maskBox>h2",0.5,{yPercent:0},{ yPercent: 100,ease: Back.easeOut},"+=15");       
     
        tlTestimonial
        .fromTo(".testiMask>h1.slide1",1,{xPercent:-100},{xPercent:0})
        .fromTo(".testiMask>h1.slide1",0.4,{opacity:1},{opacity:0},"+=5")
        .fromTo(".testiMask>h1.slide1",0.1,{xPercent:0},{xPercent:-100})

        .fromTo(".testiMask2",1,{css:{minHeight:"90px"}},{css:{minHeight:"70px"}},"-=1")

        .fromTo(".testiMask>h1.slide2",1,{xPercent:-100},{xPercent:0})
        .fromTo(".testiMask>h1.slide2",0.4,{opacity:1},{opacity:0},"+=5")
        .fromTo(".testiMask>h1.slide2",0.1,{xPercent:0},{xPercent:-100})

        .fromTo(".testiMask2",1,{css:{minHeight:"70px"}},{css:{minHeight:"90px"}},"-=1")

        .fromTo(".testiMask>h1.slide3",1,{xPercent:-100},{xPercent:0})
        .fromTo(".testiMask>h1.slide3",0.4,{opacity:1},{opacity:0},"+=5")
        .fromTo(".testiMask>h1.slide3",0.1,{xPercent:0},{xPercent:-100});

        tlTestimonialMessage
        .fromTo(".testiMask2>h3.slide1",1,{xPercent:-100},{xPercent:0})
        .fromTo(".testiMask2>h3.slide1",0.4,{opacity:1},{opacity:0},"+=5")
        .fromTo(".testiMask2>h3.slide1",0.1,{xPercent:0},{xPercent:-100})

        .fromTo(".testiMask2>h3.slide2",1,{xPercent:-100},{xPercent:0})
        .fromTo(".testiMask2>h3.slide2",0.4,{opacity:1},{opacity:0},"+=5")
        .fromTo(".testiMask2>h3.slide2",0.1,{xPercent:0},{xPercent:-100})

        .fromTo(".testiMask2>h3.slide3",1,{xPercent:-100},{xPercent:0})
        .fromTo(".testiMask2>h3.slide3",0.4,{opacity:1},{opacity:0},"+=5")
        .fromTo(".testiMask2>h3.slide3",0.1,{xPercent:0},{xPercent:-100});


     


    tlHome.pause();



    function homeIn() {
        $("#home").removeClass("d-none");
        tlHome.delay(3);      
        tlHome.timeScale(1);       
        tlHome.play();
        tlsliderInit.invalidate().restart();
        tlslider1.invalidate().restart();
        tlslider2.invalidate().restart();
        tlTestimonial.invalidate().restart();
        tlTestimonialMessage.invalidate().restart();
    }

    function homeOut() {
    
        tlHome.timeScale(2);
        tlHome.reverse();
       

         tlslider1.pause();  
         tlslider2.pause();        
         tlTestimonial.pause();
         tlTestimonialMessage.pause();
        // tlsliderInit.play();
        setTimeout(function () {
            $("#home").addClass("d-none");
        }, 1500);
       
    }

    //about us

    tlAboutUs.from(".whyTillid>h1", {autoAlpha: 0, y: -50},"=+1")
    .from(".whyTillid>p", {autoAlpha: 0})
    .from(".rightColorBox", {autoAlpha: 0},"=-0.3")
    .fromTo(".imageBox",1, {autoAlpha: 0, scaleX: 0, scaleY: 0,},{autoAlpha: 1, scaleX: 1, scaleY: 1,ease: "elastic.out(1, 0.3)"},"=-0.5")
    .from(".vision", {autoAlpha: 0,y:-50,ease: "elastic.out(1, 0.3)"},"=-0.3")
    .from(".mision", {autoAlpha: 0,y:+50,ease: "elastic.out(1, 0.3)"},"=-0.3")
    
    tlAboutUs.pause();

    function aboutusIn() {
        $("#aboutus").removeClass("d-none");
        tlAboutUs.delay(2);
        tlAboutUs.timeScale(1);
        tlAboutUs.play();
       
    }

    function aboutusOut() {      
        tlAboutUs.timeScale(2);
        tlAboutUs.reverse();
        setTimeout(function () {
            $("#aboutus").addClass("d-none");
        }, 1500);
    }


    const skillCount = 4 // document.querySelectorAll(".ulBox>ul").length;
    const skillIndex = skillCount - 1;
    let isAnimating = false;
    let count = 0;
    var colorCount = 1;
    const duration = 1;
    tlSkill

        .from(
            "#skills .bgContainer",
            1,
            { autoAlpha: 0, y: -500, ease: "power4.out" },
            "+=1"
        )
        .from("#skills .skillLeftContainer", 1, {
            autoAlpha: 0,
            y: +500,
            ease: "power4.out"
        })
        .from(
            "#skills .barDivided",
            1,
            { autoAlpha: 0, y: -500, ease: "power4.out" },
            "-=1"
        )
        .from(
            "#skills .skillRightContainer",
            1,
            { autoAlpha: 0, ease: "power4.out" },
            "-=1"
        )
        gsap.to(".firstCol",{y:-100, duration: 2.5, ease: "power2.out"})      
        gsap.to(".thirdCol",{y:-150, duration: 2.5, ease: "power2.out"})    
        // gsap.to(".skillBox2>.skillContent", { duration: duration, y: -500 });
   
      

             window.addEventListener("wheel", () => {
                if(serviceActive==1)
                {          
               
                    heightf = $(".ulBox").height();
                    heightBg = $(".skillBox").height();
                    const delta = Math.sign(event.deltaY);                  
                    
                    if(count == 0 || count == skillCount - 1) {
                        isAnimating = false;
                    }
                    if(!isAnimating) {
                        if(delta > 0 && count < skillCount - 1) {
                            var previousId = $(".title").eq(count).attr("id");
                            var currentId = $(".title").eq(count + 1).attr("id");
                            activeSericeId = currentId;
                            gsap.to("#" + previousId, {
                                duration: duration,
                                autoAlpha: 0.2
                            });
                            gsap.to("#" + previousId + ">h1", {
                                css: {
                                    fontSize: "1.5rem"
                                }
                            });
                            gsap.to("#" + currentId, {
                                duration: duration,
                                autoAlpha: 1
                            });
                            gsap.to("#" + currentId + ">h1", {
                                css: {
                                    fontSize: "2rem"
                                }
                            });        
                       
                            
                            if(currentId =="SharePoint")
                            {
                               // gsap.to(".firstCol",{y:-(heightBg*3), duration: 2.5, ease: "power2.out"})   
                            }   
                            if(currentId =="Custom")
                            {
                                gsap.to(".firstCol",{y:-(heightBg*2.9), duration: 2.5, ease: "power2.out"})  
                                gsap.to(".secondCol",{y:-(heightBg*12.2), duration: 2.5, ease: "power2.out"})  
                                gsap.to(".thirdCol",{y:-(heightBg*2.86), duration: 2.5, ease: "power2.out"})  
                                gsap.to(".fourthCol",{y:-(heightBg*11.7), duration: 2.5, ease: "power2.out"}) 
                                 
                            }              
                          
                            if(currentId =="Mobile")
                            {
                                gsap.to(".firstCol",{y:-(heightBg*8), duration: 2.5, ease: "power2.out"})   
                                gsap.to(".secondCol",{y:-(heightBg*7.2), duration: 2.5, ease: "power2.out"})   
                                gsap.to(".thirdCol",{y:-(heightBg*7.9), duration: 2.5, ease: "power2.out"})   
                                gsap.to(".fourthCol",{y:-(heightBg*7.8), duration: 2.5, ease: "power2.out"})   
                            }              
                          
                                     
                          
                            if(currentId =="CRM")
                            {
                                gsap.to(".firstCol",{y:-(heightBg*11.6), duration: 2.5, ease: "power2.out"}) 
                                gsap.to(".secondCol",{y:-(heightBg*2.8), duration: 2.5, ease: "power2.out"})     
                                gsap.to(".thirdCol",{y:-(heightBg*11.8), duration: 2.5, ease: "power2.out"}) 
                                gsap.to(".fourthCol",{y:-(heightBg*3), duration: 2.5, ease: "power2.out"})     
                            }   
                            if(currentId =="GP")
                            {
                                gsap.to(".firstCol",{y:-(heightBg*14.6), duration: 2.5, ease: "power2.out"}) 
                                gsap.to(".secondCol",{y:-(heightBg*0.1), duration: 2.5, ease: "power2.out"})  
                                gsap.to(".thirdCol",{y:-(heightBg*14.45), duration: 2.5, ease: "power2.out"}) 
                                gsap.to(".fourthCol",{y:-(heightBg*0.4), duration: 2.5, ease: "power2.out"})     
                            }              
                          
                           currentServiceId = currentServiceId + 100;
                            gsap.to(".titleContainer", {
                                duration: duration,
                                y: "-=" + 100,
                                onComplete: () => (isAnimating = false)
                            });

                           console.log(currentServiceId);
                           
                            
                            count++;
                            colorCount++;                           
                       
                      
                        }
                        else if(delta < 0 && count > 0) {
                            var previousId = $(".title").eq(count).attr("id");
                            var currentId = $(".title").eq(count - 1).attr("id");
                            activeSericeId = currentId;
                            gsap.to("#" + previousId, {
                                duration: duration,
                                autoAlpha: 0.2
                            });
                            gsap.to("#" + previousId + ">h1", {
                                css: {
                                    fontSize: "1.5rem"
                                }
                            });
                            gsap.to("#" + currentId, {
                                duration: duration,
                                autoAlpha: 1
                            });
                            gsap.to("#" + currentId + ">h1", {
                                css: {
                                    fontSize: "2rem"
                                }
                            });                                                      
                            gsap.to(".titleContainer", {
                                duration: duration,
                                y: "+=" + 100,
                                onComplete: () => (isAnimating = false)
                            });      
                            currentServiceId = currentServiceId - 100;

                            console.log(currentServiceId);
                            if(currentId =="SharePoint")
                            {
                                gsap.to(".firstCol",{y:-100, duration: 2.5, ease: "power2.out"})   
                                gsap.to(".secondCol",{y:-(heightBg*14.7), duration: 2.5, ease: "power2.out"})    
                                gsap.to(".thirdCol",{y:-150, duration: 2.5, ease: "power2.out"})   
                                gsap.to(".fourthCol",{y:-(heightBg*14.3), duration: 2.5, ease: "power2.out"})    
                            }   
                            if(currentId =="Custom")
                            {
                                gsap.to(".firstCol",{y:-(heightBg*3), duration: 2.5, ease: "power2.out"})  
                                gsap.to(".secondCol",{y:-(heightBg*12.2), duration: 2.5, ease: "power2.out"})  
                                gsap.to(".thirdCol",{y:-(heightBg*2.86), duration: 2.5, ease: "power2.out"})  
                                gsap.to(".fourthCol",{y:-(heightBg*11.7), duration: 2.5, ease: "power2.out"}) 
                            }              
                          
                            if(currentId =="Mobile")
                            {
                                gsap.to(".firstCol",{y:-(heightBg*8), duration: 2.5, ease: "power2.out"})   
                                gsap.to(".secondCol",{y:-(heightBg*7.2), duration: 2.5, ease: "power2.out"})   
                                gsap.to(".thirdCol",{y:-(heightBg*7.9), duration: 2.5, ease: "power2.out"})   
                                gsap.to(".fourthCol",{y:-(heightBg*7.8), duration: 2.5, ease: "power2.out"})   
                            }              
                          
                                     
                          
                            if(currentId =="CRM")
                            {
                                gsap.to(".firstCol",{y:-(heightBg*11.6), duration: 2.5, ease: "power2.out"}) 
                                gsap.to(".secondCol",{y:-(heightBg*2.8), duration: 2.5, ease: "power2.out"})     
                                gsap.to(".thirdCol",{y:-(heightBg*11.8), duration: 2.5, ease: "power2.out"}) 
                                gsap.to(".fourthCol",{y:-(heightBg*3), duration: 2.5, ease: "power2.out"})        
                            }   
                            if(currentId =="GP")
                            {
                                gsap.to(".firstCol",{y:-(heightBg*14.6), duration: 2.5, ease: "power2.out"}) 
                                gsap.to(".secondCol",{y:-(heightBg*0.1), duration: 2.5, ease: "power2.out"})  
                                gsap.to(".thirdCol",{y:-(heightBg*14.45), duration: 2.5, ease: "power2.out"}) 
                                gsap.to(".fourthCol",{y:-(heightBg*0.4), duration: 2.5, ease: "power2.out"})     
                            }       
                          //  console.log(count);
                            count--;
                            colorCount--;                            
                        }
                        isAnimating = true;
                    }
                }
                
                    });
             

    tlSkill.pause();

    function skillsIn() {
        serviceActive=1;
        $("#skills").removeClass("d-none");
        tlSkill.delay(2);
        tlSkill.timeScale(1);
        tlSkill.play();
       
     
        
    }

    function skillsOut() {
        serviceActive=0
        tlSkill.timeScale(2);     
        count = 0;
        gsap.to("#" + activeSericeId, {duration: duration,autoAlpha: 0.2});
        gsap.to("#" + activeSericeId + ">h1", {css: {fontSize: "1.5rem" }});
        gsap.to("#SharePoint", {duration: duration,autoAlpha: 1});
        gsap.to("#SharePoint>h1", { css: { fontSize: "2rem" }});      
        gsap.to(".titleContainer", { duration: duration, y: 0 }); 
        gsap.to(".firstCol",{y:-100, duration: 2.5, ease: "power2.out"})   
        gsap.to(".secondCol",{y:-(heightBg*14.7), duration: 2.5, ease: "power2.out"})    
        gsap.to(".thirdCol",{y:-150, duration: 2.5, ease: "power2.out"})   
        gsap.to(".fourthCol",{y:-(heightBg*14.3), duration: 2.5, ease: "power2.out"})    
      
        tlSkill.reverse();

    
        setTimeout(function () {
            $("#skills").addClass("d-none");
          
        }, 1500);
     
    }

    function mouseMove() {
        var skill = $(".skillWrapper"),
            wrapScreenHeight = $("#skills").height(),
            wrapHeight = skill.height(),
            listHeight = skill.find(".scrollWrapper").height();
        gsap.registerPlugin(CSSRulePlugin);
        var t = TweenMax.to("h6", 1, { rotation: 360, paused: true });

        skill.on("mousemove", function (e) {
            dP = e.pageY / wrapHeight;
            t.progress(dP);
            TweenMax.to(skill, 10, {
                scrollTop: listHeight * dP - wrapScreenHeight,
                ease: "power4.out"
            });
        });
    }


    tlCoreTechnologoies.from(
        "#core",
        1,
        { autoAlpha: 0, y: -500, stagger: 0.5, ease: "power4.out" },
        "+=1.3"
    );

    tlCoreTechnologoies.pause();

    function coreIn() {
        $("#core").removeClass("d-none");
        cloudIn();
        tlCoreTechnologoies.delay(2);
        tlCoreTechnologoies.timeScale(1);
        tlCoreTechnologoies.play();
    }

    function coreOut() {
        tlCoreTechnologoies.timeScale(2);
        tlCoreTechnologoies.reverse();
        coreReset();
        setTimeout(function () {
            $("#core").addClass("d-none");
        }, 1500);
    }


    var SplitTextTitle = new SplitText(".titleCompany", { type: "chars" });
    gsap.registerPlugin(CSSRulePlugin);
    tlContact
    tlContact
        .from(
            "#svgContactBg",
            1,
            { autoAlpha: 0, y: -500, ease: "power4.out" },
            "+=2"
        )
 


        .from("#svgContact", 0.3, { scaleY: 0, transformOrigin: "0% 50%" })
        .from("#row5-1", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-2", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-3", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-4", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-5", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-6", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        //.from("#row5-7",0.05,{autoAlpha: 0,y:-10, stagger:0},).from("#row5-8",0.05,{autoAlpha: 0,y:-10, stagger:0},).from("#row5-9",0.05,{autoAlpha: 0,y:-10, stagger:0},)
        //.from("#row5-10",0.05,{autoAlpha: 0,y:-10, stagger:0},).from("#row5-11",0.05,{autoAlpha: 0,y:-10, stagger:0},)
        .from("#row5-12", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-13", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-14", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-15", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-16", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-17", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-18", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-19", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-20", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-21", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-22", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-23", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-24", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-25", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-26", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-27", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-28", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from("#row5-29", 0.05, { autoAlpha: 0, y: -10, stagger: 0 },)
        .from(SplitTextTitle.chars, 0.1, { opacity: 0, x: -10,stagger: 0.1 },"-=2")
        .from(".titleContact", 0.3, { x: -100, autoAlpha: 0 },"-=2")           
        .from(".address", 0.3, { y: -50, autoAlpha: 0 },"-=2")
        .from(".mailId", 0.3, { y: -50, autoAlpha: 0 },"-=2")
        .fromTo(
            ".socialImg",
            0.3,
            { scaleX: 0, scaleY: 0 },
            {
                scaleX: 1,
                scaleY: 1,
                duration: 0.5,
                stagger: 0.2,
                ease: "back.out(1.7)"
            }
        );
    tlContact.pause();

    function contactsIn() {
        $("#contacts").removeClass("d-none");
        tlContact.delay(2);
        tlContact.timeScale(1);
        tlContact.play();
    }

    function contactsOut() {
        tlContact.timeScale(2);
        tlContact.reverse();
        setTimeout(function () {
            $("#contacts").addClass("d-none");
        }, 1500);
    }

    tlCloud.to(".cloudCore", 1, { yPercent: +100 });
    tlCloud.pause();

    function callLog() {
        console.log("enter");
    }

    function cloudIn() {
        $(".cloudCore").css("z-index", "1");
        tlCloud.timeScale(4);
        tlCloud.play();
    }

    function cloudOut() {
        $(".cloudCore").css("z-index", "0");
        tlCloud.delay(2);
        tlCloud.timeScale(1);
        tlCloud.reverse();
    }

    tlSharePoint.to(".sharepointCore", 1, { yPercent: +100 }, 0);
    tlSharePoint.pause();

    function sharepointIn() {
        $(".sharepointCore").css("z-index", "1");
        tlSharePoint.timeScale(4);
        tlSharePoint.play();
    }

    function sharepointOut() {
        $(".sharepointCore").css("z-index", "0 !important");
        tlCloud.delay(2);
        tlSharePoint.timeScale(1);
        tlSharePoint.reverse();
    }

    tlDynamics.to(".dynamicsCore", 1, { yPercent: +100 }, 0);
    tlDynamics.pause();

    function dynamicsIn() {
        $(".dynamicsCore").css("z-index", "1");
        tlDynamics.timeScale(4);
        tlDynamics.play();
    }

    function dynamicsOut() {
        $(".dynamicsCore").css("z-index", ".0");
        tlCloud.delay(2);
        tlDynamics.timeScale(1);
        tlDynamics.reverse();
    }

    tlBi.to(".biCore", 1, { yPercent: +100 }, 0);
    tlBi.pause();

    function biIn() {
        $(".biCore").css("z-index", "1");
        tlBi.timeScale(4);
        tlBi.play();
    }

    function biOut() {
        $(".biCore").css("z-index", "0");
        tlCloud.delay(2);
        tlBi.timeScale(1);
        tlBi.reverse();
    }

    tlUi.to(".uiuxCore", 1, { yPercent: +100 }, 0);
    tlUi.pause();

    function uiuxIn() {
        $(".uiuxCore").css("z-index", "1");
        tlUi.timeScale(4);
        tlUi.play();
    }

    function uiuxOut() {
        $(".uiuxCore").css("z-index", "0");
        tlCloud.delay(2);
        tlUi.timeScale(1);
        tlUi.reverse();
    }

    tlMobile.to(".mobileCore", 1, { yPercent: +100 }, 0);
    tlMobile.pause();

    function mobileIn() {
        $(".mobileCore").css("z-index", "1");
        tlMobile.timeScale(4);
        tlMobile.play();
    }

    function mobileOut() {
        $(".mobileCore").css("z-index", "0");
        tlCloud.delay(2);
        tlMobile.timeScale(1);
        tlMobile.reverse();
    }
});
