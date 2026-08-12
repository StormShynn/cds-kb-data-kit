---
name: I_DELIVERYDOCUMENT
description: "Delivery DocumentUMENT"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
  - bo:DeliveryDocument
---
# I_DELIVERYDOCUMENT

**Delivery DocumentUMENT**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocument` | ✓ | |  | `vbeln` |  |  |
| `SDDocumentCategory` |  | |  | `vbtyp` |  |  |
| `DeliveryDocumentType` |  | |  | `lfart` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreationTime` |  | |  | `erzet` |  |  |
| `LastChangedByUser` |  | |  | `aenam` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `ShippingPoint` |  | |  | `vstel` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `SalesOffice` |  | |  | `vkbur` |  |  |
| `CompleteDeliveryIsDefined` |  | |  | `autlf` |  |  |
| `OrderCombinationIsAllowed` |  | |  | `kzazu` |  |  |
| `DeliveryPriority` |  | |  | `lprio` |  |  |
| `DeliveryBlockReason` |  | |  | `lifsk` |  |  |
| `Supplier` |  | |  | `cast(lifnr as md_supplier)` |  |  |
| `DeliveryDocumentBySupplier` |  | |  | `lifex` |  |  |
| `DeliveryIsInPlant` |  | |  | `imwrk` |  |  |
| `ReceivingPlant` |  | |  | `werks` |  |  |
| `Warehouse` |  | |  | `lgnum` |  |  |
| `IsExportDelivery` |  | |  | `expkz` |  |  |
| `OrderID` |  | |  | `ternr` |  |  |
| `HeaderGrossWeight` |  | |  | `btgew` |  |  |
| `HeaderNetWeight` |  | |  | `ntgew` |  |  |
| `HeaderWeightUnit` |  | |  | `gewei` |  |  |
| `HeaderVolume` |  | |  | `volum` |  |  |
| `HeaderVolumeUnit` |  | |  | `voleh` |  |  |
| `IsDeliveryForSingleWarehouse` |  | |  | `lispl` |  |  |
| `GoodsIssueOrReceiptSlipNumber` |  | |  | `xabln` |  |  |
| `WarehouseGate` |  | |  | `lgtor` |  |  |
| `WarehouseStagingArea` |  | |  | `lgbzo` |  |  |
| `MeansOfTransportRefMaterial` |  | |  | `trmtyp` |  |  |
| `SpecialProcessingCode` |  | |  | `sdabw` |  |  |
| `ExternalIdentificationType` |  | |  | `spe_lifex_type` |  |  |
| `DeliveryVersion` |  | |  | `dlv_version` |  |  |
| `PickedItemsLocation` |  | |  | `berot` |  |  |
| `DocumentDate` |  | |  | `bldat` |  |  |
| `PickingDate` |  | |  | `kodat` |  |  |
| `PickingTime` |  | |  | `kouhr` |  |  |
| `TotalNumberOfPackage` |  | |  | `anzpk` |  |  |
| `LoadingPoint` |  | |  | `lstel` |  |  |
| `LoadingDate` |  | |  | `lddat` |  |  |
| `LoadingTime` |  | |  | `lduhr` |  |  |
| `BillOfLading` |  | |  | `bolnr` |  |  |
| `HandlingUnitInStock` |  | |  | `vestk` |  |  |
| `ShipToParty` |  | |  | `kunnr` |  |  |
| `ShippingType` |  | |  | `vsart` |  |  |
| `DeliveryDate` |  | |  | `lfdat` |  |  |
| `DeliveryTime` |  | |  | `lfuhr` |  |  |
| `ShippingCondition` |  | |  | `vsbed` |  |  |
| `ShipmentBlockReason` |  | |  | `trspg` |  |  |
| `TransportationPlanningDate` |  | |  | `tddat` |  |  |
| `TransportationPlanningTime` |  | |  | `tduhr` |  |  |
| `ProposedDeliveryRoute` |  | |  | `route` |  |  |
| `ActualDeliveryRoute` |  | |  | `routa` |  |  |
| `RouteSchedule` |  | |  | `aulwe` |  |  |
| `PlannedGoodsIssueDate` |  | |  | `wadat` |  |  |
| `GoodsIssueTime` |  | |  | `wauhr` |  |  |
| `ActualGoodsMovementDate` |  | |  | `wadat_ist` |  |  |
| `ActualGoodsMovementTime` |  | |  | `spe_wauhr_ist` |  |  |
| `IncotermsVersion` |  | |  | `incov` |  |  |
| `IncotermsClassification` |  | |  | `inco1` |  |  |
| `IncotermsTransferLocation` |  | |  | `inco2` |  |  |
| `IncotermsLocation1` |  | |  | `inco2_l` |  |  |
| `IncotermsLocation2` |  | |  | `inco3_l` |  |  |
| `ExternalTransportSystem` |  | |  | `tpsid` |  |  |
| `TransportationGroup` |  | |  | `tragr` |  |  |
| `MeansOfTransport` |  | |  | `traid` |  |  |
| `MeansOfTransportType` |  | |  | `traty` |  |  |
| `UnloadingPointName` |  | |  | `ablad` |  |  |
| `ProofOfDeliveryDate` |  | |  | `podat` |  |  |
| `ConfirmationTime` |  | |  | `potim` |  |  |
| `FactoryCalendarByCustomer` |  | |  | `knfak` |  |  |
| `ShippingLocationTimeZone` |  | |  | `tzonis` |  |  |
| `ReceivingLocationTimeZone` |  | |  | `tzonrc` |  |  |
| `IntercompanyBillingDate` |  | |  | `fkdiv` |  |  |
| `BillingDocumentDate` |  | |  | `fkdat` |  |  |
| `HeaderBillingBlockReason` |  | |  | `faksk` |  |  |
| `InternalFinancialDocument` |  | |  | `lcnum` |  |  |
| `PaymentGuaranteeProcedure` |  | |  | `abssc` |  |  |
| `DepreciationPercentage` |  | |  | `akprz` |  |  |
| `NextShippingDate` |  | |  | `cmngv` |  |  |
| `CustomerCreditAccount` |  | |  | `knkli` |  |  |
| `CentralCreditChkTechErrSts` |  | |  | `cmps_te` |  |  |
| `ReleasedCreditAmount` |  | |  | `amtbl` |  |  |
| `ControllingAreaCurrency` |  | |  | `cmwae` |  |  |
| `CreditBlockReleaseDate` |  | |  | `cmfre` |  |  |
| `SoldToParty` |  | |  | `kunag` |  |  |
| `CustomerGroup` |  | |  | `kdgrp` |  |  |
| `SalesDistrict` |  | |  | `bzirk` |  |  |
| `TransactionCurrency` |  | |  | `waerk` |  |  |
| `StatisticsCurrency` |  | |  | `stwae` |  |  |
| `OverallIntcoBillingStatus` |  | |  | `case when fkivk is initial then ico_fkivk when fkivk = 'A' then case when ico_fkivk = 'B' or ico_fkivk = 'C' then 'B' else fkivk end when fkivk = 'B' then 'B' when fkivk = 'C' then case when ico_fkivk = 'A' or ico_fkivk = 'B' then 'B' else fkivk end else fkivk end` |  |  |
| `OverallSDProcessStatus` |  | |  | `gbstk` |  |  |
| `TotalBlockStatus` |  | |  | `spstg` |  |  |
| `OverallDelivConfStatus` |  | |  | `bestk` |  |  |
| `TransportationPlanningStatus` |  | |  | `trsta` |  |  |
| `OverallPickingConfStatus` |  | |  | `koquk` |  |  |
| `OverallPickingStatus` |  | |  | `kostk` |  |  |
| `OverallPackingStatus` |  | |  | `pkstk` |  |  |
| `OverallWarehouseActivityStatus` |  | |  | `lvstk` |  |  |
| `DistrStatusByDecentralizedWrhs` |  | |  | `vlstk` |  |  |
| `OverallGoodsMovementStatus` |  | |  | `wbstk` |  |  |
| `OverallDelivReltdBillgStatus` |  | |  | `fkstk` |  |  |
| `OverallProofOfDeliveryStatus` |  | |  | `pdstk` |  |  |
| `HdrGeneralIncompletionStatus` |  | |  | `uvall` |  |  |
| `HeaderDelivIncompletionStatus` |  | |  | `uvvlk` |  |  |
| `HeaderPickgIncompletionStatus` |  | |  | `uvpik` |  |  |
| `HeaderPackingIncompletionSts` |  | |  | `uvpak` |  |  |
| `HdrGoodsMvtIncompletionStatus` |  | |  | `uvwak` |  |  |
| `HeaderBillgIncompletionStatus` |  | |  | `uvfak` |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  | `uvals` |  |  |
| `OvrlItmPackingIncompletionSts` |  | |  | `uvpas` |  |  |
| `OvrlItmPickingIncompletionSts` |  | |  | `uvpis` |  |  |
| `OvrlItmDelivIncompletionSts` |  | |  | `uvvls` |  |  |
| `OvrlItmGdsMvtIncompletionSts` |  | |  | `uvwas` |  |  |
| `TotalCreditCheckStatus` |  | |  | `cmgst` |  |  |
| `FinDocCreditCheckStatus` |  | |  | `cmpsi` |  |  |
| `PaytAuthsnCreditCheckSts` |  | |  | `cmpsk` |  |  |
| `CentralCreditCheckStatus` |  | |  | `cmps_cm` |  |  |
| `ExprtInsurCreditCheckStatus` |  | |  | `cmpsj` |  |  |
| `MaxDocValueCreditCheckStatus` |  | |  | `cmpsc` |  |  |
| `PaymentTermCreditCheckStatus` |  | |  | `cmpsd` |  |  |
| `ShippingGroupNumber` |  | |  | `rfm_psst_group` |  |  |
| `PricingDocument` |  | |  | `knumv` |  |  |
| `SalesOrgForIntcoBilling` |  | |  | `vkoiv` |  |  |
| `DistrChnlForIntcoBilling` |  | |  | `vtwiv` |  |  |
| `DivisionForIntcoBilling` |  | |  | `spaiv` |  |  |
| `IntercompanyBillingType` |  | |  | `fkaiv` |  |  |
| `FactoryCalendarForIntcoBilling` |  | |  | `pioiv` |  |  |
| `IntercompanyBillingCustomer` |  | |  | `kuniv` |  |  |
| `DeliveryDocumentCondition` |  | |  | `knump` |  |  |
| `TotalNetAmount` |  | |  | `netwr` |  |  |
| `ReferenceDocumentNumber` |  | |  | `xblnr` |  |  |
| `DeletionIndicator` |  | |  | `spe_loekz` |  |  |
| `OverallChmlCmplncStatus` |  | |  | `total_pcsta` |  |  |
| `OverallDangerousGoodsStatus` |  | |  | `total_dgsta` |  |  |
| `OverallSafetyDataSheetStatus` |  | |  | `total_sdssta` |  |  |
| `OverallTrdCmplncEmbargoSts` |  | |  | `total_emcst` |  |  |
| `OvrlTrdCmplncSnctndListChkSts` |  | |  | `total_slcst` |  |  |
| `OvrlTrdCmplncLegalCtrlChkSts` |  | |  | `total_lccst` |  |  |
| `IsCorrectionDelivery` |  | |  | `klief` |  |  |
| `ReadyForWarehouseExecStatus` |  | |  | `tm_whse_exec` |  |  |
| `DelivAdvncdShipgRcvgRlvnce` |  | |  | `tm_adv_ship_recv` |  |  |
| `DelivIsQtyCrrtnAdvncShipgRcvg` |  | |  | `corr_ind` |  |  |
| `EU_DeliveryARCStatus` |  | |  | `total_arc_status` |  |  |
| `IntcoExtActlTransfOfCtrlDteTme` |  | |  | `ext_act_date_tocd` |  |  |
| `IntcoExtPlndTransfOfCtrlDteTme` |  | |  | `ext_plan_date_tocd` |  |  |
| `IntcoExtTransfOfCtrlDteTmeTmzn` |  | |  | `ext_tzone_tocd` |  |  |
| `IntcoIntActlTransfOfCtrlDteTme` |  | |  | `int_act_date_tocd` |  |  |
| `IntcoIntPlndTransfOfCtrlDteTme` |  | |  | `int_plan_date_tocd` |  |  |
| `IntcoIntTransfOfCtrlDteTmeTmzn` |  | |  | `int_tzone_tocd` |  |  |
| `LogisticsExecutionScenario` |  | |  | `spe_le_scenario` |  |  |
| `_Item` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_DeliveryDocumentType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_DeliveryPriority` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_ReceivingPlant` | | ✓ | | | | |
| `_Warehouse` | | ✓ | | | | |
| `_OrderID` | | ✓ | | | | |
| `_HeaderWeightUnit` | | ✓ | | | | |
| `_HeaderVolumeUnit` | | ✓ | | | | |
| `_WarehouseGate` | | ✓ | | | | |
| `_WarehouseStagingArea` | | ✓ | | | | |
| `_MeansOfTransportRefMaterial` | | ✓ | | | | |
| `_SpecialProcessingCode` | | ✓ | | | | |
| `_LoadingPoint` | | ✓ | | | | |
| `_HandlingUnitInStock` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_ShippingType` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_ShipmentBlockReason` | | ✓ | | | | |
| `_ProposedDeliveryRoute` | | ✓ | | | | |
| `_ActualDeliveryRoute` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_TransportationGroup` | | ✓ | | | | |
| `_MeansOfTransportType` | | ✓ | | | | |
| `_HeaderBillingBlockReason` | | ✓ | | | | |
| `_PaymentGuaranteeProcedure` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_StatisticsCurrency` | | ✓ | | | | |
| `_OverallSDProcessStatus` | | ✓ | | | | |
| `_TotalBlockStatus` | | ✓ | | | | |
| `_OverallDelivConfStatus` | | ✓ | | | | |
| `_TransportationPlanningSts` | | ✓ | | | | |
| `_OverallPickingConfStatus` | | ✓ | | | | |
| `_OverallPickingStatus` | | ✓ | | | | |
| `_OverallPackingStatus` | | ✓ | | | | |
| `_OvrlWarehouseActyStatus` | | ✓ | | | | |
| `_DistrStatusByDectrlzdWrhs` | | ✓ | | | | |
| `_OverallGoodsMovementStatus` | | ✓ | | | | |
| `_OverallDelivReltdBillgStatus` | | ✓ | | | | |
| `_OverallIntcoBillingStatus` | | ✓ | | | | |
| `_OverallProofOfDeliveryStatus` | | ✓ | | | | |
| `_HdrGeneralIncompletionStatus` | | ✓ | | | | |
| `_HeaderDelivIncompletionStatus` | | ✓ | | | | |
| `_HeaderPickgIncompletionStatus` | | ✓ | | | | |
| `_HeaderPackingIncompletionSts` | | ✓ | | | | |
| `_HdrGoodsMvtIncompletionStatus` | | ✓ | | | | |
| `_HeaderBillgIncompletionStatus` | | ✓ | | | | |
| `_OvrlItmGeneralIncompletionSts` | | ✓ | | | | |
| `_OvrlItmPackingIncompletionSts` | | ✓ | | | | |
| `_OvrlItmPickingIncompletionSts` | | ✓ | | | | |
| `_OvrlItmDelivIncompletionSts` | | ✓ | | | | |
| `_OvrlItmGdsMvtIncompletionSts` | | ✓ | | | | |
| `_TotalCreditCheckStatus` | | ✓ | | | | |
| `_FinDocCreditCheckStatus` | | ✓ | | | | |
| `_PaytAuthsnCreditCheckSts` | | ✓ | | | | |
| `_CentralCreditCheckStatus` | | ✓ | | | | |
| `_ExprtInsurCreditCheckStatus` | | ✓ | | | | |
| `_CentralCreditChkTechErrSts` | | ✓ | | | | |
| `_CustomerCreditAccount` | | ✓ | | | | |
| `_ControllingAreaCurrency` | | ✓ | | | | |
| `_MaxDocValueCreditCheckStatus` | | ✓ | | | | |
| `_PaymentTermCreditCheckStatus` | | ✓ | | | | |
| `_MaterialDocumentHeader` | | ✓ | | | | |
| `_MaterialDocumentHeader_2` | | ✓ | | | | |
| `_PackingStatusText` | | ✓ | | | | |
| `_OverallChmlCmplncStatus` | | ✓ | | | | |
| `_OverallDangerousGoodsStatus` | | ✓ | | | | |
| `_OvrlSftyDataSheetSts` | | ✓ | | | | |
| `_OverallTrdCmplncEmbargoSts` | | ✓ | | | | |
| `_OvrlTrdCmplncSnctndListChkSts` | | ✓ | | | | |
| `_OvrlTrdCmplncLegalCtrlChkSts` | | ✓ | | | | |
| `_ExciseTaxStatus` | | ✓ | | | | |
| `_ExternalTCOTimezone` | | ✓ | | | | |
| `_InternalTCOTimezone` | | ✓ | | | | |
| `_WarehouseExecutionStatus` | | ✓ | | | | |
| `_DelivAdvncdShipgRcvgRlvnce` | | ✓ | | | | |
| `_LogisticsExecScenario` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_DeliveryDocumentItem` | [0..*] |
| `_Partner` | `I_SDDocumentPartner` | [1..*] |
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_DeliveryDocumentType` | `I_DeliveryDocumentType` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_DeliveryPriority` | `I_DeliveryPriority` | [0..1] |
| `_DeliveryBlockReason` | `I_DeliveryBlockReason` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_ReceivingPlant` | `I_Plant` | [0..1] |
| `_Warehouse` | `I_Warehouse` | [0..1] |
| `_OrderID` | `I_MfgOrder` | [0..1] |
| `_HeaderWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_HeaderVolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_WarehouseGate` | `I_WarehouseGate` | [0..1] |
| `_WarehouseStagingArea` | `I_WarehouseStagingArea` | [0..1] |
| `_MeansOfTransportRefMaterial` | `I_Material` | [0..1] |
| `_SpecialProcessingCode` | `I_SpecialProcessingCode` | [0..1] |
| `_LoadingPoint` | `I_LoadingPoint` | [0..1] |
| `_HandlingUnitInStock` | `I_HandlingUnitInStock` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_ShippingType` | `I_ShippingType` | [0..1] |
| `_ShippingCondition` | `I_ShippingCondition` | [0..1] |
| `_ShipmentBlockReason` | `I_ShipmentBlockReason` | [0..1] |
| `_ProposedDeliveryRoute` | `I_Route` | [0..1] |
| `_ActualDeliveryRoute` | `I_Route` | [0..1] |
| `_IncotermsVersion` | `I_IncotermsVersion` | [0..1] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_TransportationGroup` | `I_TransportationGroup` | [0..1] |
| `_MeansOfTransportType` | `I_MeansOfTransportType` | [0..1] |
| `_HeaderBillingBlockReason` | `I_BillingBlockReason` | [0..1] |
| `_PaymentGuaranteeProcedure` | `I_PaymentGuaranteeProcedure` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_StatisticsCurrency` | `I_Currency` | [0..1] |
| `_OverallSDProcessStatus` | `I_OverallSDProcessStatus` | [0..1] |
| `_TotalBlockStatus` | `I_TotalBlockStatus` | [0..1] |
| `_OverallDelivConfStatus` | `I_OverallDelivConfStatus` | [0..1] |
| `_TransportationPlanningSts` | `I_TransportationPlanningSts` | [0..1] |
| `_OverallPickingConfStatus` | `I_OverallPickingConfStatus` | [0..1] |
| `_OverallPickingStatus` | `I_OverallPickingStatus` | [0..1] |
| `_OverallPackingStatus` | `I_OverallPackingStatus` | [0..1] |
| `_OvrlWarehouseActyStatus` | `I_OvrlWarehouseActyStatus` | [0..1] |
| `_DistrStatusByDectrlzdWrhs` | `I_DistrStatusByDectrlzdWrhs` | [0..1] |
| `_OverallGoodsMovementStatus` | `I_OverallGoodsMovementStatus` | [0..1] |
| `_OverallDelivReltdBillgStatus` | `I_OverallDelivReltdBillgSts` | [0..1] |
| `_OverallIntcoBillingStatus` | `I_OverallDelivReltdBillgSts` | [0..1] |
| `_OverallProofOfDeliveryStatus` | `I_OverallProofOfDelivStatus` | [0..1] |
| `_HdrGeneralIncompletionStatus` | `I_HdrGenIncompletionStatus` | [0..1] |
| `_HeaderDelivIncompletionStatus` | `I_HdrDelivIncompletionStatus` | [0..1] |
| `_HeaderPickgIncompletionStatus` | `I_HdrPickgIncompltnStatus` | [0..1] |
| `_HeaderPackingIncompletionSts` | `I_HdrPackingIncompltnStatus` | [0..1] |
| `_HdrGoodsMvtIncompletionStatus` | `I_HdrGoodsMvtIncompltnStatus` | [0..1] |
| `_HeaderBillgIncompletionStatus` | `I_HdrBillgIncompletionStatus` | [0..1] |
| `_OvrlItmGeneralIncompletionSts` | `I_OvrlItmGenIncompletionSts` | [0..1] |
| `_OvrlItmPackingIncompletionSts` | `I_OvrlItmPackingIncompltnSts` | [0..1] |
| `_OvrlItmPickingIncompletionSts` | `I_OvrlItmPickingIncompltnSts` | [0..1] |
| `_OvrlItmDelivIncompletionSts` | `I_OvrlItmDelivIncompletionSts` | [0..1] |
| `_OvrlItmGdsMvtIncompletionSts` | `I_OvrlItmGdsMvtIncompltnSts` | [0..1] |
| `_TotalCreditCheckStatus` | `I_TotalCreditCheckStatus` | [0..1] |
| `_FinDocCreditCheckStatus` | `I_FinDocCreditCheckStatus` | [0..1] |
| `_PaytAuthsnCreditCheckSts` | `I_PaytAuthsnCreditCheckSts` | [0..1] |
| `_CentralCreditCheckStatus` | `I_CentralCreditCheckStatus` | [0..1] |
| `_ExprtInsurCreditCheckStatus` | `I_ExprtInsurCreditCheckStatus` | [0..1] |
| `_CentralCreditChkTechErrSts` | `I_CentralCreditChkTechErrSts` | [0..1] |
| `_CustomerCreditAccount` | `I_Customer` | [0..1] |
| `_ControllingAreaCurrency` | `I_Currency` | [0..1] |
| `_MaxDocValueCreditCheckStatus` | `I_MaxDocValueCreditCheckSts` | [0..1] |
| `_PaymentTermCreditCheckStatus` | `I_PaymentTermCreditCheckSts` | [0..1] |
| `_MaterialDocumentHeader` | `I_MaterialDocumentHeader` | [0..*] |
| `_MaterialDocumentHeader_2` | `I_MaterialDocumentHeader_2` | [0..*] |
| `_OverallSDProcessStatusText` | `I_OverallSDProcessStatusText` | [0..*] |
| `_PackingStatusText` | `I_PackingStatusText` | [0..*] |
| `_OverallChmlCmplncStatus` | `I_OverallDelivChmlCmplncSts` | [0..1] |
| `_OverallDangerousGoodsStatus` | `I_OvrlDelivDngrsGdsSts` | [0..1] |
| `_OvrlSftyDataSheetSts` | `I_OvrlDelivSftyDataShtSts` | [0..1] |
| `_OverallTrdCmplncEmbargoSts` | `I_OvrlTradeCmplncEmbargoStatus` | [0..1] |
| `_OvrlTrdCmplncSnctndListChkSts` | `I_OvTrdCmplncSnctndListChkSts` | [0..1] |
| `_OvrlTrdCmplncLegalCtrlChkSts` | `I_OvrlTrdCmplncLegalCtrlChkSts` | [0..1] |
| `_ExciseTaxStatus` | `I_ExciseTaxStatus` | [0..1] |
| `_ExternalTCOTimezone` | `I_TimeZone` | [0..1] |
| `_InternalTCOTimezone` | `I_TimeZone` | [0..1] |
| `_WarehouseExecutionStatus` | `I_WarehouseExecutionStatus` | [0..1] |
| `_DelivAdvncdShipgRcvgRlvnce` | `I_AdvShipReceiveRlvnce` | [0..1] |
| `_LogisticsExecScenario` | `I_LogisticsExecutionScenario` | [0..1] |
| `_Extension` | `E_DeliveryDocument` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin

@AbapCatalog: {
  sqlViewName: 'ILEDELIVDOC',
  compiler.compareFilter: true
}

@ObjectModel: {
  compositionRoot: true,
  representativeKey: 'DeliveryDocument',
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory: #L
    }
 }

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_Partner' ]
}

@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}

//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'DeliveryDocument'
//Commented by VDM CDS Suite Plugin:@ObjectModel.compositionRoot: true
@EndUserText.label: 'Delivery Document'

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
      enabled: true,
      delta.changeDataCapture:
        { mapping:
        [{  role: #MAIN,
            table: 'likp',
            tableElement: ['vbeln'],
            viewElement: ['DeliveryDocument']
        }]
      }
    },
  internalName:#LOCAL
}

@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name:'DeliveryDocument'



define view I_DeliveryDocument
  as select from likp

  //Associations
  association [0..*] to I_DeliveryDocumentItem         as _Item                          on  $projection.DeliveryDocument = _Item.DeliveryDocument
  association [1..*] to I_SDDocumentPartner            as _Partner                       on  $projection.DeliveryDocument = _Partner.SDDocument
  association [0..1] to I_SDDocumentCategory           as _SDDocumentCategory            on  $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory
  association [0..1] to I_DeliveryDocumentType         as _DeliveryDocumentType          on  $projection.DeliveryDocumentType = _DeliveryDocumentType.DeliveryDocumentType
  association [0..1] to I_User                         as _CreatedByUser                 on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                         as _LastChangedByUser             on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_ShippingPoint                as _ShippingPoint                 on  $projection.ShippingPoint = _ShippingPoint.ShippingPoint
  association [0..1] to I_SalesOrganization            as _SalesOrganization             on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_SalesOffice                  as _SalesOffice                   on  $projection.SalesOffice = _SalesOffice.SalesOffice
  association [0..1] to I_DeliveryPriority             as _DeliveryPriority              on  $projection.DeliveryPriority = _DeliveryPriority.DeliveryPriority
  association [0..1] to I_DeliveryBlockReason          as _DeliveryBlockReason           on  $projection.DeliveryBlockReason = _DeliveryBlockReason.DeliveryBlockReason
  association [0..1] to I_Supplier                     as _Supplier                      on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Plant                        as _ReceivingPlant                on  $projection.ReceivingPlant = _ReceivingPlant.Plant
  association [0..1] to I_Warehouse                    as _Warehouse                     on  $projection.Warehouse = _Warehouse.Warehouse
  association [0..1] to I_MfgOrder                     as _OrderID                       on  $projection.OrderID = _OrderID.ManufacturingOrder
  association [0..1] to I_UnitOfMeasure                as _HeaderWeightUnit              on  $projection.HeaderWeightUnit = _HeaderWeightUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _HeaderVolumeUnit              on  $projection.HeaderVolumeUnit = _HeaderVolumeUnit.UnitOfMeasure
  association [0..1] to I_WarehouseGate                as _WarehouseGate                 on  $projection.Warehouse     = _WarehouseGate.Warehouse
                                                                                         and $projection.WarehouseGate = _WarehouseGate.WarehouseGate
  association [0..1] to I_WarehouseStagingArea         as _WarehouseStagingArea          on  $projection.Warehouse            = _WarehouseStagingArea.Warehouse
                                                                                         and $projection.WarehouseStagingArea = _WarehouseStagingArea.WarehouseStagingArea
  association [0..1] to I_Material                     as _MeansOfTransportRefMaterial   on  $projection.MeansOfTransportRefMaterial = _MeansOfTransportRefMaterial.Material
  association [0..1] to I_SpecialProcessingCode        as _SpecialProcessingCode         on  $projection.SpecialProcessingCode = _SpecialProcessingCode.SpecialProcessingCode
  association [0..1] to I_LoadingPoint                 as _LoadingPoint                  on  $projection.LoadingPoint  = _LoadingPoint.LoadingPoint
                                                                                         and $projection.ShippingPoint = _LoadingPoint.ShippingPoint
  association [0..1] to I_HandlingUnitInStock          as _HandlingUnitInStock           on  $projection.HandlingUnitInStock = _HandlingUnitInStock.HandlingUnitInStock
  association [0..1] to I_Customer                     as _ShipToParty                   on  $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_ShippingType                 as _ShippingType                  on  $projection.ShippingType = _ShippingType.ShippingType
  association [0..1] to I_ShippingCondition            as _ShippingCondition             on  $projection.ShippingCondition = _ShippingCondition.ShippingCondition
  association [0..1] to I_ShipmentBlockReason          as _ShipmentBlockReason           on  $projection.ShipmentBlockReason = _ShipmentBlockReason.ShipmentBlockReason
  association [0..1] to I_Route                        as _ProposedDeliveryRoute         on  $projection.ProposedDeliveryRoute = _ProposedDeliveryRoute.Route
  association [0..1] to I_Route                        as _ActualDeliveryRoute           on  $projection.ActualDeliveryRoute = _ActualDeliveryRoute.Route
  association [0..1] to I_IncotermsVersion             as _IncotermsVersion              on  $projection.IncotermsVersion = _IncotermsVersion.IncotermsVersion
  association [0..1] to I_IncotermsClassification      as _IncotermsClassification       on  $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification
  association [0..1] to I_TransportationGroup          as _TransportationGroup           on  $projection.TransportationGroup = _TransportationGroup.TransportationGroup
  association [0..1] to I_MeansOfTransportType         as _MeansOfTransportType          on  $projection.MeansOfTransportType = _MeansOfTransportType.MeansOfTransportType
  association [0..1] to I_BillingBlockReason           as _HeaderBillingBlockReason      on  $projection.HeaderBillingBlockReason = _HeaderBillingBlockReason.BillingBlockReason
  association [0..1] to I_PaymentGuaranteeProcedure    as _PaymentGuaranteeProcedure     on  $projection.PaymentGuaranteeProcedure = _PaymentGuaranteeProcedure.PaymentGuaranteeProcedure
  association [0..1] to I_Customer                     as _SoldToParty                   on  $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_CustomerGroup                as _CustomerGroup                 on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup
  association [0..1] to I_SalesDistrict                as _SalesDistrict                 on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  association [0..1] to I_Currency                     as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_Currency                     as _StatisticsCurrency            on  $projection.StatisticsCurrency = _StatisticsCurrency.Currency
  association [0..1] to I_OverallSDProcessStatus       as _OverallSDProcessStatus        on  $projection.OverallSDProcessStatus = _OverallSDProcessStatus.OverallSDProcessStatus
  association [0..1] to I_TotalBlockStatus             as _TotalBlockStatus              on  $projection.TotalBlockStatus = _TotalBlockStatus.TotalBlockStatus
  association [0..1] to I_OverallDelivConfStatus       as _OverallDelivConfStatus        on  $projection.OverallDelivConfStatus = _OverallDelivConfStatus.OverallDelivConfStatus
  association [0..1] to I_TransportationPlanningSts    as _TransportationPlanningSts     on  $projection.TransportationPlanningStatus = _TransportationPlanningSts.TransportationPlanningStatus
  association [0..1] to I_OverallPickingConfStatus     as _OverallPickingConfStatus      on  $projection.OverallPickingConfStatus = _OverallPickingConfStatus.OverallPickingConfStatus
  association [0..1] to I_OverallPickingStatus         as _OverallPickingStatus          on  $projection.OverallPickingStatus = _OverallPickingStatus.OverallPickingStatus
  association [0..1] to I_OverallPackingStatus         as _OverallPackingStatus          on  $projection.OverallPackingStatus = _OverallPackingStatus.OverallPackingStatus
  association [0..1] to I_OvrlWarehouseActyStatus      as _OvrlWarehouseActyStatus       on  $projection.OverallWarehouseActivityStatus = _OvrlWarehouseActyStatus.OverallWarehouseActivityStatus
  association [0..1] to I_DistrStatusByDectrlzdWrhs    as _DistrStatusByDectrlzdWrhs     on  $projection.DistrStatusByDecentralizedWrhs = _DistrStatusByDectrlzdWrhs.DistrStatusByDecentralizedWrhs
  association [0..1] to I_OverallGoodsMovementStatus   as _OverallGoodsMovementStatus    on  $projection.OverallGoodsMovementStatus = _OverallGoodsMovementStatus.OverallGoodsMovementStatus
  association [0..1] to I_OverallDelivReltdBillgSts    as _OverallDelivReltdBillgStatus  on  $projection.OverallDelivReltdBillgStatus = _OverallDelivReltdBillgStatus.OverallDelivReltdBillgStatus
  association [0..1] to I_OverallDelivReltdBillgSts    as _OverallIntcoBillingStatus     on  $projection.OverallIntcoBillingStatus = _OverallIntcoBillingStatus.OverallDelivReltdBillgStatus
  association [0..1] to I_OverallProofOfDelivStatus    as _OverallProofOfDeliveryStatus  on  $projection.OverallProofOfDeliveryStatus = _OverallProofOfDeliveryStatus.OverallProofOfDeliveryStatus
  association [0..1] to I_HdrGenIncompletionStatus     as _HdrGeneralIncompletionStatus  on  $projection.HdrGeneralIncompletionStatus = _HdrGeneralIncompletionStatus.HdrGeneralIncompletionStatus
  association [0..1] to I_HdrDelivIncompletionStatus   as _HeaderDelivIncompletionStatus on  $projection.HeaderDelivIncompletionStatus = _HeaderDelivIncompletionStatus.HeaderDelivIncompletionStatus
  association [0..1] to I_HdrPickgIncompltnStatus      as _HeaderPickgIncompletionStatus on  $projection.HeaderPickgIncompletionStatus = _HeaderPickgIncompletionStatus.HeaderPickgIncompletionStatus
  association [0..1] to I_HdrPackingIncompltnStatus    as _HeaderPackingIncompletionSts  on  $projection.HeaderPackingIncompletionSts = _HeaderPackingIncompletionSts.HeaderPackingIncompletionSts
  association [0..1] to I_HdrGoodsMvtIncompltnStatus   as _HdrGoodsMvtIncompletionStatus on  $projection.HdrGoodsMvtIncompletionStatus = _HdrGoodsMvtIncompletionStatus.HdrGoodsMvtIncompletionStatus
  association [0..1] to I_HdrBillgIncompletionStatus   as _HeaderBillgIncompletionStatus on  $projection.HeaderBillgIncompletionStatus = _HeaderBillgIncompletionStatus.HeaderBillgIncompletionStatus
  association [0..1] to I_OvrlItmGenIncompletionSts    as _OvrlItmGeneralIncompletionSts on  $projection.OvrlItmGeneralIncompletionSts = _OvrlItmGeneralIncompletionSts.OvrlItmGeneralIncompletionSts
  association [0..1] to I_OvrlItmPackingIncompltnSts   as _OvrlItmPackingIncompletionSts on  $projection.OvrlItmPackingIncompletionSts = _OvrlItmPackingIncompletionSts.OvrlItmPackingIncompletionSts
  association [0..1] to I_OvrlItmPickingIncompltnSts   as _OvrlItmPickingIncompletionSts on  $projection.OvrlItmPickingIncompletionSts = _OvrlItmPickingIncompletionSts.OvrlItmPickingIncompletionSts
  association [0..1] to I_OvrlItmDelivIncompletionSts  as _OvrlItmDelivIncompletionSts   on  $projection.OvrlItmDelivIncompletionSts = _OvrlItmDelivIncompletionSts.OvrlItmDelivIncompletionSts
  association [0..1] to I_OvrlItmGdsMvtIncompltnSts    as _OvrlItmGdsMvtIncompletionSts  on  $projection.OvrlItmGdsMvtIncompletionSts = _OvrlItmGdsMvtIncompletionSts.OvrlItmGdsMvtIncompletionSts
  association [0..1] to I_TotalCreditCheckStatus       as _TotalCreditCheckStatus        on  $projection.TotalCreditCheckStatus = _TotalCreditCheckStatus.TotalCreditCheckStatus
  association [0..1] to I_FinDocCreditCheckStatus      as _FinDocCreditCheckStatus       on  $projection.FinDocCreditCheckStatus = _FinDocCreditCheckStatus.FinDocCreditCheckStatus
  association [0..1] to I_PaytAuthsnCreditCheckSts     as _PaytAuthsnCreditCheckSts      on  $projection.PaytAuthsnCreditCheckSts = _PaytAuthsnCreditCheckSts.PaytAuthsnCreditCheckSts
  association [0..1] to I_CentralCreditCheckStatus     as _CentralCreditCheckStatus      on  $projection.CentralCreditCheckStatus = _CentralCreditCheckStatus.CentralCreditCheckStatus
  association [0..1] to I_ExprtInsurCreditCheckStatus  as _ExprtInsurCreditCheckStatus   on  $projection.ExprtInsurCreditCheckStatus = _ExprtInsurCreditCheckStatus.ExprtInsurCreditCheckStatus
  association [0..1] to I_CentralCreditChkTechErrSts   as _CentralCreditChkTechErrSts    on  $projection.CentralCreditChkTechErrSts = _CentralCreditChkTechErrSts.CentralCreditChkTechErrSts
  association [0..1] to I_Customer                     as _CustomerCreditAccount         on  $projection.CustomerCreditAccount = _CustomerCreditAccount.Customer
  association [0..1] to I_Currency                     as _ControllingAreaCurrency       on  $projection.ControllingAreaCurrency = _ControllingAreaCurrency.Currency
  association [0..1] to I_MaxDocValueCreditCheckSts    as _MaxDocValueCreditCheckStatus  on  $projection.MaxDocValueCreditCheckStatus = _MaxDocValueCreditCheckStatus.MaxDocValueCreditCheckStatus
  association [0..1] to I_PaymentTermCreditCheckSts    as _PaymentTermCreditCheckStatus  on  $projection.PaymentTermCreditCheckStatus = _PaymentTermCreditCheckStatus.PaymentTermCreditCheckStatus
  association [0..*] to I_MaterialDocumentHeader       as _MaterialDocumentHeader        on  $projection.DeliveryDocument = _MaterialDocumentHeader.DeliveryDocument
  association [0..*] to I_MaterialDocumentHeader_2     as _MaterialDocumentHeader_2      on  $projection.DeliveryDocument = _MaterialDocumentHeader_2.DeliveryDocument
  association [0..*] to I_OverallSDProcessStatusText   as _OverallSDProcessStatusText    on  $projection.OverallSDProcessStatus = _OverallSDProcessStatusText.OverallSDProcessStatus
  association [0..*] to I_PackingStatusText            as _PackingStatusText             on  $projection.OverallPackingStatus = _PackingStatusText.PackingStatus
  //Associations
  association [0..1] to I_OverallDelivChmlCmplncSts    as _OverallChmlCmplncStatus       on  $projection.OverallChmlCmplncStatus = _OverallChmlCmplncStatus.OverallChmlCmplncStatus
  association [0..1] to I_OvrlDelivDngrsGdsSts         as _OverallDangerousGoodsStatus   on  $projection.OverallDangerousGoodsStatus = _OverallDangerousGoodsStatus.OverallDangerousGoodsStatus
  association [0..1] to I_OvrlDelivSftyDataShtSts      as _OvrlSftyDataSheetSts          on  $projection.OverallSafetyDataSheetStatus = _OvrlSftyDataSheetSts.OverallSafetyDataSheetStatus

  association [0..1] to I_OvrlTradeCmplncEmbargoStatus as _OverallTrdCmplncEmbargoSts    on  $projection.OverallTrdCmplncEmbargoSts = _OverallTrdCmplncEmbargoSts.OverallTrdCmplncEmbargoSts
  association [0..1] to I_OvTrdCmplncSnctndListChkSts  as _OvrlTrdCmplncSnctndListChkSts on  $projection.OvrlTrdCmplncSnctndListChkSts = _OvrlTrdCmplncSnctndListChkSts.OvrlTrdCmplncSnctndListChkSts
  association [0..1] to I_OvrlTrdCmplncLegalCtrlChkSts as _OvrlTrdCmplncLegalCtrlChkSts  on  $projection.OvrlTrdCmplncLegalCtrlChkSts = _OvrlTrdCmplncLegalCtrlChkSts.OvrlTrdCmplncLegalCtrlChkSts

  association [0..1] to I_ExciseTaxStatus              as _ExciseTaxStatus               on  $projection.EU_DeliveryARCStatus = _ExciseTaxStatus.EU_ARCStatus

  association [0..1] to I_TimeZone                     as _ExternalTCOTimezone           on  $projection.IntcoExtTransfOfCtrlDteTmeTmzn = _ExternalTCOTimezone.TimeZoneID
  association [0..1] to I_TimeZone                     as _InternalTCOTimezone           on  $projection.IntcoIntTransfOfCtrlDteTmeTmzn = _InternalTCOTimezone.TimeZoneID

  association [0..1] to I_WarehouseExecutionStatus     as _WarehouseExecutionStatus      on  $projection.ReadyForWarehouseExecStatus = _WarehouseExecutionStatus.ReadyForWarehouseExecStatus
  association [0..1] to I_AdvShipReceiveRlvnce         as _DelivAdvncdShipgRcvgRlvnce    on  $projection.DelivAdvncdShipgRcvgRlvnce = _DelivAdvncdShipgRcvgRlvnce.DelivAdvncdShipgRcvgRlvnce
  association [0..1] to I_LogisticsExecutionScenario   as _LogisticsExecScenario         on  $projection.LogisticsExecutionScenario = _LogisticsExecScenario.LogisticsExecutionScenario

  //Extensibility
  association [0..1] to E_DeliveryDocument             as _Extension                     on  $projection.DeliveryDocument = _Extension.DeliveryDocument
{
      //Key
  key vbeln                      as DeliveryDocument,

      //Category
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      vbtyp                      as SDDocumentCategory,
      @ObjectModel.foreignKey.association: '_DeliveryDocumentType'
      lfart                      as DeliveryDocumentType,

      //Admin
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      @Semantics.user.createdBy: true
      ernam                      as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      erdat                      as CreationDate,
      @Semantics.systemTime.createdAt: true
      erzet                      as CreationTime,
      @ObjectModel.foreignKey.association: '_LastChangedByUser'
      @Semantics.user.lastChangedBy: true
      aenam                      as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      aedat                      as LastChangeDate,

      //Organization
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ShippingPointStdVH', element: 'ShippingPoint' } } ]
      vstel                      as ShippingPoint,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      vkorg                      as SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      vkbur                      as SalesOffice,

      //Delivery
      autlf                      as CompleteDeliveryIsDefined,
      kzazu                      as OrderCombinationIsAllowed,
      @ObjectModel.foreignKey.association: '_DeliveryPriority'
      lprio                      as DeliveryPriority,
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
      lifsk                      as DeliveryBlockReason,
      @ObjectModel.foreignKey.association: '_Supplier'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      cast(lifnr as md_supplier) as Supplier,
      lifex                      as DeliveryDocumentBySupplier,
      imwrk                      as DeliveryIsInPlant,
      @ObjectModel.foreignKey.association: '_ReceivingPlant'
      werks                      as ReceivingPlant,
      @ObjectModel.foreignKey.association: '_Warehouse'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WarehouseStdVH', element: 'Warehouse' } } ]
      lgnum                      as Warehouse,
      expkz                      as IsExportDelivery,
      @ObjectModel.foreignKey.association: '_OrderID'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      ternr                      as OrderID,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeaderWeightUnit'
      btgew                      as HeaderGrossWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeaderWeightUnit'
      ntgew                      as HeaderNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_HeaderWeightUnit'
      gewei                      as HeaderWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeaderVolumeUnit'
      volum                      as HeaderVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_HeaderVolumeUnit'
      voleh                      as HeaderVolumeUnit,
      lispl                      as IsDeliveryForSingleWarehouse,
      xabln                      as GoodsIssueOrReceiptSlipNumber,
      @ObjectModel.foreignKey.association: '_WarehouseGate'
      lgtor                      as WarehouseGate,
      @ObjectModel.foreignKey.association: '_WarehouseStagingArea'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WarehouseStagingAreaStdVH', element: 'WarehouseStagingArea' },
                                            additionalBinding: [{localElement: 'Warehouse', element: 'Warehouse' } ] } ]
      lgbzo                      as WarehouseStagingArea,
      @ObjectModel.foreignKey.association: '_MeansOfTransportRefMaterial'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      trmtyp                     as MeansOfTransportRefMaterial,
      @ObjectModel.foreignKey.association: '_SpecialProcessingCode'
      sdabw                      as SpecialProcessingCode,
      spe_lifex_type             as ExternalIdentificationType,
      dlv_version                as DeliveryVersion,
      berot                      as PickedItemsLocation,
      bldat                      as DocumentDate,

      //Pick Pack Load
      kodat                      as PickingDate,
      kouhr                      as PickingTime,
      anzpk                      as TotalNumberOfPackage,
      @ObjectModel.foreignKey.association: '_LoadingPoint'
      lstel                      as LoadingPoint,
      lddat                      as LoadingDate,
      lduhr                      as LoadingTime,
      bolnr                      as BillOfLading,
      @ObjectModel.foreignKey.association: '_HandlingUnitInStock'
      vestk                      as HandlingUnitInStock,

      //Shipping
      @ObjectModel.foreignKey.association: '_ShipToParty'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      kunnr                      as ShipToParty,
      @ObjectModel.foreignKey.association: '_ShippingType'
      vsart                      as ShippingType,
      lfdat                      as DeliveryDate,
      lfuhr                      as DeliveryTime,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      vsbed                      as ShippingCondition,
      @ObjectModel.foreignKey.association: '_ShipmentBlockReason'
      trspg                      as ShipmentBlockReason,
      tddat                      as TransportationPlanningDate,
      tduhr                      as TransportationPlanningTime,
      @ObjectModel.foreignKey.association: '_ProposedDeliveryRoute'
      route                      as ProposedDeliveryRoute,
      @ObjectModel.foreignKey.association: '_ActualDeliveryRoute'
      routa                      as ActualDeliveryRoute,
      aulwe                      as RouteSchedule,
      wadat                      as PlannedGoodsIssueDate,
      wauhr                      as GoodsIssueTime,
      wadat_ist                  as ActualGoodsMovementDate,
      spe_wauhr_ist              as ActualGoodsMovementTime,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      incov                      as IncotermsVersion,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      inco1                      as IncotermsClassification,
      inco2                      as IncotermsTransferLocation,
      inco2_l                    as IncotermsLocation1,
      inco3_l                    as IncotermsLocation2,
      tpsid                      as ExternalTransportSystem,
      @ObjectModel.foreignKey.association: '_TransportationGroup'
      tragr                      as TransportationGroup,
      traid                      as MeansOfTransport,
      @ObjectModel.foreignKey.association: '_MeansOfTransportType'
      traty                      as MeansOfTransportType,
      ablad                      as UnloadingPointName,
      podat                      as ProofOfDeliveryDate,
      potim                      as ConfirmationTime,
      knfak                      as FactoryCalendarByCustomer,
      tzonis                     as ShippingLocationTimeZone,
      tzonrc                     as ReceivingLocationTimeZone,

      //Billing
      fkdiv                      as IntercompanyBillingDate,
      fkdat                      as BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_HeaderBillingBlockReason'
      faksk                      as HeaderBillingBlockReason,
      lcnum                      as InternalFinancialDocument,
      @ObjectModel.foreignKey.association: '_PaymentGuaranteeProcedure'
      abssc                      as PaymentGuaranteeProcedure,
      akprz                      as DepreciationPercentage,


      //Credit Block
      cmngv                      as NextShippingDate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_CustomerCreditAccount'
      knkli                      as CustomerCreditAccount,
      @ObjectModel.foreignKey.association: '_CentralCreditChkTechErrSts'
      cmps_te                    as CentralCreditChkTechErrSts,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      amtbl                      as ReleasedCreditAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ControllingAreaCurrency'
      cmwae                      as ControllingAreaCurrency,
      cmfre                      as CreditBlockReleaseDate,

      //Sales
      @ObjectModel.foreignKey.association: '_SoldToParty'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      kunag                      as SoldToParty,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      kdgrp                      as CustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      bzirk                      as SalesDistrict,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waerk                      as TransactionCurrency,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_StatisticsCurrency'
      stwae                      as StatisticsCurrency,
      // Status
      @ObjectModel.foreignKey.association: '_OverallIntcoBillingStatus'
      case
       when fkivk is initial then ico_fkivk
       when fkivk = 'A' then
          case
            when ico_fkivk = 'B' or ico_fkivk = 'C' then 'B'
            else fkivk
          end
       when fkivk = 'B' then 'B'
       when fkivk = 'C' then
          case
            when ico_fkivk = 'A' or ico_fkivk = 'B' then 'B'
            else fkivk
          end
       else fkivk
      end                        as OverallIntcoBillingStatus,
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      gbstk                      as OverallSDProcessStatus,
      @ObjectModel.foreignKey.association: '_TotalBlockStatus'
      spstg                      as TotalBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallDelivConfStatus'
      bestk                      as OverallDelivConfStatus,
      @ObjectModel.foreignKey.association: '_TransportationPlanningSts'
      trsta                      as TransportationPlanningStatus,
      @ObjectModel.foreignKey.association: '_OverallPickingConfStatus'
      koquk                      as OverallPickingConfStatus,
      @ObjectModel.foreignKey.association: '_OverallPickingStatus'
      kostk                      as OverallPickingStatus,
      @ObjectModel.foreignKey.association: '_OverallPackingStatus'
      pkstk                      as OverallPackingStatus,
      @ObjectModel.foreignKey.association: '_OvrlWarehouseActyStatus'
      lvstk                      as OverallWarehouseActivityStatus,
      @ObjectModel.foreignKey.association: '_DistrStatusByDectrlzdWrhs'
      vlstk                      as DistrStatusByDecentralizedWrhs,
      @ObjectModel.foreignKey.association: '_OverallGoodsMovementStatus'
      wbstk                      as OverallGoodsMovementStatus,
      @ObjectModel.foreignKey.association: '_OverallDelivReltdBillgStatus'
      fkstk                      as OverallDelivReltdBillgStatus,
      @ObjectModel.foreignKey.association: '_OverallProofOfDeliveryStatus'
      pdstk                      as OverallProofOfDeliveryStatus,
      @ObjectModel.foreignKey.association: '_HdrGeneralIncompletionStatus'
      uvall                      as HdrGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderDelivIncompletionStatus'
      uvvlk                      as HeaderDelivIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderPickgIncompletionStatus'
      uvpik                      as HeaderPickgIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderPackingIncompletionSts'
      uvpak                      as HeaderPackingIncompletionSts,
      @ObjectModel.foreignKey.association: '_HdrGoodsMvtIncompletionStatus'
      uvwak                      as HdrGoodsMvtIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderBillgIncompletionStatus'
      uvfak                      as HeaderBillgIncompletionStatus,
      @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
      uvals                      as OvrlItmGeneralIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmPackingIncompletionSts'
      uvpas                      as OvrlItmPackingIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmPickingIncompletionSts'
      uvpis                      as OvrlItmPickingIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmDelivIncompletionSts'
      uvvls                      as OvrlItmDelivIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmGdsMvtIncompletionSts'
      uvwas                      as OvrlItmGdsMvtIncompletionSts,
      @ObjectModel.foreignKey.association: '_TotalCreditCheckStatus'
      cmgst                      as TotalCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_FinDocCreditCheckStatus'
      likp.cmpsi                 as FinDocCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_PaytAuthsnCreditCheckSts'
      likp.cmpsk                 as PaytAuthsnCreditCheckSts,
      @ObjectModel.foreignKey.association: '_CentralCreditCheckStatus'
      likp.cmps_cm               as CentralCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_ExprtInsurCreditCheckStatus'
      likp.cmpsj                 as ExprtInsurCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_MaxDocValueCreditCheckStatus'
      cmpsc                      as MaxDocValueCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_PaymentTermCreditCheckStatus'
      cmpsd                      as PaymentTermCreditCheckStatus,

      // Fashion Management
      likp.rfm_psst_group        as ShippingGroupNumber,

      //Pricing
      knumv                      as PricingDocument,
      vkoiv                      as SalesOrgForIntcoBilling,
      vtwiv                      as DistrChnlForIntcoBilling,
      spaiv                      as DivisionForIntcoBilling,
      fkaiv                      as IntercompanyBillingType,
      pioiv                      as FactoryCalendarForIntcoBilling,
      kuniv                      as IntercompanyBillingCustomer,
      knump                      as DeliveryDocumentCondition,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      netwr                      as TotalNetAmount,
      xblnr                      as ReferenceDocumentNumber,
      spe_loekz                  as DeletionIndicator,

      //Status
      @ObjectModel.foreignKey.association: '_OverallChmlCmplncStatus'
      total_pcsta                as OverallChmlCmplncStatus,
      @ObjectModel.foreignKey.association: '_OverallDangerousGoodsStatus'
      total_dgsta                as OverallDangerousGoodsStatus,
      @ObjectModel.foreignKey.association: '_OvrlSftyDataSheetSts'
      total_sdssta               as OverallSafetyDataSheetStatus,
      //Customs Compliance Status
      @ObjectModel.foreignKey.association: '_OverallTrdCmplncEmbargoSts'
      total_emcst                as OverallTrdCmplncEmbargoSts,
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncSnctndListChkSts'
      total_slcst                as OvrlTrdCmplncSnctndListChkSts,
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncLegalCtrlChkSts'
      total_lccst                as OvrlTrdCmplncLegalCtrlChkSts,


      klief                      as IsCorrectionDelivery,

      @ObjectModel.foreignKey.association: '_WarehouseExecutionStatus'
      tm_whse_exec               as ReadyForWarehouseExecStatus,

      @ObjectModel.foreignKey.association: '_DelivAdvncdShipgRcvgRlvnce'
      tm_adv_ship_recv           as DelivAdvncdShipgRcvgRlvnce,

      @Semantics.booleanIndicator:true
      corr_ind                   as DelivIsQtyCrrtnAdvncShipgRcvg,

      //EMCS Integration - Excise Tax
      @ObjectModel.foreignKey.association: '_ExciseTaxStatus'
      total_arc_status           as EU_DeliveryARCStatus,

      //Intercompany - Transfer of Control Dates
      ext_act_date_tocd          as IntcoExtActlTransfOfCtrlDteTme,
      ext_plan_date_tocd         as IntcoExtPlndTransfOfCtrlDteTme,
      @ObjectModel.foreignKey.association: '_ExternalTCOTimezone'
      ext_tzone_tocd             as IntcoExtTransfOfCtrlDteTmeTmzn,
      int_act_date_tocd          as IntcoIntActlTransfOfCtrlDteTme,
      int_plan_date_tocd         as IntcoIntPlndTransfOfCtrlDteTme,
      @ObjectModel.foreignKey.association: '_InternalTCOTimezone'
      int_tzone_tocd             as IntcoIntTransfOfCtrlDteTmeTmzn,

      @ObjectModel.foreignKey.association: '_LogisticsExecScenario'
      spe_le_scenario            as LogisticsExecutionScenario,

      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Item,
      _Partner,
      //  Category
      _SDDocumentCategory,
      _DeliveryDocumentType,
      //  Admin
      _CreatedByUser,
      _LastChangedByUser,
      //  Organization
      _ShippingPoint,
      _SalesOrganization,
      _SalesOffice,
      //  Delivery
      _DeliveryPriority,
      _DeliveryBlockReason,
      _Supplier,
      _ReceivingPlant,
      _Warehouse,
      _OrderID,
      _HeaderWeightUnit,
      _HeaderVolumeUnit,
      _WarehouseGate,
      _WarehouseStagingArea,
      _MeansOfTransportRefMaterial,
      _SpecialProcessingCode,
      //  Pick Pack Load
      _LoadingPoint,
      _HandlingUnitInStock,
      //  Shipping
      _ShipToParty,
      _ShippingType,
      _ShippingCondition,
      _ShipmentBlockReason,
      _ProposedDeliveryRoute,
      _ActualDeliveryRoute,
      _IncotermsVersion,
      _IncotermsClassification,
      _TransportationGroup,
      _MeansOfTransportType,
      //  Billing
      _HeaderBillingBlockReason,
      _PaymentGuaranteeProcedure,
      //  Sales
      _SoldToParty,
      _CustomerGroup,
      _SalesDistrict,
      _TransactionCurrency,
      _StatisticsCurrency,
      //  Status
      _OverallSDProcessStatus,
      _TotalBlockStatus,
      _OverallDelivConfStatus,
      _TransportationPlanningSts,
      _OverallPickingConfStatus,
      _OverallPickingStatus,
      _OverallPackingStatus,
      _OvrlWarehouseActyStatus,
      _DistrStatusByDectrlzdWrhs,
      _OverallGoodsMovementStatus,
      _OverallDelivReltdBillgStatus,
      _OverallIntcoBillingStatus,
      _OverallProofOfDeliveryStatus,
      _HdrGeneralIncompletionStatus,
      _HeaderDelivIncompletionStatus,
      _HeaderPickgIncompletionStatus,
      _HeaderPackingIncompletionSts,
      _HdrGoodsMvtIncompletionStatus,
      _HeaderBillgIncompletionStatus,
      _OvrlItmGeneralIncompletionSts,
      _OvrlItmPackingIncompletionSts,
      _OvrlItmPickingIncompletionSts,
      _OvrlItmDelivIncompletionSts,
      _OvrlItmGdsMvtIncompletionSts,
      _TotalCreditCheckStatus,
      _FinDocCreditCheckStatus,
      _PaytAuthsnCreditCheckSts,
      _CentralCreditCheckStatus,
      _ExprtInsurCreditCheckStatus,
      _CentralCreditChkTechErrSts,
      _CustomerCreditAccount,
      _ControllingAreaCurrency,
      _MaxDocValueCreditCheckStatus,
      _PaymentTermCreditCheckStatus,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaterialDocumentHeader_2'      
      _MaterialDocumentHeader,
      _MaterialDocumentHeader_2,      
      _PackingStatusText,

      _OverallChmlCmplncStatus,
      _OverallDangerousGoodsStatus,
      _OvrlSftyDataSheetSts,
      _OverallTrdCmplncEmbargoSts,
      _OvrlTrdCmplncSnctndListChkSts,
      _OvrlTrdCmplncLegalCtrlChkSts,
      _ExternalTCOTimezone,
      _InternalTCOTimezone,
      _ExciseTaxStatus,

      _WarehouseExecutionStatus,
      _DelivAdvncdShipgRcvgRlvnce,
      _LogisticsExecScenario

};
```
