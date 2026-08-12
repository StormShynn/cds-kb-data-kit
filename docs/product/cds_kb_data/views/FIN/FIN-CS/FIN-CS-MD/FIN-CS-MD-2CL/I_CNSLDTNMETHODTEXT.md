---
name: I_CNSLDTNMETHODTEXT
description: "Cnsldtnmethodtext"
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
# I_CNSLDTNMETHODTEXT

**Cnsldtnmethodtext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_Text.langu as fincs_language preserving type )` |  |  |
| `ConsolidationMethod` | ✓ | |  | `cast(_Text.cmeth as fincs_method preserving type )` |  |  |
| `ConsolidationMethodText` |  | |  | `cast (_Text.txt as fincs_methodtext preserving type)` |  |  |
| `ConsolidationTaskCategory` |  | |  | `cast( _tf550.cactt as fincs_taskcategory preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_Method` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Method` | `I_CnsldtnMethod` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSMETHODTEXT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #M},
  representativeKey: 'ConsolidationMethod',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Method - Text'

define view I_CnsldtnMethodText
  as select from tf551 as _Text

    inner join   tf550 as _tf550 on _Text.dimen = _tf550.dimen
                                and _Text.cmeth = _tf550.cmeth

  association [1..1] to I_Language      as _Language on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnMethod as _Method   on $projection.ConsolidationMethod = _Method.ConsolidationMethod
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(_Text.langu as fincs_language preserving type )       as Language,

      @ObjectModel.foreignKey.association: '_Method'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnMethodVH',
                                                     element: 'ConsolidationMethod' } }]
  key cast(_Text.cmeth as fincs_method preserving type )         as ConsolidationMethod,

      @Semantics.text
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      cast (_Text.txt as fincs_methodtext preserving type)       as ConsolidationMethodText,

      @Analytics.hidden: true
      @Consumption.hidden: true
      cast( _tf550.cactt as fincs_taskcategory preserving type ) as ConsolidationTaskCategory,

      _Language,
      _Method
}
where
  _Text.dimen = 'Y1';
```
