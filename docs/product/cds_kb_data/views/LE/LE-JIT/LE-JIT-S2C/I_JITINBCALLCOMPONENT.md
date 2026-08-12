---
name: I_JITINBCALLCOMPONENT
description: "Jitinbcallcomponent"
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_JITINBCALLCOMPONENT

**Jitinbcallcomponent**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallComponentUUID` | ✓ | |  | `db_key` |  |  |
| `JITHeaderUUID` |  | |  | `root_key` |  |  |
| `JITCallCompGrpUUID` |  | |  | `parent_key` |  |  |
| `InternalJITCallNumber` |  | |  | `int_call_num` |  |  |
| `CompGrpNumber` |  | |  | `comp_grp_num` |  |  |
| `JITCallItemNumber` |  | |  | `call_item_num` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `MaterialByCustomer` |  | |  | `kdmat` |  |  |
| `ExtJITCallItemNumber` |  | |  | `ext_call_item_num` |  |  |
| `SalesSchedulingAgreement` |  | |  | `vbeln` |  |  |
| `SalesSchedulingAgreementItem` |  | |  | `posnr` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `RequestedQuantity` |  | |  | `requested_quantity` |  |  |
| `ActualDeliveredQuantity` |  | |  | `delivered_quantity` |  |  |
| `IssuedQuantity` |  | |  | `issuedquantity` |  |  |
| `HandlingUnitQuantity` |  | |  | `handlingunitquantity` |  |  |
| `InvoicedQuantity` |  | |  | `invoicedquantity` |  |  |
| `QuantityUnit` |  | |  | `meins` |  |  |
| `JITCallCompMatlBackflushStatus` |  | |  | `jitcallcompmatlbackflushstatus` |  |  |
| `JITCallCompMatlBackflushType` |  | |  | `jitcallcompmatlbackflushtype` |  |  |
| `JITCallCompBackflushStsUpdtdOn` |  | |  | `jitcallcompbackflushstsupdtdon` |  |  |
| `VarianceReasonCode` |  | |  | `variancereasoncode` |  |  |
| `JITInbCallCompDelivConfStatus` |  | |  | `jitinbcallcompdelivconfstatus` |  |  |
| `JITDelivConfQuantity` |  | |  | `jitdelivconfquantity` |  |  |
| `_JITInbCallComponentGroup` | | ✓ | | | | |
| `_ProductCompMatl` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_JITBackflushStatus` | | ✓ | | | | |
| `_JITSerialNumbers` | | ✓ | | | | |
| `_SalesSchedgAgrmt` | | ✓ | | | | |
| `_SalesSchedgAgrmtItem` | | ✓ | | | | |
| `_JITCallHdrRefTextEnhcd` | | ✓ | | | | |
| `_JITCallCompGrpRefTextEnhcd` | | ✓ | | | | |
| `_JITCallCompMatlRefTextEnhcd` | | ✓ | | | | |
| `_JITBackflushType` | | ✓ | | | | |
| `_JITInbCallCompDlvConfSts` | | ✓ | | | | |
| `_JITInboundCall` | | ✓ | | | | |
| `_JITInbCallCompDocReference` | | ✓ | | | | |
| `_JITInbCallCompMessage` | | ✓ | | | | |
| `_JITInbCallCompRawMaterial` | | ✓ | | | | |
| `_JITInbCallCompRefText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITInbCallComponentGroup` | `I_JITInbCallComponentGroup` | [1..1] |
| `_ProductCompMatl` | `I_Product` | [1..1] |
| `_Division` | `I_Division` | [0..1] |
| `_JITBackflushStatus` | `I_JITBackflushStatus` | [0..1] |
| `_JITSerialNumbers` | `I_JITInbCallCompSerialNumber` | [0..*] |
| `_SalesSchedgAgrmt` | `I_SalesSchedgAgrmt` | [0..1] |
| `_SalesSchedgAgrmtItem` | `I_SalesSchedgAgrmtItem` | [0..1] |
| `_JITCallHdrRefTextEnhcd` | `I_JITCallHdrRefTextEnhcd` | [0..1] |
| `_JITCallCompGrpRefTextEnhcd` | `I_JITCallCompGrpRefTextEnhcd` | [0..1] |
| `_JITCallCompMatlRefTextEnhcd` | `I_JITCallCompMatlRefTextEnhcd` | [0..1] |
| `_JITBackflushType` | `I_JITBackflushType` | [0..1] |
| `_JITInbCallCompDlvConfSts` | `I_JITInbCallCompDlvConfSts` | [0..1] |
| `_Extension` | `E_JITInbCallComponent` | [1] |

## Source Code

```abap
@AccessControl                        : { authorizationCheck      : #MANDATORY,
                                          personalData.blocking   : #REQUIRED }
@Analytics                            : { dataCategory            : #DIMENSION,
                                          internalName            : #LOCAL }
@AbapCatalog.extensibility            : { allowNewDatasources     : false,
                                          dataSources             : ['_Extension'],
                                          extensible              : true,
                                          quota                   : { maximumFields : 500,
                                                                      maximumBytes  : 50000 }
                                        }
@EndUserText.label                    : 'JIT Inbound Call Component'
@Metadata.allowExtensions             : true
@Metadata.ignorePropagatedAnnotations : true
@ObjectModel                          : { modelingPattern         : #ANALYTICAL_DIMENSION,
                                          representativeKey       : 'JITCallComponentUUID',
                                          sapObjectNodeType.name  : 'JITInbCallComponent',
                                          supportedCapabilities   : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                          usageType               : { dataClass       : #TRANSACTIONAL,
                                                                      serviceQuality  : #A,
                                                                      sizeCategory    : #XXL }
                                        }
@VDM.viewType                         : #BASIC

define view entity I_JITInbCallComponent
  as select from njit_call_d_cmat

  composition [0..*] of I_JITInbCallCompDocReference  as _JITInbCallCompDocReference
  composition [0..*] of I_JITInbCallCompMessage       as _JITInbCallCompMessage
  composition [0..*] of I_JITInbCallCompRawMaterial   as _JITInbCallCompRawMaterial
  composition [0..*] of I_JITInbCallCompRefText       as _JITInbCallCompRefText

  association        to parent I_JITInboundCall       as _JITInboundCall              on  $projection.JITHeaderUUID = _JITInboundCall.JITHeaderUUID

  association [1..1] to I_JITInbCallComponentGroup    as _JITInbCallComponentGroup    on  $projection.JITCallCompGrpUUID = _JITInbCallComponentGroup.JITCallCompGrpUUID
  association [1..1] to I_Product                     as _ProductCompMatl             on  $projection.Material = _ProductCompMatl.Product
  association [0..1] to I_Division                    as _Division                    on  $projection.Division = _Division.Division
  association [0..1] to I_JITBackflushStatus          as _JITBackflushStatus          on  $projection.JITCallCompMatlBackflushStatus = _JITBackflushStatus.JITBackflushStatus
  association [0..*] to I_JITInbCallCompSerialNumber  as _JITSerialNumbers            on  $projection.InternalJITCallNumber = _JITSerialNumbers.InternalJITCallNumber
                                                                                      and $projection.CompGrpNumber         = _JITSerialNumbers.CompGrpNumber
                                                                                      and $projection.Material              = _JITSerialNumbers.Material
  association [0..1] to I_SalesSchedgAgrmt            as _SalesSchedgAgrmt            on  $projection.SalesSchedulingAgreement = _SalesSchedgAgrmt.SalesSchedulingAgreement
  association [0..1] to I_SalesSchedgAgrmtItem        as _SalesSchedgAgrmtItem        on  $projection.SalesSchedulingAgreement     = _SalesSchedgAgrmtItem.SalesSchedulingAgreement
                                                                                      and $projection.SalesSchedulingAgreementItem = _SalesSchedgAgrmtItem.SalesSchedulingAgreementItem
  association [0..1] to I_JITCallHdrRefTextEnhcd      as _JITCallHdrRefTextEnhcd      on  $projection.JITHeaderUUID = _JITCallHdrRefTextEnhcd.JITObjectUUID
  association [0..1] to I_JITCallCompGrpRefTextEnhcd  as _JITCallCompGrpRefTextEnhcd  on  $projection.JITCallCompGrpUUID = _JITCallCompGrpRefTextEnhcd.JITObjectUUID
  association [0..1] to I_JITCallCompMatlRefTextEnhcd as _JITCallCompMatlRefTextEnhcd on  $projection.JITCallComponentUUID = _JITCallCompMatlRefTextEnhcd.JITObjectUUID
  association [0..1] to I_JITBackflushType            as _JITBackflushType            on  $projection.JITCallCompMatlBackflushType = _JITBackflushType.JITBackflushType
  association [0..1] to I_JITInbCallCompDlvConfSts    as _JITInbCallCompDlvConfSts    on  $projection.JITInbCallCompDelivConfStatus = _JITInbCallCompDlvConfSts.JITCompDelivConfStatus
  association [1]    to E_JITInbCallComponent         as _Extension                   on  $projection.JITCallComponentUUID = _Extension.JITCallComponentUUID

{
  key db_key                         as JITCallComponentUUID,
      root_key                       as JITHeaderUUID,
      parent_key                     as JITCallCompGrpUUID,
      int_call_num                   as InternalJITCallNumber,
      comp_grp_num                   as CompGrpNumber,
      call_item_num                  as JITCallItemNumber,
      @ObjectModel.foreignKey.association : '_ProductCompMatl'
      matnr                          as Material,
      kdmat                          as MaterialByCustomer,
      ext_call_item_num              as ExtJITCallItemNumber,
      @ObjectModel.foreignKey.association : '_SalesSchedgAgrmt'
      vbeln                          as SalesSchedulingAgreement,
      @ObjectModel.foreignKey.association : '_SalesSchedgAgrmtItem'
      posnr                          as SalesSchedulingAgreementItem,
      @ObjectModel.foreignKey.association : '_Division'
      spart                          as Division,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      requested_quantity             as RequestedQuantity,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      delivered_quantity             as ActualDeliveredQuantity,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      issuedquantity                 as IssuedQuantity,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      handlingunitquantity           as HandlingUnitQuantity,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      invoicedquantity               as InvoicedQuantity,
      meins                          as QuantityUnit,
      @ObjectModel.foreignKey.association : '_JITBackflushStatus'
      jitcallcompmatlbackflushstatus as JITCallCompMatlBackflushStatus,
      @ObjectModel.foreignKey.association:'_JITBackflushType'
      jitcallcompmatlbackflushtype   as JITCallCompMatlBackflushType,
      jitcallcompbackflushstsupdtdon as JITCallCompBackflushStsUpdtdOn,
      variancereasoncode             as VarianceReasonCode,
      @ObjectModel.foreignKey.association: '_JITInbCallCompDlvConfSts'
      jitinbcallcompdelivconfstatus  as JITInbCallCompDelivConfStatus,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      jitdelivconfquantity           as JITDelivConfQuantity,
      //Associations
      _ProductCompMatl,
      _Division,
      _JITInbCallComponentGroup,
      _JITInboundCall,
      _JITInbCallCompDocReference,
      _JITInbCallCompMessage,
      _JITInbCallCompRawMaterial,
      _JITInbCallCompRefText,
      _JITBackflushStatus,
      _JITBackflushType,
      _JITSerialNumbers,
      _SalesSchedgAgrmt,
      _SalesSchedgAgrmtItem,
      _JITCallHdrRefTextEnhcd,
      _JITCallCompGrpRefTextEnhcd,
      _JITCallCompMatlRefTextEnhcd,
      _JITInbCallCompDlvConfSts
}
where
  _JITInboundCall.JITScenario = '1'
```
