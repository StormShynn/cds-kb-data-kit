---
name: I_TRANSPORDITEMSERIALNUMBER
description: TRANSPORDITEMSerial Number
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - interface-view
  - serial-number
  - item-level
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDITEMSERIALNUMBER

**TRANSPORDITEMSerial Number**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspOrdItemSerialNumberUUID` | `cast(TranspOrdItemSerialNumber.db_key as /scmtms/vdm_itm_serial_nr_uuid preserving type)` |
| `TransportationOrderUUID` | `cast(TranspOrdItemSerialNumber.root_key as /scmtms/vdm_tor_db_key preserving type)` |
| `TransportationOrderItemUUID` | `cast(TranspOrdItemSerialNumber.parent_key as /scmtms/vdm_tor_item_db_key preserving type)` |
| `TranspOrdItemSerialNumber` | `cast(TranspOrdItemSerialNumber.serial_id as /scmtms/vdm_itm_serial_nr_id preserving type)` |
| `_TransportationOrder` | *Association* |
| `_TransportationOrderItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationOrder` | `I_TransportationOrder_2` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Transportation Order Item Serial Number'

@ObjectModel:   { sapObjectNodeType.name: 'TranspOrdItemSerialNumber',
                  representativeKey:      'TranspOrdItemSerialNumberUUID',
                  usageType:              { serviceQuality: #A,
                                            sizeCategory:   #L,
                                            dataClass:      #TRANSACTIONAL },
                  supportedCapabilities:  [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] }

@AccessControl: { authorizationCheck:    #MANDATORY,
                  personalData.blocking: #('TRANSACTIONAL_DATA') }

@VDM:           { viewType:                #BASIC,
                  lifecycle.contract.type: #PUBLIC_LOCAL_API }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_TranspOrdItemSerialNumber
  as select from /scmtms/d_torisn as TranspOrdItemSerialNumber

  association        to parent I_TransportationOrderItem_2 as _TransportationOrderItem on $projection.TransportationOrderItemUUID = _TransportationOrderItem.TransportationOrderItemUUID
  association [1..1] to I_TransportationOrder_2            as _TransportationOrder     on $projection.TransportationOrderUUID = _TransportationOrder.TransportationOrderUUID
{
      // Attributes
  key cast(TranspOrdItemSerialNumber.db_key as /scmtms/vdm_itm_serial_nr_uuid preserving type)  as TranspOrdItemSerialNumberUUID,

      @ObjectModel.foreignKey.association: '_TransportationOrder'
      cast(TranspOrdItemSerialNumber.root_key as /scmtms/vdm_tor_db_key preserving type)        as TransportationOrderUUID,

      @ObjectModel.foreignKey.association: '_TransportationOrderItem'
      cast(TranspOrdItemSerialNumber.parent_key as /scmtms/vdm_tor_item_db_key preserving type) as TransportationOrderItemUUID,

      cast(TranspOrdItemSerialNumber.serial_id as /scmtms/vdm_itm_serial_nr_id preserving type) as TranspOrdItemSerialNumber,

      // Associations
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationOrder,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TransportationOrderItem
}
```
