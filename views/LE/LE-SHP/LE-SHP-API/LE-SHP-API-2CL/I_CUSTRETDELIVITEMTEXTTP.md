---
name: I_CUSTRETDELIVITEMTEXTTP
description: Custretdelivitemtexttp
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
  - text
  - item-level
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# I_CUSTRETDELIVITEMTEXTTP

**Custretdelivitemtexttp**

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
| `CustomerReturnDeliveryItem` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `LongTextID` | ✓ | |  |  |
| `LongText` |  | |  |  |
| `_Delivery` | | ✓ | | |
| `_Item` | | ✓ | | |

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory:   #XL
    },
    dataCategory: #TEXT,
    semanticKey: ['CustomerReturnDelivery', 'CustomerReturnDeliveryItem', 'Language', 'LongTextID'],
    representativeKey: 'LongTextID',
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@EndUserText.label: 'Customer Returns Delivery Item - Text TP'
define view entity I_CustRetDelivItemTextTP 
  as projection on R_CustRetDelivItemTextTP as CustomerReturnsDelivItemText 
{
      @ObjectModel.foreignKey.association: '_Delivery'
  key CustomerReturnDelivery,
      @ObjectModel.foreignKey.association: '_Item'
  key CustomerReturnDeliveryItem,
      @Semantics.language:true
  key Language,
  key LongTextID,
  
      @Semantics.text:true
      LongText,
      
      // Associations 
      _Delivery : redirected to I_CustomerReturnsDeliveryTP,
      _Item     : redirected to parent I_CustomerReturnsDelivItemTP
}
```
