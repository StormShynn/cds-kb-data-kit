---
name: I_CNSLDTNBREAKDOWNTYPE
description: "Cnsldtnbreakdowntype"
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
# I_CNSLDTNBREAKDOWNTYPE

**Cnsldtnbreakdowntype**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationBreakdownType` | ✓ | |  | `cast(_Domain.DomainValue as fincs_breakdowntype )` |  |  |
| `DomainValue` |  | | `_Domain` | `DomainValue` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnBreakdownTypeT` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSBRKDWNTYPE',
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
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S},
  resultSet.sizeCategory: #XS,
  representativeKey: 'ConsolidationBreakdownType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'ConsolidationBreakdownType'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Breakdown Type'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnBreakdownType
  as select from P_CnsldtnDomain(P_DomainName : 'FC_BRKDOWN') as _Domain

  association [0..*] to I_CnsldtnBreakdownTypeT as _Text on $projection.ConsolidationBreakdownType = _Text.ConsolidationBreakdownType
{
      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnBreakdownTypeVH', element: 'ConsolidationBreakdownType' } }]
  key cast(_Domain.DomainValue as fincs_breakdowntype ) as ConsolidationBreakdownType,

      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      _Domain.DomainValue, // required for search


      _Text
};
```
