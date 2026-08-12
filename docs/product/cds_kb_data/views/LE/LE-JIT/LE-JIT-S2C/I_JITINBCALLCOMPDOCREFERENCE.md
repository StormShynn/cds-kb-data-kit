---
name: I_JITINBCALLCOMPDOCREFERENCE
description: "Jitinbcallcompdocreference"
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_JITINBCALLCOMPDOCREFERENCE

**Jitinbcallcompdocreference**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDocRefUUID` | ✓ | |  | `db_key` |  |  |
| `JITHeaderUUID` |  | |  | `root_key` |  |  |
| `JITCallComponentUUID` |  | |  | `parent_key` |  |  |
| `InternalJITCallNumber` |  | |  | `int_call_num` |  |  |
| `CompGrpNumber` |  | |  | `comp_grp_num` |  |  |
| `JITCallItemNumber` |  | |  | `call_item_num` |  |  |
| `BusinessTransactionDocType` |  | |  | `btd_type_code` |  |  |
| `BusinessTransactionDocument` |  | |  | `btd_id` |  |  |
| `BusinessTransactionDocItem` |  | |  | `btd_item_id` |  |  |
| `BusinessTransacDocItmTypeCode` |  | |  | `btd_item_type_code` |  |  |
| `BusinessTransactionDocStatus` |  | |  | `btd_status` |  |  |
| `LogicalSystemID` |  | |  | `logsys` |  |  |
| `LastChangeDateTime` |  | |  | `lchg_date_time` |  |  |
| `BusinessTransactionDocUUID` |  | |  | `businesstransactiondocuuid` |  |  |
| `_DeliveryDocumentItem` | | ✓ | | | | |
| `_JITHandlingUnitHeader` | | ✓ | | | | |
| `_JITInboundCall` | | ✓ | | | | |
| `_JITBusTransDocType` | | ✓ | | | | |
| `_JITBusTransDocItemType` | | ✓ | | | | |
| `_JITInbCallComponent` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryDocumentItem` | `I_DeliveryDocumentItem` | [0..1] |
| `_JITHandlingUnitHeader` | `I_JITHandlingUnitHeader` | [1..1] |
| `_JITInboundCall` | `I_JITInboundCall` | [1..1] |
| `_JITBusTransDocType` | `I_JITBusTransDocType` | [0..1] |
| `_JITBusTransDocItemType` | `I_JITBusTransDocItemType` | [0..1] |

## Source Code

```abap
@AccessControl                          : { authorizationCheck      : #MANDATORY,
                                            personalData.blocking   : #REQUIRED }
@Analytics                              : { dataCategory            : #DIMENSION,
                                            internalName            : #LOCAL }
@EndUserText.label                      : 'JIT Inbound Call Component Document Ref'
@Metadata.allowExtensions               : true
@Metadata.ignorePropagatedAnnotations   : true
@ObjectModel                            : { modelingPattern         : #ANALYTICAL_DIMENSION,
                                            representativeKey       : 'JITDocRefUUID',
                                            sapObjectNodeType.name  : 'JITInbCallCompDocReference',
                                            supportedCapabilities   : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                            usageType               : { dataClass       : #TRANSACTIONAL,
                                                                        serviceQuality  : #A,
                                                                        sizeCategory    : #XXL }
                                          }
@VDM.viewType                           : #BASIC
define view entity I_JITInbCallCompDocReference
  as select from njit_call_d_dref

  association        to parent I_JITInbCallComponent as _JITInbCallComponent    on  $projection.JITCallComponentUUID = _JITInbCallComponent.JITCallComponentUUID

  association [0..1] to I_DeliveryDocumentItem       as _DeliveryDocumentItem   on  $projection.BusinessTransactionDocument = _DeliveryDocumentItem.DeliveryDocument
                                                                                and $projection.BusinessTransactionDocItem  = _DeliveryDocumentItem.DeliveryDocumentItem
  association [1..1] to I_JITHandlingUnitHeader      as _JITHandlingUnitHeader  on  $projection.BusinessTransactionDocument = _JITHandlingUnitHeader.HandlingUnitExternalID
                                                                                and $projection.BusinessTransactionDocType  = 'X'
  association [1..1] to I_JITInboundCall             as _JITInboundCall         on  $projection.JITHeaderUUID = _JITInboundCall.JITHeaderUUID
  association [0..1] to I_JITBusTransDocType         as _JITBusTransDocType     on  $projection.BusinessTransactionDocType = _JITBusTransDocType.BusinessTransactionDocType
  association [0..1] to I_JITBusTransDocItemType     as _JITBusTransDocItemType on  $projection.BusinessTransacDocItmTypeCode = _JITBusTransDocItemType.BusinessTransacDocItmTypeCode


{
  key db_key                     as JITDocRefUUID,
      @ObjectModel.foreignKey.association : '_JITInboundCall'
      root_key                   as JITHeaderUUID,
      @ObjectModel.foreignKey.association : '_JITInbCallComponent'
      parent_key                 as JITCallComponentUUID,
      int_call_num               as InternalJITCallNumber,
      comp_grp_num               as CompGrpNumber,
      call_item_num              as JITCallItemNumber,
      btd_type_code              as BusinessTransactionDocType,
      btd_id                     as BusinessTransactionDocument,
      btd_item_id                as BusinessTransactionDocItem,
      btd_item_type_code         as BusinessTransacDocItmTypeCode,
      btd_status                 as BusinessTransactionDocStatus,
      logsys                     as LogicalSystemID,
      lchg_date_time             as LastChangeDateTime,
      businesstransactiondocuuid as BusinessTransactionDocUUID,
      //associations
      _JITInbCallComponent,
      _DeliveryDocumentItem,
      _JITInboundCall,
      _JITHandlingUnitHeader,
      _JITBusTransDocType,
      _JITBusTransDocItemType
}
where
      _JITInboundCall.JITScenario = '1'
  and call_item_num               is not initial
```
