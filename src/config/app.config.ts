interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Viewer'],
  tenantName: 'Team',
  applicationName: 'Tasky5',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage tasks', 'Manage lists', 'Manage users', 'Manage teams'],
  getQuoteUrl: 'https://app.roq.ai/proposal/2b47fc98-8be3-49e6-98a4-b8a381a3ee88',
};
