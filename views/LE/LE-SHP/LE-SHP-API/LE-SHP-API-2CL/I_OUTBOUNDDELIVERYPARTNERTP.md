---
name: I_OUTBOUNDDELIVERYPARTNERTP
description: "Outbound DeliveryPARTNERTP"
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
  - delivery
  - partner
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# I_OUTBOUNDDELIVERYPARTNERTP

**Outbound DeliveryPARTNERTP**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutboundDelivery` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `_Delivery` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Outbound Delivery Partner - TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #B,
        sizeCategory:   #XL
    },
    semanticKey: ['OutboundDelivery', 'PartnerFunction'],
    representativeKey: 'PartnerFunction'
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_OutboundDeliveryPartnerTP
  as projection on R_OutboundDeliveryPartnerTP as _OutboundDeliveryPartnerTP
{
      //Key fields
      @ObjectModel.foreignKey.association: '_Delivery'
  key OutboundDelivery,
  key PartnerFunction,

      Customer,
      Supplier,
      Personnel,
      AddressID,
      AddressPersonID,
      ContactPerson,

      /* Associations */
      _Delivery : redirected to parent I_OutboundDeliveryTP
}
```
