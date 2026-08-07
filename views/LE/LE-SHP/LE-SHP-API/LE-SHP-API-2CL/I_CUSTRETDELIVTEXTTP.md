---
name: I_CUSTRETDELIVTEXTTP
description: "Custretdelivtexttp"
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
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# I_CUSTRETDELIVTEXTTP

**Custretdelivtexttp**

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
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `_Delivery` | | ✓ | | | | |

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
        sizeCategory:   #L
    },
    dataCategory: #TEXT,
    semanticKey: ['CustomerReturnDelivery', 'Language', 'LongTextID'],
    representativeKey: 'LongTextID',
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@EndUserText.label: 'Customer Returns Delivery - Text TP'
define view entity I_CustRetDelivTextTP  
  as projection on R_CustRetDelivTextTP as CustomerReturnsDeliveryText
{
      @ObjectModel.foreignKey.association: '_Delivery'
  key CustomerReturnDelivery,
      @Semantics.language:true
  key Language,
  key LongTextID,
  
      @Semantics.text:true
      LongText,
      
      // Associations
      _Delivery : redirected to parent I_CustomerReturnsDeliveryTP
}
```
