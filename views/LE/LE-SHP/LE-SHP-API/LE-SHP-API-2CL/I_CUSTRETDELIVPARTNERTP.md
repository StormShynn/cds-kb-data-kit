---
name: I_CUSTRETDELIVPARTNERTP
description: Custretdelivpartnertp
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-API
  - interface-view
  - transactional-processing
  - partner
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# I_CUSTRETDELIVPARTNERTP

**Custretdelivpartnertp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CustomerReturnDelivery` | ✓ | |  |  |
| `PartnerFunction` | ✓ | |  |  |
| `Customer` |  | |  |  |
| `Supplier` |  | |  |  |
| `Personnel` |  | |  |  |
| `AddressID` |  | |  |  |
| `AddressPersonID` |  | |  |  |
| `ContactPerson` |  | |  |  |
| `_Delivery` | | ✓ | | |

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
        dataClass:      #MIXED,
        serviceQuality: #C,
        sizeCategory:   #XL
    },
    semanticKey: ['CustomerReturnDelivery', 'PartnerFunction'],
    representativeKey: 'PartnerFunction',
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@EndUserText.label: 'Customer Returns Delivery Partner - TP'
define view entity I_CustRetDelivPartnerTP  
  as projection on R_CustRetDelivPartnerTP as CustomerReturnsDeliveryPartner
{
      @ObjectModel.foreignKey.association: '_Delivery'
  key CustomerReturnDelivery,
  key PartnerFunction,
  
      Customer,
      Supplier,
      Personnel,
      AddressID,
      AddressPersonID,
      ContactPerson,

      // Associations
      _Delivery : redirected to parent I_CustomerReturnsDeliveryTP
}
```
