---
name: I_SALESDOCUMENTITEM
description: "Salesdocumentitem"
app_component: SD-SLS-2CL
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
  - SD
  - SD-SLS
  - interface-view
  - sales-document
  - document
  - item-level
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTITEM

**Salesdocumentitem**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
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
| `SalesDocument` | ✓ | |  | `vbeln` |  |  |
| `SalesDocumentItem` | ✓ | |  | `posnr` |  |  |
| `SalesDocumentItemUUID` |  | |  | `handle` |  |  |
| `SDDocumentCategory` |  | |  | `vbtyp_ana` |  |  |
| `SalesDocumentItemCategory` |  | |  | `pstyv` |  |  |
| `SalesDocumentItemType` |  | |  | `posar` |  |  |
| `IsReturnsItem` |  | |  | `shkzg` |  |  |
| `CompletionRule` |  | |  | `erlre` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreationTime` |  | |  | `cast ( vbap.erzet as creation_time preserving type )` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `Product` |  | |  | `cast (vbap.matnr as productnumber preserving type)` |  |  |
| `OriginallyRequestedMaterial` |  | |  | `matwa` |  |  |
| `MaterialByCustomer` |  | |  | `kdmat` |  |  |
| `InternationalArticleNumber` |  | |  | `ean11` |  |  |
| `Batch` |  | |  | `charg` |  |  |
| `ProductHierarchyNode` |  | |  | `prodh` |  |  |
| `ValContrRlvtProdUnivHierarchy` |  | |  | `prodh_univ_id_val_contr` |  |  |
| `ValContrRlvtProdUnivHierNode` |  | |  | `prodh_univ_node_val_contr` |  |  |
| `ProductCatalog` |  | |  | `wminr` |  |  |
| `MaterialSubstitutionReason` |  | |  | `sugrd` |  |  |
| `MaterialGroup` |  | |  | `matkl` |  |  |
| `ProductGroup` |  | |  | `cast (vbap.matkl as productgroup preserving type )` |  |  |
| `AdditionalMaterialGroup1` |  | |  | `mvgr1` |  |  |
| `AdditionalMaterialGroup2` |  | |  | `mvgr2` |  |  |
| `AdditionalMaterialGroup3` |  | |  | `mvgr3` |  |  |
| `AdditionalMaterialGroup4` |  | |  | `mvgr4` |  |  |
| `AdditionalMaterialGroup5` |  | |  | `mvgr5` |  |  |
| `ProductConfiguration` |  | |  | `cuobj` |  |  |
| `MaterialDeterminationType` |  | |  | `prosa` |  |  |
| `HigherLevelItemUsage` |  | |  | `uepvw` |  |  |
| `MRPArea` |  | |  | `berid` |  |  |
| `BillOfMaterial` |  | |  | `stlnr` |  |  |
| `BOMExplosionDate` |  | |  | `stdat` |  |  |
| `ProdAvailabilityCheckGroup` |  | |  | `mtvfp` |  |  |
| `IndependentRequirementType` |  | |  | `cast (vbap.bedae as vdm_bedae preserving type )` |  |  |
| `SalesDocumentItemText` |  | |  | `arktx` |  |  |
| `PurchaseOrderByCustomer` |  | |  | `bstkd_ana` |  |  |
| `PurchaseOrderByShipToParty` |  | |  | `cast (vbkd.bstkd_e as sd_purchase_order_by_shipto preserving type )` |  |  |
| `CustomerPurchaseOrderDate` |  | |  | `bstdk` |  |  |
| `CustPurOrdDateByShipToParty` |  | |  | `cast(vbkd.bstdk_e as sd_po_date_by_shipto preserving type )` |  |  |
| `UnderlyingPurchaseOrderItem` |  | |  | `posex` |  |  |
| `UndrlgPurOrdItmByShipToParty` |  | |  | `posex_e` |  |  |
| `CorrespncExternalReference` |  | |  | `ihrez` |  |  |
| `CorrespncExtRefByShipToParty` |  | |  | `ihrez_e` |  |  |
| `CustomerPurchaseOrderType` |  | |  | `bsark` |  |  |
| `CustPurOrdTypeByShipToParty` |  | |  | `cast (vbkd.bsark_e as sd_po_type_by_shipto preserving type )` |  |  |
| `ExternalItemID` |  | |  | `ext_ref_item_id` |  |  |
| `OrderQuantity` |  | |  | `kwmeng` |  |  |
| `OrderQuantityUnit` |  | |  | `vrkme` |  |  |
| `OrderToBaseQuantityDnmntr` |  | |  | `umvkn` |  |  |
| `OrderToBaseQuantityNmrtr` |  | |  | `umvkz` |  |  |
| `TargetQuantity` |  | |  | `zmeng` |  |  |
| `TargetQuantityUnit` |  | |  | `zieme` |  |  |
| `TargetToBaseQuantityDnmntr` |  | |  | `umzin` |  |  |
| `TargetToBaseQuantityNmrtr` |  | |  | `umziz` |  |  |
| `ConfdDelivQtyInOrderQtyUnit` |  | |  | `cast(vbap.kbmeng as confirmed_quantity preserving type )` |  |  |
| `TargetDelivQtyInOrderQtyUnit` |  | |  | `lsmeng` |  |  |
| `ConfdDeliveryQtyInBaseUnit` |  | |  | `klmeng` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `MDSubstnConversionNumerator` |  | |  | `substn_numerator` |  |  |
| `MDSubstnConversionDenominator` |  | |  | `substn_denominator` |  |  |
| `CommittedDelivQtyInOrdQtyUnit` |  | |  | `cast( vbap.cmtd_deliv_qty_su as committeddelivqtyinordqtyunit preserving type )` |  |  |
| `CommittedDelivCreationDate` |  | |  | `cast( vbap.cmtd_deliv_creadate as committeddelivcreationdate preserving type )` |  |  |
| `CommittedDeliveryDate` |  | |  | `cast( vbap.cmtd_deliv_date as committeddeliverydate preserving type )` |  |  |
| `RequestedQuantity` |  | |  | `cast( case when vbap.kwmeng > 0 then vbap.kwmeng else vbap.zmeng end as reqd_qty )` |  |  |
| `RequestedQuantityUnit` |  | |  | `cast( case when vbap.kwmeng > 0 then vbap.vrkme else vbap.zieme end as reqd_qty_unit )` |  |  |
| `RequestedQuantityInBaseUnit` |  | |  | `reqqty_bu` |  |  |
| `ItemGrossWeight` |  | |  | `brgew` |  |  |
| `ItemNetWeight` |  | |  | `ntgew` |  |  |
| `ItemWeightUnit` |  | |  | `gewei` |  |  |
| `ItemVolume` |  | |  | `volum` |  |  |
| `ItemVolumeUnit` |  | |  | `voleh` |  |  |
| `ServicesRenderedDate` |  | |  | `cast( vbkd.fbuda as vdm_sd_services_rendered_date preserving type )` |  |  |
| `SalesDistrict` |  | |  | `bzirk_ana` |  |  |
| `SalesDeal` |  | |  | `knuma_ag` |  |  |
| `SalesPromotion` |  | |  | `knuma_pi` |  |  |
| `RetailPromotion` |  | |  | `waktion` |  |  |
| `CustomerGroup` |  | |  | `kdgrp_ana` |  |  |
| `SlsDocIsRlvtForProofOfDeliv` |  | |  | `podkz` |  |  |
| `SalesDocumentRjcnReason` |  | |  | `abgru` |  |  |
| `AlternativeToItem` |  | |  | `grpos` |  |  |
| `ReturnReason` |  | |  | `msr_ret_reason` |  |  |
| `ReturnsRefundExtent` |  | |  | `msr_refund_code` |  |  |
| `RetsMgmtProcessingBlock` |  | |  | `msr_approv_block` |  |  |
| `RequirementSegment` |  | |  | `sgt_rcat` |  |  |
| `QuantityIsFixed` |  | |  | `fmeng` |  |  |
| `ItemOrderProbabilityInPercent` |  | |  | `awahr` |  |  |
| `OutlineAgreementTargetAmount` |  | |  | `zwert` |  |  |
| `SalesContractValidityStartDate` |  | |  | `vbegdat` |  |  |
| `SalesContractValidityEndDate` |  | |  | `venddat` |  |  |
| `NmbrOfSalesContractValdtyPerd` |  | |  | `vlaufz` |  |  |
| `SalesContractValidityPerdUnit` |  | |  | `vlauez` |  |  |
| `SalesContractValidityPerdCat` |  | |  | `vlaufk` |  |  |
| `SalesContractSignedDate` |  | |  | `vuntdat` |  |  |
| `EquipmentInstallationDate` |  | |  | `vinsdat` |  |  |
| `EquipmentDeliveryAccptcDate` |  | |  | `vabndat` |  |  |
| `EquipmentDismantlingDate` |  | |  | `vdemdat` |  |  |
| `SalesContractCanclnProcedure` |  | |  | `vkuesch` |  |  |
| `RequestedCancellationDate` |  | |  | `vwundat` |  |  |
| `SlsContractCanclnReqRcptDate` |  | |  | `veindat` |  |  |
| `CanclnDocByContrPartner` |  | |  | `vbelkue` |  |  |
| `ContractPartnerCanclnDocDate` |  | |  | `vbedkue` |  |  |
| `SalesContractCanclnParty` |  | |  | `vkuepar` |  |  |
| `SalesContractCanclnReason` |  | |  | `vkuegru` |  |  |
| `SalesContractFollowUpAction` |  | |  | `vaktsch` |  |  |
| `SlsContractFollowUpActionDate` |  | |  | `vasda` |  |  |
| `SalesDocumentItemProcgCode` |  | |  | `process_code` |  |  |
| `DownPaymentProcessingVariant` |  | |  | `dwn_payt_procg_var` |  |  |
| `PlngDelivSchedInstrn` |  | |  | `plavo` |  |  |
| `NetAmount` |  | |  | `netwr` |  |  |
| `TransactionCurrency` |  | |  | `waerk` |  |  |
| `PricingReferenceMaterial` |  | |  | `pmatn` |  |  |
| `MaterialPricingGroup` |  | |  | `cast(vbap.kondm as productpricinggroup preserving type)` |  |  |
| `ProductTaxClassification1` |  | |  | `taxm1` |  |  |
| `ProductTaxClassification2` |  | |  | `taxm2` |  |  |
| `ProductTaxClassification3` |  | |  | `taxm3` |  |  |
| `ProductTaxClassification4` |  | |  | `taxm4` |  |  |
| `ProductTaxClassification5` |  | |  | `taxm5` |  |  |
| `ProductTaxClassification6` |  | |  | `taxm6` |  |  |
| `ProductTaxClassification7` |  | |  | `taxm7` |  |  |
| `ProductTaxClassification8` |  | |  | `taxm8` |  |  |
| `ProductTaxClassification9` |  | |  | `taxm9` |  |  |
| `MatlAccountAssignmentGroup` |  | |  | `ktgrm` |  |  |
| `PricingDate` |  | |  | `prsdt` |  |  |
| `ExchangeRateDate` |  | |  | `kursk_dat` |  |  |
| `PriceDetnExchangeRate` |  | |  | `cast(vbkd.kursk as kursk_not_converted preserving type)` |  |  |
| `NetPriceAmount` |  | |  | `netpr` |  |  |
| `NetPriceQuantity` |  | |  | `kpein` |  |  |
| `NetPriceQuantityUnit` |  | |  | `kmein` |  |  |
| `StatisticalValueControl` |  | |  | `kowrr` |  |  |
| `TaxAmount` |  | |  | `mwsbp` |  |  |
| `CostAmount` |  | |  | `wavwr` |  |  |
| `Subtotal1Amount` |  | |  | `kzwi1` |  |  |
| `Subtotal2Amount` |  | |  | `kzwi2` |  |  |
| `Subtotal3Amount` |  | |  | `kzwi3` |  |  |
| `Subtotal4Amount` |  | |  | `kzwi4` |  |  |
| `Subtotal5Amount` |  | |  | `kzwi5` |  |  |
| `Subtotal6Amount` |  | |  | `kzwi6` |  |  |
| `SalesDocumentCondition` |  | |  | `knumv_ana` |  |  |
| `MainItemPricingRefProduct` |  | |  | `cast (vbap.upmat as main_item_pricing_ref_product preserving type)` |  |  |
| `CustomerPriceGroup` |  | |  | `konda` |  |  |
| `ShippingPoint` |  | |  | `vstel` |  |  |
| `ShippingType` |  | |  | `vsart_ana` |  |  |
| `InventorySpecialStockType` |  | |  | `sobkz` |  |  |
| `InventorySpecialStockValnType` |  | |  | `kzbws` |  |  |
| `DeliveryPriority` |  | |  | `lprio` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `OriginalPlant` |  | |  | `original_plant` |  |  |
| `TransitPlant` |  | |  | `transit_plant` |  |  |
| `StorageLocation` |  | |  | `lgort` |  |  |
| `Route` |  | |  | `route` |  |  |
| `DeliveryGroup` |  | |  | `grkor` |  |  |
| `DeliveryDateQuantityIsFixed` |  | |  | `fixmg` |  |  |
| `PartialDeliveryIsAllowed` |  | |  | `cast (vbap.kztlf as partial_delivery_allowed preserving type )` |  |  |
| `MaxNmbrOfPartialDelivery` |  | |  | `cast (vbap.antlf as nmbrpartialdeliv preserving type )` |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  | `uebtk` |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  | `uebto` |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  | `untto` |  |  |
| `MinDeliveryQtyInBaseUnit` |  | |  | `lfmng` |  |  |
| `OpenDeliveryLeadingUnitCode` |  | |  | `kzfme` |  |  |
| `ItemIsDeliveryRelevant` |  | |  | `lfrel` |  |  |
| `BatchManagementIsSalesInternal` |  | |  | `xchar` |  |  |
| `ReceivingPoint` |  | |  | `empst` |  |  |
| `ProductSeasonYear` |  | |  | `fsh_season_year` |  |  |
| `ProductSeason` |  | |  | `fsh_season` |  |  |
| `ProductCollection` |  | |  | `fsh_collection` |  |  |
| `ProductTheme` |  | |  | `fsh_theme` |  |  |
| `FashionCancelDate` |  | |  | `fsh_candate` |  |  |
| `ProductCharacteristic1` |  | |  | `wrf_charstc1` |  |  |
| `ProductCharacteristic2` |  | |  | `wrf_charstc2` |  |  |
| `ProductCharacteristic3` |  | |  | `wrf_charstc3` |  |  |
| `ShippingGroupNumber` |  | |  | `rfm_psst_group` |  |  |
| `ShippingGroupRule` |  | |  | `rfm_psst_rule` |  |  |
| `ARunPriorityValue` |  | |  | `assignment_priority` |  |  |
| `ARunDemandGroupPriority` |  | |  | `arun_group_prio` |  |  |
| `BillingDocumentDate` |  | |  | `fkdat_ana` |  |  |
| `ItemIsBillingRelevant` |  | |  | `fkrel` |  |  |
| `ItemBillingBlockReason` |  | |  | `faksp` |  |  |
| `BillingPlan` |  | |  | `fplnr_ana` |  |  |
| `ReferenceBillingPlan` |  | |  | `dpbp_ref_fplnr` |  |  |
| `ReferenceBillingPlanItem` |  | |  | `dpbp_ref_fpltr` |  |  |
| `IncotermsVersion` |  | |  | `incov` |  |  |
| `IncotermsClassification` |  | |  | `inco1` |  |  |
| `IncotermsTransferLocation` |  | |  | `inco2` |  |  |
| `IncotermsLocation1` |  | |  | `inco2_l` |  |  |
| `IncotermsLocation2` |  | |  | `inco3_l` |  |  |
| `OrderCombinationIsAllowed` |  | |  | `cast( vbkd.kzazu as vdm_sd_order_combination_ind preserving type )` |  |  |
| `CustomerPaymentTerms` |  | |  | `zterm` |  |  |
| `PaymentMethod` |  | |  | `zlsch` |  |  |
| `FixedValueDate` |  | |  | `valdt` |  |  |
| `AdditionalValueDays` |  | |  | `valtg` |  |  |
| `ContractAccount` |  | |  | `vkont` |  |  |
| `FiscalYear` |  | |  | `gjahr` |  |  |
| `FiscalPeriod` |  | |  | `poper` |  |  |
| `CustomerAccountAssignmentGroup` |  | |  | `ktgrd` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `WBSElement` |  | |  | `ps_psp_pnr` |  |  |
| `WBSElementInternalID` |  | |  | `cast ( vbap.ps_psp_pnr as ps_s4_pspnr preserving type )` |  |  |
| `OrderID` |  | |  | `aufnr` |  |  |
| `ControllingObject` |  | |  | `objnr` |  |  |
| `ProfitabilitySegment` |  | |  | `cast( case when paobjnr > '9999999999' then '9999999999' else lpad( paobjnr, 10, '0' ) end as rkeobjnr_numc )` |  |  |
| `ProfitabilitySegment_2` |  | |  | `cast(vbap.paobjnr as rkeobjnr_char preserving type )` |  |  |
| `OriginSDDocument` |  | |  | `vbelv` |  |  |
| `OriginSDDocumentItem` |  | |  | `posnv` |  |  |
| `AccountingExchangeRate` |  | |  | `kurrf` |  |  |
| `SlsDocItmRevnAcctgRlvnceType` |  | |  | `farr_reltype` |  |  |
| `ReferenceSDDocument` |  | |  | `vgbel` |  |  |
| `ReferenceSDDocumentItem` |  | |  | `vgpos` |  |  |
| `ReferenceSDDocumentCategory` |  | |  | `cast (vbap.vgtyp as reference_sd_document_category preserving type )` |  |  |
| `HigherLevelItem` |  | |  | `uepos` |  |  |
| `ValueContract` |  | |  | `wktnr` |  |  |
| `ValueContractItem` |  | |  | `wktps` |  |  |
| `BusinessSolutionOrder` |  | |  | `solution_order_id` |  |  |
| `BusinessSolutionOrderItem` |  | |  | `solution_order_itm_id` |  |  |
| `BusSolnOrdItemBundleItem` |  | |  | `solution_order_bundle_itm_id` |  |  |
| `SDProcessStatus` |  | |  | `gbsta` |  |  |
| `DeliveryConfirmationStatus` |  | |  | `besta` |  |  |
| `DeliveryDateTypeRule` |  | |  | `delivery_date_type_rule` |  |  |
| `PurchaseConfirmationStatus` |  | |  | `cast(vbap.costa as purchaseconfsts preserving type )` |  |  |
| `TotalDeliveryStatus` |  | |  | `lfgsa` |  |  |
| `DeliveryStatus` |  | |  | `lfsta` |  |  |
| `DeliveryBlockStatus` |  | |  | `cast(vbap.lssta as delivery_block_status preserving type )` |  |  |
| `OrderRelatedBillingStatus` |  | |  | `cast(vbap.fksaa as sls_doc_order_rel_billing_sts preserving type )` |  |  |
| `BillingBlockStatus` |  | |  | `fssta` |  |  |
| `ItemGeneralIncompletionStatus` |  | |  | `cast(vbap.uvall as item_general_incompletion_sts preserving type )` |  |  |
| `ItemBillingIncompletionStatus` |  | |  | `uvfak` |  |  |
| `PricingIncompletionStatus` |  | |  | `uvprs` |  |  |
| `ItemDeliveryIncompletionStatus` |  | |  | `uvvlk` |  |  |
| `SDDocumentRejectionStatus` |  | |  | `absta` |  |  |
| `TotalSDDocReferenceStatus` |  | |  | `rfgsa` |  |  |
| `SDDocReferenceStatus` |  | |  | `rfsta` |  |  |
| `ChmlCmplncStatus` |  | |  | `cast(vbap.pcsta as mon_tdd_pcsta preserving type )` |  |  |
| `DangerousGoodsStatus` |  | |  | `cast(vbap.dgsta as mon_tdd_dgsta preserving type )` |  |  |
| `SafetyDataSheetStatus` |  | |  | `cast(vbap.sdssta as mon_tdd_sdssta preserving type )` |  |  |
| `TrdCmplncEmbargoSts` |  | |  | `cast(vbap.emcst as embargochksts preserving type )` |  |  |
| `TrdCmplncSnctndListChkSts` |  | |  | `cast(vbap.slcst as watchlistscrngchksts preserving type )` |  |  |
| `OvrlTrdCmplncLegalCtrlChkSts` |  | |  | `cast(vbap.total_lccst as lglctrlchksts preserving type )` |  |  |
| `SlsDocItmOvrlSupplyBlockStatus` |  | |  | `overall_supply_block_status` |  |  |
| `AltvBsdConfSubstitutionStatus` |  | |  | `atp_abc_substitution_status` |  |  |
| `ContractItemDownPaymentStatus` |  | |  | `dp_clear_sta_itm` |  |  |
| `ValueChainCategory` |  | |  | `vcm_chain_category` |  |  |
| `CappedNetAmount` |  | |  | `capped_net_amount` |  |  |
| `CappedNetAmtAlertThldInPct` |  | |  | `capped_net_amount_alert_thld` |  |  |
| `TotalStandAloneSellingPrice` |  | |  | `ifrs15_total_ssp` |  |  |
| `ResultAnalysisInternalID` |  | |  | `abgrs` |  |  |
| `ServiceDocumentType` |  | |  | `service_doc_type` |  |  |
| `ServiceDocument` |  | |  | `service_doc_id` |  |  |
| `ServiceDocumentItem` |  | |  | `service_doc_item_id` |  |  |
| `SalesDocumentType` |  | |  | `auart_ana` |  |  |
| `SalesOrganization` |  | |  | `vkorg_ana` |  |  |
| `DistributionChannel` |  | |  | `vtweg_ana` |  |  |
| `OrganizationDivision` |  | |  | `spart_ana` |  |  |
| `SalesOffice` |  | |  | `vkbur_ana` |  |  |
| `SalesGroup` |  | |  | `vkgrp_ana` |  |  |
| `SoldToParty` |  | |  | `kunnr_ana` |  |  |
| `AdditionalCustomerGroup1` |  | |  | `kvgr1_ana` |  |  |
| `AdditionalCustomerGroup2` |  | |  | `kvgr2_ana` |  |  |
| `AdditionalCustomerGroup3` |  | |  | `kvgr3_ana` |  |  |
| `AdditionalCustomerGroup4` |  | |  | `kvgr4_ana` |  |  |
| `AdditionalCustomerGroup5` |  | |  | `kvgr5_ana` |  |  |
| `SalesDocumentDate` |  | |  | `audat_ana` |  |  |
| `SDDocumentReason` |  | |  | `augru_ana` |  |  |
| `RequestedDeliveryDate` |  | |  | `cast(vbap.vdatu_ana as reqd_delivery_date preserving type)` |  |  |
| `ShippingCondition` |  | |  | `vsbed_ana` |  |  |
| `ShipToParty` |  | |  | `kunwe_ana` |  |  |
| `PayerParty` |  | |  | `kunrg_ana` |  |  |
| `BillToParty` |  | |  | `kunre_ana` |  |  |
| `SalesEmployee` |  | |  | `perve_ana` |  |  |
| `ResponsibleEmployee` |  | |  | `perzm_ana` |  |  |
| `SalesEmployeeWorkAgreement` |  | |  | `cast(vbap.perve_ana as sales_empl preserving type)` |  |  |
| `ResponsibleEmployeeWorkAgrmt` |  | |  | `cast(vbap.perzm_ana as resp_empl preserving type)` |  |  |
| `OmniChannelSalesPromotion` |  | |  | `bob_promotion_id` |  |  |
| `OmniChannelSalesPromotionRule` |  | |  | `bob_fg_id` |  |  |
| `ConsumptionPosting` |  | |  | `kzvbr` |  |  |
| `PlanningMaterial` |  | |  | `vpmat` |  |  |
| `PlanningPlant` |  | |  | `vpwrk` |  |  |
| `ProductBaseUnit` |  | |  | `prbme` |  |  |
| `ProdPlntPlngMatlConversionFctr` |  | |  | `umref` |  |  |
| `SlsContrAutoAssgmtIDForSlsOrd` |  | |  | `sls_contr_auto_assignment` |  |  |
| `SalesDocItemSupplyBlockReason` |  | |  | `supply_block_reason` |  |  |
| `_BusinessAreaText` | | ✓ | | | | |
| `_MaterialText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_OrigMaterialText` | | ✓ | | | | |
| `_ShippingPointText` | | ✓ | | | | |
| `_SlsDocItemEnhancedFields` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_ScheduleLine` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |
| `_ItemBillingPlan` | | ✓ | | | | |
| `_SubsequentDocument` | | ✓ | | | | |
| `_PrecedingDocument` | | ✓ | | | | |
| `_PrecedingProcFlowDocItem` | | ✓ | | | | |
| `_SubsequentProcFlowDocItem` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_HigherLevelItem` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_PlanningProduct` | | ✓ | | | | |
| `_MainItemPricingRefProduct` | | ✓ | | | | |
| `_OriginallyRequestedMaterial` | | ✓ | | | | |
| `_MaterialPlant` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_ProductHierarchyNode` | | ✓ | | | | |
| `_MaterialSubstitutionReason` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_MaterialPricingGroup` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_IndependentRequirementType` | | ✓ | | | | |
| `_CustomerPurchaseOrderType` | | ✓ | | | | |
| `_CustPurOrdTypeByShipToParty` | | ✓ | | | | |
| `_MatlAccountAssignmentGroup` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_TargetQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_RequestedQuantityUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_ProductUnit` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_SalesDeal` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SalesDocumentRjcnReason` | | ✓ | | | | |
| `_ReturnReason` | | ✓ | | | | |
| `_ReturnsRefundExtent` | | ✓ | | | | |
| `_SalesContractValidityPerdUnit` | | ✓ | | | | |
| `_SalesContractCanclnParty` | | ✓ | | | | |
| `_SalesContractCanclnReason` | | ✓ | | | | |
| `_ContractItemDownPaymentStatus` | | ✓ | | | | |
| `_NetPriceQuantityUnit` | | ✓ | | | | |
| `_StatisticalValueControl` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_ShippingType` | | ✓ | | | | |
| `_DeliveryPriority` | | ✓ | | | | |
| `_PartialDeliveryItem` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_OriginalPlant` | | ✓ | | | | |
| `_TransitPlant` | | ✓ | | | | |
| `_PlanningPlant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Route` | | ✓ | | | | |
| `_ItemIsBillingRelevant` | | ✓ | | | | |
| `_ItemBillingBlockReason` | | ✓ | | | | |
| `_BillingPlan` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementBasicData_2` | | ✓ | | | | |
| `_ProfitabilitySegment` | | ✓ | | | | |
| `_SlsDocItmRARlvnceType` | | ✓ | | | | |
| `_ReferenceSDDocument` | | ✓ | | | | |
| `_ReferenceSDDocumentItem` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_PlngDelivSchedInstrn` | | ✓ | | | | |
| `_SDProcessStatus` | | ✓ | | | | |
| `_PurchaseConfirmationStatus` | | ✓ | | | | |
| `_TotalDeliveryStatus` | | ✓ | | | | |
| `_DeliveryStatus` | | ✓ | | | | |
| `_DeliveryBlockStatus` | | ✓ | | | | |
| `_DeliveryConfirmationStatus` | | ✓ | | | | |
| `_DeliveryDateTypeRule` | | ✓ | | | | |
| `_OrderRelatedBillingStatus` | | ✓ | | | | |
| `_BillingBlockStatus` | | ✓ | | | | |
| `_SDDocumentRejectionStatus` | | ✓ | | | | |
| `_ItemGeneralIncompletionStatus` | | ✓ | | | | |
| `_ItemBillingIncompletionStatus` | | ✓ | | | | |
| `_PricingIncompletionStatus` | | ✓ | | | | |
| `_ItemDelivIncompletionSts` | | ✓ | | | | |
| `_TotalSDDocReferenceStatus` | | ✓ | | | | |
| `_SDDocReferenceStatus` | | ✓ | | | | |
| `_AltvBsdConfSubstitutionSts` | | ✓ | | | | |
| `_ChmlCmplncStatus` | | ✓ | | | | |
| `_DangerousGoodsStatus` | | ✓ | | | | |
| `_SafetyDataSheetStatus` | | ✓ | | | | |
| `_TrdCmplncEmbargoSts` | | ✓ | | | | |
| `_TrdCmplncSnctndListChkSts` | | ✓ | | | | |
| `_OvrlTrdCmplncLegalCtrlChkSts` | | ✓ | | | | |
| `_SlsDocItmOvrlSupplyBlockSts` | | ✓ | | | | |
| `_SlsDocItemSupplyBlockReason` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_SalesDocumentItemProcgCode` | | ✓ | | | | |
| `_DownPaymentProcessingVariant` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_SalesDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SDDocumentReason` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_SalesEmployee` | | ✓ | | | | |
| `_ResponsibleEmployee` | | ✓ | | | | |
| `_ConsumptionPosting` | | ✓ | | | | |
| `_MRPArea` | | ✓ | | | | |
| `_SolutionOrder` | | ✓ | | | | |
| `_SolutionOrderItem` | | ✓ | | | | |
| `_SolutionOrderBundleItem` | | ✓ | | | | |
| `_SalesValueChainCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_MaterialText` | `I_MaterialText` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_OrigMaterialText` | `I_MaterialText` | [0..*] |
| `_ShippingPointText` | `I_ShippingPointText` | [0..*] |
| `_SlsDocItemEnhancedFields` | `I_SlsDocItemEnhancedFields` | [1..1] |
| `_SalesDocument` | `I_SalesDocument` | [1..1] |
| `_ScheduleLine` | `I_SalesDocumentScheduleLine` | [0..*] |
| `_Partner` | `I_SalesDocumentItemPartner` | [0..*] |
| `_PricingElement` | `I_SalesDocItemPricingElement` | [0..*] |
| `_ItemBillingPlan` | `I_SalesDocItemBillingPlan` | [0..1] |
| `_SubsequentDocument` | `I_SDDocumentMultiLevelProcFlow` | [0..*] |
| `_PrecedingDocument` | `I_SDDocumentMultiLevelProcFlow` | [0..*] |
| `_PrecedingProcFlowDocItem` | `I_SalesDocItmPrecdgProcFlow` | [0..*] |
| `_SubsequentProcFlowDocItem` | `I_SalesDocItmSubsqntProcFlow` | [0..*] |
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_ItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |
| `_HigherLevelItem` | `I_SalesDocumentItem` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_PlanningProduct` | `I_Product` | [0..1] |
| `_MainItemPricingRefProduct` | `I_Product` | [0..1] |
| `_OriginallyRequestedMaterial` | `I_Material` | [0..1] |
| `_MaterialPlant` | `I_MaterialPlant` | [1..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_ProductHierarchyNode` | `I_ProductHierarchyNode` | [0..1] |
| `_MaterialSubstitutionReason` | `I_MaterialSubstitutionReason` | [0..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_MaterialPricingGroup` | `I_MaterialPricingGroup` | [0..1] |
| `_AdditionalMaterialGroup1` | `I_AdditionalMaterialGroup1` | [0..1] |
| `_AdditionalMaterialGroup2` | `I_AdditionalMaterialGroup2` | [0..1] |
| `_AdditionalMaterialGroup3` | `I_AdditionalMaterialGroup3` | [0..1] |
| `_AdditionalMaterialGroup4` | `I_AdditionalMaterialGroup4` | [0..1] |
| `_AdditionalMaterialGroup5` | `I_AdditionalMaterialGroup5` | [0..1] |
| `_IndependentRequirementType` | `I_IndependentRequirementType` | [0..1] |
| `_CustomerPurchaseOrderType` | `I_CustomerPurchaseOrderType` | [0..1] |
| `_CustPurOrdTypeByShipToParty` | `I_CustomerPurchaseOrderType` | [0..1] |
| `_MatlAccountAssignmentGroup` | `I_MatlAccountAssignmentGroup` | [0..1] |
| `_OrderQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TargetQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_RequestedQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ItemWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ItemVolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ProductUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_SalesDeal` | `I_SalesDeal` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_SalesDocumentRjcnReason` | `I_SalesDocumentRjcnReason` | [0..1] |
| `_ReturnReason` | `I_ReturnReason` | [0..1] |
| `_ReturnsRefundExtent` | `I_ReturnsRefundExtent` | [0..1] |
| `_SalesContractValidityPerdUnit` | `I_SalesContrValdtyPerdUnit` | [0..1] |
| `_SalesContractCanclnParty` | `I_SalesContractCanclnParty` | [0..1] |
| `_SalesContractCanclnReason` | `I_SalesContractCanclnReason` | [0..1] |
| `_ContractItemDownPaymentStatus` | `I_ContractDownPaymentStatus` | [0..1] |
| `_NetPriceQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_StatisticalValueControl` | `I_StatisticalValueControl` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |
| `_ShippingType` | `I_ShippingType` | [0..1] |
| `_DeliveryPriority` | `I_DeliveryPriority` | [0..1] |
| `_PartialDeliveryItem` | `I_PartialDeliveryItem` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_OriginalPlant` | `I_Plant` | [0..1] |
| `_TransitPlant` | `I_Plant` | [0..1] |
| `_PlanningPlant` | `I_Plant` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Route` | `I_Route` | [0..1] |
| `_ItemIsBillingRelevant` | `I_BillingRelevanceCode` | [0..1] |
| `_ItemBillingBlockReason` | `I_BillingBlockReason` | [0..1] |
| `_BillingPlan` | `I_SlsDocItemBillingPlan` | [0..1] |
| `_CustomerPaymentTerms` | `I_CustomerPaymentTerms` | [0..1] |
| `_IncotermsVersion` | `I_IncotermsVersion` | [0..1] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_CustomerAccountAssgmtGroup` | `I_CustomerAccountAssgmtGroup` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasicData_2` | `I_WBSElementBasicData` | [0..1] |
| `_ProfitabilitySegment` | `I_ProfitabilitySegment` | [0..1] |
| `_SlsDocItmRARlvnceType` | `I_SlsDocItmRARlvnceType` | [0..1] |
| `_ReferenceSDDocument` | `I_SalesDocument` | [0..1] |
| `_ReferenceSDDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_ReferenceSDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_PlngDelivSchedInstrn` | `I_PlngDelivSchedInstrn` | [0..1] |
| `_SDProcessStatus` | `I_SDProcessStatus` | [0..1] |
| `_PurchaseConfirmationStatus` | `I_PurchaseConfirmationStatus` | [0..1] |
| `_TotalDeliveryStatus` | `I_TotalDeliveryStatus` | [0..1] |
| `_DeliveryStatus` | `I_DeliveryStatus` | [0..1] |
| `_DeliveryBlockStatus` | `I_DeliveryBlockStatus` | [0..1] |
| `_DeliveryConfirmationStatus` | `I_DeliveryConfirmationStatus` | [0..1] |
| `_DeliveryDateTypeRule` | `I_DeliveryDateTypeRule` | [0..1] |
| `_OrderRelatedBillingStatus` | `I_OrderRelatedBillingStatus` | [0..1] |
| `_BillingBlockStatus` | `I_BillingBlockStatus` | [0..1] |
| `_SDDocumentRejectionStatus` | `I_SDDocumentRejectionStatus` | [0..1] |
| `_ItemGeneralIncompletionStatus` | `I_ItemGenIncompletionStatus` | [0..1] |
| `_ItemBillingIncompletionStatus` | `I_ItemBillingIncompletionSts` | [0..1] |
| `_PricingIncompletionStatus` | `I_PricingIncompletionStatus` | [0..1] |
| `_ItemDelivIncompletionSts` | `I_ItemDelivIncompletionSts` | [0..1] |
| `_TotalSDDocReferenceStatus` | `I_TotalSDDocReferenceStatus` | [0..1] |
| `_SDDocReferenceStatus` | `I_SDDocReferenceStatus` | [0..1] |
| `_AltvBsdConfSubstitutionSts` | `I_AltvBsdConfSubstitutionSts` | [0..1] |
| `_ChmlCmplncStatus` | `I_ChmlCmplncStatus` | [0..1] |
| `_DangerousGoodsStatus` | `I_DangerousGoodsStatus` | [0..1] |
| `_SafetyDataSheetStatus` | `I_SafetyDataSheetStatus` | [0..1] |
| `_TrdCmplncEmbargoSts` | `I_TrdCmplncCheckStatus` | [0..1] |
| `_TrdCmplncSnctndListChkSts` | `I_TrdCmplncCheckStatus` | [0..1] |
| `_OvrlTrdCmplncLegalCtrlChkSts` | `I_OvrlTrdCmplncLegalCtrlChkSts` | [0..1] |
| `_SlsDocItmOvrlSupplyBlockSts` | `I_SlsDocItmOvrlSupplyBlockSts` | [0..1] |
| `_SlsDocItemSupplyBlockReason` | `I_SlsDocItemSupplyBlockReason` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_SalesDocumentItemProcgCode` | `I_SalesDocumentItemProcgCode` | [0..1] |
| `_DownPaymentProcessingVariant` | `I_DownPaymentProcessingVariant` | [0..1] |
| `_CustomerPriceGroup` | `I_CustomerPriceGroup` | [0..1] |
| `_SalesDocumentType` | `I_SalesDocumentType` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_OrganizationDivision` | `I_Division` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_SDDocumentReason` | `I_SDDocumentReason` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_AdditionalCustomerGroup1` | `I_AdditionalCustomerGroup1` | [0..1] |
| `_AdditionalCustomerGroup2` | `I_AdditionalCustomerGroup2` | [0..1] |
| `_AdditionalCustomerGroup3` | `I_AdditionalCustomerGroup3` | [0..1] |
| `_AdditionalCustomerGroup4` | `I_AdditionalCustomerGroup4` | [0..1] |
| `_AdditionalCustomerGroup5` | `I_AdditionalCustomerGroup5` | [0..1] |
| `_ShippingCondition` | `I_ShippingCondition` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_PayerParty` | `I_Customer` | [0..1] |
| `_SalesEmployee` | `I_PersonWorkAgreement_1` | [0..1] |
| `_ResponsibleEmployee` | `I_PersonWorkAgreement_1` | [0..1] |
| `_ConsumptionPosting` | `I_ConsumptionPosting` | [0..1] |
| `_MRPArea` | `I_MRPArea` | [0..1] |
| `_SolutionOrder` | `I_ServiceDocumentEnhcd` | [0..1] |
| `_SolutionOrderItem` | `I_ServiceDocumentItemEnhcd` | [1] |
| `_SolutionOrderBundleItem` | `I_ServiceDocumentItemEnhcd` | [1] |
| `_SalesValueChainCategory` | `I_SalesValueChainCategory` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Document Item'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser',  '_BusinessAreaText', '_MaterialText', '_ProductText', '_OrigMaterialText', '_ShippingPointText', '_PrecedingDocument', '_SubsequentDocument' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDSALESDOCITEM',
  compiler.compareFilter: true
}
@ObjectModel: {
   representativeKey: 'SalesDocumentItem',
   sapObjectNodeType.name: 'SalesDocumentItem',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view I_SalesDocumentItem
  as select from           vbap
    left outer to one join vbak on vbap.vbeln = vbak.vbeln
    left outer to one join vbkd on  vbap.vbeln      = vbkd.vbeln
                                and vbap.vbkd_posnr = vbkd.posnr
    left outer to one join veda on  vbap.vbeln      = veda.vbeln
                                and vbap.veda_posnr = veda.vposn

  //Association

  //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
  association [0..*] to I_BusinessAreaText             as _BusinessAreaText              on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..*] to I_MaterialText                 as _MaterialText                  on  $projection.Material = _MaterialText.Material
  association [0..*] to I_ProductText                  as _ProductText                   on  $projection.Product = _ProductText.Product
  association [0..*] to I_MaterialText                 as _OrigMaterialText              on  $projection.OriginallyRequestedMaterial = _OrigMaterialText.Material
  association [0..*] to I_ShippingPointText            as _ShippingPointText             on  $projection.ShippingPoint = _ShippingPointText.ShippingPoint
  // ]--GENERATED
  association [1..1] to I_SlsDocItemEnhancedFields     as _SlsDocItemEnhancedFields      on  $projection.SalesDocument     = _SlsDocItemEnhancedFields.SalesDocument
                                                                                         and $projection.SalesDocumentItem = _SlsDocItemEnhancedFields.SalesDocumentItem
  association [1..1] to I_SalesDocument                as _SalesDocument                 on  $projection.SalesDocument = _SalesDocument.SalesDocument
  association [0..*] to I_SalesDocumentScheduleLine    as _ScheduleLine                  on  $projection.SalesDocument     = _ScheduleLine.SalesDocument
                                                                                         and $projection.SalesDocumentItem = _ScheduleLine.SalesDocumentItem
  association [0..*] to I_SalesDocumentItemPartner     as _Partner                       on  $projection.SalesDocument     = _Partner.SalesDocument
                                                                                         and $projection.SalesDocumentItem = _Partner.SalesDocumentItem
  association [0..*] to I_SalesDocItemPricingElement   as _PricingElement                on  $projection.SalesDocument     = _PricingElement.SalesDocument
                                                                                         and $projection.SalesDocumentItem = _PricingElement.SalesDocumentItem
  association [0..1] to I_SalesDocItemBillingPlan      as _ItemBillingPlan               on  $projection.SalesDocument     = _ItemBillingPlan.SalesDocument
                                                                                         and $projection.SalesDocumentItem = _ItemBillingPlan.SalesDocumentItem
                                                                                         and $projection.BillingPlan       = _ItemBillingPlan.BillingPlan

  //Subsequent Document
  association [0..*] to I_SDDocumentMultiLevelProcFlow as _SubsequentDocument            on  $projection.SalesDocument      = _SubsequentDocument.PrecedingDocument
                                                                                         and $projection.SalesDocumentItem  = _SubsequentDocument.PrecedingDocumentItem
                                                                                         and $projection.SDDocumentCategory = _SubsequentDocument.PrecedingDocumentCategory
  //Preceding Document
  association [0..*] to I_SDDocumentMultiLevelProcFlow as _PrecedingDocument             on  $projection.SalesDocument      = _PrecedingDocument.SubsequentDocument
                                                                                         and $projection.SalesDocumentItem  = _PrecedingDocument.SubsequentDocumentItem
                                                                                         and $projection.SDDocumentCategory = _PrecedingDocument.SubsequentDocumentCategory

  association [0..*] to I_SalesDocItmPrecdgProcFlow    as _PrecedingProcFlowDocItem      on  _PrecedingProcFlowDocItem.SalesDocument     = $projection.SalesDocument
                                                                                         and _PrecedingProcFlowDocItem.SalesDocumentItem = $projection.SalesDocumentItem


  association [0..*] to I_SalesDocItmSubsqntProcFlow   as _SubsequentProcFlowDocItem     on  _SubsequentProcFlowDocItem.SalesDocument     = $projection.SalesDocument
                                                                                         and _SubsequentProcFlowDocItem.SalesDocumentItem = $projection.SalesDocumentItem

  association [0..1] to I_SDDocumentCategory           as _SDDocumentCategory            on  $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory
  association [0..1] to I_SalesDocumentItemCategory    as _ItemCategory                  on  $projection.SalesDocumentItemCategory = _ItemCategory.SalesDocumentItemCategory
  association [0..1] to I_SalesDocumentItem            as _HigherLevelItem               on  $projection.SalesDocument   = _HigherLevelItem.SalesDocument
                                                                                         and $projection.HigherLevelItem = _HigherLevelItem.SalesDocumentItem
  association [0..1] to I_User                         as _CreatedByUser                 on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_Division                     as _Division                      on  $projection.Division = _Division.Division
  association [0..1] to I_Material                     as _Material                      on  $projection.Material = _Material.Material
  association [0..1] to I_Product                      as _Product                       on  $projection.Product = _Product.Product
  association [0..1] to I_Product                      as _PlanningProduct               on  $projection.PlanningMaterial = _PlanningProduct.Product
  association [0..1] to I_Product                      as _MainItemPricingRefProduct     on  $projection.MainItemPricingRefProduct = _MainItemPricingRefProduct.Product

  association [0..1] to I_Material                     as _OriginallyRequestedMaterial   on  $projection.OriginallyRequestedMaterial = _OriginallyRequestedMaterial.Material
  association [1..1] to I_MaterialPlant                as _MaterialPlant                 on  $projection.Material = _MaterialPlant.Material
                                                                                         and $projection.Plant    = _MaterialPlant.Plant
  association [0..1] to I_Batch                        as _Batch                         on  $projection.Plant    = _Batch.Plant
                                                                                         and $projection.Material = _Batch.Material
                                                                                         and $projection.Batch    = _Batch.Batch
  association [0..1] to I_ProductHierarchyNode         as _ProductHierarchyNode          on  $projection.ProductHierarchyNode = _ProductHierarchyNode.ProductHierarchyNode
  association [0..1] to I_MaterialSubstitutionReason   as _MaterialSubstitutionReason    on  $projection.MaterialSubstitutionReason = _MaterialSubstitutionReason.MaterialSubstitutionReason
  association [0..1] to I_MaterialGroup                as _MaterialGroup                 on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup
  association [0..1] to I_ProductGroup_2               as _ProductGroup                  on  $projection.ProductGroup = _ProductGroup.ProductGroup
  association [0..1] to I_MaterialPricingGroup         as _MaterialPricingGroup          on  $projection.MaterialPricingGroup = _MaterialPricingGroup.MaterialPricingGroup
  association [0..1] to I_AdditionalMaterialGroup1     as _AdditionalMaterialGroup1      on  $projection.AdditionalMaterialGroup1 = _AdditionalMaterialGroup1.AdditionalMaterialGroup1
  association [0..1] to I_AdditionalMaterialGroup2     as _AdditionalMaterialGroup2      on  $projection.AdditionalMaterialGroup2 = _AdditionalMaterialGroup2.AdditionalMaterialGroup2
  association [0..1] to I_AdditionalMaterialGroup3     as _AdditionalMaterialGroup3      on  $projection.AdditionalMaterialGroup3 = _AdditionalMaterialGroup3.AdditionalMaterialGroup3
  association [0..1] to I_AdditionalMaterialGroup4     as _AdditionalMaterialGroup4      on  $projection.AdditionalMaterialGroup4 = _AdditionalMaterialGroup4.AdditionalMaterialGroup4
  association [0..1] to I_AdditionalMaterialGroup5     as _AdditionalMaterialGroup5      on  $projection.AdditionalMaterialGroup5 = _AdditionalMaterialGroup5.AdditionalMaterialGroup5
  association [0..1] to I_IndependentRequirementType   as _IndependentRequirementType    on  $projection.IndependentRequirementType = _IndependentRequirementType.IndependentRequirementType

  association [0..1] to I_CustomerPurchaseOrderType    as _CustomerPurchaseOrderType     on  $projection.CustomerPurchaseOrderType = _CustomerPurchaseOrderType.CustomerPurchaseOrderType
  association [0..1] to I_CustomerPurchaseOrderType    as _CustPurOrdTypeByShipToParty   on  $projection.CustPurOrdTypeByShipToParty = _CustPurOrdTypeByShipToParty.CustomerPurchaseOrderType

  association [0..1] to I_MatlAccountAssignmentGroup   as _MatlAccountAssignmentGroup    on  $projection.MatlAccountAssignmentGroup = _MatlAccountAssignmentGroup.MatlAccountAssignmentGroup
  association [0..1] to I_UnitOfMeasure                as _OrderQuantityUnit             on  $projection.OrderQuantityUnit = _OrderQuantityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _TargetQuantityUnit            on  $projection.TargetQuantityUnit = _TargetQuantityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _BaseUnit                      on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _RequestedQuantityUnit         on  $projection.RequestedQuantityUnit = _RequestedQuantityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ItemWeightUnit                on  $projection.ItemWeightUnit = _ItemWeightUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ItemVolumeUnit                on  $projection.ItemVolumeUnit = _ItemVolumeUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ProductUnit                   on  $projection.ProductBaseUnit = _ProductUnit.UnitOfMeasure
  association [0..1] to I_SalesDistrict                as _SalesDistrict                 on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  association [0..1] to I_SalesDeal                    as _SalesDeal                     on  $projection.SalesDeal = _SalesDeal.SalesDeal
  association [0..1] to I_CustomerGroup                as _CustomerGroup                 on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup
  association [0..1] to I_SalesDocumentRjcnReason      as _SalesDocumentRjcnReason       on  $projection.SalesDocumentRjcnReason = _SalesDocumentRjcnReason.SalesDocumentRjcnReason
  association [0..1] to I_ReturnReason                 as _ReturnReason                  on  $projection.ReturnReason = _ReturnReason.ReturnReason
  association [0..1] to I_ReturnsRefundExtent          as _ReturnsRefundExtent           on  $projection.ReturnsRefundExtent = _ReturnsRefundExtent.ReturnsRefundExtent
  association [0..1] to I_SalesContrValdtyPerdUnit     as _SalesContractValidityPerdUnit on  $projection.SalesContractValidityPerdUnit = _SalesContractValidityPerdUnit.SalesContractValidityPerdUnit
  association [0..1] to I_SalesContractCanclnParty     as _SalesContractCanclnParty      on  $projection.SalesContractCanclnParty = _SalesContractCanclnParty.SalesContractCanclnParty
  association [0..1] to I_SalesContractCanclnReason    as _SalesContractCanclnReason     on  $projection.SalesContractCanclnReason = _SalesContractCanclnReason.SalesContractCanclnReason
  association [0..1] to I_ContractDownPaymentStatus    as _ContractItemDownPaymentStatus on  $projection.ContractItemDownPaymentStatus = _ContractItemDownPaymentStatus.ContractDownPaymentStatus
  association [0..1] to I_UnitOfMeasure                as _NetPriceQuantityUnit          on  $projection.NetPriceQuantityUnit = _NetPriceQuantityUnit.UnitOfMeasure
  association [0..1] to I_StatisticalValueControl      as _StatisticalValueControl       on  $projection.StatisticalValueControl = _StatisticalValueControl.StatisticalValueControl
  association [0..1] to I_Currency                     as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency

  association [0..1] to I_ShippingPoint                as _ShippingPoint                 on  $projection.ShippingPoint = _ShippingPoint.ShippingPoint
  association [0..1] to I_ShippingType                 as _ShippingType                  on  $projection.ShippingType = _ShippingType.ShippingType
  association [0..1] to I_DeliveryPriority             as _DeliveryPriority              on  $projection.DeliveryPriority = _DeliveryPriority.DeliveryPriority
  association [0..1] to I_PartialDeliveryItem          as _PartialDeliveryItem           on  $projection.PartialDeliveryIsAllowed = _PartialDeliveryItem.PartialDeliveryIsAllowed
  association [0..1] to I_Plant                        as _Plant                         on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Plant                        as _OriginalPlant                 on  $projection.OriginalPlant = _OriginalPlant.Plant
  association [0..1] to I_Plant                        as _TransitPlant                  on  $projection.TransitPlant = _TransitPlant.Plant
  association [0..1] to I_Plant                        as _PlanningPlant                 on  $projection.PlanningPlant = _PlanningPlant.Plant
  association [0..1] to I_StorageLocation              as _StorageLocation               on  $projection.Plant           = _StorageLocation.Plant
                                                                                         and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_Route                        as _Route                         on  $projection.Route = _Route.Route

  association [0..1] to I_BillingRelevanceCode         as _ItemIsBillingRelevant         on  $projection.ItemIsBillingRelevant = _ItemIsBillingRelevant.BillingRelevanceCode
  association [0..1] to I_BillingBlockReason           as _ItemBillingBlockReason        on  $projection.ItemBillingBlockReason = _ItemBillingBlockReason.BillingBlockReason
  association [0..1] to I_SlsDocItemBillingPlan        as _BillingPlan                   on  $projection.BillingPlan = _BillingPlan.BillingPlan
  association [0..1] to I_CustomerPaymentTerms         as _CustomerPaymentTerms          on  $projection.CustomerPaymentTerms = _CustomerPaymentTerms.CustomerPaymentTerms
  association [0..1] to I_IncotermsVersion             as _IncotermsVersion              on  $projection.IncotermsVersion = _IncotermsVersion.IncotermsVersion
  association [0..1] to I_IncotermsClassification      as _IncotermsClassification       on  $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification
  association [0..1] to I_CustomerAccountAssgmtGroup   as _CustomerAccountAssgmtGroup    on  $projection.CustomerAccountAssignmentGroup = _CustomerAccountAssgmtGroup.CustomerAccountAssignmentGroup
  association [0..1] to I_BusinessArea                 as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_ControllingArea              as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..*] to I_ProfitCenter                 as _ProfitCenter                  on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                                         and $projection.ControllingArea = _ProfitCenter.ControllingArea
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData           on  $projection.WBSElement = _WBSElementBasicData.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData_2         on  $projection.WBSElementInternalID = _WBSElementBasicData_2.WBSElementInternalID
  association [0..1] to I_ProfitabilitySegment         as _ProfitabilitySegment          on  $projection.ProfitabilitySegment_2 = _ProfitabilitySegment.ProfitabilitySegment
  association [0..1] to I_SlsDocItmRARlvnceType        as _SlsDocItmRARlvnceType         on  $projection.SlsDocItmRevnAcctgRlvnceType = _SlsDocItmRARlvnceType.SlsDocItmRevnAcctgRlvnceType
  association [0..1] to I_SalesDocument                as _ReferenceSDDocument           on  $projection.ReferenceSDDocument = _ReferenceSDDocument.SalesDocument
  association [0..1] to I_SalesDocumentItem            as _ReferenceSDDocumentItem       on  $projection.ReferenceSDDocument     = _ReferenceSDDocumentItem.SalesDocument
                                                                                         and $projection.ReferenceSDDocumentItem = _ReferenceSDDocumentItem.SalesDocumentItem
  association [0..1] to I_SDDocumentCategory           as _ReferenceSDDocumentCategory   on  $projection.ReferenceSDDocumentCategory = _ReferenceSDDocumentCategory.SDDocumentCategory
  association [0..1] to I_PlngDelivSchedInstrn         as _PlngDelivSchedInstrn          on  $projection.PlngDelivSchedInstrn = _PlngDelivSchedInstrn.PlngDelivSchedInstrn

  association [0..1] to I_SDProcessStatus              as _SDProcessStatus               on  $projection.SDProcessStatus = _SDProcessStatus.SDProcessStatus
  association [0..1] to I_PurchaseConfirmationStatus   as _PurchaseConfirmationStatus    on  $projection.PurchaseConfirmationStatus = _PurchaseConfirmationStatus.PurchaseConfirmationStatus
  association [0..1] to I_TotalDeliveryStatus          as _TotalDeliveryStatus           on  $projection.TotalDeliveryStatus = _TotalDeliveryStatus.TotalDeliveryStatus
  association [0..1] to I_DeliveryStatus               as _DeliveryStatus                on  $projection.DeliveryStatus = _DeliveryStatus.DeliveryStatus
  association [0..1] to I_DeliveryBlockStatus          as _DeliveryBlockStatus           on  $projection.DeliveryBlockStatus = _DeliveryBlockStatus.DeliveryBlockStatus
  association [0..1] to I_DeliveryConfirmationStatus   as _DeliveryConfirmationStatus    on  $projection.DeliveryConfirmationStatus = _DeliveryConfirmationStatus.DeliveryConfirmationStatus
  association [0..1] to I_DeliveryDateTypeRule         as _DeliveryDateTypeRule          on  $projection.DeliveryDateTypeRule = _DeliveryDateTypeRule.DeliveryDateTypeRule
  association [0..1] to I_OrderRelatedBillingStatus    as _OrderRelatedBillingStatus     on  $projection.OrderRelatedBillingStatus = _OrderRelatedBillingStatus.OrderRelatedBillingStatus
  association [0..1] to I_BillingBlockStatus           as _BillingBlockStatus            on  $projection.BillingBlockStatus = _BillingBlockStatus.BillingBlockStatus
  association [0..1] to I_SDDocumentRejectionStatus    as _SDDocumentRejectionStatus     on  $projection.SDDocumentRejectionStatus = _SDDocumentRejectionStatus.SDDocumentRejectionStatus
  association [0..1] to I_ItemGenIncompletionStatus    as _ItemGeneralIncompletionStatus on  $projection.ItemGeneralIncompletionStatus = _ItemGeneralIncompletionStatus.ItemGeneralIncompletionStatus
  association [0..1] to I_ItemBillingIncompletionSts   as _ItemBillingIncompletionStatus on  $projection.ItemBillingIncompletionStatus = _ItemBillingIncompletionStatus.ItemBillingIncompletionStatus
  association [0..1] to I_PricingIncompletionStatus    as _PricingIncompletionStatus     on  $projection.PricingIncompletionStatus = _PricingIncompletionStatus.PricingIncompletionStatus
  association [0..1] to I_ItemDelivIncompletionSts     as _ItemDelivIncompletionSts      on  $projection.ItemDeliveryIncompletionStatus = _ItemDelivIncompletionSts.ItemDeliveryIncompletionStatus
  association [0..1] to I_TotalSDDocReferenceStatus    as _TotalSDDocReferenceStatus     on  $projection.TotalSDDocReferenceStatus = _TotalSDDocReferenceStatus.TotalSDDocReferenceStatus
  association [0..1] to I_SDDocReferenceStatus         as _SDDocReferenceStatus          on  $projection.SDDocReferenceStatus = _SDDocReferenceStatus.SDDocReferenceStatus
  association [0..1] to I_AltvBsdConfSubstitutionSts   as _AltvBsdConfSubstitutionSts    on  $projection.AltvBsdConfSubstitutionStatus = _AltvBsdConfSubstitutionSts.AltvBsdConfSubstitutionStatus
  association [0..1] to I_ChmlCmplncStatus             as _ChmlCmplncStatus              on  $projection.ChmlCmplncStatus = _ChmlCmplncStatus.ChmlCmplncStatus
  association [0..1] to I_DangerousGoodsStatus         as _DangerousGoodsStatus          on  $projection.DangerousGoodsStatus = _DangerousGoodsStatus.DangerousGoodsStatus
  association [0..1] to I_SafetyDataSheetStatus        as _SafetyDataSheetStatus         on  $projection.SafetyDataSheetStatus = _SafetyDataSheetStatus.SafetyDataSheetStatus

  association [0..1] to I_TrdCmplncCheckStatus         as _TrdCmplncEmbargoSts           on  $projection.TrdCmplncEmbargoSts = _TrdCmplncEmbargoSts.TrdCmplncCheckStatus
  association [0..1] to I_TrdCmplncCheckStatus         as _TrdCmplncSnctndListChkSts     on  $projection.TrdCmplncSnctndListChkSts = _TrdCmplncSnctndListChkSts.TrdCmplncCheckStatus
  association [0..1] to I_OvrlTrdCmplncLegalCtrlChkSts as _OvrlTrdCmplncLegalCtrlChkSts  on  $projection.OvrlTrdCmplncLegalCtrlChkSts = _OvrlTrdCmplncLegalCtrlChkSts.OvrlTrdCmplncLegalCtrlChkSts

  association [0..1] to I_SlsDocItmOvrlSupplyBlockSts  as _SlsDocItmOvrlSupplyBlockSts   on  $projection.SlsDocItmOvrlSupplyBlockStatus = _SlsDocItmOvrlSupplyBlockSts.SlsDocItmOvrlSupplyBlockStatus

  association [0..1] to I_SlsDocItemSupplyBlockReason  as _SlsDocItemSupplyBlockReason   on  $projection.SalesDocItemSupplyBlockReason = _SlsDocItemSupplyBlockReason.SalesDocItemSupplyBlockReason

  association [0..1] to I_ServiceDocumentType          as _ServiceDocumentType           on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType
  association [0..1] to I_SalesDocumentItemProcgCode   as _SalesDocumentItemProcgCode    on  $projection.SalesDocumentItemProcgCode = _SalesDocumentItemProcgCode.SalesDocumentItemProcgCode
  association [0..1] to I_DownPaymentProcessingVariant as _DownPaymentProcessingVariant  on  $projection.DownPaymentProcessingVariant = _DownPaymentProcessingVariant.DownPaymentProcessingVariant
  association [0..1] to I_CustomerPriceGroup           as _CustomerPriceGroup            on  $projection.CustomerPriceGroup = _CustomerPriceGroup.CustomerPriceGroup

  //Analytics fields
  association [0..1] to I_SalesDocumentType            as _SalesDocumentType             on  $projection.SalesDocumentType = _SalesDocumentType.SalesDocumentType
  association [0..1] to I_SalesOrganization            as _SalesOrganization             on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel          as _DistributionChannel           on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division                     as _OrganizationDivision          on  $projection.OrganizationDivision = _OrganizationDivision.Division
  association [0..1] to I_SalesOffice                  as _SalesOffice                   on  $projection.SalesOffice = _SalesOffice.SalesOffice
  association [0..1] to I_SalesGroup                   as _SalesGroup                    on  $projection.SalesGroup = _SalesGroup.SalesGroup
  association [0..1] to I_SDDocumentReason             as _SDDocumentReason              on  $projection.SDDocumentReason = _SDDocumentReason.SDDocumentReason
  association [0..1] to I_Customer                     as _SoldToParty                   on  $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_AdditionalCustomerGroup1     as _AdditionalCustomerGroup1      on  $projection.AdditionalCustomerGroup1 = _AdditionalCustomerGroup1.AdditionalCustomerGroup1
  association [0..1] to I_AdditionalCustomerGroup2     as _AdditionalCustomerGroup2      on  $projection.AdditionalCustomerGroup2 = _AdditionalCustomerGroup2.AdditionalCustomerGroup2
  association [0..1] to I_AdditionalCustomerGroup3     as _AdditionalCustomerGroup3      on  $projection.AdditionalCustomerGroup3 = _AdditionalCustomerGroup3.AdditionalCustomerGroup3
  association [0..1] to I_AdditionalCustomerGroup4     as _AdditionalCustomerGroup4      on  $projection.AdditionalCustomerGroup4 = _AdditionalCustomerGroup4.AdditionalCustomerGroup4
  association [0..1] to I_AdditionalCustomerGroup5     as _AdditionalCustomerGroup5      on  $projection.AdditionalCustomerGroup5 = _AdditionalCustomerGroup5.AdditionalCustomerGroup5
  association [0..1] to I_ShippingCondition            as _ShippingCondition             on  $projection.ShippingCondition = _ShippingCondition.ShippingCondition
  association [0..1] to I_Customer                     as _ShipToParty                   on  $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_Customer                     as _BillToParty                   on  $projection.BillToParty = _BillToParty.Customer
  association [0..1] to I_Customer                     as _PayerParty                    on  $projection.PayerParty = _PayerParty.Customer
  association [0..1] to I_PersonWorkAgreement_1        as _SalesEmployee                 on  $projection.SalesEmployee = _SalesEmployee.PersonWorkAgreement
  association [0..1] to I_PersonWorkAgreement_1        as _ResponsibleEmployee           on  $projection.ResponsibleEmployee = _ResponsibleEmployee.PersonWorkAgreement
  association [0..1] to I_ConsumptionPosting           as _ConsumptionPosting            on  $projection.ConsumptionPosting = _ConsumptionPosting.ConsumptionPosting
  association [0..1] to I_MRPArea                      as _MRPArea                       on  $projection.MRPArea = _MRPArea.MRPArea

  //Solution Order Reference
  association [0..1] to I_ServiceDocumentEnhcd         as _SolutionOrder                 on  $projection.BusinessSolutionOrder = _SolutionOrder.ServiceDocument
                                                                                         and _SolutionOrder.ServiceObjectType  = 'BUS2000172'

  //Solution Order Item Reference
  association [1]    to I_ServiceDocumentItemEnhcd     as _SolutionOrderItem             on  _SolutionOrderItem.ServiceObjectType  = 'BUS2000172'
                                                                                         and $projection.BusinessSolutionOrder     = _SolutionOrderItem.ServiceDocument
                                                                                         and $projection.BusinessSolutionOrderItem = _SolutionOrderItem.ServiceDocumentItem

  //Solution Order Bundle Item Reference
  association [1]    to I_ServiceDocumentItemEnhcd     as _SolutionOrderBundleItem       on  _SolutionOrderBundleItem.ServiceObjectType = 'BUS2000172'
                                                                                         and $projection.BusinessSolutionOrder          = _SolutionOrderBundleItem.ServiceDocument
                                                                                         and $projection.BusSolnOrdItemBundleItem       = _SolutionOrderBundleItem.ServiceDocumentItem

  // ValueChain Management
  association [0..1] to I_SalesValueChainCategory      as _SalesValueChainCategory       on  $projection.ValueChainCategory = _SalesValueChainCategory.ValueChainCategory

  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic       as _Extension                     on  $projection.SalesDocument     = _Extension.SalesDocument
                                                                                         and $projection.SalesDocumentItem = _Extension.SalesDocumentItem

{
      //Key
      @ObjectModel.foreignKey.association: '_SalesDocument'
  key vbap.vbeln                                                                                                    as SalesDocument,
      @ObjectModel.text.element: 'SalesDocumentItemText'
  key vbap.posnr                                                                                                    as SalesDocumentItem,
      vbap.handle                                                                                                   as SalesDocumentItemUUID,

      //Category
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      vbap.vbtyp_ana                                                                                                as SDDocumentCategory,
      @ObjectModel.foreignKey.association: '_ItemCategory'
      vbap.pstyv                                                                                                    as SalesDocumentItemCategory,
      vbap.posar                                                                                                    as SalesDocumentItemType,
      vbap.shkzg                                                                                                    as IsReturnsItem,
      vbap.erlre                                                                                                    as CompletionRule,

      //Admin
      vbap.ernam                                                                                                    as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      vbap.erdat                                                                                                    as CreationDate,
      cast ( vbap.erzet as creation_time preserving type )                                                          as CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      vbap.aedat                                                                                                    as LastChangeDate,

      //Organization
      @ObjectModel.foreignKey.association: '_Division'
      vbap.spart                                                                                                    as Division,

      //Product
      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      @ObjectModel.text.association: '_MaterialText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Material'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      vbap.matnr                                                                                                    as Material,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_ProductText'
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Product'
      cast (vbap.matnr as productnumber preserving type)                                                            as Product,

      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      @ObjectModel.text.association: '_OrigMaterialText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      vbap.matwa                                                                                                    as OriginallyRequestedMaterial,
      vbap.kdmat                                                                                                    as MaterialByCustomer,
      vbap.ean11                                                                                                    as InternationalArticleNumber,
      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BatchStdVH',
                     element: 'Batch' },
          additionalBinding: [{ localElement: 'Plant',
                                element: 'Plant' },
                              { localElement: 'Material',
                                element: 'Material' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Batch'
      vbap.charg                                                                                                    as Batch,
      @ObjectModel.foreignKey.association: '_ProductHierarchyNode'
      vbap.prodh                                                                                                    as ProductHierarchyNode,
      @Analytics.internalName: #LOCAL
      vbap.prodh_univ_id_val_contr                                                                                  as ValContrRlvtProdUnivHierarchy,
      @Analytics.internalName: #LOCAL
      vbap.prodh_univ_node_val_contr                                                                                as ValContrRlvtProdUnivHierNode,
      vbkd.wminr                                                                                                    as ProductCatalog,
      @ObjectModel.foreignKey.association: '_MaterialSubstitutionReason'
      vbap.sugrd                                                                                                    as MaterialSubstitutionReason,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ProductGroup'
      vbap.matkl                                                                                                    as MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      @Analytics.internalName: #LOCAL
      cast (vbap.matkl as productgroup preserving type )                                                            as ProductGroup,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      vbap.mvgr1                                                                                                    as AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      vbap.mvgr2                                                                                                    as AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      vbap.mvgr3                                                                                                    as AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      vbap.mvgr4                                                                                                    as AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      vbap.mvgr5                                                                                                    as AdditionalMaterialGroup5,
      vbap.cuobj                                                                                                    as ProductConfiguration,
      vbap.prosa                                                                                                    as MaterialDeterminationType,
      vbap.uepvw                                                                                                    as HigherLevelItemUsage,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_MRPArea'
      vbap.berid                                                                                                    as MRPArea,
      vbap.stlnr                                                                                                    as BillOfMaterial,
      vbap.stdat                                                                                                    as BOMExplosionDate,
      vbap.mtvfp                                                                                                    as ProdAvailabilityCheckGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_IndependentRequirementType'
      cast (vbap.bedae as vdm_bedae preserving type )                                                               as IndependentRequirementType,

      //Sales
      @Semantics.text: true
      vbap.arktx                                                                                                    as SalesDocumentItemText,
      vbap.bstkd_ana                                                                                                as PurchaseOrderByCustomer,
      cast (vbkd.bstkd_e as sd_purchase_order_by_shipto preserving type )                                           as PurchaseOrderByShipToParty,
      @Analytics.internalName: #LOCAL
      vbkd.bstdk                                                                                                    as CustomerPurchaseOrderDate,
      @Analytics.internalName: #LOCAL
      cast(vbkd.bstdk_e as sd_po_date_by_shipto preserving type )                                                   as CustPurOrdDateByShipToParty,
      vbap.posex                                                                                                    as UnderlyingPurchaseOrderItem,
      vbkd.posex_e                                                                                                  as UndrlgPurOrdItmByShipToParty,
      vbkd.ihrez                                                                                                    as CorrespncExternalReference,
      vbkd.ihrez_e                                                                                                  as CorrespncExtRefByShipToParty,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerPurchaseOrderType'
      vbkd.bsark                                                                                                    as CustomerPurchaseOrderType,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustPurOrdTypeByShipToParty'
      cast (vbkd.bsark_e as sd_po_type_by_shipto preserving type )                                                  as CustPurOrdTypeByShipToParty,

      vbap.ext_ref_item_id                                                                                          as ExternalItemID,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      vbap.kwmeng                                                                                                   as OrderQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      vbap.vrkme                                                                                                    as OrderQuantityUnit,
      vbap.umvkn                                                                                                    as OrderToBaseQuantityDnmntr,
      vbap.umvkz                                                                                                    as OrderToBaseQuantityNmrtr,
      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      vbap.zmeng                                                                                                    as TargetQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_TargetQuantityUnit'
      vbap.zieme                                                                                                    as TargetQuantityUnit,
      vbap.umzin                                                                                                    as TargetToBaseQuantityDnmntr,
      vbap.umziz                                                                                                    as TargetToBaseQuantityNmrtr,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      cast(vbap.kbmeng as confirmed_quantity preserving type )                                                      as ConfdDelivQtyInOrderQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      vbap.lsmeng                                                                                                   as TargetDelivQtyInOrderQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      vbap.klmeng                                                                                                   as ConfdDeliveryQtyInBaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      vbap.meins                                                                                                    as BaseUnit,
      vbap.substn_numerator                                                                                         as MDSubstnConversionNumerator,
      vbap.substn_denominator                                                                                       as MDSubstnConversionDenominator,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      cast( vbap.cmtd_deliv_qty_su   as committeddelivqtyinordqtyunit preserving type )                             as CommittedDelivQtyInOrdQtyUnit,
      cast( vbap.cmtd_deliv_creadate as committeddelivcreationdate    preserving type )                             as CommittedDelivCreationDate,
      cast( vbap.cmtd_deliv_date     as committeddeliverydate         preserving type )                             as CommittedDeliveryDate,

      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      cast( case when
          vbap.kwmeng > 0
      then
          vbap.kwmeng
      else
          vbap.zmeng
      end as reqd_qty )                                                                                             as RequestedQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_RequestedQuantityUnit'
      cast( case when
          vbap.kwmeng > 0
      then
          vbap.vrkme
      else
          vbap.zieme
      end as reqd_qty_unit )                                                                                        as RequestedQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      vbap.reqqty_bu                                                                                                as RequestedQuantityInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      vbap.brgew                                                                                                    as ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      vbap.ntgew                                                                                                    as ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      vbap.gewei                                                                                                    as ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      vbap.volum                                                                                                    as ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      vbap.voleh                                                                                                    as ItemVolumeUnit,
      cast( vbkd.fbuda  as vdm_sd_services_rendered_date preserving type )                                          as ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      vbap.bzirk_ana                                                                                                as SalesDistrict,
      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDealStdVH',
                     element: 'SalesDeal' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_SalesDeal'
      vbap.knuma_ag                                                                                                 as SalesDeal,
      vbap.knuma_pi                                                                                                 as SalesPromotion,
      vbkd.waktion                                                                                                  as RetailPromotion,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      vbap.kdgrp_ana                                                                                                as CustomerGroup,
      vbkd.podkz                                                                                                    as SlsDocIsRlvtForProofOfDeliv,

      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      vbap.abgru                                                                                                    as SalesDocumentRjcnReason,
      vbap.grpos                                                                                                    as AlternativeToItem,
      @ObjectModel.foreignKey.association: '_ReturnReason'
      vbap.msr_ret_reason                                                                                           as ReturnReason,
      @ObjectModel.foreignKey.association: '_ReturnsRefundExtent'
      vbap.msr_refund_code                                                                                          as ReturnsRefundExtent,
      vbap.msr_approv_block                                                                                         as RetsMgmtProcessingBlock,
      vbap.sgt_rcat                                                                                                 as RequirementSegment,
      vbap.fmeng                                                                                                    as QuantityIsFixed,

      //Quotation
      vbap.awahr                                                                                                    as ItemOrderProbabilityInPercent,

      //Contract
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.zwert                                                                                                    as OutlineAgreementTargetAmount,
      veda.vbegdat                                                                                                  as SalesContractValidityStartDate,
      veda.venddat                                                                                                  as SalesContractValidityEndDate,
      veda.vlaufz                                                                                                   as NmbrOfSalesContractValdtyPerd,
      @ObjectModel.foreignKey.association: '_SalesContractValidityPerdUnit'
      veda.vlauez                                                                                                   as SalesContractValidityPerdUnit,
      veda.vlaufk                                                                                                   as SalesContractValidityPerdCat,
      veda.vuntdat                                                                                                  as SalesContractSignedDate,
      veda.vinsdat                                                                                                  as EquipmentInstallationDate,
      veda.vabndat                                                                                                  as EquipmentDeliveryAccptcDate,
      veda.vdemdat                                                                                                  as EquipmentDismantlingDate,
      veda.vkuesch                                                                                                  as SalesContractCanclnProcedure,
      veda.vwundat                                                                                                  as RequestedCancellationDate,
      veda.veindat                                                                                                  as SlsContractCanclnReqRcptDate,
      veda.vbelkue                                                                                                  as CanclnDocByContrPartner,
      veda.vbedkue                                                                                                  as ContractPartnerCanclnDocDate,
      @ObjectModel.foreignKey.association: '_SalesContractCanclnParty'
      veda.vkuepar                                                                                                  as SalesContractCanclnParty,
      @ObjectModel.foreignKey.association: '_SalesContractCanclnReason'
      veda.vkuegru                                                                                                  as SalesContractCanclnReason,
      veda.vaktsch                                                                                                  as SalesContractFollowUpAction,
      veda.vasda                                                                                                    as SlsContractFollowUpActionDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesDocumentItemProcgCode'
      vbap.process_code                                                                                             as SalesDocumentItemProcgCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_DownPaymentProcessingVariant'
      vbap.dwn_payt_procg_var                                                                                       as DownPaymentProcessingVariant,

      //Sales Scheduling Agreement
      @ObjectModel.foreignKey.association: '_PlngDelivSchedInstrn'
      vbap.plavo                                                                                                    as PlngDelivSchedInstrn,

      //Pricing
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.netwr                                                                                                    as NetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      vbap.waerk                                                                                                    as TransactionCurrency,
      vbap.pmatn                                                                                                    as PricingReferenceMaterial,
      @ObjectModel.foreignKey.association: '_MaterialPricingGroup'
      cast(vbap.kondm as productpricinggroup preserving type)                                                       as MaterialPricingGroup,
      vbap.taxm1                                                                                                    as ProductTaxClassification1,
      vbap.taxm2                                                                                                    as ProductTaxClassification2,
      vbap.taxm3                                                                                                    as ProductTaxClassification3,
      vbap.taxm4                                                                                                    as ProductTaxClassification4,
      vbap.taxm5                                                                                                    as ProductTaxClassification5,
      vbap.taxm6                                                                                                    as ProductTaxClassification6,
      vbap.taxm7                                                                                                    as ProductTaxClassification7,
      vbap.taxm8                                                                                                    as ProductTaxClassification8,
      vbap.taxm9                                                                                                    as ProductTaxClassification9,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_MatlAccountAssignmentGroup'
      vbap.ktgrm                                                                                                    as MatlAccountAssignmentGroup,
      vbkd.prsdt                                                                                                    as PricingDate,
      vbkd.kursk_dat                                                                                                as ExchangeRateDate,
      cast(vbkd.kursk as kursk_not_converted preserving type)                                                       as PriceDetnExchangeRate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.netpr                                                                                                    as NetPriceAmount,
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      vbap.kpein                                                                                                    as NetPriceQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
      vbap.kmein                                                                                                    as NetPriceQuantityUnit,

      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      vbap.kowrr                                                                                                    as StatisticalValueControl,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.mwsbp                                                                                                    as TaxAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.wavwr                                                                                                    as CostAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.kzwi1                                                                                                    as Subtotal1Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.kzwi2                                                                                                    as Subtotal2Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.kzwi3                                                                                                    as Subtotal3Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.kzwi4                                                                                                    as Subtotal4Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.kzwi5                                                                                                    as Subtotal5Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.kzwi6                                                                                                    as Subtotal6Amount,
      vbap.knumv_ana                                                                                                as SalesDocumentCondition,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_MainItemPricingRefProduct'
      cast (vbap.upmat as main_item_pricing_ref_product preserving type)                                            as MainItemPricingRefProduct,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      vbkd.konda                                                                                                    as CustomerPriceGroup,

      //Shipping
      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ShippingPointStdVH',
                     element: 'ShippingPoint' }
        }]
      @ObjectModel.text.association: '_ShippingPointText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      vbap.vstel                                                                                                    as ShippingPoint,
      @ObjectModel.foreignKey.association: '_ShippingType'
      vbap.vsart_ana                                                                                                as ShippingType,
      vbap.sobkz                                                                                                    as InventorySpecialStockType,
      vbap.kzbws                                                                                                    as InventorySpecialStockValnType,
      @ObjectModel.foreignKey.association: '_DeliveryPriority'
      vbap.lprio                                                                                                    as DeliveryPriority,
      @ObjectModel.foreignKey.association: '_Plant'
      vbap.werks                                                                                                    as Plant,
      @ObjectModel.foreignKey.association: '_OriginalPlant'
      vbap.original_plant                                                                                           as OriginalPlant,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_TransitPlant'
      vbap.transit_plant                                                                                            as TransitPlant,

      @ObjectModel.foreignKey.association: '_StorageLocation'
      vbap.lgort                                                                                                    as StorageLocation,
      @ObjectModel.foreignKey.association: '_Route'
      vbap.route                                                                                                    as Route,
      vbap.grkor                                                                                                    as DeliveryGroup,
      vbap.fixmg                                                                                                    as DeliveryDateQuantityIsFixed,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartialDeliveryItem'
      cast (vbap.kztlf as partial_delivery_allowed preserving type )                                                as PartialDeliveryIsAllowed,
      cast (vbap.antlf as nmbrpartialdeliv preserving type )                                                        as MaxNmbrOfPartialDelivery,
      vbap.uebtk                                                                                                    as UnlimitedOverdeliveryIsAllowed,
      vbap.uebto                                                                                                    as OverdelivTolrtdLmtRatioInPct,
      vbap.untto                                                                                                    as UnderdelivTolrtdLmtRatioInPct,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      vbap.lfmng                                                                                                    as MinDeliveryQtyInBaseUnit,
      vbap.kzfme                                                                                                    as OpenDeliveryLeadingUnitCode,
      vbap.lfrel                                                                                                    as ItemIsDeliveryRelevant,
      @Semantics.booleanIndicator: true
      vbap.xchar                                                                                                    as BatchManagementIsSalesInternal,
      vbkd.empst                                                                                                    as ReceivingPoint,

      //Fashion
      vbap.fsh_season_year                                                                                          as ProductSeasonYear,
      vbap.fsh_season                                                                                               as ProductSeason,
      vbap.fsh_collection                                                                                           as ProductCollection,
      vbap.fsh_theme                                                                                                as ProductTheme,
      vbap.fsh_candate                                                                                              as FashionCancelDate,
      vbap.wrf_charstc1                                                                                             as ProductCharacteristic1,
      vbap.wrf_charstc2                                                                                             as ProductCharacteristic2,
      vbap.wrf_charstc3                                                                                             as ProductCharacteristic3,
      vbap.rfm_psst_group                                                                                           as ShippingGroupNumber,
      vbap.rfm_psst_rule                                                                                            as ShippingGroupRule,
      vbap.assignment_priority                                                                                      as ARunPriorityValue,
      vbap.arun_group_prio                                                                                          as ARunDemandGroupPriority,

      //Billing
      vbap.fkdat_ana                                                                                                as BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_ItemIsBillingRelevant'
      vbap.fkrel                                                                                                    as ItemIsBillingRelevant,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      vbap.faksp                                                                                                    as ItemBillingBlockReason,
      vbap.fplnr_ana                                                                                                as BillingPlan,

      @Analytics.internalName: #LOCAL
      vbkd.dpbp_ref_fplnr                                                                                           as ReferenceBillingPlan,
      @Analytics.internalName: #LOCAL
      vbkd.dpbp_ref_fpltr                                                                                           as ReferenceBillingPlanItem,

      //Payment
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      vbkd.incov                                                                                                    as IncotermsVersion,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      vbkd.inco1                                                                                                    as IncotermsClassification,
      vbkd.inco2                                                                                                    as IncotermsTransferLocation,
      vbkd.inco2_l                                                                                                  as IncotermsLocation1,
      vbkd.inco3_l                                                                                                  as IncotermsLocation2,
      cast( vbkd.kzazu as vdm_sd_order_combination_ind preserving type )                                            as OrderCombinationIsAllowed,
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      vbkd.zterm                                                                                                    as CustomerPaymentTerms,
      vbkd.zlsch                                                                                                    as PaymentMethod,
      vbkd.valdt                                                                                                    as FixedValueDate,
      vbkd.valtg                                                                                                    as AdditionalValueDays,

      //Accounting
      vbkd.vkont                                                                                                    as ContractAccount,
      vbkd.gjahr                                                                                                    as FiscalYear,
      vbkd.poper                                                                                                    as FiscalPeriod,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      vbkd.ktgrd                                                                                                    as CustomerAccountAssignmentGroup,
      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_BusinessAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BusinessArea'
      vbap.gsber                                                                                                    as BusinessArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ControllingArea'
      vbak.kokrs                                                                                                    as ControllingArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      vbap.prctr                                                                                                    as ProfitCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID'
      vbap.ps_psp_pnr                                                                                               as WBSElement,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementBasicData_2'
      cast ( vbap.ps_psp_pnr as ps_s4_pspnr preserving type )                                                       as WBSElementInternalID,
      vbap.aufnr                                                                                                    as OrderID,
      vbap.objnr                                                                                                    as ControllingObject,
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor: 'ProfitabilitySegment_2'
      cast( case when paobjnr > '9999999999' then '9999999999' else lpad( paobjnr, 10, '0' ) end as rkeobjnr_numc ) as ProfitabilitySegment,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProfitabilitySegment'
      cast(vbap.paobjnr as rkeobjnr_char preserving type )                                                          as ProfitabilitySegment_2,
      vbap.vbelv                                                                                                    as OriginSDDocument,
      vbap.posnv                                                                                                    as OriginSDDocumentItem,
      vbkd.kurrf                                                                                                    as AccountingExchangeRate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SlsDocItmRARlvnceType'
      vbkd.farr_reltype                                                                                             as SlsDocItmRevnAcctgRlvnceType,


      //Reference
      @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
      vbap.vgbel                                                                                                    as ReferenceSDDocument,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentItem'
      vbap.vgpos                                                                                                    as ReferenceSDDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      cast (vbap.vgtyp as reference_sd_document_category preserving type )                                          as ReferenceSDDocumentCategory,
      @ObjectModel.foreignKey.association: '_HigherLevelItem'
      @Analytics.internalName: #LOCAL
      vbap.uepos                                                                                                    as HigherLevelItem,
      vbap.wktnr                                                                                                    as ValueContract,
      vbap.wktps                                                                                                    as ValueContractItem,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SolutionOrder'
      vbap.solution_order_id                                                                                        as BusinessSolutionOrder,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SolutionOrderItem'
      vbap.solution_order_itm_id                                                                                    as BusinessSolutionOrderItem,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SolutionOrderBundleItem'
      vbap.solution_order_bundle_itm_id                                                                             as BusSolnOrdItemBundleItem,

      // Status
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      vbap.gbsta                                                                                                    as SDProcessStatus,
      @ObjectModel.foreignKey.association: '_DeliveryConfirmationStatus'
      vbap.besta                                                                                                    as DeliveryConfirmationStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_DeliveryDateTypeRule'
      vbap.delivery_date_type_rule                                                                                  as DeliveryDateTypeRule,
      @ObjectModel.foreignKey.association: '_PurchaseConfirmationStatus'
      cast(vbap.costa as purchaseconfsts preserving type )                                                          as PurchaseConfirmationStatus,
      @ObjectModel.foreignKey.association: '_TotalDeliveryStatus'
      vbap.lfgsa                                                                                                    as TotalDeliveryStatus,
      @ObjectModel.foreignKey.association: '_DeliveryStatus'
      vbap.lfsta                                                                                                    as DeliveryStatus,
      @ObjectModel.foreignKey.association: '_DeliveryBlockStatus'
      cast(vbap.lssta as delivery_block_status preserving type )                                                    as DeliveryBlockStatus,
      @ObjectModel.foreignKey.association: '_OrderRelatedBillingStatus'
      cast(vbap.fksaa as sls_doc_order_rel_billing_sts preserving type )                                            as OrderRelatedBillingStatus,
      @ObjectModel.foreignKey.association: '_BillingBlockStatus'
      vbap.fssta                                                                                                    as BillingBlockStatus,
      @ObjectModel.foreignKey.association: '_ItemGeneralIncompletionStatus'
      cast(vbap.uvall as item_general_incompletion_sts preserving type )                                            as ItemGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
      vbap.uvfak                                                                                                    as ItemBillingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_PricingIncompletionStatus'
      vbap.uvprs                                                                                                    as PricingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemDelivIncompletionSts'
      vbap.uvvlk                                                                                                    as ItemDeliveryIncompletionStatus,
      @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
      vbap.absta                                                                                                    as SDDocumentRejectionStatus,
      @ObjectModel.foreignKey.association: '_TotalSDDocReferenceStatus'
      vbap.rfgsa                                                                                                    as TotalSDDocReferenceStatus,
      @ObjectModel.foreignKey.association: '_SDDocReferenceStatus'
      vbap.rfsta                                                                                                    as SDDocReferenceStatus,
      @ObjectModel.foreignKey.association: '_ChmlCmplncStatus'
      cast(vbap.pcsta as mon_tdd_pcsta preserving type )                                                            as ChmlCmplncStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_DangerousGoodsStatus'
      cast(vbap.dgsta as mon_tdd_dgsta preserving type )                                                            as DangerousGoodsStatus,
      @ObjectModel.foreignKey.association: '_SafetyDataSheetStatus'
      cast(vbap.sdssta as mon_tdd_sdssta preserving type )                                                          as SafetyDataSheetStatus,
      @ObjectModel.foreignKey.association: '_TrdCmplncEmbargoSts'
      cast(vbap.emcst as embargochksts preserving type )                                                            as TrdCmplncEmbargoSts,
      @ObjectModel.foreignKey.association: '_TrdCmplncSnctndListChkSts'
      cast(vbap.slcst as watchlistscrngchksts preserving type )                                                     as TrdCmplncSnctndListChkSts,
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncLegalCtrlChkSts'
      cast(vbap.total_lccst as lglctrlchksts preserving type )                                                      as OvrlTrdCmplncLegalCtrlChkSts,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SlsDocItmOvrlSupplyBlockSts'
      vbap.overall_supply_block_status                                                                              as SlsDocItmOvrlSupplyBlockStatus,

      @ObjectModel.foreignKey.association: '_AltvBsdConfSubstitutionSts'
      vbap.atp_abc_substitution_status                                                                              as AltvBsdConfSubstitutionStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ContractItemDownPaymentStatus'
      vbap.dp_clear_sta_itm                                                                                         as ContractItemDownPaymentStatus,

      // Value Chain Management
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesValueChainCategory'
      vbap.vcm_chain_category                                                                                       as ValueChainCategory,

      //PBS
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.capped_net_amount                                                                                        as CappedNetAmount,
      vbap.capped_net_amount_alert_thld                                                                             as CappedNetAmtAlertThldInPct,
      //this field is relevant only for PBS scenario
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      vbap.ifrs15_total_ssp                                                                                         as TotalStandAloneSellingPrice,
      vbap.abgrs                                                                                                    as ResultAnalysisInternalID,

      // CRM
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      vbap.service_doc_type                                                                                         as ServiceDocumentType,
      vbap.service_doc_id                                                                                           as ServiceDocument,
      vbap.service_doc_item_id                                                                                      as ServiceDocumentItem,

      // Analytics relevant fields
      @ObjectModel.foreignKey.association: '_SalesDocumentType'
      vbap.auart_ana                                                                                                as SalesDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      vbap.vkorg_ana                                                                                                as SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      vbap.vtweg_ana                                                                                                as DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      vbap.spart_ana                                                                                                as OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      vbap.vkbur_ana                                                                                                as SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      vbap.vkgrp_ana                                                                                                as SalesGroup,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_SoldToParty'
      vbap.kunnr_ana                                                                                                as SoldToParty,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      vbap.kvgr1_ana                                                                                                as AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      vbap.kvgr2_ana                                                                                                as AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      vbap.kvgr3_ana                                                                                                as AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      vbap.kvgr4_ana                                                                                                as AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      vbap.kvgr5_ana                                                                                                as AdditionalCustomerGroup5,
      vbap.audat_ana                                                                                                as SalesDocumentDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      vbap.augru_ana                                                                                                as SDDocumentReason,
      cast(vbap.vdatu_ana as reqd_delivery_date preserving type)                                                    as RequestedDeliveryDate,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      vbap.vsbed_ana                                                                                                as ShippingCondition,
      // Analytics partner fields
      @ObjectModel.foreignKey.association: '_ShipToParty'
      vbap.kunwe_ana                                                                                                as ShipToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      vbap.kunrg_ana                                                                                                as PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      vbap.kunre_ana                                                                                                as BillToParty,
      @ObjectModel.foreignKey.association: '_SalesEmployee'
      vbap.perve_ana                                                                                                as SalesEmployee,
      @ObjectModel.foreignKey.association: '_ResponsibleEmployee'
      vbap.perzm_ana                                                                                                as ResponsibleEmployee,
      cast(vbap.perve_ana as sales_empl preserving type)                                                            as SalesEmployeeWorkAgreement,
      cast(vbap.perzm_ana as resp_empl  preserving type)                                                            as ResponsibleEmployeeWorkAgrmt,

      @API.element.releaseState: #DEPRECATED
      vbap.bob_promotion_id                                                                                         as OmniChannelSalesPromotion,
      @API.element.releaseState: #DEPRECATED
      vbap.bob_fg_id                                                                                                as OmniChannelSalesPromotionRule,

      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      vbap.kzvbr                                                                                                    as ConsumptionPosting,

      // Production planning related fields
      @ObjectModel.foreignKey.association: '_PlanningProduct'
      @Analytics.internalName: #LOCAL
      vbap.vpmat                                                                                                    as PlanningMaterial,
      @ObjectModel.foreignKey.association: '_PlanningPlant'
      @Analytics.internalName: #LOCAL
      vbap.vpwrk                                                                                                    as PlanningPlant,
      @ObjectModel.foreignKey.association: '_ProductUnit'
      @Analytics.internalName: #LOCAL
      vbap.prbme                                                                                                    as ProductBaseUnit,

      vbap.umref                                                                                                    as ProdPlntPlngMatlConversionFctr,

      vbap.sls_contr_auto_assignment                                                                                as SlsContrAutoAssgmtIDForSlsOrd,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SlsDocItemSupplyBlockReason'
      vbap.supply_block_reason                                                                                      as SalesDocItemSupplyBlockReason,

      _SlsDocItemEnhancedFields,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SalesDocument,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ScheduleLine,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Partner,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PricingElement,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ItemBillingPlan,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_SubsequentProcFlowDocItem'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SubsequentProcFlowDocItem'
      _SubsequentDocument,

      _SubsequentProcFlowDocItem,

      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_PrecedingProcFlowDocItem'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_PrecedingProcFlowDocItem'
      _PrecedingDocument,

      _PrecedingProcFlowDocItem,

      _SDDocumentCategory,
      _ItemCategory,
      _HigherLevelItem,
      _CreatedByUser,
      _Division,
      _Material,
      _Product,
      _OriginallyRequestedMaterial,
      _MaterialPlant,
      _Batch,
      _ProductHierarchyNode,
      _MaterialSubstitutionReason,
      _MaterialGroup,
      _ProductGroup,
      _MaterialPricingGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _IndependentRequirementType,
      _CustomerPurchaseOrderType,
      _CustPurOrdTypeByShipToParty,
      _MatlAccountAssignmentGroup,
      _OrderQuantityUnit,
      _TargetQuantityUnit,
      _BaseUnit,
      _RequestedQuantityUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _SalesDistrict,
      _SalesDeal,
      _CustomerGroup,
      _CustomerPriceGroup,
      _SalesDocumentRjcnReason,
      _ReturnReason,
      _ReturnsRefundExtent,
      _SalesContractValidityPerdUnit,
      _SalesContractCanclnParty,
      _SalesContractCanclnReason,
      _ContractItemDownPaymentStatus,
      _SalesDocumentItemProcgCode,
      _DownPaymentProcessingVariant,
      _NetPriceQuantityUnit,
      _StatisticalValueControl,
      _TransactionCurrency,
      _ShippingPoint,
      _ShippingType,
      _DeliveryPriority,
      _PartialDeliveryItem,
      _Plant,
      _OriginalPlant,
      _TransitPlant,
      _StorageLocation,
      _Route,
      _ItemIsBillingRelevant,
      _ItemBillingBlockReason,

      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_ItemBillingPlan'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ItemBillingPlan'
      _BillingPlan,

      _CustomerPaymentTerms,
      _IncotermsVersion,
      _IncotermsClassification,
      _CustomerAccountAssgmtGroup,
      _BusinessArea,
      @Consumption.filter.businessDate.at: true
      _ProfitCenter,
      _ControllingArea,

      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData_2'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WBSElementBasicData_2'
      _WBSElementBasicData,
      _WBSElementBasicData_2,
      _ProfitabilitySegment,
      _SlsDocItmRARlvnceType,
      _ReferenceSDDocument,
      _ReferenceSDDocumentItem,
      _ReferenceSDDocumentCategory,
      _PlngDelivSchedInstrn,

      _SolutionOrder,
      _SolutionOrderItem,
      @Analytics.hidden: true
      _SolutionOrderBundleItem,

      _SalesValueChainCategory,

      _SDProcessStatus,
      _PurchaseConfirmationStatus,
      _TotalDeliveryStatus,
      _DeliveryStatus,
      _DeliveryBlockStatus,
      _DeliveryConfirmationStatus,
      _DeliveryDateTypeRule,
      _OrderRelatedBillingStatus,
      _BillingBlockStatus,
      _SDDocumentRejectionStatus,
      _ItemGeneralIncompletionStatus,
      _ItemBillingIncompletionStatus,
      _PricingIncompletionStatus,
      _ItemDelivIncompletionSts,
      _TotalSDDocReferenceStatus,
      _SDDocReferenceStatus,
      _AltvBsdConfSubstitutionSts,
      _ChmlCmplncStatus,
      _DangerousGoodsStatus,
      _SafetyDataSheetStatus,
      _TrdCmplncEmbargoSts,
      _TrdCmplncSnctndListChkSts,
      _OvrlTrdCmplncLegalCtrlChkSts,
      _SlsDocItmOvrlSupplyBlockSts,
      _ConsumptionPosting,
      _PlanningPlant,
      _PlanningProduct,
      _MainItemPricingRefProduct,
      _ProductUnit,
      _MRPArea,
      _SlsDocItemSupplyBlockReason,
      // Analytics relevant associations
      _SalesDocumentType,
      _SalesOrganization,
      _DistributionChannel,
      _OrganizationDivision,
      _SalesGroup,
      _SalesOffice,
      _SoldToParty,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,
      _SDDocumentReason,
      _ShippingCondition,
      _ShipToParty,
      _BillToParty,
      _PayerParty,
      _SalesEmployee,
      _ResponsibleEmployee,

      _ServiceDocumentType,
      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      _MaterialText,
      @Consumption.hidden: true
      _ProductText,
      @Consumption.hidden: true
      _OrigMaterialText,
      @Consumption.hidden: true
      _ShippingPointText
      // ]--GENERATED

}
```
