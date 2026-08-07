---
name: I_FUNCNLLOCWARRANTYASSGMTTP
description: Funcnllocwarrantyassgmttp
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - transactional-processing
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_FUNCNLLOCWARRANTYASSGMTTP

**Funcnllocwarrantyassgmttp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalLocation` | ✓ | |  |  |  |  |
| `WarrantyType` | ✓ | |  |  |  |  |
| `FunctionalLocationLabelName` |  | |  |  |  |  |
| `MasterWarranty` |  | |  |  |  |  |
| `WarrantyStartDate` |  | |  |  |  |  |
| `WarrantyEndDate` |  | |  |  |  |  |
| `WrntyIsInhtdFromSuperiorObject` |  | |  |  |  |  |
| `WrntyIsPassedOnToChildObject` |  | |  |  |  |  |
| `_FunctionalLocation` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'FL warranty assignment - TP'
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #MASTER
   },
   semanticKey: ['FunctionalLocation']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Metadata.ignorePropagatedAnnotations:true

define view entity I_FuncnlLocWarrantyAssgmtTP as projection on R_FuncnlLocWrntyAssgmtTP as _FuncnlLocWrntyAssgmtTP
{
  key FunctionalLocation,
  key WarrantyType,
      FunctionalLocationLabelName,
      MasterWarranty,
      WarrantyStartDate,
      WarrantyEndDate,
      @Semantics.booleanIndicator: true
      WrntyIsInhtdFromSuperiorObject,
      @Semantics.booleanIndicator: true
      WrntyIsPassedOnToChildObject,
      
      _FunctionalLocation: redirected to parent I_FunctionalLocationTP

}
```
