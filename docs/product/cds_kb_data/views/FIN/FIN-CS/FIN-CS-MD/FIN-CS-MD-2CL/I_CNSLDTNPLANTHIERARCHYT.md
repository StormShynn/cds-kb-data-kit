---
name: I_CNSLDTNPLANTHIERARCHYT
description: "Cnsldtnplanthierarchyt"
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
  - plant
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Plant
---
# I_CNSLDTNPLANTHIERARCHYT

**Cnsldtnplanthierarchyt**

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
| `CnsldtnPlantHierarchy` | ✓ | |  | `cast(_HierarchyText.UniversalHierarchy as fincs_planthierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `CnsldtnPlantHierarchyText` |  | |  | `cast(_HierarchyText.UniversalHierarchyText as fincs_planthierarchytext preserving type )` |  |  |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnPlantHierarchy` | [1..1] |

## Source Code

```abap
@Analytics: {
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations:true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  },
  representativeKey: 'CnsldtnPlantHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnPlantHierarchyText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Plant Hierarchy - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnPlantHierarchyT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS31', P_MasterDataType : 'WERKS' ) as _HierarchyText

  association [1..1] to I_CnsldtnPlantHierarchy as _Hierarchy on  $projection.CnsldtnPlantHierarchy = _Hierarchy.CnsldtnPlantHierarchy
                                                              and $projection.ValidityEndDate       = _Hierarchy.ValidityEndDate
{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   cast(_HierarchyText.UniversalHierarchy as fincs_planthierarchy preserving type )          as CnsldtnPlantHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.UniversalHierarchyText as fincs_planthierarchytext  preserving type ) as CnsldtnPlantHierarchyText,


        /* associations */
        _HierarchyText._Language,
        _Hierarchy
}
```
