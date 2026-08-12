---
name: I_FUNDSMGMTFUNCTIONALAREA
description: "Fundsmgmtfunctionalarea"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - interface-view
  - component:PSM
  - lob:Other
---
# I_FUNDSMGMTFUNCTIONALAREA

**Fundsmgmtfunctionalarea**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalArea` | ✓ | |  | `fkber` |  |  |
| `FunctionalAreaAuthznGrp` |  | |  | `authgrp` |  |  |
| `CreatedByUser` |  | |  | `cast( created_by as fmis_farea_createdbyuser preserving type )` |  |  |
| `CreationDate` |  | |  | `cast( created_on as fmis_farea_creationdate preserving type )` |  |  |
| `CreationTime` |  | |  | `cast( created_at as fmis_farea_creationtime preserving type )` |  |  |
| `LastChangedByUser` |  | |  | `cast( modified_by as fmis_farea_lastchangedbyuser preserving type )` |  |  |
| `LastChangeDate` |  | |  | `cast( modified_on as fmis_farea_lastchangedate preserving type )` |  |  |
| `LastChangeTime` |  | |  | `cast( modified_at as fmis_farea_lastchangetime preserving type )` |  |  |
| `ValidityStartDate` |  | |  | `cast( datab as fmis_farea_validitystartdate preserving type )` |  |  |
| `ValidityEndDate` |  | |  | `cast( datbis as fmis_farea_validityenddate preserving type )` |  |  |
| `ExpirationDate` |  | |  | `cast( date_exp as fmis_farea_expirationdate preserving type )` |  |  |
| `FunctionalAreaSubdivisionID` |  | |  | `str_id` |  |  |
| `FunctionalArea1Subdivision` |  | |  | `fnsub1` |  |  |
| `FunctionalArea2Subdivision` |  | |  | `fnsub2` |  |  |
| `FunctionalArea3Subdivision` |  | |  | `fnsub3` |  |  |
| `_FunctionalArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_FunctionalAreaSubdivisionID` | | ✓ | | | | |
| `_FuncArea1Subdivision` | | ✓ | | | | |
| `_FuncArea2Subdivision` | | ✓ | | | | |
| `_FuncArea3Subdivision` | | ✓ | | | | |
| `_FunctionalAreaHierNode` | | ✓ | | | | |
| `_BusinessFeatureState` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_FndsMgmtFunctionalArea` | [1..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [1..1] |
| `_Text` | `I_FunctionalAreaText` | [0..*] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_FunctionalAreaSubdivisionID` | `I_FuncAreaSubdivisionBasic` | [0..1] |
| `_FuncArea1Subdivision` | `I_FuncArea1Subdivision` | [0..1] |
| `_FuncArea2Subdivision` | `I_FuncArea2Subdivision` | [0..1] |
| `_FuncArea3Subdivision` | `I_FuncArea3Subdivision` | [0..1] |
| `_FunctionalAreaHierNode` | `I_FunctionalAreaHierNode` | [0..*] |
| `_BusinessFeatureState` | `I_BusinessFeatureState` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Funds Management Functional Area'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true, internalName: #LOCAL }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@ObjectModel.representativeKey: 'FunctionalArea'
@ObjectModel: {
  usageType: {
      dataClass: #MASTER,
      serviceQuality: #A,
      sizeCategory: #L
    },
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ]
}
@ObjectModel.sapObjectNodeType.name: 'FunctionalArea'
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AbapCatalog.sqlViewName: 'IFMFUNCAREA'
//@AbapCatalog.preserveKey: true
define view I_FundsMgmtFunctionalArea
  as select from tfkb

  association [1..1] to E_FndsMgmtFunctionalArea   as _Extension //do not expose this association in the projection list of the view
                                                                                   on  $projection.FunctionalArea = _Extension.FunctionalArea

  association [1..1] to I_FunctionalArea           as _FunctionalArea              on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..*] to I_FunctionalAreaText       as _Text                        on  $projection.FunctionalArea = _Text.FunctionalArea
  association [0..1] to I_User                     as _CreatedByUser               on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                     as _LastChangedByUser           on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_FuncAreaSubdivisionBasic as _FunctionalAreaSubdivisionID on  $projection.FunctionalAreaSubdivisionID = _FunctionalAreaSubdivisionID.FunctionalAreaSubdivisionID
  association [0..1] to I_FuncArea1Subdivision     as _FuncArea1Subdivision        on  $projection.FunctionalAreaSubdivisionID = _FuncArea1Subdivision.FunctionalAreaSubdivisionID
                                                                                   and $projection.FunctionalArea1Subdivision  = _FuncArea1Subdivision.FunctionalArea1Subdivision
  association [0..1] to I_FuncArea2Subdivision     as _FuncArea2Subdivision        on  $projection.FunctionalAreaSubdivisionID = _FuncArea2Subdivision.FunctionalAreaSubdivisionID
                                                                                   and $projection.FunctionalArea2Subdivision  = _FuncArea2Subdivision.FunctionalArea2Subdivision
  association [0..1] to I_FuncArea3Subdivision     as _FuncArea3Subdivision        on  $projection.FunctionalAreaSubdivisionID = _FuncArea3Subdivision.FunctionalAreaSubdivisionID
                                                                                   and $projection.FunctionalArea3Subdivision  = _FuncArea3Subdivision.FunctionalArea3Subdivision
  association [0..*] to I_FunctionalAreaHierNode   as _FunctionalAreaHierNode      on  $projection.FunctionalArea = _FunctionalAreaHierNode.FunctionalArea
  association [0..1] to I_BusinessFeatureState     as _BusinessFeatureState        on  _BusinessFeatureState.BusinessFeatureID    = 'PSM_BUDGET_ACCOUNTING_CONTROL'
                                                                                   and _BusinessFeatureState.BusinessFeatureState = '3'
{
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_FunctionalAreaHierNode'
  key fkber                                                               as FunctionalArea,
      @EndUserText.label: 'Functional Area  Authorization Group'
      authgrp                                                             as FunctionalAreaAuthznGrp,
      @Semantics.user.createdBy: true
      @Consumption.valueHelpDefinition: { entity: { name: 'I_BusinessUserVH', element: 'UserID' } }
      //@ObjectModel.text.element: ['CreatedByUserDescription']
      cast( created_by as fmis_farea_createdbyuser preserving type )      as CreatedByUser,
      //@Semantics.text: true
      //_CreatedByUser.UserDescription                                         as CreatedByUserDescription,
      @Semantics.systemDate.createdAt: true
      cast( created_on  as fmis_farea_creationdate preserving type )      as CreationDate,
      //@Semantics.time: true
      cast( created_at as fmis_farea_creationtime preserving type )       as CreationTime,
      @Semantics.user.lastChangedBy: true
      @Consumption.valueHelpDefinition: { entity: { name: 'I_BusinessUserVH', element: 'UserID' } }
      //@ObjectModel.text.element: ['LastChangedByUserDescription']
      cast( modified_by as fmis_farea_lastchangedbyuser preserving type ) as LastChangedByUser,
      //@Semantics.text: true
      //_LastChangedByUser.UserDescription                                     as LastChangedByUserDescription,
      @Semantics.systemDate.lastChangedAt: true
      cast( modified_on  as fmis_farea_lastchangedate preserving type )   as LastChangeDate,
      //@Semantics.time: true
      cast( modified_at as fmis_farea_lastchangetime preserving type )    as LastChangeTime,
      @Semantics.businessDate.from: true
      cast( datab as fmis_farea_validitystartdate preserving type )       as ValidityStartDate,
      @Semantics.businessDate.to: true
      cast( datbis as fmis_farea_validityenddate preserving type )        as ValidityEndDate,
      cast( date_exp as fmis_farea_expirationdate preserving type )       as ExpirationDate,
      @ObjectModel.foreignKey.association: '_FunctionalAreaSubdivisionID'
      @Consumption.valueHelpDefinition: [ {
          entity: { name: 'I_FuncAreaSubdivisionIDStdVH', element: 'FunctionalAreaSubdivisionID' } } ]
      str_id                                                              as FunctionalAreaSubdivisionID,
      @ObjectModel.foreignKey.association: '_FuncArea1Subdivision'
      @Consumption.valueHelpDefinition: [ {
          entity: { name: 'I_FuncArea1SubdivisionStdVH', element: 'FunctionalArea1Subdivision' },
          additionalBinding: { element: 'FunctionalAreaSubdivisionID', localElement: 'FunctionalAreaSubdivisionID' } } ]
      fnsub1                                                              as FunctionalArea1Subdivision,
      @ObjectModel.foreignKey.association: '_FuncArea2Subdivision'
      @Consumption.valueHelpDefinition: [ {
          entity: { name: 'I_FuncArea2SubdivisionStdVH', element: 'FunctionalArea2Subdivision' },
          additionalBinding: { element: 'FunctionalAreaSubdivisionID', localElement: 'FunctionalAreaSubdivisionID' } } ]
      fnsub2                                                              as FunctionalArea2Subdivision,
      @ObjectModel.foreignKey.association: '_FuncArea3Subdivision'
      @Consumption.valueHelpDefinition: [ {
          entity: { name: 'I_FuncArea3SubdivisionStdVH', element: 'FunctionalArea3Subdivision' },
          additionalBinding: { element: 'FunctionalAreaSubdivisionID', localElement: 'FunctionalAreaSubdivisionID' } } ]
      fnsub3                                                              as FunctionalArea3Subdivision,

      _FunctionalArea,
      _Text,
      _CreatedByUser,
      _LastChangedByUser,
      _FunctionalAreaSubdivisionID,
      _FuncArea1Subdivision,
      _FuncArea2Subdivision,
      _FuncArea3Subdivision,
      _FunctionalAreaHierNode,
      _BusinessFeatureState
}
```
