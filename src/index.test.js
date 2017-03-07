import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('First test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});


describe('index.html', () => {
    it('should say starter project', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window) {
            const h2 = window.document.getElementsByTagName('h2')[0];
            expect(h2.innerHTML).to.equal('Starter Project');
            done();
            window.close();
        });
    });
});
