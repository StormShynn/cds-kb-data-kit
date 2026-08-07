---
name: I_PRODCMPLNCLBLFLDGROUPTXTTP_2
description: Prodcmplnclblfldgrouptxttp 2
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
# I_PRODCMPLNCLBLFLDGROUPTXTTP_2

**Prodcmplnclblfldgrouptxttp 2**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-SDS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProdCmplncLabelFieldGroupID` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `ProdCmplncLabelFieldGroupName` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_LabelFieldGroup` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Label Field Group - Text'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'LabelFieldGroupText_Type'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ObjectModel: {
  usageType.dataClass: #TRANSACTIONAL,
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #M,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProdCmplncLblFldGroupTxtTP_2
  as projection on I_ProdCmplncLblFldGroupTextTP
{
  key ProdCmplncLabelFieldGroupID,
  @Semantics.language: true
  key Language,
  @Semantics.text:true
      ProdCmplncLabelFieldGroupName,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,
      /* Associations */
      _LabelFieldGroup : redirected to parent I_ProdCmplncLabelFldGroupTP_2
}
```
