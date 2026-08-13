---
name: D_BLGDCCRTEFRMBILLGDOCREFITMIP
description: "D Blgdccrtefrmbillgdocrefitmip"
semantic_vi: "View D_BLGDCCRTEFRMBILLGDOCREFITMIP hiển thị các tham chiếu cho đơn đặt hàng vật liệu trong thời gian thực cho kế hoạch yêu cầu vật liệu trong bán hàng và phân phối. Nó được sử dụng để lấy tham chiếu cho đơn đặt hàng vật liệu trong kế hoạch yêu cầu vật liệu."
keywords:
  - "sales and distribution"
  - "material requirements planning"
  - "mặt hàng"
  - "đơn đặt hàng vật liệu"
  - "thời gian thực"
  - "sử dụng trong kế hoạch yêu cầu vật liệu"
  - "sử dụng trong bán hàng và phân phối"
  - "ekko"
  - "sap"
semantic_en: "The D_BLGDCCRTEFRMBILLGDOCREFITMIP view exposes billing document item references for real-time material requirements planning in sales and distribution. It is used to retrieve billing document item references for material requirements planning."
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BLGDCCRTEFRMBILLGDOCREFITMIP

**D Blgdccrtefrmbillgdocrefitmip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceBillingDocumentItem` |  | |  | `posnr_vf` |  |  |
| `BillingQuantity` |  | |  | `fkimg` |  |  |
| `BillingQuantityUnit` |  | |  | `vrkme` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Bill Doc Create from Bill Doc Ref Item - Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_BlgDcCrteFrmBillgDocRefItmIP
{
  ReferenceBillingDocumentItem : posnr_vf;
  @Semantics.quantity.unitOfMeasure: 'BillingQuantityUnit'
  BillingQuantity     : fkimg;
  @Semantics.unitOfMeasure: true
  BillingQuantityUnit : vrkme;
  _DummyAssociation   : association to parent D_BillgDocCrteFrmBillgDocRefIP;
}
```
