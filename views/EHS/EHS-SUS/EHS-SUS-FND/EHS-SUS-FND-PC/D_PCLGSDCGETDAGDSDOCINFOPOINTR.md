---
name: D_PCLGSDCGETDAGDSDOCINFOPOINTR
description: D Pclgsdcgetdagdsdocinfopointr
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
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
# D_PCLGSDCGETDAGDSDOCINFOPOINTR

**D Pclgsdcgetdagdsdocinfopointr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ComplianceRequirement` |  | |  | `ehfnd_req_identifier` |  |  |
| `DangerousGoodsTransportCat` |  | |  | `dangerousgoodstransportcat` |  |  |
| `DngrsGdsEnclosureTotalQuantity` |  | |  | `dngrsgdsenclosuretotalquantity` |  |  |
| `DngrsGdsEnclosureQuantityText` |  | |  | `dngrsgdsenclosurequantitytext` |  |  |
| `DangerousGoodsEnclosureSapUnit` |  | |  | `ehfnd_vdm_component_unit_sap` |  |  |
| `DangerousGoodsEnclosureISOUnit` |  | |  | `ehfnd_vdm_component_unit_iso` |  |  |
| `DangerousGoodsQtyFactorText` |  | |  | `dangerousgoodsqtyfactortext` |  |  |
| `DangerousGoodsPointTotalText` |  | |  | `dangerousgoodspointtotaltext` |  |  |
| `DngrsGdsQtyExemptionIsPossible` |  | |  | `dngrsgdsqtyexemptionispossible` |  |  |
| `_Root` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: '1.1.3.6 information R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define abstract entity D_PCLgsDcGetDaGdsDocInfoPointR
{
  ComplianceRequirement          : ehfnd_req_identifier;           // CRID, e.g. RID, ADR
  DangerousGoodsTransportCat     : dangerousgoodstransportcat;     // string e.g. 0, 1, 2, 3, 4 or none
  @Semantics.quantity.unitOfMeasure: 'DangerousGoodsEnclosureSapUnit'
  DngrsGdsEnclosureTotalQuantity : dngrsgdsenclosuretotalquantity; // Volume / Mass as quantity
  DngrsGdsEnclosureQuantityText  : dngrsgdsenclosurequantitytext;  // Volume / Mass as string
  DangerousGoodsEnclosureSapUnit : ehfnd_vdm_component_unit_sap;   // Volume / Mass as SAP unit
  DangerousGoodsEnclosureISOUnit : ehfnd_vdm_component_unit_iso;   // Volume / Mass ISO unit
  DangerousGoodsQtyFactorText    : dangerousgoodsqtyfactortext;    // Multiplication Factor as string
  DangerousGoodsPointTotalText   : dangerousgoodspointtotaltext;   // Points per Category as string
  DngrsGdsQtyExemptionIsPossible : dngrsgdsqtyexemptionispossible; // abap_boolean M1.1.3.6 Exemption Possible

  _Root                          : association to parent D_PCLgsDcGetDngrsGdsDocInfoR;
}
```
