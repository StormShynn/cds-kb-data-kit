---
name: I_TR_EDOCCUSTOMERSCENARIO
description: TR Edoccustomerscenario
app_component: CA-GTF-CSC-EDO-TR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - customer
  - component:CA-GTF-CSC-EDO-TR
  - lob:Cross-Application Components
  - bo:Customer
---
# I_TR_EDOCCUSTOMERSCENARIO

**TR Edoccustomerscenario**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-TR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TR_ElectronicDocumentCustomer` | `TR_ElectronicDocumentCustomer` |
| `TR_ElectronicDocumentScenario` | `TR_ElectronicDocumentScenario` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'eDocument Turkey Customer Scenarios'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
 @ObjectModel:{
 usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MASTER },
supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET
                           ]
}    
define view entity I_TR_EDocCustomerScenario as select from R_TR_EDocCustomerScenario
{
  key TR_ElectronicDocumentCustomer,
  TR_ElectronicDocumentScenario
}
```
