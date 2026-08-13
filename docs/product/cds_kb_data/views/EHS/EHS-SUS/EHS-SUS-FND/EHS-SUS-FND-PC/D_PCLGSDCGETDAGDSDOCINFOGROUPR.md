---
name: D_PCLGSDCGETDAGDSDOCINFOGROUPR
description: "D Pclgsdcgetdagdsdocinfogroupr"
semantic_vi: "Chứa thông tin nhóm hàng hóa nguy hiểm cho mục đích lập hồ sơ, thường được sử dụng khi tạo hồ sơ cho vận chuyển hoặc hoạt động logistics."
keywords:
  - "dangerous goods"
  - "grouping"
  - "documentation"
  - "shipment"
  - "logistics"
  - "ehs"
  - "ehs-sus-fnd-pc"
  - "sap"
  - "cds view"
  - "hàng hóa nguy hiểm"
  - "lập hồ sơ"
  - "vận chuyển"
semantic_en: "Exposes dangerous goods grouping information for documentation purposes, typically used when generating documentation for shipments or logistics operations."
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETDAGDSDOCINFOGROUPR

**D Pclgsdcgetdagdsdocinfogroupr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DangerousGoodsGroupingText` |  | |  | `dangerousgoodsgroupingtext` |  |  |
| `DangerousGoodsGroupingQty` |  | |  | `dangerousgoodsgroupingqty` |  |  |
| `DngrsGdsGroupingQtySAPUnit` |  | |  | `dngrsgdsgroupingqtysapunit` |  |  |
| `DngrsGdsGroupingQtyISOUnit` |  | |  | `dngrsgdsgroupingqtyisounit` |  |  |
| `_Root` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Grouping Information R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define abstract entity D_PCLgsDcGetDaGdsDocInfoGroupR
{
  DangerousGoodsGroupingText : dangerousgoodsgroupingtext; // string e.g. UN 1090 ACETONE,3, II
  @Semantics.quantity.unitOfMeasure: 'DngrsGdsGroupingQtySAPUnit'
  DangerousGoodsGroupingQty  : dangerousgoodsgroupingqty;  // meng15  The Mass or the Volume of a group of Dangerous Goods that are contained on a Transport Order (e.g. 30)
  DngrsGdsGroupingQtySAPUnit : dngrsgdsgroupingqtysapunit; // ehfnd_unit_code_nce SAP Unit of Measurement for Quantity of a group of Dangerous Goods that are contained on a Transport Order. (e.g. L)
  DngrsGdsGroupingQtyISOUnit : dngrsgdsgroupingqtyisounit; // isocd_unit ISO Unit of Measurement for Quantity of a group of Dangerous Goods that are contained on a Transport Order. (e.g. L)

  _Root                      : association to parent D_PCLgsDcGetDngrsGdsDocInfoR;
}
```
