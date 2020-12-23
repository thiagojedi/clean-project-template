import { createImageSrcSet, dashToHls, hlsToDash } from '../url';

describe('Url Helpers', function () {
  describe('#createImageSrcSet', function () {
    it('should create source sets with images without querystring', function () {
      expect(createImageSrcSet('image.jpg', [1])).toBe('image.jpg?w=1 1w');
      expect(createImageSrcSet('image.jpg', [1, 2])).toBe(
        'image.jpg?w=1 1w, image.jpg?w=2 2w',
      );
    });

    it('should create source sets with images that already have querystring', function () {
      expect(createImageSrcSet('image.jpg?key=value', [1])).toBe(
        'image.jpg?key=value&w=1 1w',
      );
      expect(createImageSrcSet('image.jpg?key=value', [1, 2])).toBe(
        'image.jpg?key=value&w=1 1w, image.jpg?key=value&w=2 2w',
      );
    });
  });
});
