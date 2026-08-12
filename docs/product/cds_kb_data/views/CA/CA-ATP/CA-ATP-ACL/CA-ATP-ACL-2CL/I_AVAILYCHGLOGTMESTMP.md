---
name: I_AVAILYCHGLOGTMESTMP
description: "Availychglogtmestmp"
app_component: CA-ATP-ACL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
