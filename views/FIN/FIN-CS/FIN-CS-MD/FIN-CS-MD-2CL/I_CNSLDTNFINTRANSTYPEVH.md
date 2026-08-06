---
name: I_CNSLDTNFINTRANSTYPEVH
description: Cnsldtnfintranstypevh
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
# I_CNSLDTNFINTRANSTYPEVH

**Cnsldtnfintranstypevh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FinancialTransactionType` | `FinancialTransactionType` |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFINTRANSTYPVH',
  compiler.compareFilter: true
  }
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'FinancialTransactionType',
  semanticKey: ['FinancialTransactionType'],
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
@EndUserText.label: 'Cnsldtn Cmbnd Fin Transaction Type'

// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view I_CnsldtnFinTransTypeVH
  as select distinct from I_CnsldtnFinTransType as _Source

{

       @ObjectModel.text.element: ['FinancialTransactionTypeName']
  key  FinancialTransactionType,

       @Semantics.text
       _Source._Text[1: Language=$session.system_language].FinancialTransactionTypeName
};
```
