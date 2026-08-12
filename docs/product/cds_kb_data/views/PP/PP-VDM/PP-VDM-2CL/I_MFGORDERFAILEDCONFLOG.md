---
name: I_MFGORDERFAILEDCONFLOG
description: "Mfgorderfailedconflog"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
