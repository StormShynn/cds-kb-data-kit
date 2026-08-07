---
name: I_PROVIDERCONTRACTITEM
description: Providercontractitem
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - contract
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_PROVIDERCONTRACTITEM

**Providercontractitem**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProviderContract` | ✓ | |  | `vtkey` |  |  |
| `ProviderContractItem` | ✓ | |  | `vtpos` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreationTime` |  | |  | `cast(ertim as ttet_dt_cr_time preserving type )` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `LastChangeTime` |  | |  | `aetim` |  |  |
| `LastChangedByUser` |  | |  | `aenam` |  |  |
| `CAProviderContractItemUUID` |  | |  | `vtpid` |  |  |
| `CAPrvdrContrParentItemUUID` |  | |  | `papid` |  |  |
| `CAPrvdrContrItmValidFromDteTme` |  | |  | `valfr` |  |  |
| `CAPrvdrContrItmValidToDateTime` |  | |  | `valto` |  |  |
| `CAPrvdrContrItemCanclnDateTime` |  | |  | `cancl` |  |  |
| `PrvdrContrItmWthdrwlDateTime` |  | |  | `withdrawn_at` |  |  |
| `CAProviderContractStatus` |  | |  | `status` |  |  |
| `CAProviderContractItemText` |  | |  | `vtitt` |  |  |
| `ContractAccount` |  | |  | `vkont` |  |  |
| `CAPrepaidAccount` |  | |  | `ppacc` |  |  |
| `CATechnicalResourceGroup` |  | |  | `vttrg` |  |  |
| `CAServiceRecipient` |  | |  | `srvrp` |  |  |
| `CAAddressIDOfServiceRecipient` |  | |  | `adrsr` |  |  |
| `PrvdrContrItmCorrespncRcpnt` |  | |  | `def_rec` |  |  |
| `AddrIDOfCorrespncRcpnt` |  | |  | `def_rec_adrnr` |  |  |
| `CAProduct` |  | |  | `prdnr` |  |  |
| `ProductConfiguration` |  | |  | `cuobj` |  |  |
| `CASalesPackageProduct` |  | |  | `prdnr_sp` |  |  |
| `CAMasterAgreement` |  | |  | `makey` |  |  |
| `CAMasterAgreementProduct` |  | |  | `maprd` |  |  |
| `CAPartnerSettlementRule` |  | |  | `ptsrl` |  |  |
| `CASharingContract` |  | |  | `vtkrf` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `CAReceivingCountry` |  | |  | `landl` |  |  |
| `TaxCountry` |  | |  | `tax_country` |  |  |
| `CASubscriptionChargeType` |  | |  | `charge_type` |  |  |
| `BusinessSolutionOrder` |  | |  | `solution_order_id` |  |  |
| `BusinessSolutionOrderItem` |  | |  | `solution_order_item_id` |  |  |
| `SoldProduct` |  | |  | `matnr_copa` |  |  |
| `RevenueRecognitionKey` |  | |  | `rev_rec_key` |  |  |
| `EBRRResultAnalysisInternalID` |  | |  | `rev_rec_key` |  |  |
| `EBRRIsBundleActive` |  | |  | `bundling` |  |  |
| `CAProviderContractQuantity` |  | |  | `quantity` |  |  |
| `CAProviderContractQuantityUnit` |  | |  | `quantity_unit` |  |  |
| `DistrSystOperatorBP` |  | |  | `uti_dso_bp` |  |  |
| `DistrSystOperatorMarketCommID` |  | |  | `uti_dso_maco_id` |  |  |
| `MeterOperatorBusinessPartner` |  | |  | `uti_metop_bp` |  |  |
| `MeterOperatorMarketCommID` |  | |  | `uti_metop_maco_id` |  |  |
| `MarketLocationIdentifier` |  | |  | `uti_malo_id` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `CAIntcoCompanyCodeSupplying` |  | |  | `ico_bukrs_sup` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `Segment` |  | |  | `segmt` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `CAPrvdrContrSalesAreaAttrib1` |  | |  | `vber1` |  |  |
| `CAPrvdrContrSalesAreaAttrib2` |  | |  | `vber2` |  |  |
| `WBSElementInternalID` |  | |  | `cast( ps_psp_pnr as fis_wbsint_no_conv preserving type )` |  |  |
| `InternalOrder` |  | |  | `aufnr` |  |  |
| `CAStandardDivision` |  | |  | `stdsp` |  |  |
| `PrvdrContrItmIsRlvtForPrfSgDrv` |  | |  | `x_vt_copa` |  |  |
| `CABillgCycle` |  | |  | `cycle` |  |  |
| `CALastDayOfBillingPeriod` |  | |  | `cycle_day` |  |  |
| `CABillgCyclePeriodStartDate` |  | |  | `cycle_date` |  |  |
| `CAInvcgSchedule` |  | |  | `inv_schedule` |  |  |
| `CARatingArea` |  | |  | `rating_area` |  |  |
| `CABillgPlnNumber` |  | |  | `billplanno` |  |  |
| `CAConsumptionBillgSoldToParty` |  | |  | `cb_soldto` |  |  |
| `CAConsumptionBillgInvoiceRcpnt` |  | |  | `cb_billto` |  |  |
| `ConsumptionBillingPaymentTerms` |  | |  | `cb_dzterm` |  |  |
| `CnsmpnBillgBillableControl` |  | |  | `cb_bemot` |  |  |
| `ConsumptionBillingSEPAMandate` |  | |  | `cb_mndid` |  |  |
| `CAConsumptionBillgPaymentCard` |  | |  | `cb_ccard_id` |  |  |
| `CAIsRevenueAccountingRelevant` |  | |  | `rarel` |  |  |
| `CARevenueAcctgMigrationPackage` |  | |  | `ra_mig_package` |  |  |
| `RevenueAccountingRefType` |  | |  | `ra_reftype` |  |  |
| `CARevenueAccountingRefType` |  | |  | `ra_reftype` |  |  |
| `RevenueAccountingReference` |  | |  | `ra_refid` |  |  |
| `CARevenueAcctgDocumentItem` |  | |  | `ra_srcdoc_id` |  |  |
| `TransactionPriceCurrency` |  | |  | `trprc_curr` |  |  |
| `TransactionPrice` |  | |  | `trprc` |  |  |
| `TotalTransactionPrice` |  | |  | `trprc_total` |  |  |
| `TransacPriceRcrrcPerdTimeUnit` |  | |  | `trprc_freq_unit` |  |  |
| `TransacPriceRcrrcPerdDuration` |  | |  | `trprc_freq_duration` |  |  |
| `StandAloneSellingPriceCurrency` |  | |  | `ssprc_curr` |  |  |
| `StandAloneSellingPrice` |  | |  | `ssprc` |  |  |
| `TotalStandAloneSellingPrice` |  | |  | `ssprc_total` |  |  |
| `SSPriceRecurrencePerdTimeUnit` |  | |  | `ssprc_freq_unit` |  |  |
| `SSPriceRecurrencePerdDuration` |  | |  | `ssprc_freq_duration` |  |  |
| `CAPrvdrContrItmChgReason` |  | |  | `chrsn` |  |  |
| `CAStartOfDurationDateTime` |  | |  | `valfrom_ctrterm` |  |  |
| `CAEndOfDurationDateTime` |  | |  | `valto_ctrterm` |  |  |
| `CARevnAcctgRecrrgServiceType` |  | |  | `recurr_service_type` |  |  |
| `CARevnAcctgTransfRecordOrigin` |  | |  | `ra_oi_orig` |  |  |
| `CAOriginOfPaymentMasterData` |  | |  | `pay_par_active` |  |  |
| `PaymentCondition` |  | |  | `zahlkond` |  |  |
| `CAPaymentMethodForIncgPayment` |  | |  | `ezawe` |  |  |
| `CAAlternativePayer` |  | |  | `abwre` |  |  |
| `CAAddressIDOfAlternativePayer` |  | |  | `adrre` |  |  |
| `CABankIDForIncomingPayments` |  | |  | `ebvty` |  |  |
| `SEPAMandate` |  | |  | `mndid` |  |  |
| `CAPaymentCardIDForIncomingPayt` |  | |  | `ccard_id` |  |  |
| `CAPaymentMethodForOutgPayment` |  | |  | `azawe` |  |  |
| `CAAlternativePayee` |  | |  | `abwra` |  |  |
| `CAAddressIDOfAlternativePayee` |  | |  | `adrra` |  |  |
| `CABankIDForOutgoingPayments` |  | |  | `abvty` |  |  |
| `CAPaymentCardIDForOutgoingPayt` |  | |  | `ccard_out` |  |  |
| `CAKeyForPaymentCardSupplement` |  | |  | `pcard_guid` |  |  |
| `CAOriginOfDunningMasterData` |  | |  | `dunn_par_active` |  |  |
| `CADunningProcedure` |  | |  | `mahnv` |  |  |
| `CAServiceDisconncnIsProhibited` |  | |  | `xdiscoexempt` |  |  |
| `CACollectionStrategy` |  | |  | `strat` |  |  |
| `CACollectionsMasterDataGroup` |  | |  | `cmgrp` |  |  |
| `CACollectionsContactPerson` |  | |  | `cpers` |  |  |
| `PurchaseOrderByCustomer` |  | |  | `bstkd` |  |  |
| `CustomerPurchaseOrderDate` |  | |  | `bstdk` |  |  |
| `_BillgPln` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_BillgCycle` | | ✓ | | | | |
| `_CADunningMasterDataOrigin` | | ✓ | | | | |
| `_CADunningProcedure` | | ✓ | | | | |
| `_CACollectionStrategy` | | ✓ | | | | |
| `_CACollMasterDataGroup` | | ✓ | | | | |
| `_CACollectionsContactPerson` | | ✓ | | | | |
| `_InvcgSchedule` | | ✓ | | | | |
| `_CAPaymentMasterDataOrigin` | | ✓ | | | | |
| `_CAPaymentMethod` | | ✓ | | | | |
| `_CARevnAcctgServiceType` | | ✓ | | | | |
| `_CARevnAcctgTransfRecdOrigin` | | ✓ | | | | |
| `_CARatingArea` | | ✓ | | | | |
| `_CASubscriptionChargeType` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_CompCodeSup` | | ✓ | | | | |
| `_ContrAcc` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_PaymentCondition` | | ✓ | | | | |
| `_PrvdrContr` | | ✓ | | | | |
| `_ProviderContractStatus` | | ✓ | | | | |
| `_PrvdrContrItemChgReason` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PCoExtension` | `E_CAProviderContractItem` | [1..1] |
| `_BillgPln` | `I_CABillgPln` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_BillgCycle` | `I_CABillgCycle` | [0..1] |
| `_CADunningMasterDataOrigin` | `I_CADunningMasterDataOrigin` | [0..1] |
| `_CADunningProcedure` | `I_CADunningProcedure` | [0..1] |
| `_CACollectionStrategy` | `I_CACollectionStrategy` | [0..1] |
| `_CACollMasterDataGroup` | `I_CACollMasterDataGroup` | [0..1] |
| `_CACollectionsContactPerson` | `I_BusinessPartner` | [0..1] |
| `_InvcgSchedule` | `I_CAInvcgSchedule` | [0..1] |
| `_CAPaymentMasterDataOrigin` | `I_CAPaymentMasterDataOrigin` | [0..1] |
| `_CAPaymentMethod` | `I_CAPaymentMethod` | [0..1] |
| `_CARevnAcctgServiceType` | `I_CARevnAcctgServiceType` | [0..1] |
| `_CARevnAcctgTransfRecdOrigin` | `I_CARevnAcctgTransfRecdOrigin` | [0..1] |
| `_CARatingArea` | `I_CARatingArea` | [1..1] |
| `_CASubscriptionChargeType` | `I_CASubscriptionChargeType` | [1..1] |
| `_CompCode` | `I_CompanyCode` | [1..1] |
| `_CompCodeSup` | `I_CompanyCode` | [0..1] |
| `_ContrAcc` | `I_ContractAccountHeader` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_PaymentCondition` | `I_PaymentCondition` | [1..1] |
| `_PrvdrContr` | `I_ProviderContract` | [1..1] |
| `_ProviderContractStatus` | `I_ProviderContractStatus` | [1..1] |
| `_PrvdrContrItemChgReason` | `I_PrvdrContrItemChgReason` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |

## Source Code

```abap
@AbapCatalog: { compiler.compareFilter:true,
                //preserveKey:true,
                sqlViewName: 'IPRVDRCONTRI' }

@AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking : #REQUIRED }

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Provider Contract Item'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { representativeKey: 'ProviderContractItem',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #C,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view I_ProviderContractItem
  as select from dfkk_vt_i

  association [1..1] to E_CAProviderContractItem      as _PCoExtension                on  $projection.ProviderContract     = _PCoExtension.CAProviderContract
                                                                                      and $projection.ProviderContractItem = _PCoExtension.CAProviderContractItemNumber
  association [0..1] to I_CABillgPln                  as _BillgPln                    on  $projection.CABillgPlnNumber = _BillgPln.CABillgPlnNumber
  association [0..1] to I_BusinessArea                as _BusinessArea                on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_CABillgCycle                as _BillgCycle                  on  $projection.CABillgCycle = _BillgCycle.CABillgCycle
  association [0..1] to I_CADunningMasterDataOrigin   as _CADunningMasterDataOrigin   on  $projection.CAOriginOfDunningMasterData = _CADunningMasterDataOrigin.CAOriginOfDunningMasterData
  association [0..1] to I_CADunningProcedure          as _CADunningProcedure          on  $projection.CADunningProcedure = _CADunningProcedure.CADunningProcedure
  association [0..1] to I_CACollectionStrategy        as _CACollectionStrategy        on  $projection.CACollectionStrategy = _CACollectionStrategy.CACollectionStrategy
  association [0..1] to I_CACollMasterDataGroup       as _CACollMasterDataGroup       on  $projection.CACollectionsMasterDataGroup = _CACollMasterDataGroup.CACollectionsMasterDataGroup
  association [0..1] to I_BusinessPartner             as _CACollectionsContactPerson  on  $projection.CACollectionsContactPerson = _CACollectionsContactPerson.BusinessPartner
  association [0..1] to I_CAInvcgSchedule             as _InvcgSchedule               on  $projection.CAInvcgSchedule = _InvcgSchedule.CAInvcgSchedule
  association [0..1] to I_CAPaymentMasterDataOrigin   as _CAPaymentMasterDataOrigin   on  $projection.CAOriginOfPaymentMasterData = _CAPaymentMasterDataOrigin.CAOriginOfPaymentMasterData
  association [0..1] to I_CAPaymentMethod             as _CAPaymentMethod             on  $projection.CAPaymentMethodForIncgPayment = _CAPaymentMethod.CAPaymentMethod
                                                                                      and $projection.CAReceivingCountry            = _CAPaymentMethod.Country
  association [0..1] to I_CARevnAcctgServiceType      as _CARevnAcctgServiceType      on  $projection.CARevnAcctgRecrrgServiceType = _CARevnAcctgServiceType.CARevenueAccountingServiceType
  association [0..1] to I_CARevnAcctgTransfRecdOrigin as _CARevnAcctgTransfRecdOrigin on  $projection.CARevnAcctgTransfRecordOrigin = _CARevnAcctgTransfRecdOrigin.CARevnAcctgTransfRecordOrigin
  association [1..1] to I_CARatingArea                as _CARatingArea                on  $projection.CARatingArea = _CARatingArea.CARatingArea
  association [1..1] to I_CASubscriptionChargeType    as _CASubscriptionChargeType    on  $projection.CASubscriptionChargeType = _CASubscriptionChargeType.CASubscriptionChargeType
  association [1..1] to I_CompanyCode                 as _CompCode                    on  $projection.CompanyCode = _CompCode.CompanyCode
  association [0..1] to I_CompanyCode                 as _CompCodeSup                 on  $projection.CAIntcoCompanyCodeSupplying = _CompCodeSup.CompanyCode
  association [1..1] to I_ContractAccountHeader       as _ContrAcc                    on  $projection.ContractAccount = _ContrAcc.ContractAccount
  association [0..1] to I_Country                     as _Country                     on  $projection.CAReceivingCountry = _Country.Country
  association [0..1] to I_Division                    as _Division                    on  $projection.Division = _Division.Division
  association [1..1] to I_PaymentCondition            as _PaymentCondition            on  $projection.PaymentCondition = _PaymentCondition.PaymentCondition
  association [1..1] to I_ProviderContract            as _PrvdrContr                  on  $projection.ProviderContract = _PrvdrContr.ProviderContract
  association [1..1] to I_ProviderContractStatus      as _ProviderContractStatus      on  $projection.CAProviderContractStatus = _ProviderContractStatus.CAProviderContractStatus
  association [0..1] to I_PrvdrContrItemChgReason     as _PrvdrContrItemChgReason     on  $projection.CAPrvdrContrItmChgReason = _PrvdrContrItemChgReason.CAPrvdrContrItmChgReason
  association [0..1] to I_Segment                     as _Segment                     on  $projection.Segment = _Segment.Segment

{
      @ObjectModel.foreignKey.association: '_PrvdrContr'
  key vtkey                                                    as ProviderContract,
  key vtpos                                                    as ProviderContractItem,

      //    administration data
      erdat                                                    as CreationDate,
      cast(ertim as ttet_dt_cr_time preserving type )          as CreationTime,
      ernam                                                    as CreatedByUser,
      aedat                                                    as LastChangeDate,
      aetim                                                    as LastChangeTime,
      aenam                                                    as LastChangedByUser,

      //    General data
      vtpid                                                    as CAProviderContractItemUUID,
      papid                                                    as CAPrvdrContrParentItemUUID,
      valfr                                                    as CAPrvdrContrItmValidFromDteTme,
      valto                                                    as CAPrvdrContrItmValidToDateTime,
      cancl                                                    as CAPrvdrContrItemCanclnDateTime,
      withdrawn_at                                             as PrvdrContrItmWthdrwlDateTime,
      @ObjectModel.foreignKey.association: '_ProviderContractStatus'
      status                                                   as CAProviderContractStatus,
      vtitt                                                    as CAProviderContractItemText,
      @ObjectModel.foreignKey.association: '_ContrAcc'
      vkont                                                    as ContractAccount,
      ppacc                                                    as CAPrepaidAccount,
      vttrg                                                    as CATechnicalResourceGroup,
      srvrp                                                    as CAServiceRecipient,
      adrsr                                                    as CAAddressIDOfServiceRecipient,
      def_rec                                                  as PrvdrContrItmCorrespncRcpnt,
      def_rec_adrnr                                            as AddrIDOfCorrespncRcpnt,
      prdnr                                                    as CAProduct,
      cuobj                                                    as ProductConfiguration,
      prdnr_sp                                                 as CASalesPackageProduct,
      makey                                                    as CAMasterAgreement,
      maprd                                                    as CAMasterAgreementProduct,
      ptsrl                                                    as CAPartnerSettlementRule,
      vtkrf                                                    as CASharingContract,
      txjcd                                                    as TaxJurisdiction,
      @ObjectModel.foreignKey.association: '_Country'
      landl                                                    as CAReceivingCountry,
      tax_country                                              as TaxCountry,
      @ObjectModel.foreignKey.association: '_CASubscriptionChargeType'
      charge_type                                              as CASubscriptionChargeType,

      solution_order_id                                        as BusinessSolutionOrder,
      solution_order_item_id                                   as BusinessSolutionOrderItem,
      matnr_copa                                               as SoldProduct,
      @API.element: {
        successor: 'EBRRResultAnalysisInternalID',
        releaseState: #DEPRECATED }
      @VDM.lifecycle: {
        status: #DEPRECATED,
        successor: 'EBRRResultAnalysisInternalID' }
      rev_rec_key                                              as RevenueRecognitionKey,
      rev_rec_key                                              as EBRRResultAnalysisInternalID,

      bundling                                                 as EBRRIsBundleActive,

      @Semantics.quantity.unitOfMeasure: 'CAProviderContractQuantityUnit'
      quantity                                                 as CAProviderContractQuantity,
      @Semantics.unitOfMeasure: true
      quantity_unit                                            as CAProviderContractQuantityUnit,

      //    General data 2 (Utility Fields)
      uti_dso_bp                                               as DistrSystOperatorBP,
      uti_dso_maco_id                                          as DistrSystOperatorMarketCommID,
      uti_metop_bp                                             as MeterOperatorBusinessPartner,
      uti_metop_maco_id                                        as MeterOperatorMarketCommID,
      uti_malo_id                                              as MarketLocationIdentifier,

      //    Organizational data
      vkorg                                                    as SalesOrganization,
      vtweg                                                    as DistributionChannel,
      @ObjectModel.foreignKey.association: '_CompCode'
      bukrs                                                    as CompanyCode,
      @ObjectModel.foreignKey.association: '_CompCodeSup'
      ico_bukrs_sup                                            as CAIntcoCompanyCodeSupplying,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                    as BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
      segmt                                                    as Segment,
      //      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prctr                                                    as ProfitCenter,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                                    as Division,
      vber1                                                    as CAPrvdrContrSalesAreaAttrib1,
      vber2                                                    as CAPrvdrContrSalesAreaAttrib2,
      //ps_psp_pnr                                                    as WBSElementInternalID,  //has conversion exit, not allowed anymore
      cast( ps_psp_pnr as fis_wbsint_no_conv preserving type ) as WBSElementInternalID,
      aufnr                                                    as InternalOrder,
      stdsp                                                    as CAStandardDivision,
      @Semantics.booleanIndicator
      x_vt_copa                                                as PrvdrContrItmIsRlvtForPrfSgDrv,

      //    Billing and Ivoicing data
      @ObjectModel.foreignKey.association: '_BillgCycle'
      cycle                                                    as CABillgCycle,
      cycle_day                                                as CALastDayOfBillingPeriod,
      cycle_date                                               as CABillgCyclePeriodStartDate,
      @ObjectModel.foreignKey.association: '_InvcgSchedule'
      inv_schedule                                             as CAInvcgSchedule,
      @ObjectModel.foreignKey.association: '_CARatingArea'
      rating_area                                              as CARatingArea,
      @ObjectModel.foreignKey.association: '_BillgPln'
      billplanno                                               as CABillgPlnNumber,
      //    Consumption Billing
      cb_soldto                                                as CAConsumptionBillgSoldToParty,
      cb_billto                                                as CAConsumptionBillgInvoiceRcpnt,
      cb_dzterm                                                as ConsumptionBillingPaymentTerms,
      cb_bemot                                                 as CnsmpnBillgBillableControl,
      //cb_dzterm                                                     as PaymentTerms,
      //cb_bemot                                                      as BillableControl,
      cb_mndid                                                 as ConsumptionBillingSEPAMandate,
      cb_ccard_id                                              as CAConsumptionBillgPaymentCard,
      //cb_ccard_id                                                   as CAPaymentCard,


      //    Revenue Accounting data
      @Semantics.booleanIndicator
      rarel                                                    as CAIsRevenueAccountingRelevant,
      ra_mig_package                                           as CARevenueAcctgMigrationPackage,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'CARevenueAccountingRefType'
      ra_reftype                                               as RevenueAccountingRefType,
      ra_reftype                                               as CARevenueAccountingRefType,
      ra_refid                                                 as RevenueAccountingReference,
      ra_srcdoc_id                                             as CARevenueAcctgDocumentItem,
      @Semantics.currencyCode: true
      trprc_curr                                               as TransactionPriceCurrency,
      @Semantics.amount.currencyCode: 'TransactionPriceCurrency'
      trprc                                                    as TransactionPrice,
      @Semantics.amount.currencyCode: 'TransactionPriceCurrency'
      trprc_total                                              as TotalTransactionPrice,
      trprc_freq_unit                                          as TransacPriceRcrrcPerdTimeUnit,
      //      @Semantics.quantity.unitOfMeasure: 'TransacPriceRcrrcPerdTimeUnit'
      trprc_freq_duration                                      as TransacPriceRcrrcPerdDuration,
      @Semantics.currencyCode: true
      ssprc_curr                                               as StandAloneSellingPriceCurrency,
      @Semantics.amount.currencyCode: 'StandAloneSellingPriceCurrency'
      ssprc                                                    as StandAloneSellingPrice,
      @Semantics.amount.currencyCode: 'StandAloneSellingPriceCurrency'
      ssprc_total                                              as TotalStandAloneSellingPrice,
      ssprc_freq_unit                                          as SSPriceRecurrencePerdTimeUnit,
      //      @Semantics.quantity.unitOfMeasure: 'SSPriceRecurrencePerdTimeUnit'
      ssprc_freq_duration                                      as SSPriceRecurrencePerdDuration,
      @ObjectModel.foreignKey.association: '_PrvdrContrItemChgReason'
      chrsn                                                    as CAPrvdrContrItmChgReason,
      valfrom_ctrterm                                          as CAStartOfDurationDateTime,
      valto_ctrterm                                            as CAEndOfDurationDateTime,
      @ObjectModel.foreignKey.association: '_CARevnAcctgServiceType'
      recurr_service_type                                      as CARevnAcctgRecrrgServiceType,
      @ObjectModel.foreignKey.association: '_CARevnAcctgTransfRecdOrigin'
      ra_oi_orig                                               as CARevnAcctgTransfRecordOrigin,

      //   Payment Data
      @ObjectModel.foreignKey.association: '_CAPaymentMasterDataOrigin'
      pay_par_active                                           as CAOriginOfPaymentMasterData,
      @ObjectModel.foreignKey.association: '_PaymentCondition'
      zahlkond                                                 as PaymentCondition,
      @ObjectModel.foreignKey.association: '_CAPaymentMethod'
      ezawe                                                    as CAPaymentMethodForIncgPayment,
      abwre                                                    as CAAlternativePayer,
      adrre                                                    as CAAddressIDOfAlternativePayer,
      ebvty                                                    as CABankIDForIncomingPayments,
      mndid                                                    as SEPAMandate,
      ccard_id                                                 as CAPaymentCardIDForIncomingPayt,
      azawe                                                    as CAPaymentMethodForOutgPayment,
      abwra                                                    as CAAlternativePayee,
      adrra                                                    as CAAddressIDOfAlternativePayee,
      abvty                                                    as CABankIDForOutgoingPayments,
      ccard_out                                                as CAPaymentCardIDForOutgoingPayt,
      pcard_guid                                               as CAKeyForPaymentCardSupplement,


      //    Dunning Data
      @ObjectModel.foreignKey.association: '_CADunningMasterDataOrigin'
      dunn_par_active                                          as CAOriginOfDunningMasterData,
      @ObjectModel.foreignKey.association: '_CADunningProcedure'
      mahnv                                                    as CADunningProcedure,
      xdiscoexempt                                             as CAServiceDisconncnIsProhibited,
      @ObjectModel.foreignKey.association: '_CACollectionStrategy'
      strat                                                    as CACollectionStrategy,
      @ObjectModel.foreignKey.association: '_CACollMasterDataGroup'
      cmgrp                                                    as CACollectionsMasterDataGroup,
      @ObjectModel.foreignKey.association: '_CACollectionsContactPerson'
      cpers                                                    as CACollectionsContactPerson,

      //    PEPPOL
      bstkd                                                    as PurchaseOrderByCustomer,
      bstdk                                                    as CustomerPurchaseOrderDate,

      // Associations
      _BillgCycle,
      _BillgPln,
      _BusinessArea,
      _CADunningMasterDataOrigin,
      _CADunningProcedure,
      _CARatingArea,
      _CAPaymentMasterDataOrigin,
      _CARevnAcctgServiceType,
      _CARevnAcctgTransfRecdOrigin,
      _CASubscriptionChargeType,
      _ContrAcc,
      _CompCode,
      _CompCodeSup,
      _Country,
      _Division,
      _InvcgSchedule,
      _PaymentCondition,
      _CAPaymentMethod,
      _ProviderContractStatus,
      _PrvdrContr,
      _PrvdrContrItemChgReason,
      _Segment,
      _CACollectionStrategy,
      _CACollMasterDataGroup,
      _CACollectionsContactPerson
}
```
