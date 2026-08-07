---
name: I_PRODCMPLNCLBLFLDVERSIONTP_2
description: Prodcmplnclblfldversiontp 2
app_component: EHS-SUS-SDS
software_component: SAPSCORE
release_state: released
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
# I_PRODCMPLNCLBLFLDVERSIONTP_2

**Prodcmplnclblfldversiontp 2**

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
| `ProdCmplncLabelFieldID` |  | |  |  |  |  |
| `ProdCmplncLblFldVersionStatus` |  | |  |  |  |  |
| `ProdCmplncLabelFieldGroupID` |  | |  |  |  |  |
| `ProdCmplncLblFldTechnicalName` |  | |  |  |  |  |
| `ProdCmplncLblFldDataDefinition` |  | |  |  |  |  |
| `ProdCmplncLblFieldCardinality` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `_LabelFieldGroup` | | ✓ | | | | |
| `_Texts` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Label Field Version TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'LabelFieldVersion_Type'
@ObjectModel: {
  usageType.dataClass: #TRANSACTIONAL,
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #M,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProdCmplncLblFldVersionTP_2 
as projection on I_ProdCmplncLblFieldVersionTP {
  key ProdCmplncLabelFieldVersionID,
  ProdCmplncLabelFieldID,
  ProdCmplncLblFldVersionStatus,
  ProdCmplncLabelFieldGroupID,
  ProdCmplncLblFldTechnicalName,
  ProdCmplncLblFldDataDefinition,
  ProdCmplncLblFieldCardinality,
  CreatedByUser,
  CreationDateTime,
  /* Associations */
  _LabelFieldGroup :  redirected to parent I_ProdCmplncLabelFldGroupTP_2,
  _Texts : redirected to composition child I_ProdCmplncLblFldVersTxtTP_2
}
```
