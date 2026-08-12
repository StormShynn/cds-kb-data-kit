---
name: I_CNSLDTNGRANTHIERARCHYNODET
description: "Cnsldtngranthierarchynodet"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGRANTHIERARCHYNODET

**Cnsldtngranthierarchynodet**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyNodeText` | `Language` |  |  |
| `CnsldtnGrantHierarchy` | ✓ | |  | `cast(_HierarchyNodeText.UniversalHierarchy as fincs_granthierarchy preserving type )` |  |  |
| `HierarchyNode` | ✓ | | `_HierarchyNodeText` | `HierarchyNode` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyNodeText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyNodeText` | `ValidityStartDate` |  |  |
| `ParentNode` |  | | `_HierarchyNodeText` | `ParentNode` |  |  |
| `HierarchyVersion` |  | | `_HierarchyNodeText` | `HierarchyVersion` |  |  |
| `HierarchyNodeText` |  | | `_HierarchyNodeText` | `HierarchyNodeText` |  |  |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnGrantHierarchy` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
  },
  dataCategory: #TEXT,
  representativeKey: 'HierarchyNode',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnGrantHierarchyNodeText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Grant Hierarchy Node - Text'

define view entity I_CnsldtnGrantHierarchyNodeT
  as select from P_CnsldtnUnivHierNodeText_3(P_HierarchyType: 'CS26', P_MasterDataType: 'RGRANT_NBR') as _HierarchyNodeText

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join   I_CnsldtnBusinessSwitch                                                              as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_PS_FIELDS'
                                                                                                                         and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'

  association [1..1] to I_CnsldtnGrantHierarchy as _Hierarchy on $projection.CnsldtnGrantHierarchy = _Hierarchy.CnsldtnGrantHierarchy // no validity date condition due to limitation in analytic engine

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _HierarchyNodeText.Language,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(_HierarchyNodeText.UniversalHierarchy as fincs_granthierarchy preserving type ) as CnsldtnGrantHierarchy,

  key _HierarchyNodeText.HierarchyNode,

      @Semantics.businessDate.to: true
  key _HierarchyNodeText.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNodeText.ValidityStartDate,

      _HierarchyNodeText.ParentNode,

      _HierarchyNodeText.HierarchyVersion,

      @Semantics.text: true
      _HierarchyNodeText.HierarchyNodeText,


      /* associations */
      _HierarchyNodeText._Language,
      _Hierarchy
}
```
