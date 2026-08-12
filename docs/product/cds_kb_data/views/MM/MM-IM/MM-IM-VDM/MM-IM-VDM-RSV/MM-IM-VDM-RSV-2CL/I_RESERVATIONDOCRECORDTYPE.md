---
name: I_RESERVATIONDOCRECORDTYPE
description: "Reservationdocrecordtype"
app_component: MM-IM-VDM-RSV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - component:MM-IM-VDM-RSV-2CL
  - lob:Sourcing & Procurement
---
# I_RESERVATIONDOCRECORDTYPE

**Reservationdocrecordtype**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-RSV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RecordType` | ✓ | |  | `cast( dd07l.domvalue_l as imrs_recordtype )` |  |  |
| `GoodsMovementType` |  | | `_GoodsMovementType` | `GoodsMovementType` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Reservation Document Record Type'
@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #C,
        dataClass:#TRANSACTIONAL
    },
    representativeKey: 'RecordType',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IRESVNDOCRECTYP'
@Metadata: {
              ignorePropagatedAnnotations:true,
              allowExtensions: true
            }
define view entity I_ReservationDocRecordType  
// Performance improvement: Selecting Domain values on DD07L instead of previously I_ReservationDocumentItem  
as select from dd07l
left outer to one join I_GoodsMovementType as _GoodsMovementType
                   on dd07l.domvalue_l = _GoodsMovementType.GoodsMovementType
{
      
  key cast( dd07l.domvalue_l as imrs_recordtype ) as RecordType,
  //GoodsMovementType is dummy associated field to support Client Dependency 
  //otherwise the view incompatible for C1 which was previously selecting distinct on I_ReservationDocumentItem  
  @Consumption.hidden: true 
  _GoodsMovementType.GoodsMovementType
}
where
      dd07l.domname  = 'IMRS_RECORDTYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
