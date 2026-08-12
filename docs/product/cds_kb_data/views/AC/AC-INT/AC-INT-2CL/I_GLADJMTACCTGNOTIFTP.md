---
name: I_GLADJMTACCTGNOTIFTP
description: "Gladjmtacctgnotiftp"
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - interface-view
  - transactional-processing
  - component:AC-INT-2CL
  - lob:Other
---
# I_GLADJMTACCTGNOTIFTP

**Gladjmtacctgnotiftp**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAdjmtAcctgNotificationUUID` | ✓ | |  |  |  |  |
| `AccountingDocument` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `EntryTimestamp` |  | |  |  |  |  |
| `_CompanyCodeVH` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'G/L Adjustment Accounting Notif - TP'
@VDM.viewType: #TRANSACTIONAL
@ObjectModel: {
   sapObjectNodeType:{
      name: 'GLAdjmtAccountingNotification'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER, #UI_PROVIDER_PROJECTION_SOURCE],
   usageType: {
     serviceQuality: #A,
     sizeCategory:   #XXL,
     dataClass:      #TRANSACTIONAL
   }
 }

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define root view entity I_GLAdjmtAcctgNotifTP
  provider contract transactional_interface
  as projection on R_GLAdjmtAcctgNotifTP

{
  key GLAdjmtAcctgNotificationUUID,
      AccountingDocument,
      @ObjectModel.text.association: '_CompanyCodeVH'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeVH', element: 'CompanyCode' }, association: '_CompanyCodeVH' } ]
      CompanyCode,
      FiscalYear,
      EntryTimestamp,
      _CompanyCodeVH
}
```
