---
name: I_JITINBCALLDOCREFERENCE
description: Jitinbcalldocreference
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-JIT
  - interface-view
  - component:LE-JIT-S2C
  - lob:Logistics Execution
---
# I_JITINBCALLDOCREFERENCE

**Jitinbcalldocreference**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `JITDocRefUUID` | `db_key` |
| `JITHeaderUUID` | `parent_key` |
| `InternalJITCallNumber` | `int_call_num` |
| `CompGrpNumber` | `comp_grp_num` |
| `JITCallItemNumber` | `call_item_num` |
| `BusinessTransactionDocType` | `btd_type_code` |
| `BusinessTransactionDocument` | `btd_id` |
| `BusinessTransactionDocItem` | `btd_item_id` |
| `BusinessTransacDocItmTypeCode` | `btd_item_type_code` |
| `BusinessTransactionDocStatus` | `btd_status` |
| `LogicalSystemID` | `logsys` |
| `LastChangeDateTime` | `lchg_date_time` |
| `BusinessTransactionDocUUID` | `businesstransactiondocuuid` |
| `_DeliveryDocumentItem` | *Association* |
| `_JITHandlingUnitHeader` | *Association* |
| `_JITBusTransDocType` | *Association* |
| `_JITBusTransDocItemType` | *Association* |
| `_JITInboundCall` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryDocumentItem` | `I_DeliveryDocumentItem` | [1..1] |
| `_JITHandlingUnitHeader` | `I_JITHandlingUnitHeader` | [1..1] |
| `_JITBusTransDocType` | `I_JITBusTransDocType` | [0..1] |
| `_JITBusTransDocItemType` | `I_JITBusTransDocItemType` | [0..1] |

## Source Code

```abap
@AccessControl                          : { authorizationCheck      : #MANDATORY,
                                            personalData.blocking   : #REQUIRED }
@Analytics                              : { dataCategory            : #DIMENSION,
                                            internalName            : #LOCAL }
@EndUserText.label                      : 'JIT Inbound Call Document Reference'
@Metadata.allowExtensions               : true
@Metadata.ignorePropagatedAnnotations   : true
@ObjectModel                            : { modelingPattern         : #ANALYTICAL_DIMENSION,
                                            representativeKey       : 'JITDocRefUUID',
                                            sapObjectNodeType.name  : 'JITInbCallDocReference',
                                            supportedCapabilities   : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                            usageType               : { dataClass       : #TRANSACTIONAL,
                                                                        serviceQuality  : #A,
                                                                        sizeCategory    : #XXL }
                                          }
@VDM.viewType                           : #BASIC
define view entity I_JITInbCallDocReference
  as select from njit_call_d_dref
  association        to parent I_JITInboundCall  as _JITInboundCall         on  $projection.JITHeaderUUID = _JITInboundCall.JITHeaderUUID
  association [1..1] to I_DeliveryDocumentItem   as _DeliveryDocumentItem   on  $projection.BusinessTransactionDocument = _DeliveryDocumentItem.DeliveryDocument
                                                                            and $projection.BusinessTransactionDocItem  = _DeliveryDocumentItem.DeliveryDocumentItem
                                                                            and $projection.BusinessTransactionDocType  = 'J'
  association [1..1] to I_JITHandlingUnitHeader  as _JITHandlingUnitHeader  on  $projection.BusinessTransactionDocument = _JITHandlingUnitHeader.HandlingUnitExternalID
                                                                            and $projection.BusinessTransactionDocType  = 'X'
  association [0..1] to I_JITBusTransDocType     as _JITBusTransDocType     on  $projection.BusinessTransactionDocType = _JITBusTransDocType.BusinessTransactionDocType
  association [0..1] to I_JITBusTransDocItemType as _JITBusTransDocItemType on  $projection.BusinessTransacDocItmTypeCode = _JITBusTransDocItemType.BusinessTransacDocItmTypeCode
{
  key db_key                     as JITDocRefUUID,
      @ObjectModel.foreignKey.association : '_JITInboundCall'
      parent_key                 as JITHeaderUUID,
      int_call_num               as InternalJITCallNumber,
      comp_grp_num               as CompGrpNumber,
      call_item_num              as JITCallItemNumber,
      @ObjectModel.foreignKey.association : '_JITBusTransDocType'
      btd_type_code              as BusinessTransactionDocType,
      btd_id                     as BusinessTransactionDocument,
      btd_item_id                as BusinessTransactionDocItem,
      @ObjectModel.foreignKey.association : '_JITBusTransDocItemType'
      btd_item_type_code         as BusinessTransacDocItmTypeCode,
      btd_status                 as BusinessTransactionDocStatus,
      logsys                     as LogicalSystemID,
      lchg_date_time             as LastChangeDateTime,
      businesstransactiondocuuid as BusinessTransactionDocUUID,
      //associations
      _DeliveryDocumentItem,
      _JITInboundCall,
      _JITHandlingUnitHeader,
      _JITBusTransDocType,
      _JITBusTransDocItemType
}
where
      _JITInboundCall.JITScenario = '1'
  and comp_grp_num                is initial
  and call_item_num               is initial
```
