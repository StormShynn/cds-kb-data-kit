---
name: I_INSPECTIONLOT
description: "Inspectionlot"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOT

**Inspectionlot**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  | `prueflos` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `Batch` |  | |  | `charg` |  |  |
| `Plant` |  | |  | `werk` |  |  |
| `InspectionLotOrigin` |  | |  | `cast( qals.herkunft as vdm_qherk preserving type )` |  |  |
| `OrderInternalBillOfOperations` |  | |  | `aufpl` |  |  |
| `ManufacturingOrder` |  | |  | `cast( qals.aufnr as vdm_qm_fertaufnr preserving type )` |  |  |
| `InspectionLotText` |  | |  | `cast( qals.ktextlos as vdm_qplos_text preserving type )` |  |  |
| `InspectionLotType` |  | |  | `art` |  |  |
| `InspectionLotQuantity` |  | |  | `cast( qals.losmenge as vdm_qlosmenge preserving type )` |  |  |
| `InspectionLotActualQuantity` |  | |  | `cast( qals.lmengeist as vdm_qlmengeist preserving type )` |  |  |
| `InspectionLotDefectiveQuantity` |  | |  | `cast( qals.lmengesch as vdm_qlmengesch preserving type )` |  |  |
| `InspectionLotQuantityUnit` |  | |  | `mengeneinh` |  |  |
| `InspLotCreatedOnLocalDate` |  | |  | `enstehdat` |  |  |
| `InspSubsetFieldCombination` |  | |  | `slwbez` |  |  |
| `InspLotNmbrOpenLongTermCharc` |  | |  | `cast( qals.offen_lzmk as vdm_qoffelzmk preserving type )` |  |  |
| `StatusObject` |  | |  | `objnr` |  |  |
| `StatusObjectCategory` |  | |  | `obtyp` |  |  |
| `InspectionLotObjectText` |  | |  | `ktextmat` |  |  |
| `Equipment` |  | |  | `ls_equnr` |  |  |
| `FunctionalLocation` |  | |  | `ls_tplnr` |  |  |
| `StatusProfile` |  | |  | `stsma` |  |  |
| `MatlQualityAuthorizationGroup` |  | |  | `cast( qals.qmatauth as vdm_qmatauth preserving type )` |  |  |
| `InspectionLotHasQuantity` |  | |  | `cast( qals.insmk as vdm_qvinsmk preserving type )` |  |  |
| `InspLotIsCreatedAutomatically` |  | |  | `stat01` |  |  |
| `InspectionLotHasPartialLots` |  | |  | `stat02` |  |  |
| `InspectionLotHasAppraisalCosts` |  | |  | `stat06` |  |  |
| `InspLotHasSubsets` |  | |  | `stat07` |  |  |
| `InspLotIsAutomUsgeDcsnPossible` |  | |  | `cast( qals.stat08 as vdm_qauto_ve preserving type )` |  |  |
| `PurchasingDocumentCategory` |  | |  | `stat09` |  |  |
| `InspLotHasConfignSpecification` |  | |  | `stat10` |  |  |
| `GoodsReceiptIsMovedToBlkdStock` |  | |  | `stat11` |  |  |
| `InspLotSummaryControl` |  | |  | `stat18` |  |  |
| `InspLotIsDocumentationRequired` |  | |  | `cast( qals.stat19 as vdm_qstat19 preserving type )` |  |  |
| `InspLotIsTaskListRequired` |  | |  | `cast( qals.stat20 as vdm_qstat20 preserving type )` |  |  |
| `InspLotHasManualSampleSize` |  | |  | `stat21` |  |  |
| `InspLotHasMaterialSpec` |  | |  | `cast( qals.stat22 as vdm_qspezueber preserving type )` |  |  |
| `InspectionLotApproval` |  | |  | `cast( qals.stat23 as vdm_qkzgenlos preserving type )` |  |  |
| `InspLotDigitalSgntrResultsRecg` |  | |  | `stat24` |  |  |
| `InspLotDigitalSgntrInUsgeDcsn` |  | |  | `cast( qals.stat25 as vdm_qdgtlsgntrusgedcsn preserving type )` |  |  |
| `InspLotIsBatchRequired` |  | |  | `stat26` |  |  |
| `InspLotUsageInStabilityStudy` |  | |  | `stat32` |  |  |
| `InspLotHasMultipleSpec` |  | |  | `stat33` |  |  |
| `InspLotHasPrtlLotsToSplitQty` |  | |  | `stat36` |  |  |
| `InspLotIsStockPostingCompleted` |  | |  | `cast( qals.stat34 as vdm_qstat34 preserving type )` |  |  |
| `InspectionLotHasUsageDecision` |  | |  | `cast( qals.stat35 as vdm_qstat35 preserving type )` |  |  |
| `NumberOfSerialNumbers` |  | |  | `anzsn` |  |  |
| `InspLotIsSerialNmbrPossible` |  | |  | `ein` |  |  |
| `InspectionLotIsSkipped` |  | |  | `cast( qals.kzskiplot as vdm_qkzskiplot preserving type )` |  |  |
| `InspectionLotIsFullInspection` |  | |  | `hpz` |  |  |
| `InspectionLotDynamicLevel` |  | |  | `cast( qals.dynhead as vdm_qdynhead preserving type )` |  |  |
| `SamplingProcedure` |  | |  | `stprver` |  |  |
| `InspLotCreatedOnLocalTime` |  | |  | `cast( qals.entstezeit as vdm_qentstzeit preserving type )` |  |  |
| `InspectionLotCreatedBy` |  | |  | `ersteller` |  |  |
| `InspectionLotCreatedOn` |  | |  | `ersteldat` |  |  |
| `InspectionLotCreatedOnTime` |  | |  | `cast( qals.erstelzeit as vdm_qerstezeit preserving type )` |  |  |
| `InspectionLotChangedBy` |  | |  | `aenderer` |  |  |
| `InspectionLotChangeDate` |  | |  | `aenderdat` |  |  |
| `InspectionLotChangeTime` |  | |  | `cast( qals.aenderzeit as vdm_qaendezeit preserving type )` |  |  |
| `ChangedDateTime` |  | |  | `case qals.changeddatetime when 0 then cast( '19000101010101' as tzntstmps ) else qals.changeddatetime end` |  |  |
| `InspectionLotStartDate` |  | |  | `pastrterm` |  |  |
| `InspectionLotStartTime` |  | |  | `cast( qals.pastrzeit as vdm_qstartzeit preserving type )` |  |  |
| `InspectionLotEndDate` |  | |  | `paendterm` |  |  |
| `InspectionLotEndTime` |  | |  | `cast( qals.paendzeit as vdm_qendezeit preserving type )` |  |  |
| `BillOfOperationsType` |  | |  | `cast( qals.plnty as vdm_plnty preserving type )` |  |  |
| `BillOfOperationsGroup` |  | |  | `cast( qals.plnnr as vdm_plnnr preserving type )` |  |  |
| `BillOfOperationsUsage` |  | |  | `cast( qals.pplverw as vdm_pln_verwe preserving type )` |  |  |
| `BillOfOperationsVariant` |  | |  | `cast( qals.plnal as vdm_plnal preserving type )` |  |  |
| `BillOfOperationsChangeStateID` |  | |  | `zaehl` |  |  |
| `InspectionSubsetType` |  | |  | `cast( qals.stat13 as vdm_qppkttyp preserving type )` |  |  |
| `SmplDrawingProcedure` |  | |  | `cast( qals.prbnaverf as vdm_qprziehver preserving type )` |  |  |
| `SmplDrawingProcedureVersion` |  | |  | `prbnavv` |  |  |
| `SmplDrwgProcedIsConfRequired` |  | |  | `cast( qals.stat12 as vdm_qkzquit preserving type )` |  |  |
| `InspLotSelectionMaterial` |  | |  | `selmatnr` |  |  |
| `InspLotSelMatlRevisionLvl` |  | |  | `selrevlv` |  |  |
| `InspLotSelectionPlant` |  | |  | `selwerk` |  |  |
| `InspLotSelectionSupplier` |  | |  | `sellifnr` |  |  |
| `InspLotSelectionManufacturer` |  | |  | `selherst` |  |  |
| `InspLotSelectionCustomer` |  | |  | `selkunnr` |  |  |
| `InspLotSelBillOfOperationsUsge` |  | |  | `selpplverw` |  |  |
| `InspLotSelectionValidFromDate` |  | |  | `gueltigab` |  |  |
| `ProductionVersion` |  | |  | `verid` |  |  |
| `SalesOperationsPlanningOrder` |  | |  | `cast( qals.sa_aufnr as vdm_sa_aufnr preserving type )` |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `cvp_xblck` |  |  |
| `Customer` |  | |  | `cast( qals.kunnr as vdm_qkunwe preserving type )` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `BatchBySupplier` |  | |  | `lichn` |  |  |
| `Manufacturer` |  | |  | `hersteller` |  |  |
| `ManufacturerPartNmbr` |  | |  | `cast( qals.ematnr as vdm_ematn preserving type )` |  |  |
| `MaterialRevisionLevel` |  | |  | `revlv` |  |  |
| `MaterialIsBatchManaged` |  | |  | `cast( qals.xchpf as vdm_xchpf preserving type )` |  |  |
| `BatchStorageLocation` |  | |  | `cast( qals.lagortchrg as vdm_qlgortchar preserving type )` |  |  |
| `MaterialCompIsSpecialStock` |  | |  | `sobkz` |  |  |
| `PurchasingOrganization` |  | |  | `cast( qals.ekorg as ekorg_ll preserving type )` |  |  |
| `PurchasingDocument` |  | |  | `cast( qals.ebeln as fis_ebeln preserving type )` |  |  |
| `PurchasingDocumentItem` |  | |  | `cast( qals.ebelp as vdm_ebelp preserving type )` |  |  |
| `ScheduleLine` |  | |  | `etenr` |  |  |
| `AccountingDocumentType` |  | |  | `cast( qals.blart as vdm_blart preserving type )` |  |  |
| `MaterialDocumentYear` |  | |  | `cast( qals.mjahr as vdm_mjahr preserving type )` |  |  |
| `MaterialDocument` |  | |  | `mblnr` |  |  |
| `MaterialDocumentItem` |  | |  | `cast( qals.zeile as vdm_mblpo preserving type )` |  |  |
| `MatlDocLatestPostgDate` |  | |  | `budat` |  |  |
| `GoodsMovementType` |  | |  | `bwart` |  |  |
| `InspectionLotPlant` |  | |  | `cast( qals.werkvorg as vdm_qwerkvorg preserving type )` |  |  |
| `InspectionLotStorageLocation` |  | |  | `cast( qals.lagortvorg as vdm_qlgortvorg preserving type )` |  |  |
| `Warehouse` |  | |  | `lgnum` |  |  |
| `StorageType` |  | |  | `lgtyp` |  |  |
| `StorageBin` |  | |  | `lgpla` |  |  |
| `SalesOrder` |  | |  | `ls_kdauf` |  |  |
| `SalesOrderItem` |  | |  | `cast( qals.ls_kdpos as vdm_kdpos preserving type )` |  |  |
| `DeliveryDocument` |  | |  | `cast( qals.ls_vbeln as vdm_deliverydocument preserving type )` |  |  |
| `DeliveryDocumentItem` |  | |  | `cast( qals.ls_posnr as vdm_posnr_vl preserving type )` |  |  |
| `DeliveryCategory` |  | |  | `ls_abrvw` |  |  |
| `InspectionDeliveryCategory` |  | |  | `ls_abrvw` |  |  |
| `Route` |  | |  | `ls_route` |  |  |
| `BillToPartyCountry` |  | |  | `ls_lland` |  |  |
| `SoldToParty` |  | |  | `cast( qals.ls_kunag as vdm_kunag preserving type )` |  |  |
| `SalesOrganization` |  | |  | `ls_vkorg` |  |  |
| `MaterialByCustomer` |  | |  | `ls_kdmat` |  |  |
| `Language` |  | |  | `sprache` |  |  |
| `InspLotNmbrAddlRecordedCharc` |  | |  | `zusmkzaehl` |  |  |
| `InspLotNmbrOpenShortTermCharc` |  | |  | `offennlzmk` |  |  |
| `InspectionLotContainer` |  | |  | `anzgeb` |  |  |
| `InspectionLotContainerUnit` |  | |  | `gebeh` |  |  |
| `InspectionLotSampleQuantity` |  | |  | `gesstichpr` |  |  |
| `InspectionLotSampleUnit` |  | |  | `cast( qals.einhprobe as vdm_qprobemgeh preserving type )` |  |  |
| `InspLotDynamicRule` |  | |  | `cast( qals.dynregel as vdm_qdynregel preserving type )` |  |  |
| `InspLotDynamicTrggrPoint` |  | |  | `stat44` |  |  |
| `InspectionDynamicStage` |  | |  | `prstufe` |  |  |
| `InspectionSeverity` |  | |  | `prschaerfe` |  |  |
| `InspLotQtyToFree` |  | |  | `cast( qals.lmenge01 as vdm_qlmenge01f preserving type )` |  |  |
| `InspLotQtyToScrap` |  | |  | `cast( qals.lmenge02 as vdm_qlmenge02f preserving type )` |  |  |
| `InspLotQtyToSample` |  | |  | `lmenge03` |  |  |
| `InspLotQtyToBlocked` |  | |  | `cast( qals.lmenge04 as vdm_qlmenge04f preserving type )` |  |  |
| `InspLotQtyToReserves` |  | |  | `lmenge05` |  |  |
| `InspLotQtyToAnotherMaterial` |  | |  | `cast( qals.lmenge06 as vdm_qlmenge06f preserving type )` |  |  |
| `InspLotMaterialPostedTo` |  | |  | `cast( qals.matnrneu as vdm_qmatnrneu preserving type )` |  |  |
| `InspLotBatchTransferredTo` |  | |  | `cast( qals.chargneu as vdm_qchargneu preserving type )` |  |  |
| `InspLotQtyReturnedToSupplier` |  | |  | `cast( qals.lmenge07 as vdm_qlmenge07f preserving type )` |  |  |
| `InspLotQtyToSpecialStock` |  | |  | `cast( qals.lmenge08 as vdm_qlmenge08f preserving type )` |  |  |
| `InspLotQtyToOtherStock` |  | |  | `cast( qals.lmenge09 as vdm_qlmenge09f preserving type )` |  |  |
| `InspLotQtyToBePosted` |  | |  | `cast( qals.lmengezub as vdm_qlmengezub preserving type )` |  |  |
| `InspLotSmplQtyForLongTermChar` |  | |  | `cast( qals.lmengelz as vdm_qlmengelz preserving type )` |  |  |
| `InspLotQtyInspected` |  | |  | `cast( qals.lmengepr as vdm_qlmengepr preserving type )` |  |  |
| `InspLotQtyDestroyed` |  | |  | `cast( qals.lmengezer as vdm_qlmengezer preserving type )` |  |  |
| `InspectionLotScrapRatio` |  | |  | `anteil` |  |  |
| `InspLotUsageDecisionTool` |  | |  | `stat03` |  |  |
| `InspectionLotAllowedScrapRatio` |  | |  | `qpmatlos` |  |  |
| `QualityCostCollector` |  | |  | `aufnr_co` |  |  |
| `ConsumptionPosting` |  | |  | `kzvbr` |  |  |
| `AccountAssignmentCategory` |  | |  | `knttp` |  |  |
| `PurchasingDocumentItemCategory` |  | |  | `pstyp` |  |  |
| `InspLotAcctAssgmtKey` |  | |  | `stat05` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `ReservationItem` |  | |  | `aufps` |  |  |
| `MasterFixedAsset` |  | |  | `anln1` |  |  |
| `FixedAsset` |  | |  | `anln2` |  |  |
| `SalesOrdStockWBSElement` |  | |  | `ps_psp_pnr` |  |  |
| `ProjectNetwork` |  | |  | `nplnr` |  |  |
| `NetworkActivityInternalID` |  | |  | `aplzl` |  |  |
| `InventorySpclStkSalesDocument` |  | |  | `cast( qals.kdauf as vdm_mat_kdauf preserving type )` |  |  |
| `InventorySpclStkSalesDocItm` |  | |  | `kdpos` |  |  |
| `ProfitabilitySegment` |  | |  | `cast( case when paobjnr > '9999999999' then '9999999999' else lpad( qals.paobjnr, 10, '0' ) end as rkeobjnr_numc )` |  |  |
| `ProfitabilitySegment_2` |  | |  | `cast( qals.paobjnr as rkeobjnr_char )` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `GLAccount` |  | |  | `konto` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `SerialNumberProfile` |  | |  | `sernp` |  |  |
| `InspLotCostCollectorSalesOrder` |  | |  | `kont_kdauf` |  |  |
| `InspLotCostCollectorSlsOrdItem` |  | |  | `kont_kdpos` |  |  |
| `InspLotCostCollectorWBSElement` |  | |  | `kont_pspnr` |  |  |
| `InspLotExternalNumber` |  | |  | `cast( qals.insp_doc_number as vdm_qinsp_doc_number preserving type )` |  |  |
| `InspectionLotPriorityPoints` |  | |  | `prio_punkte` |  |  |
| `MaintenancePlan` |  | |  | `warpl` |  |  |
| `MaintenancePlanItemIntID` |  | |  | `wapos` |  |  |
| `MaintenanceStrategy` |  | |  | `strat` |  |  |
| `InspLotForFirstArticleInsp` |  | |  | `stat43` |  |  |
| `InspectionLotUUID` |  | |  | `lot_guid` |  |  |
| `InspUsgeDcsnDgtlSgntrType` |  | |  | `cast( qals.sign_type_ud as vdm_qsign_type_ud preserving type )` |  |  |
| `InspUsgeDcsnDgtlSgntrStrgy` |  | |  | `cast( qals.signstrat_ud as vdm_qsignstrat_ud preserving type )` |  |  |
| `_InspectionLotType` | | ✓ | | | | |
| `_InspectionLotOrigin` | | ✓ | | | | |
| `_InspSubsetFieldCombination` | | ✓ | | | | |
| `_QltyMgmtPlantLvlConfign` | | ✓ | | | | |
| `_InspLotSummaryControl` | | ✓ | | | | |
| `_InspectionOperation` | | ✓ | | | | |
| `_InspLotUsageDecision` | | ✓ | | | | |
| `_MaterialSampleDrawing` | | ✓ | | | | |
| `_InspLotMatlDocItem` | | ✓ | | | | |
| `_MatlQualityAuthGroup` | | ✓ | | | | |
| `_InspectionSubsetType` | | ✓ | | | | |
| `_InspectionSubsetTypeText` | | ✓ | | | | |
| `_InspectionLotApproval` | | ✓ | | | | |
| `_InspectionLotApprovalText` | | ✓ | | | | |
| `_InspLotSgntrInUsgeDcsn` | | ✓ | | | | |
| `_InspLotSgntrInUsgeDcsnText` | | ✓ | | | | |
| `_InspectionLotLongText` | | ✓ | | | | |
| `_InspectionLotAllLongText` | | ✓ | | | | |
| `_InspectionLotHasQuantity` | | ✓ | | | | |
| `_InspectionLotHasQuantityT` | | ✓ | | | | |
| `_IsStockPostgCmpltd` | | ✓ | | | | |
| `_IsStockPostgCmpltdTxt` | | ✓ | | | | |
| `_SmplDrwgProcedIsConfRqd` | | ✓ | | | | |
| `_SmplDrwgProcedIsConfRqdTxt` | | ✓ | | | | |
| `_IsAutomUsgeDcsnPossible` | | ✓ | | | | |
| `_IsAutomUsgeDcsnPossibleTxt` | | ✓ | | | | |
| `_IsDocumentationRqd` | | ✓ | | | | |
| `_IsDocumentationRqdTxt` | | ✓ | | | | |
| `_InspLotIsBatchRequired` | | ✓ | | | | |
| `_InspLotIsBatchRequiredTxt` | | ✓ | | | | |
| `_InspectionLotHasUsgeDcsn` | | ✓ | | | | |
| `_InspectionLotHasUsgeDcsnTxt` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_InspLotSelectionMaterial` | | ✓ | | | | |
| `_BillOfOperationsChangeState` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_MaintenancePlan` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Manufacturer` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_InspLotSelectionSupplier` | | ✓ | | | | |
| `_InspLotSelManufacturer` | | ✓ | | | | |
| `_InspLotSelectionCustomer` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOrdStockWBSElement` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_InspectionLotCreatedBy` | | ✓ | | | | |
| `_InspectionLotChangedBy` | | ✓ | | | | |
| `_InspectionLotQuantityUnit` | | ✓ | | | | |
| `_InspectionLotSampleUnit` | | ✓ | | | | |
| `_InspectionLotContainerUnit` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_ManufacturerPartNmbr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLotType` | `I_InspectionLotType` | [1..1] |
| `_InspectionLotOrigin` | `I_InspectionLotOrigin` | [1..1] |
| `_InspSubsetFieldCombination` | `I_InspSubsetFieldCombination` | [0..1] |
| `_QltyMgmtPlantLvlConfign` | `I_QltyMgmtPlantLvlConfign` | [0..1] |
| `_InspLotSummaryControl` | `I_InspLotSummaryControl` | [0..1] |
| `_InspectionOperation` | `I_InspectionOperation` | [0..*] |
| `_InspLotUsageDecision` | `I_InspLotUsageDecision` | [0..1] |
| `_MaterialSampleDrawing` | `I_MaterialSampleDrawing` | [0..*] |
| `_InspLotMatlDocItem` | `I_InspLotMatlDocItem` | [0..*] |
| `_MatlQualityAuthGroup` | `I_MatlQualityAuthGroup` | [0..1] |
| `_InspectionSubsetType` | `I_InspectionSubsetType` | [0..1] |
| `_InspectionSubsetTypeText` | `I_InspectionSubsetTypeText` | [0..*] |
| `_InspectionLotApproval` | `I_InspectionLotApproval` | [0..1] |
| `_InspectionLotApprovalText` | `I_InspectionLotApprovalText` | [0..*] |
| `_InspLotSgntrInUsgeDcsn` | `I_InspLotSgntrInUsgeDcsn` | [0..1] |
| `_InspLotSgntrInUsgeDcsnText` | `I_InspLotSgntrInUsgeDcsnText` | [0..*] |
| `_InspectionLotLongText` | `I_InspectionLotLongText` | [0..*] |
| `_InspectionLotAllLongText` | `I_InspectionLotAllLongText` | [0..*] |
| `_InspectionLotHasQuantity` | `I_Indicator` | [1..1] |
| `_InspectionLotHasQuantityT` | `I_Indicatortext` | [0..*] |
| `_IsStockPostgCmpltd` | `I_Indicator` | [1..1] |
| `_IsStockPostgCmpltdTxt` | `I_Indicatortext` | [0..*] |
| `_SmplDrwgProcedIsConfRqd` | `I_Indicator` | [1..1] |
| `_SmplDrwgProcedIsConfRqdTxt` | `I_Indicatortext` | [0..*] |
| `_IsAutomUsgeDcsnPossible` | `I_Indicator` | [1..1] |
| `_IsAutomUsgeDcsnPossibleTxt` | `I_Indicatortext` | [0..*] |
| `_IsDocumentationRqd` | `I_Indicator` | [1..1] |
| `_IsDocumentationRqdTxt` | `I_Indicatortext` | [0..*] |
| `_InspLotIsBatchRequired` | `I_Indicator` | [1..1] |
| `_InspLotIsBatchRequiredTxt` | `I_Indicatortext` | [0..*] |
| `_InspectionLotHasUsgeDcsn` | `I_Indicator` | [1..1] |
| `_InspectionLotHasUsgeDcsnTxt` | `I_Indicatortext` | [0..*] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Material` | `I_Material` | [1..1] |
| `_InspLotSelectionMaterial` | `I_Material` | [0..1] |
| `_BillOfOperationsChangeState` | `I_BillOfOperationsChangeState` | [0..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [0..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [0..1] |
| `_MaintenancePlan` | `I_MaintenancePlan` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Manufacturer` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_InspLotSelectionSupplier` | `I_Supplier` | [0..1] |
| `_InspLotSelManufacturer` | `I_Supplier` | [0..1] |
| `_InspLotSelectionCustomer` | `I_Customer` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SalesOrdStockWBSElement` | `I_WBSElementByInternalKey` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_InspectionLotCreatedBy` | `I_User` | [0..1] |
| `_InspectionLotChangedBy` | `I_User` | [0..1] |
| `_InspectionLotQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_InspectionLotSampleUnit` | `I_UnitOfMeasure` | [0..1] |
| `_InspectionLotContainerUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_ManufacturerPartNmbr` | `I_Material` | [0..1] |
| `_Extension` | `E_InspectionLot` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Inspection Lot'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IINSPECTIONLOT'
@AbapCatalog.compiler.compareFilter:true
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'InspectionLot'
@ObjectModel.compositionRoot: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_InspLotMatlDocItem','_InspectionLotCreatedBy','_InspectionLotChangedBy' ]
@ObjectModel.usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #A
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionLot
  as select from qals
  //Association to customizing
  association [1..1] to I_InspectionLotType           as _InspectionLotType           on  $projection.InspectionLotType = _InspectionLotType.InspectionLotType
  association [1..1] to I_InspectionLotOrigin         as _InspectionLotOrigin         on  $projection.InspectionLotOrigin = _InspectionLotOrigin.InspectionLotOrigin
  association [0..1] to I_InspSubsetFieldCombination  as _InspSubsetFieldCombination  on  $projection.InspSubsetFieldCombination = _InspSubsetFieldCombination.InspSubsetFieldCombination
  association [0..1] to I_QltyMgmtPlantLvlConfign     as _QltyMgmtPlantLvlConfign     on  $projection.Plant = _QltyMgmtPlantLvlConfign.Plant
  association [0..1] to I_InspLotSummaryControl       as _InspLotSummaryControl       on  $projection.InspLotSummaryControl = _InspLotSummaryControl.InspLotSummaryControl
                                                                                      and $projection.InspectionLotOrigin   = _InspLotSummaryControl.InspectionLotOrigin
  //Association to other QM nodes
  association [0..*] to I_InspectionOperation         as _InspectionOperation         on  $projection.InspectionLot = _InspectionOperation.InspectionLot
  association [0..1] to I_InspLotUsageDecision        as _InspLotUsageDecision        on  $projection.InspectionLot = _InspLotUsageDecision.InspectionLot
  association [0..*] to I_MaterialSampleDrawing       as _MaterialSampleDrawing       on  $projection.InspectionLot = _MaterialSampleDrawing.InspectionLot
  association [0..*] to I_InspLotMatlDocItem          as _InspLotMatlDocItem          on  $projection.InspectionLot = _InspLotMatlDocItem.InspectionLot
  association [0..1] to I_MatlQualityAuthGroup        as _MatlQualityAuthGroup        on  $projection.MatlQualityAuthorizationGroup = _MatlQualityAuthGroup.MatlQualityAuthorizationGroup
  association [0..1] to I_InspectionSubsetType        as _InspectionSubsetType        on  $projection.InspectionSubsetType = _InspectionSubsetType.InspectionSubsetType
  association [0..*] to I_InspectionSubsetTypeText    as _InspectionSubsetTypeText    on  $projection.InspectionSubsetType = _InspectionSubsetTypeText.InspectionSubsetType
  association [0..1] to I_InspectionLotApproval       as _InspectionLotApproval       on  $projection.InspectionLotApproval = _InspectionLotApproval.InspectionLotApproval
  association [0..*] to I_InspectionLotApprovalText   as _InspectionLotApprovalText   on  $projection.InspectionLotApproval = _InspectionLotApprovalText.InspectionLotApproval
  association [0..1] to I_InspLotSgntrInUsgeDcsn      as _InspLotSgntrInUsgeDcsn      on  $projection.InspLotDigitalSgntrInUsgeDcsn = _InspLotSgntrInUsgeDcsn.InspLotDigitalSgntrInUsgeDcsn
  association [0..*] to I_InspLotSgntrInUsgeDcsnText  as _InspLotSgntrInUsgeDcsnText  on  $projection.InspLotDigitalSgntrInUsgeDcsn = _InspLotSgntrInUsgeDcsnText.InspLotDigitalSgntrInUsgeDcsn
  association [0..*] to I_InspectionLotLongText       as _InspectionLotLongText       on  $projection.InspectionLot = _InspectionLotLongText.InspectionLot
  association [0..*] to I_InspectionLotAllLongText    as _InspectionLotAllLongText    on  $projection.InspectionLot = _InspectionLotAllLongText.InspectionLot
  //Associations for indicator fields
  association [1..1] to I_Indicator                   as _InspectionLotHasQuantity    on  $projection.InspectionLotHasQuantity = _InspectionLotHasQuantity.IndicatorValue
  association [0..*] to I_Indicatortext               as _InspectionLotHasQuantityT   on  $projection.InspectionLotHasQuantity = _InspectionLotHasQuantityT.IndicatorValue
  association [1..1] to I_Indicator                   as _IsStockPostgCmpltd          on  $projection.InspLotIsStockPostingCompleted = _IsStockPostgCmpltd.IndicatorValue
  association [0..*] to I_Indicatortext               as _IsStockPostgCmpltdTxt       on  $projection.InspLotIsStockPostingCompleted = _IsStockPostgCmpltdTxt.IndicatorValue
  association [1..1] to I_Indicator                   as _SmplDrwgProcedIsConfRqd     on  $projection.SmplDrwgProcedIsConfRequired = _SmplDrwgProcedIsConfRqd.IndicatorValue
  association [0..*] to I_Indicatortext               as _SmplDrwgProcedIsConfRqdTxt  on  $projection.SmplDrwgProcedIsConfRequired = _SmplDrwgProcedIsConfRqdTxt.IndicatorValue
  association [1..1] to I_Indicator                   as _IsAutomUsgeDcsnPossible     on  $projection.InspLotIsAutomUsgeDcsnPossible = _IsAutomUsgeDcsnPossible.IndicatorValue
  association [0..*] to I_Indicatortext               as _IsAutomUsgeDcsnPossibleTxt  on  $projection.InspLotIsAutomUsgeDcsnPossible = _IsAutomUsgeDcsnPossibleTxt.IndicatorValue
  association [1..1] to I_Indicator                   as _IsDocumentationRqd          on  $projection.InspLotIsDocumentationRequired = _IsDocumentationRqd.IndicatorValue
  association [0..*] to I_Indicatortext               as _IsDocumentationRqdTxt       on  $projection.InspLotIsDocumentationRequired = _IsDocumentationRqdTxt.IndicatorValue
  association [1..1] to I_Indicator                   as _InspLotIsBatchRequired      on  $projection.InspLotIsBatchRequired = _InspLotIsBatchRequired.IndicatorValue
  association [0..*] to I_Indicatortext               as _InspLotIsBatchRequiredTxt   on  $projection.InspLotIsBatchRequired = _InspLotIsBatchRequiredTxt.IndicatorValue
  association [1..1] to I_Indicator                   as _InspectionLotHasUsgeDcsn    on  $projection.InspectionLotHasUsageDecision = _InspectionLotHasUsgeDcsn.IndicatorValue
  association [0..*] to I_Indicatortext               as _InspectionLotHasUsgeDcsnTxt on  $projection.InspectionLotHasUsageDecision = _InspectionLotHasUsgeDcsnTxt.IndicatorValue

  //Associations to views of other applications
  association [1..1] to I_Plant                       as _Plant                       on  $projection.Plant = _Plant.Plant
  association [1..1] to I_Material                    as _Material                    on  $projection.Material = _Material.Material
  association [0..1] to I_Material                    as _InspLotSelectionMaterial    on  $projection.InspLotSelectionMaterial = _InspLotSelectionMaterial.Material
  association [0..1] to I_BillOfOperationsChangeState as _BillOfOperationsChangeState on  $projection.BillOfOperationsType          = _BillOfOperationsChangeState.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup         = _BillOfOperationsChangeState.BillOfOperationsGroup
                                                                                      and $projection.BillOfOperationsVariant       = _BillOfOperationsChangeState.BillOfOperationsVariant
                                                                                      and $projection.BillOfOperationsChangeStateID = _BillOfOperationsChangeState.BOOInternalVersionCounter
  association [0..1] to I_BillOfOperationsType        as _BillOfOperationsType        on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [0..1] to I_BillOfOperationsGroup       as _BillOfOperationsGroup       on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup
  association [0..1] to I_MaintenancePlan             as _MaintenancePlan             on  $projection.MaintenancePlan = _MaintenancePlan.MaintenancePlan
  association [0..1] to I_Supplier                    as _Supplier                    on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Supplier                    as _Manufacturer                on  $projection.Manufacturer = _Manufacturer.Supplier
  association [0..1] to I_Customer                    as _Customer                    on  $projection.Customer = _Customer.Customer
  association [0..1] to I_Supplier                    as _InspLotSelectionSupplier    on  $projection.InspLotSelectionSupplier = _InspLotSelectionSupplier.Supplier
  association [0..1] to I_Supplier                    as _InspLotSelManufacturer      on  $projection.InspLotSelectionManufacturer = _InspLotSelManufacturer.Supplier
  association [0..1] to I_Customer                    as _InspLotSelectionCustomer    on  $projection.InspLotSelectionCustomer = _InspLotSelectionCustomer.Customer
  association [0..1] to I_Customer                    as _SoldToParty                 on  $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_SalesOrganization           as _SalesOrganization           on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_WBSElementByInternalKey     as _SalesOrdStockWBSElement     on  $projection.SalesOrdStockWBSElement = _SalesOrdStockWBSElement.WBSElementInternalID
  association [0..1] to I_Equipment                   as _Equipment                   on  $projection.Equipment = _Equipment.Equipment
  association [0..1] to I_FunctionalLocation          as _FunctionalLocation          on  $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation

  //Assocation to foundation views
  association [0..1] to I_User                        as _InspectionLotCreatedBy      on  $projection.InspectionLotCreatedBy = _InspectionLotCreatedBy.UserID
  association [0..1] to I_User                        as _InspectionLotChangedBy      on  $projection.InspectionLotChangedBy = _InspectionLotChangedBy.UserID
  association [0..1] to I_UnitOfMeasure               as _InspectionLotQuantityUnit   on  $projection.InspectionLotQuantityUnit = _InspectionLotQuantityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _InspectionLotSampleUnit     on  $projection.InspectionLotSampleUnit = _InspectionLotSampleUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _InspectionLotContainerUnit  on  $projection.InspectionLotContainerUnit = _InspectionLotContainerUnit.UnitOfMeasure
  association [0..1] to I_PurchasingOrganization      as _PurchasingOrganization      on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [0..1] to I_Material                    as _ManufacturerPartNmbr        on  $projection.ManufacturerPartNmbr = _ManufacturerPartNmbr.Material
  
  //Extension
  association [1..1] to E_InspectionLot               as _Extension                   on  $projection.InspectionLot = _Extension.InspectionLot
{
  key qals.prueflos                                                        as InspectionLot,
      //--[ GENERATED:012:GlBfhyFV7kY4h}Hp2Z7VlG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Material'
      qals.matnr                                                           as Material,
      qals.charg                                                           as Batch,
      @ObjectModel.foreignKey.association: '_Plant'
      qals.werk                                                            as Plant,
      @ObjectModel.foreignKey.association: '_InspectionLotOrigin'
      cast( qals.herkunft as vdm_qherk preserving type )                   as InspectionLotOrigin,
      qals.aufpl                                                           as OrderInternalBillOfOperations,
      cast( qals.aufnr as vdm_qm_fertaufnr preserving type )               as ManufacturingOrder,
      @Semantics.text: true
      cast( qals.ktextlos as vdm_qplos_text preserving type  )             as InspectionLotText,
      @ObjectModel.foreignKey.association: '_InspectionLotType'
      qals.art                                                             as InspectionLotType,
      @DefaultAggregation:#NONE
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      cast( qals.losmenge as vdm_qlosmenge preserving type )               as InspectionLotQuantity,
      @DefaultAggregation:#NONE
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      cast( qals.lmengeist as vdm_qlmengeist preserving type )             as InspectionLotActualQuantity,
      @DefaultAggregation:#NONE
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      cast( qals.lmengesch as vdm_qlmengesch preserving type )             as InspectionLotDefectiveQuantity,
      @ObjectModel.foreignKey.association: '_InspectionLotQuantityUnit'
      @DefaultAggregation:#NONE
      @Semantics.unitOfMeasure: true
      qals.mengeneinh                                                      as InspectionLotQuantityUnit,
      qals.enstehdat                                                       as InspLotCreatedOnLocalDate,
      @ObjectModel.foreignKey.association: '_InspSubsetFieldCombination'
      qals.slwbez                                                          as InspSubsetFieldCombination,
      cast( qals.offen_lzmk as vdm_qoffelzmk preserving type )             as InspLotNmbrOpenLongTermCharc,
      qals.objnr                                                           as StatusObject,
      qals.obtyp                                                           as StatusObjectCategory,
      qals.ktextmat                                                        as InspectionLotObjectText,
      qals.ls_equnr                                                        as Equipment,
      qals.ls_tplnr                                                        as FunctionalLocation,
      qals.stsma                                                           as StatusProfile,
      cast( qals.qmatauth as vdm_qmatauth preserving type )                as MatlQualityAuthorizationGroup,
      @ObjectModel.foreignKey.association: '_InspectionLotHasQuantity'
      cast( qals.insmk as vdm_qvinsmk preserving type )                    as InspectionLotHasQuantity,
      qals.stat01                                                          as InspLotIsCreatedAutomatically,
      qals.stat02                                                          as InspectionLotHasPartialLots,
      qals.stat06                                                          as InspectionLotHasAppraisalCosts,
      qals.stat07                                                          as InspLotHasSubsets,
      @ObjectModel.foreignKey.association: '_IsAutomUsgeDcsnPossible'
      cast( qals.stat08 as vdm_qauto_ve preserving type )                  as InspLotIsAutomUsgeDcsnPossible,
      qals.stat09                                                          as PurchasingDocumentCategory,
      qals.stat10                                                          as InspLotHasConfignSpecification,
      qals.stat11                                                          as GoodsReceiptIsMovedToBlkdStock,
      @ObjectModel.foreignKey.association: '_InspLotSummaryControl'
      qals.stat18                                                          as InspLotSummaryControl,
      @ObjectModel.foreignKey.association: '_IsDocumentationRqd'
      cast( qals.stat19 as vdm_qstat19 preserving type )                   as InspLotIsDocumentationRequired,
      cast( qals.stat20 as vdm_qstat20 preserving type )                   as InspLotIsTaskListRequired,
      qals.stat21                                                          as InspLotHasManualSampleSize,
      cast( qals.stat22    as vdm_qspezueber preserving type )             as InspLotHasMaterialSpec,
      @ObjectModel.foreignKey.association: '_InspectionLotApproval'
      cast( qals.stat23    as vdm_qkzgenlos preserving type )              as InspectionLotApproval,
      qals.stat24                                                          as InspLotDigitalSgntrResultsRecg,
      @ObjectModel.foreignKey.association: '_InspLotSgntrInUsgeDcsn'
      cast( qals.stat25    as vdm_qdgtlsgntrusgedcsn preserving type )     as InspLotDigitalSgntrInUsgeDcsn,
      @ObjectModel.foreignKey.association: '_InspLotIsBatchRequired'
      qals.stat26                                                          as InspLotIsBatchRequired,
      qals.stat32                                                          as InspLotUsageInStabilityStudy,
      @Semantics.booleanIndicator
      qals.stat33                                                          as InspLotHasMultipleSpec,
      @Semantics.booleanIndicator
      qals.stat36                                                          as InspLotHasPrtlLotsToSplitQty,
      @ObjectModel.foreignKey.association: '_IsStockPostgCmpltd'
      cast( qals.stat34 as vdm_qstat34 preserving type )                   as InspLotIsStockPostingCompleted,
      @ObjectModel.foreignKey.association: '_InspectionLotHasUsgeDcsn'
      cast( qals.stat35 as vdm_qstat35 preserving type )                   as InspectionLotHasUsageDecision,
      qals.anzsn                                                           as NumberOfSerialNumbers,
      qals.ein                                                             as InspLotIsSerialNmbrPossible,
      cast( qals.kzskiplot as vdm_qkzskiplot preserving type )             as InspectionLotIsSkipped,
      qals.hpz                                                             as InspectionLotIsFullInspection,
      cast( qals.dynhead as vdm_qdynhead preserving type )                 as InspectionLotDynamicLevel,
      qals.stprver                                                         as SamplingProcedure,
      cast( qals.entstezeit as vdm_qentstzeit preserving type )            as InspLotCreatedOnLocalTime,
      @Semantics.user.createdBy: true
      qals.ersteller                                                       as InspectionLotCreatedBy,
      @Semantics.systemDate.createdAt: true
      qals.ersteldat                                                       as InspectionLotCreatedOn,
      cast( qals.erstelzeit as vdm_qerstezeit preserving type )            as InspectionLotCreatedOnTime,
      @Semantics.user.lastChangedBy: true
      qals.aenderer                                                        as InspectionLotChangedBy,
      @Semantics.systemDate.lastChangedAt: true
      qals.aenderdat                                                       as InspectionLotChangeDate,
      cast( qals.aenderzeit as vdm_qaendezeit preserving type )            as InspectionLotChangeTime,
      case qals.changeddatetime
        when 0 then cast( '19000101010101' as tzntstmps )
        else qals.changeddatetime   end                                    as ChangedDateTime,
      qals.pastrterm                                                       as InspectionLotStartDate,
      cast( qals.pastrzeit as vdm_qstartzeit preserving type )             as InspectionLotStartTime,
      qals.paendterm                                                       as InspectionLotEndDate,
      cast( qals.paendzeit as vdm_qendezeit preserving type )              as InspectionLotEndTime,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      cast( qals.plnty as vdm_plnty preserving type )                      as BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      cast( qals.plnnr as vdm_plnnr preserving type )                      as BillOfOperationsGroup,
      cast( qals.pplverw as vdm_pln_verwe preserving type )                as BillOfOperationsUsage,
      cast( qals.plnal as vdm_plnal preserving type )                      as BillOfOperationsVariant,
      qals.zaehl                                                           as BillOfOperationsChangeStateID,
      @ObjectModel.foreignKey.association: '_InspectionSubsetType'
      cast( qals.stat13    as vdm_qppkttyp preserving type )               as InspectionSubsetType,
      cast( qals.prbnaverf as vdm_qprziehver preserving type )             as SmplDrawingProcedure,
      qals.prbnavv                                                         as SmplDrawingProcedureVersion,
      @ObjectModel.foreignKey.association: '_SmplDrwgProcedIsConfRqd'
      cast( qals.stat12    as vdm_qkzquit preserving type )                as SmplDrwgProcedIsConfRequired,
      //--[ GENERATED:012:GlBfhyFV7kY4h}Hp2Z7VlG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspLotSelectionMaterial'
      qals.selmatnr                                                        as InspLotSelectionMaterial,
      qals.selrevlv                                                        as InspLotSelMatlRevisionLvl,
      qals.selwerk                                                         as InspLotSelectionPlant,
      //--[ GENERATED:012:GlBfhyFV7kY4h}Hp2Z7VlG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Supplier_VH',
                     element: 'Supplier' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspLotSelectionSupplier'
      qals.sellifnr                                                        as InspLotSelectionSupplier,
      //--[ GENERATED:012:GlBfhyFV7kY4h}Hp2Z7VlG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Supplier_VH',
                     element: 'Supplier' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspLotSelManufacturer'
      qals.selherst                                                        as InspLotSelectionManufacturer,
      //--[ GENERATED:012:GlBfhyFV7kY4h}Hp2Z7VlG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspLotSelectionCustomer'
      qals.selkunnr                                                        as InspLotSelectionCustomer,
      qals.selpplverw                                                      as InspLotSelBillOfOperationsUsge,
      qals.gueltigab                                                       as InspLotSelectionValidFromDate,
      qals.verid                                                           as ProductionVersion,
      cast( qals.sa_aufnr as vdm_sa_aufnr preserving type )                as SalesOperationsPlanningOrder,
      qals.cvp_xblck                                                       as IsBusinessPurposeCompleted,
      //--[ GENERATED:012:GlBfhyFV7kY4h}Hp2Z7VlG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Customer'
      cast( qals.kunnr as vdm_qkunwe preserving type )                     as Customer,
      //--[ GENERATED:012:GlBfhyFV7kY4h}Hp2Z7VlG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Supplier_VH',
                     element: 'Supplier' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Supplier'
      qals.lifnr                                                           as Supplier,
      qals.lichn                                                           as BatchBySupplier,
      //--[ GENERATED:012:GlBfhyFV7kY4h}Hp2Z7VlG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Supplier_VH',
                     element: 'Supplier' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Manufacturer'
      qals.hersteller                                                      as Manufacturer,
      @ObjectModel.foreignKey.association: '_ManufacturerPartNmbr'
      cast( qals.ematnr as vdm_ematn preserving type )                     as ManufacturerPartNmbr,
      qals.revlv                                                           as MaterialRevisionLevel,
      cast( qals.xchpf as vdm_xchpf preserving type )                      as MaterialIsBatchManaged,
      cast( qals.lagortchrg as vdm_qlgortchar preserving type )            as BatchStorageLocation,
      qals.sobkz                                                           as MaterialCompIsSpecialStock,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      cast( qals.ekorg as ekorg_ll preserving type )                       as PurchasingOrganization,
      cast( qals.ebeln as fis_ebeln preserving type )                      as PurchasingDocument,
      cast( qals.ebelp as vdm_ebelp preserving type )                      as PurchasingDocumentItem,
      qals.etenr                                                           as ScheduleLine,
      cast( qals.blart as vdm_blart preserving type )                      as AccountingDocumentType,
      cast( qals.mjahr as vdm_mjahr preserving type )                      as MaterialDocumentYear,
      qals.mblnr                                                           as MaterialDocument,
      cast( qals.zeile as vdm_mblpo preserving type )                      as MaterialDocumentItem,
      qals.budat                                                           as MatlDocLatestPostgDate,
      qals.bwart                                                           as GoodsMovementType,
      cast( qals.werkvorg as vdm_qwerkvorg preserving type )               as InspectionLotPlant,
      cast( qals.lagortvorg as vdm_qlgortvorg preserving type )            as InspectionLotStorageLocation,
      qals.lgnum                                                           as Warehouse,
      qals.lgtyp                                                           as StorageType,
      qals.lgpla                                                           as StorageBin,
      qals.ls_kdauf                                                        as SalesOrder,
      cast( qals.ls_kdpos as vdm_kdpos preserving type )                   as SalesOrderItem,
      cast( qals.ls_vbeln as vdm_deliverydocument preserving type )        as DeliveryDocument,
      cast( qals.ls_posnr as vdm_posnr_vl preserving type )                as DeliveryDocumentItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'InspectionDeliveryCategory'
      qals.ls_abrvw                                                        as DeliveryCategory, // wrong GFN --> deprecated! Replaced by InspectionDeliveryCategory
      qals.ls_abrvw                                                        as InspectionDeliveryCategory,
      qals.ls_route                                                        as Route,
      qals.ls_lland                                                        as BillToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      cast( qals.ls_kunag as vdm_kunag preserving type )                   as SoldToParty,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      qals.ls_vkorg                                                        as SalesOrganization,
      qals.ls_kdmat                                                        as MaterialByCustomer,
      qals.sprache                                                         as Language,
      qals.zusmkzaehl                                                      as InspLotNmbrAddlRecordedCharc,
      qals.offennlzmk                                                      as InspLotNmbrOpenShortTermCharc,
      @DefaultAggregation:#NONE
      @Semantics.quantity.unitOfMeasure: 'InspectionLotContainerUnit'
      qals.anzgeb                                                          as InspectionLotContainer,
      @ObjectModel.foreignKey.association: '_InspectionLotContainerUnit'
      @Semantics.unitOfMeasure: true
      qals.gebeh                                                           as InspectionLotContainerUnit,
      @DefaultAggregation:#NONE
      @Semantics.quantity.unitOfMeasure: 'InspectionLotSampleUnit'
      qals.gesstichpr                                                      as InspectionLotSampleQuantity,
      @ObjectModel.foreignKey.association: '_InspectionLotSampleUnit'
      @Semantics.unitOfMeasure: true
      cast( qals.einhprobe as vdm_qprobemgeh preserving type )             as InspectionLotSampleUnit,
      cast( qals.dynregel as vdm_qdynregel preserving type )               as InspLotDynamicRule,
      qals.stat44                                                          as InspLotDynamicTrggrPoint,
      qals.prstufe                                                         as InspectionDynamicStage,
      qals.prschaerfe                                                      as InspectionSeverity,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      cast( qals.lmenge01 as vdm_qlmenge01f preserving type )              as InspLotQtyToFree,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      cast( qals.lmenge02 as vdm_qlmenge02f preserving type )              as InspLotQtyToScrap,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      qals.lmenge03                                                        as InspLotQtyToSample,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      cast( qals.lmenge04 as vdm_qlmenge04f preserving type )              as InspLotQtyToBlocked,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      qals.lmenge05                                                        as InspLotQtyToReserves,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      cast( qals.lmenge06 as vdm_qlmenge06f preserving type )              as InspLotQtyToAnotherMaterial,
      cast( qals.matnrneu as vdm_qmatnrneu preserving type )               as InspLotMaterialPostedTo,
      cast( qals.chargneu as vdm_qchargneu preserving type )               as InspLotBatchTransferredTo,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      cast( qals.lmenge07 as vdm_qlmenge07f preserving type )              as InspLotQtyReturnedToSupplier,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      cast( qals.lmenge08 as vdm_qlmenge08f preserving type )              as InspLotQtyToSpecialStock,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      cast( qals.lmenge09 as vdm_qlmenge09f preserving type )              as InspLotQtyToOtherStock,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'
      cast( qals.lmengezub as vdm_qlmengezub preserving type )             as InspLotQtyToBePosted,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotSampleUnit'
      cast( qals.lmengelz as vdm_qlmengelz preserving type )               as InspLotSmplQtyForLongTermChar,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotSampleUnit'
      cast( qals.lmengepr as vdm_qlmengepr preserving type )               as InspLotQtyInspected,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotSampleUnit'
      cast( qals.lmengezer as vdm_qlmengezer preserving type )             as InspLotQtyDestroyed,
      qals.anteil                                                          as InspectionLotScrapRatio,
      qals.stat03                                                          as InspLotUsageDecisionTool,
      qals.qpmatlos                                                        as InspectionLotAllowedScrapRatio,
      qals.aufnr_co                                                        as QualityCostCollector,
      qals.kzvbr                                                           as ConsumptionPosting,
      qals.knttp                                                           as AccountAssignmentCategory,
      qals.pstyp                                                           as PurchasingDocumentItemCategory,
      qals.stat05                                                          as InspLotAcctAssgmtKey,
      qals.kostl                                                           as CostCenter,
      qals.aufps                                                           as ReservationItem,
      qals.anln1                                                           as MasterFixedAsset,
      qals.anln2                                                           as FixedAsset,
      @ObjectModel.foreignKey.association: '_SalesOrdStockWBSElement'
      qals.ps_psp_pnr                                                      as SalesOrdStockWBSElement,
      qals.nplnr                                                           as ProjectNetwork,
      qals.aplzl                                                           as NetworkActivityInternalID,
      cast( qals.kdauf as vdm_mat_kdauf preserving type )                  as InventorySpclStkSalesDocument,
      qals.kdpos                                                           as InventorySpclStkSalesDocItm,
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor:    'ProfitabilitySegment_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ProfitabilitySegment_2'
      cast( case when paobjnr > '9999999999' then '9999999999'
            else lpad( qals.paobjnr, 10, '0' )  end as rkeobjnr_numc )     as ProfitabilitySegment,
      cast( qals.paobjnr as rkeobjnr_char )                                as ProfitabilitySegment_2,
      qals.prctr                                                           as ProfitCenter,
      qals.gsber                                                           as BusinessArea,
      qals.konto                                                           as GLAccount,
      qals.kokrs                                                           as ControllingArea,
      qals.bukrs                                                           as CompanyCode,
      qals.sernp                                                           as SerialNumberProfile,
      qals.kont_kdauf                                                      as InspLotCostCollectorSalesOrder,
      qals.kont_kdpos                                                      as InspLotCostCollectorSlsOrdItem,
      qals.kont_pspnr                                                      as InspLotCostCollectorWBSElement,
      cast( qals.insp_doc_number as vdm_qinsp_doc_number preserving type ) as InspLotExternalNumber,
      qals.prio_punkte                                                     as InspectionLotPriorityPoints,
      //@ObjectModel.foreignKey.association: '_MaintenancePlan'
      qals.warpl                                                           as MaintenancePlan,
      qals.wapos                                                           as MaintenancePlanItemIntID,
      qals.strat                                                           as MaintenanceStrategy,
      qals.stat43                                                          as InspLotForFirstArticleInsp,
      lot_guid                                                             as InspectionLotUUID,

      // Digital Signature
      //      qals.sign_type_rr
      //      qals.signstrat_rr
      //      qals.sign_type_sm
      //      qals.signstrat_sm
      cast( qals.sign_type_ud as vdm_qsign_type_ud preserving type )       as InspUsgeDcsnDgtlSgntrType,
      cast( qals.signstrat_ud as vdm_qsignstrat_ud preserving type )       as InspUsgeDcsnDgtlSgntrStrgy,
      
      //Associations
      _InspLotUsageDecision,
      _InspectionLotType,
      _InspectionLotOrigin,
      _InspSubsetFieldCombination,
      _QltyMgmtPlantLvlConfign,
      _InspLotSummaryControl,
      _MatlQualityAuthGroup,
      _InspectionSubsetType,
      _InspectionSubsetTypeText,
      _InspectionLotApproval,
      _InspectionLotApprovalText,
      _InspLotSgntrInUsgeDcsn,
      _InspLotSgntrInUsgeDcsnText,
      _InspectionLotLongText,
      _InspectionLotAllLongText,
      _InspectionLotHasQuantity,
      _InspectionLotHasQuantityT,
      _IsStockPostgCmpltd,
      _IsStockPostgCmpltdTxt,
      _SmplDrwgProcedIsConfRqd,
      _SmplDrwgProcedIsConfRqdTxt,
      _IsAutomUsgeDcsnPossible,
      _IsAutomUsgeDcsnPossibleTxt,
      _IsDocumentationRqd,
      _IsDocumentationRqdTxt,
      _InspLotIsBatchRequired,
      _InspLotIsBatchRequiredTxt,
      _InspectionLotHasUsgeDcsn,
      _InspectionLotHasUsgeDcsnTxt,
      _Plant,
      _Material,
      _InspLotSelectionMaterial,
      _InspectionOperation,
      _Supplier,
      _InspLotSelectionSupplier,
      _Manufacturer,
      _InspLotSelManufacturer,
      _Customer,
      _InspLotSelectionCustomer,
      _SoldToParty,
      _SalesOrganization,
      _SalesOrdStockWBSElement,
      _MaterialSampleDrawing,
      _InspLotMatlDocItem,
      _BillOfOperationsChangeState,
      _MaintenancePlan,
      _BillOfOperationsType,
      _BillOfOperationsGroup,
      _InspectionLotQuantityUnit,
      _InspectionLotSampleUnit,
      _InspectionLotContainerUnit,
      _InspectionLotCreatedBy,
      _InspectionLotChangedBy,
      _PurchasingOrganization,
      _ManufacturerPartNmbr,
      _Equipment,
      _FunctionalLocation
}
```
