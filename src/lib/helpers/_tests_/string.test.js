import { secondsToString, slug } from '../string';

describe('String Helpers', function () {
  describe('#slug', function () {
    it('should format correctly', function () {
      expect(slug('Title')).toBe('title');
      expect(slug('Composed Title')).toBe('composed-title');
      expect(slug('Title with number 1')).toBe('title-with-number-1');
      expect(slug('Título com acentuação')).toBe('titulo-com-acentuacao');
      expect(slug('Title with exclamation & question marks?!')).toBe(
        'title-with-exclamation-e-question-marks',
      );
      expect(slug('Title with exclamation! & question marks? Again')).toBe(
        'title-with-exclamation-e-question-marks-again',
      );
    });
  });
});
