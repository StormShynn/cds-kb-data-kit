---
name: I_CADOCUMENTGLITEM
description: "Cadocumentglitem"
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
  - document
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENTGLITEM

**Cadocumentglitem**

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
| `CADocumentNumber` | ✓ | |  | `opbel` |  |  |
| `CAGLItemNumber` | ✓ | |  | `opupk` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `BusinessPlace` |  | |  | `bupla` |  |  |
| `Segment` |  | |  | `segment` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `PartnerCompany` |  | |  | `vbund` |  |  |
| `GLAccount` |  | |  | `hkont` |  |  |
| `WBSElementInternalID` |  | |  | `cast(ps_psp_pnr as ps_s4_pspnr preserving type )` |  |  |
| `ValueDate` |  | |  | `valut` |  |  |
| `CAExchangeRate` |  | |  | `cast( abs( kursf ) as fis_absolute_exchangerate preserving type )` |  |  |
| `ExchRateIsIndirectQuotation` |  | |  | `cast( case when kursf < 0 then 'X' when kursf >= 0 then ' ' end as fis_indirect_quotation preserving type )` |  |  |
| `TransactionCurrency` |  | | `_CADocument` | `TransactionCurrency` |  |  |
| `Currency` |  | | `_CompanyCode` | `Currency` |  |  |
| `CAAmountInLocalCurrency` |  | |  | `betrh` |  |  |
| `CAAmountInTransactionCurrency` |  | |  | `betrw` |  |  |
| `CAAmountInSecondCurrency` |  | |  | `betr2` |  |  |
| `CAAmountInThirdCurrency` |  | |  | `betr3` |  |  |
| `CAAccountAssignmentCategory` |  | |  | `kontt` |  |  |
| `CAAccountAssignment` |  | |  | `kontl` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `SalesOrder` |  | |  | `kdauf` |  |  |
| `SalesOrderItem` |  | |  | `kdpos` |  |  |
| `CAReconciliationKey` |  | |  | `fikey` |  |  |
| `CAInternalPostingReasonCode` |  | |  | `intbu` |  |  |
| `CANegativePostingControlCode` |  | |  | `negbu` |  |  |
| `CAGLPostingCurrency` |  | |  | `pswsl` |  |  |
| `LedgerGroup` |  | |  | `ldgrp` |  |  |
| `ProfitabilitySegment_2` |  | |  | `paobjnr` |  |  |
| `ProfitabilitySegmentChanges` |  | |  | `pasubnr` |  |  |
| `PlanningLevel` |  | |  | `fdlev` |  |  |
| `CARepetitionGroup` |  | |  | `whgrp` |  |  |
| `CATransactionKeyAccountDetn` |  | |  | `ktosl` |  |  |
| `ConditionType` |  | |  | `kschl` |  |  |
| `CAIsSeparateLineItemInGL` |  | |  | `xeiph` |  |  |
| `QuantityInBaseUnit` |  | |  | `menge` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `CAGroupingKeyDocumentItems` |  | |  | `psgrp` |  |  |
| `TaxCode` |  | |  | `mwskz` |  |  |
| `CASupplementaryTaxCode` |  | |  | `mwszkz` |  |  |
| `CAWithholdingTaxSupplement` |  | |  | `qssew` |  |  |
| `CAOtherTaxCode` |  | |  | `strkz` |  |  |
| `CAGroupingCodeForTaxItems` |  | |  | `txgrp` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `CAEnteredTaxJurisdictionCode` |  | |  | `txjco` |  |  |
| `CATaxJurisdictionLevelCounter` |  | |  | `txcnt` |  |  |
| `CATaxExceptionID` |  | |  | `txexk` |  |  |
| `CATaxDate` |  | |  | `txdat` |  |  |
| `CATaxBaseAmountInLocalCurrency` |  | |  | `sbash` |  |  |
| `CATaxBaseAmount` |  | |  | `sbasw` |  |  |
| `CANonDeductibleTxAmtInDocCrcy` |  | |  | `ndtax` |  |  |
| `CANonDeductibleTxAmtInLoclCrcy` |  | |  | `ndtxh` |  |  |
| `CAContainsNonDeductibleInptTax` |  | |  | `xndtx` |  |  |
| `CATaxRate` |  | |  | `stprz` |  |  |
| `GrossIncomeTaxActivityCode` |  | |  | `gricd` |  |  |
| `EmploymentTaxDistributionType` |  | |  | `gityp` |  |  |
| `CATaxPortionInLocalCurrency` |  | |  | `sctax` |  |  |
| `CATaxPortionInTransCurrency` |  | |  | `sttax` |  |  |
| `CATaxIsCalculatedExternally` |  | |  | `xustpd` |  |  |
| `CAAltvExchangeRateSetCode` |  | |  | `xdexr` |  |  |
| `TaxCountry` |  | |  | `tax_country` |  |  |
| `TransToTaxCntryCrcyCnvrsnFctr` |  | |  | `taxc_factor` |  |  |
| `CAIsCashFlowItem` |  | |  | `xcsha` |  |  |
| `CACashFlowAccount` |  | |  | `reacc` |  |  |
| `CACashFlowCompanyCode` |  | |  | `rebuk` |  |  |
| `HouseBank` |  | |  | `hbkid` |  |  |
| `HouseBankAccount` |  | |  | `hktid` |  |  |
| `QuantitySignCode` |  | |  | `squan` |  |  |
| `BankStatementShortID` |  | |  | `kukey` |  |  |
| `BankStatementItem` |  | |  | `esnum` |  |  |
| `CashManagementLinkType` |  | |  | `ltype` |  |  |
| `CashManagementLink` |  | |  | `lnkid` |  |  |
| `CAItmIsCreatedByPostgInterface` |  | |  | `xintb` |  |  |
| `CAStatusOfEuroConversion` |  | |  | `eurou` |  |  |
| `CAProfitAnalysisUpdtIsDirect` |  | |  | `xcopa` |  |  |
| `CAInvcgGroupingKey` |  | |  | `invgr` |  |  |
| `CACtrlFieldForAcctAssgmtDistr` |  | |  | `aasta` |  |  |
| `CAUpdateMethodForFundsMgmt` |  | |  | `fmtyp` |  |  |
| `OriginalFinancialMgmtArea` |  | |  | `origfikrs` |  |  |
| `OriglYearForFinMgmtAcctAssgmt` |  | |  | `budgetyear` |  |  |
| `EarmarkedFundsDocument` |  | |  | `kblnr` |  |  |
| `ChartOfAccounts` |  | | `_CompanyCode` | `ChartOfAccounts` |  |  |
| `Country` |  | | `_CompanyCode` | `Country` |  |  |
| `TaxCalculationProcedure` |  | | `_CompanyCode._Country` | `TaxCalculationProcedure` |  |  |
| `ProfitabilitySegment` |  | |  | `cast( case when paobjnr > '9999999999' then '9999999999' else lpad( paobjnr, 10, '0' ) end as rkeobjnr_numc )` |  |  |
| `CAAltvExchangeRateForTaxItem` |  | |  | `xdexr` |  |  |
| `CATaxItemHasAltvExchangeRate` |  | |  | `xdexr` |  |  |
| `EarmarkedFunds` |  | |  | `kblnr` |  |  |
| `_AcctAssgmtCat` |  | |  | `_CAAccountAssignmentCategory` |  |  |
| `_CompCode` |  | |  | `_CompanyCode` |  |  |
| `_CompCodeCashFlow` |  | |  | `_CashFlowCompanyCode` |  |  |
| `_OtherTaxCode` |  | |  | `_CAOtherTaxCode` |  |  |
| `_WhldgTaxSuplmnt` |  | |  | `_CAWithholdingTaxSupplement` |  |  |
| `_BusinessArea` | | ✓ | | | | |
| `_CAAccountAssignmentCategory` | | ✓ | | | | |
| `_CAAcctAssgmtDistrCode` | | ✓ | | | | |
| `_CAAcctDetnTransKey` | | ✓ | | | | |
| `_CAAltvExchangeRateSetCode` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |
| `_CAEuroConversionStatus` | | ✓ | | | | |
| `_CAIntPostingReasonCode` | | ✓ | | | | |
| `_CANegativePostingCtrlCode` | | ✓ | | | | |
| `_CANonDcblInputTaxCode` | | ✓ | | | | |
| `_CAOtherTaxCode` | | ✓ | | | | |
| `_CAWithholdingTaxSupplement` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CashFlowCompanyCode` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_TaxCountry` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_GLPostingCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_CashFlowAccount` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_DocHeader` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_CAAccountAssignmentCategory` | `I_CAAccountAssignmentCategory` | [0..1] |
| `_CAAcctAssgmtDistrCode` | `I_CAAcctAssgmtDistrCode` | [0..1] |
| `_CAAcctDetnTransKey` | `I_CAAcctDetnTransKey` | [0..1] |
| `_CAAltvExchangeRateSetCode` | `I_CAAltvExchangeRateSetCode` | [0..1] |
| `_CADocument` | `I_CADocument` | [1..1] |
| `_CAEuroConversionStatus` | `I_CAEuroConversionStatus` | [1..1] |
| `_CAIntPostingReasonCode` | `I_CAIntPostingReasonCode` | [0..1] |
| `_CANegativePostingCtrlCode` | `I_CANegativePostingCtrlCode` | [0..1] |
| `_CANonDcblInputTaxCode` | `I_CANonDcblInputTaxCode` | [0..1] |
| `_CAOtherTaxCode` | `I_CAOtherTaxCode` | [0..1] |
| `_CAWithholdingTaxSupplement` | `I_CAWithholdingTaxSupplement` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_CashFlowCompanyCode` | `I_CompanyCode` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_TaxCountry` | `I_Country` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_GLPostingCurrency` | `I_Currency` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_GLAccount` | `I_GLAccount` | [1..1] |
| `_CashFlowAccount` | `I_GLAccount` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_PartnerCompany` | `I_Partnercompany` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_Extension` | `E_CADocumentGLItem` | [1..1] |
| `_DocHeader` | `I_CADocumentHeader` | [1..1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Document General Ledger Item'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'ContrAcctgDocumentGenLdgrItem',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { serviceQuality: #C,
                             sizeCategory: #XXL,
                             dataClass: #TRANSACTIONAL } }

@Search.searchable: true

@VDM.viewType: #BASIC

define view entity I_CADocumentGLItem
  as select from dfkkopk

  association [0..1] to I_BusinessArea                as _BusinessArea                on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_CAAccountAssignmentCategory as _CAAccountAssignmentCategory on  $projection.CAAccountAssignmentCategory = _CAAccountAssignmentCategory.CAAccountAssignmentCategory
  association [0..1] to I_CAAcctAssgmtDistrCode       as _CAAcctAssgmtDistrCode       on  $projection.CACtrlFieldForAcctAssgmtDistr = _CAAcctAssgmtDistrCode.CACtrlFieldForAcctAssgmtDistr
  association [0..1] to I_CAAcctDetnTransKey          as _CAAcctDetnTransKey          on  $projection.CATransactionKeyAccountDetn = _CAAcctDetnTransKey.CATransactionKeyAccountDetn
  association [0..1] to I_CAAltvExchangeRateSetCode   as _CAAltvExchangeRateSetCode   on  $projection.CAAltvExchangeRateSetCode = _CAAltvExchangeRateSetCode.CAAltvExchangeRateSetCode
  association [1..1] to I_CADocument                  as _CADocument                  on  $projection.CADocumentNumber = _CADocument.CADocumentNumber
  association [1..1] to I_CAEuroConversionStatus      as _CAEuroConversionStatus      on  $projection.CAStatusOfEuroConversion = _CAEuroConversionStatus.CAStatusOfEuroConversion
  association [0..1] to I_CAIntPostingReasonCode      as _CAIntPostingReasonCode      on  $projection.CAInternalPostingReasonCode = _CAIntPostingReasonCode.CAInternalPostingReasonCode
  association [0..1] to I_CANegativePostingCtrlCode   as _CANegativePostingCtrlCode   on  $projection.CANegativePostingControlCode = _CANegativePostingCtrlCode.CANegativePostingControlCode
  association [0..1] to I_CANonDcblInputTaxCode       as _CANonDcblInputTaxCode       on  $projection.CAContainsNonDeductibleInptTax = _CANonDcblInputTaxCode.CAContainsNonDeductibleInptTax
  association [0..1] to I_CAOtherTaxCode              as _CAOtherTaxCode              on  $projection.CAOtherTaxCode = _CAOtherTaxCode.CAOtherTaxCode
                                                                                      and $projection.Country        = _CAOtherTaxCode.Country
  association [0..1] to I_CAWithholdingTaxSupplement  as _CAWithholdingTaxSupplement  on  $projection.CAWithholdingTaxSupplement = _CAWithholdingTaxSupplement.CAWithholdingTaxSupplement
                                                                                      and $projection.Country                    = _CAWithholdingTaxSupplement.Country
  association [0..1] to I_ChartOfAccounts             as _ChartOfAccounts             on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [1..1] to I_CompanyCode                 as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CompanyCode                 as _CashFlowCompanyCode         on  $projection.CACashFlowCompanyCode = _CashFlowCompanyCode.CompanyCode
  association [0..1] to I_Country                     as _Country                     on  $projection.Country = _Country.Country
  association [0..1] to I_Country                     as _TaxCountry                  on  $projection.TaxCountry = _TaxCountry.Country
  association [0..1] to I_Currency                    as _CompanyCodeCurrency         on  $projection.Currency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency                    as _GLPostingCurrency           on  $projection.CAGLPostingCurrency = _GLPostingCurrency.Currency
  association [0..1] to I_Currency                    as _TransactionCurrency         on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1] to I_GLAccount                   as _GLAccount                   on  $projection.GLAccount   = _GLAccount.GLAccount
                                                                                      and $projection.CompanyCode = _GLAccount.CompanyCode
  association [0..1] to I_GLAccount                   as _CashFlowAccount             on  $projection.CACashFlowAccount = _CashFlowAccount.GLAccount
                                                                                      and $projection.CompanyCode       = _CashFlowAccount.CompanyCode
  association [0..*] to I_ProfitCenter                as _ProfitCenter                on  $projection.ProfitCenter = _ProfitCenter.ProfitCenter
  association [0..1] to I_Partnercompany              as _PartnerCompany              on  $projection.PartnerCompany = _PartnerCompany.PartnerCompany
  association [0..1] to I_Segment                     as _Segment                     on  $projection.Segment = _Segment.Segment
  association [0..1] to I_UnitOfMeasure               as _BaseUnit                    on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_WBSElementBasicData         as _WBSElementBasicData         on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID

  association [1..1] to E_CADocumentGLItem            as _Extension                   on  $projection.CADocumentNumber = _Extension.CADocumentNumber
                                                                                      and $projection.CAGLItemNumber   = _Extension.CAGLItemNumber

  /* deprecated associations */
  association [1..1] to I_CADocumentHeader            as _DocHeader                   on  $projection.CADocumentNumber = _DocHeader.CADocumentNumber
  association [1..1] to I_GLAccountInCompanyCode      as _GLAccountInCompanyCode      on  $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
                                                                                      and $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode
  /* end deprecated associations */

{
      @ObjectModel.foreignKey.association: '_CADocument'
      @Search.defaultSearchElement: true
  key opbel                                                             as CADocumentNumber,
  key opupk                                                             as CAGLItemNumber,

      /* organizational and master data */
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                             as CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                             as BusinessArea,
      bupla                                                             as BusinessPlace,
      @ObjectModel.foreignKey.association: '_Segment'
      segment                                                           as Segment,
      prctr                                                             as ProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      vbund                                                             as PartnerCompany,
      @ObjectModel.foreignKey.association: '_GLAccount'
      hkont                                                             as GLAccount,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast(ps_psp_pnr as ps_s4_pspnr preserving type )                  as WBSElementInternalID,

      /* dates and amounts */
      valut                                                             as ValueDate,
      cast( abs( kursf ) as fis_absolute_exchangerate preserving type ) as CAExchangeRate,
      cast( case when kursf < 0  then 'X'
                 when kursf >= 0 then ' '
            end as fis_indirect_quotation preserving type )             as ExchRateIsIndirectQuotation,
      _CADocument.TransactionCurrency                                   as TransactionCurrency,
      _CompanyCode.Currency                                             as Currency,
      @Semantics.amount.currencyCode: 'Currency'
      betrh                                                             as CAAmountInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw                                                             as CAAmountInTransactionCurrency,
      @Semantics.amount.currencyCode: 'Currency'
      betr2                                                             as CAAmountInSecondCurrency,
      @Semantics.amount.currencyCode: 'Currency'
      betr3                                                             as CAAmountInThirdCurrency,

      @ObjectModel.foreignKey.association: '_CAAccountAssignmentCategory'
      kontt                                                             as CAAccountAssignmentCategory,
      kontl                                                             as CAAccountAssignment,
      kostl                                                             as CostCenter,
      kdauf                                                             as SalesOrder,
      kdpos                                                             as SalesOrderItem,
      fikey                                                             as CAReconciliationKey,
      @ObjectModel.foreignKey.association: '_CAIntPostingReasonCode'
      intbu                                                             as CAInternalPostingReasonCode,
      @ObjectModel.foreignKey.association: '_CANegativePostingCtrlCode'
      negbu                                                             as CANegativePostingControlCode,
      @ObjectModel.foreignKey.association: '_GLPostingCurrency'
      pswsl                                                             as CAGLPostingCurrency,
      ldgrp                                                             as LedgerGroup,
      paobjnr                                                           as ProfitabilitySegment_2,
      pasubnr                                                           as ProfitabilitySegmentChanges,

      fdlev                                                             as PlanningLevel,
      whgrp                                                             as CARepetitionGroup,
      @ObjectModel.foreignKey.association: '_CAAcctDetnTransKey'
      ktosl                                                             as CATransactionKeyAccountDetn,
      kschl                                                             as ConditionType,
      xeiph                                                             as CAIsSeparateLineItemInGL,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      menge                                                             as QuantityInBaseUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      meins                                                             as BaseUnit,
      psgrp                                                             as CAGroupingKeyDocumentItems,

      /* tax data */
      mwskz                                                             as TaxCode,
      mwszkz                                                            as CASupplementaryTaxCode,
      @ObjectModel.foreignKey.association: '_CAWithholdingTaxSupplement'
      qssew                                                             as CAWithholdingTaxSupplement,
      @ObjectModel.foreignKey.association: '_CAOtherTaxCode'
      strkz                                                             as CAOtherTaxCode,
      txgrp                                                             as CAGroupingCodeForTaxItems,
      txjcd                                                             as TaxJurisdiction,
      txjco                                                             as CAEnteredTaxJurisdictionCode,
      txcnt                                                             as CATaxJurisdictionLevelCounter,
      txexk                                                             as CATaxExceptionID,
      txdat                                                             as CATaxDate,
      @Semantics.amount.currencyCode: 'Currency'
      sbash                                                             as CATaxBaseAmountInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sbasw                                                             as CATaxBaseAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ndtax                                                             as CANonDeductibleTxAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      ndtxh                                                             as CANonDeductibleTxAmtInLoclCrcy,
      @ObjectModel.foreignKey.association: '_CANonDcblInputTaxCode'
      xndtx                                                             as CAContainsNonDeductibleInptTax,
      stprz                                                             as CATaxRate,
      gricd                                                             as GrossIncomeTaxActivityCode,
      gityp                                                             as EmploymentTaxDistributionType,
      @Semantics.amount.currencyCode: 'Currency'
      sctax                                                             as CATaxPortionInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sttax                                                             as CATaxPortionInTransCurrency,
      xustpd                                                            as CATaxIsCalculatedExternally,
      @ObjectModel.foreignKey.association: '_CAAltvExchangeRateSetCode'
      xdexr                                                             as CAAltvExchangeRateSetCode,
      @ObjectModel.foreignKey.association: '_TaxCountry'
      tax_country                                                       as TaxCountry,
      taxc_factor                                                       as TransToTaxCntryCrcyCnvrsnFctr,

      /* cash flow data */
      xcsha                                                             as CAIsCashFlowItem,
      @ObjectModel.foreignKey.association: '_CashFlowAccount'
      reacc                                                             as CACashFlowAccount,
      @ObjectModel.foreignKey.association: '_CashFlowCompanyCode'
      rebuk                                                             as CACashFlowCompanyCode,

      hbkid                                                             as HouseBank,
      hktid                                                             as HouseBankAccount,
      squan                                                             as QuantitySignCode,
      kukey                                                             as BankStatementShortID,
      esnum                                                             as BankStatementItem,
      ltype                                                             as CashManagementLinkType,
      lnkid                                                             as CashManagementLink,

      xintb                                                             as CAItmIsCreatedByPostgInterface,
      @ObjectModel.foreignKey.association: '_CAEuroConversionStatus'
      eurou                                                             as CAStatusOfEuroConversion,
      xcopa                                                             as CAProfitAnalysisUpdtIsDirect,
      invgr                                                             as CAInvcgGroupingKey,
      @ObjectModel.foreignKey.association: '_CAAcctAssgmtDistrCode'
      aasta                                                             as CACtrlFieldForAcctAssgmtDistr,
      fmtyp                                                             as CAUpdateMethodForFundsMgmt,
      origfikrs                                                         as OriginalFinancialMgmtArea,
      budgetyear                                                        as OriglYearForFinMgmtAcctAssgmt,
      kblnr                                                             as EarmarkedFundsDocument,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      _CompanyCode.ChartOfAccounts                                      as ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_Country'
      _CompanyCode.Country                                              as Country,
      _CompanyCode._Country.TaxCalculationProcedure                     as TaxCalculationProcedure,

      // Associations
      _BaseUnit,
      _BusinessArea,
      _CAAccountAssignmentCategory,
      _CAAcctAssgmtDistrCode,
      _CAAcctDetnTransKey,
      _CAAltvExchangeRateSetCode,
      _CADocument,
      _CAEuroConversionStatus,
      _CAIntPostingReasonCode,
      _CANegativePostingCtrlCode,
      _CANonDcblInputTaxCode,
      _CAOtherTaxCode,
      _CashFlowAccount,
      _CashFlowCompanyCode,
      _CAWithholdingTaxSupplement,
      _ChartOfAccounts,
      _CompanyCode,
      _CompanyCodeCurrency,
      _Country,
      _GLAccount,
      _GLPostingCurrency,
      _ProfitCenter,
      _PartnerCompany,
      _Segment,
      _TaxCountry,
      _TransactionCurrency,
      _WBSElementBasicData,

      /* deprecated fields */
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor: 'ProfitabilitySegment_2'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ProfitabilitySegment_2'
      cast( case when paobjnr > '9999999999'
                 then '9999999999'
                 else lpad( paobjnr, 10, '0' )
            end as rkeobjnr_numc )                                      as ProfitabilitySegment,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CATaxItemHasAltvExchangeRate'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'CATaxItemHasAltvExchangeRate'
      xdexr                                                             as CAAltvExchangeRateForTaxItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CAAltvExchangeRateSetCode'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'CAAltvExchangeRateSetCode'
      @Semantics.booleanIndicator: true
      xdexr                                                             as CATaxItemHasAltvExchangeRate,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EarmarkedFundsDocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'EarmarkedFundsDocument'
      kblnr                                                             as EarmarkedFunds,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAAccountAssignmentCategory'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAAccountAssignmentCategory'
      _CAAccountAssignmentCategory                                      as _AcctAssgmtCat,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CompanyCode'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CompanyCode'
      _CompanyCode                                                      as _CompCode,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CashFlowCompanyCode'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CashFlowCompanyCode'
      _CashFlowCompanyCode                                              as _CompCodeCashFlow,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CADocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CADocument'
      _DocHeader,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAOtherTaxCode'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAOtherTaxCode'
      _CAOtherTaxCode                                                   as _OtherTaxCode,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAWithholdingTaxSupplement'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAWithholdingTaxSupplement'
      _CAWithholdingTaxSupplement                                       as _WhldgTaxSuplmnt,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_GLAccount'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_GLAccount'
      _GLAccountInCompanyCode
}
```
