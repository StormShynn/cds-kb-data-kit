---
name: I_SALESSCHEDGAGRMTDELIVSCHED
description: "Salesschedgagrmtdelivsched"
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SALESSCHEDGAGRMTDELIVSCHED

**Salesschedgagrmtdelivsched**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesSchedulingAgreement` | ✓ | |  | `vbeln` |  |  |
| `SalesSchedulingAgreementItem` | ✓ | |  | `posnr` |  |  |
| `IntDeliveryScheduleNumber` | ✓ | |  | `abrli` |  |  |
| `SchedulingAgreementReleaseType` | ✓ | |  | `abart` |  |  |
| `CumulativeReceiptQuantity` |  | |  | `abefz` |  |  |
| `DeliveryScheduleStartDate` |  | |  | `abrab` |  |  |
| `DeliveryScheduleEndDate` |  | |  | `abrbi` |  |  |
| `CustomerDeliveryScheduleNumber` |  | |  | `cast(vblb.labnk as sd_schedg_agrmt_delivery_sched preserving type )` |  |  |
| `DeliveryScheduleDate` |  | |  | `abrdt` |  |  |
| `ScheduleLineDateKey` |  | |  | `cast(vblb.tersl as sd_schedg_agrmt_rel_date_key preserving type )` |  |  |
| `LastDeliveryDocPostingDate` |  | |  | `cast(vblb.lfdkd as sd_schedg_agrmt_last_dlv_date preserving type )` |  |  |
| `LastDeliveryDocument` |  | |  | `cast(vblb.lfnkd as sd_schedg_agrmt_last_delivery preserving type )` |  |  |
| `LastIntDeliveryScheduleNumber` |  | |  | `ablli` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreationTime` |  | |  | `erzei` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `LastDeliveryNoteSentByExtAgt` |  | |  | `edlls` |  |  |
| `LastDeliveryNoteSentDate` |  | |  | `edldt` |  |  |
| `JITHorizonEndDate` |  | |  | `cast(vblb.abhor as sd_schedg_agrmt_jit_horizon preserving type )` |  |  |
| `CustomerFiscalYear` |  | |  | `cast(vblb.gjkun as sd_schedg_agrmt_cust_fscl_yr preserving type )` |  |  |
| `PreviousCustomerFiscalYear` |  | |  | `cast(vblb.vjkun as sd_schedg_agrmt_cust_fscl_yr preserving type )` |  |  |
| `RequirementsStatusKey` |  | |  | `labky` |  |  |
| `LastReceiptQuantity` |  | |  | `lfmkd` |  |  |
| `SalesQtyToBaseQtyNmrtr` |  | |  | `umvkz` |  |  |
| `SalesQtyToBaseQtyDnmntr` |  | |  | `umvkn` |  |  |
| `DelivSchedFreeDefinedAttrib01` |  | |  | `usr01` |  |  |
| `DelivSchedFreeDefinedAttrib02` |  | |  | `usr02` |  |  |
| `DelivSchedFreeDefinedAttrib03` |  | |  | `usr03` |  |  |
| `DelivSchedFreeDefinedAttrib04` |  | |  | `usr04` |  |  |
| `DelivSchedFreeDefinedAttrib05` |  | |  | `usr05` |  |  |
| `DeliveryScheduleCreationDate` |  | |  | `abrdt_org` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `ProdnGoAheadPeriodStartDate` |  | |  | `abfda` |  |  |
| `ProductionGoAheadPeriodEndDate` |  | |  | `abfde` |  |  |
| `MaterialGoAheadPeriodStartDate` |  | |  | `abmda` |  |  |
| `MaterialGoAheadPeriodEndDate` |  | |  | `abmde` |  |  |
| `CustomerPointOfConsumption` |  | |  | `vbrst` |  |  |
| `CustRcvdCumltvQtyByFsclYrChg` |  | |  | `cyefz` |  |  |
| `CumltvQtyFsclYearRsetDate` |  | |  | `cydat` |  |  |
| `MatlGoAheadValidityPeriod` |  | |  | `mflauf` |  |  |
| `MatlGoAheadValidityPeriodUnit` |  | |  | `mfein` |  |  |
| `ProdnGoAheadValidityPeriod` |  | |  | `fflauf` |  |  |
| `ProdnGoAheadValidityPeriodUnit` |  | |  | `ffein` |  |  |
| `HghstDelivGoAheadCumltvQty` |  | |  | `hilfz` |  |  |
| `ActlMatlGoAheadCumltvQty` |  | |  | `akmfz` |  |  |
| `ActlProdnGoAheadCumltvQty` |  | |  | `akffz` |  |  |
| `ActlDelivGoAheadCumltvQty` |  | |  | `aklfz` |  |  |
| `HighPriorityStockKey` |  | |  | `kritb` |  |  |
| `HghstMatlGoAheadCumltvQty` |  | |  | `himfz` |  |  |
| `OrderQuantityUnit` |  | |  | `vrkme` |  |  |
| `_SalesSchedgAgrmt` | | ✓ | | | | |
| `_SalesSchedgAgrmtItem` | | ✓ | | | | |
| `_SalesSchedgAgrmtSchdLnHist` | | ✓ | | | | |
| `_SalesSchedgAgrmtSchedLine` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_SalesSchedgAgrmtRelType` | | ✓ | | | | |
| `_ScheduleLineDateKey` | | ✓ | | | | |
| `_PartDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesSchedgAgrmt` | `I_SalesSchedgAgrmt` | [1..1] |
| `_SalesSchedgAgrmtItem` | `I_SalesSchedgAgrmtItem` | [1..1] |
| `_SalesSchedgAgrmtSchdLnHist` | `I_SalesSchedgAgrmtSchdLnHist` | [0..*] |
| `_SalesSchedgAgrmtSchedLine` | `I_SalesSchedgAgrmtSchedLine` | [0..*] |
| `_OrderQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SalesSchedgAgrmtRelType` | `I_SalesSchedgAgrmtRelType` | [0..1] |
| `_ScheduleLineDateKey` | `I_ScheduleLineDateKey` | [0..1] |
| `_PartDesc` | `I_SlsSchedgAgrmtPartDesc` | [0..1] |
| `_Extension` | `E_SalesSchedgAgrmtDelivSched` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Delivery Schedule of Sales Scheduling Agreement'
@VDM: {
  viewType:#BASIC
}
@AbapCatalog: {
  sqlViewName: 'ISDSCHDGAGRMTDS',
  compiler.compareFilter: true ,
  preserveKey: true
}
@ObjectModel: {
representativeKey: 'IntDeliveryScheduleNumber',
usageType: {
  dataClass:      #TRANSACTIONAL,
  serviceQuality: #B,
  sizeCategory:   #XL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE],
  modelingPattern: #ANALYTICAL_DIMENSION
}
@AccessControl: {
authorizationCheck:#CHECK,
personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@ObjectModel.sapObjectNodeType.name: 'SalesSchedgAgrmtDelivSched'

define view I_SalesSchedgAgrmtDelivSched
  as select from           vblb
    left outer to one join vbap on  vbap.vbeln = vblb.vbeln
                                and vbap.posnr = vblb.posnr
  association [1..1] to I_SalesSchedgAgrmt           as _SalesSchedgAgrmt           on  $projection.SalesSchedulingAgreement = _SalesSchedgAgrmt.SalesSchedulingAgreement
  association [1..1] to I_SalesSchedgAgrmtItem       as _SalesSchedgAgrmtItem       on  $projection.SalesSchedulingAgreement     = _SalesSchedgAgrmtItem.SalesSchedulingAgreement
                                                                                    and $projection.SalesSchedulingAgreementItem = _SalesSchedgAgrmtItem.SalesSchedulingAgreementItem
  association [0..*] to I_SalesSchedgAgrmtSchdLnHist as _SalesSchedgAgrmtSchdLnHist on  $projection.SalesSchedulingAgreementItem   = _SalesSchedgAgrmtSchdLnHist.SalesSchedulingAgreementItem
                                                                                    and $projection.SalesSchedulingAgreement       = _SalesSchedgAgrmtSchdLnHist.SalesSchedulingAgreement
                                                                                    and $projection.IntDeliveryScheduleNumber      = _SalesSchedgAgrmtSchdLnHist.IntDeliveryScheduleNumber
                                                                                    and $projection.SchedulingAgreementReleaseType = _SalesSchedgAgrmtSchdLnHist.SchedulingAgreementReleaseType
  association [0..*] to I_SalesSchedgAgrmtSchedLine  as _SalesSchedgAgrmtSchedLine  on  $projection.SalesSchedulingAgreementItem   = _SalesSchedgAgrmtSchedLine.SalesSchedulingAgreementItem
                                                                                    and $projection.SalesSchedulingAgreement       = _SalesSchedgAgrmtSchedLine.SalesSchedulingAgreement
                                                                                    and $projection.SchedulingAgreementReleaseType = _SalesSchedgAgrmtSchedLine.SchedulingAgreementReleaseType
  association [0..1] to I_UnitOfMeasure              as _OrderQuantityUnit          on  $projection.OrderQuantityUnit = _OrderQuantityUnit.UnitOfMeasure
  association [0..1] to I_SalesSchedgAgrmtRelType    as _SalesSchedgAgrmtRelType    on  $projection.SchedulingAgreementReleaseType = _SalesSchedgAgrmtRelType.SchedulingAgreementReleaseType
  association [0..1] to I_ScheduleLineDateKey        as _ScheduleLineDateKey        on  $projection.ScheduleLineDateKey = _ScheduleLineDateKey.ScheduleLineDateKey
  association [0..1] to I_SlsSchedgAgrmtPartDesc     as _PartDesc                   on  $projection.SalesSchedulingAgreement     = _PartDesc.SalesSchedulingAgreement
                                                                                    and $projection.SalesSchedulingAgreementItem = _PartDesc.SalesSchedulingAgreementItem
  association [0..1] to E_SalesSchedgAgrmtDelivSched as _Extension                  on  $projection.SalesSchedulingAgreement       = _Extension.SalesSchedulingAgreement
                                                                                    and $projection.SalesSchedulingAgreementItem   = _Extension.SalesSchedulingAgreementItem
                                                                                    and $projection.IntDeliveryScheduleNumber      = _Extension.IntDeliveryScheduleNumber
                                                                                    and $projection.SchedulingAgreementReleaseType = _Extension.SchedulingAgreementReleaseType

{

       // Key
       @ObjectModel.foreignKey.association: '_SalesSchedgAgrmt'
  key  vblb.vbeln                                                           as SalesSchedulingAgreement,
       @ObjectModel.foreignKey.association: '_SalesSchedgAgrmtItem'
  key  vblb.posnr                                                           as SalesSchedulingAgreementItem,
  key  vblb.abrli                                                           as IntDeliveryScheduleNumber,
       @ObjectModel.foreignKey.association: '_SalesSchedgAgrmtRelType'
  key  vblb.abart                                                           as SchedulingAgreementReleaseType,
       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       vblb.abefz                                                           as CumulativeReceiptQuantity,
       vblb.abrab                                                           as DeliveryScheduleStartDate,
       vblb.abrbi                                                           as DeliveryScheduleEndDate,

       cast(vblb.labnk as sd_schedg_agrmt_delivery_sched  preserving type ) as CustomerDeliveryScheduleNumber,
       vblb.abrdt                                                           as DeliveryScheduleDate,
       @ObjectModel.foreignKey.association: '_ScheduleLineDateKey'
       cast(vblb.tersl as sd_schedg_agrmt_rel_date_key preserving type )    as ScheduleLineDateKey,
       cast(vblb.lfdkd as sd_schedg_agrmt_last_dlv_date preserving type )   as LastDeliveryDocPostingDate,
       cast(vblb.lfnkd as sd_schedg_agrmt_last_delivery preserving type )   as LastDeliveryDocument,
       vblb.ablli                                                           as LastIntDeliveryScheduleNumber,

       //Administrator
       @Semantics.systemDate.createdAt: true
       vblb.erdat                                                           as CreationDate,
       vblb.erzei                                                           as CreationTime,
       vblb.ernam                                                           as CreatedByUser,

       //Consignment
       vblb.edlls                                                           as LastDeliveryNoteSentByExtAgt,
       vblb.edldt                                                           as LastDeliveryNoteSentDate,

       cast(vblb.abhor as sd_schedg_agrmt_jit_horizon preserving type )     as JITHorizonEndDate,
       cast(vblb.gjkun  as sd_schedg_agrmt_cust_fscl_yr preserving type )   as CustomerFiscalYear,
       cast(vblb.vjkun  as sd_schedg_agrmt_cust_fscl_yr preserving type )   as PreviousCustomerFiscalYear,
       vblb.labky                                                           as RequirementsStatusKey,
       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       vblb.lfmkd                                                           as LastReceiptQuantity,
       vblb.umvkz                                                           as SalesQtyToBaseQtyNmrtr,
       vblb.umvkn                                                           as SalesQtyToBaseQtyDnmntr,
       vblb.usr01                                                           as DelivSchedFreeDefinedAttrib01,
       vblb.usr02                                                           as DelivSchedFreeDefinedAttrib02,
       vblb.usr03                                                           as DelivSchedFreeDefinedAttrib03,
       vblb.usr04                                                           as DelivSchedFreeDefinedAttrib04,
       vblb.usr05                                                           as DelivSchedFreeDefinedAttrib05,
       vblb.abrdt_org                                                       as DeliveryScheduleCreationDate,
       @Semantics.systemDate.lastChangedAt: true
       vblb.aedat                                                           as LastChangeDate,
       vblb.abfda                                                           as ProdnGoAheadPeriodStartDate,
       vblb.abfde                                                           as ProductionGoAheadPeriodEndDate,
       vblb.abmda                                                           as MaterialGoAheadPeriodStartDate,
       vblb.abmde                                                           as MaterialGoAheadPeriodEndDate,
       vblb.vbrst                                                           as CustomerPointOfConsumption,
       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       vblb.cyefz                                                           as CustRcvdCumltvQtyByFsclYrChg,
       vblb.cydat                                                           as CumltvQtyFsclYearRsetDate,
       vblb.mflauf                                                          as MatlGoAheadValidityPeriod,
       vblb.mfein                                                           as MatlGoAheadValidityPeriodUnit,
       vblb.fflauf                                                          as ProdnGoAheadValidityPeriod,
       vblb.ffein                                                           as ProdnGoAheadValidityPeriodUnit,
       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       vblb.hilfz                                                           as HghstDelivGoAheadCumltvQty,
       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       vblb.akmfz                                                           as ActlMatlGoAheadCumltvQty,
       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       vblb.akffz                                                           as ActlProdnGoAheadCumltvQty,
       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       vblb.aklfz                                                           as ActlDelivGoAheadCumltvQty,
       vblb.kritb                                                           as HighPriorityStockKey,
       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       vblb.himfz                                                           as HghstMatlGoAheadCumltvQty,
       @Semantics.unitOfMeasure: true
       @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
       vbap.vrkme                                                           as OrderQuantityUnit,

       //Association
       @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
       _SalesSchedgAgrmt,
       @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
       _SalesSchedgAgrmtItem,
       @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
       _SalesSchedgAgrmtSchdLnHist,
       @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
       _SalesSchedgAgrmtSchedLine,
       _ScheduleLineDateKey,
       _OrderQuantityUnit,
       _SalesSchedgAgrmtRelType,
       _PartDesc
       
}
```
