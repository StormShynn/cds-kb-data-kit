---
name: D_CALCTDNGRSGOODSPOINTSITEMR
description: "D Calctdngrsgoodspointsitemr"
semantic_vi: "Tính điểm cho một mục cụ thể trong một bao bì nguy hiểm, được sử dụng trong thành phần EHS-SUS-DG cho quản lý vật liệu nguy hiểm tại mức mục."
keywords:
  - "dangerous goods"
  - "ehs-sus-dg"
  - "item-level"
  - "calculated points"
  - "enclosure quantity"
  - "sap cds view"
  - "điểm tính toán"
  - "vật liệu nguy hiểm"
  - "ehs-sus"
  - "component:ehs-sus-dg"
  - "lob:other"
semantic_en: "Calculates the points for a specific item in a dangerous goods enclosure, used in EHS-SUS-DG component for item-level dangerous goods management."
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
  - item-level
  - component:EHS-SUS-DG
  - lob:Other
---
# D_CALCTDNGRSGOODSPOINTSITEMR

**D Calctdngrsgoodspointsitemr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdCmplncLogsDocumentItem` |  | |  | `ehfnd_log_doc_posnr` |  |  |
| `Product` |  | |  | `ehfnd_mat_id` |  |  |
| `DngrsGdsCalculatedEnclosureQty` |  | |  | `dngrsgdscalculatedenclosureqty` |  |  |
| `DangerousGoodsEnclosureSapUnit` |  | |  | `ehfnd_vdm_component_unit_sap` |  |  |
| `DangerousGoodsEnclosureISOUnit` |  | |  | `ehfnd_vdm_component_unit_iso` |  |  |
| `D_CalctDngrsGdsPtsItmRglnR` |  | |  | `_ItemRegulation : composition [0..*] of D_CalctDngrsGdsPtsItmRglnR` |  |  |
| `_Document` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Calculate Dngrs Goods Points Item R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define abstract entity D_CalctDngrsGoodsPointsItemR  
{
    ProdCmplncLogsDocumentItem : ehfnd_log_doc_posnr;
    Product : ehfnd_mat_id;
    @Semantics.quantity.unitOfMeasure: 'DangerousGoodsEnclosureSapUnit'
    DngrsGdsCalculatedEnclosureQty : dngrsgdscalculatedenclosureqty;
    DangerousGoodsEnclosureSapUnit : ehfnd_vdm_component_unit_sap;
    DangerousGoodsEnclosureISOUnit : ehfnd_vdm_component_unit_iso;    
    _Document : association to parent D_CalctDangerousGoodsPointsR;
    _ItemRegulation : composition [0..*] of D_CalctDngrsGdsPtsItmRglnR;
}
```
