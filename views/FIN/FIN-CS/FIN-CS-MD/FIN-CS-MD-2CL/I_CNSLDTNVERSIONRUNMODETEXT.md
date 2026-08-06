---
name: I_CNSLDTNVERSIONRUNMODETEXT
description: Cnsldtnversionrunmodetext
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
  - text-view
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNVERSIONRUNMODETEXT

**Cnsldtnversionrunmodetext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast(_DomainT.Language as spras preserving type )` |
| key `CnsldtnVersionRunMode` | `cast(left(_DomainT.DomainValue, 1) as fincs_versionrunmode)` |
| `CnsldtnVersionRunModeText` | `_DomainT.DomainValueText` |
| `DomainValue` | `_DomainT.DomainValue` |
| `_CnsldtnVersionRunMode` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnVersionRunMode` | `I_CnsldtnVersionRunMode` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSVERSRMT',
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
    representativeKey: 'CnsldtnVersionRunMode',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Version Run Mode - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnVersionRunModeText
  as select from P_CnsldtnDomainText(P_DomainName : 'FC_EXEC_MODE') as _DomainT

  association [1..1] to I_CnsldtnVersionRunMode as _CnsldtnVersionRunMode on $projection.CnsldtnVersionRunMode = _CnsldtnVersionRunMode.CnsldtnVersionRunMode

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(_DomainT.Language as spras preserving type )           as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnVersionRunMode'
  key cast(left(_DomainT.DomainValue, 1) as fincs_versionrunmode) as CnsldtnVersionRunMode,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _DomainT.DomainValueText                                    as CnsldtnVersionRunModeText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainT.DomainValue,


      /* associations */
      _Language,
      _CnsldtnVersionRunMode
}
```
