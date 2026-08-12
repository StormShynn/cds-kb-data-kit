---
name: I_FINWBSELEMENTHIERARCHYNODET
description: "Finwbselementhierarchynodet"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - wbs
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:WBS
---
# I_FINWBSELEMENTHIERARCHYNODET

**Finwbselementhierarchynodet**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementHierarchy` | ✓ | |  |  |  |  |
| `HierarchyNode` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `HierarchyNodeText` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_FinWBSElementHierarchy` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Fin WBS Element Hierarchy Node - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IIWBSHIERNODET'
@Analytics: { dataExtraction.enabled: true }
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name:'FinWBSElementHierarchyNodeText'

define view entity I_FinWBSElementHierarchyNodeT
  as select from R_FinWBSElementHierarchyNodeT

  association [1..1] to I_FinWBSElementHierarchy as _Hierarchy on  $projection.WBSElementHierarchy = _Hierarchy.WBSElementHierarchy
                                                               and $projection.ValidityEndDate     = _Hierarchy.ValidityEndDate
{
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key R_FinWBSElementHierarchyNodeT.WBSElementHierarchy,
  key R_FinWBSElementHierarchyNodeT.HierarchyNode,
      @Semantics.businessDate.to: true
  key R_FinWBSElementHierarchyNodeT.ValidityEndDate,
      @Semantics.language: true
  key R_FinWBSElementHierarchyNodeT.Language,
      @Semantics.text: true
      R_FinWBSElementHierarchyNodeT.HierarchyNodeText,
      @Semantics.businessDate.from: true
      R_FinWBSElementHierarchyNodeT.ValidityStartDate,
      _Hierarchy

}

union all

select from  I_WBSElementStructure
  inner join I_WBSElementBasicData as _WBSElement on I_WBSElementStructure.WBSElementInternalID = _WBSElement.WBSElementInternalID
  cross join I_Language            as _Language
association [1..1] to I_FinWBSElementHierarchy as _Hierarchy on  $projection.WBSElementHierarchy = _Hierarchy.WBSElementHierarchy
                                                             and $projection.ValidityEndDate     = _Hierarchy.ValidityEndDate
{
  key 'WBSELEMENTHIERARCHY                       ' as WBSElementHierarchy,
  key _WBSElement.WBSElement                       as HierarchyNode,
  key '99991231'                                   as ValidityEndDate,
  key _Language.Language                           as Language,
      _WBSElement.WBSDescription                   as HierarchyNodeText,
      '19000101'                                   as ValidityStartDate,

      _Hierarchy
}
where
  I_WBSElementStructure.WBSElementParentInternalID is not null
```
