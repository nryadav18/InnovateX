// Central manifest for the InnovaTeX Robotics Lab photography.
// Source raw images live in /public/InnovaTeX_Lab_Images (60MP originals) and are
// compressed into web-ready versions in /public/robotics as `<name>.jpg` (1600px long
// edge) and `<name>-sm.jpg` (700px long edge) by scripts/optimize (see repo history).

const BASE = '/robotics';

// helper: full-size (hero / lightbox) and thumb (grid) urls
export const img = (name) => `${BASE}/${name}.jpg`;
export const thumb = (name) => `${BASE}/${name}-sm.jpg`;

// Labeled project display bays — each is a physical showcase of a flagship build.
export const showcaseBays = [
  { name: 'DSC06532', title: 'Smart Parking System', tag: 'IoT · Automation', orient: 'portrait' },
  { name: 'DSC06536', title: 'Otto Walking Robot', tag: 'Servos · Motion', orient: 'portrait' },
  { name: 'DSC06538', title: 'Robotic Arm', tag: 'Actuators · Kinematics', orient: 'portrait' },
  { name: 'DSC06543', title: 'IoT Robot Car', tag: 'Wireless · Control', orient: 'portrait' },
  { name: 'DSC06544', title: 'Line Follower Robot', tag: 'Sensors · Autonomy', orient: 'portrait' },
];

// Component / board panels — the raw hardware kids learn to wire.
export const componentPanels = [
  { name: 'DSC06554', title: 'Microcontrollers', tag: 'Arduino · ESP32', orient: 'portrait' },
  { name: 'DSC06556', title: 'Display Modules', tag: 'OLED · LCD · Touch', orient: 'portrait' },
  { name: 'DSC06558', title: 'Sensor Array', tag: 'Ultrasonic · Gas · IR', orient: 'portrait' },
  { name: 'DSC06530', title: 'Component Wall', tag: 'Displays · Sensors · MCUs', orient: 'landscape' },
];

// Hero robot / project action shots (close-ups and builds).
export const robotShots = [
  { name: 'DSC06567', title: 'Otto Biped Robot', tag: 'Walking Robot', orient: 'portrait' },
  { name: 'DSC06584', title: 'Robotic Arm', tag: 'How It Works', orient: 'portrait' },
  { name: 'DSC06632', title: 'Autonomous Robot Car', tag: 'Full Build', orient: 'landscape' },
  { name: 'DSC06644', title: 'Automatic Railway Gate', tag: 'Live Project', orient: 'landscape' },
  { name: 'DSC06649', title: 'Smart Railway Crossing', tag: 'Live Project', orient: 'landscape' },
  { name: 'DSC06562', title: 'Smart Parking Track', tag: 'Working Model', orient: 'landscape' },
  { name: 'DSC06593', title: 'Obstacle-Avoiding Robot', tag: 'Ultrasonic Nav', orient: 'portrait' },
  { name: 'DSC06589', title: 'Motorized Rover', tag: 'Chassis Build', orient: 'portrait' },
  { name: 'DSC06590', title: 'Ground Rover', tag: 'Chassis Build', orient: 'portrait' },
  { name: 'DSC06608', title: 'Two-Wheel Drive Car', tag: 'Motor Chassis', orient: 'landscape' },
  { name: 'DSC06611', title: 'Tank-Tread Rover', tag: 'All-Terrain', orient: 'landscape' },
  { name: 'DSC06613', title: 'Dual-Motor Car', tag: 'Motor Chassis', orient: 'landscape' },
  { name: 'DSC06614', title: 'Tank-Tread Rover', tag: 'All-Terrain', orient: 'landscape' },
  { name: 'DSC06615', title: 'Robot Car Build', tag: 'Motor Chassis', orient: 'landscape' },
  { name: 'DSC06617', title: 'Robot Car Prototype', tag: 'Testing Rig', orient: 'landscape' },
];

// Branded environment / wall-graphic shots that establish the space.
export const brandWalls = [
  { name: 'DSC06507', title: 'Think · Build · Code · Innovate', tag: 'The Lab', orient: 'landscape' },
  { name: 'DSC06515', title: 'Inside the InnovaTeX Lab', tag: 'The Space', orient: 'landscape' },
  { name: 'DSC06511', title: 'Project Cabinet', tag: 'The Space', orient: 'landscape' },
  { name: 'DSC06603', title: 'Binary Minds · Bright Futures', tag: 'Our Ethos', orient: 'landscape' },
  { name: 'DSC06595', title: 'Learn · Build · Succeed', tag: 'The Journey', orient: 'landscape' },
  { name: 'DSC06596', title: 'Explore Technologies', tag: 'Intelligent Machines', orient: 'landscape' },
  { name: 'DSC06599', title: 'Intelligent Machines', tag: 'Reliable Systems', orient: 'landscape' },
  { name: 'DSC06601', title: 'Building Tomorrow’s Technology', tag: 'Design · Create', orient: 'landscape' },
  { name: 'DSC06606', title: 'Automate the Future', tag: 'Artificial Intelligence', orient: 'landscape' },
  { name: 'DSC06636', title: 'Industry-Grade Toolchain', tag: 'MATLAB · PyCharm', orient: 'landscape' },
  { name: 'DSC06637', title: 'Robotics Frameworks', tag: 'ROS · Gazebo · OpenCV', orient: 'landscape' },
  { name: 'DSC06640', title: 'Simulation Platforms', tag: 'NVIDIA · Webots', orient: 'landscape' },
  { name: 'DSC06643', title: 'Design & CAD Tools', tag: 'Fusion · SolidWorks', orient: 'landscape' },
];

// Everything, for gallery views. Order interleaves orientations for a lively grid.
export const allImages = [
  ...brandWalls,
  ...showcaseBays,
  ...robotShots,
  ...componentPanels,
];

// Curated subset for the homepage "Inside the Lab" strip (best variety).
export const galleryHighlights = [
  'DSC06507', 'DSC06567', 'DSC06532', 'DSC06632', 'DSC06538', 'DSC06644',
  'DSC06554', 'DSC06536', 'DSC06611', 'DSC06584', 'DSC06543', 'DSC06515',
].map((name) => allImages.find((i) => i.name === name)).filter(Boolean);
