'use strict';


const { app } = require('egg-mock/bootstrap');
const {
    addOperationBody,
    addOperationResponse,
    minusOperationBody,
    minusOperationResponse,
    rightDivideOperationBody,
    rightDivideOperationResponse,
    wrongDivideOperationBody1,
    wrongDivideOperationResponse1,
    wrongDivideOperationBody2,
    wrongDivideOperationResponse2,
} = require('../../request_body');


describe('Demo test\n\n', () => {

    before(() => console.log('Test start...'));

    it('加法', async () => {
        await app.httpRequest()
            .post('/demo/foo/add')
            .type('json')
            .send(addOperationBody)
            .expect(200)
            .expect(addOperationResponse);
    });

    it('减法', async () => {
        await app.httpRequest()
            .post('/demo/foo/minus')
            .type('json')
            .send(minusOperationBody)
            .expect(200)
            .expect(minusOperationResponse);
    });

    it('正确除法', async () => {
        await app.httpRequest()
            .post('/demo/foo/divide')
            .type('json')
            .send(rightDivideOperationBody)
            .expect(200)
            .expect(rightDivideOperationResponse);
    });

    it('错误除法(除数为0)', async () => {
        await app.httpRequest()
            .post('/demo/foo/divide')
            .type('json')
            .send(wrongDivideOperationBody1)
            .expect(200)
            .expect(wrongDivideOperationResponse1);
    });

    it('错误除法(除数超过api参数限制)', async () => {
        await app.httpRequest()
          .post('/demo/foo/divide')
          .type('json')
          .send(wrongDivideOperationBody2)
          .expect(200)
          .expect(wrongDivideOperationResponse2);
    });

    // 测试结束
    after(async () => {
        console.log('Test end.');
    });

});
