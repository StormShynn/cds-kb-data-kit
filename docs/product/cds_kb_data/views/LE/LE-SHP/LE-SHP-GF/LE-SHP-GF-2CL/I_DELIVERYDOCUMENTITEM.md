---
name: I_DELIVERYDOCUMENTITEM
description: "Delivery DocumentUMENTITEM"
app_component: LE-SHP-GF-2CL
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
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - delivery-document
  - delivery
  - document
  - item-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
  - bo:DeliveryDocument
---
# I_DELIVERYDOCUMENTITEM

**Delivery DocumentUMENTITEM**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
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
| `DeliveryDocument` | ✓ | |  | `vbeln` |  |  |
| `DeliveryDocumentItem` | ✓ | |  | `posnr` |  |  |
| `SDDocumentCategory` |  | | `_DeliveryDocument` | `SDDocumentCategory` |  |  |
| `TransactionCurrency` |  | | `_DeliveryDocument` | `TransactionCurrency` |  |  |
| `DeliveryDocumentItemCategory` |  | |  | `pstyv` |  |  |
| `SalesDocumentItemType` |  | |  | `posar` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreationTime` |  | |  | `erzet` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `SalesGroup` |  | |  | `vkgrp` |  |  |
| `SalesOffice` |  | |  | `vkbur` |  |  |
| `DepartmentClassificationByCust` |  | |  | `abtnr` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `Product` |  | |  | `cast (matnr as productnumber preserving type )` |  |  |
| `MaterialByCustomer` |  | |  | `kdmat` |  |  |
| `OriginallyRequestedMaterial` |  | |  | `matwa` |  |  |
| `InternationalArticleNumber` |  | |  | `ean11` |  |  |
| `Batch` |  | |  | `charg` |  |  |
| `BatchClassification` |  | |  | `cuobj_ch` |  |  |
| `BatchBySupplier` |  | |  | `lichn` |  |  |
| `MaterialIsIntBatchManaged` |  | |  | `xchar` |  |  |
| `MaterialIsBatchManaged` |  | |  | `xchpf` |  |  |
| `MaterialGroup` |  | |  | `matkl` |  |  |
| `ProductGroup` |  | |  | `cast(matkl as productgroup preserving type )` |  |  |
| `MaterialFreightGroup` |  | |  | `mfrgr` |  |  |
| `AdditionalMaterialGroup1` |  | |  | `mvgr1` |  |  |
| `AdditionalMaterialGroup2` |  | |  | `mvgr2` |  |  |
| `AdditionalMaterialGroup3` |  | |  | `mvgr3` |  |  |
| `AdditionalMaterialGroup4` |  | |  | `mvgr4` |  |  |
| `AdditionalMaterialGroup5` |  | |  | `mvgr5` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `Warehouse` |  | |  | `lgnum` |  |  |
| `StorageLocation` |  | |  | `lgort` |  |  |
| `StorageBin` |  | |  | `lgpla` |  |  |
| `StorageType` |  | |  | `lgtyp` |  |  |
| `DeliveryItemResourceID` |  | |  | `resource_id` |  |  |
| `LoadingPointForDelivery` |  | |  | `loading_point` |  |  |
| `InventorySpecialStockType` |  | |  | `sobkz` |  |  |
| `ShelfLifeExpirationDate` |  | |  | `vfdat` |  |  |
| `NumberOfSerialNumbers` |  | |  | `anzsn` |  |  |
| `ProductConfiguration` |  | |  | `cuobj` |  |  |
| `ProductHierarchyNode` |  | |  | `prodh` |  |  |
| `ManufactureDate` |  | |  | `hsdat` |  |  |
| `DeliveryDocumentItemText` |  | |  | `arktx` |  |  |
| `HigherLevelItem` |  | |  | `uepos` |  |  |
| `HigherLvlItmOfBatSpltItm` |  | |  | `uecha` |  |  |
| `ActualDeliveryQuantity` |  | |  | `lfimg` |  |  |
| `QuantityIsFixed` |  | |  | `fmeng` |  |  |
| `OriginalDeliveryQuantity` |  | |  | `ormng` |  |  |
| `DeliveryQuantityUnit` |  | |  | `vrkme` |  |  |
| `ActualDeliveredQtyInBaseUnit` |  | |  | `lgmng` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `DeliveryToBaseQuantityDnmntr` |  | |  | `umvkn` |  |  |
| `DeliveryToBaseQuantityNmrtr` |  | |  | `umvkz` |  |  |
| `ProductAvailabilityDate` |  | |  | `mbdat` |  |  |
| `ProductAvailabilityTime` |  | |  | `mbuhr` |  |  |
| `DeliveryGroup` |  | |  | `grkor` |  |  |
| `ItemGrossWeight` |  | |  | `brgew` |  |  |
| `ItemNetWeight` |  | |  | `ntgew` |  |  |
| `ItemWeightUnit` |  | |  | `gewei` |  |  |
| `ItemVolume` |  | |  | `volum` |  |  |
| `ItemVolumeUnit` |  | |  | `voleh` |  |  |
| `InspectionLot` |  | |  | `qplos` |  |  |
| `InspectionPartialLot` |  | |  | `qtlos` |  |  |
| `PartialDeliveryIsAllowed` |  | |  | `kztlf` |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  | `uebtk` |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  | `uebto` |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  | `untto` |  |  |
| `WarehouseStorageBin` |  | |  | `lgpbe` |  |  |
| `BOMExplosion` |  | |  | `sernr` |  |  |
| `CustEngineeringChgStatus` |  | |  | `aeskd` |  |  |
| `WarehouseStagingArea` |  | |  | `lgbzo` |  |  |
| `WarehouseStockCategory` |  | |  | `bestq` |  |  |
| `IssgOrRcvgStockCategory` |  | |  | `umbsq` |  |  |
| `IssgOrRcvgMaterial` |  | |  | `ummat` |  |  |
| `IssuingOrReceivingPlant` |  | |  | `umwrk` |  |  |
| `IssuingOrReceivingStorageLoc` |  | |  | `umlgo` |  |  |
| `IssgOrRcvgBatch` |  | |  | `umcha` |  |  |
| `IssgOrRcvgValuationType` |  | |  | `umbar` |  |  |
| `IssgOrRcvgSpclStockInd` |  | |  | `umsok` |  |  |
| `IssgOrRcvgResourceID` |  | |  | `umresource_id` |  |  |
| `PrimaryPostingSwitch` |  | |  | `shkzg_um` |  |  |
| `StockType` |  | |  | `insmk` |  |  |
| `IsNotGoodsMovementsRelevant` |  | |  | `nowab` |  |  |
| `GLAccount` |  | |  | `konto` |  |  |
| `GoodsMovementReasonCode` |  | |  | `grund` |  |  |
| `SubsequentMovementType` |  | |  | `fobwa` |  |  |
| `IsCompletelyDelivered` |  | |  | `spe_gen_elikz` |  |  |
| `AlternateProductNumber` |  | |  | `spe_alternate` |  |  |
| `CumulativeBatchQtyInBaseUnit` |  | |  | `kcmeng` |  |  |
| `PickingControl` |  | |  | `komkz` |  |  |
| `LoadingGroup` |  | |  | `ladgr` |  |  |
| `GoodsMovementType` |  | |  | `bwart` |  |  |
| `TransportationGroup` |  | |  | `tragr` |  |  |
| `ReceivingPoint` |  | |  | `empst` |  |  |
| `FixedShipgProcgDurationInDays` |  | |  | `vbeaf` |  |  |
| `VarblShipgProcgDurationInDays` |  | |  | `vbeav` |  |  |
| `ProofOfDeliveryRelevanceCode` |  | |  | `podrel` |  |  |
| `ItemIsBillingRelevant` |  | |  | `fkrel` |  |  |
| `ItemBillingBlockReason` |  | |  | `faksp` |  |  |
| `PaymentGuaranteeForm` |  | |  | `abfor` |  |  |
| `IntercompanyBillingStatus` |  | |  | `case when fkivp is not initial then fkivp else ico_fkivp end` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `ProfitabilitySegment` |  | |  | `cast( case when paobjnr > '9999999999' then '9999999999' else lpad( paobjnr, 10, '0' ) end as rkeobjnr_numc )` |  |  |
| `ProfitabilitySegment_2` |  | |  | `cast( paobjnr as rkeobjnr_char )` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `InventoryValuationType` |  | |  | `bwtar` |  |  |
| `IsSeparateValuation` |  | |  | `bwtex` |  |  |
| `ConsumptionPosting` |  | |  | `kzvbr` |  |  |
| `OrderID` |  | |  | `aufnr` |  |  |
| `OrderItem` |  | |  | `posnr_pp` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `DeliveryDocumentItemBySupplier` |  | |  | `lifexpos` |  |  |
| `ReferenceSDDocument` |  | |  | `vgbel` |  |  |
| `ReferenceSDDocumentItem` |  | |  | `vgpos` |  |  |
| `ReferenceSDDocumentCategory` |  | |  | `vgtyp` |  |  |
| `PurchaseOrder` |  | |  | `case vgtyp when 'V' then cast ( vgbel as vdm_purchaseorder preserving type ) end` |  |  |
| `PurchaseOrderItem` |  | |  | `case vgtyp when 'V' then cast ( substring( vgpos, 2, 5 ) as vdm_purchaseorderitem ) end` |  |  |
| `ReferenceDocumentLogicalSystem` |  | |  | `vgsys` |  |  |
| `AdditionalCustomerGroup1` |  | |  | `kvgr1` |  |  |
| `AdditionalCustomerGroup2` |  | |  | `kvgr2` |  |  |
| `AdditionalCustomerGroup3` |  | |  | `kvgr3` |  |  |
| `AdditionalCustomerGroup4` |  | |  | `kvgr4` |  |  |
| `AdditionalCustomerGroup5` |  | |  | `kvgr5` |  |  |
| `RetailPromotion` |  | |  | `aktnr` |  |  |
| `StatisticsDate` |  | |  | `stadat` |  |  |
| `IntDeliveryScheduleNumber` |  | |  | `abrli` |  |  |
| `SchedulingAgreementReleaseType` |  | |  | `abart` |  |  |
| `SDProcessStatus` |  | |  | `gbsta` |  |  |
| `PickingConfirmationStatus` |  | |  | `koqua` |  |  |
| `PickingStatus` |  | |  | `kosta` |  |  |
| `WarehouseActivityStatus` |  | |  | `lvsta` |  |  |
| `PackingStatus` |  | |  | `pksta` |  |  |
| `GoodsMovementStatus` |  | |  | `wbsta` |  |  |
| `DeliveryRelatedBillingStatus` |  | |  | `fksta` |  |  |
| `ProofOfDeliveryStatus` |  | |  | `pdsta` |  |  |
| `ItemGeneralIncompletionStatus` |  | |  | `uvall` |  |  |
| `ItemDeliveryIncompletionStatus` |  | |  | `uvvlk` |  |  |
| `ItemPickingIncompletionStatus` |  | |  | `uvpik` |  |  |
| `ItemGdsMvtIncompletionSts` |  | |  | `uvwak` |  |  |
| `ItemPackingIncompletionStatus` |  | |  | `uvpak` |  |  |
| `ItemBillingIncompletionStatus` |  | |  | `uvfak` |  |  |
| `EU_DeliveryItemARCStatus` |  | |  | `arc_status` |  |  |
| `RequirementSegment` |  | |  | `sgt_rcat` |  |  |
| `StockSegment` |  | |  | `sgt_scat` |  |  |
| `ProductSeasonYear` |  | |  | `fsh_season_year` |  |  |
| `ProductSeason` |  | |  | `fsh_season` |  |  |
| `ProductCollection` |  | |  | `fsh_collection` |  |  |
| `ProductTheme` |  | |  | `fsh_theme` |  |  |
| `ProductCharacteristic1` |  | |  | `wrf_charstc1` |  |  |
| `ProductCharacteristic2` |  | |  | `wrf_charstc2` |  |  |
| `ProductCharacteristic3` |  | |  | `wrf_charstc3` |  |  |
| `ItemHasValueAddedService` |  | |  | `fsh_vas_rel` |  |  |
| `ValAddedSrvcParentItmNumber` |  | |  | `fsh_vas_prnt_id` |  |  |
| `ValAddedSrvcTransactionNumber` |  | |  | `fsh_transaction` |  |  |
| `ValAddedSrvcItemGroup` |  | |  | `fsh_item_group` |  |  |
| `ValAddedSrvcItemNumber` |  | |  | `fsh_item` |  |  |
| `OriginSDDocument` |  | |  | `vbelv` |  |  |
| `SDDocumentItem` |  | |  | `posnv` |  |  |
| `SalesSDDocumentCategory` |  | |  | `vbtyv` |  |  |
| `MaterialTypePrimary` |  | |  | `mtart` |  |  |
| `CostInDocumentCurrency` |  | |  | `wavwr` |  |  |
| `Subtotal1Amount` |  | |  | `kzwi1` |  |  |
| `Subtotal2Amount` |  | |  | `kzwi2` |  |  |
| `Subtotal3Amount` |  | |  | `kzwi3` |  |  |
| `Subtotal4Amount` |  | |  | `kzwi4` |  |  |
| `Subtotal5Amount` |  | |  | `kzwi5` |  |  |
| `Subtotal6Amount` |  | |  | `kzwi6` |  |  |
| `OrderDocument` |  | |  | `kdauf` |  |  |
| `PlanningMaterial` |  | |  | `vpmat` |  |  |
| `PlanningPlant` |  | |  | `vpwrk` |  |  |
| `ProductGroupBaseUnit` |  | |  | `prbme` |  |  |
| `ConversionFactor` |  | |  | `umref` |  |  |
| `IsReturnsItem` |  | |  | `case shkzg when 'X' then cast( 'X' as shkzg_va preserving type ) end` |  |  |
| `ReturnsDeliveryItemCode` |  | |  | `shkzg` |  |  |
| `ConditionUnit` |  | |  | `kmein` |  |  |
| `NetPriceAmount` |  | |  | `netpr` |  |  |
| `TotalNetAmount` |  | |  | `netwr` |  |  |
| `QtyInPurchaseOrderPriceUnit` |  | |  | `bpmng` |  |  |
| `CreditRelatedPrice` |  | |  | `cmpre_flt` |  |  |
| `CreditRelatedPriceAmount` |  | |  | `cast( round( fltp_to_dec( cmpre_flt as abap.dec(31,14) ), 2 ) as cmpre )` |  |  |
| `DeliveryToBaseUnitCnvrsnFctr` |  | |  | `umrev` |  |  |
| `FunctionalArea` |  | |  | `fkber` |  |  |
| `RFMReservation` |  | |  | `fsh_rsnum` |  |  |
| `RFMReservationItem` |  | |  | `fsh_rspos` |  |  |
| `Reservation` |  | |  | `rsnum` |  |  |
| `ReservationItem` |  | |  | `rspos` |  |  |
| `ReservationRecordType` |  | |  | `rsart` |  |  |
| `ChmlCmplncStatus` |  | |  | `pcsta` |  |  |
| `DangerousGoodsStatus` |  | |  | `dgsta` |  |  |
| `SafetyDataSheetStatus` |  | |  | `sdssta` |  |  |
| `TrdCmplncEmbargoSts` |  | |  | `emcst` |  |  |
| `TrdCmplncSnctndListChkSts` |  | |  | `slcst` |  |  |
| `TrdCmplncLegalControlSts` |  | |  | `lccst` |  |  |
| `HigherLevelItemUsage` |  | |  | `uepvw` |  |  |
| `FldLogsStatus` |  | |  | `flpkz` |  |  |
| `BatchSearchStrategy` |  | |  | `knumh_ch` |  |  |
| `ValueChainInstanceChar32UUID` |  | |  | `vcm_chain_uuid` |  |  |
| `ValueChainCategory` |  | |  | `vcm_chain_category` |  |  |
| `IntcoRefSDDocumentCategory` |  | |  | `ico_vgtyp` |  |  |
| `IntcoRefSDDocument` |  | |  | `ico_vgbel` |  |  |
| `IntcoRefSDDocumentItem` |  | |  | `ico_vgpos` |  |  |
| `ServiceDocumentType` |  | |  | `service_doc_type` |  |  |
| `ServiceDocument` |  | |  | `service_doc_id` |  |  |
| `ServiceDocumentItem` |  | |  | `service_doc_item_id` |  |  |
| `WBSElementInternalID` |  | |  | `cast ( ps_psp_pnr as ps_s4_pspnr preserving type )` |  |  |
| `_DeliveryDocument` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_SalesDocumentItemType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_OriginallyRequestedMaterial` | | ✓ | | | | |
| `_ProductHierarchyNode` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_MaterialFreightGroup` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Warehouse` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_DeliveryQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_BOMExplosion` | | ✓ | | | | |
| `_WarehouseStagingArea` | | ✓ | | | | |
| `_PickingControl` | | ✓ | | | | |
| `_LoadingGroup` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_TransportationGroup` | | ✓ | | | | |
| `_ItemIsBillingRelevant` | | ✓ | | | | |
| `_ItemBillingBlockReason` | | ✓ | | | | |
| `_PaymentGuaranteeForm` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_OrderID` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ReferenceSDDocument` | | ✓ | | | | |
| `_ReferenceSalesDocumentItem` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_IntcoRefSDDocument` | | ✓ | | | | |
| `_IntcoRefSDDocumentItem` | | ✓ | | | | |
| `_IntcoRefSDDocumentCategory` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_SDProcessStatus` | | ✓ | | | | |
| `_PickingConfirmationStatus` | | ✓ | | | | |
| `_PickingStatus` | | ✓ | | | | |
| `_WarehouseActivityStatus` | | ✓ | | | | |
| `_PackingStatus` | | ✓ | | | | |
| `_GoodsMovementStatus` | | ✓ | | | | |
| `_DeliveryRelatedBillingStatus` | | ✓ | | | | |
| `_IntercompanyBillingStatus` | | ✓ | | | | |
| `_ProofOfDeliveryStatus` | | ✓ | | | | |
| `_ItemGeneralIncompletionStatus` | | ✓ | | | | |
| `_ItemDelivIncompletionSts` | | ✓ | | | | |
| `_ItemPickingIncompletionStatus` | | ✓ | | | | |
| `_ItemGdsMvtIncompletionSts` | | ✓ | | | | |
| `_ItemPackingIncompletionStatus` | | ✓ | | | | |
| `_ItemBillingIncompletionStatus` | | ✓ | | | | |
| `_StockType` | | ✓ | | | | |
| `_StockType_2` | | ✓ | | | | |
| `_StockCategory` | | ✓ | | | | |
| `_ChmlCmplncStatus` | | ✓ | | | | |
| `_DangerousGoodsStatus` | | ✓ | | | | |
| `_SafetyDataSheetStatus` | | ✓ | | | | |
| `_TrdCmplncEmbargoSts` | | ✓ | | | | |
| `_TrdCmplncSnctndListChkSts` | | ✓ | | | | |
| `_TrdCmplncLegalControlSts` | | ✓ | | | | |
| `_ExciseTaxStatus` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_SchedgAgrmtRelType` | | ✓ | | | | |
| `_ValueChainCategory` | | ✓ | | | | |
| `_FieldLogisticsIndicator` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_HigherLevelItemUsage` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryDocument` | `I_DeliveryDocument` | [1..1] |
| `_Partner` | `I_SDDocumentItemPartner` | [0..*] |
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_ItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |
| `_SalesDocumentItemType` | `I_SalesDocumentItemType` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_OriginallyRequestedMaterial` | `I_Material` | [0..1] |
| `_ProductHierarchyNode` | `I_ProductHierarchyNode` | [0..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_MaterialFreightGroup` | `I_MaterialFreightGroup` | [0..1] |
| `_AdditionalMaterialGroup1` | `I_AdditionalMaterialGroup1` | [0..1] |
| `_AdditionalMaterialGroup2` | `I_AdditionalMaterialGroup2` | [0..1] |
| `_AdditionalMaterialGroup3` | `I_AdditionalMaterialGroup3` | [0..1] |
| `_AdditionalMaterialGroup4` | `I_AdditionalMaterialGroup4` | [0..1] |
| `_AdditionalMaterialGroup5` | `I_AdditionalMaterialGroup5` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Warehouse` | `I_Warehouse` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_DeliveryQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ItemWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ItemVolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BOMExplosion` | `I_BOMExplosionDate` | [0..1] |
| `_WarehouseStagingArea` | `I_WarehouseStagingArea` | [0..1] |
| `_PickingControl` | `I_PickingControl` | [0..1] |
| `_LoadingGroup` | `I_LoadingGroup` | [0..1] |
| `_GoodsMovementType` | `I_GoodsMovementType` | [0..1] |
| `_TransportationGroup` | `I_TransportationGroup` | [0..1] |
| `_ItemIsBillingRelevant` | `I_BillingRelevanceCode` | [0..1] |
| `_ItemBillingBlockReason` | `I_BillingBlockReason` | [0..1] |
| `_PaymentGuaranteeForm` | `I_PaymentGuaranteeForm` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_OrderID` | `I_MfgOrder` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..1] |
| `_ReferenceSDDocument` | `I_SalesDocument` | [0..1] |
| `_ReferenceSalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [0..1] |
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [0..1] |
| `_ReferenceSDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_IntcoRefSDDocument` | `I_SalesDocument` | [0..1] |
| `_IntcoRefSDDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_IntcoRefSDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_LogicalSystem` | `I_LogicalSystem` | [0..1] |
| `_AdditionalCustomerGroup1` | `I_AdditionalCustomerGroup1` | [0..1] |
| `_AdditionalCustomerGroup2` | `I_AdditionalCustomerGroup2` | [0..1] |
| `_AdditionalCustomerGroup3` | `I_AdditionalCustomerGroup3` | [0..1] |
| `_AdditionalCustomerGroup4` | `I_AdditionalCustomerGroup4` | [0..1] |
| `_AdditionalCustomerGroup5` | `I_AdditionalCustomerGroup5` | [0..1] |
| `_SDProcessStatus` | `I_SDProcessStatus` | [0..1] |
| `_PickingConfirmationStatus` | `I_PickingConfirmationStatus` | [0..1] |
| `_PickingStatus` | `I_PickingStatus` | [0..1] |
| `_WarehouseActivityStatus` | `I_WarehouseActivityStatus` | [0..1] |
| `_PackingStatus` | `I_PackingStatus` | [0..1] |
| `_GoodsMovementStatus` | `I_GoodsMovementStatus` | [0..1] |
| `_DeliveryRelatedBillingStatus` | `I_DeliveryRelatedBillgStatus` | [0..1] |
| `_IntercompanyBillingStatus` | `I_DeliveryRelatedBillgStatus` | [0..1] |
| `_ProofOfDeliveryStatus` | `I_ProofOfDeliveryStatus` | [0..1] |
| `_ItemGeneralIncompletionStatus` | `I_ItemGenIncompletionStatus` | [0..1] |
| `_ItemDelivIncompletionSts` | `I_ItemDelivIncompletionSts` | [0..1] |
| `_ItemPickingIncompletionStatus` | `I_ItemPickingIncompletionSts` | [0..1] |
| `_ItemGdsMvtIncompletionSts` | `I_ItemGdsMvtIncompletionSts` | [0..1] |
| `_ItemPackingIncompletionStatus` | `I_ItemPackingIncompletionSts` | [0..1] |
| `_ItemBillingIncompletionStatus` | `I_ItemBillingIncompletionSts` | [0..1] |
| `_StockType` | `I_StockType` | [0..1] |
| `_StockType_2` | `I_StockType_2` | [0..1] |
| `_StockCategory` | `I_StockCategory` | [0..1] |
| `_ChmlCmplncStatus` | `I_DelivChmlCmplncStatus` | [0..1] |
| `_DangerousGoodsStatus` | `I_DelivDangerousGoodsStatus` | [0..1] |
| `_SafetyDataSheetStatus` | `I_DelivSafetyDataSheetSts` | [0..1] |
| `_TrdCmplncEmbargoSts` | `I_TrdCmplncCheckStatus` | [0..1] |
| `_TrdCmplncSnctndListChkSts` | `I_TrdCmplncCheckStatus` | [0..1] |
| `_TrdCmplncLegalControlSts` | `I_TrdCmplncCheckStatus` | [0..1] |
| `_ExciseTaxStatus` | `I_ExciseTaxStatus` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_SchedgAgrmtRelType` | `I_SchedgAgrmtRelType` | [0..1] |
| `_ValueChainCategory` | `I_ValueChainCategory` | [0..1] |
| `_FieldLogisticsIndicator` | `I_FieldLogisticsIndicator` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_Extension` | `E_DeliveryDocumentItem` | [0..1] |
| `_HigherLevelItemUsage` | `I_HigherLevelItemUsage` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.representativeKey: 'DeliveryDocumentItem'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Delivery Document Item'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                             { mapping:
                             [{role: #MAIN,
                               table: 'lips',
                               tableElement: ['vbeln','posnr'],
                               viewElement: ['DeliveryDocument', 'DeliveryDocumentItem']
                               }]
                             }
                           }
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AbapCatalog.sqlViewName: 'ILEDELIVDOCITEM'
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name:'DeliveryDocument'

define view I_DeliveryDocumentItem
  as select from lips

  // Associations
  association [1..1] to I_DeliveryDocument           as _DeliveryDocument              on  $projection.DeliveryDocument = _DeliveryDocument.DeliveryDocument
  association [0..*] to I_SDDocumentItemPartner      as _Partner                       on  $projection.DeliveryDocument     = _Partner.SDDocument
                                                                                       and $projection.DeliveryDocumentItem = _Partner.SDDocumentItem
  association [0..1] to I_SDDocumentCategory         as _SDDocumentCategory            on  $projection.sddocumentcategory = _SDDocumentCategory.SDDocumentCategory
  association [0..1] to I_SalesDocumentItemCategory  as _ItemCategory                  on  $projection.DeliveryDocumentItemCategory = _ItemCategory.SalesDocumentItemCategory
  association [0..1] to I_SalesDocumentItemType      as _SalesDocumentItemType         on  $projection.SalesDocumentItemType = _SalesDocumentItemType.SalesDocumentItemType
  association [0..1] to I_User                       as _CreatedByUser                 on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_DistributionChannel        as _DistributionChannel           on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division                   as _Division                      on  $projection.Division = _Division.Division
  association [0..1] to I_SalesGroup                 as _SalesGroup                    on  $projection.SalesGroup = _SalesGroup.SalesGroup
  association [0..1] to I_SalesOffice                as _SalesOffice                   on  $projection.SalesOffice = _SalesOffice.SalesOffice
  association [0..1] to I_Material                   as _Material                      on  $projection.Material = _Material.Material
  association [0..1] to I_Product                    as _Product                       on  $projection.Product = _Product.Product
  association [0..1] to I_Material                   as _OriginallyRequestedMaterial   on  $projection.OriginallyRequestedMaterial = _OriginallyRequestedMaterial.Material
  association [0..1] to I_ProductHierarchyNode       as _ProductHierarchyNode          on  $projection.ProductHierarchyNode = _ProductHierarchyNode.ProductHierarchyNode
  association [0..1] to I_MaterialGroup              as _MaterialGroup                 on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup
  association [0..1] to I_ProductGroup_2             as _ProductGroup                  on  $projection.ProductGroup = _ProductGroup.ProductGroup
  association [0..1] to I_MaterialFreightGroup       as _MaterialFreightGroup          on  $projection.MaterialFreightGroup = _MaterialFreightGroup.MaterialFreightGroup
  association [0..1] to I_AdditionalMaterialGroup1   as _AdditionalMaterialGroup1      on  $projection.AdditionalMaterialGroup1 = _AdditionalMaterialGroup1.AdditionalMaterialGroup1
  association [0..1] to I_AdditionalMaterialGroup2   as _AdditionalMaterialGroup2      on  $projection.AdditionalMaterialGroup2 = _AdditionalMaterialGroup2.AdditionalMaterialGroup2
  association [0..1] to I_AdditionalMaterialGroup3   as _AdditionalMaterialGroup3      on  $projection.AdditionalMaterialGroup3 = _AdditionalMaterialGroup3.AdditionalMaterialGroup3
  association [0..1] to I_AdditionalMaterialGroup4   as _AdditionalMaterialGroup4      on  $projection.AdditionalMaterialGroup4 = _AdditionalMaterialGroup4.AdditionalMaterialGroup4
  association [0..1] to I_AdditionalMaterialGroup5   as _AdditionalMaterialGroup5      on  $projection.AdditionalMaterialGroup5 = _AdditionalMaterialGroup5.AdditionalMaterialGroup5
  association [0..1] to I_Plant                      as _Plant                         on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Warehouse                  as _Warehouse                     on  $projection.Warehouse = _Warehouse.Warehouse
  association [0..1] to I_StorageLocation            as _StorageLocation               on  $projection.Plant           = _StorageLocation.Plant
                                                                                       and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_InventorySpecialStockType  as _InventorySpecialStockType     on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType
  association [0..1] to I_UnitOfMeasure              as _DeliveryQuantityUnit          on  $projection.DeliveryQuantityUnit = _DeliveryQuantityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _BaseUnit                      on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _ItemWeightUnit                on  $projection.ItemWeightUnit = _ItemWeightUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _ItemVolumeUnit                on  $projection.ItemVolumeUnit = _ItemVolumeUnit.UnitOfMeasure
  association [0..1] to I_BOMExplosionDate           as _BOMExplosion                  on  $projection.BOMExplosion = _BOMExplosion.BOMExplosionDateID
  association [0..1] to I_WarehouseStagingArea       as _WarehouseStagingArea          on  $projection.Warehouse            = _WarehouseStagingArea.Warehouse
                                                                                       and $projection.WarehouseStagingArea = _WarehouseStagingArea.WarehouseStagingArea
  association [0..1] to I_PickingControl             as _PickingControl                on  $projection.PickingControl = _PickingControl.PickingControl
  association [0..1] to I_LoadingGroup               as _LoadingGroup                  on  $projection.LoadingGroup = _LoadingGroup.LoadingGroup
  association [0..1] to I_GoodsMovementType          as _GoodsMovementType             on  $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType
  association [0..1] to I_TransportationGroup        as _TransportationGroup           on  $projection.TransportationGroup = _TransportationGroup.TransportationGroup
  association [0..1] to I_BillingRelevanceCode       as _ItemIsBillingRelevant         on  $projection.ItemIsBillingRelevant = _ItemIsBillingRelevant.BillingRelevanceCode
  association [0..1] to I_BillingBlockReason         as _ItemBillingBlockReason        on  $projection.ItemBillingBlockReason = _ItemBillingBlockReason.BillingBlockReason
  association [0..1] to I_PaymentGuaranteeForm       as _PaymentGuaranteeForm          on  $projection.PaymentGuaranteeForm = _PaymentGuaranteeForm.PaymentGuaranteeForm
  association [0..1] to I_BusinessArea               as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_ControllingArea            as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_ProfitCenter               as _ProfitCenter                  on  $projection.ProfitCenter        = _ProfitCenter.ProfitCenter
                                                                                       and $projection.ControllingArea     = _ProfitCenter.ControllingArea
                                                                                       and _ProfitCenter.ValidityEndDate   >= $projection.CreationDate
                                                                                       and _ProfitCenter.ValidityStartDate <= $projection.CreationDate
  association [0..1] to I_InventoryValuationType     as _InventoryValuationType        on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType
  association [0..1] to I_MfgOrder                   as _OrderID                       on  $projection.OrderID = _OrderID.ManufacturingOrder
  association [0..1] to I_CostCenter                 as _CostCenter                    on  $projection.CostCenter        = _CostCenter.CostCenter
                                                                                       and $projection.ControllingArea   = _CostCenter.ControllingArea
                                                                                       and _CostCenter.ValidityEndDate   >= $projection.CreationDate
                                                                                       and _CostCenter.ValidityStartDate <= $projection.CreationDate
  association [0..1] to I_SalesDocument              as _ReferenceSDDocument           on  $projection.ReferenceSDDocument = _ReferenceSDDocument.SalesDocument
  association [0..1] to I_SalesDocumentItem          as _ReferenceSalesDocumentItem    on  $projection.ReferenceSDDocument           = _ReferenceSalesDocumentItem.SalesDocument
                                                                                       and $projection.ReferenceSDDocumentItem       = _ReferenceSalesDocumentItem.SalesDocumentItem
                                                                                       and (
                                                                                          $projection.ReferenceSDDocumentCategory    = 'C'
                                                                                          or $projection.ReferenceSDDocumentCategory = 'H'
                                                                                        )
  association [0..1] to I_PurchaseOrderAPI01         as _PurchaseOrder                 on $projection.PurchaseOrder = _PurchaseOrder.PurchaseOrder                                                                                      
  association [0..1] to I_PurchaseOrderItemAPI01     as _PurchaseOrderItem             on $projection.PurchaseOrder     = _PurchaseOrderItem.PurchaseOrder                                                                                      
                                                                                      and $projection.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem   
  association [0..1] to I_SDDocumentCategory         as _ReferenceSDDocumentCategory   on  $projection.ReferenceSDDocumentCategory = _ReferenceSDDocumentCategory.SDDocumentCategory
  association [0..1] to I_SalesDocument              as _IntcoRefSDDocument            on  $projection.IntcoRefSDDocument  = _IntcoRefSDDocument.SalesDocument
  association [0..1] to I_SalesDocumentItem          as _IntcoRefSDDocumentItem        on  $projection.IntcoRefSDDocument            = _IntcoRefSDDocumentItem.SalesDocument
                                                                                       and $projection.IntcoRefSDDocumentItem        = _IntcoRefSDDocumentItem.SalesDocumentItem
                                                                                       and (
                                                                                          $projection.IntcoRefSDDocumentCategory     = 'C'
                                                                                          or $projection.IntcoRefSDDocumentCategory  = 'H'
                                                                                        )
  association [0..1] to I_SDDocumentCategory         as _IntcoRefSDDocumentCategory    on  $projection.IntcoRefSDDocumentCategory  = _IntcoRefSDDocumentCategory.SDDocumentCategory
  association [0..1] to I_LogicalSystem              as _LogicalSystem                 on  $projection.ReferenceDocumentLogicalSystem = _LogicalSystem.LogicalSystem
  association [0..1] to I_AdditionalCustomerGroup1   as _AdditionalCustomerGroup1      on  $projection.AdditionalCustomerGroup1 = _AdditionalCustomerGroup1.AdditionalCustomerGroup1
  association [0..1] to I_AdditionalCustomerGroup2   as _AdditionalCustomerGroup2      on  $projection.AdditionalCustomerGroup2 = _AdditionalCustomerGroup2.AdditionalCustomerGroup2
  association [0..1] to I_AdditionalCustomerGroup3   as _AdditionalCustomerGroup3      on  $projection.AdditionalCustomerGroup3 = _AdditionalCustomerGroup3.AdditionalCustomerGroup3
  association [0..1] to I_AdditionalCustomerGroup4   as _AdditionalCustomerGroup4      on  $projection.AdditionalCustomerGroup4 = _AdditionalCustomerGroup4.AdditionalCustomerGroup4
  association [0..1] to I_AdditionalCustomerGroup5   as _AdditionalCustomerGroup5      on  $projection.AdditionalCustomerGroup5 = _AdditionalCustomerGroup5.AdditionalCustomerGroup5
  association [0..1] to I_SDProcessStatus            as _SDProcessStatus               on  $projection.SDProcessStatus = _SDProcessStatus.SDProcessStatus
  association [0..1] to I_PickingConfirmationStatus  as _PickingConfirmationStatus     on  $projection.PickingConfirmationStatus = _PickingConfirmationStatus.PickingConfirmationStatus
  association [0..1] to I_PickingStatus              as _PickingStatus                 on  $projection.PickingStatus = _PickingStatus.PickingStatus
  association [0..1] to I_WarehouseActivityStatus    as _WarehouseActivityStatus       on  $projection.WarehouseActivityStatus = _WarehouseActivityStatus.WarehouseActivityStatus
  association [0..1] to I_PackingStatus              as _PackingStatus                 on  $projection.PackingStatus = _PackingStatus.PackingStatus
  association [0..1] to I_GoodsMovementStatus        as _GoodsMovementStatus           on  $projection.GoodsMovementStatus = _GoodsMovementStatus.GoodsMovementStatus
  association [0..1] to I_DeliveryRelatedBillgStatus as _DeliveryRelatedBillingStatus  on  $projection.DeliveryRelatedBillingStatus = _DeliveryRelatedBillingStatus.DeliveryRelatedBillingStatus
  association [0..1] to I_DeliveryRelatedBillgStatus as _IntercompanyBillingStatus     on  $projection.IntercompanyBillingStatus = _IntercompanyBillingStatus.DeliveryRelatedBillingStatus
  association [0..1] to I_ProofOfDeliveryStatus      as _ProofOfDeliveryStatus         on  $projection.ProofOfDeliveryStatus = _ProofOfDeliveryStatus.ProofOfDeliveryStatus
  association [0..1] to I_ItemGenIncompletionStatus  as _ItemGeneralIncompletionStatus on  $projection.ItemGeneralIncompletionStatus = _ItemGeneralIncompletionStatus.ItemGeneralIncompletionStatus
  association [0..1] to I_ItemDelivIncompletionSts   as _ItemDelivIncompletionSts      on  $projection.ItemDeliveryIncompletionStatus = _ItemDelivIncompletionSts.ItemDeliveryIncompletionStatus
  association [0..1] to I_ItemPickingIncompletionSts as _ItemPickingIncompletionStatus on  $projection.ItemPickingIncompletionStatus = _ItemPickingIncompletionStatus.ItemPickingIncompletionStatus
  association [0..1] to I_ItemGdsMvtIncompletionSts  as _ItemGdsMvtIncompletionSts     on  $projection.ItemGdsMvtIncompletionSts = _ItemGdsMvtIncompletionSts.ItemGdsMvtIncompletionSts
  association [0..1] to I_ItemPackingIncompletionSts as _ItemPackingIncompletionStatus on  $projection.ItemPackingIncompletionStatus = _ItemPackingIncompletionStatus.ItemPackingIncompletionStatus
  association [0..1] to I_ItemBillingIncompletionSts as _ItemBillingIncompletionStatus on  $projection.ItemBillingIncompletionStatus = _ItemBillingIncompletionStatus.ItemBillingIncompletionStatus
  association [0..1] to I_StockType                  as _StockType                     on  $projection.StockType = _StockType.StockType
  association [0..1] to I_StockType_2                as _StockType_2                   on  $projection.StockType = _StockType_2.StockType
  association [0..1] to I_StockCategory              as _StockCategory                 on  $projection.WarehouseStockCategory = _StockCategory.WarehouseStockCategory
  association [0..1] to I_DelivChmlCmplncStatus      as _ChmlCmplncStatus              on  $projection.ChmlCmplncStatus = _ChmlCmplncStatus.ChmlCmplncStatus
  association [0..1] to I_DelivDangerousGoodsStatus  as _DangerousGoodsStatus          on  $projection.DangerousGoodsStatus = _DangerousGoodsStatus.DangerousGoodsStatus
  association [0..1] to I_DelivSafetyDataSheetSts    as _SafetyDataSheetStatus         on  $projection.SafetyDataSheetStatus = _SafetyDataSheetStatus.SafetyDataSheetStatus
  association [0..1] to I_TrdCmplncCheckStatus       as _TrdCmplncEmbargoSts           on  $projection.TrdCmplncEmbargoSts = _TrdCmplncEmbargoSts.TrdCmplncCheckStatus
  association [0..1] to I_TrdCmplncCheckStatus       as _TrdCmplncSnctndListChkSts     on  $projection.TrdCmplncSnctndListChkSts = _TrdCmplncSnctndListChkSts.TrdCmplncCheckStatus
  association [0..1] to I_TrdCmplncCheckStatus       as _TrdCmplncLegalControlSts      on  $projection.TrdCmplncLegalControlSts = _TrdCmplncLegalControlSts.TrdCmplncCheckStatus
  association [0..1] to I_ExciseTaxStatus            as _ExciseTaxStatus               on  $projection.EU_DeliveryItemARCStatus = _ExciseTaxStatus.EU_ARCStatus
  association [0..1] to I_Batch                      as _Batch                         on  $projection.Batch    = _Batch.Batch
                                                                                       and $projection.Material = _Batch.Material
                                                                                       and $projection.Plant    = _Batch.Plant
  //  association [0..*] to I_SchedgAgrmtRelTypeT        as _SchedgAgrmtRelTypeText        on  $projection.SchedulingAgreementReleaseType = _SchedgAgrmtRelTypeText.SchedulingAgreementReleaseType
  association [0..1] to I_SchedgAgrmtRelType         as _SchedgAgrmtRelType            on  $projection.SchedulingAgreementReleaseType = _SchedgAgrmtRelType.SchedulingAgreementReleaseType
  
  association [0..1] to I_ValueChainCategory         as _ValueChainCategory            on $projection.ValueChainCategory = _ValueChainCategory.ValueChainCategory
  association [0..1] to I_FieldLogisticsIndicator    as _FieldLogisticsIndicator       on $projection.FldLogsStatus = _FieldLogisticsIndicator.FldLogsStatus   
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasicData           on $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID 

  association [0..1] to I_ServiceDocumentType        as _ServiceDocumentType           on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType

  //Extensibility
  association [0..1] to E_DeliveryDocumentItem       as _Extension                     on  $projection.DeliveryDocument     = _Extension.DeliveryDocument
                                                                                       and $projection.DeliveryDocumentItem = _Extension.DeliveryDocumentItem
  association [0..1] to I_HigherLevelItemUsage       as _HigherLevelItemUsage          on  $projection.HigherLevelItemUsage = _HigherLevelItemUsage.HigherLevelItemUsage



{
      //key
      @ObjectModel.foreignKey.association: '_DeliveryDocument'
  key vbeln                                                                    as DeliveryDocument,
  key posnr                                                                    as DeliveryDocumentItem,

      
      //category
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      _DeliveryDocument.SDDocumentCategory,
      @Semantics.currencyCode: true
      _DeliveryDocument.TransactionCurrency,
      @ObjectModel.foreignKey.association: '_ItemCategory'
      pstyv                                                                    as DeliveryDocumentItemCategory,
      @ObjectModel.foreignKey.association: '_SalesDocumentItemType'
      posar                                                                    as SalesDocumentItemType,

      //admin
      ernam                                                                    as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      erdat                                                                    as CreationDate,
      erzet                                                                    as CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      aedat                                                                    as LastChangeDate,

      //organization
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      vtweg                                                                    as DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                                                    as Division,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      vkgrp                                                                    as SalesGroup,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      vkbur                                                                    as SalesOffice,
      abtnr                                                                    as DepartmentClassificationByCust,

      //product
      @ObjectModel.foreignKey.association: '_Material'
      matnr                                                                    as Material,
      @ObjectModel.foreignKey.association: '_Product'
      cast (matnr as productnumber preserving type )                           as Product,
      kdmat                                                                    as MaterialByCustomer,
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      matwa                                                                    as OriginallyRequestedMaterial,
      ean11                                                                    as InternationalArticleNumber,
      charg                                                                    as Batch,
      cuobj_ch                                                                 as BatchClassification,
      lichn                                                                    as BatchBySupplier,
      xchar                                                                    as MaterialIsIntBatchManaged,
      xchpf                                                                    as MaterialIsBatchManaged,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      matkl                                                                    as MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      cast(matkl as productgroup preserving type )                             as ProductGroup,
      @ObjectModel.foreignKey.association: '_MaterialFreightGroup'
      mfrgr                                                                    as MaterialFreightGroup,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      mvgr1                                                                    as AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      mvgr2                                                                    as AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      mvgr3                                                                    as AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      mvgr4                                                                    as AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      mvgr5                                                                    as AdditionalMaterialGroup5,
      @ObjectModel.foreignKey.association: '_Plant'
      werks                                                                    as Plant,
      @ObjectModel.foreignKey.association: '_Warehouse'
      lgnum                                                                    as Warehouse,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      lgort                                                                    as StorageLocation,
      lgpla                                                                    as StorageBin,
      lgtyp                                                                    as StorageType,
      resource_id                                                              as DeliveryItemResourceID,

      loading_point                                                            as LoadingPointForDelivery,

      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      sobkz                                                                    as InventorySpecialStockType,
      vfdat                                                                    as ShelfLifeExpirationDate,
      @Aggregation.default: #SUM
      anzsn                                                                    as NumberOfSerialNumbers,
      cuobj                                                                    as ProductConfiguration,
      prodh                                                                    as ProductHierarchyNode,
      hsdat                                                                    as ManufactureDate,

      //delivery
      arktx                                                                    as DeliveryDocumentItemText,
      uepos                                                                    as HigherLevelItem,
      uecha                                                                    as HigherLvlItmOfBatSpltItm,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DeliveryQuantityUnit'
      lfimg                                                                    as ActualDeliveryQuantity,
      fmeng                                                                    as QuantityIsFixed,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DeliveryQuantityUnit'
      ormng                                                                    as OriginalDeliveryQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_DeliveryQuantityUnit'
      vrkme                                                                    as DeliveryQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      lgmng                                                                    as ActualDeliveredQtyInBaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      meins                                                                    as BaseUnit,
      umvkn                                                                    as DeliveryToBaseQuantityDnmntr,
      umvkz                                                                    as DeliveryToBaseQuantityNmrtr,
      mbdat                                                                    as ProductAvailabilityDate,
      mbuhr                                                                    as ProductAvailabilityTime,
      grkor                                                                    as DeliveryGroup,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      brgew                                                                    as ItemGrossWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ntgew                                                                    as ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      gewei                                                                    as ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      volum                                                                    as ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      voleh                                                                    as ItemVolumeUnit,
      qplos                                                                    as InspectionLot,
      qtlos                                                                    as InspectionPartialLot,
      kztlf                                                                    as PartialDeliveryIsAllowed,
      uebtk                                                                    as UnlimitedOverdeliveryIsAllowed,
      @Aggregation.default: #SUM
      uebto                                                                    as OverdelivTolrtdLmtRatioInPct,
      @Aggregation.default: #SUM
      untto                                                                    as UnderdelivTolrtdLmtRatioInPct,
      lgpbe                                                                    as WarehouseStorageBin,
      @ObjectModel.foreignKey.association: '_BOMExplosion'
      sernr                                                                    as BOMExplosion,
      aeskd                                                                    as CustEngineeringChgStatus,
      @ObjectModel.foreignKey.association: '_WarehouseStagingArea'
      lgbzo                                                                    as WarehouseStagingArea,
      @ObjectModel.foreignKey.association: '_StockCategory'
      bestq                                                                    as WarehouseStockCategory,
      umbsq                                                                    as IssgOrRcvgStockCategory,
      ummat                                                                    as IssgOrRcvgMaterial,
      umwrk                                                                    as IssuingOrReceivingPlant,
      umlgo                                                                    as IssuingOrReceivingStorageLoc,
      umcha                                                                    as IssgOrRcvgBatch,
      umbar                                                                    as IssgOrRcvgValuationType,
      umsok                                                                    as IssgOrRcvgSpclStockInd,
      umresource_id                                                            as IssgOrRcvgResourceID,
      shkzg_um                                                                 as PrimaryPostingSwitch,
      @ObjectModel.foreignKey.association: '_StockType_2'
      insmk                                                                    as StockType,
      nowab                                                                    as IsNotGoodsMovementsRelevant,
      konto                                                                    as GLAccount,
      grund                                                                    as GoodsMovementReasonCode,
      fobwa                                                                    as SubsequentMovementType,
      spe_gen_elikz                                                            as IsCompletelyDelivered,
      spe_alternate                                                            as AlternateProductNumber,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      kcmeng                                                                   as CumulativeBatchQtyInBaseUnit,

      //pick pack load
      @ObjectModel.foreignKey.association: '_PickingControl'
      komkz                                                                    as PickingControl,
      @ObjectModel.foreignKey.association: '_LoadingGroup'
      ladgr                                                                    as LoadingGroup,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      bwart                                                                    as GoodsMovementType,

      //shipping
      @ObjectModel.foreignKey.association: '_TransportationGroup'
      tragr                                                                    as TransportationGroup,
      empst                                                                    as ReceivingPoint,
      @Aggregation.default: #SUM
      vbeaf                                                                    as FixedShipgProcgDurationInDays,

      vbeav                                                                    as VarblShipgProcgDurationInDays,
      podrel                                                                   as ProofOfDeliveryRelevanceCode,

      //billing
      @ObjectModel.foreignKey.association: '_ItemIsBillingRelevant'
      fkrel                                                                    as ItemIsBillingRelevant,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      faksp                                                                    as ItemBillingBlockReason,
      @ObjectModel.foreignKey.association: '_PaymentGuaranteeForm'
      abfor                                                                    as PaymentGuaranteeForm,
      @ObjectModel.foreignKey.association: '_IntercompanyBillingStatus'
      case
       when fkivp is not initial then fkivp
       else ico_fkivp
      end                                                                      as IntercompanyBillingStatus,
      //accounting
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                                    as BusinessArea,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      kokrs                                                                    as ControllingArea,

      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor: 'ProfitabilitySegment_2'
      cast( case when paobjnr > '9999999999' 
                    then '9999999999' 
                    else lpad( paobjnr, 10, '0' ) 
            end as rkeobjnr_numc )                                             as ProfitabilitySegment,
      cast( paobjnr as rkeobjnr_char )                                         as ProfitabilitySegment_2,

      prctr                                                                    as ProfitCenter,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      bwtar                                                                    as InventoryValuationType,
      bwtex                                                                    as IsSeparateValuation,
      kzvbr                                                                    as ConsumptionPosting,
      @ObjectModel.foreignKey.association: '_OrderID'
      aufnr                                                                    as OrderID,
      posnr_pp                                                                 as OrderItem,
      kostl                                                                    as CostCenter,
      lifexpos                                                                 as DeliveryDocumentItemBySupplier,

      //reference
      @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
      vgbel                                                                    as ReferenceSDDocument,
      @ObjectModel.foreignKey.association: '_ReferenceSalesDocumentItem'
      vgpos                                                                    as ReferenceSDDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      vgtyp                                                                    as ReferenceSDDocumentCategory,
      
      // reference purchase order item
      @ObjectModel.foreignKey.association: '_PurchaseOrder'
      case vgtyp
        when 'V' then cast ( vgbel as vdm_purchaseorder preserving type )                  
       end                                                                     as PurchaseOrder,
      @ObjectModel.foreignKey.association: '_PurchaseOrderItem'       
       case vgtyp
        when 'V' then cast ( substring( vgpos, 2, 5 ) as vdm_purchaseorderitem )
      end                                                                      as PurchaseOrderItem,
            
      @ObjectModel.foreignKey.association: '_LogicalSystem'
      vgsys                                                                    as ReferenceDocumentLogicalSystem,

      //sales
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      kvgr1                                                                    as AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      kvgr2                                                                    as AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      kvgr3                                                                    as AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      kvgr4                                                                    as AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      kvgr5                                                                    as AdditionalCustomerGroup5,
      aktnr                                                                    as RetailPromotion,
      stadat                                                                   as StatisticsDate,
      abrli                                                                    as IntDeliveryScheduleNumber,
      //      @ObjectModel.text.association: '_SchedgAgrmtRelTypeText'
      @ObjectModel.foreignKey.association: '_SchedgAgrmtRelType'
      abart                                                                    as SchedulingAgreementReleaseType,

      //status
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      gbsta                                                                    as SDProcessStatus,
      @ObjectModel.foreignKey.association: '_PickingConfirmationStatus'
      koqua                                                                    as PickingConfirmationStatus,
      @ObjectModel.foreignKey.association: '_PickingStatus'
      kosta                                                                    as PickingStatus,       
      @ObjectModel.foreignKey.association: '_WarehouseActivityStatus'
      lvsta                                                                    as WarehouseActivityStatus,
      @ObjectModel.foreignKey.association: '_PackingStatus'
      pksta                                                                    as PackingStatus,
      @ObjectModel.foreignKey.association: '_GoodsMovementStatus'
      wbsta                                                                    as GoodsMovementStatus,
      @ObjectModel.foreignKey.association: '_DeliveryRelatedBillingStatus'
      fksta                                                                    as DeliveryRelatedBillingStatus,
      @ObjectModel.foreignKey.association: '_ProofOfDeliveryStatus'
      pdsta                                                                    as ProofOfDeliveryStatus,
      @ObjectModel.foreignKey.association: '_ItemGeneralIncompletionStatus'
      uvall                                                                    as ItemGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemDelivIncompletionSts'
      uvvlk                                                                    as ItemDeliveryIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemPickingIncompletionStatus'
      uvpik                                                                    as ItemPickingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemGdsMvtIncompletionSts'
      uvwak                                                                    as ItemGdsMvtIncompletionSts,
      @ObjectModel.foreignKey.association: '_ItemPackingIncompletionStatus'
      uvpak                                                                    as ItemPackingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
      uvfak                                                                    as ItemBillingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ExciseTaxStatus'
      arc_status                                                               as EU_DeliveryItemARCStatus,

      // Fashion Management
      sgt_rcat                                                                 as RequirementSegment,
      sgt_scat                                                                 as StockSegment,
      fsh_season_year                                                          as ProductSeasonYear,
      fsh_season                                                               as ProductSeason,
      fsh_collection                                                           as ProductCollection,
      fsh_theme                                                                as ProductTheme,
      wrf_charstc1                                                             as ProductCharacteristic1,
      wrf_charstc2                                                             as ProductCharacteristic2,
      wrf_charstc3                                                             as ProductCharacteristic3,
      fsh_vas_rel                                                              as ItemHasValueAddedService,
      fsh_vas_prnt_id                                                          as ValAddedSrvcParentItmNumber,
      fsh_transaction                                                          as ValAddedSrvcTransactionNumber,
      fsh_item_group                                                           as ValAddedSrvcItemGroup,
      fsh_item                                                                 as ValAddedSrvcItemNumber,


      // Pricing
      vbelv                                                                    as OriginSDDocument,
      posnv                                                                    as SDDocumentItem,
      vbtyv                                                                    as SalesSDDocumentCategory,
      mtart                                                                    as MaterialTypePrimary,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      wavwr                                                                    as CostInDocumentCurrency,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      kzwi1                                                                    as Subtotal1Amount,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      kzwi2                                                                    as Subtotal2Amount,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      kzwi3                                                                    as Subtotal3Amount,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      kzwi4                                                                    as Subtotal4Amount,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      kzwi5                                                                    as Subtotal5Amount,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      kzwi6                                                                    as Subtotal6Amount,
      kdauf                                                                    as OrderDocument,
      vpmat                                                                    as PlanningMaterial,
      vpwrk                                                                    as PlanningPlant,
      prbme                                                                    as ProductGroupBaseUnit,

      umref                                                                    as ConversionFactor,
      @API.element.releaseState:  #DEPRECATED
      @API.element.successor: 'ReturnsDeliveryItemCode'
      case shkzg
        when 'X' then cast( 'X' as shkzg_va preserving type )        
      end                                                                      as IsReturnsItem,
      shkzg                                                                    as ReturnsDeliveryItemCode,
      kmein                                                                    as ConditionUnit,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode:'TransactionCurrency'
      netpr                                                                    as NetPriceAmount,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode:'TransactionCurrency'
      netwr                                                                    as TotalNetAmount,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      bpmng                                                                    as QtyInPurchaseOrderPriceUnit,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode:'TransactionCurrency'
      @API.element.releaseState:  #DEPRECATED
      @API.element.successor: 'CreditRelatedPriceAmount'
      cmpre_flt                                                                as CreditRelatedPrice,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode:'TransactionCurrency'
      cast( round( fltp_to_dec( cmpre_flt as abap.dec(31,14) ), 2 ) as cmpre ) as CreditRelatedPriceAmount,

      umrev                                                                    as DeliveryToBaseUnitCnvrsnFctr,
      fkber                                                                    as FunctionalArea,


      //Subcontracting Cockpit
      fsh_rsnum                                                                as RFMReservation,
      fsh_rspos                                                                as RFMReservationItem,

      rsnum                                                                    as Reservation,
      rspos                                                                    as ReservationItem,
      rsart                                                                    as ReservationRecordType,


      //Status
      @ObjectModel.foreignKey.association: '_ChmlCmplncStatus'
      pcsta                                                                    as ChmlCmplncStatus,
      @ObjectModel.foreignKey.association: '_DangerousGoodsStatus'
      dgsta                                                                    as DangerousGoodsStatus,
      @ObjectModel.foreignKey.association: '_SafetyDataSheetStatus'
      sdssta                                                                   as SafetyDataSheetStatus,

      // Trade Compliance
      @ObjectModel.foreignKey.association: '_TrdCmplncEmbargoSts'
      emcst                                                                    as TrdCmplncEmbargoSts,
      @ObjectModel.foreignKey.association: '_TrdCmplncSnctndListChkSts'
      slcst                                                                    as TrdCmplncSnctndListChkSts,
      @ObjectModel.foreignKey.association: '_TrdCmplncLegalControlSts'
      lccst                                                                    as TrdCmplncLegalControlSts,
      @ObjectModel.foreignKey.association: '_HigherLevelItemUsage'
      uepvw                                                                    as HigherLevelItemUsage,
      
      @ObjectModel.foreignKey.association: '_FieldLogisticsIndicator'
      flpkz                                                                    as FldLogsStatus,
      knumh_ch                                                                 as BatchSearchStrategy,
      
      
      vcm_chain_uuid                                                           as ValueChainInstanceChar32UUID,
      
      @ObjectModel.foreignKey.association: '_ValueChainCategory'
      vcm_chain_category                                                       as ValueChainCategory,

      // Intercompany Document References
      @ObjectModel.foreignKey.association: '_IntcoRefSDDocumentCategory'
      ico_vgtyp                                                                as IntcoRefSDDocumentCategory,
      @ObjectModel.foreignKey.association: '_IntcoRefSDDocument'
      ico_vgbel                                                                as IntcoRefSDDocument,
      @ObjectModel.foreignKey.association: '_IntcoRefSDDocumentItem'
      ico_vgpos                                                                as IntcoRefSDDocumentItem,

      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      lips.service_doc_type                                                    as ServiceDocumentType,
      lips.service_doc_id                                                      as ServiceDocument,
      lips.service_doc_item_id                                                 as ServiceDocumentItem,

      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast ( ps_psp_pnr as ps_s4_pspnr preserving type )                       as WBSElementInternalID,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                     #TO_COMPOSITION_ROOT]
      _DeliveryDocument,
      _Partner,
      _SDDocumentCategory,
      _ItemCategory,
      _SalesDocumentItemType,
      _CreatedByUser,
      _DistributionChannel,
      _Division,
      _SalesGroup,
      _SalesOffice,
      _Material,
      _Product,
      _OriginallyRequestedMaterial,
      _ProductHierarchyNode,
      _MaterialGroup,
      _ProductGroup,
      _MaterialFreightGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _Plant,
      _Warehouse,
      _StorageLocation,
      _Batch,
      _InventorySpecialStockType,
      _DeliveryQuantityUnit,
      _BaseUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _BOMExplosion,
      _WarehouseStagingArea,
      _PickingControl,
      _LoadingGroup,
      _GoodsMovementType,
      _TransportationGroup,
      _ItemIsBillingRelevant,
      _ItemBillingBlockReason,
      _PaymentGuaranteeForm,
      _BusinessArea,
      _ControllingArea,
      _ProfitCenter,
      _InventoryValuationType,
      _OrderID,
      _CostCenter,
      _ReferenceSDDocument,
      _ReferenceSalesDocumentItem,
      _ReferenceSDDocumentCategory,
      _PurchaseOrder,
      _PurchaseOrderItem,
      _IntcoRefSDDocument,
      _IntcoRefSDDocumentItem,
      _IntcoRefSDDocumentCategory,
      _ServiceDocumentType,
      _LogicalSystem,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,
      _SDProcessStatus,
      _PickingConfirmationStatus,
      _PickingStatus,
      _WarehouseActivityStatus,
      _PackingStatus,
      _GoodsMovementStatus,
      _DeliveryRelatedBillingStatus,
      _IntercompanyBillingStatus,
      _ProofOfDeliveryStatus,
      _ItemGeneralIncompletionStatus,
      _ItemDelivIncompletionSts,
      _ItemPickingIncompletionStatus,
      _ItemGdsMvtIncompletionSts,
      _ItemPackingIncompletionStatus,
      _ItemBillingIncompletionStatus,
      @API.element: { releaseState: #DEPRECATED, successor: '_StockType_2' } 
      _StockType,
      _StockType_2,
      _StockCategory,
      _ChmlCmplncStatus,
      _DangerousGoodsStatus,
      _SafetyDataSheetStatus,
      _TrdCmplncEmbargoSts,
      _TrdCmplncSnctndListChkSts,
      _TrdCmplncLegalControlSts,
      _SchedgAgrmtRelType,
      _ExciseTaxStatus,
      _HigherLevelItemUsage,
      //      _SchedgAgrmtRelTypeText
      _ValueChainCategory,
      _FieldLogisticsIndicator,
      _WBSElementBasicData
};
```
