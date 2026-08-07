---
name: I_CNSLDTNMATERIALGROUPHIERT
description: CNSLDTNMaterial GroupHIERT
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - material
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Material
---
# I_CNSLDTNMATERIALGROUPHIERT

**CNSLDTNMaterial GroupHIERT**

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
| `CnsldtnMaterialGroupHierarchy` | ✓ | |  | `cast( _HierarchyText.UniversalHierarchy as fincs_materialgrouphierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `CnsldtnMaterialGroupHierText` |  | |  | `cast( _HierarchyText.UniversalHierarchyText as fincs_materialgrouphiertext preserving type )` |  |  |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnMaterialGroupHier` | [1..1] |

## Source Code

```abap
@Analytics: {
//  dataCategory: #DIMENSION, // cannot be set for a text view entity
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
  representativeKey: 'CnsldtnMaterialGroupHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnMaterialGroupHierText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Material Group Hierarchy - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnMaterialGroupHierT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS22', P_MasterDataType : 'MATKL_MM' ) as _HierarchyText

  association [1..1] to I_CnsldtnMaterialGroupHier as _Hierarchy on  $projection.CnsldtnMaterialGroupHierarchy = _Hierarchy.CnsldtnMaterialGroupHierarchy
                                                                 and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

{

        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language                                                                      as Language,

  key   cast( _HierarchyText.UniversalHierarchy as fincs_materialgrouphierarchy preserving type )    as CnsldtnMaterialGroupHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast( _HierarchyText.UniversalHierarchyText as fincs_materialgrouphiertext preserving type ) as CnsldtnMaterialGroupHierText,


        /* associations */
        _HierarchyText._Language,
        _Hierarchy
};
```
