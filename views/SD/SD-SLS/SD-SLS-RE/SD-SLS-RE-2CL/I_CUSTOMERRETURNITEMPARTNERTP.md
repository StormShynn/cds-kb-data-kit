---
name: I_CUSTOMERRETURNITEMPARTNERTP
description: Customerreturnitempartnertp
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - transactional-processing
  - customer
  - item-level
  - partner
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNITEMPARTNERTP

**Customerreturnitempartnertp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CustomerReturn` | ✓ | |  |  |
| `CustomerReturnItem` | ✓ | |  |  |
| `PartnerFunction` | ✓ | |  |  |
| `PartnerFunctionForEdit` |  | |  |  |
| `Customer` |  | |  |  |
| `Supplier` |  | |  |  |
| `Personnel` |  | |  |  |
| `ContactPerson` |  | |  |  |
| `ReferenceBusinessPartner` |  | |  |  |
| `Partner` |  | |  |  |
| `PartnerIsSpecificForSDDocItem` |  | |  |  |
| `CustomerReturnType` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `_Item` | | ✓ | | |
| `_CustomerReturn` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Returns Order Item Partner - TP'

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
   semanticKey: ['CustomerReturn', 'CustomerReturnItem', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CustomerReturnItemPartnerTP
  as projection on R_CustomerReturnItemPartnerTP as CustomerReturnItemPartner
{
  key CustomerReturnItemPartner.CustomerReturn,
  key CustomerReturnItemPartner.CustomerReturnItem,
  key CustomerReturnItemPartner.PartnerFunction,

      @ObjectModel.editableFieldFor: 'PartnerFunction'
      CustomerReturnItemPartner.PartnerFunctionForEdit,
      CustomerReturnItemPartner.Customer,
      CustomerReturnItemPartner.Supplier,
      CustomerReturnItemPartner.Personnel,
      CustomerReturnItemPartner.ContactPerson,
      CustomerReturnItemPartner.ReferenceBusinessPartner,
      CustomerReturnItemPartner.Partner,
      CustomerReturnItemPartner.PartnerIsSpecificForSDDocItem,

      //    DCL
      @Consumption.hidden: true
      CustomerReturnItemPartner.CustomerReturnType,
      @Consumption.hidden: true
      CustomerReturnItemPartner.SalesOrganization,
      @Consumption.hidden: true
      CustomerReturnItemPartner.DistributionChannel,
      @Consumption.hidden: true
      CustomerReturnItemPartner.OrganizationDivision,

      //Composition
      _Item       : redirected to parent I_CustomerReturnItemTP,
      _CustomerReturn : redirected to I_CustomerReturnTP
}
```
