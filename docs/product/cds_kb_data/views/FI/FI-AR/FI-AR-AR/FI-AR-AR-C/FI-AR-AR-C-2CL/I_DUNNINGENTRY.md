---
name: I_DUNNINGENTRY
description: "Dunning Entry"
app_component: FI-AR-AR-C-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGENTRY')/$value
semantic_en: "Dunning Entry"
semantic_vi: "Dunning Entry — CDS view giao diện dựa trên mhnk."
keywords:
  - "dunning"
  - "entry"
  - "date"
  - "financial"
  - "account"
  - "type"
  - "company"
  - "code"
  - "customer"
tags:
  - FI
  - component:FI-AR-AR-C-2CL
  - FI-AR
  - FI-AR-AR
  - FI-AR-AR-C
  - FI-AR-AR-C-2CL
  - interface-view
  - lob:finance
---
# I_DUNNINGENTRY

**Dunning Entry**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-C-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGENTRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DunningRunDate` | ✓ | |  | `cast(mhnk.laufd as farp_laufd_mhn preserving type)` | `DATS(8)` | Dunning Run Date |
| `DunningRun` | ✓ | |  | `cast(mhnk.laufi as farp_laufi_mhn preserving type)` | `CHAR(6)` | Dunning Run Identification |
| `FinancialAccountType` | ✓ | |  | `cast(mhnk.koart as farp_koart preserving type)` | `CHAR(1)` | Account Type |
| `CompanyCode` | ✓ | |  | `cast(mhnk.bukrs as fis_bukrs preserving type)` | `CHAR(4)` | Company Code |
| `Customer` | ✓ | |  | `kunnr` | `CHAR(10)` | Customer Number |
| `Supplier` | ✓ | |  | `cast(mhnk.lifnr as md_supplier preserving type)` | `CHAR(10)` | Supplier |
| `OneTimeAcctBankAccount` | ✓ | |  | `cast(mhnk.cpdky as bankn)` | `CHAR(18)` | Bank Account Number |
| `CustomerHeadOffice` | ✓ | |  | `sknrze` | `CHAR(10)` | Head Office Account Number (in branch accounts) |
| `GroupingDunningArea` | ✓ | |  | `smaber` | `CHAR(2)` | Dunning Area |
| `GroupingDunningLevel` | ✓ | |  | `cast( mhnk.smahsk as farp_group_dunn_level preserving type )` | `NUMC(1)` | Grouping Dunning Level |
| `DunningClerk` | ✓ | |  | `busab` | `CHAR(2)` | Dunning Clerk |
| `DunningDate` |  | |  | `ausdt` | `DATS(8)` | Dunning Date |
| `DocIncldUpToPostgDate` |  | |  | `grdat` | `DATS(8)` | Posting Date up to Which Documents Are Included |
| `DunningRecipient` |  | |  | `knrma` | `CHAR(10)` | Account Number of the Dunning Recipient |
| `LegDunningProcedureOn` |  | |  | `gmvdt` | `DATS(8)` | Date of the Legal Dunning Proceedings |
| `DunningProcedure` |  | |  | `mahna` | `CHAR(4)` | Dunning Procedure |
| `DunningLevel` |  | |  | `cast(mhnk.mahns as farp_mahns_d preserving type)` | `NUMC(1)` | Dunning Level |
| `InterestCalculationCode` |  | |  | `cast(mhnk.vzskz as farp_vzskz preserving type)` | `CHAR(2)` | Interest Calculation Indicator |
| `DunningCurrency` |  | |  | `cast(mhnk.waers as farp_waers_mhn preserving type)` | `CUKY(5)` | Dunning Currency |
| `DunAreaAcctBalanceDunCrcy` |  | |  | `cast(mhnk.saldo as farp_salfw_mhnk preserving type)` | `CURR(23)` | Dunning Area Account Balance in Dunning Currency |
| `DunAreaAcctBalanceCCCrcy` |  | |  | `cast(mhnk.salhw as farp_salhw_mhnk preserving type)` | `CURR(23)` | Dunning Area Balance in Company Code Currency |
| `DueItemsBlockedInDunCrcy` |  | |  | `cast(mhnk.gsfbt as farp_gsfbt_mhnk preserving type)` | `CURR(23)` | Total of Blocked Items in Dunning Currency |
| `NotDueItemsBlockedInDunCrcy` |  | |  | `cast(mhnk.gsnbt as farp_gsnbt_mhnk preserving type)` | `CURR(23)` | Total of Blocked Items Not Due in Dunning Currency |
| `DueLineItemsTotalInDunCrcy` |  | |  | `cast(mhnk.faebt as farp_faebt_mhnk preserving type)` | `CURR(23)` | Total Line Items Due in Dunning Currency |
| `DueLineItemsTotalInCCCrcy` |  | |  | `cast(mhnk.faehw as farp_faehw_mhnk preserving type)` | `CURR(23)` | Total of Due Items in Company Code Currency |
| `DunningNoticeIsToBeSent` |  | |  | `xmflg` | `CHAR(1)` | Indicator: Is Dunning Notice To Be Sent? |
| `DunningBlockingReason` |  | |  | `cast(mhnk.mansp as farp_mansp preserving type)` | `CHAR(1)` | Dunning Block |
| `MaximumDunningLevel` |  | |  | `cast(mhnk.mahsk as maxst preserving type)` | `NUMC(1)` | Highest Dunning Level of a Dunning Type |
| `InterestAmountInDunCrcy` |  | |  | `cast(mhnk.zinbt as farp_dzinbt_mhn preserving type)` | `CURR(23)` | Total Interest for Dunning Notice in Dunning Currency |
| `InterestAmountInCCCrcy` |  | |  | `cast(mhnk.zinhw as farp_dzinhw_mhn preserving type)` | `CURR(23)` | Total Interest for Dunning Notice in Company Code Currency |
| `InterestIsNotDisplayed` |  | |  | `xzins` | `CHAR(1)` | Indicator: Do Not Display Interest in the Dunning Notice |
| `DunningNoticeGroup` |  | |  | `mgrup` | `CHAR(2)` | Key for Dunning Notice Grouping |
| `TreasuryContract` |  | |  | `vertn` | `CHAR(13)` | Contract Number |
| `TreasuryContractType` |  | |  | `vertt` | `CHAR(1)` | Contract Type |
| `RealEstateObject` |  | |  | `cast(mhnk.imkey as farp_imkey preserving type)` | `CHAR(8)` | Internal Key for Real Estate Object |
| `DueItemDunLevelTotalInDunCrcy` |  | |  | `cast(mhnk.famsm as farp_famsm_mhnk preserving type)` | `CURR(23)` | Total of Due Items at Dunning Level in Dunning Currency |
| `DueItemDunLevelTotalInCCCrcy` |  | |  | `famsh` | `CURR(23)` | Total due items in local currency from dunning level |
| `PostalCode` |  | |  | `cast(mhnk.pstlz as ad_pstcd1 preserving type)` | `CHAR(10)` | City Postal Code |
| `CityName` |  | |  | `cast(mhnk.ort01 as ad_city1)` | `CHAR(40)` | City |
| `StreetName` |  | |  | `stras` | `CHAR(35)` | Street and House Number |
| `POBox` |  | |  | `cast(mhnk.pfach as ad_pobx preserving type)` | `CHAR(10)` | PO Box |
| `Country` |  | |  | `cast(mhnk.land1 as land1_gp preserving type)` | `CHAR(3)` | Country/Region Key |
| `PaymentAdvice` |  | |  | `avsid` | `CHAR(16)` | Payment Advice Number |
| `BusTransEventApplication` |  | |  | `applk` | `CHAR(6)` | Application Indicator |
| `DunningChargeInCCCrcy` |  | |  | `cast(mhnk.mhngh as farp_mhngh_f150 preserving type)` | `CURR(23)` | Dunning Charge in Company Code Currency |
| `DunningChargeInDunCrcy` |  | |  | `cast(mhnk.mhngf as farp_mhngf_f150 preserving type)` | `CURR(23)` | Dunning Charge in Dunning Currency |
| `DunningPrintDate` |  | |  | `cast(mhnk.prndt as farp_prndt preserving type)` | `DATS(8)` | Dunning Print Date |
| `LastDunningPrntDate` |  | |  | `prndt_before` | `DATS(8)` | Print Date of Last Dunning Notice |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `_CompanyCode` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_DunningArea` | | ✓ | | | | |
| `_DunningCurrency` | | ✓ | | | | |
| `_DunningBlockingReason` | | ✓ | | | | |
| `_AccountingClerk` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_DunningEntryItem` | | ✓ | | | | |
| `_DunningProcedure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_DunningArea` | `I_DunningArea` | [1..1] |
| `_DunningCurrency` | `I_Currency` | [1..1] |
| `_DunningBlockingReason` | `I_DunningBlockingReasonCode` | [0..1] |
| `_AccountingClerk` | `I_AccountingClerk` | [0..1] |
| `_Country` | `I_Country` | [1..1] |
| `_DunningEntryItem` | `I_DunningEntryItem` | [0..*] |
| `_DunningProcedure` | `I_DunningProcedure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGENTRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGENTRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IDUNNINGENTRY'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Dunning Entry'

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel: { supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#SQL_DATA_SOURCE ] }
@ObjectModel.sapObjectNodeType.name: 'DunningNotice'

@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true

@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture:
        {
           mapping: [
             {
               viewElement: [ 'DunningRunDate' , 'DunningRun', 'FinancialAccountType' ,'CompanyCode',
                              'Customer', 'Supplier', 'OneTimeAcctBankAccount', 'CustomerHeadOffice',
                              'GroupingDunningArea', 'GroupingDunningLevel','DunningClerk' ],
               role: #MAIN,
               table: 'MHNK',
               tableElement: ['laufd', 'laufi', 'koart', 'bukrs', 'kunnr', 'lifnr', 'cpdky',
                              'sknrze', 'smaber', 'smahsk', 'busab']
             },
             {
               viewElement: [ 'CompanyCode' ],
               role: #LEFT_OUTER_TO_ONE_JOIN,
               table: 'T001',
               tableElement: [ 'bukrs' ]
             }
           ]
        }
}

define view I_DunningEntry
  as select from mhnk

  association [1..1] to I_CompanyCode               as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_FinancialAccountType      as _FinancialAccountType  on  $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType

  association [1..1] to I_Customer                  as _Customer              on  $projection.Customer = _Customer.Customer

  association [1..1] to I_Supplier                  as _Supplier              on  $projection.Supplier = _Supplier.Supplier

  association [1..1] to I_DunningArea               as _DunningArea           on  $projection.CompanyCode         = _DunningArea.CompanyCode
                                                                              and $projection.GroupingDunningArea = _DunningArea.DunningArea

  association [1..1] to I_Currency                  as _DunningCurrency       on  $projection.DunningCurrency = _DunningCurrency.Currency

  association [0..1] to I_DunningBlockingReasonCode as _DunningBlockingReason on  $projection.DunningBlockingReason = _DunningBlockingReason.DunningBlockingReason

  association [0..1] to I_AccountingClerk           as _AccountingClerk       on  $projection.CompanyCode  = _AccountingClerk.CompanyCode
                                                                              and $projection.DunningClerk = _AccountingClerk.AccountingClerk

  association [1..1] to I_Country                   as _Country               on  $projection.Country = _Country.Country

  association [0..*] to I_DunningEntryItem          as _DunningEntryItem      on  $projection.DunningRunDate         = _DunningEntryItem.DunningRunDate
                                                                              and $projection.DunningRun             = _DunningEntryItem.DunningRun
                                                                              and $projection.FinancialAccountType   = _DunningEntryItem.FinancialAccountType
                                                                              and $projection.CompanyCode            = _DunningEntryItem.CompanyCode
                                                                              and $projection.Customer               = _DunningEntryItem.Customer
                                                                              and $projection.Supplier               = _DunningEntryItem.Supplier
                                                                              and $projection.OneTimeAcctBankAccount = _DunningEntryItem.OneTimeAcctBankAccount
                                                                              and $projection.CustomerHeadOffice     = _DunningEntryItem.CustomerHeadOffice
                                                                              and $projection.GroupingDunningArea    = _DunningEntryItem.GroupingDunningArea
                                                                              and $projection.DunningLevel           = _DunningEntryItem.DunningLevel

  association [0..1] to I_DunningProcedure          as _DunningProcedure      on  $projection.DunningProcedure = _DunningProcedure.DunningProcedure

{
  key cast(mhnk.laufd as farp_laufd_mhn preserving type)           as DunningRunDate,
  key cast(mhnk.laufi as farp_laufi_mhn preserving type)           as DunningRun,

      @ObjectModel.foreignKey.association: '_FinancialAccountType'
  key cast(mhnk.koart as farp_koart preserving type)               as FinancialAccountType,

      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast(mhnk.bukrs as fis_bukrs  preserving type)               as CompanyCode,

      @ObjectModel.foreignKey.association: '_Customer'
  key mhnk.kunnr                                                   as Customer,

      @ObjectModel.foreignKey.association: '_Supplier'
  key cast(mhnk.lifnr as md_supplier preserving type)              as Supplier,

  key cast(mhnk.cpdky as bankn)                                    as OneTimeAcctBankAccount,
  key mhnk.sknrze                                                  as CustomerHeadOffice,

      @ObjectModel.foreignKey.association: '_DunningArea'
  key mhnk.smaber                                                  as GroupingDunningArea,
  key cast( mhnk.smahsk as farp_group_dunn_level preserving type ) as GroupingDunningLevel,

      @ObjectModel.foreignKey.association: '_AccountingClerk'
  key mhnk.busab                                                   as DunningClerk,
      mhnk.ausdt                                                   as DunningDate,
      mhnk.grdat                                                   as DocIncldUpToPostgDate,
      mhnk.knrma                                                   as DunningRecipient,
      mhnk.gmvdt                                                   as LegDunningProcedureOn,
      mhnk.mahna                                                   as DunningProcedure,
      cast(mhnk.mahns as farp_mahns_d preserving type)             as DunningLevel,
      cast(mhnk.vzskz as farp_vzskz preserving type)               as InterestCalculationCode,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_DunningCurrency'
      cast(mhnk.waers as farp_waers_mhn preserving type)           as DunningCurrency,

      @Semantics.amount.currencyCode: 'DunningCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnk.saldo as farp_salfw_mhnk preserving type)          as DunAreaAcctBalanceDunCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnk.salhw as farp_salhw_mhnk preserving type)          as DunAreaAcctBalanceCCCrcy,

      @Semantics.amount.currencyCode: 'DunningCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnk.gsfbt as farp_gsfbt_mhnk preserving type)          as DueItemsBlockedInDunCrcy,

      @Semantics.amount.currencyCode: 'DunningCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnk.gsnbt as farp_gsnbt_mhnk preserving type)          as NotDueItemsBlockedInDunCrcy,

      @Semantics.amount.currencyCode: 'DunningCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnk.faebt as farp_faebt_mhnk preserving type)          as DueLineItemsTotalInDunCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnk.faehw as farp_faehw_mhnk preserving type)          as DueLineItemsTotalInCCCrcy,

      //      mhnk.xmflg                                   as DunningNoticeIsSent,
      mhnk.xmflg                                                   as DunningNoticeIsToBeSent,

      @ObjectModel.foreignKey.association: '_DunningBlockingReason'
      cast(mhnk.mansp as farp_mansp preserving type)               as DunningBlockingReason,

      cast(mhnk.mahsk as maxst preserving type)                    as MaximumDunningLevel,

      @Semantics.amount.currencyCode: 'DunningCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnk.zinbt as farp_dzinbt_mhn preserving type)          as InterestAmountInDunCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnk.zinhw as farp_dzinhw_mhn preserving type)          as InterestAmountInCCCrcy,

      mhnk.xzins                                                   as InterestIsNotDisplayed,
      mhnk.mgrup                                                   as DunningNoticeGroup,
      mhnk.vertn                                                   as TreasuryContract,
      mhnk.vertt                                                   as TreasuryContractType,

      cast(mhnk.imkey as farp_imkey preserving type)               as RealEstateObject,

      @Semantics.amount.currencyCode: 'DunningCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnk.famsm as farp_famsm_mhnk preserving type)          as DueItemDunLevelTotalInDunCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #NONE
      mhnk.famsh                                                   as DueItemDunLevelTotalInCCCrcy,

      cast(mhnk.pstlz as ad_pstcd1 preserving type)                as PostalCode,
      cast(mhnk.ort01 as ad_city1)                                 as CityName,
      mhnk.stras                                                   as StreetName,
      cast(mhnk.pfach as ad_pobx preserving type)                  as POBox,

      @ObjectModel.foreignKey.association: '_Country'
      cast(mhnk.land1 as land1_gp preserving type)                 as Country,
      mhnk.avsid                                                   as PaymentAdvice,
      mhnk.applk                                                   as BusTransEventApplication,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnk.mhngh as farp_mhngh_f150 preserving type)          as DunningChargeInCCCrcy,

      @Semantics.amount.currencyCode: 'DunningCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnk.mhngf as farp_mhngf_f150 preserving type)          as DunningChargeInDunCrcy,


      cast(mhnk.prndt as farp_prndt preserving type)               as DunningPrintDate,
      mhnk.prndt_before                                            as LastDunningPrntDate,

      @Semantics.currencyCode: true
      _CompanyCode.Currency                                        as CompanyCodeCurrency,

      _CompanyCode,
      _Customer,
      _Supplier,
      _FinancialAccountType,
      _DunningArea,
      _DunningCurrency,
      _DunningBlockingReason,
      _AccountingClerk,
      _Country,
      _DunningEntryItem,
      _DunningProcedure
}
```
