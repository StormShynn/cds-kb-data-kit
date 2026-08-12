---
name: I_FINWBSELEMENTHIERARCHYNODET
description: "Finwbselementhierarchynodet"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
