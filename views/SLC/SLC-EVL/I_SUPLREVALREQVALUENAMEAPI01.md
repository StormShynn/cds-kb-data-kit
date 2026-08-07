---
name: I_SUPLREVALREQVALUENAMEAPI01
description: Suplrevalreqvaluenameapi 01
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLREVALREQVALUENAMEAPI01

**Suplrevalreqvaluenameapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SuplrEvalReqValuationNameUUID` | ✓ | |  |  |
| `SuplrEvalReqUUID` |  | |  |  |
| `SuplrEvalReqQuestionValueUUID` |  | |  |  |
| `Language` |  | |  |  |
| `AnswerOptionText` |  | |  |  |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Value Name for Supplier Eval Request'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISEVREQVALNAPI01'
define view I_SuplrEvalReqValueNameAPI01
  as select from I_SupplierEvalReqValueName

{
  key SuplrEvalReqValuationNameUUID,
      SuplrEvalReqUUID,
      SuplrEvalReqQuestionValueUUID,
      Language,
      AnswerOptionText
}
```
