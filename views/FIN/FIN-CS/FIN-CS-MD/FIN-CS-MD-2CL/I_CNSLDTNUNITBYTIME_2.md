---
name: I_CNSLDTNUNITBYTIME_2
description: Cnsldtnunitbytime 2
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
# I_CNSLDTNUNITBYTIME_2

**Cnsldtnunitbytime 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationUnit` | ✓ | |  | `cast(ConsolidationUnit as fincs_consolidationunit preserving type )` |  |  |
| `FromFiscalYearPeriod` | ✓ | |  | `cast(FromFiscalYearPeriod as fincs_fromfiscalyearperiod)` |  |  |
| `ToFiscalYearPeriod` |  | |  | `cast(ToFiscalYearPeriod as fincs_tofiscalyearperiod)` |  |  |
| `ConsolidationUnitLocalCurrency` |  | |  | `cast(ConsolidationUnitLocalCurrency as fincs_unitlocalcurrency preserving type )` |  |  |
| `Company` |  | |  | `cast(Company as fincs_company preserving type )` |  |  |
| `_Currency` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Currency` | `I_Currency` | [0..1] |
| `_Company` | `I_CnsldtnCompany` | [0..1] |

## Source Code

```abap
@Analytics: {
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICSCONSUNITATD2'
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true,
  allowExtensions: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'ConsolidationUnit',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationUnitByTime'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Unit by Time'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnUnitByTime_2
  as select from P_CnsldtnUnitByTime

  association [0..1] to I_Currency       as _Currency on $projection.ConsolidationUnitLocalCurrency = _Currency.Currency

  association [0..1] to I_CnsldtnCompany as _Company  on $projection.Company = _Company.Company

{
      @ObjectModel:{
        sapObjectNodeTypeReference: 'ConsolidationUnit' }
      @Search:{ defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_CnsldtnUnitVH', element: 'ConsolidationUnit' } }]
  key cast(ConsolidationUnit as fincs_consolidationunit preserving type )              as ConsolidationUnit,

      @Semantics.fiscal.yearPeriod: true
  key cast(FromFiscalYearPeriod as fincs_fromfiscalyearperiod)                         as FromFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
      cast(ToFiscalYearPeriod   as fincs_tofiscalyearperiod)                           as ToFiscalYearPeriod,

      @ObjectModel: {
        foreignKey.association: '_Currency',
        sapObjectNodeTypeReference: 'Currency'
        }
      @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_CurrencyStdVH', element: 'Currency' } }]
      cast(ConsolidationUnitLocalCurrency as fincs_unitlocalcurrency preserving type ) as ConsolidationUnitLocalCurrency,

      @ObjectModel: {
        foreignKey.association: '_Company',
        sapObjectNodeTypeReference: 'Company'
        }
      // 2302: I_GlobalCompany and I_CnsldtnCompany are equivalent. Future: replace by I_CnsldtnCompanyVH
      @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_Globalcompany', element: 'Company' } }]
      cast(Company as fincs_company preserving type )                                  as Company,


      _Currency,
      _Company
}
```
