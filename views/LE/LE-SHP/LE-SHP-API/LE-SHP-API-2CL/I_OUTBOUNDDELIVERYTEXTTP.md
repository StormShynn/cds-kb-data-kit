---
name: I_OUTBOUNDDELIVERYTEXTTP
description: Outbound DeliveryTEXTTP
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
  - text
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# I_OUTBOUNDDELIVERYTEXTTP

**Outbound DeliveryTEXTTP**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OutboundDelivery` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `LongTextID` | ✓ | |  |  |
| `LongText` |  | |  |  |
| `_Delivery` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Outbound Delivery - Text TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    dataCategory: #TEXT,
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory:   #L
    },
    semanticKey: ['OutboundDelivery', 'Language', 'LongTextID'],
    representativeKey: 'LongTextID'
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_OutboundDeliveryTextTP
  as projection on R_OutboundDeliveryTextTP as _OutboundDeliveryTextTP
{

      @ObjectModel.foreignKey.association: '_Delivery'
  key OutboundDelivery,
      @Semantics.language:true
  key Language,
  key LongTextID,
      @Semantics.text:true
      LongText,

      /* Associations */
      _Delivery : redirected to parent I_OutboundDeliveryTP
}
```
