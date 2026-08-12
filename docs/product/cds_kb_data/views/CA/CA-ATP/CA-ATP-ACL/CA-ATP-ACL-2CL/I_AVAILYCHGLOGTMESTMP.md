---
name: I_AVAILYCHGLOGTMESTMP
description: "Availychglogtmestmp"
app_component: CA-ATP-ACL-2CL
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
  - CA
  - CA-ATP
  - CA-ATP-ACL
  - interface-view
  - component:CA-ATP-ACL-2CL
  - lob:Cross-Application Components
---
# I_AVAILYCHGLOGTMESTMP

**Availychglogtmestmp**

| Property | Value |
|---|---|
| App Component | `CA-ATP-ACL-2CL` |
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
| `AvailabilityChangeLogUUID` | ✓ | |  | `netchguuid` | `RAW(16)` | Availability Change Log UUID |
| `AvailabilityChangeLogDateTime` | ✓ | |  | `netchgtstamp` | `DEC(21)` | Availability Change Log timestamp |
| `_AvailyChgLog` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AvailyChgLog` | `I_AvailyChgLog` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Availability Change Log Time Stamp'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    semanticKey: [ 'AvailabilityChangeLogUUID', 'AvailabilityChangeLogDateTime'],
    representativeKey: 'AvailabilityChangeLogDateTime',
    usageType: {
      serviceQuality: #A,
      sizeCategory: #M,
      dataClass: #TRANSACTIONAL
    },
    modelingPattern: #NONE,    
    supportedCapabilities: [#SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE] 
}
@VDM: {
  lifecycle: {
    contract.type: #PUBLIC_LOCAL_API
  },
  viewType: #BASIC
}
define view entity I_AvailyChgLogTmeStmp
  as select from atpncftstamp
  association [1..1] to I_AvailyChgLog as _AvailyChgLog on $projection.AvailabilityChangeLogUUID = _AvailyChgLog.AvailabilityChangeLogUUID
{
  @ObjectModel.foreignKey.association: '_AvailyChgLog'
  key netchguuid   as AvailabilityChangeLogUUID,
  key netchgtstamp as AvailabilityChangeLogDateTime,
  
  @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]  
  _AvailyChgLog
}
```
