
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
//import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';


addMatchImageSnapshotCommand({
  failureThreshold: 0.05,
  failureThresholdType: 'percent',
});
//addMatchImageSnapshotPlugin();
