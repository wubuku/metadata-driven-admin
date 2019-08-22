import {IconDefinition} from '@ant-design/icons-angular';
import * as antDesignIcons from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [];
for (const key of Object.keys(antDesignIcons)) {
  icons.push(antDesignIcons[key]);
}

export {icons};
