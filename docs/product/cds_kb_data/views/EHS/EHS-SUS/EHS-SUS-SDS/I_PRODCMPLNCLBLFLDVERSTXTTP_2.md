---
name: I_PRODCMPLNCLBLFLDVERSTXTTP_2
description: "Prodcmplnclblfldverstxttp 2"
app_component: EHS-SUS-SDS
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-SDS
  - interface-view
  - transactional-processing
  - component:EHS-SUS-SDS
  - lob:Other
---
# I_PRODCMPLNCLBLFLDVERSTXTTP_2

**Prodcmplnclblfldverstxttp 2**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-SDS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdCmplncLabelFieldVersionID` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ProdCmplncLabelFieldName` |  | |  |  |  |  |
| `ProdCmplncLabelFieldGroupID` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_LabelFieldGroup` | | ✓ | | | | |
| `_LabelFieldVersion` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Label Field Version - Text'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'LabelFieldVersionText_Type'
@ObjectModel.dataCategory: #TEXT
@ObjectModel: {
  usageType.dataClass: #TRANSACTIONAL,
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #M,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProdCmplncLblFldVersTxtTP_2 
as projection on I_ProdCmplncLblFldVersionTxtTP
  {
  key ProdCmplncLabelFieldVersionID,
  @Semantics.language: true
  key Language,
  @Semantics.text:true
  ProdCmplncLabelFieldName,
  ProdCmplncLabelFieldGroupID,
  CreatedByUser,
  CreationDateTime,
  LastChangedByUser,
  LastChangeDateTime,
  /* Associations */ 
  _LabelFieldGroup : redirected to I_ProdCmplncLabelFldGroupTP_2,
  _LabelFieldVersion :redirected to parent I_ProdCmplncLblFldVersionTP_2
}
```
