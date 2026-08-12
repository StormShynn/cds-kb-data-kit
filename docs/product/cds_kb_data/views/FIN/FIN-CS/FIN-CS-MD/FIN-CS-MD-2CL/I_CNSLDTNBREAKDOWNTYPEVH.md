---
name: I_CNSLDTNBREAKDOWNTYPEVH
description: "Cnsldtnbreakdowntypevh"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNBREAKDOWNTYPEVH

**Cnsldtnbreakdowntypevh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationBreakdownType` | ✓ | |  |  |  |  |
| `ConsolidationBreakdownTypeText` |  | |  | `cast(_BreakdownType._Text[1: Language=$session.system_language].ConsolidationBreakdownTypeText as fincs_description_text_60 preserving type )` |  |  |
| `DomainValue` |  | | `_BreakdownType` | `DomainValue` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCBRKDWNTYPEVH',
  compiler.compareFilter: true,
  preserveKey: true
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
  semanticKey: ['ConsolidationBreakdownType'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Breakdown Type'

define view I_CnsldtnBreakdownTypeVH
  as select from I_CnsldtnBreakdownType as _BreakdownType

{
      @ObjectModel.text.element: ['ConsolidationBreakdownTypeText']
  key ConsolidationBreakdownType,


      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      cast(_BreakdownType._Text[1: Language=$session.system_language].ConsolidationBreakdownTypeText as fincs_description_text_60 preserving type ) as ConsolidationBreakdownTypeText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      _BreakdownType.DomainValue // required for search
};
```
