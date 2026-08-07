---
name: I_CNSLDTNUNITTEXTTP
description: Cnsldtnunittexttp
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
  - transactional-processing
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITTEXTTP

**Cnsldtnunittexttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `Language` |
| `ConsolidationUnit` | ✓ | |  | `cast ( _Source.ConsolidationUnit as fincs_consolidationunit preserving type )` |
| `ConsolidationUnitText` |  | |  | `cast ( _Source.ConsolidationUnitText as fincs_consolidationunittext preserving type )` |
| `ConsolidationUnitMdmText` |  | | `_Source` | `ConsolidationUnitMdmText` |
| `ConsolidationUnitLongText` |  | |  | `cast ( _Source.ConsolidationUnitLongText as fincs_consunitlongtext preserving type )` |
| `I_CnsldtnUnitTP` |  | |  | `_CnsldtnUnit as _CnsldtnUnit : redirected to parent I_CnsldtnUnitTP` |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: [
    'Language',
    'ConsolidationUnit'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Search.searchable: true
@EndUserText.label: 'Consolidation Unit - Text TP'
define view entity I_CnsldtnUnitTextTP
  as projection on R_CnsldtnUnitTextTP as _Source
{
      @Semantics.language
  key _Source.Language,

  key cast ( _Source.ConsolidationUnit as fincs_consolidationunit preserving type )         as ConsolidationUnit,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      cast ( _Source.ConsolidationUnitText as fincs_consolidationunittext preserving type ) as ConsolidationUnitText,

      @Semantics.text
      _Source.ConsolidationUnitMdmText,

      @Semantics.text
      cast ( _Source.ConsolidationUnitLongText as fincs_consunitlongtext preserving type )  as ConsolidationUnitLongText,


      /* associations for transactional processing */
      _CnsldtnUnit                                                                          as _CnsldtnUnit : redirected to parent I_CnsldtnUnitTP
}
```
