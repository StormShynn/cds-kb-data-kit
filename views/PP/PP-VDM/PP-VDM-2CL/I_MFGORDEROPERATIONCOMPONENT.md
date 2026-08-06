---
name: I_MFGORDEROPERATIONCOMPONENT
description: Mfgorderoperationcomponent
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
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDEROPERATIONCOMPONENT

**Mfgorderoperationcomponent**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Reservation` | `resb.rsnum` |
| key `ReservationItem` | `cast(resb.rspos as pph_rspos preserving type)` |
| key `RecordType` | `cast(resb.rsart as pph_rsart preserving type)` |
| `MaterialGroup` | `resb.matkl` |
| `Material` | `resb.matnr` |
| `Plant` | `resb.werks` |
| `ManufacturingOrderCategory` | `cast(resb.autyp as manufacturingordercategory preserving type)` |
| `ManufacturingOrderType` | `cast(resb.auart as manufacturingordertype preserving type)` |
| `ManufacturingOrder` | `cast(resb.aufnr as manufacturingorder preserving type)` |
| `ManufacturingOrderSequence` | `case resb.autyp when '10' then case resb.plnfl when '' then '000000' else resb.plnfl end when '40' then '' end` |
| `MfgOrderSequenceCategory` | `cast(resb.flgat as folgenart preserving type)` |
| `ManufacturingOrderOperation` | `cast(resb.vornr as manufacturingorderoperation preserving type)` |
| `ManufacturingOrderOperation_2` | `cast(resb.vornr as vdm_vornr preserving type)` |
| `ProductionPlant` | `cast(resb.pwerk as pwwrk preserving type)` |
| `OrderInternalBillOfOperations` | `cast(resb.aufpl as pph_aufpl preserving type)` |
| `OrderIntBillOfOperationsItem` | `cast(resb.aplzl as operationinternalid preserving type)` |
| `AssemblyMRPController` | `cast(resb.dispo as assymrpcontrl preserving type)` |
| `ProductionSupervisor` | `cast(resb.fevor as pph_fevor preserving type)` |
| `OrderObjectInternalID` | `resb.OrderObjectInternalID` |
| `MatlCompRequirementDate` | `cast(resb.bdter as pph_bdter preserving type)` |
| `MatlCompRequirementTime` | `cast(resb.bdztp as pph_bdztp preserving type)` |
| `LatestRequirementDate` | `cast(resb.sbter as pph_sbter preserving type)` |
| `MfgOrderActualReleaseDate` | `cast(resb.ftrmi as mfgorderactualreleasedate preserving type)` |
| `ReservationItemCreationCode` | `cast(resb.rssta as pph_rssta preserving type)` |
| `ReservationIsFinallyIssued` | `resb.kzear` |
| `MatlCompIsMarkedForDeletion` | `cast(resb.xloek as pph_xloek preserving type)` |
| `MaterialComponentIsMissing` | `resb.xfehl` |
| `IsBulkMaterialComponent` | `resb.schgt` |
| `MatlCompIsMarkedForBackflush` | `resb.rgekz` |
| `MatlCompIsTextItem` | `resb.txtps` |
| `MaterialPlanningRelevance` | `cast(resb.no_disp as vdm_no_disp preserving type)` |
| `MatlCompIsConfigurable` | `resb.kfpos` |
| `MaterialComponentIsClassified` | `resb.clakz` |
| `MaterialCompIsIntraMaterial` | `resb.inpos` |
| `MaterialIsDirectlyProduced` | `cast(case when resb.dbskz = 'E' then 'X' when resb.dbskz <> 'E' then '' end as clcor preserving type )` |
| `MaterialIsDirectlyProcured` | `cast(case when resb.dbskz = 'F' then 'X' when resb.dbskz <> 'F' then '' end as dirpr preserving type )` |
| `LongTextLanguageCode` | `resb.ltxsp` |
| `LongTextExists` | `cast(case when resb.ltxsp <> '' then 'X' else resb.ltxsp end as aufltext preserving type)` |
| `RequirementType` | `cast(resb.bdart as pph_bdart preserving type)` |
| `SalesOrder` | `cast(resb.kdauf as co_kdauf preserving type)` |
| `SalesOrderItem` | `cast(resb.kdpos as co_kdpos preserving type)` |
| `WBSElementInternalID` | `cast(resb.pspel as pph_pspel preserving type)` |
| `WBSElementInternalID_2` | `cast(resb.pspel as ps_s4_pspnr preserving type)` |
| `ProductConfiguration` | `resb.cuobj` |
| `ChangeNumber` | `resb.aennr` |
| `MaterialRevisionLevel` | `cast(resb.revlv as vdm_qm_revlv preserving type)` |
| `EffectivityParameterVariant` | `resb.techs` |
| `SortField` | `resb.sortf` |
| `MaterialComponentSortText` | `resb.sortf` |
| `ObjectInternalID` | `resb.objnr` |
| `BillOfMaterialCategory` | `cast(resb.stlty as pph_stlty preserving type)` |
| `BillOfMaterialInternalID` | `resb.stlnr` |
| `BillOfMaterialInternalID_2` | `cast(resb.stlnr as pph_stnum preserving type)` |
| `BillOfMaterialVariantUsage` | `resb.stlan` |
| `BillOfMaterialVariant` | `resb.stlal` |
| `BillOfMaterial` | `resb.stlnr2` |
| `BOMItem` | `cast(resb.stlkn as pph_stlkn preserving type)` |
| `BillOfMaterialVersion` | `resb.bom_versn` |
| `BOMItemInternalChangeCount` | `resb.stpoz` |
| `InheritedBOMItemNode` | `resb.stvkn` |
| `BOMItemCategory` | `cast(resb.postp as pph_postp preserving type)` |
| `BillOfMaterialItemNumber` | `resb.posnr` |
| `BillOfMaterialItemNumber_2` | `cast(resb.posnr as vdm_sposn preserving type)` |
| `BOMItemDescription` | `resb.potx1` |
| `BOMItemText2` | `resb.potx2` |
| `BOMExplosionDateID` | `cast(resb.sernr as pph_sernr preserving type)` |
| `PurchasingInfoRecord` | `cast(resb.infnr as pph_infnr preserving type)` |
| `PurchasingGroup` | `cast(resb.ekgrp as pph_ekgrp preserving type)` |
| `PurchaseRequisition` | `cast(resb.banfn as co_banfn preserving type)` |
| `PurchaseRequisitionItem` | `cast(resb.bnfpo as co_bnfpo preserving type)` |
| `PurchaseOrder` | `cast(resb.ebeln as vdm_purchaseorder preserving type)` |
| `PurchaseOrderItem` | `cast(resb.ebelp as vdm_purchaseorderitem preserving type)` |
| `PurchaseOrderScheduleLine` | `cast(resb.ebele as fis_etenr preserving type)` |
| `Supplier` | `resb.lifnr` |
| `DeliveryDurationInDays` | `cast(resb.lifzt as pph_lifzt preserving type)` |
| `MaterialGoodsReceiptDuration` | `cast(resb.webaz as pph_webaz preserving type)` |
| `ExternalProcessingPrice` | `cast(resb.gpreis as kblpreis preserving type)` |
| `NumberOfOperationPriceUnits` | `cast(resb.peinh as pph_peinh preserving type)` |
| `GoodsMovementIsAllowed` | `resb.xwaok` |
| `StorageLocation` | `cast(resb.lgort as pph_lgort preserving type)` |
| `DebitCreditCode` | `cast(resb.shkzg as pph_shkzg preserving type)` |
| `GoodsMovementType` | `resb.bwart` |
| `InventorySpecialStockType` | `cast(resb.sobkz as inventoryspecialstocktype preserving type)` |
| `InventorySpecialStockValnType` | `cast(resb.kzbws as pph_kzbws preserving type)` |
| `ConsumptionPosting` | `cast(resb.kzvbr as pph_kzvbr preserving type)` |
| `SupplyArea` | `cast(resb.prvbe as pph_prvbe preserving type)` |
| `GoodsRecipientName` | `cast(resb.wempf as pph_wempf preserving type)` |
| `UnloadingPointName` | `resb.ablad` |
| `StockSegment` | `resb.sgt_scat` |
| `RequirementSegment` | `resb.sgt_rcat` |
| `Batch` | `resb.charg` |
| `BatchEntryDeterminationCode` | `cast(resb.kzech as vdm_pp_kzech preserving type)` |
| `BatchSplitType` | `resb.splkz` |
| `BatchMasterReservationItem` | `cast(case resb.splkz when '' then '0000' else resb.splrv end as vdm_splrv preserving type)` |
| `BatchClassification` | `resb.chobj` |
| `MaterialStaging` | `resb.berkz` |
| `Warehouse` | `resb.lgnum` |
| `StorageType` | `resb.lgtyp` |
| `StorageBin` | `resb.lgpla` |
| `MaterialCompIsCostRelevant` | `resb.sanka` |
| `BusinessArea` | `resb.gsber` |
| `CompanyCode` | `resb.bukrs` |
| `GLAccount` | `resb.saknr` |
| `FunctionalArea` | `resb.fkber` |
| `ControllingArea` | `resb.kokrs` |
| `AccountAssignmentCategory` | `cast(resb.knttp as pph_knttp preserving type)` |
| `CommitmentItem` | `cast(resb.fipos as bbpfipos preserving type)` |
| `CommitmentItemShortID` | `cast(resb.fipos as fmis_ci_internalname preserving type)` |
| `FundsCenter` | `cast(resb.fistl as bbpfistl preserving type)` |
| `MaterialCompIsVariableSized` | `resb.rohps` |
| `NumberOfVariableSizeComponents` | `cast(resb.roanz as pph_roanz preserving type)` |
| `VariableSizeItemUnit` | `cast(case when resb.rohps = 'X' then resb.roame else resb.rohps end as vdm_roame)` |
| `VariableSizeItemQuantity` | `cast(resb.roanz as pph_roanz preserving type)` |
| `VariableSizeComponentUnit` | `cast(resb.rokme as pph_rokme preserving type)` |
| `VariableSizeComponentQuantity` | `cast(resb.romen as pph_romen preserving type)` |
| `VariableSizeDimensionUnit` | `resb.romei` |
| `VariableSizeDimension1` | `resb.roms1` |
| `VariableSizeDimension2` | `resb.roms2` |
| `VariableSizeDimension3` | `resb.roms3` |
| `FormulaKey` | `resb.rform` |
| `MaterialCompIsAlternativeItem` | `resb.alpos` |
| `AlternativeItemGroup` | `cast(resb.alpgr as pph_alpgr preserving type)` |
| `AlternativeItemStrategy` | `cast(resb.alpst as pph_alpst preserving type)` |
| `AlternativeItemPriority` | `cast(resb.alprf as pph_alprf preserving type)` |
| `UsageProbabilityPercent` | `resb.ewahr` |
| `AlternativeMstrReservationItem` | `cast(case resb.alpos when '' then '0000' else resb.splrv end as vdm_splrv_alt preserving type)` |
| `MaterialComponentIsPhantomItem` | `cast(resb.dumps as pph_dumps preserving type)` |
| `OrderPathValue` | `resb.aufwg` |
| `OrderLevelValue` | `resb.aufst` |
| `Assembly` | `resb.baugr` |
| `AssemblyOrderPathValue` | `resb.bauwg` |
| `AssemblyOrderLevelValue` | `resb.baust` |
| `DiscontinuationGroup` | `cast(resb.nfeag as pph_nfeag preserving type)` |
| `MatlCompDiscontinuationType` | `resb.kzaus` |
| `MatlCompIsFollowUpMaterial` | `cast(resb.nfpkz as pph_kznfp preserving type)` |
| `FollowUpGroup` | `cast(resb.nfgrp as pph_nfgrp preserving type)` |
| `FollowUpMaterial` | `cast(resb.nomat as pph_nomat preserving type)` |
| `FollowUpMaterialIsNotActive` | `cast(resb.nafkz as pph_nafkz preserving type)` |
| `FollowUpMaterialIsActive` | `cast(resb.nafkz as pph_nafkz preserving type)` |
| `DiscontinuationMasterResvnItem` | `cast(case resb.kzaus when '5' then resb.splrv else '0000' end as vdm_splrv_dis preserving type)` |
| `MaterialProvisionType` | `cast(resb.beikz as vdm_beikz preserving type)` |
| `MatlComponentSparePartType` | `cast(resb.erskz as vdm_erskz preserving type)` |
| `LeadTimeOffset` | `cast(resb.nlfzt as pph_nlfzt preserving type)` |
| `OperationLeadTimeOffsetUnit` | `cast(resb.nlfmv as pph_nlfmv preserving type)` |
| `OperationLeadTimeOffset` | `cast(resb.nlfzv as pph_nlfzv preserving type)` |
| `QuantityIsFixed` | `resb.fmeng` |
| `IsNetScrap` | `resb.netau` |
| `ComponentScrapInPercent` | `resb.ausch` |
| `OperationScrapInPercent` | `resb.avoau` |
| `MaterialQtyToBaseQtyNmrtr` | `resb.umrez` |
| `MaterialQtyToBaseQtyDnmntr` | `resb.umren` |
| `BaseUnit` | `resb.meins` |
| `RequiredQuantity` | `resb.bdmng` |
| `WithdrawnQuantity` | `cast(resb.enmng as pph_enmng preserving type)` |
| `ConfirmedAvailableQuantity` | `cast(resb.vmeng as pph_vmeng preserving type)` |
| `MaterialCompOriginalQuantity` | `cast(resb.nomng as pph_nomng preserving type)` |
| `EntryUnit` | `resb.erfme` |
| `GoodsMovementEntryQty` | `cast(resb.erfmg as pph_erfmg preserving type)` |
| `Currency` | `resb.waers` |
| `WithdrawnQuantityAmount` | `resb.enwrt` |
| `CriticalComponentType` | `fsh_critical_comp` |
| `CriticalComponentLevel` | `fsh_critical_level` |
| `_Reservation` | *Association* |
| `_ReservationItem` | *Association* |
| `_ReservationDocRecordType` | *Association* |
| `_ManufacturingOrder` | *Association* |
| `_ManufacturingOrderSequence` | *Association* |
| `_MfgOrder` | *Association* |
| `_MfgOrderSequence` | *Association* |
| `_MfgOrderSequenceCategory` | *Association* |
| `_MfgOrderOperation` | *Association* |
| `_MfgOrderOperationBySemanKey` | *Association* |
| `_MfgOrderOperationBySemKey` | *Association* |
| `_MfgOrderCategory` | *Association* |
| `_MfgOrderType` | *Association* |
| `_ProductionPlant` | *Association* |
| `_OrdInternalBillOfOperations` | *Association* |
| `_OrderInternalID` | *Association* |
| `_RequirementType` | *Association* |
| `_MaterialGroup` | *Association* |
| `_Material` | *Association* |
| `_Product` | *Association* |
| `_Plant` | *Association* |
| `_ProductPlant` | *Association* |
| `_ProductPlant2` | *Association* |
| `_ProductSupplyPlanning` | *Association* |
| `_ProductStorageLocation` | *Association* |
| `_ProductStorageLocation2` | *Association* |
| `_ProductUnitsOfMeasure` | *Association* |
| `_AssemblyMRPController` | *Association* |
| `_ProductionSupervisor` | *Association* |
| `_SalesOrder` | *Association* |
| `_SalesOrderItem` | *Association* |
| `_WBSElement` | *Association* |
| `_WBSElementBasicData` | *Association* |
| `_WBSElementBasicData2` | *Association* |
| `_EnterpriseProjectElement` | *Association* |
| `_ChangeNumber` | *Association* |
| `_BOMExplosion` | *Association* |
| `_BillOfMaterialItem` | *Association* |
| `_BOMItemCategory` | *Association* |
| `_PurchasingInfoRecord` | *Association* |
| `_PurchasingGroup` | *Association* |
| `_PurchaseOrder` | *Association* |
| `_PurchaseOrderItem` | *Association* |
| `_PurchaseRequisition` | *Association* |
| `_PurchaseRequisitionItem` | *Association* |
| `_PurchaseRequisitionItem2` | *Association* |
| `_Supplier` | *Association* |
| `_SupplierCompanyByPlant` | *Association* |
| `_StorageLocation` | *Association* |
| `_Batch` | *Association* |
| `_BatchSplitType` | *Association* |
| `_DebitCreditCode` | *Association* |
| `_GoodsMovementType` | *Association* |
| `_InventorySpecialStockType` | *Association* |
| `_InventorySpecialStockValnType` | *Association* |
| `_ConsumptionPosting` | *Association* |
| `_SupplyArea` | *Association* |
| `_Warehouse` | *Association* |
| `_PhantomAssembly` | *Association* |
| `_FollowUpMaterial` | *Association* |
| `_MatlCompDiscontinuationType` | *Association* |
| `_ProvisionType` | *Association* |
| `_SparePartType` | *Association* |
| `_CompanyCode` | *Association* |
| `_BusinessArea` | *Association* |
| `_GLAccount` | *Association* |
| `_ControllingArea` | *Association* |
| `_FunctionalArea` | *Association* |
| `_AccountAssignmentCategory` | *Association* |
| `_CommitmentItemShortID` | *Association* |
| `_OpLeadTimeOffsetUnit` | *Association* |
| `_VariableSizeItemUnit` | *Association* |
| `_VariableSizeCompUnit` | *Association* |
| `_VariableSizeDimensionUnit` | *Association* |
| `_BaseUnit` | *Association* |
| `_EntryUnit` | *Association* |
| `_Currency` | *Association* |
| `_StatusObject` | *Association* |
| `_LongTextLanguage` | *Association* |
| `_LongText` | *Association* |
| `_MfgOrderComponentLongText` | *Association* |
| `_MfgOrderText` | *Association* |
| `_ProductionPlantText` | *Association* |
| `_PlantText` | *Association* |
| `_MaterialText` | *Association* |
| `_WBSElementText` | *Association* |
| `_StorageLocationText` | *Association* |
| `_SupplyAreaText` | *Association* |
| `_SupplierText` | *Association* |
| `_PurchasingGroupText` | *Association* |
| `_PhantomAssemblyText` | *Association* |
| `_FollowUpMaterialText` | *Association* |
| `_BusinessAreaText` | *Association* |
| `_CompanyCodeText` | *Association* |
| `_ControllingAreaText` | *Association* |
| `_FunctionalAreaText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Reservation` | `I_ReservationDocumentHeader` | [1..1] |
| `_ReservationItem` | `I_ReservationDocumentItem` | [1..1] |
| `_ReservationDocRecordType` | `I_ReservationDocRecordType` | [0..1] |
| `_ManufacturingOrder` | `I_ManufacturingOrder` | [1..1] |
| `_ManufacturingOrderSequence` | `I_ManufacturingOrderSequence` | [1..1] |
| `_MfgOrder` | `I_MfgOrder` | [1..1] |
| `_MfgOrderSequence` | `I_MfgOrderSequence` | [1..1] |
| `_MfgOrderSequenceCategory` | `I_SequenceCategory` | [0..1] |
| `_MfgOrderOperation` | `I_MfgOrderOperationBasic` | [1..1] |
| `_MfgOrderOperationBySemanKey` | `I_MfgOrderOperationBySemanKey` | [1..1] |
| `_MfgOrderOperationBySemKey` | `I_MfgOrderOperationBySemKey` | [1..1] |
| `_MfgOrderCategory` | `I_MfgOrderCategory` | [1..1] |
| `_MfgOrderType` | `I_MfgOrderType` | [1..1] |
| `_ProductionPlant` | `I_Plant` | [1..1] |
| `_OrdInternalBillOfOperations` | `I_OrdInternalBillOfOperations` | [1..1] |
| `_OrderInternalID` | `I_OrderInternalID` | [1..1] |
| `_RequirementType` | `I_MaterialRequirementType` | [1..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [1..1] |
| `_Material` | `I_Material` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProductPlant` | `I_ProductPlant` | [1..1] |
| `_ProductPlant2` | `I_ProductPlantBasic` | [1..1] |
| `_ProductSupplyPlanning` | `I_ProductSupplyPlanning` | [1..1] |
| `_ProductStorageLocation` | `I_ProductStorageLocation` | [0..1] |
| `_ProductStorageLocation2` | `I_ProductStorageLocationBasic` | [0..1] |
| `_ProductUnitsOfMeasure` | `I_ProductUnitsOfMeasure` | [1..*] |
| `_AssemblyMRPController` | `I_MRPController` | [0..1] |
| `_ProductionSupervisor` | `I_ProductionSupervisor` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_WBSElement` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasicData2` | `I_WBSElementBasicData` | [0..1] |
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [0..1] |
| `_ChangeNumber` | `I_ChangeMaster` | [0..1] |
| `_BOMExplosion` | `I_BOMExplosionDate` | [0..1] |
| `_BillOfMaterialItem` | `I_BillOfMaterialItemBasic` | [0..1] |
| `_BOMItemCategory` | `I_BillOfMaterialItemCategory` | [0..1] |
| `_PurchasingInfoRecord` | `I_PurchasingInfoRecordApi01` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [0..1] |
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [0..1] |
| `_PurchaseRequisition` | `I_Purchaserequisition` | [0..1] |
| `_PurchaseRequisitionItem` | `I_PurchaseRequisition_Api01` | [0..1] |
| `_PurchaseRequisitionItem2` | `I_PurchaseRequisitionItemAPI01` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Batch` | `I_Batch` | [0..*] |
| `_BatchSplitType` | `I_BatchSplitType` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [1..1] |
| `_GoodsMovementType` | `I_GoodsMovementType` | [1..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_InventorySpecialStockValnType` | `I_InvtrySpecialStockValnType` | [0..1] |
| `_ConsumptionPosting` | `I_ConsumptionPosting` | [0..1] |
| `_SupplyArea` | `I_ProductionSupplyArea` | [0..1] |
| `_Warehouse` | `I_Warehouse` | [0..1] |
| `_PhantomAssembly` | `I_Product` | [0..1] |
| `_FollowUpMaterial` | `I_Product` | [0..1] |
| `_MatlCompDiscontinuationType` | `I_MatlCompDiscontinuationType` | [0..1] |
| `_ProvisionType` | `I_MatlCompProvisionType` | [0..1] |
| `_SparePartType` | `I_MatlCompSparePartType` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_GLAccount` | `I_GLAccount` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_AccountAssignmentCategory` | `I_AccountAssignmentCategory` | [0..1] |
| `_CommitmentItemShortID` | `I_CommitmentItemShortID` | [0..1] |
| `_OpLeadTimeOffsetUnit` | `I_UnitOfMeasure` | [0..1] |
| `_VariableSizeItemUnit` | `I_UnitOfMeasure` | [0..1] |
| `_VariableSizeCompUnit` | `I_UnitOfMeasure` | [0..1] |
| `_VariableSizeDimensionUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [1..1] |
| `_EntryUnit` | `I_UnitOfMeasure` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_StatusObject` | `I_StatusObject` | [1..1] |
| `_LongTextLanguage` | `I_Language` | [0..1] |
| `_LongText` | `I_OrderComponentLongText` | [0..1] |
| `_MfgOrderComponentLongText` | `I_MfgOrderComponentLongText` | [0..1] |
| `_Extension` | `E_ReservationDocumentItem` | [1..1] |
| `_MfgOrderText` | `I_ManufacturingOrder` | [1..1] |
| `_ProductionPlantText` | `I_Plant` | [1..1] |
| `_PlantText` | `I_Plant` | [0..1] |
| `_MaterialText` | `I_ProductText` | [0..*] |
| `_WBSElementText` | `I_WBSElementBasicData` | [0..1] |
| `_StorageLocationText` | `I_StorageLocation` | [0..1] |
| `_SupplyAreaText` | `I_ProductionSupplyAreaText` | [0..*] |
| `_SupplierText` | `I_Supplier` | [0..1] |
| `_PurchasingGroupText` | `I_PurchasingGroup` | [0..1] |
| `_PhantomAssemblyText` | `I_ProductText` | [0..*] |
| `_FollowUpMaterialText` | `I_ProductText` | [0..*] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CompanyCodeText` | `I_CompanyCode` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_FunctionalAreaText` | `I_FunctionalAreaText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMFGORDOPCOMP'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: ['_AssemblyMRPController', '_ProductionSupervisor', '_LongText', '_StatusObject']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'resb',
                                          tableElement: ['rsnum'      , 'rspos'          , 'rsart'],
                                          viewElement:  ['Reservation', 'ReservationItem', 'RecordType']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'aufk',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ManufacturingOrder']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'afko',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ManufacturingOrder']
                                        } ] } }
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderComponent'
@ObjectModel.representativeKey: 'ReservationItem'
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Manufacturing Order Operation Component'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_MfgOrderOperationComponent
  as select from P_MfgOrderOpReservationItem as resb

  association [1..1] to I_ReservationDocumentHeader    as _Reservation                 on  $projection.Reservation = _Reservation.Reservation
  association [1..1] to I_ReservationDocumentItem      as _ReservationItem             on  $projection.Reservation     = _ReservationItem.Reservation
                                                                                       and $projection.ReservationItem = _ReservationItem.ReservationItem
                                                                                       and $projection.RecordType      = _ReservationItem.RecordType
  association [0..1] to I_ReservationDocRecordType     as _ReservationDocRecordType    on  $projection.RecordType = _ReservationDocRecordType.RecordType
  association [1..1] to I_ManufacturingOrder           as _ManufacturingOrder          on  $projection.ManufacturingOrder = _ManufacturingOrder.ManufacturingOrder
  association [1..1] to I_ManufacturingOrderSequence   as _ManufacturingOrderSequence  on  $projection.ManufacturingOrder         = _ManufacturingOrderSequence.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence = _ManufacturingOrderSequence.ManufacturingOrderSequence
  association [1..1] to I_MfgOrder                     as _MfgOrder                    on  $projection.ManufacturingOrder = _MfgOrder.ManufacturingOrder
  association [1..1] to I_MfgOrderSequence             as _MfgOrderSequence            on  $projection.ManufacturingOrder         = _MfgOrderSequence.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence = _MfgOrderSequence.ManufacturingOrderSequence
  association [0..1] to I_SequenceCategory             as _MfgOrderSequenceCategory    on  $projection.MfgOrderSequenceCategory = _MfgOrderSequenceCategory.SequenceCategory
  association [1..1] to I_MfgOrderOperationBasic       as _MfgOrderOperation           on  $projection.OrderInternalBillOfOperations = _MfgOrderOperation.OrderInternalBillOfOperations
                                                                                       and $projection.OrderIntBillOfOperationsItem  = _MfgOrderOperation.OrderIntBillOfOperationsItem
  association [1..1] to I_MfgOrderOperationBySemanKey  as _MfgOrderOperationBySemanKey on  $projection.ManufacturingOrder          = _MfgOrderOperationBySemanKey.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence  = _MfgOrderOperationBySemanKey.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation = _MfgOrderOperationBySemanKey.ManufacturingOrderOperation
  association [1..1] to I_MfgOrderOperationBySemKey    as _MfgOrderOperationBySemKey   on  $projection.ManufacturingOrder            = _MfgOrderOperationBySemKey.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence    = _MfgOrderOperationBySemKey.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation_2 = _MfgOrderOperationBySemKey.ManufacturingOrderOperation
  association [1..1] to I_MfgOrderCategory             as _MfgOrderCategory            on  $projection.ManufacturingOrderCategory = _MfgOrderCategory.ManufacturingOrderCategory
  association [1..1] to I_MfgOrderType                 as _MfgOrderType                on  $projection.ManufacturingOrderType = _MfgOrderType.ManufacturingOrderType
  association [1..1] to I_Plant                        as _ProductionPlant             on  $projection.ProductionPlant = _ProductionPlant.Plant
  association [1..1] to I_OrdInternalBillOfOperations  as _OrdInternalBillOfOperations on  $projection.OrderInternalBillOfOperations = _OrdInternalBillOfOperations.OrderInternalBillOfOperations
  association [1..1] to I_OrderInternalID              as _OrderInternalID             on  $projection.OrderInternalBillOfOperations = _OrderInternalID.OrderInternalID
  association [1..1] to I_MaterialRequirementType      as _RequirementType             on  $projection.RequirementType = _RequirementType.RequirementType
  association [1..1] to I_MaterialGroup                as _MaterialGroup               on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup
  association [1..1] to I_Material                     as _Material                    on  $projection.Material = _Material.Material
  association [1..1] to I_Product                      as _Product                     on  $projection.Material = _Product.Product
  association [1..1] to I_Plant                        as _Plant                       on  $projection.Plant = _Plant.Plant
  association [1..1] to I_ProductPlant                 as _ProductPlant                on  $projection.Material = _ProductPlant.Product
                                                                                       and $projection.Plant    = _ProductPlant.Plant
  association [1..1] to I_ProductPlantBasic            as _ProductPlant2               on  $projection.Material = _ProductPlant2.Product
                                                                                       and $projection.Plant    = _ProductPlant2.Plant
  association [1..1] to I_ProductSupplyPlanning        as _ProductSupplyPlanning       on  $projection.Material = _ProductSupplyPlanning.Product
                                                                                       and $projection.Plant    = _ProductSupplyPlanning.Plant
  association [0..1] to I_ProductStorageLocation       as _ProductStorageLocation      on  $projection.Material        = _ProductStorageLocation.Product
                                                                                       and $projection.Plant           = _ProductStorageLocation.Plant
                                                                                       and $projection.StorageLocation = _ProductStorageLocation.StorageLocation
  association [0..1] to I_ProductStorageLocationBasic  as _ProductStorageLocation2     on  $projection.Material        = _ProductStorageLocation2.Product
                                                                                       and $projection.Plant           = _ProductStorageLocation2.Plant
                                                                                       and $projection.StorageLocation = _ProductStorageLocation2.StorageLocation
  association [1..*] to I_ProductUnitsOfMeasure        as _ProductUnitsOfMeasure       on  $projection.Material = _ProductUnitsOfMeasure.Product
  association [0..1] to I_MRPController                as _AssemblyMRPController       on  $projection.Plant                 = _AssemblyMRPController.Plant
                                                                                       and $projection.AssemblyMRPController = _AssemblyMRPController.MRPController
  association [0..1] to I_ProductionSupervisor         as _ProductionSupervisor        on  $projection.Plant                = _ProductionSupervisor.Plant

                                                                                       and $projection.ProductionSupervisor = _ProductionSupervisor.ProductionSupervisor
  association [0..1] to I_SalesOrder                   as _SalesOrder                  on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem               as _SalesOrderItem              on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                       and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_WBSElementByInternalKey      as _WBSElement                  on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData         on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData2        on  $projection.WBSElementInternalID_2 = _WBSElementBasicData2.WBSElementInternalID
  association [0..1] to I_EnterpriseProjectElement     as _EnterpriseProjectElement    on  $projection.WBSElementInternalID_2 = _EnterpriseProjectElement.WBSElementInternalID  
  association [0..1] to I_ChangeMaster                 as _ChangeNumber                on  $projection.ChangeNumber = _ChangeNumber.ChangeNumber
  association [0..1] to I_BOMExplosionDate             as _BOMExplosion                on  $projection.BOMExplosionDateID = _BOMExplosion.BOMExplosionDateID
  association [0..1] to I_BillOfMaterialItemBasic      as _BillOfMaterialItem          on  $projection.BillOfMaterialCategory     = _BillOfMaterialItem.BillOfMaterialCategory
                                                                                       and $projection.BillOfMaterial             = _BillOfMaterialItem.BillOfMaterial
                                                                                       and $projection.BOMItem                    = _BillOfMaterialItem.BillOfMaterialItemNodeNumber
                                                                                       and $projection.BOMItemInternalChangeCount = _BillOfMaterialItem.BOMItemInternalChangeCount
  association [0..1] to I_BillOfMaterialItemCategory   as _BOMItemCategory             on  $projection.BOMItemCategory = _BOMItemCategory.BillOfMaterialItemCategory
  association [0..1] to I_PurchasingInfoRecordApi01    as _PurchasingInfoRecord        on  $projection.PurchasingInfoRecord = _PurchasingInfoRecord.PurchasingInfoRecord
  association [0..1] to I_PurchasingGroup              as _PurchasingGroup             on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [0..1] to I_PurchaseOrderAPI01           as _PurchaseOrder               on  $projection.PurchaseOrder = _PurchaseOrder.PurchaseOrder
  association [0..1] to I_PurchaseOrderItemAPI01       as _PurchaseOrderItem           on  $projection.PurchaseOrder     = _PurchaseOrderItem.PurchaseOrder
                                                                                       and $projection.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem
  association [0..1] to I_Purchaserequisition          as _PurchaseRequisition         on  $projection.PurchaseRequisition = _PurchaseRequisition.PurchaseRequisition
  association [0..1] to I_PurchaseRequisition_Api01    as _PurchaseRequisitionItem     on  $projection.PurchaseRequisition     = _PurchaseRequisitionItem.PurchaseRequisition
                                                                                       and $projection.PurchaseRequisitionItem = _PurchaseRequisitionItem.PurchaseRequisitionItem
  association [0..1] to I_PurchaseRequisitionItemAPI01 as _PurchaseRequisitionItem2    on  $projection.PurchaseRequisition     = _PurchaseRequisitionItem2.PurchaseRequisition
                                                                                       and $projection.PurchaseRequisitionItem = _PurchaseRequisitionItem2.PurchaseRequisitionItem
  association [0..1] to I_Supplier                     as _Supplier                    on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompanyByPlant       as _SupplierCompanyByPlant      on  $projection.Plant    = _SupplierCompanyByPlant.Plant
                                                                                       and $projection.Supplier = _SupplierCompanyByPlant.Supplier
  association [0..1] to I_StorageLocation              as _StorageLocation             on  $projection.Plant           = _StorageLocation.Plant
                                                                                       and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..*] to I_Batch                        as _Batch                       on  $projection.Material = _Batch.Material
                                                                                       and $projection.Batch    = _Batch.Batch
  association [0..1] to I_BatchSplitType               as _BatchSplitType              on  $projection.BatchSplitType= _BatchSplitType.BatchSplitType    
  association [1..1] to I_DebitCreditCode              as _DebitCreditCode             on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [1..1] to I_GoodsMovementType            as _GoodsMovementType           on  $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType
  association [0..1] to I_InventorySpecialStockType    as _InventorySpecialStockType   on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType
  association [0..1] to I_InvtrySpecialStockValnType   as _InventorySpecialStockValnType on $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventorySpecialStockValnType
  association [0..1] to I_ConsumptionPosting           as _ConsumptionPosting          on  $projection.ConsumptionPosting = _ConsumptionPosting.ConsumptionPosting
  association [0..1] to I_ProductionSupplyArea         as _SupplyArea                  on  $projection.Plant      = _SupplyArea.Plant
                                                                                       and $projection.SupplyArea = _SupplyArea.ProductionSupplyArea
  association [0..1] to I_Warehouse                    as _Warehouse                   on  $projection.Warehouse = _Warehouse.Warehouse
  association [0..1] to I_Product                      as _PhantomAssembly             on  $projection.Assembly = _PhantomAssembly.Product
  association [0..1] to I_Product                      as _FollowUpMaterial            on  $projection.FollowUpMaterial = _FollowUpMaterial.Product
  association [0..1] to I_MatlCompDiscontinuationType  as _MatlCompDiscontinuationType on  $projection.MatlCompDiscontinuationType = _MatlCompDiscontinuationType.MatlCompDiscontinuationType
  association [0..1] to I_MatlCompProvisionType        as _ProvisionType               on  $projection.MaterialProvisionType = _ProvisionType.MaterialProvisionType
  association [0..1] to I_MatlCompSparePartType        as _SparePartType               on  $projection.MatlComponentSparePartType = _SparePartType.MatlComponentSparePartType
  association [0..1] to I_CompanyCode                  as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_BusinessArea                 as _BusinessArea                on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_GLAccount                    as _GLAccount                   on  $projection.GLAccount   = _GLAccount.GLAccount
                                                                                       and $projection.CompanyCode = _GLAccount.CompanyCode
  association [0..1] to I_ControllingArea              as _ControllingArea             on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_FunctionalArea               as _FunctionalArea              on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_AccountAssignmentCategory    as _AccountAssignmentCategory   on  $projection.AccountAssignmentCategory = _AccountAssignmentCategory.AccountAssignmentCategory
  association [0..1] to I_CommitmentItemShortID        as _CommitmentItemShortID       on  $projection.CommitmentItemShortID = _CommitmentItemShortID.CommitmentItemShortID
  association [0..1] to I_UnitOfMeasure                as _OpLeadTimeOffsetUnit        on  $projection.OperationLeadTimeOffsetUnit = _OpLeadTimeOffsetUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _VariableSizeItemUnit        on  $projection.VariableSizeItemUnit = _VariableSizeItemUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _VariableSizeCompUnit        on  $projection.VariableSizeComponentUnit = _VariableSizeCompUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _VariableSizeDimensionUnit   on  $projection.VariableSizeDimensionUnit = _VariableSizeDimensionUnit.UnitOfMeasure
  association [1..1] to I_UnitOfMeasure                as _BaseUnit                    on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [1..1] to I_UnitOfMeasure                as _EntryUnit                   on  $projection.EntryUnit = _EntryUnit.UnitOfMeasure
  association [0..1] to I_Currency                     as _Currency                    on  $projection.Currency = _Currency.Currency
  association [1..1] to I_StatusObject                 as _StatusObject                on  $projection.ObjectInternalID = _StatusObject.StatusObject
  association [0..1] to I_Language                     as _LongTextLanguage            on  $projection.LongTextLanguageCode = _LongTextLanguage.Language
  association [0..1] to I_OrderComponentLongText       as _LongText                    on  $projection.Reservation     = _LongText.Reservation
                                                                                       and $projection.ReservationItem = _LongText.ReservationItem
                                                                                       and $projection.RecordType      = _LongText.RecordType
  association [0..1] to I_MfgOrderComponentLongText    as _MfgOrderComponentLongText   on  $projection.Reservation          = _MfgOrderComponentLongText.Reservation
                                                                                       and $projection.ReservationItem      = _MfgOrderComponentLongText.ReservationItem
                                                                                       and $projection.RecordType           = _MfgOrderComponentLongText.RecordType
                                                                                       and $projection.LongTextLanguageCode = _MfgOrderComponentLongText.LongTextLanguage
  -- to extension
  association [1..1] to E_ReservationDocumentItem      as _Extension                   on  $projection.Reservation     = _Extension.Reservation
                                                                                       and $projection.ReservationItem = _Extension.ReservationItem
                                                                                       and $projection.RecordType      = _Extension.RecordType
-- start new associations for full coverage of text relations
  association [1..1] to I_ManufacturingOrder           as _MfgOrderText                on  $projection.ManufacturingOrder = _MfgOrderText.ManufacturingOrder
  association [1..1] to I_Plant                        as _ProductionPlantText         on  $projection.ProductionPlant = _ProductionPlantText.Plant
  association [0..1] to I_Plant                        as _PlantText                   on  $projection.Plant = _PlantText.Plant
  association [0..*] to I_ProductText                  as _MaterialText                on  $projection.Material = _MaterialText.Product
  association [0..1] to I_WBSElementBasicData          as _WBSElementText              on  $projection.WBSElementInternalID_2 = _WBSElementText.WBSElementInternalID
  association [0..1] to I_StorageLocation              as _StorageLocationText         on  $projection.Plant           = _StorageLocationText.Plant
                                                                                       and $projection.StorageLocation = _StorageLocationText.StorageLocation
  association [0..*] to I_ProductionSupplyAreaText     as _SupplyAreaText              on  $projection.Plant      = _SupplyAreaText.Plant
                                                                                       and $projection.SupplyArea = _SupplyAreaText.ProductionSupplyArea
  association [0..1] to I_Supplier                     as _SupplierText                on  $projection.Supplier = _SupplierText.Supplier
  association [0..1] to I_PurchasingGroup              as _PurchasingGroupText         on  $projection.PurchasingGroup = _PurchasingGroupText.PurchasingGroup
  association [0..*] to I_ProductText                  as _PhantomAssemblyText         on  $projection.Assembly = _PhantomAssemblyText.Product
  association [0..*] to I_ProductText                  as _FollowUpMaterialText        on  $projection.FollowUpMaterial = _FollowUpMaterialText.Product  
  association [0..*] to I_BusinessAreaText             as _BusinessAreaText            on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..1] to I_CompanyCode                  as _CompanyCodeText             on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
  association [0..1] to I_ControllingArea              as _ControllingAreaText         on  $projection.ControllingArea = _ControllingAreaText.ControllingArea 
  association [0..*] to I_FunctionalAreaText           as _FunctionalAreaText          on  $projection.FunctionalArea = _FunctionalAreaText.FunctionalArea
-- end new associations for full coverage of text relations
{
      // Key
      @ObjectModel.foreignKey.association: '_Reservation'
  key resb.rsnum                                                      as Reservation,
      @ObjectModel.text.element:  ['BOMItemDescription']
  key cast(resb.rspos as pph_rspos preserving type)                   as ReservationItem,
      @ObjectModel.foreignKey.association: '_ReservationDocRecordType'
  key cast(resb.rsart as pph_rsart preserving type)                   as RecordType,

      //Material data
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      resb.matkl                                                      as MaterialGroup,
      @ObjectModel.foreignKey.association: '_Material'
      @ObjectModel.text.association: '_MaterialText'  
      resb.matnr                                                      as Material,
      @ObjectModel.foreignKey.association: '_Plant'
      resb.werks                                                      as Plant,

      // Order and Operation data
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      cast(resb.autyp as manufacturingordercategory preserving type)  as ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      cast(resb.auart as manufacturingordertype preserving type)      as ManufacturingOrderType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_ManufacturingOrder'
      cast(resb.aufnr as manufacturingorder preserving type)          as ManufacturingOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderSequenceStdVH', element: 'ManufacturingOrderSequence' } } ]
      @ObjectModel.foreignKey.association: '_ManufacturingOrderSequence'
      case resb.autyp
        when '10' then case resb.plnfl
          when '' then '000000'
          else resb.plnfl
          end
        when '40' then ''   // clear sequence for process orders
      end                                                             as ManufacturingOrderSequence,
      @ObjectModel.foreignKey.association: '_MfgOrderSequenceCategory'
      cast(resb.flgat as folgenart preserving type)                   as MfgOrderSequenceCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ManufacturingOrderOperation_2'
      @ObjectModel.foreignKey.association: '_MfgOrderOperationBySemanKey'
      cast(resb.vornr as manufacturingorderoperation preserving type) as ManufacturingOrderOperation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrdOpBySemanticKeyStdVH', element: 'ManufacturingOrderOperation' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrderOperationBySemKey'
      cast(resb.vornr as vdm_vornr preserving type)                   as ManufacturingOrderOperation_2,
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      cast(resb.pwerk as pwwrk preserving type)                       as ProductionPlant,
      @ObjectModel.foreignKey.association: '_OrdInternalBillOfOperations'
      cast(resb.aufpl as pph_aufpl preserving type)                   as OrderInternalBillOfOperations,
      @ObjectModel.foreignKey.association: '_MfgOrderOperation'
      cast(resb.aplzl as operationinternalid preserving type)         as OrderIntBillOfOperationsItem,
      @ObjectModel.foreignKey.association: '_AssemblyMRPController'
      cast(resb.dispo as assymrpcontrl preserving type)               as AssemblyMRPController,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      cast(resb.fevor as pph_fevor preserving type)                   as ProductionSupervisor,
      resb.OrderObjectInternalID,

      // Date and Time
      @Semantics.businessDate.at: true
      cast(resb.bdter as pph_bdter preserving type)                   as MatlCompRequirementDate,
      cast(resb.bdztp as pph_bdztp preserving type)                   as MatlCompRequirementTime,
      cast(resb.sbter as pph_sbter preserving type)                   as LatestRequirementDate,
      cast(resb.ftrmi as mfgorderactualreleasedate preserving type)   as MfgOrderActualReleaseDate,

      // Attributes
      cast(resb.rssta as pph_rssta preserving type)                   as ReservationItemCreationCode,
      resb.kzear                                                      as ReservationIsFinallyIssued,
      cast(resb.xloek as pph_xloek preserving type)                   as MatlCompIsMarkedForDeletion,
      resb.xfehl                                                      as MaterialComponentIsMissing,
      resb.schgt                                                      as IsBulkMaterialComponent,
      resb.rgekz                                                      as MatlCompIsMarkedForBackflush,
      resb.txtps                                                      as MatlCompIsTextItem,
      cast(resb.no_disp as vdm_no_disp preserving type)               as MaterialPlanningRelevance,
      resb.kfpos                                                      as MatlCompIsConfigurable,
      resb.clakz                                                      as MaterialComponentIsClassified,
      resb.inpos                                                      as MaterialCompIsIntraMaterial,
      cast(case
             when resb.dbskz =  'E' then 'X' 
             when resb.dbskz <> 'E' then ''
      end as clcor preserving type )                                  as MaterialIsDirectlyProduced,
      cast(case
             when resb.dbskz =  'F' then 'X'
             when resb.dbskz <> 'F' then ''
      end as dirpr preserving type )                                  as MaterialIsDirectlyProcured,

      // Text
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      resb.ltxsp                                                      as LongTextLanguageCode,
      cast(case 
             when resb.ltxsp <> '' then 'X'
             else resb.ltxsp
      end as aufltext preserving type)                                as LongTextExists,

      // Assignments
      @ObjectModel.foreignKey.association: '_RequirementType'
      cast(resb.bdart as pph_bdart preserving type)                   as RequirementType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]      
      @ObjectModel.foreignKey.association: '_SalesOrder'
      cast(resb.kdauf as co_kdauf preserving type)                    as SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]  
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      cast(resb.kdpos as co_kdpos preserving type)                    as SalesOrderItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID_2'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElement'
      cast(resb.pspel as pph_pspel preserving type)                   as WBSElementInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasicData2'
      cast(resb.pspel as ps_s4_pspnr preserving type)                 as WBSElementInternalID_2,
      resb.cuobj                                                      as ProductConfiguration,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      resb.aennr                                                      as ChangeNumber,
      cast(resb.revlv as vdm_qm_revlv preserving type)                as MaterialRevisionLevel,
      resb.techs                                                      as EffectivityParameterVariant,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialComponentSortText'
      resb.sortf                                                      as SortField,
      resb.sortf                                                      as MaterialComponentSortText,
      @ObjectModel.foreignKey.association: '_StatusObject'
      resb.objnr                                                      as ObjectInternalID,

      // Assignments BOM
      cast(resb.stlty as pph_stlty preserving type)                   as BillOfMaterialCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfMaterialInternalID_2'
      resb.stlnr                                                      as BillOfMaterialInternalID,
      cast(resb.stlnr as pph_stnum preserving type)                   as BillOfMaterialInternalID_2,
      resb.stlan                                                      as BillOfMaterialVariantUsage,
      resb.stlal                                                      as BillOfMaterialVariant,
      resb.stlnr2                                                     as BillOfMaterial,
      cast(resb.stlkn as pph_stlkn preserving type)                   as BOMItem,
      resb.bom_versn                                                  as BillOfMaterialVersion,
      resb.stpoz                                                      as BOMItemInternalChangeCount,
      resb.stvkn                                                      as InheritedBOMItemNode,
      cast(resb.postp as pph_postp preserving type)                   as BOMItemCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfMaterialItemNumber_2'
      @ObjectModel.text.element: ['BOMItemDescription']
      resb.posnr                                                      as BillOfMaterialItemNumber,
      @ObjectModel.text.element: ['BOMItemDescription']
      cast(resb.posnr as vdm_sposn preserving type)                   as BillOfMaterialItemNumber_2,
      @Semantics.text: true
      resb.potx1                                                      as BOMItemDescription,
      @Semantics.text: true
      resb.potx2                                                      as BOMItemText2,
      @ObjectModel.foreignKey.association: '_BOMExplosion'
      cast(resb.sernr as pph_sernr  preserving type)                  as BOMExplosionDateID,

      // Assignments Purchasing
      cast(resb.infnr as pph_infnr preserving type)                   as PurchasingInfoRecord,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      cast(resb.ekgrp as pph_ekgrp preserving type)                   as PurchasingGroup,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaseRequisitionStdVH', element: 'PurchaseRequisition' } } ] 
      cast(resb.banfn as co_banfn  preserving type)                   as PurchaseRequisition,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaseRequisitionItemStdVH', element: 'PurchaseRequisitionItem' } } ] 
      cast(resb.bnfpo as co_bnfpo  preserving type)                   as PurchaseRequisitionItem,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaseOrderStdVH', element: 'PurchaseOrder' } } ] 
      cast(resb.ebeln as vdm_purchaseorder     preserving type)       as PurchaseOrder,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaseOrderItemStdVH', element: 'PurchaseOrderItem' } } ] 
      cast(resb.ebelp as vdm_purchaseorderitem preserving type)       as PurchaseOrderItem,
--    @ObjectModel.foreignKey.association: '_PurchaseOrderScheduleLine'
      cast(resb.ebele as fis_etenr preserving type)                   as PurchaseOrderScheduleLine,
      @ObjectModel.foreignKey.association: '_Supplier'
      resb.lifnr                                                      as Supplier,
      cast(resb.lifzt as pph_lifzt preserving type)                   as DeliveryDurationInDays,
      cast(resb.webaz as pph_webaz preserving type)                   as MaterialGoodsReceiptDuration,
      -- Price
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      cast(resb.gpreis as kblpreis  preserving type)                  as ExternalProcessingPrice,
      cast(resb.peinh  as pph_peinh preserving type)                  as NumberOfOperationPriceUnits,

      // Goods Movement data
      resb.xwaok                                                      as GoodsMovementIsAllowed,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      cast(resb.lgort as pph_lgort preserving type)                   as StorageLocation,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      cast(resb.shkzg as pph_shkzg preserving type)                   as DebitCreditCode,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      resb.bwart                                                      as GoodsMovementType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      cast(resb.sobkz as inventoryspecialstocktype preserving type)   as InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      cast(resb.kzbws as pph_kzbws preserving type)                   as InventorySpecialStockValnType,
      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      cast(resb.kzvbr as pph_kzvbr preserving type)                   as ConsumptionPosting,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionSupplyAreaStdVH', element: 'ProductionSupplyArea' } } ]
      @ObjectModel.foreignKey.association: '_SupplyArea'
      @ObjectModel.text.association: '_SupplyAreaText'  
      cast(resb.prvbe as pph_prvbe preserving type)                   as SupplyArea,
      @Semantics.text: true
      cast(resb.wempf as pph_wempf  preserving type)                  as GoodsRecipientName,
      @Semantics.text: true
      resb.ablad                                                      as UnloadingPointName,
      resb.sgt_scat                                                   as StockSegment,
      resb.sgt_rcat                                                   as RequirementSegment,

      // Batch data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      resb.charg                                                      as Batch,
--    @ObjectModel.foreignKey.association: '_BatchEntryDetermination'         
      cast(resb.kzech as vdm_pp_kzech preserving type)                as BatchEntryDeterminationCode,
      @ObjectModel.foreignKey.association: '_BatchSplitType'      
      resb.splkz                                                      as BatchSplitType,
      cast(case resb.splkz 
        when '' then '0000'
        else resb.splrv
      end as vdm_splrv preserving type)                               as BatchMasterReservationItem,
      resb.chobj                                                      as BatchClassification,

      // Assignments WM
      resb.berkz                                                      as MaterialStaging,
      @ObjectModel.foreignKey.association: '_Warehouse'
      resb.lgnum                                                      as Warehouse,
      resb.lgtyp                                                      as StorageType,
      resb.lgpla                                                      as StorageBin,

      // Assignments FI/CO
      resb.sanka                                                      as MaterialCompIsCostRelevant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @ObjectModel.text.association: '_BusinessAreaText'
      resb.gsber                                                      as BusinessArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      resb.bukrs                                                      as CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' } } ]
      @ObjectModel.foreignKey.association: '_GLAccount'
      resb.saknr                                                      as GLAccount,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      @ObjectModel.text.association: '_FunctionalAreaText'
      resb.fkber                                                      as FunctionalArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      resb.kokrs                                                      as ControllingArea,
      @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'
      cast(resb.knttp as pph_knttp preserving type)                   as AccountAssignmentCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CommitmentItemShortID'
      cast(resb.fipos as bbpfipos  preserving type)                   as CommitmentItem,
      cast(resb.fipos as fmis_ci_internalname preserving type)        as CommitmentItemShortID,
      cast(resb.fistl as bbpfistl  preserving type)                   as FundsCenter,

      // Variable-size comp. data
      resb.rohps                                                      as MaterialCompIsVariableSized,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'VariableSizeItemQuantity'
      cast(resb.roanz as pph_roanz preserving type)                   as NumberOfVariableSizeComponents,
      -- Item quantity (ROANZ and ROAME)
      @ObjectModel.foreignKey.association: '_VariableSizeItemUnit'
      @Semantics.unitOfMeasure: true
      cast(case 
             when resb.rohps = 'X' then resb.roame
             else resb.rohps
      end as vdm_roame)                                               as VariableSizeItemUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeItemUnit'
      @Aggregation.default: #SUM
      cast(resb.roanz as pph_roanz preserving type)                   as VariableSizeItemQuantity,
      -- Component quantity (ROKME and ROMEN)
      @ObjectModel.foreignKey.association: '_VariableSizeCompUnit'
      @Semantics.unitOfMeasure: true
      cast(resb.rokme as pph_rokme preserving type)                   as VariableSizeComponentUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeComponentUnit'
      @Aggregation.default: #SUM
      cast(resb.romen as pph_romen preserving type)                   as VariableSizeComponentQuantity,
      -- Dimensions (ROMEI and ROMSn)
      @ObjectModel.foreignKey.association: '_VariableSizeDimensionUnit'
      @Semantics.unitOfMeasure: true
      resb.romei                                                      as VariableSizeDimensionUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      @Aggregation.default: #MAX
      resb.roms1                                                      as VariableSizeDimension1,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      @Aggregation.default: #MAX
      resb.roms2                                                      as VariableSizeDimension2,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      @Aggregation.default: #MAX
      resb.roms3                                                      as VariableSizeDimension3,
      resb.rform                                                      as FormulaKey,

      // Alternative item data
      resb.alpos                                                      as MaterialCompIsAlternativeItem,
      cast(resb.alpgr as pph_alpgr preserving type)                   as AlternativeItemGroup,
      cast(resb.alpst as pph_alpst preserving type)                   as AlternativeItemStrategy,
      cast(resb.alprf as pph_alprf preserving type)                   as AlternativeItemPriority,
      resb.ewahr                                                      as UsageProbabilityPercent,
      cast(case resb.alpos
        when '' then '0000'
        else resb.splrv
      end as vdm_splrv_alt preserving type)                           as AlternativeMstrReservationItem,

      // Phantom assembly
      cast(resb.dumps as pph_dumps preserving type)                   as MaterialComponentIsPhantomItem,
      resb.aufwg                                                      as OrderPathValue,
      resb.aufst                                                      as OrderLevelValue,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_PhantomAssembly'
      @ObjectModel.text.association: '_PhantomAssemblyText'  
      resb.baugr                                                      as Assembly,
      resb.bauwg                                                      as AssemblyOrderPathValue,
      resb.baust                                                      as AssemblyOrderLevelValue,

      // Discontinuation
      cast(resb.nfeag as pph_nfeag preserving type)                   as DiscontinuationGroup,
      @ObjectModel.foreignKey.association: '_MatlCompDiscontinuationType'
      resb.kzaus                                                      as MatlCompDiscontinuationType,
      cast(resb.nfpkz as pph_kznfp preserving type)                   as MatlCompIsFollowUpMaterial,
      cast(resb.nfgrp as pph_nfgrp preserving type)                   as FollowUpGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_FollowUpMaterial'
      @ObjectModel.text.association: '_FollowUpMaterialText'  
      cast(resb.nomat as pph_nomat preserving type)                   as FollowUpMaterial,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'FollowUpMaterialIsActive'
      cast(resb.nafkz as pph_nafkz preserving type)                   as FollowUpMaterialIsNotActive,
      cast(resb.nafkz as pph_nafkz preserving type)                   as FollowUpMaterialIsActive,
      cast(case resb.kzaus
        when '5' then resb.splrv 
        else '0000'
      end as vdm_splrv_dis preserving type)                           as DiscontinuationMasterResvnItem,

      // Material provision
      @ObjectModel.foreignKey.association: '_ProvisionType'
      cast(resb.beikz as vdm_beikz preserving type)                   as MaterialProvisionType,

      // Spare part
      @ObjectModel.foreignKey.association: '_SparePartType'
      cast(resb.erskz as vdm_erskz preserving type)                   as MatlComponentSparePartType,

      // Lead-Time offset
      cast(resb.nlfzt as pph_nlfzt preserving type)                   as LeadTimeOffset,
      @ObjectModel.foreignKey.association: '_OpLeadTimeOffsetUnit'
      @Semantics.unitOfMeasure: true
      cast(resb.nlfmv as pph_nlfmv preserving type)                   as OperationLeadTimeOffsetUnit,
      cast(resb.nlfzv as pph_nlfzv preserving type)                   as OperationLeadTimeOffset,

      // Quantities and UoM
      resb.fmeng                                                      as QuantityIsFixed,
      resb.netau                                                      as IsNetScrap,
      resb.ausch                                                      as ComponentScrapInPercent,
      resb.avoau                                                      as OperationScrapInPercent,
      resb.umrez                                                      as MaterialQtyToBaseQtyNmrtr,
      resb.umren                                                      as MaterialQtyToBaseQtyDnmntr,
      -- Base unit
      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure: true
      resb.meins                                                      as BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      resb.bdmng                                                      as RequiredQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      cast(resb.enmng as pph_enmng preserving type)                   as WithdrawnQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      cast(resb.vmeng as pph_vmeng preserving type)                   as ConfirmedAvailableQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      cast(resb.nomng as pph_nomng preserving type)                   as MaterialCompOriginalQuantity,
      -- Entry unit
      @ObjectModel.foreignKey.association: '_EntryUnit'
      @Semantics.unitOfMeasure: true
      resb.erfme                                                      as EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @Aggregation.default: #SUM
      cast(resb.erfmg as pph_erfmg preserving type)                   as GoodsMovementEntryQty,

      // Amount and Currency
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      resb.waers                                                      as Currency,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      resb.enwrt                                                      as WithdrawnQuantityAmount,

      // Fashion Manufacturing Fields
      fsh_critical_comp                                               as CriticalComponentType,
      fsh_critical_level                                              as CriticalComponentLevel,

      // Associations
      _Reservation,
      _ReservationItem,
      _ReservationDocRecordType,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_ManufacturingOrder'
      _MfgOrder,
      _MfgOrderSequence,
      _ManufacturingOrder,
      _ManufacturingOrderSequence,
      _MfgOrderCategory,
      _MfgOrderType,
      _MfgOrderOperation,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOperationBySemKey'
      _MfgOrderOperationBySemanKey,
      _MfgOrderOperationBySemKey,
      _MfgOrderSequenceCategory,
      _MfgOrderComponentLongText,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_OrderInternalID'
      _OrdInternalBillOfOperations,
      _OrderInternalID,
      _ProductionPlant,
      _AssemblyMRPController,
      _ProductionSupervisor,
      _RequirementType,
      _MaterialGroup,
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
      _ProductSupplyPlanning,
      _ProductUnitsOfMeasure,
      _Plant,
      _StorageLocation,
      _Batch,
      _BatchSplitType,
      _DebitCreditCode,
      _GoodsMovementType,
      _InventorySpecialStockType,
      _InventorySpecialStockValnType,
      _ConsumptionPosting,
      _SupplyArea,
      _Warehouse,
      _FollowUpMaterial,
      _MatlCompDiscontinuationType,
      _ProvisionType,
      _SparePartType,
      _PhantomAssembly,
      _BOMExplosion,
      _BillOfMaterialItem,
      _BOMItemCategory,
      _SalesOrder,
      _SalesOrderItem,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData2'
      _WBSElement,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData2'
      _WBSElementBasicData,
      _WBSElementBasicData2,
      _EnterpriseProjectElement,
      _ChangeNumber,
      _PurchasingGroup,
      _PurchasingInfoRecord,
      _PurchaseOrder,
      _PurchaseOrderItem,
      _PurchaseRequisition,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_PurchaseRequisitionItem2'
      _PurchaseRequisitionItem,
      _PurchaseRequisitionItem2,
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      _CompanyCode,
      _BusinessArea,
      _GLAccount,
      _ControllingArea,
      _FunctionalArea,
      _AccountAssignmentCategory,
      _CommitmentItemShortID,
      _OpLeadTimeOffsetUnit,
      _VariableSizeItemUnit,
      _VariableSizeCompUnit,
      _VariableSizeDimensionUnit,
      _BaseUnit,
      _EntryUnit,
      _Currency,
      _StatusObject,
      _LongTextLanguage,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderComponentLongText'
      _LongText,

      // Text relations
      _MfgOrderText,
      _PlantText,
      _ProductionPlantText,
      _MaterialText,
      _WBSElementText,
      _StorageLocationText,
      _SupplyAreaText,
      _SupplierText,
      _PurchasingGroupText,
      _PhantomAssemblyText,
      _FollowUpMaterialText,
      _BusinessAreaText,
      _CompanyCodeText,
      _ControllingAreaText,
      _FunctionalAreaText
}
where
      resb.kzkup =  ''   //no co-products
  and resb.postp <> 'D'; //no documents
```
