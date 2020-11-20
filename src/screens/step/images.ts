const Images={
    F:  {
        totalFloor: 2,
        level: [
            require("../../images/Level/BlocoF0.jpg"), 
            require("../../images/Level/BlocoF1.jpg"), 
        ],
        touchable: {
            haveSteps: false,
            pisos: {
                0: [
                    { 
                        id: 0,
                        text: "Lorem sdasdsadasdadsdadsdsdasdads  sda ",
                        left: 200,
                        top: 100,
                        height: 130,
                        width: 180,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    },
                    { 
                        id: 1,
                        text: "Lorem sdasdsadasdadsdadsdsdasdads  sda ",
                        left: 200,
                        top: 300,
                        height: 80,
                        width: 180,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    },
                    { 
                        id: 2,
                        text: "Lorem sdasdsadasdadsdadsdsdasdads  sda ",
                        left: 200,
                        top: 410,
                        height: 80,
                        width: 180,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    },
                    { 
                        id: 3,
                        text: "Lorem sdasdsadasdadsdadsdsdasdads  sda ",
                        left: 200,
                        top: 520,
                        height: 80,
                        width: 180,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    },
                    { 
                        id: 4,
                        text: "Lorem sdasdsadasdadsdadsdsdasdads  sda ",
                        left: 25,
                        top: 640,
                        height: 80,
                        width: 130,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    },
                    { 
                        id: 5,
                        text: "Lorem sdasdsadasdadsdadsdsdasdads  sda ",
                        left: 290,
                        top: 660,
                        height: 70,
                        width: 100,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    },
                ],
                1: [
                    { 
                        id: 6,
                        text: "Lorem sdasdsadasdadsdadsdsdasdads  sda ",
                        left: 40,
                        top: 120,
                        height: 75,
                        width: 74,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    },
                    { 
                        id: 7,
                        text: "Lorem ipsum asdadads",
                        left: 110,
                        top: 10,
                        height: 189,
                        width: 252,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    },
                    { 
                        id: 8,
                        text: "Lorem ipsum asdadads",
                        left: 184,
                        top: 220,
                        height: 60,
                        width: 90,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    },
                    { 
                        id: 9,
                        text: "Lorem ipsum asdadads",
                        left: 310,
                        top: 220,
                        height: 60,
                        width: 85,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    },
                    { 
                        id: 10,
                        text: "Lorem ipsum asdadads",
                        left: 102,
                        top: 620,
                        height: 180,
                        width: 85,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    },
                    { 
                        id: 11,
                        text: "Lorem ipsum asdadads",
                        left: 226,
                        top: 620,
                        height: 180,
                        width: 85,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    }
                ]
            }
        }
    },
    E: {
        totalFloor: 3,
        level: [
            require("../../images/Level/BlocoETerreo.jpg"),
            require("../../images/Level/BlocoEP1.jpg"),
            require("../../images/Level/BlocoEP2.png")
        ],
        
    },
    D: {
        totalFloor: 2,
        level: [
            require("../../images/Level/BlocoDTerreo.jpg"),
            require("../../images/Level/BlocoDP1.jpg")
        ]
    },
    C: {
        totalFloor: 2,
        level: [
            require("../../images/Level/BlocoCTerreo.jpg"),
            require("../../images/Level/BlocoCP1.jpg")
        ]
    },
    A: {
        totalFloor: 3,
        level: [
            require("../../images/Level/BlocoATerreo.jpg"),
            require("../../images/Level/BlocoAP1.jpg"),
            require("../../images/Level/BlocoAP2.png")
        ]
    },
    B: {
        totalFloor: 3,
        haveSteps: true,
        level: [
            {   
                totalStep: 3,
                step: [
                    require("../../images/Level/BlocoBTerreo1.jpg"),
                    require("../../images/Level/BlocoBTerreo2.jpg"),
                    require("../../images/Level/BlocoBTerreo3.jpg")
                ]
            },
            {   
                totalStep: 4,
                step: [
                    require("../../images/Level/BlocoB1P1.jpg"),
                    require("../../images/Level/BlocoB2P1.jpg"),
                    require("../../images/Level/BlocoB3P1.jpg"),
                    require("../../images/Level/BlocoB4P1.jpg"),
                ],
                inverted: true
            },
            {
                totalStep: 5,
                step: [
                    require("../../images/Level/BlocoB1P2.png"),
                    require("../../images/Level/BlocoB2P2.png"),
                    require("../../images/Level/BlocoB3P2.png"),
                    require("../../images/Level/BlocoB4P2.png"),
                    require("../../images/Level/BlocoB5P2.png"),
                ]
            },
        ]
    }
    
}
export default Images;