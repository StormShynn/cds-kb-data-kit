---
name: I_CUSTOMERRETURNPARTNERTP
description: "Customerreturnpartnertp"
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
  - partner
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNPARTNERTP

**Customerreturnpartnertp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerReturn` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerFunctionForEdit` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
| `CustomerReturnType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_CustomerReturn` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Returns Order Partner - TP'

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
   semanticKey: ['CustomerReturn', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CustomerReturnPartnerTP
  as projection on R_CustomerReturnPartnerTP as CustomerReturnPartner
{
  key CustomerReturnPartner.CustomerReturn,
  key CustomerReturnPartner.PartnerFunction,
      @ObjectModel.editableFieldFor: 'PartnerFunction'
      CustomerReturnPartner.PartnerFunctionForEdit,
      CustomerReturnPartner.Customer,
      CustomerReturnPartner.Supplier,
      CustomerReturnPartner.Personnel,
      CustomerReturnPartner.ContactPerson,
      CustomerReturnPartner.ReferenceBusinessPartner,
      CustomerReturnPartner.Partner,     
            
      //    DCL
      @Consumption.hidden: true
      CustomerReturnPartner.CustomerReturnType,
      @Consumption.hidden: true
      CustomerReturnPartner.SalesOrganization,
      @Consumption.hidden: true
      CustomerReturnPartner.DistributionChannel,
      @Consumption.hidden: true
      CustomerReturnPartner.OrganizationDivision,  
      
      //Composition
      _CustomerReturn : redirected to parent I_CustomerReturnTP      
}
```
