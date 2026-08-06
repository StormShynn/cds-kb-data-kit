---
name: I_SRVCQTANITEMUSERSTATUSTP
description: Srvcqtanitemuserstatustp
app_component: CRM-S4-SRV-SVQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - status
  - item-level
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SRVCQTANITEMUSERSTATUSTP

**Srvcqtanitemuserstatustp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceQuotation` | `ServiceQuotation` |
| key `ServiceQuotationItem` | `ServiceQuotationItem` |
| key `UserStatus` | `UserStatus` |
| `StatusProfile` | `StatusProfile` |
| `_StatusCode` | *Association* |
| `_StatusProfile` | *Association* |
| `_ServiceQuotationTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Quotation Item User Status - TP'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL},
   // modelingPattern:        #TRANSACTIONAL_INTERFACE, //User Status feature is not enabled yet,parent linkage has been removed. Hence modelingPattern is commented inorder to solve the error Modeling pattern '#TRANSACTIONAL_INTERFACE' does not match CDS provider contract ''
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]  
}
define view entity I_SrvcQtanItemUserStatusTP
  as projection on R_SrvcQtanItemUserStatusTP
{
  key ServiceQuotation,
  key ServiceQuotationItem,
      @ObjectModel.foreignKey.association: '_StatusCode'
  key UserStatus,
      @ObjectModel.foreignKey.association: '_StatusProfile'
      StatusProfile,

      /* Associations */
      _StatusCode,
      _StatusProfile,
      
    //_ServiceQuotationItemTP : redirected to parent I_ServiceQuotationItemTP, // "User Status feature is not enabled yet. Hence inorder to solve ATC, removing the linkage
      _ServiceQuotationTP     : redirected to I_ServiceQuotationTP
}
```
