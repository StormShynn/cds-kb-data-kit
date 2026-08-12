---
name: I_CNSLDTNTASKCATEGORYTEXT
description: "Cnsldtntaskcategorytext"
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
  - text-view
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNTASKCATEGORYTEXT

**Cnsldtntaskcategorytext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_DomainT.Language as spras preserving type )` |  |  |
| `ConsolidationTaskCategory` | ✓ | |  | `cast(left(_DomainT.DomainValue, 2) as fincs_taskcategory preserving type )` |  |  |
| `ConsolidationTaskCategoryText` |  | | `_DomainT` | `DomainValueText` |  |  |
| `DomainValue` |  | | `_DomainT` | `DomainValue` |  |  |
| `_TaskCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TaskCategory` | `I_CnsldtnTaskCategory` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCTASKCATT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #TEXT,
    representativeKey: 'ConsolidationTaskCategory',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Task Category - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnTaskCategoryText
  as select from P_CnsldtnDomainText(P_DomainName : 'FC_CACTT') as _DomainT

  association [1..1] to I_CnsldtnTaskCategory as _TaskCategory on $projection.ConsolidationTaskCategory = _TaskCategory.ConsolidationTaskCategory

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(_DomainT.Language as spras preserving type )                          as Language,

      @ObjectModel.foreignKey.association: '_TaskCategory'
  key cast(left(_DomainT.DomainValue, 2) as fincs_taskcategory preserving type ) as ConsolidationTaskCategory,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      _DomainT.DomainValueText                                                   as ConsolidationTaskCategoryText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainT.DomainValue,


      _TaskCategory,
      _DomainT._Language
};
```
