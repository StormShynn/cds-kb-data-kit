---
name: I_CNSLDTNPOSTINGLEVELHIERT
description: "Cnsldtnpostinglevelhiert"
app_component: FIN-CS-MD-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyText` | `Language` |  |  |
| `ConsolidationPostgLevelHier` | ✓ | |  | `cast(_HierarchyText.UniversalHierarchy as fincs_postinglevelhierarchy preserving type )` |  |  |
| `ConsolidationPostgLevelHierTxt` |  | |  | `cast(_HierarchyText.UniversalHierarchyText as fincs_postinglevelhiertext preserving type )` |  |  |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

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
