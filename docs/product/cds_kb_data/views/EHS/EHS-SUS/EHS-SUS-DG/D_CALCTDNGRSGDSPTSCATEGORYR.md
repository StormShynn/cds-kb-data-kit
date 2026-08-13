---
name: D_CALCTDNGRSGDSPTSCATEGORYR
description: "D Calctdngrsgdsptscategoryr"
semantic_vi: "Tính toán tổng lượng hàng nguy hiểm cho loại vận chuyển, được sử dụng trong thành phần EHS-SUS-DG cho yêu cầu tuân thủ."
keywords:
  - "dangerous goods"
  - "transport category"
  - "compliance requirement"
  - "ehs-sus-dg"
  - "component"
  - "sap"
  - "lob:other"
  - "ehs"
  - "ehs-sus"
  - "component:ehs-sus-dg"
semantic_en: "Calculates total quantity of dangerous goods for transport category, used in EHS-SUS-DG component for compliance requirements."
app_component: EHS-SUS-DG
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-DG
  - component:EHS-SUS-DG
  - lob:Other
---
# D_CALCTDNGRSGDSPTSCATEGORYR

**D Calctdngrsgdsptscategoryr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ComplianceRequirement` |  | |  | `ehfnd_req_identifier` |  |  |
| `DangerousGoodsTransportCat` |  | |  | `dangerousgoodstransportcat` |  |  |
| `DangerousGoodsQtyFactorText` |  | |  | `dangerousgoodsqtyfactortext` |  |  |
| `DangerousGoodsEnclosureSapUnit` |  | |  | `ehfnd_vdm_component_unit_sap` |  |  |
| `DangerousGoodsEnclosureISOUnit` |  | |  | `ehfnd_vdm_component_unit_iso` |  |  |
| `DngrsGdsEnclosureTotalQuantity` |  | |  | `dngrsgdsenclosuretotalquantity` |  |  |
| `DangerousGoodsPointTotalText` |  | |  | `dangerousgoodspointtotaltext` |  |  |
| `DngrsGdsQtyExemptionStatus` |  | |  | `dngrsgdsqtyexemptionstatus` |  |  |
| `DngrsGdsQtyExemptionStatusName` |  | |  | `dngrsgdsqtyexemptionstatusname` |  |  |
| `_Document` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Calculate Dngrs Gds Pts Category Result'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define abstract entity D_CalctDngrsGdsPtsCategoryR
{
  ComplianceRequirement          : ehfnd_req_identifier;
  DangerousGoodsTransportCat     : dangerousgoodstransportcat;
  DangerousGoodsQtyFactorText    : dangerousgoodsqtyfactortext;
  DangerousGoodsEnclosureSapUnit : ehfnd_vdm_component_unit_sap;
  DangerousGoodsEnclosureISOUnit : ehfnd_vdm_component_unit_iso;
  @Semantics.quantity.unitOfMeasure: 'DangerousGoodsEnclosureSapUnit'
  DngrsGdsEnclosureTotalQuantity : dngrsgdsenclosuretotalquantity;
  DangerousGoodsPointTotalText   : dangerousgoodspointtotaltext;
  DngrsGdsQtyExemptionStatus     : dngrsgdsqtyexemptionstatus;
  DngrsGdsQtyExemptionStatusName : dngrsgdsqtyexemptionstatusname;
  _Document                      : association to parent D_CalctDangerousGoodsPointsR;
}
```
