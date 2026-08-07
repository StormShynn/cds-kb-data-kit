---
name: I_CNSLDTNCRCYCNVRSNDIFFTYPET_2
description: "Cnsldtncrcycnvrsndifftypet 2"
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
# I_CNSLDTNCRCYCNVRSNDIFFTYPET_2

**Cnsldtncrcycnvrsndifftypet 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_DomainText.Language as spras preserving type )` |  |  |
| `CurrencyConversionsDiffType` | ✓ | |  | `cast(left(_DomainText.DomainValue, 1) as fincs_currencycnvrsnsdifftype)` |  |  |
| `CurrencyConversionsDiffTypeTxt` |  | | `_DomainText` | `DomainValueText` |  |  |
| `DomainValue` |  | | `_DomainText` | `DomainValue` |  |  |
| `_CrcyCnvrsnDiffType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CrcyCnvrsnDiffType` | `I_CnsldtnCrcyCnvrsnDiffType` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCRTFLGT2',
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
  representativeKey: 'CurrencyConversionsDiffType',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Currency Cnvrsns Difference Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnCrcyCnvrsnDiffTypeT_2
  as select from P_CnsldtnDomainText(P_DomainName : 'FC_RTFLG') as _DomainText

  association [1..1] to I_CnsldtnCrcyCnvrsnDiffType as _CrcyCnvrsnDiffType on $projection.CurrencyConversionsDiffType = _CrcyCnvrsnDiffType.CurrencyConversionsDiffType

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(_DomainText.Language as spras preserving type )                    as Language,

      @ObjectModel.foreignKey.association: '_CrcyCnvrsnDiffType'
  key cast(left(_DomainText.DomainValue, 1) as fincs_currencycnvrsnsdifftype) as CurrencyConversionsDiffType,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      _DomainText.DomainValueText                                             as CurrencyConversionsDiffTypeTxt,

      @Analytics.hidden: true
      @Consumption.hidden: true
      _DomainText.DomainValue                                                 as DomainValue, // required for optimized join definitions


      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _CrcyCnvrsnDiffType,
      _DomainText._Language
};
```
