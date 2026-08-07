---
name: I_PRODCMPLNCLABELFLDGROUPTP_2
description: Prodcmplnclabelfldgrouptp 2
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
# I_PRODCMPLNCLABELFLDGROUPTP_2

**Prodcmplnclabelfldgrouptp 2**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-SDS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdCmplncLabelFieldGroupID` | ✓ | |  |  |  |  |
| `ProdCmplncLblFldParentGroupID` |  | |  |  |  |  |
| `ProdCmplncLblFldGrpTechName` |  | |  | `ProdCmplncLblFldGrpDDICStruc` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_LabelFieldVersions` | | ✓ | | | | |
| `_Texts` | | ✓ | | | | |
| `_ParentLabelFieldGroup` | | ✓ | | | | |
| `_ChildrenLabelFieldGroups` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Label Field Group TP'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'LabelFieldGroup_Type'
@ObjectModel: {
  usageType.dataClass: #TRANSACTIONAL,
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #M,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProdComplianceLabelFieldGroup'
define root view entity I_ProdCmplncLabelFldGroupTP_2
  provider contract transactional_interface
  as projection on I_ProdCmplncLabelFieldGroupTP
{
  key ProdCmplncLabelFieldGroupID,
      ProdCmplncLblFldParentGroupID,
      ProdCmplncLblFldGrpDDICStruc as ProdCmplncLblFldGrpTechName,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,
      /* Associations */
      _LabelFieldVersions       : redirected to composition child I_ProdCmplncLblFldVersionTP_2,
      _Texts                    : redirected to composition child I_ProdCmplncLblFldGroupTxtTP_2,

      _ParentLabelFieldGroup    : redirected to I_ProdCmplncLabelFldGroupTP_2,
      _ChildrenLabelFieldGroups : redirected to I_ProdCmplncLabelFldGroupTP_2

}
```
