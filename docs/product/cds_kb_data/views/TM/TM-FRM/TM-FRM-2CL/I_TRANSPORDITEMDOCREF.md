---
name: I_TRANSPORDITEMDOCREF
description: "Transporditemdocref"
app_component: TM-FRM-2CL
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
  - TM
  - TM-FRM
  - interface-view
  - item-level
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDITEMDOCREF

**Transporditemdocref**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
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
| `TranspOrdItemDocReferenceUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_tor_itm_drf_uuid preserving type)` |  |  |
| `TransportationOrderUUID` |  | |  | `cast(root_key as /scmtms/vdm_tor_db_key preserving type)` |  |  |
| `TransportationOrderItemUUID` |  | |  | `cast(parent_key as /scmtms/vdm_tor_item_db_key preserving type)` |  |  |
| `TranspOrdItemDocReferenceID` |  | |  | `btd_id` |  |  |
| `TranspOrdItemDocReferenceType` |  | |  | `btd_tco` |  |  |
| `TranspOrdItmDocRefItemType` |  | |  | `btditem_tco` |  |  |
| `TranspOrdItmDocReferenceItemID` |  | |  | `btditem_id` |  |  |
| `TranspOrdItmDocRefDate` |  | |  | `btd_date` |  |  |
| `TranspOrdItemDocRefIssuerName` |  | |  | `btd_issuer` |  |  |
| `_TransportationOrder` | | ✓ | | | | |
| `_BusTransDocTypeCode` | | ✓ | | | | |
| `_BusTransDocItemTypeCode` | | ✓ | | | | |
| `_TransportationOrderItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationOrder` | `I_TransportationOrder_2` | [1..1] |
| `_BusTransDocTypeCode` | `I_BusTransDocTypeCode` | [0..1] |
| `_BusTransDocItemTypeCode` | `I_BusTransDocItemTypeCode` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Transp Order Item Document Reference'
@ObjectModel:       { sapObjectNodeType.name:   'TransportationOrderItemDocRef',
                      representativeKey:        'TranspOrdItemDocReferenceUUID',
                      usageType:                { serviceQuality: #A,
                                                  sizeCategory: #XL,
                                                  dataClass: #TRANSACTIONAL },
                      supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
                      modelingPattern: #ANALYTICAL_DIMENSION }
@AccessControl: {authorizationCheck:  #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA')}

@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API}
@Metadata.ignorePropagatedAnnotations: true                 

define view entity I_TranspOrdItemDocRef
  as select from /scmtms/d_toridr
  /* Business Object related Node Associations*/
  association        to parent I_TransportationOrderItem_2 as _TransportationOrderItem on $projection.TransportationOrderItemUUID = _TransportationOrderItem.TransportationOrderItemUUID
  association [1..1] to I_TransportationOrder_2            as _TransportationOrder     on $projection.TransportationOrderUUID = _TransportationOrder.TransportationOrderUUID
  association [0..1] to I_BusTransDocTypeCode              as _BusTransDocTypeCode     on $projection.TranspOrdItemDocReferenceType = _BusTransDocTypeCode.BusinessTransactionDocType
  association [0..1] to I_BusTransDocItemTypeCode          as _BusTransDocItemTypeCode on $projection.TranspOrdItmDocRefItemType = _BusTransDocItemTypeCode.BusinessTransacDocItmTypeCode

{
  key cast(db_key as /scmtms/vdm_tor_itm_drf_uuid preserving type)     as TranspOrdItemDocReferenceUUID,

      @ObjectModel.foreignKey.association: '_TransportationOrder'
      cast(root_key as /scmtms/vdm_tor_db_key preserving type)         as TransportationOrderUUID,

      @ObjectModel.foreignKey.association: '_TransportationOrderItem'
      cast(parent_key as /scmtms/vdm_tor_item_db_key  preserving type) as TransportationOrderItemUUID,

      btd_id                                                           as TranspOrdItemDocReferenceID,
      @ObjectModel.foreignKey.association: '_BusTransDocTypeCode'
      btd_tco                                                          as TranspOrdItemDocReferenceType,

      @ObjectModel.foreignKey.association: '_BusTransDocItemTypeCode'
      btditem_tco                                                      as TranspOrdItmDocRefItemType,
      btditem_id                                                       as TranspOrdItmDocReferenceItemID,
      btd_date                                                         as TranspOrdItmDocRefDate,
      btd_issuer                                                       as TranspOrdItemDocRefIssuerName,


      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationOrder,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TransportationOrderItem,
      _BusTransDocTypeCode,
      _BusTransDocItemTypeCode
}
```
