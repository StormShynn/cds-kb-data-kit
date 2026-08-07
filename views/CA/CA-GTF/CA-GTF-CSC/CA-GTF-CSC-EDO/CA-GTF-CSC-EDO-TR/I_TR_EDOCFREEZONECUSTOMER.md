---
name: I_TR_EDOCFREEZONECUSTOMER
description: TR Edocfreezonecustomer
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
# I_TR_EDOCFREEZONECUSTOMER

**TR Edocfreezonecustomer**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-TR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TR_ElectronicDocumentCustomer` | ✓ | |  |  |  |  |
| `TR_EDocMarkFreeZoneCustomer` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'eDocument Turkey Freezone Customers'
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
define view entity I_TR_EDocFreeZoneCustomer as select from R_TR_EDocFreeZoneCustomer
{
  key TR_ElectronicDocumentCustomer,
  TR_EDocMarkFreeZoneCustomer
}
```
