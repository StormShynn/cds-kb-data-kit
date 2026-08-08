---
name: I_SPONSOREDCLASSCORE
description: "Sponsoredclasscore"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-GM
  - PSM-GM-GTE
  - interface-view
  - component:PSM-GM-GTE-MD
  - lob:Other
---
# I_SPONSOREDCLASSCORE

**Sponsoredclasscore**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredClass` | ✓ | |  | `sponsored_class` |  |  |
| `SponsoredClassType` |  | |  | `class_type` |  |  |
| `SponsoredClassIsBillable` |  | |  | `cast(flg_billable as gm_flg_billable_ce preserving type )` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `CreationDate` |  | |  | `created_on` |  |  |
| `LastChangedByUser` |  | |  | `modified_by` |  |  |
| `LastChangeDate` |  | |  | `modified_on` |  |  |
| `SponsoredClassAuthznGrp` |  | |  | `auth_group` |  |  |
| `GteeMBdgtAcctForSpnsrdCl` |  | |  | `account_for_budget` |  |  |
| `_Type` | | ✓ | | | | |
| `_SponsoredClassHierarchyNode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Type` | `I_SponsoredClassTypeCore` | [1..1] |
| `_SponsoredClassHierarchyNode` | `I_SponsoredClassHierarchyNode` | [0..*] |
| `_Text` | `I_SponsoredClassCoreText` | [0..*] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_Extension` | `E_SponsoredClassCore` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Sponsored Class'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations:['_SponsoredClassHierarchyNode','_CreatedByUser','_LastChangedByUser']
@ObjectModel.representativeKey: 'SponsoredClass'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #C,
  sizeCategory: #L
}
@ObjectModel.sapObjectNodeType.name: 'SponsoredClass'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Metadata.allowExtensions:true
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IGMSPCLASSCL'
@Analytics.internalName:#LOCAL
define view I_SponsoredClassCore

  as select from gmspclass

  association [1..1] to I_SponsoredClassTypeCore      as _Type                        on $projection.SponsoredClassType = _Type.SponsoredClassType

  association [0..*] to I_SponsoredClassHierarchyNode as _SponsoredClassHierarchyNode on $projection.SponsoredClass = _SponsoredClassHierarchyNode.SponsoredClass

  association [0..*] to I_SponsoredClassCoreText      as _Text                        on $projection.SponsoredClass = _Text.SponsoredClass

  association [0..1] to I_User                        as _CreatedByUser               on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                        as _LastChangedByUser           on $projection.LastChangedByUser = _LastChangedByUser.UserID

  association [1..1] to E_SponsoredClassCore          as _Extension //do not expose this association in the projection list of the view
                                                                                      on $projection.SponsoredClass = _Extension.SponsoredClass
{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_SponsoredClassHierarchyNode'
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
  key sponsored_class                                           as SponsoredClass,
      @ObjectModel.foreignKey.association: '_Type'
      class_type                                                as SponsoredClassType,
      cast(flg_billable as gm_flg_billable_ce preserving type ) as SponsoredClassIsBillable,
      created_by                                                as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      created_on                                                as CreationDate,
      modified_by                                               as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      modified_on                                               as LastChangeDate,

      auth_group                                                as SponsoredClassAuthznGrp,

      account_for_budget                                        as GteeMBdgtAcctForSpnsrdCl,

      _Type,
      _Text,
      _SponsoredClassHierarchyNode,
      _CreatedByUser,
      _LastChangedByUser

}
```
