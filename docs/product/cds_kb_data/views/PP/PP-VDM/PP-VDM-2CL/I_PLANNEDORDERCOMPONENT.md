---
name: I_PLANNEDORDERCOMPONENT
description: "Planned OrderCOMPONENT"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
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
# I_PLANNEDORDERCOMPONENT

**Planned OrderCOMPONENT**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Reservation` | ✓ | |  | `rsnum` |  |  |
| `ReservationItem` | ✓ | |  | `cast(resb.rspos as pph_rspos preserving type)` |  |  |
| `RecordType` | ✓ | |  | `cast(resb.rsart as pph_rsart preserving type)` |  |  |
| `PlannedOrder` |  | |  |  |  |  |
| `PlannedOrderType` |  | |  |  |  |  |
| `MatlCompRequirementDate` |  | |  | `cast(resb.bdter as pph_bdter preserving type)` |  |  |
| `MatlCompRequirementTime` |  | |  | `cast(resb.bdztp as pph_bdztp preserving type)` |  |  |
| `ReservationIsFinallyIssued` |  | |  | `kzear` |  |  |
| `MatlCompIsMarkedForDeletion` |  | |  | `cast(resb.xloek as pph_xloek preserving type)` |  |  |
| `MaterialComponentIsMissing` |  | |  | `xfehl` |  |  |
| `IsBulkMaterialComponent` |  | |  | `schgt` |  |  |
| `MatlCompIsMarkedForBackflush` |  | |  | `rgekz` |  |  |
| `MatlCompIsTextItem` |  | |  | `txtps` |  |  |
| `MatlCompIsConfigurable` |  | |  | `kfpos` |  |  |
| `RequirementType` |  | |  | `cast(resb.bdart as pph_bdart preserving type)` |  |  |
| `MaterialGroup` |  | |  | `matkl` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `MRPArea` |  | |  |  |  |  |
| `MRPController` |  | |  |  |  |  |
| `ProductionSupervisor` |  | |  |  |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `RequirementPlan` |  | |  | `pbdnr` |  |  |
| `SalesOrder` |  | |  | `cast(resb.kdauf as co_kdauf preserving type)` |  |  |
| `SalesOrderItem` |  | |  | `cast(resb.kdpos as co_kdpos preserving type)` |  |  |
| `WBSElementInternalID` |  | |  | `cast(resb.pspel as pph_pspel preserving type)` |  |  |
| `WBSElementInternalID_2` |  | |  | `cast(resb.pspel as ps_s4_pspnr preserving type)` |  |  |
| `ProductConfiguration` |  | |  | `cuobj` |  |  |
| `ChangeNumber` |  | |  | `cast(resb.aennr as changenumber preserving type)` |  |  |
| `SortField` |  | |  | `sortf` |  |  |
| `MatlCompFreeDefinedAttribute` |  | |  | `sortf` |  |  |
| `MaterialRevisionLevel` |  | |  | `cast(resb.revlv as vdm_qm_revlv preserving type)` |  |  |
| `MaterialPlanningRelevance` |  | |  | `cast(resb.no_disp as vdm_no_disp preserving type)` |  |  |
| `BillOfMaterialCategory` |  | |  | `cast(resb.stlty as pph_stlty preserving type)` |  |  |
| `BillOfMaterialInternalID` |  | |  | `stlnr` |  |  |
| `BillOfMaterialInternalID_2` |  | |  | `cast(resb.stlnr as pph_stnum preserving type)` |  |  |
| `BillOfMaterialVariant` |  | |  | `stlal` |  |  |
| `BOMItem` |  | |  | `cast(resb.stlkn as pph_stlkn preserving type)` |  |  |
| `BOMItemInternalChangeCount` |  | |  | `stpoz` |  |  |
| `BOMItemCategory` |  | |  | `cast(resb.postp as pph_postp preserving type)` |  |  |
| `BillOfMaterialItemNumber` |  | |  | `posnr` |  |  |
| `BillOfMaterialItemNumber_2` |  | |  | `cast(resb.posnr as vdm_sposn preserving type)` |  |  |
| `BOMItemDescription` |  | |  | `potx1` |  |  |
| `BOMItemText2` |  | |  | `potx2` |  |  |
| `BOMExplosion` |  | |  | `cast(resb.sernr as pph_sernr preserving type)` |  |  |
| `PurchasingInfoRecord` |  | |  | `cast(resb.infnr as pph_infnr preserving type)` |  |  |
| `PurchasingGroup` |  | |  | `cast(resb.ekgrp as pph_ekgrp preserving type)` |  |  |
| `PurchaseRequisition` |  | |  | `cast(resb.banfn as co_banfn preserving type)` |  |  |
| `PurchaseRequisitionItem` |  | |  | `cast(resb.bnfpo as co_bnfpo preserving type)` |  |  |
| `PurchaseOrder` |  | |  | `cast(resb.ebeln as vdm_purchaseorder preserving type)` |  |  |
| `PurchaseOrderItem` |  | |  | `cast(resb.ebelp as vdm_purchaseorderitem preserving type)` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `DeliveryDurationInDays` |  | |  | `cast(resb.lifzt as pph_lifzt preserving type)` |  |  |
| `GoodsMovementIsAllowed` |  | |  | `xwaok` |  |  |
| `StorageLocation` |  | |  | `cast(resb.lgort as pph_lgort preserving type)` |  |  |
| `Batch` |  | |  | `charg` |  |  |
| `DebitCreditCode` |  | |  | `cast(resb.shkzg as pph_shkzg preserving type)` |  |  |
| `GoodsMovementType` |  | |  | `bwart` |  |  |
| `InventorySpecialStockType` |  | |  | `cast(resb.sobkz as inventoryspecialstocktype preserving type)` |  |  |
| `InventorySpecialStockValnType` |  | |  | `cast(resb.kzbws as pph_kzbws preserving type)` |  |  |
| `ConsumptionPosting` |  | |  | `cast(resb.kzvbr as pph_kzvbr preserving type)` |  |  |
| `SupplyArea` |  | |  | `cast(resb.prvbe as pph_prvbe preserving type)` |  |  |
| `MaterialStaging` |  | |  | `berkz` |  |  |
| `Warehouse` |  | |  | `lgnum` |  |  |
| `StorageType` |  | |  | `lgtyp` |  |  |
| `StorageBin` |  | |  | `lgpla` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `GLAccount` |  | |  | `saknr` |  |  |
| `AccountAssignmentCategory` |  | |  | `cast(resb.knttp as pph_knttp preserving type)` |  |  |
| `CommitmentItem` |  | |  | `cast(resb.fipos as bbpfipos preserving type)` |  |  |
| `CommitmentItemShortID` |  | |  | `cast(resb.fipos as fmis_ci_internalname preserving type)` |  |  |
| `FundsCenter` |  | |  | `cast(resb.fistl as bbpfistl preserving type)` |  |  |
| `MaterialCompIsVariableSized` |  | |  | `rohps` |  |  |
| `NumberOfVariableSizeComponents` |  | |  | `cast(resb.roanz as vdm_roanz)` |  |  |
| `VariableSizeComponentUnit` |  | |  | `cast(resb.rokme as pph_rokme preserving type)` |  |  |
| `VariableSizeComponentQuantity` |  | |  | `cast(resb.romen as pph_romen preserving type)` |  |  |
| `VariableSizeDimensionUnit` |  | |  | `romei` |  |  |
| `VariableSizeDimension1` |  | |  | `roms1` |  |  |
| `VariableSizeDimension2` |  | |  | `roms2` |  |  |
| `VariableSizeDimension3` |  | |  | `roms3` |  |  |
| `FormulaKey` |  | |  | `rform` |  |  |
| `MaterialCompIsAlternativeItem` |  | |  | `alpos` |  |  |
| `AlternativeItemGroup` |  | |  | `cast(resb.alpgr as pph_alpgr preserving type)` |  |  |
| `AlternativeItemStrategy` |  | |  | `cast(resb.alpst as pph_alpst preserving type)` |  |  |
| `AlternativeItemPriority` |  | |  | `cast(resb.alprf as pph_alprf preserving type)` |  |  |
| `UsageProbabilityPercent` |  | |  | `ewahr` |  |  |
| `AlternativeMstrReservationItem` |  | |  | `cast(case resb.alpos when 'X' then resb.splrv else '0000' end as vdm_splrv_alt preserving type)` |  |  |
| `MaterialComponentIsPhantomItem` |  | |  | `cast(resb.dumps as pph_dumps preserving type)` |  |  |
| `OrderPathValue` |  | |  | `aufwg` |  |  |
| `OrderLevelValue` |  | |  | `aufst` |  |  |
| `Assembly` |  | |  | `baugr` |  |  |
| `AssemblyOrderPathValue` |  | |  | `bauwg` |  |  |
| `AssemblyOrderLevelValue` |  | |  | `baust` |  |  |
| `DiscontinuationGroup` |  | |  | `cast(resb.nfeag as pph_nfeag preserving type)` |  |  |
| `MatlCompDiscontinuationType` |  | |  | `kzaus` |  |  |
| `MatlCompIsFollowUpMaterial` |  | |  | `cast(resb.nfpkz as pph_kznfp preserving type)` |  |  |
| `FollowUpGroup` |  | |  | `cast(resb.nfgrp as pph_nfgrp preserving type)` |  |  |
| `FollowUpMaterial` |  | |  | `cast(resb.nomat as pph_nomat preserving type)` |  |  |
| `FollowUpMaterialIsNotActive` |  | |  | `cast(resb.nafkz as pph_nafkz preserving type)` |  |  |
| `FollowUpMaterialIsActive` |  | |  | `cast(resb.nafkz as pph_nafkz preserving type)` |  |  |
| `DiscontinuationMasterResvnItem` |  | |  | `cast(case resb.kzaus when '5' then resb.splrv else '0000' end as vdm_splrv_dis preserving type)` |  |  |
| `MaterialProvisionType` |  | |  | `cast(resb.beikz as vdm_beikz preserving type)` |  |  |
| `MatlComponentSparePartType` |  | |  | `cast(resb.erskz as vdm_erskz preserving type)` |  |  |
| `LeadTimeOffset` |  | |  | `cast(resb.nlfzt as pph_nlfzt preserving type)` |  |  |
| `OperationLeadTimeOffsetUnit` |  | |  | `cast(resb.nlfmv as pph_nlfmv preserving type)` |  |  |
| `OperationLeadTimeOffset` |  | |  | `cast(resb.nlfzv as pph_nlfzv preserving type)` |  |  |
| `QuantityIsFixed` |  | |  | `fmeng` |  |  |
| `ComponentScrapInPercent` |  | |  | `ausch` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `RequiredQuantity` |  | |  | `cast(resb.bdmng as requirementquantity preserving type)` |  |  |
| `WithdrawnQuantity` |  | |  | `cast(resb.enmng as pph_enmng preserving type)` |  |  |
| `ConfirmedAvailableQuantity` |  | |  | `cast(resb.vmeng as pph_vmeng preserving type)` |  |  |
| `EntryUnit` |  | |  | `erfme` |  |  |
| `GoodsMovementEntryQty` |  | |  | `cast(resb.erfmg as pph_erfmg preserving type)` |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `WithdrawnQuantityAmount` |  | |  | `enwrt` |  |  |
| `StockSegment` |  | |  | `sgt_scat` |  |  |
| `RequirementSegment` |  | |  | `sgt_rcat` |  |  |
| `CriticalComponentType` |  | |  | `fsh_critical_comp` |  |  |
| `CriticalComponentLevel` |  | |  | `fsh_critical_level` |  |  |
| `_Reservation` | | ✓ | | | | |
| `_ReservationItem` | | ✓ | | | | |
| `_ReservationDocRecordType` | | ✓ | | | | |
| `_PlannedOrderType` | | ✓ | | | | |
| `_RequirementType` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductUnitsOfMeasure` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductPlant2` | | ✓ | | | | |
| `_ProductSupplyPlanning` | | ✓ | | | | |
| `_ProductStorageLocation` | | ✓ | | | | |
| `_ProductStorageLocation2` | | ✓ | | | | |
| `_ProductPlantMRPArea` | | ✓ | | | | |
| `_MRPController` | | ✓ | | | | |
| `_MRPArea` | | ✓ | | | | |
| `_ProductionSupervisor` | | ✓ | | | | |
| `_ProductionVersion` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementBasic` | | ✓ | | | | |
| `_EnterpriseProjectElement` | | ✓ | | | | |
| `_BOMExplosion` | | ✓ | | | | |
| `_BillOfMaterialItem` | | ✓ | | | | |
| `_BillOfMaterialItemBasic` | | ✓ | | | | |
| `_BOMItemCategory` | | ✓ | | | | |
| `_PurchasingInfoRecord` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_PurchaseRequisition` | | ✓ | | | | |
| `_PurchaseRequisitionItem` | | ✓ | | | | |
| `_PurchaseRequisitionItem2` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_Batch_2` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventorySpecialStockValnType` | | ✓ | | | | |
| `_ConsumptionPosting` | | ✓ | | | | |
| `_SupplyArea` | | ✓ | | | | |
| `_Warehouse` | | ✓ | | | | |
| `_MatlCompDiscontinuationType` | | ✓ | | | | |
| `_ProvisionType` | | ✓ | | | | |
| `_SparePartType` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_AccountAssignmentCategory` | | ✓ | | | | |
| `_CommitmentItemShortID` | | ✓ | | | | |
| `_Assembly` | | ✓ | | | | |
| `_FollowUpMaterial` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_EntryUnit` | | ✓ | | | | |
| `_OpLeadTimeOffsetUnit` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_ChangeNumber` | | ✓ | | | | |
| `_PlannedOrder` | | ✓ | | | | |
| `_PlantText` | | ✓ | | | | |
| `_MaterialText` | | ✓ | | | | |
| `_ProductionVersionText` | | ✓ | | | | |
| `_WBSElementText` | | ✓ | | | | |
| `_StorageLocationText` | | ✓ | | | | |
| `_SupplyAreaText` | | ✓ | | | | |
| `_SupplierText` | | ✓ | | | | |
| `_AssemblyText` | | ✓ | | | | |
| `_FollowUpMaterialText` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Reservation` | `I_ReservationDocumentHeader` | [1..1] |
| `_ReservationItem` | `I_ReservationDocumentItem` | [1..1] |
| `_ReservationDocRecordType` | `I_ReservationDocRecordType` | [0..1] |
| `_PlannedOrderType` | `I_PlannedOrderType` | [1..1] |
| `_RequirementType` | `I_MaterialRequirementType` | [1..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [1..1] |
| `_Material` | `I_Material` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductUnitsOfMeasure` | `I_ProductUnitsOfMeasure` | [1..*] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProductPlant` | `I_ProductPlant` | [1..1] |
| `_ProductPlant2` | `I_ProductPlantBasic` | [1..1] |
| `_ProductSupplyPlanning` | `I_ProductSupplyPlanning` | [1..1] |
| `_ProductStorageLocation` | `I_ProductStorageLocation` | [0..1] |
| `_ProductStorageLocation2` | `I_ProductStorageLocationBasic` | [0..1] |
| `_ProductPlantMRPArea` | `I_ProductPlantMRP` | [0..1] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_MRPArea` | `I_MRPArea` | [0..1] |
| `_ProductionSupervisor` | `I_ProductionSupervisor` | [0..1] |
| `_ProductionVersion` | `I_ProductionVersion` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasic` | `I_WBSElementBasicData` | [0..1] |
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [0..1] |
| `_BOMExplosion` | `I_BOMExplosionDate` | [0..1] |
| `_BillOfMaterialItem` | `I_BillOfMaterialItemBasic` | [0..1] |
| `_BillOfMaterialItemBasic` | `I_BillOfMaterialItemBasic` | [0..1] |
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
| `_Batch_2` | `I_Batch` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [1..1] |
| `_GoodsMovementType` | `I_GoodsMovementType` | [1..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [1..1] |
| `_InventorySpecialStockValnType` | `I_InvtrySpecialStockValnType` | [0..1] |
| `_ConsumptionPosting` | `I_ConsumptionPosting` | [0..1] |
| `_SupplyArea` | `I_ProductionSupplyArea` | [0..1] |
| `_Warehouse` | `I_Warehouse` | [0..1] |
| `_MatlCompDiscontinuationType` | `I_MatlCompDiscontinuationType` | [0..1] |
| `_ProvisionType` | `I_MatlCompProvisionType` | [0..1] |
| `_SparePartType` | `I_MatlCompSparePartType` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_AccountAssignmentCategory` | `I_AccountAssignmentCategory` | [0..1] |
| `_CommitmentItemShortID` | `I_CommitmentItemShortID` | [0..1] |
| `_Assembly` | `I_Product` | [0..1] |
| `_FollowUpMaterial` | `I_Product` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [1..1] |
| `_EntryUnit` | `I_UnitOfMeasure` | [1..1] |
| `_OpLeadTimeOffsetUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_ChangeNumber` | `I_ChangeMaster` | [0..1] |
| `_PlannedOrder` | `I_PlannedOrder` | [1..1] |
| `_Extension` | `E_ReservationDocumentItem` | [1..1] |
| `_PlantText` | `I_Plant` | [0..1] |
| `_MaterialText` | `I_ProductText` | [0..*] |
| `_ProductionVersionText` | `I_ProductionVersion` | [0..1] |
| `_WBSElementText` | `I_WBSElementBasicData` | [0..1] |
| `_StorageLocationText` | `I_StorageLocation` | [0..1] |
| `_SupplyAreaText` | `I_ProductionSupplyAreaText` | [0..*] |
| `_SupplierText` | `I_Supplier` | [0..1] |
| `_AssemblyText` | `I_ProductText` | [0..*] |
| `_FollowUpMaterialText` | `I_ProductText` | [0..*] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPLNDORDCOMP'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: ['_MRPController', '_ProductionSupervisor']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'ReservationItem'
@ObjectModel.sapObjectNodeType.name: 'PlannedOrderComponent'
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Planned Order Component'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "CARDINALITY_CHECK" ]  } */
define view I_PlannedOrderComponent
  as select from resb         as resb
    inner join I_PlannedOrder as plaf on resb.plnum = plaf.PlannedOrder

  association [1..1] to I_ReservationDocumentHeader    as _Reservation                 on  $projection.Reservation = _Reservation.Reservation
  association [1..1] to I_ReservationDocumentItem      as _ReservationItem             on  $projection.Reservation     = _ReservationItem.Reservation
                                                                                       and $projection.ReservationItem = _ReservationItem.ReservationItem
                                                                                       and $projection.RecordType      = _ReservationItem.RecordType
  association [0..1] to I_ReservationDocRecordType     as _ReservationDocRecordType    on  $projection.RecordType  = _ReservationDocRecordType.RecordType
  association [1..1] to I_PlannedOrderType             as _PlannedOrderType            on  $projection.PlannedOrderType = _PlannedOrderType.PlannedOrderType
  association [1..1] to I_MaterialRequirementType      as _RequirementType             on  $projection.RequirementType = _RequirementType.RequirementType  
  association [1..1] to I_MaterialGroup                as _MaterialGroup               on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup
  association [1..1] to I_Material                     as _Material                    on  $projection.Material = _Material.Material
  association [1..1] to I_Product                      as _Product                     on  $projection.Material = _Product.Product
  association [1..*] to I_ProductUnitsOfMeasure        as _ProductUnitsOfMeasure       on  $projection.Material = _ProductUnitsOfMeasure.Product
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
  association [0..1] to I_ProductPlantMRP              as _ProductPlantMRPArea         on  $projection.Material = _ProductPlantMRPArea.Product
                                                                                       and $projection.Plant    = _ProductPlantMRPArea.Plant
                                                                                       and $projection.MRPArea  = _ProductPlantMRPArea.MRPArea
  association [0..1] to I_MRPController                as _MRPController               on  $projection.Plant         = _MRPController.Plant
                                                                                       and $projection.MRPController = _MRPController.MRPController
  association [0..1] to I_MRPArea                      as _MRPArea                     on  $projection.MRPArea = _MRPArea.MRPArea
  association [0..1] to I_ProductionSupervisor         as _ProductionSupervisor        on  $projection.Plant                = _ProductionSupervisor.Plant
                                                                                       and $projection.ProductionSupervisor = _ProductionSupervisor.ProductionSupervisor
  association [0..1] to I_ProductionVersion            as _ProductionVersion           on  $projection.Material          = _ProductionVersion.Material
                                                                                       and $projection.Plant             = _ProductionVersion.Plant
                                                                                       and $projection.ProductionVersion = _ProductionVersion.ProductionVersion
  association [0..1] to I_SalesOrder                   as _SalesOrder                  on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem               as _SalesOrderItem              on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                       and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_WBSElementBasicData          as _WBSElement                  on  $projection.WBSElementInternalID   = _WBSElement.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasic             on  $projection.WBSElementInternalID_2 = _WBSElementBasic.WBSElementInternalID
  association [0..1] to I_EnterpriseProjectElement     as _EnterpriseProjectElement    on  $projection.WBSElementInternalID_2 = _EnterpriseProjectElement.WBSElementInternalID    
  association [0..1] to I_BOMExplosionDate             as _BOMExplosion                on  $projection.BOMExplosion = _BOMExplosion.BOMExplosionDateID
  association [0..1] to I_BillOfMaterialItemBasic      as _BillOfMaterialItem          on  $projection.BillOfMaterialCategory     = _BillOfMaterialItem.BillOfMaterialCategory
                                                                                       and $projection.BillOfMaterialInternalID   = _BillOfMaterialItem.BillOfMaterial
                                                                                       and $projection.BOMItem                    = _BillOfMaterialItem.BillOfMaterialItemNodeNumber
                                                                                       and $projection.BOMItemInternalChangeCount = _BillOfMaterialItem.BOMItemInternalChangeCount
  association [0..1] to I_BillOfMaterialItemBasic      as _BillOfMaterialItemBasic     on  $projection.BillOfMaterialCategory     = _BillOfMaterialItemBasic.BillOfMaterialCategory
                                                                                       and $projection.BillOfMaterialInternalID_2 = _BillOfMaterialItemBasic.BillOfMaterial
                                                                                       and $projection.BOMItem                    = _BillOfMaterialItemBasic.BillOfMaterialItemNodeNumber
                                                                                       and $projection.BOMItemInternalChangeCount = _BillOfMaterialItemBasic.BOMItemInternalChangeCount
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
  association [0..1] to I_Batch                        as _Batch_2                     on  $projection.Material = _Batch_2.Material
                                                                                       and $projection.Plant    = _Batch_2.Plant
                                                                                       and $projection.Batch    = _Batch_2.Batch    
  association [1..1] to I_DebitCreditCode              as _DebitCreditCode             on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [1..1] to I_GoodsMovementType            as _GoodsMovementType           on  $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType
  association [1..1] to I_InventorySpecialStockType    as _InventorySpecialStockType   on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType
  association [0..1] to I_InvtrySpecialStockValnType as _InventorySpecialStockValnType on  $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventorySpecialStockValnType
  association [0..1] to I_ConsumptionPosting           as _ConsumptionPosting          on  $projection.ConsumptionPosting = _ConsumptionPosting.ConsumptionPosting
  association [0..1] to I_ProductionSupplyArea         as _SupplyArea                  on  $projection.Plant      = _SupplyArea.Plant
                                                                                       and $projection.SupplyArea = _SupplyArea.ProductionSupplyArea
  association [0..1] to I_Warehouse                    as _Warehouse                   on  $projection.Warehouse = _Warehouse.Warehouse
  association [0..1] to I_MatlCompDiscontinuationType  as _MatlCompDiscontinuationType on  $projection.MatlCompDiscontinuationType = _MatlCompDiscontinuationType.MatlCompDiscontinuationType
  association [0..1] to I_MatlCompProvisionType        as _ProvisionType               on  $projection.MaterialProvisionType = _ProvisionType.MaterialProvisionType
  association [0..1] to I_MatlCompSparePartType        as _SparePartType               on  $projection.MatlComponentSparePartType = _SparePartType.MatlComponentSparePartType
  association [0..1] to I_BusinessArea                 as _BusinessArea                on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_AccountAssignmentCategory    as _AccountAssignmentCategory   on  $projection.AccountAssignmentCategory = _AccountAssignmentCategory.AccountAssignmentCategory
  association [0..1] to I_CommitmentItemShortID        as _CommitmentItemShortID       on  $projection.CommitmentItemShortID = _CommitmentItemShortID.CommitmentItemShortID
  association [0..1] to I_Product                      as _Assembly                    on  $projection.Assembly = _Assembly.Product
  association [0..1] to I_Product                      as _FollowUpMaterial            on  $projection.FollowUpMaterial = _FollowUpMaterial.Product
  association [1..1] to I_UnitOfMeasure                as _BaseUnit                    on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [1..1] to I_UnitOfMeasure                as _EntryUnit                   on  $projection.EntryUnit = _EntryUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _OpLeadTimeOffsetUnit        on  $projection.OperationLeadTimeOffsetUnit = _OpLeadTimeOffsetUnit.UnitOfMeasure
  association [0..1] to I_Currency                     as _Currency                    on  $projection.Currency = _Currency.Currency
  association [0..1] to I_ChangeMaster                 as _ChangeNumber                on  $projection.ChangeNumber = _ChangeNumber.ChangeNumber
  -- to root
  association [1..1] to I_PlannedOrder                 as _PlannedOrder                on  $projection.PlannedOrder = _PlannedOrder.PlannedOrder
  -- to extension
  association [1..1] to E_ReservationDocumentItem      as _Extension                   on  $projection.Reservation     = _Extension.Reservation
                                                                                       and $projection.ReservationItem = _Extension.ReservationItem
                                                                                       and $projection.RecordType      = _Extension.RecordType
  -- start new associations for full coverage of text relations
  association [0..1] to I_Plant                        as _PlantText                   on  $projection.Plant = _PlantText.Plant
  association [0..*] to I_ProductText                  as _MaterialText                on  $projection.Material = _MaterialText.Product
  association [0..1] to I_ProductionVersion            as _ProductionVersionText       on  $projection.Material          = _ProductionVersionText.Material
                                                                                       and $projection.Plant             = _ProductionVersionText.Plant
                                                                                       and $projection.ProductionVersion = _ProductionVersionText.ProductionVersion
  association [0..1] to I_WBSElementBasicData          as _WBSElementText              on  $projection.WBSElementInternalID = _WBSElementText.WBSElementInternalID
  association [0..1] to I_StorageLocation              as _StorageLocationText         on  $projection.Plant           = _StorageLocationText.Plant
                                                                                       and $projection.StorageLocation = _StorageLocationText.StorageLocation
  association [0..*] to I_ProductionSupplyAreaText     as _SupplyAreaText              on  $projection.Plant      = _SupplyAreaText.Plant
                                                                                       and $projection.SupplyArea = _SupplyAreaText.ProductionSupplyArea
  association [0..1] to I_Supplier                     as _SupplierText                on  $projection.Supplier = _SupplierText.Supplier
  association [0..*] to I_ProductText                  as _AssemblyText                on  $projection.Assembly = _AssemblyText.Product
  association [0..*] to I_ProductText                  as _FollowUpMaterialText        on  $projection.FollowUpMaterial = _FollowUpMaterialText.Product
  association [0..*] to I_BusinessAreaText             as _BusinessAreaText            on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  -- end new associations for full coverage of text relations
{
      // Key
      @ObjectModel.foreignKey.association: '_Reservation'
  key resb.rsnum                                                    as Reservation,
      @ObjectModel.text.element: ['BOMItemDescription']
  key cast(resb.rspos as pph_rspos preserving type)                 as ReservationItem,
      @ObjectModel.foreignKey.association: '_ReservationDocRecordType'
  key cast(resb.rsart as pph_rsart preserving type)                 as RecordType,

      // Order data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderStdVH', element: 'PlannedOrder' } } ]
      @ObjectModel.foreignKey.association: '_PlannedOrder'
      plaf.PlannedOrder,
      @ObjectModel.foreignKey.association: '_PlannedOrderType'
      plaf.PlannedOrderType,

      // Date and Time
      @Semantics.businessDate.at: true
      cast(resb.bdter as pph_bdter preserving type)                 as MatlCompRequirementDate,
      cast(resb.bdztp as pph_bdztp preserving type)                 as MatlCompRequirementTime,

      // Attributes
      resb.kzear                                                    as ReservationIsFinallyIssued,
      cast(resb.xloek as pph_xloek preserving type)                 as MatlCompIsMarkedForDeletion,
      resb.xfehl                                                    as MaterialComponentIsMissing,
      resb.schgt                                                    as IsBulkMaterialComponent,
      resb.rgekz                                                    as MatlCompIsMarkedForBackflush,
      resb.txtps                                                    as MatlCompIsTextItem,
      resb.kfpos                                                    as MatlCompIsConfigurable,

      // Assignments
      @ObjectModel.foreignKey.association: '_RequirementType'      
      cast(resb.bdart as pph_bdart preserving type)                 as RequirementType,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      resb.matkl                                                    as MaterialGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Material'
      @ObjectModel.text.association: '_MaterialText'
      resb.matnr                                                    as Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      resb.werks                                                    as Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      @ObjectModel.foreignKey.association: '_MRPArea'
      plaf.MRPArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPControllerVH', element: 'MRPController' } } ]   
      @ObjectModel.foreignKey.association: '_MRPController'
      plaf.MRPController,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      plaf.ProductionSupervisor,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionVersionBasicStdVH', element: 'ProductionVersion' } } ]
      @ObjectModel.foreignKey.association: '_ProductionVersion'
      plaf.ProductionVersion,
--    @ObjectModel.foreignKey.association: '_RequirementPlan'
      resb.pbdnr                                                    as RequirementPlan,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      cast(resb.kdauf as co_kdauf preserving type)                  as SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      cast(resb.kdpos as co_kdpos preserving type)                  as SalesOrderItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID_2'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElement'
      cast(resb.pspel as pph_pspel preserving type)                 as WBSElementInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasic'
      cast(resb.pspel as ps_s4_pspnr preserving type)               as WBSElementInternalID_2,
      resb.cuobj                                                    as ProductConfiguration,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      cast(resb.aennr as changenumber preserving type)              as ChangeNumber,      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MatlCompFreeDefinedAttribute'
      resb.sortf                                                    as SortField,   
      resb.sortf                                                    as MatlCompFreeDefinedAttribute,
      cast(resb.revlv as vdm_qm_revlv preserving type)              as MaterialRevisionLevel,
      cast(resb.no_disp as vdm_no_disp preserving type)             as MaterialPlanningRelevance,

      // Assignments BOM
      cast(resb.stlty as pph_stlty preserving type)                 as BillOfMaterialCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfMaterialInternalID_2'
      resb.stlnr                                                    as BillOfMaterialInternalID,
      cast(resb.stlnr as pph_stnum preserving type)                 as BillOfMaterialInternalID_2,
      resb.stlal                                                    as BillOfMaterialVariant,
      cast(resb.stlkn as pph_stlkn preserving type)                 as BOMItem,
      resb.stpoz                                                    as BOMItemInternalChangeCount,
      cast(resb.postp as pph_postp preserving type)                 as BOMItemCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfMaterialItemNumber_2'
      @ObjectModel.text.element: ['BOMItemDescription']
      resb.posnr                                                    as BillOfMaterialItemNumber,
      @ObjectModel.text.element: ['BOMItemDescription']
      cast(resb.posnr as vdm_sposn preserving type)                 as BillOfMaterialItemNumber_2,
      @Semantics.text: true
      resb.potx1                                                    as BOMItemDescription,
      @Semantics.text: true
      resb.potx2                                                    as BOMItemText2,
      @ObjectModel.foreignKey.association: '_BOMExplosion'
      cast(resb.sernr as pph_sernr preserving type)                 as BOMExplosion,

      // Assignments Purchasing
--    @ObjectModel.foreignKey.association: '_PurchasingInfoRecord'
      cast(resb.infnr as pph_infnr preserving type)                 as PurchasingInfoRecord,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      cast(resb.ekgrp as pph_ekgrp preserving type)                 as PurchasingGroup,
--    @ObjectModel.foreignKey.association: '_PurchaseRequisition'
      cast(resb.banfn as co_banfn  preserving type)                 as PurchaseRequisition,
--    @ObjectModel.foreignKey.association: '_PurchaseRequisitionItem'
      cast(resb.bnfpo as co_bnfpo  preserving type)                 as PurchaseRequisitionItem,
--    @ObjectModel.foreignKey.association: '_PurchaseOrder'
      cast(resb.ebeln as vdm_purchaseorder     preserving type)     as PurchaseOrder,
--    @ObjectModel.foreignKey.association: '_PurchaseOrderItem'
      cast(resb.ebelp as vdm_purchaseorderitem preserving type)     as PurchaseOrderItem,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      resb.lifnr                                                    as Supplier,
      cast(resb.lifzt as pph_lifzt preserving type)                 as DeliveryDurationInDays,

      // Goods Movement data
      resb.xwaok                                                    as GoodsMovementIsAllowed,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      cast(resb.lgort as pph_lgort preserving type)                 as StorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      @ObjectModel.foreignKey.association: '_Batch_2'
      resb.charg                                                    as Batch,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      cast(resb.shkzg as pph_shkzg preserving type)                 as DebitCreditCode,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      resb.bwart                                                    as GoodsMovementType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      cast(resb.sobkz as inventoryspecialstocktype preserving type) as InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      cast(resb.kzbws as pph_kzbws preserving type)                 as InventorySpecialStockValnType,
      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      cast(resb.kzvbr as pph_kzvbr preserving type)                 as ConsumptionPosting,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionSupplyAreaStdVH', element: 'ProductionSupplyArea' } } ]
      @ObjectModel.foreignKey.association: '_SupplyArea'
      @ObjectModel.text.association: '_SupplyAreaText'
      cast(resb.prvbe as pph_prvbe preserving type)                 as SupplyArea,

      // Assignments WM
      resb.berkz                                                    as MaterialStaging,
      @ObjectModel.foreignKey.association: '_Warehouse'
      resb.lgnum                                                    as Warehouse,
      resb.lgtyp                                                    as StorageType,
      resb.lgpla                                                    as StorageBin,

      // Assignments FI/CO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @ObjectModel.text.association: '_BusinessAreaText'
      resb.gsber                                                    as BusinessArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' } } ]
      resb.saknr                                                    as GLAccount,
      @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'
      cast(resb.knttp as pph_knttp preserving type)                 as AccountAssignmentCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CommitmentItemShortID'
      cast(resb.fipos as bbpfipos  preserving type)                 as CommitmentItem,
      cast(resb.fipos as fmis_ci_internalname preserving type)      as CommitmentItemShortID,
      cast(resb.fistl as bbpfistl  preserving type)                 as FundsCenter,

      // Variable-size item data
      resb.rohps                                                    as MaterialCompIsVariableSized,
      cast(resb.roanz as vdm_roanz)                                 as NumberOfVariableSizeComponents,
      @Semantics.unitOfMeasure: true
      cast(resb.rokme as pph_rokme preserving type)                 as VariableSizeComponentUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeComponentUnit'
      @Aggregation.default: #SUM
      cast(resb.romen as pph_romen preserving type)                 as VariableSizeComponentQuantity,
      @Semantics.unitOfMeasure: true
      resb.romei                                                    as VariableSizeDimensionUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      @Aggregation.default: #MAX
      resb.roms1                                                    as VariableSizeDimension1,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      @Aggregation.default: #MAX
      resb.roms2                                                    as VariableSizeDimension2,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      @Aggregation.default: #MAX
      resb.roms3                                                    as VariableSizeDimension3,
      resb.rform                                                    as FormulaKey,

      // Alternative item data
      resb.alpos                                                    as MaterialCompIsAlternativeItem,
      cast(resb.alpgr as pph_alpgr preserving type)                 as AlternativeItemGroup,
      cast(resb.alpst as pph_alpst preserving type)                 as AlternativeItemStrategy,
      cast(resb.alprf as pph_alprf preserving type)                 as AlternativeItemPriority,
      resb.ewahr                                                    as UsageProbabilityPercent,
      cast(case resb.alpos
        when 'X' then resb.splrv
        else '0000'
      end as vdm_splrv_alt preserving type)                         as AlternativeMstrReservationItem,

      // Phantom assembly
      cast(resb.dumps as pph_dumps preserving type)                 as MaterialComponentIsPhantomItem,
      resb.aufwg                                                    as OrderPathValue,
      resb.aufst                                                    as OrderLevelValue,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Assembly'
      @ObjectModel.text.association: '_AssemblyText'
      resb.baugr                                                    as Assembly,
      resb.bauwg                                                    as AssemblyOrderPathValue,
      resb.baust                                                    as AssemblyOrderLevelValue,

      // Discontinuation
      cast(resb.nfeag as pph_nfeag preserving type)                 as DiscontinuationGroup,
      @ObjectModel.foreignKey.association: '_MatlCompDiscontinuationType'
      resb.kzaus                                                    as MatlCompDiscontinuationType,
      cast(resb.nfpkz as pph_kznfp preserving type)                 as MatlCompIsFollowUpMaterial,
      cast(resb.nfgrp as pph_nfgrp preserving type)                 as FollowUpGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_FollowUpMaterial'
      @ObjectModel.text.association: '_FollowUpMaterialText'
      cast(resb.nomat as pph_nomat preserving type)                 as FollowUpMaterial,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'FollowUpMaterialIsActive'
      cast(resb.nafkz as pph_nafkz preserving type)                 as FollowUpMaterialIsNotActive,
      cast(resb.nafkz as pph_nafkz preserving type)                 as FollowUpMaterialIsActive,
      cast(case resb.kzaus
        when '5' then resb.splrv 
        else '0000'
      end as vdm_splrv_dis preserving type)                         as DiscontinuationMasterResvnItem,

      // Material provision
      @ObjectModel.foreignKey.association: '_ProvisionType'
      cast(resb.beikz as vdm_beikz preserving type)                 as MaterialProvisionType,

      // Spare part
      @ObjectModel.foreignKey.association: '_SparePartType'
      cast(resb.erskz as vdm_erskz preserving type)                 as MatlComponentSparePartType,

      // Lead-Time offset
      cast(resb.nlfzt as pph_nlfzt preserving type)                 as LeadTimeOffset,
      @Semantics.unitOfMeasure: true
      cast(resb.nlfmv as pph_nlfmv preserving type)                 as OperationLeadTimeOffsetUnit,
      cast(resb.nlfzv as pph_nlfzv preserving type)                 as OperationLeadTimeOffset,

      // Quantities and UoM
      resb.fmeng                                                    as QuantityIsFixed,
      resb.ausch                                                    as ComponentScrapInPercent,
      -- Base unit
      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure: true
      resb.meins                                                    as BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      cast(resb.bdmng as requirementquantity preserving type)       as RequiredQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      cast(resb.enmng as pph_enmng preserving type)                 as WithdrawnQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      cast(resb.vmeng as pph_vmeng preserving type)                 as ConfirmedAvailableQuantity,
      -- Entry unit
      @ObjectModel.foreignKey.association: '_EntryUnit'
      @Semantics.unitOfMeasure: true
      resb.erfme                                                    as EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @Aggregation.default: #SUM
      cast(resb.erfmg as pph_erfmg preserving type)                 as GoodsMovementEntryQty,

      // Amount and Currency
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      resb.waers                                                    as Currency,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      resb.enwrt                                                    as WithdrawnQuantityAmount,

      // Fashion Manufacturing
      resb.sgt_scat                                                 as StockSegment,
      resb.sgt_rcat                                                 as RequirementSegment,
      resb.fsh_critical_comp                                        as CriticalComponentType,  
      resb.fsh_critical_level                                       as CriticalComponentLevel,
       
      // Associations
      _Reservation,
      _ReservationItem,
      _ReservationDocRecordType,
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _PlannedOrder,
      _PlannedOrderType,
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
      _ProductPlantMRPArea,
      _ProductSupplyPlanning,
      _ProductUnitsOfMeasure,
      _Plant,
      _MRPArea,
      _MRPController,
      _ProductionSupervisor,
      _ProductionVersion,
      _StorageLocation,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Batch_2'
      _Batch,
      _Batch_2,
      _DebitCreditCode,
      _GoodsMovementType,
      _InventorySpecialStockType,
      _InventorySpecialStockValnType,
      _ConsumptionPosting,
      _SupplyArea,
      _Warehouse,
      _SalesOrder,
      _SalesOrderItem,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasic'
      _WBSElement,
      _WBSElementBasic,
      _EnterpriseProjectElement,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BillOfMaterialItemBasic'
      _BillOfMaterialItem,
      _BillOfMaterialItemBasic,
      _BOMItemCategory,
      _BOMExplosion,
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
      _BusinessArea,
      _AccountAssignmentCategory,
      _CommitmentItemShortID,
      _Assembly,
      _FollowUpMaterial,
      _MatlCompDiscontinuationType,
      _ProvisionType,
      _SparePartType,
      _BaseUnit,
      _EntryUnit,
      _OpLeadTimeOffsetUnit,
      _Currency,
      _ChangeNumber,

      // Text relations
      _PlantText,
      _MaterialText,
      _ProductionVersionText,
      _WBSElementText,
      _StorageLocationText,
      _SupplyAreaText,
      _SupplierText,
      _AssemblyText,
      _FollowUpMaterialText,
      _BusinessAreaText
}
where resb.plnum <> ''
  and resb.kzkup =  ''
  and resb.postp <> 'D'; //no co-products & no documents
```
