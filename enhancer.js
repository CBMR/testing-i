module.exports = {
  success: (item) => {
    let enhance = item.enhancement;
    let name = item.name;
    if (enhance < 15) {
      enhance++
    } else {
      switch (enhance) {
        case 15:
        enhance = 'PRI'
        break;
        case 'PRI':
        enhance = 'DUO'
        break;
        case 'DUO':
        enhance = 'TRI'
        break;
        case 'TRI':
        enhance = 'TET'
        break;
        case 'TET': 
        enhance = 'PEN'
        break;
        default:
        enhance = 'failed'
      }
    }

    name = enhance < 15 ? `[+${enhance}]` + name : name;

    return {
      ...item,
      enhancement: enhance,
      name: name
    }
  }
}