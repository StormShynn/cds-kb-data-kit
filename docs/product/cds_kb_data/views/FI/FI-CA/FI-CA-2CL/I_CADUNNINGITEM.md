---
name: I_CADUNNINGITEM
description: "Contract Accounting Dunning Item"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGITEM')/$value
semantic_en: "Contract Accounting Dunning Item"
semantic_vi: "Contract Accounting Dunning Item — CDS view giao diện (transactional data) dựa trên fkkmaze."
keywords:
  - "Contract Accounting Dunning Item"
  - "contract"
  - "accounting"
  - "dunning"
  - "item"
  - "mass"
  - "date"
  - "business"
  - "partner"
  - "account"
  - "counter"
tags:
  - FI
  - account
  - component:FI-CA-2CL
  - contract
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
---
# I_CADUNNINGITEM

**Contract Accounting Dunning Item**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAMassRunDate` | ✓ | |  | `laufd` | `DATS(8)` | Date ID |
| `CAMassRunID` | ✓ | |  | `laufi` | `CHAR(6)` | Additional Identification Characteristic |
| `BusinessPartner` | ✓ | |  | `gpart` | `CHAR(10)` | Business Partner Number |
| `ContractAccount` | ✓ | |  | `vkont` | `CHAR(12)` | Contract Account Number |
| `CADunningCounter` | ✓ | |  | `mazae` | `NUMC(6)` | Counter for Several Dunning Notices to a Business Partner |
| `CADocumentNumber` | ✓ | |  | `opbel` | `CHAR(12)` | Number of a FI-CA Document |
| `CARepetitionItemNumber` | ✓ | |  | `opupw` | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` | ✓ | |  | `opupk` | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubItemNumber` | ✓ | |  | `opupz` | `NUMC(3)` | Subitem for a Partial Clearing in Document |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `CAContract` |  | |  | `vtref` | `CHAR(20)` | Reference Specifications from Contract |
| `CASubApplication` |  | |  | `subap` | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `Segment` |  | |  | `segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `Division` |  | |  | `spart` | `CHAR(2)` | Division |
| `TransactionCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `CADunningAmount` |  | |  | `mbetm` | `CURR(13)` | Dunned Amount in Transaction Currency |
| `CADunningInterestAmount` |  | |  | `mintm` | `CURR(13)` | Dunning interest in transaction currency |
| `CADocumentForDunningInterest` |  | |  | `mibel` | `CHAR(12)` | Doc no. of interest posting |
| `CANetDueDate` |  | |  | `faedn` | `DATS(8)` | Due date for net payment |
| `CADunningActivityRunDate` |  | |  | `mdrkd` | `DATS(8)` | Execution Date of Dunning Notice |
| `CAIssueDate` |  | |  | `ausdt` | `DATS(8)` | Date of Issue |
| `CADunningLevel` |  | |  | `mahns` | `NUMC(2)` | Dunning Level |
| `CADunningLevelCategory` |  | |  | `mstyp` | `CHAR(2)` | Dunning Level Category |
| `CANextDunningLevel` |  | |  | `mahnn` | `NUMC(2)` | New dunning level |
| `CADunningLevelIsOptional` |  | |  | `xmfak` | `CHAR(1)` | Dunning Level is Optional |
| `CADunningLevelIsOnlyForIntRsn` |  | |  | `xmsus` | `CHAR(1)` | Entry in Dunning History only Technically Conditional |
| `CADunningNoticeIsReversed` |  | |  | `xmsto` | `CHAR(1)` | Dunning Notice Reversed |
| `CADunningNoticeIsInfoOnly` |  | |  | `cast(xinfo as xinfg_kk preserving type)` | `CHAR(1)` | Group Not Due For Dunning/Information Only |
| `CAStatisticalItemCode` |  | |  | `stakz` | `CHAR(1)` | Type of Statistical Line Item |
| `ContractAccountIsNotUnique` |  | |  | `xmvkt` | `CHAR(1)` | Contract Account Not Unique |
| `CADunningProcedure` |  | |  | `mahnv` | `CHAR(2)` | Dunning Procedure |
| `CAItemHasHigherDunningLevel` |  | |  | `higherdl` | `CHAR(1)` | Item has higher dunning level than dunning notice |
| `CAItemIsCreatedByDunActyRun` |  | |  | `dalin` | `CHAR(1)` | Dunning Item Created by Dunning Activity Run |
| `ControllingArea` |  | | `_CompCode` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CADunningAmountInLocalCurrency` |  | |  | `mbeth` | `DEC(13)` | Not used (formerly dunned amount in local currency) |
| `CAReferenceDocument` |  | |  | `xblnr` | `CHAR(16)` | Reference Document Number |
| `CAClassificationKey` |  | |  | `opord` | `CHAR(35)` | Classification Key |
| `_BusinessPartner` | | ✓ | | | | |
| `_DocInterest` | | ✓ | | | | |
| `_DocBPItem` | | ✓ | | | | |
| `_DunHeader` | | ✓ | | | | |
| `_DunningLevel` | | ✓ | | | | |
| `_NextDunningLevel` | | ✓ | | | | |
| `_DunningLevelCat` | | ✓ | | | | |
| `_DunningProcedure` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_CAHeader` | | ✓ | | | | |
| `_CAPartner` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_CAStatisticalItemCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_DocInterest` | `I_CADocument` | [0..1] |
| `_DocBPItem` | `I_CADocumentBPItem` | [1..1] |
| `_DunHeader` | `I_CADunningHeader` | [1..1] |
| `_DunningLevel` | `I_CADunningLevel` | [0..1] |
| `_NextDunningLevel` | `I_CADunningLevel` | [0..1] |
| `_DunningLevelCat` | `I_CADunningLevelCategory` | [0..1] |
| `_DunningProcedure` | `I_CADunningProcedure` | [0..1] |
| `_ProviderContract` | `I_CAProviderContractHeader` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CompCode` | `I_CompanyCode` | [1..1] |
| `_CAHeader` | `I_ContractAccountHeader` | [1..1] |
| `_CAPartner` | `I_ContractAccountPartner` | [1..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_Division` | `I_Division` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_Segment` | `I_Segment` | [0..1] |
| `_CAStatisticalItemCode` | `I_CAStatisticalItemCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGITEM')/$value)*

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@EndUserText.label: 'Contract Accounting Dunning Item'

@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #C,
                             sizeCategory: #XXL } }

@VDM.viewType: #BASIC

define view entity I_CADunningItem
  as select from fkkmaze

  association [1..1] to I_BusinessPartner          as _BusinessPartner       on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CADocument               as _DocInterest           on  $projection.CADocumentForDunningInterest = _DocInterest.CADocumentNumber
  association [1..1] to I_CADocumentBPItem         as _DocBPItem             on  $projection.CADocumentNumber       = _DocBPItem.CADocumentNumber
                                                                             and $projection.CARepetitionItemNumber = _DocBPItem.CARepetitionItemNumber
                                                                             and $projection.CABPItemNumber         = _DocBPItem.CABPItemNumber
                                                                             and $projection.CASubItemNumber        = _DocBPItem.CASubItemNumber
  association [1..1] to I_CADunningHeader          as _DunHeader             on  (
                  $projection.CAMassRunDate                                                                                 = _DunHeader.CAMassRunDate
                  and $projection.CAMassRunID                                                                               = _DunHeader.CAMassRunID
                  and $projection.BusinessPartner                                                                           = _DunHeader.BusinessPartner
                  and $projection.ContractAccount                                                                           = _DunHeader.ContractAccount
                  and $projection.CADunningCounter                                                                          = _DunHeader.CADunningCounter
                )
                                                                             or  (
                                                                                 $projection.CAMassRunDate                  = _DunHeader.CAMassRunDate
                                                                                 and $projection.CAMassRunID                = _DunHeader.CAMassRunID
                                                                                 and $projection.BusinessPartner            = _DunHeader.BusinessPartner
                                                                                 and $projection.CADunningCounter           = _DunHeader.CADunningCounter
                                                                                 and $projection.ContractAccountIsNotUnique = 'X'
                                                                               )
  association [0..1] to I_CADunningLevel           as _DunningLevel          on  $projection.CADunningProcedure = _DunningLevel.CADunningProcedure
                                                                             and $projection.CADunningLevel     = _DunningLevel.CADunningLevel
  association [0..1] to I_CADunningLevel           as _NextDunningLevel      on  $projection.CADunningProcedure = _NextDunningLevel.CADunningProcedure
                                                                             and $projection.CANextDunningLevel = _NextDunningLevel.CADunningLevel
  association [0..1] to I_CADunningLevelCategory   as _DunningLevelCat       on  $projection.CADunningLevelCategory = _DunningLevelCat.CADunningLevelCategory
  association [0..1] to I_CADunningProcedure       as _DunningProcedure      on  $projection.CADunningProcedure = _DunningProcedure.CADunningProcedure
  association [0..1] to I_CAProviderContractHeader as _ProviderContract      on  $projection.CASubApplication = 'P'
                                                                             and $projection.CAContract       = _ProviderContract.CAProviderContract
  association [0..1] to I_CASubApplication         as _CASubApplication      on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [1..1] to I_CompanyCode              as _CompCode              on  $projection.CompanyCode = _CompCode.CompanyCode
  association [1..1] to I_ContractAccountHeader    as _CAHeader              on  $projection.ContractAccount = _CAHeader.ContractAccount
  association [1..1] to I_ContractAccountPartner   as _CAPartner             on  $projection.BusinessPartner = _CAPartner.BusinessPartner
                                                                             and $projection.ContractAccount = _CAPartner.ContractAccount
  association [0..1] to I_ControllingArea          as _ControllingArea       on  $projection.controllingarea = _ControllingArea.ControllingArea
  association [1..1] to I_Currency                 as _Currency              on  $projection.TransactionCurrency = _Currency.Currency
  association [0..1] to I_Division                 as _Division              on  $projection.Division = _Division.Division
  association [0..*] to I_ProfitCenter             as _ProfitCenter          on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                             and $projection.controllingarea = _ProfitCenter.ControllingArea
  association [0..1] to I_Segment                  as _Segment               on  $projection.Segment = _Segment.Segment
  association [0..1] to I_CAStatisticalItemCode    as _CAStatisticalItemCode on  $projection.CAStatisticalItemCode = _CAStatisticalItemCode.CAStatisticalItemCode

{
  key laufd                                   as CAMassRunDate,
  key laufi                                   as CAMassRunID,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key gpart                                   as BusinessPartner,
      @ObjectModel.foreignKey.association: '_CAHeader'
  key vkont                                   as ContractAccount,
  key mazae                                   as CADunningCounter,
  key opbel                                   as CADocumentNumber,
  key opupw                                   as CARepetitionItemNumber,
  key opupk                                   as CABPItemNumber,
  key opupz                                   as CASubItemNumber,

      /* organizational and master data */
      @ObjectModel.foreignKey.association: '_CompCode'
      bukrs                                   as CompanyCode,
      vtref                                   as CAContract,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                   as CASubApplication,
      @ObjectModel.foreignKey.association: '_Segment'
      segment                                 as Segment,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prctr                                   as ProfitCenter,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                   as Division,

      /* amounts */
      @ObjectModel.foreignKey.association: '_Currency'
      waers                                   as TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      mbetm                                   as CADunningAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      mintm                                   as CADunningInterestAmount,
      @ObjectModel.foreignKey.association: '_DocInterest'
      mibel                                   as CADocumentForDunningInterest,

      /* dates */
      faedn                                   as CANetDueDate,
      mdrkd                                   as CADunningActivityRunDate,
      ausdt                                   as CAIssueDate,

      @ObjectModel.foreignKey.association: '_DunningLevel'
      mahns                                   as CADunningLevel,
      @ObjectModel.foreignKey.association: '_DunningLevelCat'
      mstyp                                   as CADunningLevelCategory,
      @ObjectModel.foreignKey.association: '_NextDunningLevel'
      mahnn                                   as CANextDunningLevel,
      xmfak                                   as CADunningLevelIsOptional,
      xmsus                                   as CADunningLevelIsOnlyForIntRsn,
      xmsto                                   as CADunningNoticeIsReversed,
      cast(xinfo as xinfg_kk preserving type) as CADunningNoticeIsInfoOnly,
      @ObjectModel.foreignKey.association: '_CAStatisticalItemCode'
      stakz                                   as CAStatisticalItemCode,
      xmvkt                                   as ContractAccountIsNotUnique,
      @ObjectModel.foreignKey.association: '_DunningProcedure'
      mahnv                                   as CADunningProcedure,
      higherdl                                as CAItemHasHigherDunningLevel,
      dalin                                   as CAItemIsCreatedByDunActyRun,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      _CompCode.ControllingArea,
      mbeth                                   as CADunningAmountInLocalCurrency,
      xblnr                                   as CAReferenceDocument,
      opord                                   as CAClassificationKey,

      // Associations
      _BusinessPartner,
      _CAHeader,
      _CAPartner,
      _CAStatisticalItemCode,
      _CASubApplication,
      _CompCode,
      _ControllingArea,
      _Currency,
      _Division,
      _DocBPItem,
      _DocInterest,
      _DunHeader,
      _DunningLevel,
      _DunningLevelCat,
      _DunningProcedure,
      _NextDunningLevel,
      _ProfitCenter,
      _ProviderContract,
      _Segment
}
```
