---
name: I_SALESORDERPARTNERTP
description: Sales OrderPARTNERTP
app_component: SD-SLS-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-API
  - interface-view
  - transactional-processing
  - sales-order
  - partner
  - component:SD-SLS-API-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERPARTNERTP

**Sales OrderPARTNERTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrder` | `SalesOrderPartner.SalesOrder` |
| key `PartnerFunction` | `SalesOrderPartner.PartnerFunction` |
| `PartnerFunctionForEdit` | `SalesOrderPartner.PartnerFunctionForEdit` |
| `Customer` | `SalesOrderPartner.Customer` |
| `Supplier` | `SalesOrderPartner.Supplier` |
| `Personnel` | `SalesOrderPartner.Personnel` |
| `ContactPerson` | `SalesOrderPartner.ContactPerson` |
| `ReferenceBusinessPartner` | `SalesOrderPartner.ReferenceBusinessPartner` |
| `Partner` | `SalesOrderPartner.Partner` |
| `SalesOrderType` | `SalesOrderPartner.SalesOrderType` |
| `SalesOrganization` | `SalesOrderPartner.SalesOrganization` |
| `DistributionChannel` | `SalesOrderPartner.DistributionChannel` |
| `OrganizationDivision` | `SalesOrderPartner.OrganizationDivision` |
| `_SalesOrder` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Sales Order Partner - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesOrder', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesOrderPartnerTP
  as projection on R_SalesOrderPartnerTP as SalesOrderPartner  
{
  key SalesOrderPartner.SalesOrder,
  key SalesOrderPartner.PartnerFunction,
      @ObjectModel.editableFieldFor: 'PartnerFunction'
      SalesOrderPartner.PartnerFunctionForEdit,
      SalesOrderPartner.Customer,
      SalesOrderPartner.Supplier,
      SalesOrderPartner.Personnel,
      SalesOrderPartner.ContactPerson,
      SalesOrderPartner.ReferenceBusinessPartner,
      SalesOrderPartner.Partner,     
            
      //    DCL
      @Consumption.hidden: true
      SalesOrderPartner.SalesOrderType,
      @Consumption.hidden: true
      SalesOrderPartner.SalesOrganization,
      @Consumption.hidden: true
      SalesOrderPartner.DistributionChannel,
      @Consumption.hidden: true
     SalesOrderPartner.OrganizationDivision,  
      
      //Composition
      _SalesOrder : redirected to parent I_SalesOrderTP      
}
```
