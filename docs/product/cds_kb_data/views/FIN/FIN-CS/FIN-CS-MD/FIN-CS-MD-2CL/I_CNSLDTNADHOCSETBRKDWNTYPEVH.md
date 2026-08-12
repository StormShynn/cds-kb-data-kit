---
name: I_CNSLDTNADHOCSETBRKDWNTYPEVH
description: "Cnsldtnadhocsetbrkdwntypevh"
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
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNADHOCSETBRKDWNTYPEVH

**Cnsldtnadhocsetbrkdwntypevh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnAdhocSetBrkdwnType` | ✓ | |  |  |  |  |
| `CnsldtnAdhocSetBrkdwnTypeText` |  | |  | `cast(_Text[1: Language=$session.system_language].CnsldtnAdhocSetBrkdwnTypeText as fincs_description_text_60 preserving type )` |  |  |
| `DomainValue` |  | | `_AdhocSetBrkdwnType` | `DomainValue` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSADHSETBDTYPVH',
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
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S},
  resultSet.sizeCategory: #XS,
  representativeKey: 'CnsldtnAdhocSetBrkdwnType',
  semanticKey: ['CnsldtnAdhocSetBrkdwnType'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Ad Hoc Set Breakdown Type'

define view I_CnsldtnAdhocSetBrkdwnTypeVH
  as select from I_CnsldtnAdhocSetBrkdwnType as _AdhocSetBrkdwnType

{
      @ObjectModel.text.element: ['CnsldtnAdhocSetBrkdwnTypeText']
  key CnsldtnAdhocSetBrkdwnType,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      cast(_Text[1: Language=$session.system_language].CnsldtnAdhocSetBrkdwnTypeText as fincs_description_text_60 preserving type ) as CnsldtnAdhocSetBrkdwnTypeText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      _AdhocSetBrkdwnType.DomainValue // required for search
}
```
