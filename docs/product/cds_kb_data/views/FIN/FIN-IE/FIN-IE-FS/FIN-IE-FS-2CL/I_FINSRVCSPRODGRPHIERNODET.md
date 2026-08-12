---
name: I_FINSRVCSPRODGRPHIERNODET
description: "Finsrvcsprodgrphiernodet"
app_component: FIN-IE-FS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-IE
  - FIN-IE-FS
  - interface-view
  - component:FIN-IE-FS-2CL
  - lob:Other
---
# I_FINSRVCSPRODGRPHIERNODET

**Finsrvcsprodgrphiernodet**

| Property | Value |
|---|---|
| App Component | `FIN-IE-FS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinSrvcsProductGroupHierarchy` | ✓ | |  | `cast (HierDirectory.HierarchyShortID as ffs_hryid_product_group preserving type )` |  |  |
| `HierarchyNode` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `HierarchyNodeText` |  | |  |  |  |  |
| `HierarchyNodeShortText` |  | |  | `cast(substring(HierNode.HierarchyNodeText, 1, 20) as ffs_node_short_text preserving type )` |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_FinSrvcsProdGroupHierarchy` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'FS Product Group Hierarchy Node - Text'
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'HierarchyNode',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #MASTER
    },
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE,
                            #SEARCHABLE_ENTITY]
}
@VDM:{
viewType: #COMPOSITE,
lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true

define view entity I_FinSrvcsProdGrpHierNodeT
  as select from                      R_HierRuntimeRprstnNodeText as HierNode
    left outer many to exact one join R_HierRuntimeRepresentation as HierDirectory on  HierNode.HierarchyID     = HierDirectory.HierarchyID
                                                                                   and HierNode.ValidityEndDate = HierDirectory.ValidityEndDate

  association [1..*] to I_FinSrvcsProdGroupHierarchy as _Hierarchy on $projection.FinSrvcsProductGroupHierarchy = _Hierarchy.FinSrvcsProductGroupHierarchy
{
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast (HierDirectory.HierarchyShortID  as ffs_hryid_product_group preserving type )         as FinSrvcsProductGroupHierarchy,
      @ObjectModel.text.element: ['HierarchyNodeText']
  key HierNode.HierarchyNode                                                                     as HierarchyNode,
      @Semantics.businessDate.to: true
  key HierNode.ValidityEndDate                                                                   as ValidityEndDate,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key HierNode.Language                                                                          as Language,
      @Semantics.text: true
      HierNode.HierarchyNodeText                                                                 as HierarchyNodeText,
      @Semantics.text: true
      cast(substring(HierNode.HierarchyNodeText, 1, 20) as ffs_node_short_text preserving type ) as HierarchyNodeShortText,
      @Semantics.businessDate.from: true
      HierNode.ValidityStartDate                                                                 as ValidityStartDate,
      HierNode._Language,
      _Hierarchy
}

where
  HierNode.HierarchyType = 'FFS1'
```
