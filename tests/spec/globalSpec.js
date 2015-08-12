    describe('basic test', function () {
        describe('functionality', function () {
            it('it should loads well', function () {
                expect(typeof(pDate)).toBe('function');
            });
            it('it should parse persian date currectlty', function () {
                window.Date = pDate;
                j = new Date('1394/02/13');
                j.toLocaleString();
                expect(j.toLocaleString()).toBe('1394/02/13 00:00:00');
            });
            it('it should convert to persian date currectlty', function () {
                window.Date = pDate;
                j = new Date('2015/8/12',false);
                j.toLocaleString();
                expect(j.toLocaleString()).toBe('1394/05/21 00:00:00');
            });
        });
    });