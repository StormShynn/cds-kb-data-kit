---
name: I_CAPROVIDERCONTRACTITEM
description: "Caprovidercontractitem"
app_component: FI-CA-2CL
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
  - FI
  - FI-CA
  - interface-view
  - contract
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPROVIDERCONTRACTITEM

**Caprovidercontractitem**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
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
| `CAProviderContract` | ✓ | |  | `ProviderContract` |  |  |
| `CAProviderContractItemNumber` | ✓ | |  | `ProviderContractItem` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `CAProviderContractItemUUID` |  | |  |  |  |  |
| `CAPrvdrContrParentItemUUID` |  | |  |  |  |  |
| `CAPrvdrContrItmValidFromDteTme` |  | |  |  |  |  |
| `CAPrvdrContrItmValidToDateTime` |  | |  |  |  |  |
| `CAPrvdrContrItemCanclnDateTime` |  | |  |  |  |  |
| `PrvdrContrItmWthdrwlDateTime` |  | |  |  |  |  |
| `CAProviderContractStatus` |  | |  |  |  |  |
| `CAProviderContractItemText` |  | |  |  |  |  |
| `ContractAccount` |  | |  |  |  |  |
| `CAPrepaidAccount` |  | |  |  |  |  |
| `CATechnicalResourceGroup` |  | |  |  |  |  |
| `CAServiceRecipient` |  | |  |  |  |  |
| `CAAddressIDOfServiceRecipient` |  | |  |  |  |  |
| `PrvdrContrItmCorrespncRcpnt` |  | |  |  |  |  |
| `AddrIDOfCorrespncRcpnt` |  | |  |  |  |  |
| `CAProduct` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `CASalesPackageProduct` |  | |  |  |  |  |
| `CAMasterAgreement` |  | |  |  |  |  |
| `CAMasterAgreementProduct` |  | |  |  |  |  |
| `CAPartnerSettlementRule` |  | |  |  |  |  |
| `CASharingContract` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `CAReceivingCountry` |  | |  |  |  |  |
| `TaxCountry` |  | |  |  |  |  |
| `CASubscriptionChargeType` |  | |  |  |  |  |
| `CAProviderContractQuantity` |  | |  |  |  |  |
| `CAProviderContractQuantityUnit` |  | |  |  |  |  |
| `DistrSystOperatorBP` |  | |  |  |  |  |
| `DistrSystOperatorMarketCommID` |  | |  |  |  |  |
| `MeterOperatorBusinessPartner` |  | |  |  |  |  |
| `MeterOperatorMarketCommID` |  | |  |  |  |  |
| `MarketLocationIdentifier` |  | |  |  |  |  |
| `SoldProduct` |  | |  |  |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `BusinessSolutionOrderItem` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CAIntcoCompanyCodeSupplying` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `Segment` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `CAPrvdrContrSalesAreaAttrib1` |  | |  |  |  |  |
| `CAPrvdrContrSalesAreaAttrib2` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `InternalOrder` |  | |  |  |  |  |
| `CAStandardDivision` |  | |  |  |  |  |
| `PrvdrContrItmIsRlvtForPrfSgDrv` |  | |  |  |  |  |
| `CABillgCycle` |  | |  |  |  |  |
| `CALastDayOfBillingPeriod` |  | |  |  |  |  |
| `CABillgCyclePeriodStartDate` |  | |  |  |  |  |
| `CAInvcgSchedule` |  | |  |  |  |  |
| `CARatingArea` |  | |  |  |  |  |
| `CABillgPlnNumber` |  | |  |  |  |  |
| `CAConsumptionBillgSoldToParty` |  | |  |  |  |  |
| `CAConsumptionBillgInvoiceRcpnt` |  | |  |  |  |  |
| `ConsumptionBillingPaymentTerms` |  | |  |  |  |  |
| `CnsmpnBillgBillableControl` |  | |  |  |  |  |
| `ConsumptionBillingSEPAMandate` |  | |  |  |  |  |
| `CAConsumptionBillgPaymentCard` |  | |  |  |  |  |
| `CAIsRevenueAccountingRelevant` |  | |  |  |  |  |
| `CARevenueAcctgMigrationPackage` |  | |  |  |  |  |
| `RevenueAccountingRefType` |  | |  |  |  |  |
| `CARevenueAccountingRefType` |  | |  |  |  |  |
| `RevenueAccountingReference` |  | |  |  |  |  |
| `CARevenueAcctgDocumentItem` |  | |  |  |  |  |
| `TransactionPriceCurrency` |  | |  |  |  |  |
| `TransactionPrice` |  | |  |  |  |  |
| `TotalTransactionPrice` |  | |  |  |  |  |
| `TransacPriceRcrrcPerdTimeUnit` |  | |  |  |  |  |
| `TransacPriceRcrrcPerdDuration` |  | |  |  |  |  |
| `StandAloneSellingPriceCurrency` |  | |  |  |  |  |
| `StandAloneSellingPrice` |  | |  |  |  |  |
| `TotalStandAloneSellingPrice` |  | |  |  |  |  |
| `SSPriceRecurrencePerdTimeUnit` |  | |  |  |  |  |
| `SSPriceRecurrencePerdDuration` |  | |  |  |  |  |
| `CAPrvdrContrItmChgReason` |  | |  |  |  |  |
| `CAStartOfDurationDateTime` |  | |  |  |  |  |
| `CAEndOfDurationDateTime` |  | |  |  |  |  |
| `CARevnAcctgRecrrgServiceType` |  | |  |  |  |  |
| `CARevnAcctgTransfRecordOrigin` |  | |  |  |  |  |
| `CAOriginOfPaymentMasterData` |  | |  |  |  |  |
| `PaymentCondition` |  | |  |  |  |  |
| `CAPaymentMethodForIncgPayment` |  | |  |  |  |  |
| `CAAlternativePayer` |  | |  |  |  |  |
| `CAAddressIDOfAlternativePayer` |  | |  |  |  |  |
| `CABankIDForIncomingPayments` |  | |  |  |  |  |
| `SEPAMandate` |  | |  |  |  |  |
| `CAPaymentCardIDForIncomingPayt` |  | |  |  |  |  |
| `CAPaymentMethodForOutgPayment` |  | |  |  |  |  |
| `CAAlternativePayee` |  | |  |  |  |  |
| `CAAddressIDOfAlternativePayee` |  | |  |  |  |  |
| `CABankIDForOutgoingPayments` |  | |  |  |  |  |
| `CAPaymentCardIDForOutgoingPayt` |  | |  |  |  |  |
| `CAKeyForPaymentCardSupplement` |  | |  |  |  |  |
| `CAOriginOfDunningMasterData` |  | |  |  |  |  |
| `CADunningProcedure` |  | |  |  |  |  |
| `CAServiceDisconncnIsProhibited` |  | |  |  |  |  |
| `CACollectionStrategy` |  | |  |  |  |  |
| `CACollectionsMasterDataGroup` |  | |  |  |  |  |
| `CACollectionsContactPerson` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `_PrvdrContr` | | ✓ | | | | |
| `_ProviderContractStatus` | | ✓ | | | | |
| `_ContrAcc` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_CASubscriptionChargeType` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_CompCodeSup` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_BillgCycle` | | ✓ | | | | |
| `_InvcgSchedule` | | ✓ | | | | |
| `_CARatingArea` | | ✓ | | | | |
| `_BillgPln` | | ✓ | | | | |
| `_PrvdrContrItemChgReason` | | ✓ | | | | |
| `_CARevnAcctgServiceType` | | ✓ | | | | |
| `_CARevnAcctgTransfRecdOrigin` | | ✓ | | | | |
| `_CAPaymentMasterDataOrigin` | | ✓ | | | | |
| `_PaymentCondition` | | ✓ | | | | |
| `_CAPaymentMethod` | | ✓ | | | | |
| `_CADunningMasterDataOrigin` | | ✓ | | | | |
| `_CADunningProcedure` | | ✓ | | | | |
| `_CACollectionStrategy` | | ✓ | | | | |
| `_CACollMasterDataGroup` | | ✓ | | | | |
| `_CACollectionsContactPerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrvdrContr` | `I_CAProviderContractHeader` | [1..1] |
| `_PCoExtension` | `E_CAProviderContractItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICAPRVDRCONTRI'

@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking : #REQUIRED,
                                  blockingIndicator: ['_PrvdrContr._BusinessPartner.IsBusinessPurposeCompleted'] } }

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Provider Contract Item'

@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true }

@Analytics: { dataCategory: #DIMENSION,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture.automatic: true },
              internalName: #LOCAL }

@ObjectModel: { representativeKey: 'CAProviderContractItemNumber',
                sapObjectNodeType.name: 'ContrAcctgProviderContractItem',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE ,
                                         #EXTRACTION_DATA_SOURCE,
                                         #ANALYTICAL_DIMENSION  ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #C,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view I_CAProviderContractItem
  as select from I_ProviderContractItem
  association [1..1] to I_CAProviderContractHeader as _PrvdrContr   on  $projection.CAProviderContract = _PrvdrContr.CAProviderContract
  association [1..1] to E_CAProviderContractItem   as _PCoExtension on  $projection.CAProviderContract           = _PCoExtension.CAProviderContract
                                                                    and $projection.CAProviderContractItemNumber = _PCoExtension.CAProviderContractItemNumber
{
      @ObjectModel.foreignKey.association: '_PrvdrContr'
  key ProviderContract     as CAProviderContract,
  key ProviderContractItem as CAProviderContractItemNumber,

      //    administration data
      CreationDate,
      CreationTime,
      CreatedByUser,
      LastChangeDate,
      LastChangeTime,
      LastChangedByUser,

      //    General data
      CAProviderContractItemUUID,
      CAPrvdrContrParentItemUUID,
      CAPrvdrContrItmValidFromDteTme,
      CAPrvdrContrItmValidToDateTime,
      CAPrvdrContrItemCanclnDateTime,
      PrvdrContrItmWthdrwlDateTime,
      CAProviderContractStatus,
      CAProviderContractItemText,
      @ObjectModel.foreignKey.association: '_ContrAcc'
      ContractAccount,
      CAPrepaidAccount,
      CATechnicalResourceGroup,
      CAServiceRecipient,
      CAAddressIDOfServiceRecipient,
      PrvdrContrItmCorrespncRcpnt,
      AddrIDOfCorrespncRcpnt,
      CAProduct,
      ProductConfiguration,
      CASalesPackageProduct,
      CAMasterAgreement,
      CAMasterAgreementProduct,
      CAPartnerSettlementRule,
      CASharingContract,
      TaxJurisdiction,
      CAReceivingCountry,
      TaxCountry,
      CASubscriptionChargeType,

      @Semantics.quantity.unitOfMeasure: 'CAProviderContractQuantityUnit'
      CAProviderContractQuantity,
      @Semantics.unitOfMeasure: true
      CAProviderContractQuantityUnit,

      //    General data 2
      DistrSystOperatorBP,
      DistrSystOperatorMarketCommID,
      MeterOperatorBusinessPartner,
      MeterOperatorMarketCommID,
      MarketLocationIdentifier,

      //     Subscription Billing
      SoldProduct,
      BusinessSolutionOrder,
      BusinessSolutionOrderItem,

      //    Organizational data
      SalesOrganization,
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_CompCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_CompCodeSup'
      CAIntcoCompanyCodeSupplying,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      //      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      CAPrvdrContrSalesAreaAttrib1,
      CAPrvdrContrSalesAreaAttrib2,
      //ps_psp_pnr                                                    as WBSElementInternalID,  //has conversion exit, not allowed anymore
      WBSElementInternalID,
      InternalOrder,
      CAStandardDivision,
      @Semantics.booleanIndicator
      PrvdrContrItmIsRlvtForPrfSgDrv,

      //    Billing and Ivoicing data
      @ObjectModel.foreignKey.association: '_BillgCycle'
      CABillgCycle,
      CALastDayOfBillingPeriod,
      CABillgCyclePeriodStartDate,
      @ObjectModel.foreignKey.association: '_InvcgSchedule'
      CAInvcgSchedule,
      CARatingArea,
      @ObjectModel.foreignKey.association: '_BillgPln'
      CABillgPlnNumber,
      //    Consumption Billing
      CAConsumptionBillgSoldToParty,
      CAConsumptionBillgInvoiceRcpnt,
      ConsumptionBillingPaymentTerms,
      CnsmpnBillgBillableControl,
      //cb_dzterm                                                     as PaymentTerms,
      //cb_bemot                                                      as BillableControl,
      ConsumptionBillingSEPAMandate,
      CAConsumptionBillgPaymentCard,
      //cb_ccard_id                                                   as CAPaymentCard,

      //    Revenue Accounting data
      CAIsRevenueAccountingRelevant,
      CARevenueAcctgMigrationPackage,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'CARevenueAccountingRefType'
      RevenueAccountingRefType,
      CARevenueAccountingRefType,
      RevenueAccountingReference,
      CARevenueAcctgDocumentItem,
      @Semantics.currencyCode: true
      TransactionPriceCurrency,
      @Semantics.amount.currencyCode: 'TransactionPriceCurrency'
      TransactionPrice,
      @Semantics.amount.currencyCode: 'TransactionPriceCurrency'
      TotalTransactionPrice,
      TransacPriceRcrrcPerdTimeUnit,
      //      @Semantics.quantity.unitOfMeasure: 'TransacPriceRcrrcPerdTimeUnit'
      TransacPriceRcrrcPerdDuration,
      @Semantics.currencyCode: true
      StandAloneSellingPriceCurrency,
      @Semantics.amount.currencyCode: 'StandAloneSellingPriceCurrency'
      StandAloneSellingPrice,
      @Semantics.amount.currencyCode: 'StandAloneSellingPriceCurrency'
      TotalStandAloneSellingPrice,
      SSPriceRecurrencePerdTimeUnit,
      //      @Semantics.quantity.unitOfMeasure: 'SSPriceRecurrencePerdTimeUnit'
      SSPriceRecurrencePerdDuration,
      CAPrvdrContrItmChgReason,
      CAStartOfDurationDateTime,
      CAEndOfDurationDateTime,
      CARevnAcctgRecrrgServiceType,
      CARevnAcctgTransfRecordOrigin,

      //   Payment Data
      CAOriginOfPaymentMasterData,
      PaymentCondition,
      CAPaymentMethodForIncgPayment,
      CAAlternativePayer,
      CAAddressIDOfAlternativePayer,
      CABankIDForIncomingPayments,
      SEPAMandate,
      CAPaymentCardIDForIncomingPayt,
      CAPaymentMethodForOutgPayment,
      CAAlternativePayee,
      CAAddressIDOfAlternativePayee,
      CABankIDForOutgoingPayments,
      CAPaymentCardIDForOutgoingPayt,
      CAKeyForPaymentCardSupplement,

      //    Dunning Data
      CAOriginOfDunningMasterData,
      CADunningProcedure,
      CAServiceDisconncnIsProhibited,
      CACollectionStrategy,
      CACollectionsMasterDataGroup,
      CACollectionsContactPerson,

      //    PEPPOL
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,

      // associations
      _PrvdrContr,
      _ProviderContractStatus,
      _ContrAcc,
      _Country,
      _CASubscriptionChargeType,
      _CompCode,
      _CompCodeSup,
      _BusinessArea,
      _Segment,
      _Division,
      _BillgCycle,
      _InvcgSchedule,
      _CARatingArea,
      _BillgPln,
      _PrvdrContrItemChgReason,
      _CARevnAcctgServiceType,
      _CARevnAcctgTransfRecdOrigin,
      _CAPaymentMasterDataOrigin,
      _PaymentCondition,
      _CAPaymentMethod,
      _CADunningMasterDataOrigin,
      _CADunningProcedure,
      _CACollectionStrategy,
      _CACollMasterDataGroup,
      _CACollectionsContactPerson
}
```
