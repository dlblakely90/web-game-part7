function newElement(type, src, pos, l, bot) {
    let element = document.createElement(type)
    element.src = src
    element.style.position = pos
    element.style.left = l
    element.style.bottom = bot
    document.body.append(element)

    return element;
}

// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
npc.walkEast()

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create Background
function newBackground(type, src, pos, l, bot) {
    let element = newElement(type, src, pos, l, bot)
    element.style.zIndex = -100;
}


// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

for (let left = 0; left < 17; left++) {
    for (let bottom = 0; bottom < 4; bottom++) {
        let l = 100 * left + 'px'; 
        let b = 100 * bottom + 'px'
        newBackground('img', 'assets/grass.png', 'fixed', l, b)
    }
}

for (let i = 0; i < 17; i++) {
    for (let j = 4; j < 9; j++) {
        newBackground('img', 'assets/sky.png', 'fixed', i * 100  + 'px', 100 * j + 'px')
    }
}