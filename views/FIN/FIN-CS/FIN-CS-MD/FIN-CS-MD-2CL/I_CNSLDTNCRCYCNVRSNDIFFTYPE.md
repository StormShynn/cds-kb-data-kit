---
name: I_CNSLDTNCRCYCNVRSNDIFFTYPE
description: Cnsldtncrcycnvrsndifftype
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
# I_CNSLDTNCRCYCNVRSNDIFFTYPE

**Cnsldtncrcycnvrsndifftype**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CurrencyConversionsDiffType` | `cast(left(_Domain.DomainValue, 1) as fincs_currencycnvrsnsdifftype)` |
| `DomainValue` | `_Domain.DomainValue` |
| `_Text` | *Association* |
| `_Text_2` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnCrcyCnvrsnDiffTypeT` | [0..*] |
| `_Text_2` | `I_CnsldtnCrcyCnvrsnDiffTypeT_2` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCRTFLG',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S},
    resultSet.sizeCategory: #XS,
  representativeKey: 'CurrencyConversionsDiffType',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnCrcyConversionDiffType'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Currency Conversion Difference Type'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnCrcyCnvrsnDiffType
  as select from P_CnsldtnDomain(P_DomainName : 'FC_RTFLG') as _Domain

  association [0..*] to I_CnsldtnCrcyCnvrsnDiffTypeT   as _Text   on $projection.CurrencyConversionsDiffType = _Text.CurrencyConversionsDiffType

  association [0..*] to I_CnsldtnCrcyCnvrsnDiffTypeT_2 as _Text_2 on $projection.CurrencyConversionsDiffType = _Text_2.CurrencyConversionsDiffType

{
      @ObjectModel.text.association: '_Text_2'
  key cast(left(_Domain.DomainValue, 1) as fincs_currencycnvrsnsdifftype) as CurrencyConversionsDiffType,

      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      _Domain.DomainValue                                                 as DomainValue, // required for search


      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element: {releaseState: #DEPRECATED, successor: '_Text_2'}
      _Text,
      _Text_2
};
```
