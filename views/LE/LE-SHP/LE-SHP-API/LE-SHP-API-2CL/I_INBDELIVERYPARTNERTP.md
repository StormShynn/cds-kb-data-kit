---
name: I_INBDELIVERYPARTNERTP
description: "Inbdeliverypartnertp"
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
# I_INBDELIVERYPARTNERTP

**Inbdeliverypartnertp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InboundDelivery` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `_Delivery` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Inbound Delivery Partner - TP'
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
        dataClass:      #MIXED,
        serviceQuality: #C,
        sizeCategory:   #XL
    },
    semanticKey: ['InboundDelivery', 'PartnerFunction'],
    representativeKey: 'PartnerFunction'
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InbDeliveryPartnerTP
  as projection on R_InbDeliveryPartnerTP as InboundDeliveryPartner
{
      // Key
      @ObjectModel.foreignKey.association: '_Delivery'
  key InboundDelivery,
  key PartnerFunction,

      // Partner
      Customer,
      Supplier,
      Personnel,
      ContactPerson,

      // Address
      AddressID,
      AddressPersonID,

      /* Associations */
      _Delivery : redirected to parent I_InboundDeliveryTP
}
```
