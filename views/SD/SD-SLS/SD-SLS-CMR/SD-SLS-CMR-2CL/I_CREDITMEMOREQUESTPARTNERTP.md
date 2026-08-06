---
name: I_CREDITMEMOREQUESTPARTNERTP
description: Creditmemorequestpartnertp
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - transactional-processing
  - credit
  - partner
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQUESTPARTNERTP

**Creditmemorequestpartnertp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CreditMemoRequest` | `CreditMemoRequestPartner.CreditMemoRequest` |
| key `PartnerFunction` | `CreditMemoRequestPartner.PartnerFunction` |
| `PartnerFunctionForEdit` | `CreditMemoRequestPartner.PartnerFunctionForEdit` |
| `Customer` | `CreditMemoRequestPartner.Customer` |
| `Supplier` | `CreditMemoRequestPartner.Supplier` |
| `Personnel` | `CreditMemoRequestPartner.Personnel` |
| `ContactPerson` | `CreditMemoRequestPartner.ContactPerson` |
| `ReferenceBusinessPartner` | `CreditMemoRequestPartner.ReferenceBusinessPartner` |
| `Partner` | `CreditMemoRequestPartner.Partner` |
| `CreditMemoRequestType` | `CreditMemoRequestPartner.CreditMemoRequestType` |
| `SalesOrganization` | `CreditMemoRequestPartner.SalesOrganization` |
| `DistributionChannel` | `CreditMemoRequestPartner.DistributionChannel` |
| `OrganizationDivision` | `CreditMemoRequestPartner.OrganizationDivision` |
| `_CreditMemoRequest` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request Partner - TP'

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
   semanticKey: ['CreditMemoRequest', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_CreditMemoRequestPartnerTP 
  as projection on R_CreditMemoRequestPartnerTP as CreditMemoRequestPartner {
  key CreditMemoRequestPartner.CreditMemoRequest,
  key CreditMemoRequestPartner.PartnerFunction,
      @ObjectModel.editableFieldFor: 'PartnerFunction'
      CreditMemoRequestPartner.PartnerFunctionForEdit,
      CreditMemoRequestPartner.Customer,
      CreditMemoRequestPartner.Supplier,
      CreditMemoRequestPartner.Personnel,
      CreditMemoRequestPartner.ContactPerson,
      CreditMemoRequestPartner.ReferenceBusinessPartner,
      CreditMemoRequestPartner.Partner,     
            
      //    DCL
      @Consumption.hidden: true
      CreditMemoRequestPartner.CreditMemoRequestType,
      @Consumption.hidden: true
      CreditMemoRequestPartner.SalesOrganization,
      @Consumption.hidden: true
      CreditMemoRequestPartner.DistributionChannel,
      @Consumption.hidden: true
     CreditMemoRequestPartner.OrganizationDivision,  
      
      //Composition
      _CreditMemoRequest : redirected to parent I_CreditMemoRequestTP      
  
}
```
