---
name: I_MFGORDERFAILEDCONFLOG
description: "Mfgorderfailedconflog"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERFAILEDCONFLOG

**Mfgorderfailedconflog**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SequentialPlantDataCollection` | ✓ | |  |  |  |  |
| `ConfirmationApplicationOrigin` |  | |  |  |  |  |
| `SystemMessageIdentification` |  | |  |  |  |  |
| `SystemMessageNumber` |  | |  |  |  |  |
| `SystemMessageType` |  | |  |  |  |  |
| `SystemMessageVariable1` |  | |  |  |  |  |
| `SystemMessageVariable2` |  | |  |  |  |  |
| `SystemMessageVariable3` |  | |  |  |  |  |
| `SystemMessageVariable4` |  | |  |  |  |  |
| `_ConfirmationApplicationOrigin` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Manufacturing Order Failed Confirmation Log'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_MfgOrderFailedConfLog
  as select from I_FailedConfirmationLog
{
      // Key
  key SequentialPlantDataCollection,
  
      @ObjectModel.foreignKey.association: '_ConfirmationApplicationOrigin'
      ConfirmationApplicationOrigin,

      // Message Log
      SystemMessageIdentification,
      SystemMessageNumber,
      SystemMessageType,
      SystemMessageVariable1,
      SystemMessageVariable2,
      SystemMessageVariable3,
      SystemMessageVariable4,

      // Association
      _ConfirmationApplicationOrigin
}
where ( ConfirmationApplicationOrigin = '2' or
        ConfirmationApplicationOrigin = '6' or //Manufacturing orders only
        ConfirmationApplicationOrigin = '8' ); //including results recording
```
