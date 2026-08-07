---
name: I_PLANNEDORDER
description: Planned Order
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - planned-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNEDORDER

**Planned Order**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PlannedOrder` | ✓ | |  | `plnum` |
| `PlannedOrderType` |  | |  | `cast(plaf.paart as paart preserving type)` |
| `PlannedOrderCategory` |  | |  | `cast(plaf.obart as plannedordercategory preserving type)` |
| `LastChangeDate` |  | |  | `cast(left(cast(plaf.pstmp as abap.char(17)), 8) as aedat)` |
| `LastChangeDateTime` |  | |  | `pstmp` |
| `LastChangedByUser` |  | |  | `puser` |
| `PlannedOrderLongText` |  | |  | `ptext` |
| `Material` |  | |  | `matnr` |
| `Product` |  | |  | `cast(plaf.matnr as productnumber preserving type)` |
| `MRPPlant` |  | |  | `plwrk` |
| `MRPArea` |  | |  | `berid` |
| `MRPController` |  | |  | `cast(plaf.dispo as pph_dispo preserving type )` |
| `MaterialProcurementCategory` |  | |  | `cast(plaf.beskz as pph_beskz preserving type)` |
| `MaterialProcurementType` |  | |  | `cast(plaf.sobes as pph_sobes preserving type)` |
| `MaterialGoodsReceiptDuration` |  | |  | `cast(plaf.webaz as pph_webaz preserving type)` |
| `MaterialPlannedDeliveryDurn` |  | |  | `cast(plaf.plifz as pph_plifz preserving type)` |
| `StorageLocation` |  | |  | `cast(plaf.lgort as pph_lgort preserving type)` |
| `InventorySpecialStockType` |  | |  | `cast(plaf.sobkz as pph_sobkz preserving type)` |
| `ConsumptionPosting` |  | |  | `cast(plaf.kzvbr as pph_kzvbr preserving type)` |
| `ManufacturerMaterial` |  | |  | `cast(plaf.ematn as pph_ematn preserving type)` |
| `IssuingStorageLocation` |  | |  | `reslo` |
| `BillOfOperationsType` |  | |  | `cast(plaf.plnty as billofoperationstype preserving type)` |
| `BillOfOperations` |  | |  | `cast(plaf.plnnr as billofoperations preserving type)` |
| `BillOfOperationsGroup` |  | |  | `cast(plaf.plnnr as billofoperationsgroup preserving type)` |
| `BillOfOperationsVariant` |  | |  | `cast(plaf.plnal as billofoperationsvariant preserving type)` |
| `BillOfMaterialVariant` |  | |  | `stalt` |
| `BillOfMaterialVariantUsage` |  | |  | `stlan` |
| `BillOfMaterialStatus` |  | |  | `ststa` |
| `BillOfMaterialVersion` |  | |  | `bom_versn` |
| `BOMExplosionDateID` |  | |  | `cast(plaf.sernr as pph_sernr preserving type)` |
| `ProductionPlant` |  | |  | `pwwrk` |
| `ProductionSupervisor` |  | |  | `cast(plaf.plgrp as pph_fevor preserving type)` |
| `ProductionVersion` |  | |  | `verid` |
| `MRPPlanningScenario` |  | |  | `plscn` |
| `Reservation` |  | |  | `rsnum` |
| `SettlementReservation` |  | |  | `cast(plaf.arsnr as settlmntres preserving type)` |
| `SettlementReservationItem` |  | |  | `cast(plaf.arsps as pph_arsps preserving type)` |
| `PurchasingOrganization` |  | |  | `ekorg` |
| `PurchasingDocument` |  | |  | `cast(plaf.konnr as pph_konnr preserving type)` |
| `PurchasingDocumentItem` |  | |  | `cast(plaf.ktpnr as pph_ktpnr preserving type)` |
| `QuotaArrangement` |  | |  | `cast(plaf.qunum as pph_qunum preserving type)` |
| `QuotaArrangementItem` |  | |  | `cast(plaf.qupos as pph_qupos preserving type)` |
| `FixedSupplier` |  | |  | `flief` |
| `SupplierIsSubcontractor` |  | |  | `lblkz` |
| `Customer` |  | |  | `kunnr` |
| `SalesOrder` |  | |  | `cast(plaf.kdauf as co_kdauf preserving type)` |
| `SalesOrderItem` |  | |  | `cast(plaf.kdpos as co_kdpos preserving type)` |
| `WBSElementInternalID` |  | |  | `cast(plaf.pspel as pph_pspel preserving type)` |
| `WBSElementInternalID_2` |  | |  | `cast(plaf.pspel as ps_s4_pspnr preserving type)` |
| `CapacityRequirement` |  | |  | `bedid` |
| `SchedulingType` |  | |  | `cast(plaf.trart as pph_termkz preserving type)` |
| `SchedulingError` |  | |  | `trmer` |
| `ChangeNumber` |  | |  | `aennr` |
| `MaterialRevisionLevel` |  | |  | `cast(plaf.revlv as qrevlv preserving type)` |
| `MaterialRevisionLevel_2` |  | |  | `cast(plaf.revlv as vdm_qm_revlv preserving type)` |
| `AccountAssignmentCategory` |  | |  | `cast(plaf.knttp as pph_knttp preserving type)` |
| `AssemblyProcessingType` |  | |  | `cast(plaf.monkz as pph_mntga)` |
| `QuantityDistributionKey` |  | |  | `verto` |
| `EffectivityParameterVariant` |  | |  | `techs` |
| `RequirementPlan` |  | |  | `pbdnr` |
| `ProductAvailabilityCheckType` |  | |  | `cast(plaf.kzavc as vdm_kzavc preserving type)` |
| `CentralContract` |  | |  | `srm_contract_id` |
| `CentralContractItem` |  | |  | `srm_contract_itm` |
| `PlannedOrderActionControl` |  | |  | `mdach` |
| `PlannedOrderProcgAction` |  | |  | `cast(plaf.mdacc as vdm_mdacc preserving type)` |
| `PlannedOrderLastActionDate` |  | |  | `mdacd` |
| `PlannedOrderLastActionTime` |  | |  | `mdact` |
| `PlannedOrderIsFirm` |  | |  | `auffx` |
| `PlannedOrderBOMIsFixed` |  | |  | `stlfx` |
| `PlannedOrderIsConvertible` |  | |  | `umskz` |
| `PlndOrderIsCreatedForRptvMfg` |  | |  | `remfl` |
| `PlndOrderReplnmtElmntType` |  | |  | `kbnkz` |
| `PlndOrdIsCrtedForAssemblyProcg` |  | |  | `cast(case when plaf.monkz <> '' then 'X' else plaf.monkz end as pph_monkz preserving type)` |
| `PlannedOrderCapacityIsDsptchd` |  | |  | `kapfx` |
| `OrderIsScheduled` |  | |  | `trmkz` |
| `PlndOrdConfOfAvailability` |  | |  | `mdpbv` |
| `IsPlannedWithoutFinalAssembly` |  | |  | `cast(plaf.vrpla as pph_vrpla preserving type)` |
| `PlannedOrderIsPartOfCollvOrder` |  | |  | `cast(case when plaf.arsnr > '0000000000' then 'X' when plaf.arsnr = '0000000000' then ' ' end as vdm_prodnet preserving type)` |
| `PlndOrderPlannedStartDate` |  | |  | `psttr` |
| `PlndOrderPlannedStartTime` |  | |  | `pstti` |
| `PlndOrderPlannedEndDate` |  | |  | `pedtr` |
| `PlndOrderPlannedEndTime` |  | |  | `pedti` |
| `PlannedOrderOpeningDate` |  | |  | `pertr` |
| `PlndOrderTotalCmtmtDate` |  | |  | `gsbtr` |
| `ProductionStartDate` |  | |  | `terst` |
| `ProductionEndDate` |  | |  | `tered` |
| `BOMExplosionDate` |  | |  | `paltr` |
| `PlndOrderBaseToEntryQtyNmrtr` |  | |  | `umrez` |
| `PlndOrderBaseToEntryQtyDnmntr` |  | |  | `umren` |
| `BaseUnit` |  | |  | `meins` |
| `PlannedTotalQtyInBaseUnit` |  | |  | `gsmng` |
| `PlannedScrapQtyInBaseUnit` |  | |  | `avmng` |
| `RequirementQuantityInBaseUnit` |  | |  | `bdmng` |
| `GoodsReceiptQtyInBaseUnit` |  | |  | `wemng` |
| `QuantityWithdrawnInBaseUnit` |  | |  | `wamng` |
| `PlndOrderCommittedQty` |  | |  | `vfmng` |
| `PlannedOrderReducedQuantity` |  | |  | `abmng` |
| `PlannedOrderPartialLotQuantity` |  | |  | `tlmng` |
| `EntryUnit` |  | |  | `erfme` |
| `PlndOrderEntryQuantity` |  | |  | `cast(plaf.erfmg as pph_erfmg preserving type)` |
| `MasterPlannedOrder` |  | |  | `fsh_mplnd_ord` |
| `StockSegment` |  | |  | `sgt_scat` |
| `ProductSeasonYear` |  | |  | `fsh_season_year` |
| `ProductSeason` |  | |  | `fsh_season` |
| `ProductCollection` |  | |  | `fsh_collection` |
| `ProductTheme` |  | |  | `fsh_theme` |
| `_PlannedOrderType` | | ✓ | | |
| `_PlannedOrderCategory` | | ✓ | | |
| `_LastChangedByUser` | | ✓ | | |
| `_LastChgdByUserContactCard` | | ✓ | | |
| `_Material` | | ✓ | | |
| `_ManufacturerMaterial` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_ProductUnitsOfMeasure` | | ✓ | | |
| `_ProductPlant` | | ✓ | | |
| `_ProductPlant2` | | ✓ | | |
| `_ProductSupplyPlanning` | | ✓ | | |
| `_ProductStorageLocation` | | ✓ | | |
| `_ProductStorageLocation2` | | ✓ | | |
| `_ProductMRPArea` | | ✓ | | |
| `_ProductPlantMRPArea` | | ✓ | | |
| `_MatlProcurementCategory` | | ✓ | | |
| `_MatlProcurementType` | | ✓ | | |
| `_BaseUnit` | | ✓ | | |
| `_EntryUnit` | | ✓ | | |
| `_ProductionPlant` | | ✓ | | |
| `_MRPPlant` | | ✓ | | |
| `_MRPArea` | | ✓ | | |
| `_MRPController` | | ✓ | | |
| `_ProductionSupervisor` | | ✓ | | |
| `_ProductionVersion` | | ✓ | | |
| `_ProductionVersion_2` | | ✓ | | |
| `_BillOfOperationsType` | | ✓ | | |
| `_BillOfOperationsGroup` | | ✓ | | |
| `_BillOfOperationsGroup2` | | ✓ | | |
| `_MRPPlanningScenario` | | ✓ | | |
| `_Reservation` | | ✓ | | |
| `_SettlementReservation` | | ✓ | | |
| `_SettlementReservationItem` | | ✓ | | |
| `_CapacityRequirement` | | ✓ | | |
| `_CapacityRequirementItemCap` | | ✓ | | |
| `_SchedulingType` | | ✓ | | |
| `_SchedulingError` | | ✓ | | |
| `_PurchasingOrganization` | | ✓ | | |
| `_PurchasingDocument` | | ✓ | | |
| `_PurchasingDocumentItem` | | ✓ | | |
| `_QuotaArrangement` | | ✓ | | |
| `_QuotaArrangementItem` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_Customer` | | ✓ | | |
| `_SupplierCompanyByPlant` | | ✓ | | |
| `_CustomerCompanyByPlant` | | ✓ | | |
| `_SalesOrder` | | ✓ | | |
| `_SalesOrderItem` | | ✓ | | |
| `_PlndOrdConfAvailVH` | | ✓ | | |
| `_WBSElement` | | ✓ | | |
| `_WBSElementBasic` | | ✓ | | |
| `_WBSElementBasic2` | | ✓ | | |
| `_EnterpriseProjectElement` | | ✓ | | |
| `_StorageLocation` | | ✓ | | |
| `_InventorySpecialStockType` | | ✓ | | |
| `_ConsumptionPosting` | | ✓ | | |
| `_BOMExplosion` | | ✓ | | |
| `_ChangeNumber` | | ✓ | | |
| `_MaterialRevisionLevel` | | ✓ | | |
| `_MaterialRevisionLevel_2` | | ✓ | | |
| `_AccountAssignmentCategory` | | ✓ | | |
| `_QuantityDistributionKey` | | ✓ | | |
| `_PlannedOrderActionControl` | | ✓ | | |
| `_PlannedOrderProcgAction` | | ✓ | | |
| `_PlndOrdSupplierCoByPlant` | | ✓ | | |
| `_PlndOrdCustCoByPlant` | | ✓ | | |
| `_MasterPlannedOrder` | | ✓ | | |
| `_PlannedOrderComponent` | | ✓ | | |
| `_PlannedOrderCapacity` | | ✓ | | |
| `_MRPPlantText` | | ✓ | | |
| `_MaterialText` | | ✓ | | |
| `_ProductText` | | ✓ | | |
| `_ProductionVersionText` | | ✓ | | |
| `_MRPAreaText` | | ✓ | | |
| `_BOMExplosionDateText` | | ✓ | | |
| `_WBSElementText` | | ✓ | | |
| `_StorageLocationText` | | ✓ | | |
| `_SupplierText` | | ✓ | | |
| `_CustomerText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PlannedOrderType` | `I_PlannedOrderType` | [1..1] |
| `_PlannedOrderCategory` | `I_PlannedOrderCategory` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_LastChgdByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_Material` | `I_Material` | [1..1] |
| `_ManufacturerMaterial` | `I_Material` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductUnitsOfMeasure` | `I_ProductUnitsOfMeasure` | [1..*] |
| `_ProductPlant` | `I_ProductPlant` | [0..1] |
| `_ProductPlant2` | `I_ProductPlantBasic` | [0..1] |
| `_ProductSupplyPlanning` | `I_ProductSupplyPlanning` | [0..1] |
| `_ProductStorageLocation` | `I_ProductStorageLocation` | [0..1] |
| `_ProductStorageLocation2` | `I_ProductStorageLocationBasic` | [0..1] |
| `_ProductMRPArea` | `I_ProductMRPArea` | [0..1] |
| `_ProductPlantMRPArea` | `I_ProductPlantMRP` | [0..1] |
| `_MatlProcurementCategory` | `I_MatlProcurementCategory` | [0..1] |
| `_MatlProcurementType` | `I_MatlProcurementType` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [1..1] |
| `_EntryUnit` | `I_UnitOfMeasure` | [1..1] |
| `_ProductionPlant` | `I_Plant` | [1..1] |
| `_MRPPlant` | `I_Plant` | [0..1] |
| `_MRPArea` | `I_MRPArea` | [0..1] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_ProductionSupervisor` | `I_ProductionSupervisor` | [0..1] |
| `_ProductionVersion` | `I_ProductionVersion` | [0..1] |
| `_ProductionVersion_2` | `I_ProductionVersion` | [0..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [0..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [0..1] |
| `_BillOfOperationsGroup2` | `I_BillOfOperationsGroup` | [0..1] |
| `_MRPPlanningScenario` | `I_MRPPlanningScenario` | [0..1] |
| `_Reservation` | `I_ReservationDocumentHeader` | [0..1] |
| `_SettlementReservation` | `I_ReservationDocumentHeader` | [0..1] |
| `_SettlementReservationItem` | `I_ReservationDocumentItem` | [0..1] |
| `_CapacityRequirement` | `I_CapacityRequirement` | [0..1] |
| `_CapacityRequirementItemCap` | `I_CapacityRequirementItemCap` | [0..*] |
| `_SchedulingType` | `I_SchedulingType` | [0..1] |
| `_SchedulingError` | `I_SchedulingError` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_PurchasingDocument` | `I_PurchasingDocument` | [0..1] |
| `_PurchasingDocumentItem` | `I_PurchasingDocumentItem` | [0..1] |
| `_QuotaArrangement` | `I_PurgQuotaArrgmtAPI01` | [0..1] |
| `_QuotaArrangementItem` | `I_PurgQuotaArrgmtItemAPI01` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |
| `_CustomerCompanyByPlant` | `I_CustomerCompanyByPlant` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_PlndOrdConfAvailVH` | `I_PlndOrdChkCompAvailyVH` | [0..1] |
| `_WBSElement` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElementBasic` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasic2` | `I_WBSElementBasicData` | [0..1] |
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_ConsumptionPosting` | `I_ConsumptionPosting` | [0..1] |
| `_BOMExplosion` | `I_BOMExplosionDate` | [0..1] |
| `_ChangeNumber` | `I_ChangeMaster` | [0..1] |
| `_MaterialRevisionLevel` | `I_ChangeMstrObjTypeRevisionLvl` | [0..1] |
| `_MaterialRevisionLevel_2` | `I_ChangeMstrObjTypeRevisionLvl` | [0..1] |
| `_AccountAssignmentCategory` | `I_AccountAssignmentCategory` | [0..1] |
| `_QuantityDistributionKey` | `I_MRPQuantityDistributionKey` | [0..1] |
| `_PlannedOrderActionControl` | `I_PlannedOrderActionControl` | [0..1] |
| `_PlannedOrderProcgAction` | `I_PlannedOrderProcgAction` | [0..1] |
| `_PlndOrdSupplierCoByPlant` | `I_PlndOrdSupplierCoByPlant` | [0..1] |
| `_PlndOrdCustCoByPlant` | `I_PlndOrdCustCoByPlant` | [0..1] |
| `_MasterPlannedOrder` | `I_RFM_MasterPlannedOrder` | [0..1] |
| `_PlannedOrderComponent` | `I_PlannedOrderComponent` | [0..*] |
| `_PlannedOrderCapacity` | `I_PlannedOrderCapacity` | [0..*] |
| `_Extension` | `E_PlannedOrder` | [1..1] |
| `_MRPPlantText` | `I_Plant` | [1..1] |
| `_MaterialText` | `I_MaterialText` | [1..*] |
| `_ProductText` | `I_ProductText` | [1..*] |
| `_ProductionVersionText` | `I_ProductionVersion` | [0..1] |
| `_MRPAreaText` | `I_MRPArea` | [0..1] |
| `_BOMExplosionDateText` | `I_BOMExplosionDate` | [0..1] |
| `_WBSElementText` | `I_WBSElementBasicData` | [0..1] |
| `_StorageLocationText` | `I_StorageLocation` | [0..1] |
| `_SupplierText` | `I_Supplier` | [0..1] |
| `_CustomerText` | `I_Customer` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPLNDORDER'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: ['_MRPController', '_ProductionSupervisor', '_LastChangedByUser', '_LastChgdByUserContactCard']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'PlannedOrder'
@ObjectModel.semanticKey: ['PlannedOrder']
@ObjectModel.sapObjectNodeType.name: 'PlannedOrder'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Planned Order'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "CARDINALITY_CHECK" ]  } */
define view I_PlannedOrder
  as select from plaf as plaf

  association [1..1] to I_PlannedOrderType             as _PlannedOrderType           on  $projection.PlannedOrderType = _PlannedOrderType.PlannedOrderType
  association [0..1] to I_PlannedOrderCategory         as _PlannedOrderCategory       on  $projection.PlannedOrderCategory = _PlannedOrderCategory.PlannedOrderCategory
  association [0..1] to I_User                         as _LastChangedByUser          on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_UserContactCard              as _LastChgdByUserContactCard  on  $projection.LastChangedByUser = _LastChgdByUserContactCard.ContactCardID  
  association [1..1] to I_Material                     as _Material                   on  $projection.Material = _Material.Material
  association [0..1] to I_Material                     as _ManufacturerMaterial       on  $projection.ManufacturerMaterial = _ManufacturerMaterial.Material
  association [0..1] to I_Product                      as _Product                    on  $projection.Product = _Product.Product
  association [1..*] to I_ProductUnitsOfMeasure        as _ProductUnitsOfMeasure      on  $projection.Product = _ProductUnitsOfMeasure.Product
  association [0..1] to I_ProductPlant                 as _ProductPlant               on  $projection.MRPPlant = _ProductPlant.Plant
                                                                                      and $projection.Product  = _ProductPlant.Product
  association [0..1] to I_ProductPlantBasic            as _ProductPlant2              on  $projection.Material = _ProductPlant2.Product
                                                                                      and $projection.MRPPlant = _ProductPlant2.Plant  
  association [0..1] to I_ProductSupplyPlanning        as _ProductSupplyPlanning      on  $projection.MRPPlant = _ProductSupplyPlanning.Plant
                                                                                      and $projection.Product  = _ProductSupplyPlanning.Product
  association [0..1] to I_ProductStorageLocation       as _ProductStorageLocation     on  $projection.Product         = _ProductStorageLocation.Product
                                                                                      and $projection.MRPPlant        = _ProductStorageLocation.Plant
                                                                                      and $projection.StorageLocation = _ProductStorageLocation.StorageLocation
  association [0..1] to I_ProductStorageLocationBasic  as _ProductStorageLocation2    on  $projection.Material        = _ProductStorageLocation2.Product
                                                                                      and $projection.MRPPlant        = _ProductStorageLocation2.Plant
                                                                                      and $projection.StorageLocation = _ProductStorageLocation2.StorageLocation
  association [0..1] to I_ProductMRPArea               as _ProductMRPArea             on  $projection.Product  = _ProductMRPArea.Product
                                                                                      and $projection.MRPArea  = _ProductMRPArea.MRPArea
  association [0..1] to I_ProductPlantMRP              as _ProductPlantMRPArea        on  $projection.Product  = _ProductPlantMRPArea.Product
                                                                                      and $projection.MRPPlant = _ProductPlantMRPArea.Plant
                                                                                      and $projection.MRPArea  = _ProductPlantMRPArea.MRPArea
  association [0..1] to I_MatlProcurementCategory      as _MatlProcurementCategory    on  $projection.MaterialProcurementCategory = _MatlProcurementCategory.MaterialProcurementCategory
  association [0..1] to I_MatlProcurementType          as _MatlProcurementType        on  $projection.MaterialProcurementType = _MatlProcurementType.MaterialProcurementType
  association [1..1] to I_UnitOfMeasure                as _BaseUnit                   on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [1..1] to I_UnitOfMeasure                as _EntryUnit                  on  $projection.EntryUnit = _EntryUnit.UnitOfMeasure
  association [1..1] to I_Plant                        as _ProductionPlant            on  $projection.ProductionPlant = _ProductionPlant.Plant
  association [0..1] to I_Plant                        as _MRPPlant                   on  $projection.MRPPlant = _MRPPlant.Plant
  association [0..1] to I_MRPArea                      as _MRPArea                    on  $projection.MRPArea  = _MRPArea.MRPArea
  association [0..1] to I_MRPController                as _MRPController              on  $projection.ProductionPlant = _MRPController.Plant
                                                                                      and $projection.MRPController   = _MRPController.MRPController
  association [0..1] to I_ProductionSupervisor         as _ProductionSupervisor       on  $projection.ProductionPlant      = _ProductionSupervisor.Plant
                                                                                      and $projection.ProductionSupervisor = _ProductionSupervisor.ProductionSupervisor
  association [0..1] to I_ProductionVersion            as _ProductionVersion          on  $projection.Material          = _ProductionVersion.Material
                                                                                      and $projection.MRPPlant          = _ProductionVersion.Plant
                                                                                      and $projection.ProductionVersion = _ProductionVersion.ProductionVersion
  association [0..1] to I_ProductionVersion            as _ProductionVersion_2        on  $projection.Material          = _ProductionVersion_2.Material
                                                                                      and $projection.ProductionPlant   = _ProductionVersion_2.Plant
                                                                                      and $projection.ProductionVersion = _ProductionVersion_2.ProductionVersion
  association [0..1] to I_BillOfOperationsType         as _BillOfOperationsType       on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [0..1] to I_BillOfOperationsGroup        as _BillOfOperationsGroup      on  $projection.BillOfOperationsType = _BillOfOperationsGroup.BillOfOperationsType
                                                                                      and $projection.BillOfOperations     = _BillOfOperationsGroup.BillOfOperationsGroup
  association [0..1] to I_BillOfOperationsGroup        as _BillOfOperationsGroup2     on  $projection.BillOfOperationsType  = _BillOfOperationsGroup2.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup = _BillOfOperationsGroup2.BillOfOperationsGroup
  association [0..1] to I_MRPPlanningScenario          as _MRPPlanningScenario        on  $projection.MRPPlanningScenario = _MRPPlanningScenario.MRPPlanningScenario
  association [0..1] to I_ReservationDocumentHeader    as _Reservation                on  $projection.Reservation = _Reservation.Reservation
  association [0..1] to I_ReservationDocumentHeader    as _SettlementReservation      on  $projection.SettlementReservation = _SettlementReservation.Reservation
  association [0..1] to I_ReservationDocumentItem      as _SettlementReservationItem  on  $projection.SettlementReservation     = _SettlementReservationItem.Reservation
                                                                                      and $projection.SettlementReservationItem = _SettlementReservationItem.ReservationItem
                                                                                      and _SettlementReservationItem.RecordType = ''
  association [0..1] to I_CapacityRequirement          as _CapacityRequirement        on  $projection.CapacityRequirement = _CapacityRequirement.CapacityRequirement
  association [0..*] to I_CapacityRequirementItemCap   as _CapacityRequirementItemCap on  $projection.CapacityRequirement = _CapacityRequirementItemCap.CapacityRequirement
  association [0..1] to I_SchedulingType               as _SchedulingType             on  $projection.SchedulingType = _SchedulingType.SchedulingType
  association [0..1] to I_SchedulingError              as _SchedulingError            on  $projection.SchedulingError = _SchedulingError.SchedulingError
  association [0..1] to I_PurchasingOrganization       as _PurchasingOrganization     on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [0..1] to I_PurchasingDocument           as _PurchasingDocument         on  $projection.PurchasingDocument = _PurchasingDocument.PurchasingDocument
  association [0..1] to I_PurchasingDocumentItem       as _PurchasingDocumentItem     on  $projection.PurchasingDocument     = _PurchasingDocumentItem.PurchasingDocument
                                                                                      and $projection.PurchasingDocumentItem = _PurchasingDocumentItem.PurchasingDocumentItem
  association [0..1] to I_PurgQuotaArrgmtAPI01         as _QuotaArrangement           on  $projection.QuotaArrangement = _QuotaArrangement.QuotaArrangement
  association [0..1] to I_PurgQuotaArrgmtItemAPI01     as _QuotaArrangementItem       on  $projection.QuotaArrangement     = _QuotaArrangementItem.QuotaArrangement
                                                                                      and $projection.QuotaArrangementItem = _QuotaArrangementItem.QuotaArrangementItem
  association [0..1] to I_Supplier                     as _Supplier                   on  $projection.FixedSupplier = _Supplier.Supplier
  association [0..1] to I_Customer                     as _Customer                   on  $projection.Customer = _Customer.Customer
  association [0..1] to I_SupplierCompanyByPlant       as _SupplierCompanyByPlant     on  $projection.MRPPlant      = _SupplierCompanyByPlant.Plant 
                                                                                      and $projection.FixedSupplier = _SupplierCompanyByPlant.Supplier
  association [0..1] to I_CustomerCompanyByPlant       as _CustomerCompanyByPlant     on  $projection.MRPPlant = _CustomerCompanyByPlant.Plant 
                                                                                      and $projection.Customer = _CustomerCompanyByPlant.Customer
  association [0..1] to I_SalesOrder                   as _SalesOrder                 on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem               as _SalesOrderItem             on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                      and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_PlndOrdChkCompAvailyVH       as _PlndOrdConfAvailVH         on  $projection.PlndOrdConfOfAvailability = _PlndOrdConfAvailVH.PlndOrdConfOfAvailability
  association [0..1] to I_WBSElementByInternalKey      as _WBSElement                 on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasic            on  $projection.WBSElementInternalID = _WBSElementBasic.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasic2           on  $projection.WBSElementInternalID_2 = _WBSElementBasic2.WBSElementInternalID
  association [0..1] to I_EnterpriseProjectElement     as _EnterpriseProjectElement   on  $projection.WBSElementInternalID_2 = _EnterpriseProjectElement.WBSElementInternalID    
  association [0..1] to I_StorageLocation              as _StorageLocation            on  $projection.ProductionPlant = _StorageLocation.Plant
                                                                                      and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_InventorySpecialStockType    as _InventorySpecialStockType  on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType
  association [0..1] to I_ConsumptionPosting           as _ConsumptionPosting         on  $projection.ConsumptionPosting = _ConsumptionPosting.ConsumptionPosting
  association [0..1] to I_BOMExplosionDate             as _BOMExplosion               on  $projection.BOMExplosionDateID = _BOMExplosion.BOMExplosionDateID
  association [0..1] to I_ChangeMaster                 as _ChangeNumber               on  $projection.ChangeNumber = _ChangeNumber.ChangeNumber
  association [0..1] to I_ChangeMstrObjTypeRevisionLvl as _MaterialRevisionLevel      on  $projection.MaterialRevisionLevel = _MaterialRevisionLevel.RevisionLevel
                                                                                      and _MaterialRevisionLevel.ChangeNumberObjectType = '41' 
  association [0..1] to I_ChangeMstrObjTypeRevisionLvl as _MaterialRevisionLevel_2    on  $projection.MaterialRevisionLevel_2 = _MaterialRevisionLevel_2.RevisionLevel
                                                                                      and _MaterialRevisionLevel_2.ChangeNumberObjectType = '41' 
  association [0..1] to I_AccountAssignmentCategory    as _AccountAssignmentCategory  on  $projection.AccountAssignmentCategory = _AccountAssignmentCategory.AccountAssignmentCategory
  association [0..1] to I_MRPQuantityDistributionKey   as _QuantityDistributionKey    on  $projection.MRPPlant                = _QuantityDistributionKey.Plant
                                                                                      and $projection.QuantityDistributionKey = _QuantityDistributionKey.QuantityDistributionKey
  association [0..1] to I_PlannedOrderActionControl    as _PlannedOrderActionControl  on  $projection.PlannedOrderActionControl = _PlannedOrderActionControl.PlannedOrderActionControl
  association [0..1] to I_PlannedOrderProcgAction      as _PlannedOrderProcgAction    on  $projection.PlannedOrderProcgAction   = _PlannedOrderProcgAction.PlannedOrderProcgAction
  association [0..1] to I_PlndOrdSupplierCoByPlant     as _PlndOrdSupplierCoByPlant   on  $projection.PlannedOrder  = _PlndOrdSupplierCoByPlant.PlannedOrder
                                                                                      and $projection.MRPPlant      = _PlndOrdSupplierCoByPlant.Plant 
                                                                                      and $projection.FixedSupplier = _PlndOrdSupplierCoByPlant.Supplier
  association [0..1] to I_PlndOrdCustCoByPlant         as _PlndOrdCustCoByPlant       on  $projection.PlannedOrder  = _PlndOrdCustCoByPlant.PlannedOrder
                                                                                      and $projection.MRPPlant      = _PlndOrdCustCoByPlant.Plant 
                                                                                      and $projection.Customer      = _PlndOrdCustCoByPlant.Customer
  
  association [0..1] to I_RFM_MasterPlannedOrder       as _MasterPlannedOrder         on  $projection.MasterPlannedOrder = _MasterPlannedOrder.MasterPlannedOrder                                                                                             
  -- to children:
  association [0..*] to I_PlannedOrderComponent        as _PlannedOrderComponent      on  $projection.Reservation  = _PlannedOrderComponent.Reservation
  association [0..*] to I_PlannedOrderCapacity         as _PlannedOrderCapacity       on  $projection.PlannedOrder = _PlannedOrderCapacity.PlannedOrder
  -- to extension
  association [1..1] to E_PlannedOrder                 as _Extension                  on  $projection.PlannedOrder = _Extension.PlannedOrder

  -- start new associations for full coverage of text relations
  association [1..1] to I_Plant                        as _MRPPlantText               on  $projection.MRPPlant = _MRPPlantText.Plant
  association [1..*] to I_MaterialText                 as _MaterialText               on  $projection.Material = _MaterialText.Material
  association [1..*] to I_ProductText                  as _ProductText                on  $projection.Product = _ProductText.Product
  association [0..1] to I_ProductionVersion            as _ProductionVersionText      on  $projection.Material          = _ProductionVersionText.Material
                                                                                      and $projection.MRPPlant          = _ProductionVersionText.Plant
                                                                                      and $projection.ProductionVersion = _ProductionVersionText.ProductionVersion
  association [0..1] to I_MRPArea                      as _MRPAreaText                on  $projection.MRPArea = _MRPAreaText.MRPArea
  association [0..1] to I_BOMExplosionDate             as _BOMExplosionDateText       on  $projection.BOMExplosionDateID = _BOMExplosionDateText.BOMExplosionDateID
  association [0..1] to I_WBSElementBasicData          as _WBSElementText             on  $projection.WBSElementInternalID_2 = _WBSElementText.WBSElementInternalID
  association [0..1] to I_StorageLocation              as _StorageLocationText        on  $projection.ProductionPlant = _StorageLocationText.Plant
                                                                                      and $projection.StorageLocation = _StorageLocationText.StorageLocation
  association [0..1] to I_Supplier                     as _SupplierText               on  $projection.FixedSupplier = _SupplierText.Supplier
  association [0..1] to I_Customer                     as _CustomerText               on  $projection.Customer = _CustomerText.Customer
  -- end new associations for full coverage of text relations

{
      // Key
     @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key plaf.plnum                                                as PlannedOrder,

      // Type and Category
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderType', element: 'PlannedOrderType' } } ]
      @ObjectModel.foreignKey.association: '_PlannedOrderType'
      cast(plaf.paart as paart preserving type)                 as PlannedOrderType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderCategory', element: 'PlannedOrderCategory' } } ]
      @ObjectModel.foreignKey.association: '_PlannedOrderCategory'
      cast(plaf.obart as plannedordercategory preserving type)  as PlannedOrderCategory,

      // Admin
      @Semantics.systemDate.lastChangedAt: true
      cast(left(cast(plaf.pstmp as abap.char(17)), 8) as aedat) as LastChangeDate,
      @Semantics.systemDateTime.lastChangedAt: true
      plaf.pstmp                                                as LastChangeDateTime,
      @Semantics.user.lastChangedBy: true
      plaf.puser                                                as LastChangedByUser,

      // Text
      @Semantics.text: true
      plaf.ptext                                        as PlannedOrderLongText,

      // Material
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @ObjectModel.foreignKey.association: '_Material'
      @ObjectModel.text.association: '_MaterialText'
      plaf.matnr                                        as Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.association: '_ProductText'
      cast(plaf.matnr as productnumber preserving type) as Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_MRPPlant'
      plaf.plwrk                                        as MRPPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      @ObjectModel.foreignKey.association: '_MRPArea'
      plaf.berid                                        as MRPArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPControllerVH', element: 'MRPController' } } ]      
      @ObjectModel.foreignKey.association: '_MRPController'
      cast(plaf.dispo as pph_dispo preserving type    ) as MRPController,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MatlProcurementCategory', element: 'MaterialProcurementCategory' } } ]    
      @ObjectModel.foreignKey.association: '_MatlProcurementCategory'
      cast(plaf.beskz as pph_beskz preserving type)     as MaterialProcurementCategory,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MatlProcurementType', element: 'MaterialProcurementType' } } ]    
      @ObjectModel.foreignKey.association: '_MatlProcurementType'
      cast(plaf.sobes as pph_sobes preserving type)     as MaterialProcurementType,
      cast(plaf.webaz as pph_webaz preserving type)     as MaterialGoodsReceiptDuration,
      cast(plaf.plifz as pph_plifz preserving type)     as MaterialPlannedDeliveryDurn,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' } } ]
      @ObjectModel.foreignKey.association: '_StorageLocation'
      cast(plaf.lgort as pph_lgort preserving type)     as StorageLocation,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      cast(plaf.sobkz as pph_sobkz preserving type)     as InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      cast(plaf.kzvbr as pph_kzvbr preserving type)     as ConsumptionPosting,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @ObjectModel.foreignKey.association: '_ManufacturerMaterial'
      cast(plaf.ematn as pph_ematn preserving type)     as ManufacturerMaterial,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' } } ]
      plaf.reslo                                        as IssuingStorageLocation,

      // BOO and BOM
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      cast(plaf.plnty as billofoperationstype preserving type)    as BillOfOperationsType,
      @API.element.releaseState: #DEPRECATED      // default data element change -> deprecated to avoid RTT2 error in ATC
      @API.element.successor: 'BillOfOperationsGroup'
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      cast(plaf.plnnr as billofoperations preserving type)        as BillOfOperations,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup2'
      cast(plaf.plnnr as billofoperationsgroup preserving type)   as BillOfOperationsGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgBillOfOperationsStdVH', element: 'BillOfOperationsVariant' } } ]
      cast(plaf.plnal as billofoperationsvariant preserving type) as BillOfOperationsVariant,
      plaf.stalt                                                  as BillOfMaterialVariant,
      plaf.stlan                                                  as BillOfMaterialVariantUsage,
      plaf.ststa                                                  as BillOfMaterialStatus,
      plaf.bom_versn                                              as BillOfMaterialVersion,
      @ObjectModel.foreignKey.association: '_BOMExplosion'
      cast(plaf.sernr as pph_sernr preserving type)               as BOMExplosionDateID,

      // Assignments
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      plaf.pwwrk                                      as ProductionPlant,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      cast(plaf.plgrp as pph_fevor preserving type)   as ProductionSupervisor,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionVersionStdVH', element: 'ProductionVersion' } } ]
      @ObjectModel.foreignKey.association: '_ProductionVersion_2'
      plaf.verid                                      as ProductionVersion,
      @ObjectModel.foreignKey.association: '_MRPPlanningScenario'
      plaf.plscn                                      as MRPPlanningScenario,
      @ObjectModel.foreignKey.association: '_Reservation'
      plaf.rsnum                                      as Reservation,
      @ObjectModel.foreignKey.association: '_SettlementReservation'      
      cast(plaf.arsnr as settlmntres preserving type) as SettlementReservation,
--    @ObjectModel.foreignKey.association: '_SettlementReservationItem'
      cast(plaf.arsps as pph_arsps preserving type)   as SettlementReservationItem,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      plaf.ekorg                                      as PurchasingOrganization,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchasingDocumentStdVH', element: 'PurchasingDocument' } } ]
      cast(plaf.konnr as pph_konnr preserving type)   as PurchasingDocument,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchasingDocumentItemStdVH', element: 'PurchasingDocumentItem' } } ]
      cast(plaf.ktpnr as pph_ktpnr preserving type)   as PurchasingDocumentItem,
--    @ObjectModel.foreignKey.association: '_QuotaArrangement'
      cast(plaf.qunum as pph_qunum preserving type)   as QuotaArrangement,
--    @ObjectModel.foreignKey.association: '_QuotaArrangementItem'
      cast(plaf.qupos as pph_qupos preserving type)   as QuotaArrangementItem,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      plaf.flief                                      as FixedSupplier,
      plaf.lblkz                                      as SupplierIsSubcontractor,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_Customer'
      plaf.kunnr                                      as Customer,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      cast(plaf.kdauf as co_kdauf preserving type)    as SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      cast(plaf.kdpos as co_kdpos preserving type)    as SalesOrderItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID_2'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElement'
      cast(plaf.pspel as pph_pspel preserving type)   as WBSElementInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasic2'
      cast(plaf.pspel as ps_s4_pspnr preserving type) as WBSElementInternalID_2,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityRequirementStdVH', element: 'CapacityRequirement' } } ]
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
      plaf.bedid                                      as CapacityRequirement,
      @ObjectModel.foreignKey.association: '_SchedulingType'
      cast(plaf.trart as pph_termkz preserving type)  as SchedulingType,
      @ObjectModel.foreignKey.association: '_SchedulingError'      
      plaf.trmer                                      as SchedulingError,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      plaf.aennr                                      as ChangeNumber,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialRevisionLevel_2'
      cast(plaf.revlv as qrevlv preserving type)      as MaterialRevisionLevel,
      cast(plaf.revlv as vdm_qm_revlv preserving type) as MaterialRevisionLevel_2,
      @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'
      cast(plaf.knttp as pph_knttp preserving type)   as AccountAssignmentCategory,
      cast(plaf.monkz as pph_mntga)                   as AssemblyProcessingType,
      @ObjectModel.foreignKey.association: '_QuantityDistributionKey'
      plaf.verto                                      as QuantityDistributionKey,
      plaf.techs                                      as EffectivityParameterVariant,
      plaf.pbdnr                                      as RequirementPlan,
      cast(plaf.kzavc as vdm_kzavc preserving type)   as ProductAvailabilityCheckType,
      plaf.srm_contract_id                            as CentralContract,
      plaf.srm_contract_itm                           as CentralContractItem,

      // Planned order processing
      @ObjectModel.foreignKey.association: '_PlannedOrderActionControl'    
      plaf.mdach                                    as PlannedOrderActionControl,
      @ObjectModel.foreignKey.association: '_PlannedOrderProcgAction'
      cast(plaf.mdacc as vdm_mdacc preserving type) as PlannedOrderProcgAction,
      plaf.mdacd                                    as PlannedOrderLastActionDate,
      plaf.mdact                                    as PlannedOrderLastActionTime,
      
      // Attributes
      plaf.auffx                                    as PlannedOrderIsFirm,
      plaf.stlfx                                    as PlannedOrderBOMIsFixed,
      plaf.umskz                                    as PlannedOrderIsConvertible,
      plaf.remfl                                    as PlndOrderIsCreatedForRptvMfg,
      plaf.kbnkz                                    as PlndOrderReplnmtElmntType,
      cast(case 
             when plaf.monkz <> '' then 'X'
             else plaf.monkz
      end as pph_monkz preserving type)             as PlndOrdIsCrtedForAssemblyProcg,
      plaf.kapfx                                    as PlannedOrderCapacityIsDsptchd,
      plaf.trmkz                                    as OrderIsScheduled,
      @ObjectModel.foreignKey.association: '_PlndOrdConfAvailVH'
      plaf.mdpbv as PlndOrdConfOfAvailability,    
      cast(plaf.vrpla as pph_vrpla preserving type) as IsPlannedWithoutFinalAssembly,
      cast(case 
             when plaf.arsnr > '0000000000' then 'X'
             when plaf.arsnr = '0000000000' then ' '
      end as vdm_prodnet preserving type)           as PlannedOrderIsPartOfCollvOrder,  //XFELD

      // Dates and Times
      plaf.psttr                                    as PlndOrderPlannedStartDate,
      plaf.pstti                                    as PlndOrderPlannedStartTime,
      plaf.pedtr                                    as PlndOrderPlannedEndDate,
      plaf.pedti                                    as PlndOrderPlannedEndTime,
      plaf.pertr                                    as PlannedOrderOpeningDate,
      plaf.gsbtr                                    as PlndOrderTotalCmtmtDate,
      plaf.terst                                    as ProductionStartDate,
      plaf.tered                                    as ProductionEndDate,
      plaf.paltr                                    as BOMExplosionDate,

      // Quantities and UoM
      plaf.umrez                                    as PlndOrderBaseToEntryQtyNmrtr,
      plaf.umren                                    as PlndOrderBaseToEntryQtyDnmntr,
      -- Base unit
      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure: true
      plaf.meins                                    as BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      plaf.gsmng                                    as PlannedTotalQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      plaf.avmng                                    as PlannedScrapQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM      
      plaf.bdmng                                    as RequirementQuantityInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      plaf.wemng                                    as GoodsReceiptQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      plaf.wamng                                    as QuantityWithdrawnInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      plaf.vfmng                                    as PlndOrderCommittedQty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      plaf.abmng                                    as PlannedOrderReducedQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      plaf.tlmng                                    as PlannedOrderPartialLotQuantity,
      -- Entry unit
      @ObjectModel.foreignKey.association: '_EntryUnit'
      @Semantics.unitOfMeasure: true
      plaf.erfme                                    as EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @Aggregation.default: #SUM
      cast(plaf.erfmg as pph_erfmg preserving type) as PlndOrderEntryQuantity,
      
      // Fashion Production Manufacturing     
      plaf.fsh_mplnd_ord                            as MasterPlannedOrder,     // Master Planned Order Number
      plaf.sgt_scat                                 as StockSegment,           // Stock Segment
      plaf.fsh_season_year                          as ProductSeasonYear,      // Season Year
      plaf.fsh_season                               as ProductSeason,          // Season
      plaf.fsh_collection                           as ProductCollection,      // Collection
      plaf.fsh_theme                                as ProductTheme,           // Theme            
      
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PlannedOrderComponent,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PlannedOrderCapacity,
      _PlannedOrderType,
      _PlannedOrderCategory,
      _LastChangedByUser,
      _LastChgdByUserContactCard,
      _Material,
      _Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductPlant2'
      _ProductPlant,
      _ProductPlant2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductStorageLocation2'
      _ProductStorageLocation,
      _ProductStorageLocation2,
      _ProductMRPArea,
      _ProductPlantMRPArea,
      _ProductSupplyPlanning,
      _ProductUnitsOfMeasure,
      _ManufacturerMaterial,
      _MatlProcurementCategory,
      _MatlProcurementType,
      _Reservation,
      _SettlementReservation,
      _SettlementReservationItem,
      _BaseUnit,
      _EntryUnit,
      _MRPPlant,
      _MRPArea,
      _MRPController,
      _MRPPlanningScenario,
      _ProductionPlant,
      _ProductionSupervisor,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductionVersion_2'
      _ProductionVersion,
      _ProductionVersion_2,
      _BillOfOperationsType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BillOfOperationsGroup2'
      _BillOfOperationsGroup,
      _BillOfOperationsGroup2,
      _CapacityRequirement,
      _CapacityRequirementItemCap,
      _SchedulingType,
      _SchedulingError,
      _ChangeNumber,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MaterialRevisionLevel_2'
      _MaterialRevisionLevel,
      _MaterialRevisionLevel_2,
      _AccountAssignmentCategory,
      _QuantityDistributionKey,
      _PurchasingOrganization,
      _PurchasingDocument,
      _PurchasingDocumentItem,
      _QuotaArrangement,
      _QuotaArrangementItem,
      _Supplier,
      _Customer,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      @Consumption.hidden: true
      _CustomerCompanyByPlant,
      _SalesOrder,
      _SalesOrderItem,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasic2'
      _WBSElement,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasic2'
      _WBSElementBasic,
      _WBSElementBasic2,
      _EnterpriseProjectElement,
      _StorageLocation,
      _InventorySpecialStockType,
      _ConsumptionPosting,
      _BOMExplosion,
      _PlannedOrderActionControl,
      _PlannedOrderProcgAction,
      _PlndOrdSupplierCoByPlant,
      _PlndOrdCustCoByPlant,
      _MasterPlannedOrder,

      // Text relations
      _MaterialText,
      _ProductText,
      _MRPPlantText,
      _ProductionVersionText,
      _MRPAreaText,
      _BOMExplosionDateText,
      _WBSElementText,
      _StorageLocationText,
      _SupplierText,
      _CustomerText,
      _PlndOrdConfAvailVH
};
```
