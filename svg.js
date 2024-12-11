document.addEventListener('DOMContentLoaded', () => {
    const draw = SVG('#canvasMain');
    const morphingPath = draw.findOne('#morphingPathMain');

    // Define all your paths in an array
    const paths = [
        "M335.077 51.5C341.327 36.5713 373.003 19.258 340.555 8.08801C308.068 -3.09561 249.418 5.9374 201 5.34424C148.709 4.70362 91.9049 -5.22376 50.0026 4.52848C6.09773 14.7468 -4.79537 34.6023 2.68375 51.5001C9.3901 66.6519 58.9261 74.45 86.5507 87.1024C127.677 105.939 127.839 143.056 201 142.332C274.968 141.6 277.515 105.829 308.396 84.9082C324.398 74.0678 330.125 63.3287 335.077 51.5Z",
        "M360.516 67C362.206 48.9238 357.565 29.6178 322.207 16.6152C286.433 3.45948 231.921 0.0341027 180.5 0.800283C131.412 1.53169 84.3545 8.11372 50.1916 20.6683C16.5762 33.0216 -1.21189 49.8202 0.359576 67C1.88239 83.648 26.6241 98.174 58.4007 110.413C91.8428 123.294 131.239 135.662 180.5 136.383C231.258 137.126 278.643 127.419 313.088 114.143C346.174 101.39 358.894 84.34 360.516 67Z" ,
        "M360.516 67C362.206 48.9238 357.565 29.6178 322.207 16.6152C286.433 3.45948 231.921 0.0341027 180.5 0.800283C131.412 1.53169 84.3545 8.11372 50.1916 20.6683C16.5762 33.0216 -1.21189 49.8202 0.359576 67C1.88239 83.648 26.6241 98.174 58.4007 110.413C91.8428 123.294 131.239 135.662 180.5 136.383C231.258 137.126 278.643 127.419 313.088 114.143C346.174 101.39 358.894 84.34 360.516 67Z",
        "M335.077 51.5C341.327 36.5713 373.003 19.258 340.555 8.08801C308.068 -3.09561 249.418 5.9374 201 5.34424C148.709 4.70362 91.9049 -5.22376 50.0026 4.52848C6.09773 14.7468 -4.79537 34.6023 2.68375 51.5001C9.3901 66.6519 58.9261 74.45 86.5507 87.1024C127.677 105.939 127.839 143.056 201 142.332C274.968 141.6 277.515 105.829 308.396 84.9082C324.398 74.0678 330.125 63.3287 335.077 51.5Z",
        "M360.516 67C362.206 48.9238 357.565 29.6178 322.207 16.6152C286.433 3.45948 231.921 0.0341027 180.5 0.800283C131.412 1.53169 84.3545 8.11372 50.1916 20.6683C16.5762 33.0216 -1.21189 49.8202 0.359576 67C1.88239 83.648 26.6241 98.174 58.4007 110.413C91.8428 123.294 131.239 135.662 180.5 136.383C231.258 137.126 278.643 127.419 313.088 114.143C346.174 101.39 358.894 84.34 360.516 67Z" ,
        "M360.516 67C362.206 48.9238 357.565 29.6178 322.207 16.6152C286.433 3.45948 231.921 0.0341027 180.5 0.800283C131.412 1.53169 84.3545 8.11372 50.1916 20.6683C16.5762 33.0216 -1.21189 49.8202 0.359576 67C1.88239 83.648 26.6241 98.174 58.4007 110.413C91.8428 123.294 131.239 135.662 180.5 136.383C231.258 137.126 278.643 127.419 313.088 114.143C346.174 101.39 358.894 84.34 360.516 67Z",
        "M341.695 86.5C339.854 64.5672 330.517 40.8778 301.773 28.2321C275.346 16.6062 240.331 31.407 208.5 27.9028C161.105 22.6854 119.14 -9.126 75.3212 3.30309C27.3401 16.9127 -7.74204 54.1385 1.91426 86.5C11.2521 117.794 74.0614 126.579 117.17 143.554C146.269 155.011 174.171 166.494 208.5 167.843C245.491 169.298 285.593 167.404 312.097 151.218C338.794 134.913 343.651 109.791 341.695 86.5Z",
        "M360.516 67C362.206 48.9238 357.565 29.6178 322.207 16.6152C286.433 3.45948 231.921 0.0341027 180.5 0.800283C131.412 1.53169 84.3545 8.11372 50.1916 20.6683C16.5762 33.0216 -1.21189 49.8202 0.359576 67C1.88239 83.648 26.6241 98.174 58.4007 110.413C91.8428 123.294 131.239 135.662 180.5 136.383C231.258 137.126 278.643 127.419 313.088 114.143C346.174 101.39 358.894 84.34 360.516 67Z" ,
        "M360.516 67C362.206 48.9238 357.565 29.6178 322.207 16.6152C286.433 3.45948 231.921 0.0341027 180.5 0.800283C131.412 1.53169 84.3545 8.11372 50.1916 20.6683C16.5762 33.0216 -1.21189 49.8202 0.359576 67C1.88239 83.648 26.6241 98.174 58.4007 110.413C91.8428 123.294 131.239 135.662 180.5 136.383C231.258 137.126 278.643 127.419 313.088 114.143C346.174 101.39 358.894 84.34 360.516 67Z",
        "M334.862 68.5C333.273 55.0057 309.068 45.7485 290.863 35.116C268.328 21.9549 254.346 1.82785 218 0.247715C181.056 -1.35839 160.278 18.3772 129.86 28.1164C86.4091 42.0284 19.2906 45.1338 4.83065 68.5C-10.983 94.0536 21.9857 120.833 60.0975 140.847C101.105 162.382 158.608 189.178 218 180.444C278.126 171.603 271.924 131.791 299.171 105.691C312.43 92.9905 336.517 82.5577 334.862 68.5Z",
        "M360.516 67C362.206 48.9238 357.565 29.6178 322.207 16.6152C286.433 3.45948 231.921 0.0341027 180.5 0.800283C131.412 1.53169 84.3545 8.11372 50.1916 20.6683C16.5762 33.0216 -1.21189 49.8202 0.359576 67C1.88239 83.648 26.6241 98.174 58.4007 110.413C91.8428 123.294 131.239 135.662 180.5 136.383C231.258 137.126 278.643 127.419 313.088 114.143C346.174 101.39 358.894 84.34 360.516 67Z" ,
        "M360.516 67C362.206 48.9238 357.565 29.6178 322.207 16.6152C286.433 3.45948 231.921 0.0341027 180.5 0.800283C131.412 1.53169 84.3545 8.11372 50.1916 20.6683C16.5762 33.0216 -1.21189 49.8202 0.359576 67C1.88239 83.648 26.6241 98.174 58.4007 110.413C91.8428 123.294 131.239 135.662 180.5 136.383C231.258 137.126 278.643 127.419 313.088 114.143C346.174 101.39 358.894 84.34 360.516 67Z",
        "M334.769 122.5C355.242 92.3662 319.05 56.0871 284.929 32.7584C251.141 9.65712 203.744 -0.513597 156.5 0.616321C110.879 1.70742 66.3611 14.5297 36.5719 38.6982C8.59944 61.3929 -9.58879 94.6742 6.27153 122.5C20.5433 147.539 70.9224 145.796 104.892 158.562C122.986 165.361 135.993 179.817 156.5 178.953C176.433 178.114 184.056 160.224 202.244 154.464C246.493 140.451 313.934 153.167 334.769 122.5Z"
    ];

// Function to animate the paths with easing
const animateMorph = (index) => {
    morphingPath.animate(1)  // Animation duration
        .plot(paths[index])  // Set path based on the index
        .after(() => {
            // Move to the next path in the array, and loop back to the start when done
            const nextIndex = (index + 1) % paths.length;
            morphingPath.animate({
                duration: 5500,  // Set animation duration
                ease: 'easeInOutBounce'
            })
            .plot(paths[nextIndex])  // Plot the next path
            .after(() => animateMorph(nextIndex));  // Recursively animate the next path
        });
};

// Start the animation from the first path
animateMorph(0);
});

// document.addEventListener('DOMContentLoaded', () => {
//     const draw = SVG('#canvasMain02');
//     const morphingPath = draw.findOne('#morphingPathMain02');

//     // Define all your paths in an array
//     const paths = [
//         "M334.769 122.5C355.242 92.3662 319.05 56.0871 284.929 32.7584C251.141 9.65712 203.744 -0.513597 156.5 0.616321C110.879 1.70742 66.3611 14.5297 36.5719 38.6982C8.59944 61.3929 -9.58879 94.6742 6.27153 122.5C20.5433 147.539 70.9224 145.796 104.892 158.562C122.986 165.361 135.993 179.817 156.5 178.953C176.433 178.114 184.056 160.224 202.244 154.464C246.493 140.451 313.934 153.167 334.769 122.5Z",
//         "M341.695 86.5C339.854 64.5672 330.517 40.8778 301.773 28.2321C275.346 16.6062 240.331 31.407 208.5 27.9028C161.105 22.6854 119.14 -9.126 75.3212 3.30309C27.3401 16.9127 -7.74204 54.1385 1.91426 86.5C11.2521 117.794 74.0614 126.579 117.17 143.554C146.269 155.011 174.171 166.494 208.5 167.843C245.491 169.298 285.593 167.404 312.097 151.218C338.794 134.913 343.651 109.791 341.695 86.5Z",
//         "M360.516 67C362.206 48.9238 357.565 29.6178 322.207 16.6152C286.433 3.45948 231.921 0.0341027 180.5 0.800283C131.412 1.53169 84.3545 8.11372 50.1916 20.6683C16.5762 33.0216 -1.21189 49.8202 0.359576 67C1.88239 83.648 26.6241 98.174 58.4007 110.413C91.8428 123.294 131.239 135.662 180.5 136.383C231.258 137.126 278.643 127.419 313.088 114.143C346.174 101.39 358.894 84.34 360.516 67Z" ,
//         "M335.077 51.5C341.327 36.5713 373.003 19.258 340.555 8.08801C308.068 -3.09561 249.418 5.9374 201 5.34424C148.709 4.70362 91.9049 -5.22376 50.0026 4.52848C6.09773 14.7468 -4.79537 34.6023 2.68375 51.5001C9.3901 66.6519 58.9261 74.45 86.5507 87.1024C127.677 105.939 127.839 143.056 201 142.332C274.968 141.6 277.515 105.829 308.396 84.9082C324.398 74.0678 330.125 63.3287 335.077 51.5Z",
//         "M360.516 67C362.206 48.9238 357.565 29.6178 322.207 16.6152C286.433 3.45948 231.921 0.0341027 180.5 0.800283C131.412 1.53169 84.3545 8.11372 50.1916 20.6683C16.5762 33.0216 -1.21189 49.8202 0.359576 67C1.88239 83.648 26.6241 98.174 58.4007 110.413C91.8428 123.294 131.239 135.662 180.5 136.383C231.258 137.126 278.643 127.419 313.088 114.143C346.174 101.39 358.894 84.34 360.516 67Z",
//         "M334.862 68.5C333.273 55.0057 309.068 45.7485 290.863 35.116C268.328 21.9549 254.346 1.82785 218 0.247715C181.056 -1.35839 160.278 18.3772 129.86 28.1164C86.4091 42.0284 19.2906 45.1338 4.83065 68.5C-10.983 94.0536 21.9857 120.833 60.0975 140.847C101.105 162.382 158.608 189.178 218 180.444C278.126 171.603 271.924 131.791 299.171 105.691C312.43 92.9905 336.517 82.5577 334.862 68.5Z",
        
//     ];

// // Function to animate the paths with easing
// const animateMorph = (index) => {
//     morphingPath.animate(1)  // Animation duration
//         .plot(paths[index])  // Set path based on the index
//         .after(() => {
//             // Move to the next path in the array, and loop back to the start when done
//             const nextIndex = (index + 1) % paths.length;
//             morphingPath.animate({
//                 duration: 10000,  // Set animation duration
//                 ease: 'ease'
//             })
//             .plot(paths[nextIndex])  // Plot the next path
//             .after(() => animateMorph(nextIndex));  // Recursively animate the next path
//         });
// };

// // Start the animation from the first path
// animateMorph(0);
// });

document.addEventListener('DOMContentLoaded', () => {
    const draw = SVG('#canvas01');
    const morphingPath = draw.findOne('#morphingPath01');

    // Define all your paths in an array
    const paths = [
        "M202.5,403.27968207362574C253.82346809376673,405.2847064465466,296.75528958938105,369.39287007803875,333.00534016252243,333.00534016252243C369.1678012252894,296.7057319430766,403.7002025284175,253.72494368718037,402.52109640656266,202.5C401.35957773016247,152.0391231650877,362.82253025956607,113.55882887114913,327.13252513845,77.8674748615501C291.44156128934316,42.17516208772563,252.856175865617,5.941451057754192,202.50000000000006,2.4713438816252165C149.26275213308105,-1.1973015761505694,97.32885886982159,21.862294597264196,59.4190004233859,59.41900042338586C21.335486617433354,97.14774390725077,-3.9434998821974827,149.08412670730792,0.5904375962563715,202.49999999999994C4.853917951736378,252.72952511728573,46.062812221198016,287.64676131931515,81.80804010453218,323.19195989546773C117.39901514118793,358.5837688196081,152.345652366178,401.3203310564646,202.5,403.27968207362574",
        "M202.5,399.70162313797374C251.50556168777777,396.61517757379505,283.74766547676063,353.18336360007623,318.92001185366087,318.92001185366087C354.8485020778055,283.92005805256895,405.85152361019806,252.6498760160114,404.93331260846134,202.5C404.01992494712823,152.61356008175545,351.04685068780697,124.48391952299946,314.7335172364178,90.26648276358222C280.18964360329716,57.71637790887661,249.94497304562293,13.078335363609215,202.50000000000006,11.750531035608482C154.40280555105687,10.404473511398535,117.1600802080827,49.12655970253292,83.80363371724364,83.8036337172436C51.31847440212189,117.5749251004406,21.510515907807253,155.70728819900273,19.01495590523284,202.49999999999997C16.399477767165173,251.5412230562104,36.97597252610238,298.6157407481006,70.42968563615212,334.5703143638478C105.18917618824929,371.92827991433876,151.5730719712833,402.909079306172,202.5,399.70162313797374",
        "M202.5,381.43839967859094C252.37982223442444,388.8396061408624,305.61753917326666,376.8626920696713,342.79552836715993,342.79552836715993C381.29301176951327,307.5192776166726,403.65862999634993,254.38341814949382,397.7780673999223,202.5C392.33348875103155,154.46320997249316,353.8091482859908,118.53108840199798,314.2304389841806,90.76956101581942C281.73456413869496,67.97611637411859,242.05739969834744,68.80337834582448,202.5,65.52692756595206C156.91249789741357,61.75101691572057,107.74545824476411,43.907882979775344,70.58931243589383,70.58931243589377C29.93468202299014,99.78296613200725,5.882380199333971,152.79487655872373,11.753418763837544,202.49999999999994C17.258501191120025,249.10688200156858,64.23161332653214,274.43193234996727,98.45927343386653,306.54072656613346C130.85761693480262,336.9334481589633,158.55846209002445,374.91832042062987,202.5,381.43839967859094",
        "M202.5,369.6574174426496C246.6550114639634,367.07135680248444,286.9745207278639,349.40313112055435,320.14931683673336,320.14931683673336C355.9868933746416,288.54744037058396,387.92370335437664,250.10130784571933,392.06205805996433,202.5C396.52033567526524,151.21878794220444,378.9352325373773,98.86089950244774,342.55343661068025,62.44656338931974C306.15777990625475,26.01835410126629,253.05457888979677,2.9759084930393715,202.50000000000006,12.76839602971448C156.85859925559768,21.609194583693892,137.44043628500864,72.00197895610137,107.89936213139717,107.89936213139713C83.05004254094634,138.09547288706324,52.771834580816645,163.92237841755306,46.3639564672485,202.49999999999997C38.731511294696745,248.44993481414994,38.4170627841375,300.7478081951348,70.21243699229935,334.7875630077006C102.57219926807807,369.4315450677597,155.17477202563774,372.4291506003054,202.5,369.6574174426496",
        "M202.5,394.76857112080324C249.7729564669306,392.02543055157287,264.2603455074966,329.33392667466194,288.8923353236011,288.8923353236011C305.4198456330703,261.7569385092929,313.1889497921032,233.6176541423308,319.60611100075766,202.5C328.8476468644223,157.6865836934837,365.52456931448023,104.17340194821263,333.7816048982851,71.21839510171492C302.1359863371182,38.36445106954269,248.1108205039225,81.61514662085229,202.5,80.92242333776085C155.3687734141284,80.20660858906795,105.51946956597533,39.762613219864335,67.1691663951846,67.16916639518456C27.77453478295037,95.32203552100606,24.501558594371815,154.72418735550605,32.37510709790513,202.49999999999997C39.220333777962125,244.0360707092532,77.5680010316189,268.0096055254267,105.46372577302866,299.5362742269713C136.68398734901413,334.82020581884547,155.46584673096447,397.4978544915598,202.5,394.76857112080324"
    ];

// Function to animate the paths with easing
const animateMorph = (index) => {
    morphingPath.animate(1)  // Animation duration
        .plot(paths[index])  // Set path based on the index
        .after(() => {
            // Move to the next path in the array, and loop back to the start when done
            const nextIndex = (index + 1) % paths.length;
            morphingPath.animate({
                duration: 14500,  // Set animation duration
                ease: 'ease'
            })
            .plot(paths[nextIndex])  // Plot the next path
            .after(() => animateMorph(nextIndex));  // Recursively animate the next path
        });
};

// Start the animation from the first path
animateMorph(0);
});

document.addEventListener('DOMContentLoaded', () => {
    const draw = SVG('#canvas02');
    const morphingPath = draw.findOne('#morphingPath02');

    // Define all your paths in an array
    const paths = [
        "M202.5,389.337398570164C297.73818240640037,389.337398570164,359.23430235657315,297.73818240640037,359.2343023565731,202.5C359.2343023565731,115.7376444503985,289.26235554960147,45.0408552520509,202.5,45.040855252050925C118.17848693971709,45.04085525205093,54.758604077090084,118.17848693971706,54.7586040770901,202.49999999999997C54.758604077090105,295.5200118917149,109.4799881082851,389.337398570164,202.5,389.337398570164",
        "M202.5,348.0469110683771C298.0523929045529,348.0469110683771,399.1800249645818,298.0523929045529,399.1800249645817,202.5C399.1800249645817,114.5023022611925,290.4976977388075,92.53833372360337,202.5,92.5383337236034C140.12660739408213,92.53833372360342,86.66403013128345,140.1266073940821,86.66403013128347,202.49999999999997C86.66403013128347,275.1436858070094,129.85631419299057,348.0469110683771,202.5,348.0469110683771",
        "M202.5,345.7506398280384C295.95584692127267,345.7506398280384,394.19739525590563,295.95584692127267,394.1973952559056,202.5C394.1973952559056,105.52823231713053,299.4717676828695,44.66834756894967,202.5,44.66834756894969C113.03775302839887,44.668347568949706,36.464096357231014,113.03775302839884,36.46409635723103,202.49999999999997C36.464096357231035,288.1385732566797,116.86142674332027,345.7506398280384,202.5,345.7506398280384",
        "M202.5,404.21210484529314C312.54492662229654,404.21210484529314,399.26512009564,312.54492662229654,399.26512009563993,202.5C399.26512009563993,98.42963523691468,306.5703647630853,22.77858126609185,202.5,22.778581266091877C109.92743164126432,22.778581266091887,47.93144195556771,109.92743164126429,47.93144195556773,202.49999999999997C47.931441955567735,301.7417526342506,103.2582473657494,404.21210484529314,202.5,404.21210484529314"
    ];

    const animateMorph = (index) => {
        morphingPath.animate(1)  // Animation duration
            .plot(paths[index])  // Set path based on the index
            .after(() => {
                // Move to the next path in the array, and loop back to the start when done
                const nextIndex = (index + 1) % paths.length;
                morphingPath.animate({
                    duration: 10000,  // Set animation duration
                    ease: 'ease'
                })
                .plot(paths[nextIndex])  // Plot the next path
                .after(() => animateMorph(nextIndex));  // Recursively animate the next path
            });
    };

    // Start the animation from the first path
    animateMorph(0);
});


document.addEventListener('DOMContentLoaded', () => {
    const draw = SVG('#canvas03');
    const morphingPath = draw.findOne('#morphingPath03');

    // Define all your paths in an array
    const paths = [
        "M202.5,385.420940843469C273.75827127827347,391.0667872915302,318.9182435890607,315.40643359647527,337.84134861338737,246.4750698792137C353.8806817644085,188.04844772634564,332.83870830203045,126.167512254169,283.2125096293241,91.40876099034287C236.10045388071373,58.41094388785971,171.24071016489444,61.88367589329895,127.31989233780708,99.02345903468127C90.62425706134525,130.05357194761814,108.02242354645168,182.7512768966495,120.22402304551521,229.23308543931677C136.7419759786938,292.1579770337117,137.64646000057135,380.28254607354694,202.5,385.420940843469",
        "M202.5,266.8554207847046C271.70493508982025,269.17240554903026,359.1647407387704,325.35711829020386,390.365341396373,263.54114965920076C427.3795935581435,190.20692524341183,376.93187144944045,102.09207966190404,308.8970443020932,56.05703183102842C247.3953556069025,14.442563190857584,167.2895158793237,27.72573812685158,108.07104418643135,72.52969244923274C52.57222408036996,114.51940494761305,19.31701961855852,189.54220470285506,49.73368576252819,252.13678441666005C74.4533791124191,303.00754088177416,145.97287881545128,264.9628898779738,202.5,266.8554207847046",
        "M202.5,312.7141544541183C269.07591278562035,315.9666036148374,351.29837954575527,320.8432556447344,375.0778537286794,258.57394381004946C400.9693132861057,190.77415325815164,355.8611771623497,113.38428747681806,291.2225324691984,80.38391037097873C243.80140557343952,56.17370179106843,207.96689111783402,119.4576938149524,165.5034237163073,151.57858128379277C127.50983831391477,180.31828993048117,64.37451851752195,197.4848887920221,75.03503032022488,243.9158792286891C86.98010259415986,295.9416681195892,149.18411830720345,310.10950079772573,202.5,312.7141544541183",
        "M202.5,312.59024900096273C263.68891289467814,311.62195943047857,344.24764808818304,312.60048025407866,357.43735355473746,252.84219785213574C369.76464206866996,196.99124726542436,285.17103640616415,185.91636302503787,237.4017070613216,154.4619214072159C200.9448679472165,130.4563610777667,169.50607847866803,83.79761515571161,130.51580030012917,103.42224897351124C70.12389289364339,133.81877661519115,9.696848322120882,194.06665670454606,31.698141684663447,257.996887919835C53.20207967485756,320.481929371665,136.42650679649228,313.63583506104743,202.5,312.59024900096273",
        "M202.5,353.54713661386944C279.61790100053696,359.56364772278346,372.17208660875815,338.8648804937249,392.43837242087795,264.2147182699643C411.3942865575421,194.39126475114494,328.4338660122129,152.122066985911,267.9710326220524,112.38685438442864C219.8474557543054,80.76080494601628,161.84895213331282,48.589817784788195,114.74979051715454,81.72219815025332C66.1740202622453,115.89331375836963,67.86843224743816,183.79734757169965,86.11377479997383,240.31617693768712C104.49731360874884,297.2630986019102,142.84061274890294,348.89268723842895,202.5,353.54713661386944"
    ];

// Function to animate the paths with easing
const animateMorph = (index) => {
    morphingPath.animate(1)  // Animation duration
        .plot(paths[index])  // Set path based on the index
        .after(() => {
            // Move to the next path in the array, and loop back to the start when done
            const nextIndex = (index + 1) % paths.length;
            morphingPath.animate({
                duration: 18450,  // Set animation duration
                ease: 'ease'
            })
            .plot(paths[nextIndex])  // Plot the next path
            .after(() => animateMorph(nextIndex));  // Recursively animate the next path
        });
};

// Start the animation from the first path
animateMorph(0);
});