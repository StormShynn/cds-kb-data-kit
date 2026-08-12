---
name: I_CUSTRETDELIVITEMSERIALNMBRTP
description: "Custretdelivitemserialnmbrtp"
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-API
  - interface-view
  - transactional-processing
  - item-level
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# I_CUSTRETDELIVITEMSERIALNMBRTP

**Custretdelivitemserialnmbrtp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerReturnDelivery` | ✓ | |  |  |  |  |
| `CustomerReturnDeliveryItem` | ✓ | |  |  |  |  |
| `SerialNumber` | ✓ | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `_Delivery` | | ✓ | | | | |
| `_Item` | | ✓ | | | | |

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #A,
        sizeCategory:   #XL
    },
    semanticKey: ['CustomerReturnDelivery', 'CustomerReturnDeliveryItem', 'SerialNumber'],
    representativeKey: 'SerialNumber',
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@EndUserText.label: 'Customer Returns Deliv Item SrlNmbr - TP'
define view entity I_CustRetDelivItemSerialNmbrTP 
  as projection on R_CustRetDelivItemSerialNmbrTP as CustRetDelivItemSerialNumber
{
      @ObjectModel.foreignKey.association: '_Delivery'
  key CustomerReturnDelivery,
      @ObjectModel.foreignKey.association: '_Item'
  key CustomerReturnDeliveryItem,
  key SerialNumber,
  
      Equipment,
      Material,
      
  // Associations 
  _Delivery : redirected to I_CustomerReturnsDeliveryTP,
  _Item: redirected to parent I_CustomerReturnsDelivItemTP 
}
```
