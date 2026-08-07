---
name: I_TRANSPORDDOCREF_2
description: Transporddocref 2
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
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDDOCREF_2

**Transporddocref 2**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderDocRefUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_tor_docref_key preserving type )` |  |  |
| `TransportationOrderUUID` |  | |  | `cast(parent_key as /scmtms/vdm_tor_db_key preserving type)` |  |  |
| `TranspOrdDocReferenceID` |  | |  | `btd_id` |  |  |
| `TranspOrdDocReferenceType` |  | |  | `btd_tco` |  |  |
| `TranspOrdOrigRefRootUUID` |  | |  | `cast(orig_ref_root as /scmtms/orig_ref_root_key preserving type )` |  |  |
| `TranspOrdDocReferenceItmType` |  | |  | `cast(btditem_tco as /scmtms/base_btd_item_tco preserving type )` |  |  |
| `TranspOrdDocReferenceItmID` |  | |  | `btditem_id` |  |  |
| `TranspOrdDocumentReferenceDate` |  | |  | `btd_date` |  |  |
| `TranspOrdDocRefIssuerName` |  | |  | `btd_issuer` |  |  |
| `TranspOrdDocReferenceOrigin` |  | |  | `cast(origin as /scmtms/vdm_docref_origin preserving type )` |  |  |
| `_BusTransDocTypeCode` | | ✓ | | | | |
| `_BusTransDocItemTypeCode` | | ✓ | | | | |
| `_TransportationOrder` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusTransDocTypeCode` | `I_BusTransDocTypeCode` | [0..1] |
| `_BusTransDocItemTypeCode` | `I_BusTransDocItemTypeCode` | [0..1] |

## Source Code

```abap
@EndUserText:   { label:              'Transp Order Document Reference'}
@ObjectModel:   { sapObjectNodeType.name: 'TransportationOrderDocRef',
                  representativeKey:  'TransportationOrderDocRefUUID',
                  usageType:          {serviceQuality: #A,
                                      sizeCategory:   #XL,
                                      dataClass:      #TRANSACTIONAL},
                 supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
                 modelingPattern: #ANALYTICAL_DIMENSION }
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API}

@AccessControl: {authorizationCheck:  #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA')}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_TranspOrdDocRef_2
  as select from /scmtms/d_tordrf
  /* Business Object related Node Associations*/
  association        to parent I_TransportationOrder_2 as _TransportationOrder     on $projection.TransportationOrderUUID = _TransportationOrder.TransportationOrderUUID
  association [0..1] to I_BusTransDocTypeCode          as _BusTransDocTypeCode     on $projection.TranspOrdDocReferenceType = _BusTransDocTypeCode.BusinessTransactionDocType
  association [0..1] to I_BusTransDocItemTypeCode      as _BusTransDocItemTypeCode on $projection.TranspOrdDocReferenceItmType = _BusTransDocItemTypeCode.BusinessTransacDocItmTypeCode

{
  key cast(db_key as /scmtms/vdm_tor_docref_key preserving type )       as TransportationOrderDocRefUUID,
      @ObjectModel.foreignKey.association: '_TransportationOrder'
      cast(parent_key as /scmtms/vdm_tor_db_key preserving type)        as TransportationOrderUUID,
      btd_id                                                            as TranspOrdDocReferenceID,
      @ObjectModel.foreignKey.association: '_BusTransDocTypeCode'
      btd_tco                                                           as TranspOrdDocReferenceType,
      cast(orig_ref_root as /scmtms/orig_ref_root_key preserving type ) as TranspOrdOrigRefRootUUID,
      @ObjectModel.foreignKey.association: '_BusTransDocItemTypeCode'
      cast(btditem_tco as  /scmtms/base_btd_item_tco preserving type )  as TranspOrdDocReferenceItmType,
      btditem_id                                                        as TranspOrdDocReferenceItmID,
      btd_date                                                          as TranspOrdDocumentReferenceDate,
      btd_issuer                                                        as TranspOrdDocRefIssuerName,
      cast(origin as /scmtms/vdm_docref_origin preserving type )        as TranspOrdDocReferenceOrigin,

      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT ]
      _TransportationOrder,
      _BusTransDocTypeCode,
      _BusTransDocItemTypeCode
}
```
