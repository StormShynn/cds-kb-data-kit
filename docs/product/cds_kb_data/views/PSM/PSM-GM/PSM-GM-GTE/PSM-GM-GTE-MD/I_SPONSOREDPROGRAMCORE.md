---
name: I_SPONSOREDPROGRAMCORE
description: "Sponsoredprogramcore"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SPONSOREDPROGRAMCORE

**Sponsoredprogramcore**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredProgram` | ✓ | |  | `sponsored_prog` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `CreationDate` |  | |  | `created_on` |  |  |
| `LastChangedByUser` |  | |  | `modified_by` |  |  |
| `LastChangeDate` |  | |  | `modified_on` |  |  |
| `SponsoredProgramAuthznGrp` |  | |  | `auth_group` |  |  |
| `_SponsoredProgHierarchyNode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SponsoredProgHierarchyNode` | `I_SponsoredProgHierarchyNode` | [0..*] |
| `_Text` | `I_SponsoredProgramTextCore` | [0..*] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_Extension` | `E_SponsoredProgramCore` | [1..1] |

## Source Code

```abap
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations:['_SponsoredProgHierarchyNode','_CreatedByUser','_LastChangedByUser']
@ObjectModel.representativeKey: 'SponsoredProgram'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #C,
  sizeCategory: #L
}
@ObjectModel.sapObjectNodeType.name: 'SponsoredProgram'
@Metadata.allowExtensions:true
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@Analytics.internalName:#LOCAL
@AbapCatalog.sqlViewName: 'IGMSPPROGCL'
@EndUserText.label: 'Sponsored Program'
define view I_SponsoredProgramCore
  as select from gmspprogram

  association [0..*] to I_SponsoredProgHierarchyNode as _SponsoredProgHierarchyNode on $projection.SponsoredProgram = _SponsoredProgHierarchyNode.SponsoredProgram

  association [0..*] to I_SponsoredProgramTextCore   as _Text                       on $projection.SponsoredProgram = _Text.SponsoredProgram

  association [0..1] to I_User                       as _CreatedByUser              on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                       as _LastChangedByUser          on $projection.LastChangedByUser = _LastChangedByUser.UserID

  association [1..1] to E_SponsoredProgramCore       as _Extension //do not expose this association in the projection list of the view
                                                                                    on $projection.SponsoredProgram = _Extension.SponsoredProgram
{
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_SponsoredProgHierarchyNode'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key sponsored_prog as SponsoredProgram,

      created_by     as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      created_on     as CreationDate,
      modified_by    as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      modified_on    as LastChangeDate,

      auth_group     as SponsoredProgramAuthznGrp,
      _Text,
      _SponsoredProgHierarchyNode,
      _CreatedByUser,
      _LastChangedByUser
}
```
