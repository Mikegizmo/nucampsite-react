import { COMMENTS } from  '../../app/shared/COMMENTS';

export const selectCoomentsByCampsiteId = (campsiteId) => {
  return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
};