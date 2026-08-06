---
name: I_CNSLDTNFINANCIALDATASOURCEVH
description: Cnsldtnfinancialdatasourcevh
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
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINANCIALDATASOURCEVH

**Cnsldtnfinancialdatasourcevh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FinancialDataSource` | `_Source.FinancialDataSource` |

## Source Code

```abap
@Analytics: {
  technicalName: 'ICSFINDATASOURCEVH'
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  },
  representativeKey: 'FinancialDataSource',
  semanticKey: ['FinancialDataSource'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Financial Data Source'

define view entity I_CnsldtnFinancialDataSourceVH
  as select from I_CnsldtnFinancialDataSource as _Source

{
      @ObjectModel.text.element: ['FinancialDataSourceName']
  key _Source.FinancialDataSource,

      @Semantics.text
      _Source._Text[1: Language=$session.system_language].FinancialDataSourceName
}
```
