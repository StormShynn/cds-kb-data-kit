---
name: I_KANBANCONTROLCYCLE
description: Kanbancontrolcycle
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCONTROLCYCLE

**Kanbancontrolcycle**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `KanbanControlCycle` | ✓ | |  | `cast(pkhd.pknum as vdm_pknum preserving type)` |
| `KanbanControlCycleCategory` |  | |  | `cast(pkhd.rksta as vdm_rkstat preserving type)` |
| `Product` |  | |  | `cast(pkhd.matnr as productnumber preserving type)` |
| `Plant` |  | |  | `cast(pkhd.werks as vdm_werks_d preserving type)` |
| `ProductionVersion` |  | |  | `cast(pkhd.verid as vdm_verid preserving type)` |
| `ProductionSupplyArea` |  | |  | `cast(pkhd.prvbe as vdm_prvbe preserving type)` |
| `SupplySourceResponsiblePerson` |  | |  | `cast(pkhd.rgver as vdm_quver preserving type)` |
| `StorageLocation` |  | |  | `cast(pkhd.umlgo as pph_lgort preserving type)` |
| `StoringPositionName` |  | |  | `ablad` |
| `KanbanContainerDeliveryAddress` |  | |  | `cast(pkhd.pkadr as pph_pkadr preserving type)` |
| `ProductCostCollector` |  | |  | `cast(pkhd.pkosa as vdm_pkosa_d preserving type)` |
| `Supplier` |  | |  | `lifnr` |
| `PurchasingOrganization` |  | |  | `cast(pkhd.ekorg as pph_ekorg preserving type)` |
| `PurchaseOutlineAgreement` |  | |  | `ebeln` |
| `PurchaseOutlineAgreementItem` |  | |  | `cast(pkhd.ebelp as vdm_evrtp preserving type)` |
| `Warehouse` |  | |  | `cast(pkhd.lgnum as vdm_lgnum preserving type)` |
| `StorageType` |  | |  | `cast(pkhd.lgtyp as vdm_lgtyp preserving type)` |
| `StorageBin` |  | |  | `cast(pkhd.lgpla as vdm_lgpla preserving type)` |
| `BaseUnit` |  | |  | `cast(pkhd.meins as vdm_meins preserving type)` |
| `KanbanContainerQuantityInBsUnt` |  | |  | `cast(pkhd.behmg as vdm_behmg preserving type)` |
| `NumberOfKanbanContainers` |  | |  | `cast(pkhd.behaz as vdm_behaz preserving type)` |
| `MaxNrOfEmptyKanbanContainers` |  | |  | `cast(pkhd.sigaz as vdm_sigaz preserving type)` |
| `InHouseProductionReplnmtStrgy` |  | |  | `cast(pkhd.pkste as vdm_pkste preserving type)` |
| `MaterialStaging` |  | |  | `cast(pkhd.berkz as vdm_berkz preserving type)` |
| `DestinationBinIsDynamic` |  | |  | `cast(pkhd.nkdyn as vdm_t333_nkdyn preserving type)` |
| `ExtProcurementReplnmtStrgy` |  | |  | `cast(pkhd.pkstf as vdm_pkstf preserving type)` |
| `StockTransferReplnmtStrategy` |  | |  | `cast(pkhd.pkstu as vdm_pkstu preserving type)` |
| `ReplnmtIsCtrldBySupplySource` |  | |  | `cast(pkhd.answb as vdm_answb preserving type)` |
| `KanbanContainerPackggProduct` |  | |  | `cast(pkhd.pkbht as vdm_pkbht preserving type)` |
| `SeparateGRIsNeededIfSetToFull` |  | |  | `cast(pkhd.qufkt as vdm_qufkt preserving type)` |
| `CostCenter` |  | |  | `cast(pkhd.kostl as vdm_kostl preserving type)` |
| `SupplySourcePlant` |  | |  | `cast(pkhd.pkumw as vdm_pkumw preserving type)` |
| `KanbanContainerStatusSequence` |  | |  | `cast(pkhd.pksfg as vdm_pksfg preserving type)` |
| `KanbanCtnReplnmtTriggerLogic` |  | |  | `cast(pkhd.pklog as vdm_pklog preserving type)` |
| `KnbnCtnReplnmtTrggrQtyInBsUnt` |  | |  | `cast(pkhd.alsmg as vdm_alsmg preserving type)` |
| `KanbanContainerCalculationType` |  | |  | `cast(pkhd.kcart as vdm_kcart preserving type)` |
| `KanbanCtnCalcSafetyFactor` |  | |  | `cast(pkhd.kcsaf as vdm_kcsaf preserving type)` |
| `KanbanCtnCalculationConstant` |  | |  | `cast(pkhd.kccon as vdm_kccon preserving type)` |
| `KanbanCtnRoundingQtyInBsUnt` |  | |  | `cast(pkhd.pkrmg as vdm_pkrmg preserving type)` |
| `FixedKanbanContainerQtyInBsUnt` |  | |  | `cast(pkhd.pkfmg as vdm_pkfmg preserving type)` |
| `KanbanContainerCalcProfile` |  | |  | `cast(pkhd.kcprf as vdm_kcprf preserving type)` |
| `ReplnmtLeadTimeInWorkdays` |  | |  | `cast(pkhd.kwbzd as vdm_kwbzd preserving type)` |
| `ReplnmtLeadTimeInHoursAndMins` |  | |  | `cast(pkhd.kwbzm as vdm_kwbzm preserving type)` |
| `SalesSchedulingAgreement` |  | |  | `cast(pkhd.vbeln as vdm_vbeln_pk preserving type)` |
| `SalesSchedulingAgreementItem` |  | |  | `cast(pkhd.vbelp as vdm_vbelp_pk preserving type)` |
| `SourceProductionSupplyArea` |  | |  | `cast(pkhd.qupvb as vdm_qupvb preserving type)` |
| `JITCallProfile` |  | |  | `cast(pkhd.pabprf as vdm_pabprf preserving type)` |
| `PackingInstruction` |  | |  | `cast(pkhd.packv as vdm_pl_packnr preserving type)` |
| `NumberOfLoadCarriers` |  | |  | `cast(pkhd.anzlt as vdm_anzlt preserving type)` |
| `BackflushReportingPoint` |  | |  | `cast(pkhd.zpunkt as vdm_sa_zpunkt preserving type)` |
| `KanbanCtrlCycleLifeCycleStatus` |  | |  | `cast(pkhd.lcm_status as vdm_lcm_status preserving type)` |
| `CreationDate` |  | |  | `cast(pkhd.cre_date as vdm_cre_date preserving type)` |
| `ReleaseDate` |  | |  | `cast(pkhd.rls_date as vdm_rls_date preserving type)` |
| `LockDate` |  | |  | `obs_date` |
| `PullIntervalInWorkdays` |  | |  | `cast(pkhd.pintvd as vdm_pintvd preserving type)` |
| `PullIntervalInHoursAndMinutes` |  | |  | `cast(pkhd.pintvm as vdm_pintvm preserving type)` |
| `KanbanCtnRefillTimeInDays` |  | |  | `cast(pkhd.knfzd as vdm_knfzd preserving type)` |
| `KanbanCtnRefillTmeInHrsAndMins` |  | |  | `cast(pkhd.knfzm as vdm_knfzm preserving type)` |
| `KanbanCtnWaitTimeInDays` |  | |  | `cast(pkhd.kwtzd as vdm_kwtzd preserving type)` |
| `KanbanCtnWaitTimeInHrsAndMins` |  | |  | `cast(pkhd.kwtzm as vdm_kwtzm preserving type)` |
| `KanbanCtnTransportTimeInDays` |  | |  | `cast(pkhd.kitzd as vdm_kitzd preserving type)` |
| `KnbnCtnTransptTmeInHrsAndMins` |  | |  | `cast(pkhd.kitzm as vdm_kitzm preserving type)` |
| `KnbnCtnCalcRqmtBufferInPercent` |  | |  | `cast(pkhd.kdmbuf as vdm_kdmbuf preserving type)` |
| `KnbnCtnCalcSupplySrceBufInPct` |  | |  | `cast(pkhd.kspbuf as vdm_kspbuf preserving type)` |
| `NrOfKanbanCtnsFlaggedToUnlock` |  | |  | `cast(pkhd.ntrel as vdm_ntrel preserving type)` |
| `NrOfWaitingKnbnCtnsBfrReplnmt` |  | |  | `trigaz` |
| `KanbanCtrlCycReplnmtTriggerGrp` |  | |  | `triggr` |
| `PlanningWorkCenter` |  | |  | `capa_wrkct` |
| `ProductionOrdersAreCombined` |  | |  | `cast(pkhd.fazus as vdm_fazus preserving type)` |
| `EWMWarehouse` |  | |  | `lgnum_ewm` |
| `DestinationStorageBin` |  | |  | `nlpla` |
| `SourceStorageBin` |  | |  | `vlpla` |
| `WarehouseProcessType` |  | |  | `prcty` |
| `KanbanCardPrintControl` |  | |  | `pkdrs` |
| `ProdnSupplySpoolOutputDevice` |  | |  | `cast(pkhd.vbprn as rspopshort preserving type)` |
| `KanbanCardPrintQueue` |  | |  | `cast(pkhd.vbque as vdm_kanbancardprintqueue preserving type)` |
| `ControlCyclePrintQueue` |  | |  | `cast(pkhd.cc_print_queue as vdm_controlcycleprintqueue preserving type)` |
| `KanbanCardFormTemplate` |  | |  | `cast(pkhd.kbform as vdm_kanbancardformtemplate preserving type)` |
| `ControlCycleSAPScriptForm` |  | |  | `rkform` |
| `ControlCyclePrintFormTemplate` |  | |  | `cast(pkhd.cc_print_form as vdm_controlcycleformtemplate preserving type)` |
| `LastChangeDateTime` |  | |  | `cast(pkhd.lastchange_datetime as vdm_lastchangedatetime preserving type)` |
| `_KanbanControlCycleCategory` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_ProductionVersion` | | ✓ | | |
| `_ProductionSupplyArea` | | ✓ | | |
| `_ResponsiblePerson` | | ✓ | | |
| `_StorageLocation` | | ✓ | | |
| `_Address` | | ✓ | | |
| `_ProductCostCollector` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_PurchasingOrganization` | | ✓ | | |
| `_PurchasingDocument` | | ✓ | | |
| `_PurchasingDocumentItem` | | ✓ | | |
| `_Warehouse` | | ✓ | | |
| `_BaseUnit` | | ✓ | | |
| `_SupplierCompanyByPlant` | | ✓ | | |
| `_KnbnControlCycLifeCycSts` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KanbanControlCycleCategory` | `I_KanbanControlCycleCategory` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProductionVersion` | `I_ProductionVersion` | [0..1] |
| `_ProductionSupplyArea` | `I_ProductionSupplyArea` | [0..1] |
| `_ResponsiblePerson` | `I_MRPController` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Address` | `I_OrganizationAddress` | [0..1] |
| `_ProductCostCollector` | `I_ProductCostCtrlgOrder` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_PurchasingDocument` | `I_PurchasingDocument` | [0..1] |
| `_PurchasingDocumentItem` | `I_PurchasingDocumentItem` | [0..1] |
| `_Warehouse` | `I_Warehouse` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [1..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |
| `_KnbnControlCycLifeCycSts` | `I_KnbnControlCycLifeCycSts` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKANBANCC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations: ['_ResponsiblePerson', '_ProductionSupplyArea']

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

@ObjectModel.representativeKey: 'KanbanControlCycle'
@ObjectModel.semanticKey: 'KanbanControlCycle'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@EndUserText.label: 'Kanban Control Cycle' 

define view I_KanbanControlCycle
  as select from pkhd as pkhd
  association [0..1] to I_KanbanControlCycleCategory as _KanbanControlCycleCategory   on  $projection.KanbanControlCycleCategory = _KanbanControlCycleCategory.KanbanControlCycleCategory
  association [0..1] to I_Product                    as _Product                      on  $projection.Product = _Product.Product
  association [1..1] to I_Plant                      as _Plant                        on  $projection.Plant = _Plant.Plant
  association [0..1] to I_ProductionVersion          as _ProductionVersion            on  $projection.Product           = _ProductionVersion.Material
                                                                                      and $projection.Plant             = _ProductionVersion.Plant
                                                                                      and $projection.ProductionVersion = _ProductionVersion.ProductionVersion
  association [0..1] to I_ProductionSupplyArea       as _ProductionSupplyArea         on  $projection.Plant                = _ProductionSupplyArea.Plant
                                                                                      and $projection.ProductionSupplyArea = _ProductionSupplyArea.ProductionSupplyArea
  association [0..1] to I_MRPController              as _ResponsiblePerson            on  $projection.Plant                         = _ResponsiblePerson.Plant
                                                                                      and $projection.SupplySourceResponsiblePerson = _ResponsiblePerson.MRPController
  association [0..1] to I_StorageLocation            as _StorageLocation              on  $projection.Plant           = _StorageLocation.Plant
                                                                                      and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_OrganizationAddress        as _Address                      on  $projection.KanbanContainerDeliveryAddress = _Address.AddressID
                                                                                      and _Address.AddressPersonID is initial
                                                                                      and _Address.AddressRepresentationCode is initial
  association [0..1] to I_ProductCostCtrlgOrder      as _ProductCostCollector         on  $projection.ProductCostCollector = _ProductCostCollector.OrderID
  association [0..1] to I_Supplier                   as _Supplier                     on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_PurchasingOrganization     as _PurchasingOrganization       on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [0..1] to I_PurchasingDocument         as _PurchasingDocument           on  $projection.PurchaseOutlineAgreement = _PurchasingDocument.PurchasingDocument
  association [0..1] to I_PurchasingDocumentItem     as _PurchasingDocumentItem       on  $projection.PurchaseOutlineAgreement     = _PurchasingDocumentItem.PurchasingDocument
                                                                                      and $projection.PurchaseOutlineAgreementItem = _PurchasingDocumentItem.PurchasingDocumentItem
  association [0..1] to I_Warehouse                  as _Warehouse                    on  $projection.Warehouse = _Warehouse.Warehouse
  association [1..1] to I_UnitOfMeasure              as _BaseUnit                     on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure

  association [0..1] to I_SupplierCompanyByPlant     as _SupplierCompanyByPlant       on  $projection.Supplier = _SupplierCompanyByPlant.Supplier
                                                                                      and $projection.Plant    = _SupplierCompanyByPlant.Plant
  association [0..1] to I_KnbnControlCycLifeCycSts   as _KnbnControlCycLifeCycSts     on  $projection.KanbanCtrlCycleLifeCycleStatus = _KnbnControlCycLifeCycSts.KanbanCtrlCycleLifeCycleStatus
{
      // Key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(pkhd.pknum as vdm_pknum preserving type)                            as KanbanControlCycle,

      // Assignments
      @ObjectModel.foreignKey.association: '_KanbanControlCycleCategory'
      cast(pkhd.rksta as vdm_rkstat preserving type)                           as KanbanControlCycleCategory,
      @ObjectModel.foreignKey.association: '_Product'
      cast(pkhd.matnr as productnumber preserving type)                        as Product,
      @ObjectModel.foreignKey.association: '_Plant'
      cast(pkhd.werks as vdm_werks_d preserving type)                          as Plant,
      @ObjectModel.foreignKey.association: '_ProductionVersion'
      cast(pkhd.verid as vdm_verid preserving type)                            as ProductionVersion,
      @ObjectModel.foreignKey.association: '_ProductionSupplyArea'
      cast(pkhd.prvbe as vdm_prvbe preserving type)                            as ProductionSupplyArea,
      @ObjectModel.foreignKey.association: '_ResponsiblePerson'
      cast(pkhd.rgver as vdm_quver preserving type)                            as SupplySourceResponsiblePerson,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      cast(pkhd.umlgo as pph_lgort preserving type)                            as StorageLocation,
      @Semantics.text: true
      pkhd.ablad                                                               as StoringPositionName,
      @ObjectModel.foreignKey.association: '_Address'
      cast(pkhd.pkadr as pph_pkadr preserving type)                            as KanbanContainerDeliveryAddress,
      @ObjectModel.foreignKey.association: '_ProductCostCollector'
      cast(pkhd.pkosa as vdm_pkosa_d preserving type)                          as ProductCostCollector,

      // Assignments Purchasing
      @ObjectModel.foreignKey.association: '_Supplier'
      pkhd.lifnr                                                               as Supplier,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      cast(pkhd.ekorg as pph_ekorg preserving type)                            as PurchasingOrganization,
      --    @ObjectModel.foreignKey.association: '_PurchasingDocument'
      pkhd.ebeln                                                               as PurchaseOutlineAgreement,
      --    @ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
      cast(pkhd.ebelp as vdm_evrtp preserving type)                            as PurchaseOutlineAgreementItem,

      // Assignments WM
      @ObjectModel.foreignKey.association: '_Warehouse'
      cast(pkhd.lgnum as vdm_lgnum preserving type)                            as Warehouse,
      cast(pkhd.lgtyp as vdm_lgtyp preserving type)                            as StorageType,
      cast(pkhd.lgpla as vdm_lgpla preserving type)                            as StorageBin,

      // Quantities and UoM
      @Semantics.unitOfMeasure: true
      cast(pkhd.meins as vdm_meins preserving type)                            as BaseUnit,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @DefaultAggregation: #SUM
      cast(pkhd.behmg as vdm_behmg preserving type)                            as KanbanContainerQuantityInBsUnt,

      //
      cast(pkhd.behaz as vdm_behaz preserving type)                            as NumberOfKanbanContainers,
      cast(pkhd.sigaz as vdm_sigaz preserving type)                            as MaxNrOfEmptyKanbanContainers,
      cast(pkhd.pkste as vdm_pkste preserving type)                            as InHouseProductionReplnmtStrgy,
      cast(pkhd.berkz as vdm_berkz preserving type)                            as MaterialStaging,
      cast(pkhd.nkdyn as vdm_t333_nkdyn preserving type)                       as DestinationBinIsDynamic,
      cast(pkhd.pkstf as vdm_pkstf preserving type)                            as ExtProcurementReplnmtStrgy,
      cast(pkhd.pkstu as vdm_pkstu preserving type)                            as StockTransferReplnmtStrategy,
      cast(pkhd.answb as vdm_answb preserving type)                            as ReplnmtIsCtrldBySupplySource,
      cast(pkhd.pkbht as vdm_pkbht preserving type)                            as KanbanContainerPackggProduct,
      cast(pkhd.qufkt as vdm_qufkt preserving type)                            as SeparateGRIsNeededIfSetToFull,
      cast(pkhd.kostl as vdm_kostl preserving type)                            as CostCenter,
      cast(pkhd.pkumw as vdm_pkumw preserving type)                            as SupplySourcePlant,
      cast(pkhd.pksfg as vdm_pksfg preserving type)                            as KanbanContainerStatusSequence,
      cast(pkhd.pklog as vdm_pklog preserving type)                            as KanbanCtnReplnmtTriggerLogic,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast(pkhd.alsmg as vdm_alsmg preserving type)                            as KnbnCtnReplnmtTrggrQtyInBsUnt,
      cast(pkhd.kcart as vdm_kcart preserving type)                            as KanbanContainerCalculationType,
      cast(pkhd.kcsaf as vdm_kcsaf preserving type)                            as KanbanCtnCalcSafetyFactor,
      cast(pkhd.kccon as vdm_kccon preserving type)                            as KanbanCtnCalculationConstant,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast(pkhd.pkrmg as vdm_pkrmg preserving type)                            as KanbanCtnRoundingQtyInBsUnt,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast(pkhd.pkfmg as vdm_pkfmg preserving type)                            as FixedKanbanContainerQtyInBsUnt,

      cast(pkhd.kcprf as vdm_kcprf preserving type)                            as KanbanContainerCalcProfile,
      cast(pkhd.kwbzd as vdm_kwbzd preserving type)                            as ReplnmtLeadTimeInWorkdays,
      cast(pkhd.kwbzm as vdm_kwbzm preserving type)                            as ReplnmtLeadTimeInHoursAndMins, // cast to identical type to avoid conversion exit
      cast(pkhd.vbeln as vdm_vbeln_pk preserving type)                         as SalesSchedulingAgreement,
      cast(pkhd.vbelp as vdm_vbelp_pk preserving type)                         as SalesSchedulingAgreementItem,
      cast(pkhd.qupvb as vdm_qupvb preserving type)                            as SourceProductionSupplyArea,
      cast(pkhd.pabprf as vdm_pabprf preserving type)                          as JITCallProfile,
      cast(pkhd.packv as vdm_pl_packnr preserving type)                        as PackingInstruction,
      cast(pkhd.anzlt as vdm_anzlt preserving type)                            as NumberOfLoadCarriers,
      cast(pkhd.zpunkt as vdm_sa_zpunkt preserving type)                       as BackflushReportingPoint,
      cast(pkhd.lcm_status as vdm_lcm_status preserving type)                  as KanbanCtrlCycleLifeCycleStatus,
      cast(pkhd.cre_date as vdm_cre_date preserving type)                      as CreationDate,
      cast(pkhd.rls_date as vdm_rls_date preserving type)                      as ReleaseDate,
      pkhd.obs_date                                                            as LockDate,
      cast(pkhd.pintvd as vdm_pintvd preserving type)                          as PullIntervalInWorkdays,
      cast(pkhd.pintvm as vdm_pintvm preserving type)                          as PullIntervalInHoursAndMinutes, // cast to identical type to avoid conversion exit
      cast(pkhd.knfzd as vdm_knfzd preserving type)                            as KanbanCtnRefillTimeInDays,
      cast(pkhd.knfzm as vdm_knfzm preserving type)                            as KanbanCtnRefillTmeInHrsAndMins, // cast to identical type to avoid conversion exit
      cast(pkhd.kwtzd as vdm_kwtzd preserving type)                            as KanbanCtnWaitTimeInDays,
      cast(pkhd.kwtzm as vdm_kwtzm preserving type)                            as KanbanCtnWaitTimeInHrsAndMins, // cast to identical type to avoid conversion exit
      cast(pkhd.kitzd as vdm_kitzd preserving type)                            as KanbanCtnTransportTimeInDays,
      cast(pkhd.kitzm as vdm_kitzm preserving type)                            as KnbnCtnTransptTmeInHrsAndMins, // cast to identical type to avoid conversion exit
      cast(pkhd.kdmbuf as vdm_kdmbuf preserving type)                          as KnbnCtnCalcRqmtBufferInPercent,
      cast(pkhd.kspbuf as vdm_kspbuf preserving type)                          as KnbnCtnCalcSupplySrceBufInPct,
      cast(pkhd.ntrel as vdm_ntrel preserving type)                            as NrOfKanbanCtnsFlaggedToUnlock,
      pkhd.trigaz                                                              as NrOfWaitingKnbnCtnsBfrReplnmt,
      pkhd.triggr                                                              as KanbanCtrlCycReplnmtTriggerGrp,
      pkhd.capa_wrkct                                                          as PlanningWorkCenter,
      cast(pkhd.fazus as vdm_fazus preserving type)                            as ProductionOrdersAreCombined,
      pkhd.lgnum_ewm                                                           as EWMWarehouse,
      pkhd.nlpla                                                               as DestinationStorageBin,
      pkhd.vlpla                                                               as SourceStorageBin,
      pkhd.prcty                                                               as WarehouseProcessType,
      pkhd.pkdrs                                                               as KanbanCardPrintControl,
      cast(pkhd.vbprn as rspopshort preserving type)                           as ProdnSupplySpoolOutputDevice,
      cast(pkhd.vbque as vdm_kanbancardprintqueue preserving type)             as KanbanCardPrintQueue,
      cast(pkhd.cc_print_queue as vdm_controlcycleprintqueue preserving type)  as ControlCyclePrintQueue,
      cast(pkhd.kbform as vdm_kanbancardformtemplate preserving type)          as KanbanCardFormTemplate,
      pkhd.rkform                                                              as ControlCycleSAPScriptForm,
      cast(pkhd.cc_print_form as vdm_controlcycleformtemplate preserving type) as ControlCyclePrintFormTemplate,


      @Semantics.systemDateTime.lastChangedAt: true
      cast(pkhd.lastchange_datetime as vdm_lastchangedatetime preserving type) as LastChangeDateTime,

      // Associations
      _KanbanControlCycleCategory,
      _Product,
      _Plant,
      _ProductionVersion,
      _ProductionSupplyArea,
      _ResponsiblePerson,
      _StorageLocation,
      _ProductCostCollector,
      _Address,
      _Supplier,
      _PurchasingOrganization,
      _PurchasingDocument,
      _PurchasingDocumentItem,
      _Warehouse,
      _BaseUnit,
      _SupplierCompanyByPlant,
      _KnbnControlCycLifeCycSts
};
```
