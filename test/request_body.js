'use strict';


exports.addOperationBody = {
  operand1: 1,
  operand2: 2
};

exports.addOperationResponse = {
  code: 0,
  msg: 'add finished',
  data: 3,
};

exports.minusOperationBody = {
  minuend: 1,
  subtrahend: 0
};

exports.minusOperationResponse = {
  "code": 0,
  "msg": "minus finished",
  "data": 1
};

exports.rightDivideOperationBody = {
  dividend: 1,
  divisor: 2
};

exports.rightDivideOperationResponse = {
  "code": 0,
  "msg": "divide finished",
  "data": 0.5
};

exports.wrongDivideOperationBody1 = {
  dividend: 1,
  divisor: 0
};

exports.wrongDivideOperationResponse1 = {
  "code": 102,
  "msg": "请求数据错误"
}

exports.wrongDivideOperationBody2 = {
  dividend: 1,
  divisor: 10000
};

exports.wrongDivideOperationResponse2 = {
  "code": 102,
  "msg": "请求数据错误, ValidationError: child \"divisor\" fails because [\"divisor\" must be less than or equal to 1000]"
}

// 正确数据
exports.rightBody = {
  sign: 'a64009408c95a13c1d84e711905fd32a',
  timespan: '12123243434',
  guid: '4444444444999',
  doc: {
    order: 'HTMLY2019052800030',
    count: '1',
    box_set: {
      code: '9706159370001A',
      op_type: 1
    },
    box: [
      {
        waybill: {
          code: 'assd',
          count: '1',
          volume: '2.34',
          weight: 3.56
        },
        code: 'C000T8A7298', // 箱号、箱名 必填 类型：String
        contract_no: '1Y01001806020U', // 合同号  必填  类型：String
        contract_type: '项目', // 项目/分销标识  必填  类型：String
        deliver_finish: 'Y', // 是否齐套发货，所有批次都发货才标记为Y，否则为N   必填  类型：String
        deliver_set: 'HWA02Z02N', // 发运集   必填   类型：String
        batch: 'HWA02Z', // 发货批次   必填   类型：String
        project_name: '华北空管局', // 项目名称   必填   类型：String
        // deliver_type: '已预约', // 直发/自提   必填   类型：String
        deliver_type: '', // 直发/自提   必填   类型：String
        zf_type: '2', // 直发类型：1：客户，2：总代库房
        deliver_address: 'AAAAAAA', // 发货地址
        deliver_site: '石排普洛斯1#', // 发货口 自提场景使用   类型：String
        site: 'DDDDDDD', // 局点、站点名   必填   类型：String
        create_time: '2019-03-01 12:00:00', // 箱单生成时间 必填 类型：String
        physics: { // 箱子物理信息   必填
          package: '材质', // 包装材料   必填  类型：String
          weight: 2.3, // 毛重（KG） 该箱名对应的重量   必填 类型：float
          volume: 3, // 体积（m^3）该箱名对应的体积   必填 类型：float
          long: 3, // 长   必填 类型：float
          width: 3, // 宽   必填  类型：float
          height: 3.33 // 高   必填  类型：float
        },
        product: [ // 产品物料信息   必填
          {
            item_no: 'aaa', // 华为物料编码   必填 类型：String
            group: 'aa', // 产品族   必填 类型：String
            name: 'aaa', // 产品名称   必填 类型：String
            model: 'aaaa', // 产品型号   必填 类型：String
            description: 'a', // 描述 类型：String
            count: 10, // 物料数量   必填 类型：int
            cost_item: 1, // 是否报价项 用于区分辅料
            product_id: 'a',
            sn: [
              'aa'
            ]
          }
        ]
      }
    ]
  }
};


// 签名错误数据
exports.signErrReqBody = {
  sign: 'a64009408c95a13c1d84e711905fd32a_wrong',
  timespan: '12123243434',
  guid: '4444444444999',
  doc: {
    order: 'HTMLY2019052800030',
    count: 1,
    box_set: {
      code: '9706159370001A',
      op_type: 1
    },
    box: [
      {
        waybill: {
          code: 'assd',
          count: 4,
          volume: 2.34,
          weight: 3.56
        },
        code: 'C000T8A7298', // 箱号、箱名 必填 类型：String
        contract_no: '1Y01001806020U', // 合同号  必填  类型：String
        contract_type: '项目', // 项目/分销标识  必填  类型：String
        deliver_finish: 'Y', // 是否齐套发货，所有批次都发货才标记为Y，否则为N   必填  类型：String
        deliver_set: 'HWA02Z02N', // 发运集   必填   类型：String
        batch: 'HWA02Z', // 发货批次   必填   类型：String
        project_name: '华北空管局', // 项目名称   必填   类型：String
        deliver_type: '已预约', // 直发/自提   必填   类型：String
        zf_type: '1', // 直发类型：1：客户，2：总代库房
        deliver_address: 'AAAAAAA', // 发货地址
        deliver_site: '石排普洛斯1#', // 发货口 自提场景使用   类型：String
        site: 'DDDDDDD', // 局点、站点名   必填   类型：String
        create_time: '2019-03-01 12:00:00', // 箱单生成时间 必填 类型：String
        physics: { // 箱子物理信息   必填
          package: '材质', // 包装材料   必填  类型：String
          weight: 2.3, // 毛重（KG） 该箱名对应的重量   必填 类型：float
          volume: 3, // 体积（m^3）该箱名对应的体积   必填 类型：float
          long: 3, // 长   必填 类型：float
          width: 3, // 宽   必填  类型：float
          height: 3.33 // 高   必填  类型：float
        },
        product: [ // 产品物料信息   必填
          {
            item_no: 'aaa', // 华为物料编码   必填 类型：String
            group: 'aa', // 产品族   必填 类型：String
            name: 'aaa', // 产品名称   必填 类型：String
            model: 'aaaa', // 产品型号   必填 类型：String
            description: 'a', // 描述 类型：String
            count: 10, // 物料数量   必填 类型：int
            cost_item: 1, // 是否报价项 用于区分辅料??  必填 类型：String
            sn: []
          }
        ]
      }
    ]
  }
};


// 数据不完整, 箱子数不对
exports.boxCountErrReqBody = {
  sign: 'a64009408c95a13c1d84e711905fd32a',
  timespan: '12123243434',
  guid: '4444444444999',
  doc: {
    order: 'HTMLY2019052800030',
    count: 2, // 错误, 应该是1
    box_set: {
      code: '9706159370001A',
      op_type: 1
    },
    box: [
      {
        waybill: {
          code: 'assd',
          count: 4,
          volume: 2.34,
          weight: 3.56
        },
        code: 'C000T8A7298', // 箱号、箱名 必填 类型：String
        contract_no: '1Y01001806020U', // 合同号  必填  类型：String
        contract_type: '项目', // 项目/分销标识  必填  类型：String
        deliver_finish: 'Y', // 是否齐套发货，所有批次都发货才标记为Y，否则为N   必填  类型：String
        deliver_set: 'HWA02Z02N', // 发运集   必填   类型：String
        batch: 'HWA02Z', // 发货批次   必填   类型：String
        project_name: '华北空管局', // 项目名称   必填   类型：String
        deliver_type: '已预约', // 直发/自提   必填   类型：String
        zf_type: '1', // 直发类型：1：客户，2：总代库房
        deliver_address: 'AAAAAAA', // 发货地址
        deliver_site: '', // 发货口 自提场景使用   类型：String
        site: 'DDDDDDD', // 局点、站点名   必填   类型：String
        create_time: '2019-03-01 12:00:00', // 箱单生成时间 必填 类型：String
        physics: { // 箱子物理信息   必填
          package: '材质', // 包装材料   必填  类型：String
          weight: 2.3, // 毛重（KG） 该箱名对应的重量   必填 类型：float
          volume: 3, // 体积（m^3）该箱名对应的体积   必填 类型：float
          long: 3, // 长   必填 类型：float
          width: 3, // 宽   必填  类型：float
          height: 3.33 // 高   必填  类型：float
        },
        product: [ // 产品物料信息   必填
          {
            item_no: 'aaa', // 华为物料编码   必填 类型：String
            group: 'aa', // 产品族   必填 类型：String
            name: 'aaa', // 产品名称   必填 类型：String
            model: 'aaaa', // 产品型号   必填 类型：String
            description: 'a', // 描述 类型：String
            count: 10, // 物料数量   必填 类型：int
            cost_item: 1, // 是否报价项 用于区分辅料??  必填 类型：String
            sn: []
          }
        ]
      }
    ]
  }
};


// 请求数据错误
exports.errReqBody = {
  timespan: '12123243434',
  guid: '4444444444999',
  doc: {
    order: 'HTMLY2019052800030',
    count: 1,
    box_set: {
      code: '9706159370001A',
      op_type: 1
    },
    box: [
      {
        waybill: {
          code: 'assd',
          count: 4,
          volume: 2.34,
          weight: 3.56
        },
        code: 'C000T8A7298', // 箱号、箱名 必填 类型：String
        contract_no: '1Y01001806020U', // 合同号  必填  类型：String
        contract_type: '项目', // 项目/分销标识  必填  类型：String
        deliver_finish: 'Y', // 是否齐套发货，所有批次都发货才标记为Y，否则为N   必填  类型：String
        deliver_set: 'HWA02Z02N', // 发运集   必填   类型：String
        batch: 'HWA02Z', // 发货批次   必填   类型：String
        project_name: '华北空管局', // 项目名称   必填   类型：String
        deliver_type: '已预约', // 直发/自提   必填   类型：String
        zf_type: '1', // 直发类型：1：客户，2：总代库房
        deliver_address: 'AAAAAAA', // 发货地址
        deliver_site: '石排普洛斯1#', // 发货口 自提场景使用   类型：String
        site: 'DDDDDDD', // 局点、站点名   必填   类型：String
        create_time: '2019-03-01 12:00:00', // 箱单生成时间 必填 类型：String
        physics: { // 箱子物理信息   必填
          package: '材质', // 包装材料   必填  类型：String
          weight: 2.3, // 毛重（KG） 该箱名对应的重量   必填 类型：float
          volume: 3, // 体积（m^3）该箱名对应的体积   必填 类型：float
          long: 3, // 长   必填 类型：float
          width: 3, // 宽   必填  类型：float
          height: 3.33 // 高   必填  类型：float
        },
        product: [ // 产品物料信息   必填
          {
            item_no: 'aaa', // 华为物料编码   必填 类型：String
            group: 'aa', // 产品族   必填 类型：String
            name: 'aaa', // 产品名称   必填 类型：String
            model: 'aaaa', // 产品型号   必填 类型：String
            description: 'a', // 描述 类型：String
            count: 10, // 物料数量   必填 类型：int
            cost_item: 1, // 是否报价项 用于区分辅料??  必填 类型：String
            sn: []
          }
        ]
      }
    ]
  }
};


// 箱子操作标识异常
exports.boxRepeatedReqBody = {
  sign: 'a64009408c95a13c1d84e711905fd32a',
  timespan: '12123243434',
  guid: '4444444444999',
  doc: {
    order: 'HTMLY2019052800030',
    count: 2,
    box_set: {
      code: '9706159370001A',
      op_type: 1
    },
    box: [
      {
        waybill: {
          code: 'assd',
          count: 4,
          volume: 2.34,
          weight: 3.56
        },
        code: 'C000T8A7298', // 箱号、箱名 必填 类型：String
        contract_no: '1Y01001806020U', // 合同号  必填  类型：String
        contract_type: '项目', // 项目/分销标识  必填  类型：String
        deliver_finish: 'Y', // 是否齐套发货，所有批次都发货才标记为Y，否则为N   必填  类型：String
        deliver_set: 'HWA02Z02N', // 发运集   必填   类型：String
        batch: 'HWA02Z', // 发货批次   必填   类型：String
        project_name: '华北空管局', // 项目名称   必填   类型：String
        deliver_type: '已预约', // 直发/自提   必填   类型：String
        zf_type: '2', // 直发类型：1：客户，2：总代库房
        deliver_address: 'AAAAAAA', // 发货地址
        deliver_site: '石排普洛斯1#', // 发货口 自提场景使用   类型：String
        site: 'DDDDDDD', // 局点、站点名   必填   类型：String
        create_time: '2019-03-01 12:00:00', // 箱单生成时间 必填 类型：String
        physics: { // 箱子物理信息   必填
          package: '材质', // 包装材料   必填  类型：String
          weight: 2.3, // 毛重（KG） 该箱名对应的重量   必填 类型：float
          volume: 3, // 体积（m^3）该箱名对应的体积   必填 类型：float
          long: 3, // 长   必填 类型：float
          width: 3, // 宽   必填  类型：float
          height: 3.33 // 高   必填  类型：float
        },
        product: [ // 产品物料信息   必填
          {
            item_no: 'aaa', // 华为物料编码   必填 类型：String
            group: 'aa', // 产品族   必填 类型：String
            name: 'aaa', // 产品名称   必填 类型：String
            model: 'aaaa', // 产品型号   必填 类型：String
            description: 'a', // 描述 类型：String
            count: 10, // 物料数量   必填 类型：int
            cost_item: 1, // 是否报价项 用于区分辅料??  必填 类型：String
            sn: []
          }
        ]
      },
      {
        waybill: {
          code: 'assd',
          count: 4,
          volume: 2.34,
          weight: 3.56
        },
        code: 'C000T8A7298', // 箱号、箱名 必填 类型：String
        contract_no: '1Y01001806020U', // 合同号  必填  类型：String
        contract_type: '项目', // 项目/分销标识  必填  类型：String
        deliver_finish: 'Y', // 是否齐套发货，所有批次都发货才标记为Y，否则为N   必填  类型：String
        deliver_set: 'HWA02Z02N', // 发运集   必填   类型：String
        batch: 'HWA02Z', // 发货批次   必填   类型：String
        project_name: '华北空管局', // 项目名称   必填   类型：String
        deliver_type: '已预约', // 直发/自提   必填   类型：String
        zf_type: '2', // 直发类型：1：客户，2：总代库房
        deliver_address: 'AAAAAAA', // 发货地址
        deliver_site: '石排普洛斯1#', // 发货口 自提场景使用   类型：String
        site: 'DDDDDDD', // 局点、站点名   必填   类型：String
        create_time: '2019-03-01 12:00:00', // 箱单生成时间 必填 类型：String
        physics: { // 箱子物理信息   必填
          package: '材质', // 包装材料   必填  类型：String
          weight: 2.3, // 毛重（KG） 该箱名对应的重量   必填 类型：float
          volume: 3, // 体积（m^3）该箱名对应的体积   必填 类型：float
          long: 3, // 长   必填 类型：float
          width: 3, // 宽   必填  类型：float
          height: 3.33 // 高   必填  类型：float
        },
        product: [ // 产品物料信息   必填
          {
            item_no: 'aaa', // 华为物料编码   必填 类型：String
            group: 'aa', // 产品族   必填 类型：String
            name: 'aaa', // 产品名称   必填 类型：String
            model: 'aaaa', // 产品型号   必填 类型：String
            description: 'a', // 描述 类型：String
            count: 10, // 物料数量   必填 类型：int
            cost_item: 1, // 是否报价项 用于区分辅料??  必填 类型：String
            sn: []
          }
        ]
      }
    ]
  }
};

// waybill运单创建, 正确
exports.waybillReqBody = {
  sign: '820211de813213bb09d39efc93517a6d',
  guid: '1111111111',
  timespan: '1553244478000',
  doc: {
    code: 'ab123456',
    contract_no: 'CON142857',
    deliver_time: '2020-03-05 11:20:08',
    deliver_finish: 'Y',
    volume: 11.11,
    weight: 22.22,
    create_time: '2020-03-05 11:20:08',
    box_set_codes: [
      '154325AFAF',
      '154325AFAG',
      '154325AFAH'
    ]
  }
};


// waybill运单创建, 数据错误
exports.waybillWrongReqBody = {
  sign: '820211de813213bb09d39efc93517a6d',
  guid: '1111111111',
  timespan: '1553244478000',
  doc: {
    contract_no: 'CON142857',
    deliver_time: '2020-03-05 11:20:08',
    deliver_finish: 'N',
    volume: 11.11,
    weight: 22.22,
    create_time: '2020-03-05 11:20:08',
    box_set_codes: [
      '154325AFAF',
      '154325AFAG',
      '154325AFAH'
    ]
  }
};

// 空doc
exports.emptyDocReqBody = {
  sign: 'a64009408c95a13c1d84e711905fd32a',
  timespan: '12123243434',
  guid: '1111111111'
};
