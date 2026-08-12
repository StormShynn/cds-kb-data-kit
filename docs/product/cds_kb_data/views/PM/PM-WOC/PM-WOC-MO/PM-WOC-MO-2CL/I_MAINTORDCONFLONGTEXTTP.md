---
name: I_MAINTORDCONFLONGTEXTTP
description: "Maintordconflongtexttp"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - transactional-processing
  - text
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDCONFLONGTEXTTP

**Maintordconflongtexttp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrderConf` | ✓ | |  |  |  |  |
| `MaintOrderConfCntrValue` | ✓ | |  |  |  |  |
| `TextObjectKey` |  | |  |  |  |  |
| `MaintOrderConfLongText` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `_MaintOrderConfirmation` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maint Order Confirmation Long Text - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory:#TEXT 
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #M,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintOrderConf' , 'MaintOrderConfCntrValue']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_MaintOrdConfLongTextTP
  as projection on R_MaintOrderConfLongTextTP as MaintOrderConfirmationLongText
{
  key MaintOrderConf,
  key MaintOrderConfCntrValue,
      @Consumption.hidden: true
      TextObjectKey,
      @Semantics.text: true
      MaintOrderConfLongText,
      @Semantics.language:true
      Language,

      /* Associations */
      _MaintOrderConfirmation : redirected to parent I_MaintOrderConfirmationTP
}
```
