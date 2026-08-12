---
name: I_CNSLDTNVERSIONTYPETEXT
description: "Cnsldtnversiontypetext"
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
# I_CNSLDTNVERSIONTYPETEXT

**Cnsldtnversiontypetext**

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
| `CnsldtnVersionType` | ✓ | |  | `cast(left(_DomainT.DomainValue, 1) as fincs_cnsldtnversiontype)` |  |  |
| `CnsldtnVersionTypeText` |  | | `_DomainT` | `DomainValueText` |  |  |
| `DomainValue` |  | | `_DomainT` | `DomainValue` |  |  |
| `_CnsldtnVersionType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnVersionType` | `I_CnsldtnVersionType` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSVERSTYPT',
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
    representativeKey: 'CnsldtnVersionType',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Version Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnVersionTypeText
  as select from P_CnsldtnDomainText(P_DomainName : 'FC_EXT_VERSION_TYPE') as _DomainT

  association [1..1] to I_CnsldtnVersionType as _CnsldtnVersionType on $projection.CnsldtnVersionType = _CnsldtnVersionType.CnsldtnVersionType

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(_DomainT.Language as spras preserving type )               as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnVersionType'
  key cast(left(_DomainT.DomainValue, 1) as fincs_cnsldtnversiontype) as CnsldtnVersionType,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _DomainT.DomainValueText                                        as CnsldtnVersionTypeText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainT.DomainValue,


      /* associations */
      _Language,
      _CnsldtnVersionType
}
```
