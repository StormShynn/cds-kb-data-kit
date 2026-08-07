---
name: I_DEBITMEMOREQUESTPARTNERTP
description: "Debitmemorequestpartnertp"
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
  - partner
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQUESTPARTNERTP

**Debitmemorequestpartnertp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebitMemoRequest` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerFunctionForEdit` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
| `DebitMemoRequestType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_DebitMemoRequest` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Debit Memo Request Partner - TP'

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
   semanticKey: ['DebitMemoRequest', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_DebitMemoRequestPartnerTP 
  as projection on R_DebitMemoRequestPartnerTP as DebitMemoRequestPartnerTP {
  key DebitMemoRequestPartnerTP.DebitMemoRequest,
  key DebitMemoRequestPartnerTP.PartnerFunction,
  @ObjectModel.editableFieldFor: 'PartnerFunction'
  DebitMemoRequestPartnerTP.PartnerFunctionForEdit,
  DebitMemoRequestPartnerTP.Customer,
  DebitMemoRequestPartnerTP.Supplier,
  DebitMemoRequestPartnerTP.Personnel,
  DebitMemoRequestPartnerTP.ContactPerson,
  DebitMemoRequestPartnerTP.ReferenceBusinessPartner,
  DebitMemoRequestPartnerTP.Partner,
  
  //    DCL
  @Consumption.hidden: true
  DebitMemoRequestPartnerTP.DebitMemoRequestType,
  @Consumption.hidden: true
  DebitMemoRequestPartnerTP.SalesOrganization,
  @Consumption.hidden: true
  DebitMemoRequestPartnerTP.DistributionChannel,
  @Consumption.hidden: true
  DebitMemoRequestPartnerTP.OrganizationDivision,
  
  //Composition
  _DebitMemoRequest : redirected to parent I_DebitMemoRequestTP
  
}
```
