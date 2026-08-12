---
name: I_CNSLDTNSEGMENTHIERARCHYT
description: "Cnsldtnsegmenthierarchyt"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CNSLDTNSEGMENTHIERARCHYT

**Cnsldtnsegmenthierarchyt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyText` | `Language` |  |  |
| `ConsolidationSegmentHierarchy` | ✓ | |  | `cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_segmenthierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `ConsolidationSegmentHierText` |  | | `_HierarchyText` | `UniversalHierarchyText` |  |  |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnSegmentHierarchy` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCSEGHIERARCHYT',
  compiler.compareFilter: true
  }
@Analytics: {
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations:true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M},
  representativeKey: 'ConsolidationSegmentHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnSegmentHierarchyText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Segment Hierarchy - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnSegmentHierarchyT
  as select from P_CnsldtnUnivHierarchyText_3( P_HierarchyType: 'CS01', P_MasterDataType : 'SEGMENT' ) as _HierarchyText

  association [1..1] to I_CnsldtnSegmentHierarchy as _Hierarchy on  $projection.ConsolidationSegmentHierarchy = _Hierarchy.ConsolidationSegmentHierarchy
                                                                and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate
{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_segmenthierarchy preserving type ) as ConsolidationSegmentHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        _HierarchyText.UniversalHierarchyText                                                     as ConsolidationSegmentHierText,


        _Language,
        _Hierarchy
};
```
