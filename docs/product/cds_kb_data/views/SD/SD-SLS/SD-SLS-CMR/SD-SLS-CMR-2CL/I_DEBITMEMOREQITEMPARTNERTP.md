---
name: I_DEBITMEMOREQITEMPARTNERTP
description: "Debitmemoreqitempartnertp"
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - transactional-processing
  - item-level
  - partner
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQITEMPARTNERTP

**Debitmemoreqitempartnertp**

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
| `DebitMemoRequestItem` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerFunctionForEdit` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
| `PartnerIsSpecificForSDDocItem` |  | |  |  |  |  |
| `DebitMemoRequestType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_DebitMemoRequest` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Debit Memo Request Item Partner - TP'

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
   semanticKey: ['DebitMemoRequest', 'DebitMemoRequestItem', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_DebitMemoReqItemPartnerTP
  as projection on R_DebitMemoReqItemPartnerTP as DebitMemoReqItemPartnerTP{
  key DebitMemoReqItemPartnerTP.DebitMemoRequest,
  key DebitMemoReqItemPartnerTP.DebitMemoRequestItem,
  key DebitMemoReqItemPartnerTP.PartnerFunction,
  
  @ObjectModel.editableFieldFor: 'PartnerFunction'
  DebitMemoReqItemPartnerTP.PartnerFunctionForEdit,
  DebitMemoReqItemPartnerTP.Customer,
  DebitMemoReqItemPartnerTP.Supplier,
  DebitMemoReqItemPartnerTP.Personnel,
  DebitMemoReqItemPartnerTP.ContactPerson,
  DebitMemoReqItemPartnerTP.ReferenceBusinessPartner,
  DebitMemoReqItemPartnerTP.Partner,
  DebitMemoReqItemPartnerTP.PartnerIsSpecificForSDDocItem,
  
  //    DCL
  @Consumption.hidden: true
  DebitMemoReqItemPartnerTP.DebitMemoRequestType,
  @Consumption.hidden: true
  DebitMemoReqItemPartnerTP.SalesOrganization,
  @Consumption.hidden: true
  DebitMemoReqItemPartnerTP.DistributionChannel,
  @Consumption.hidden: true
  DebitMemoReqItemPartnerTP.OrganizationDivision,
  
  //Composition
  _Item             : redirected to parent I_DebitMemoRequestItemTP,
  _DebitMemoRequest : redirected to        I_DebitMemoRequestTP
  
}
```
