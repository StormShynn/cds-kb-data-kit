---
name: D_SUPLRQTANCRTEFRMRFQPRCGITMP
description: "D Suplrqtancrtefrmrfqprcgitmp"
semantic_vi: "CDS view D_SUPLRQTANCRTEFRMRFQPRCGITMP hiển thị các tiêu chí chấp nhận đơn giá của nhà cung cấp cho yêu cầu báo giá trong quản lý mua hàng. Nó được sử dụng để quản lý và phân tích đơn giá của nhà cung cấp trong quá trình mua hàng."
keywords:
  - "supplier quote"
  - "đơn giá nhà cung cấp"
  - "request for quotation"
  - "yêu cầu báo giá"
  - "procurement"
  - "quản lý mua hàng"
  - "condition type"
  - "điều kiện loại"
  - "condition rate value"
  - "giá trị điều kiện"
  - "condition currency"
  - "tiền tệ điều kiện"
semantic_en: "The D_SUPLRQTANCRTEFRMRFQPRCGITMP CDS view exposes supplier quote acceptance criteria for a request for quotation in procurement. It is used to manage and analyze supplier quotes during the procurement process."
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRQTANCRTEFRMRFQPRCGITMP

**D Suplrqtancrtefrmrfqprcgitmp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionType` |  | |  | `kscha` |  |  |
| `ConditionRateValue` |  | |  | `kbetr` |  |  |
| `ConditionCurrency` |  | |  | `waers` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Supplr Qtn Cre From RFQ Prcng Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_SuplrQtanCrteFrmRFQPrcgItmP
{
      
      ConditionType      : kscha;
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      ConditionRateValue : kbetr;
      ConditionCurrency  : waers;
//        _DummyAssociation  : association to parent D_SuplrQtanCrteFrmRFQItemP
//         on $projection.DummyKey = _DummyAssociation.DummyKey;
      _DummyAssociation : association to parent D_SuplrQtanCrteFrmRFQItemP;

}
```
