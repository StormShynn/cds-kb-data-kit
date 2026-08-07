---
name: I_INBDELIVITEMTEXTTP
description: Inbdelivitemtexttp
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
# I_INBDELIVITEMTEXTTP

**Inbdelivitemtexttp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InboundDelivery` | ✓ | |  |  |
| `InboundDeliveryItem` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `LongTextID` | ✓ | |  |  |
| `LongText` |  | |  |  |
| `_Delivery` | | ✓ | | |
| `_Item` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Inbound Delivery Item - Text TP'
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
        serviceQuality: #C,
        sizeCategory:   #XL
    },
    dataCategory: #TEXT,
    semanticKey: ['InboundDelivery', 'InboundDeliveryItem', 'Language', 'LongTextID'],
    representativeKey: 'LongTextID'
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InbDelivItemTextTP
  as projection on R_InbDelivItemTextTP
{
      // Key
      @ObjectModel.foreignKey.association: '_Delivery'
  key InboundDelivery,
      @ObjectModel.foreignKey.association: '_Item'
  key InboundDeliveryItem,
      @Semantics.language:true
  key Language,
  key LongTextID,
  
      // Text
      @Semantics.text:true
      LongText,
      
      
      /* Associations */
      _Delivery : redirected to I_InboundDeliveryTP,
      _Item     : redirected to parent I_InboundDeliveryItemTP
}
```
