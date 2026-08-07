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

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CreditMemoRequest` | ✓ | |  |  |
| `PartnerFunction` | ✓ | |  |  |
| `PartnerFunctionForEdit` |  | |  |  |
| `Customer` |  | |  |  |
| `Supplier` |  | |  |  |
| `Personnel` |  | |  |  |
| `ContactPerson` |  | |  |  |
| `ReferenceBusinessPartner` |  | |  |  |
| `Partner` |  | |  |  |
| `CreditMemoRequestType` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `_CreditMemoRequest` | | ✓ | | |

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
