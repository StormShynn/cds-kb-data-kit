---
name: I_CNSLDTNPOSTINGLEVELHIERT
description: Cnsldtnpostinglevelhiert
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNPOSTINGLEVELHIERT

**Cnsldtnpostinglevelhiert**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyText` | `Language` |
| `ConsolidationPostgLevelHier` | ✓ | |  | `cast(_HierarchyText.UniversalHierarchy as fincs_postinglevelhierarchy preserving type )` |
| `ConsolidationPostgLevelHierTxt` |  | |  | `cast(_HierarchyText.UniversalHierarchyText as fincs_postinglevelhiertext preserving type )` |
| `_Hierarchy` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnPostingLevelHierarchy` | [1..1] |

## Source Code

```abap
@Analytics: {
//  dataCategory: #DIMENSION, // cannot be set for a text view entity
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
  representativeKey: 'ConsolidationPostgLevelHier',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnPostingLevelHierText'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }

@EndUserText.label: 'Cnsldtn Posting Level Hierarchy - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnPostingLevelHierT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS21', P_MasterDataType : 'PLEVL' ) as _HierarchyText


  association [1..1] to I_CnsldtnPostingLevelHierarchy as _Hierarchy on  $projection.ConsolidationPostgLevelHier = _Hierarchy.ConsolidationPostgLevelHier

{
         @Semantics.language
         @ObjectModel.foreignKey.association: '_Language'
  key    _HierarchyText.Language,

  key    cast(_HierarchyText.UniversalHierarchy as fincs_postinglevelhierarchy preserving type  )   as ConsolidationPostgLevelHier,

         @Semantics.text: true
         cast(_HierarchyText.UniversalHierarchyText as fincs_postinglevelhiertext preserving type ) as ConsolidationPostgLevelHierTxt,

         _Language,
         _Hierarchy
};
```
