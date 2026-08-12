---
name: D_CALCTDANGEROUSGOODSPOINTSR
description: "D Calctdangerousgoodspointsr"
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
# D_CALCTDANGEROUSGOODSPOINTSR

**D Calctdangerousgoodspointsr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdCmplncLogsDocument` |  | |  | `ehfnd_log_doc_number_nc` |  |  |
| `DangerousGoodsEUADRPointText` |  | |  | `dangerousgoodseuadrpointtext` |  |  |
| `DngrsGdsEUADRQtyExmpIsAllowed` |  | |  | `dngrsgdseuadrqtyexmpisallowed` |  |  |
| `DngrsGdsEUADRQtyExmpIsApplbl` |  | |  | `dngrsgdseuadrqtyexmpisapplbl` |  |  |
| `DangerousGoodsRIDPointText` |  | |  | `dangerousgoodsridpointtext` |  |  |
| `DngrsGdsRIDQtyExmpIsAllowed` |  | |  | `dngrsgdsridqtyexmpisallowed` |  |  |
| `DngrsGdsRIDExmpIsApplicable` |  | |  | `dngrsgdsridexmpisapplicable` |  |  |
| `D_CalctDngrsGoodsPointsItemR` |  | |  | `_Item : composition[0..*] of D_CalctDngrsGoodsPointsItemR` |  |  |
| `D_CalctDngrsGdsPtsCategoryR` |  | |  | `_Category : composition[0..*] of D_CalctDngrsGdsPtsCategoryR` |  |  |
| `D_DaGdsClfnClctDaGdsPtsPaInsnR` |  | |  | `_PackingInstruction : composition[0..*] of D_DaGdsClfnClctDaGdsPtsPaInsnR` |  |  |

## Source Code

```abap
@EndUserText.label: 'Calculate Dngrs Goods Points Result'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define root abstract entity D_CalctDangerousGoodsPointsR  
{
    ProdCmplncLogsDocument : ehfnd_log_doc_number_nc;
    DangerousGoodsEUADRPointText : dangerousgoodseuadrpointtext;
    @Semantics.booleanIndicator: true
    DngrsGdsEUADRQtyExmpIsAllowed : dngrsgdseuadrqtyexmpisallowed;
    @Semantics.booleanIndicator: true
    DngrsGdsEUADRQtyExmpIsApplbl : dngrsgdseuadrqtyexmpisapplbl;
    DangerousGoodsRIDPointText : dangerousgoodsridpointtext;
    @Semantics.booleanIndicator: true
    DngrsGdsRIDQtyExmpIsAllowed : dngrsgdsridqtyexmpisallowed;
    @Semantics.booleanIndicator: true
    DngrsGdsRIDExmpIsApplicable : dngrsgdsridexmpisapplicable;
    _Item : composition[0..*] of D_CalctDngrsGoodsPointsItemR;
    _Category : composition[0..*] of D_CalctDngrsGdsPtsCategoryR;
    _PackingInstruction : composition[0..*] of D_DaGdsClfnClctDaGdsPtsPaInsnR;
}
```
