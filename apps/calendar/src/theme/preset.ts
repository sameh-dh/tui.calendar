/**
 * @fileoverview The standard theme
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */
import { ThemeKeyValue } from '@src/theme/themeProps';

/**
 * "common" prefix is for entire calendar. "common" properties can be overriden by "week", "month".
 * "week" prefix is for weekly and daily view.
 * "month" prefix is for monthly view.
 */
const theme: ThemeKeyValue = {
  'common.border': '1px solid #e5e5e5',
  'common.backgroundColor': 'white',
  'common.holiday.color': '#ff4040',
  'common.saturday.color': '#333',
  'common.dayname.color': '#333',
  'common.today.color': '#333',

  // creation guide style
  'common.creationGuide.backgroundColor': 'rgba(81, 92, 230, 0.05)',
  'common.creationGuide.border': '1px solid #515ce6',

  // month header 'dayname'
  'month.dayname.borderLeft': 'none',
  'month.dayname.backgroundColor': 'inherit',

  // month day grid cell 'day'
  'month.holidayExceptThisMonth.color': 'rgba(255, 64, 64, 0.4)',
  'month.dayExceptThisMonth.color': 'rgba(51, 51, 51, 0.4)',
  'month.weekend.backgroundColor': 'inherit',

  // month more view
  'month.moreView.border': '1px solid #d5d5d5',
  'month.moreView.boxShadow': '0 2px 6px 0 rgba(0, 0, 0, 0.1)',
  'month.moreView.backgroundColor': 'white',

  // week header 'dayname'
  'week.dayname.height': '42px',
  'week.dayname.borderTop': '1px solid #e5e5e5',
  'week.dayname.borderBottom': '1px solid #e5e5e5',
  'week.dayname.borderLeft': 'none',
  'week.dayname.paddingLeft': '0',
  'week.dayname.backgroundColor': 'inherit',
  'week.dayname.textAlign': 'left',
  'week.today.color': 'inherit',
  'week.pastDay.color': '#bbb',

  // panel resizer
  'week.panelResizer.border': '1px solid #e5e5e5',
  'week.panelResizer.height': '3px',

  // week daygrid 'daygrid'
  'week.daygrid.borderRight': '1px solid #e5e5e5',
  'week.daygrid.backgroundColor': 'inherit',

  'week.daygridLeft.width': '72px',
  'week.daygridLeft.backgroundColor': 'inherit',
  'week.daygridLeft.paddingRight': '8px',
  'week.daygridLeft.borderRight': '1px solid #e5e5e5',

  'week.today.backgroundColor': 'rgba(81, 92, 230, 0.05)',
  'week.weekend.backgroundColor': 'inherit',

  // week timegrid 'timegrid'
  'week.timegridLeft.width': '72px',
  'week.timegridLeft.backgroundColor': 'inherit',
  'week.timegridLeft.borderRight': '1px solid #e5e5e5',
  'week.timegridLeft.fontSize': '11px',

  'week.timegridOneHour.height': '52px',
  'week.timegridHalfHour.height': '26px',
  'week.timegridHalfHour.borderBottom': 'none',
  'week.timegridHorizontalLine.borderBottom': '1px solid #e5e5e5',

  'week.timegrid.paddingRight': '8px',
  'week.timegrid.borderRight': '1px solid #e5e5e5',
  'week.timegridSchedule.borderRadius': '2px',
  'week.timegridSchedule.paddingLeft': '2px',

  'week.currentTime.color': '#515ce6',
  'week.currentTime.fontSize': '11px',
  'week.currentTime.fontWeight': 'normal',

  'week.currentTimeLinePast.border': '1px dashed #515ce6',
  'week.currentTimeLineBullet.backgroundColor': '#515ce6',
  'week.currentTimeLineToday.border': '1px solid #515ce6',
  'week.currentTimeLineFuture.border': 'none',

  // week creation guide style
  'week.creationGuide.color': '#515ce6',
  'week.creationGuide.fontSize': '11px',
  'week.creationGuide.fontWeight': 'bold',

  // week daygrid schedule style
  'week.dayGridSchedule.borderRadius': '2px',
  'week.dayGridSchedule.height': '24px',
  'week.dayGridSchedule.marginTop': '2px',
  'week.dayGridSchedule.marginLeft': '8px',
  'week.dayGridSchedule.marginRight': '8px',
};

export default theme;
