---
name: I_LOANCONTRDATA
description: "Loan Contract Master Data"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRDATA')/$value
semantic_en: "Loan Contract Master Data"
semantic_vi: "Loan Contract Master Data — CDS view giao diện dựa trên vdarl."
keywords:
  - "loan"
  - "contract"
  - "master"
  - "data"
  - "company"
  - "code"
  - "archiving"
  - "category"
  - "entered"
  - "date"
tags:
  - FS
  - bo:businesspartner
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
  - master-data
---
# I_LOANCONTRDATA

**Loan Contract Master Data**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `LoanArchivingCategory` | ✓ | |  | `sarchiv` | `CHAR(1)` | Archiving Category Indicator |
| `LoanContractID` | ✓ | |  | `ranl` | `CHAR(13)` | Contract Number |
| `LoanContractEnteredBy` |  | |  | `rerf` | `CHAR(12)` | Entered By |
| `LoanContractEnteredDate` |  | |  | `derf` | `DATS(8)` | First Entered On |
| `LoanContractEnteredTime` |  | |  | `terf` | `TIMS(6)` | Time of Creation |
| `LoanContractEnteredSource` |  | |  | `reher` | `CHAR(10)` | Source of Initial Entry |
| `LoanContractEditedBy` |  | |  | `rbear` | `CHAR(12)` | Employee ID |
| `LoanContractEditedDate` |  | |  | `dbear` | `DATS(8)` | Last Edited On |
| `LoanContractEditedTime` |  | |  | `tbear` | `TIMS(6)` | Last Edited At |
| `LoanContractEditedSource` |  | |  | `rbher` | `CHAR(10)` | Editing Source |
| `LoanObjectInternalKey` |  | |  | `sobjekt` | `CHAR(10)` | Internal key for object |
| `LoanLifeCycleStatus` |  | |  | `sstati` | `NUMC(2)` | Status of data record |
| `LoanProductCategory` |  | |  | `sanlf` | `NUMC(3)` | Product Category |
| `LoanProductType` |  | |  | `gsart` | `CHAR(3)` | Product Type |
| `LoanAcctAssgmtRef` |  | |  | `rrefkont` | `CHAR(8)` | Account Assignment Reference in Financial Assets Management |
| `HouseBank` |  | |  | `hbkid` | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` |  | |  | `hktid` | `CHAR(5)` | ID for Account Details |
| `LoanType` |  | |  | `stitel` | `NUMC(3)` | Loan Type Indicator |
| `StateCntrlBkAstGrp` |  | |  | `sglzb` | `CHAR(4)` | SCB Asset Group Indicator |
| `FinAcctgAstGrp` |  | |  | `sfibg` | `NUMC(4)` | Asset Grouping Indicator |
| `BalanceSheetCode` |  | |  | `sbilk` | `CHAR(2)` | Balance Sheet Indicator |
| `LoanFileNumber` |  | |  | `xakt` | `CHAR(32)` | File Number |
| `LoanAlternativeID1` |  | |  | `ranlalt1` | `CHAR(13)` | Alternative Identification |
| `LoanAlternativeID2` |  | |  | `ranlalt2` | `CHAR(13)` | Alternative identification 2 |
| `LoanGroupKey1` |  | |  | `sgr1` | `CHAR(6)` | Group Key 1 (Freely Available) |
| `LoanGroupKey2` |  | |  | `sgr2` | `CHAR(6)` | Group Key 2 (Freely Available) |
| `LoanClassfctnNmbr` |  | |  | `rklammer` | `CHAR(13)` | Classification Number for Finance Projects |
| `PrncpLoanInvmtNmbr` |  | |  | `ranlket` | `CHAR(13)` | Principle loan investment number |
| `LoanApplicationNumber` |  | |  | `rantrag` | `CHAR(13)` | Application number |
| `LoanIntrstCalcCptlMeth` |  | |  | `ssolist` | `CHAR(1)` | Plan/Actual principle |
| `LoanTerm` |  | |  | `sfrist` | `NUMC(2)` | Loan Term |
| `LoanCapitalAppliedAmount` |  | |  | `bantrag` | `CURR(13)` | Capital applied for |
| `LoanContractCurrency` |  | |  | `santwhr` | `CUKY(5)` | Currency |
| `LoanApplicationEntryDate` |  | |  | `dantrag` | `DATS(8)` | Entry Date of Loan Application |
| `LoanCommittedCapitalAmount` |  | |  | `bzusage` | `CURR(13)` | Commitment capital |
| `LoanCommitmentDate` |  | |  | `dzusage` | `DATS(8)` | Loan - Date of Commitment by Lender |
| `LoanTermStartDate` |  | |  | `dblfz` | `DATS(8)` | Start of Term |
| `LoanTermEndDate` |  | |  | `delfz` | `DATS(8)` | End of Loan Term |
| `LoanPurpose` |  | |  | `svzweck` | `CHAR(2)` | Purpose of Loan |
| `LoanSpecialTreatment` |  | |  | `ssonder` | `NUMC(2)` | Special treatment of loan |
| `LoanCountryID` |  | |  | `slaender` | `CHAR(3)` | Country/Region ID |
| `LoanNonAccptcRsn` |  | |  | `snichtab` | `NUMC(2)` | Reason for Non-Acceptance |
| `LoanWithdrawalDate` |  | |  | `darchiv` | `DATS(8)` | Date of Rejection/Withdrawal |
| `LoanClass` |  | |  | `sdtyp` | `NUMC(3)` | Loans Class |
| `LoanApprovalDate` |  | |  | `dbewi` | `DATS(8)` | Approval date |
| `LoanAssignmentCreditor` |  | |  | `sabt` | `CHAR(4)` | Assignee |
| `DunningArea` |  | |  | `maber` | `CHAR(2)` | Dunning Area |
| `DunningLevel` |  | |  | `mahns` | `NUMC(1)` | Dunning Level |
| `LastDunningDate` |  | |  | `madat` | `DATS(8)` | Date of Last Dunning Notice |
| `LoanSpecialPostingType` |  | |  | `sondst` | `CHAR(2)` | Special posting treatment |
| `LoanGroupKey3` |  | |  | `sgrp3` | `CHAR(6)` | Group Key 3 (Freely Available) |
| `LoanGroupKey4` |  | |  | `sgrp4` | `CHAR(6)` | Group Key 4 (Freely Available) |
| `LoanIncgPaytDistrCtrl` |  | |  | `szkey` | `NUMC(2)` | Indicator for Control of Incoming Payment Distribution |
| `LoanAuthorizationGroup` |  | |  | `begru` | `CHAR(4)` | Authorization Group |
| `LoanDrwgRestraintType` |  | |  | `sverfu` | `NUMC(2)` | Type of Restraint on Drawing |
| `LoanSecurityType` |  | |  | `stitart` | `NUMC(2)` | Borrower's Note Loan Security Type |
| `LoanPortfolioType` |  | |  | `rportb` | `CHAR(10)` | Portfolio |
| `LoanSalesRegion` |  | |  | `sregion` | `CHAR(4)` | Sales Region |
| `LoanBranchOffice` |  | |  | `sgesst` | `CHAR(4)` | Branch Office |
| `LoanProcessingControl` |  | |  | `sbea` | `NUMC(2)` | Loan Processing Indicator |
| `LoanOrganizationalDistrict` |  | |  | `sobez` | `CHAR(2)` | Organizational District |
| `LoanAgentDistrict` |  | |  | `sbezirk` | `CHAR(4)` | Agent District |
| `LoanManualDunLevel` |  | |  | `smahnm` | `CHAR(1)` | Loan Manual Dunning Level |
| `LoanRedeemDate` |  | |  | `drueck` | `DATS(8)` | Date when loan will probably be redeemed |
| `LoanDiscountMethod` |  | |  | `sabgrenz` | `CHAR(1)` | Loan Discount Accrual/Deferral Method |
| `LoanFixedContractControl` |  | |  | `sfest` | `CHAR(1)` | Indicator for Control of Fixed Contract |
| `BusinessPartner` |  | |  | `rdarnehm` | `CHAR(10)` | Business Partner Number |
| `FinTransObjNmbr` |  | |  | `objnr` | `CHAR(22)` | Object Number for Financial Transactions |
| `LoanMainBrwrCustNmbr` |  | |  | `hdn_kunnr` | `CHAR(10)` | Main Borrower Customer Number |
| `LoanMasterNumber` |  | |  | `ranlstamnr` | `CHAR(13)` | Master number part of loan number for finding contracts |
| `LoanDunSmmrzn` |  | |  | `sdunncmp` | `CHAR(2)` | Summarization Level for Dunning Letter |
| `LoanDunRunIsExclude` |  | |  | `xnodunn` | `CHAR(1)` | Exclude Loan from Dunning Run |
| `LoanInternalReference` |  | |  | `refer` | `CHAR(16)` | Internal Reference |
| `LoanCharacteristic` |  | |  | `merkm` | `CHAR(25)` | Characteristics |
| `LoanIsPostDunCharge` |  | |  | `sduncharg` | `CHAR(1)` | Post Dunning Charges and Interest to this Contract |
| `LoanIsLiabilityTransaction` |  | |  | `saktpas` | `CHAR(1)` | Indicator: Asset/Liability Transaction |
| `LoanBusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `LoanIsPayoffLock` |  | |  | `jnorepay` | `CHAR(1)` | Payoff Lock |
| `LoanIsPOffBlkOpnItmClrg` |  | |  | `jnodoip` | `CHAR(1)` | Blocked by Payoff: No Open Item Clearing for Loan |
| `LoanGeneralValuationClass` |  | |  | `com_val_class` | `NUMC(4)` | General Valuation Class |
| `LoanPaymentStatus` |  | |  | `paym_status` | `CHAR(1)` | Payment Status |
| `LoanConcludedRegion` |  | |  | `sstate_of_exec` | `CHAR(3)` | Region Where Contract Concluded |
| `LoanBackOffice` |  | |  | `backoffice_id` | `NUMC(8)` | Back Office |
| `LoanContractIBAN` |  | |  | `contract_iban` | `CHAR(34)` | IBAN (International Bank Account Number) |
| `LoanBusProcChnAssgmtType` |  | |  | `bpca_type_code` | `CHAR(6)` | Business Process Type Code |
| `LoanBusProcChnAssgmtID` |  | |  | `bpca_id` | `CHAR(32)` | ID number of Business Process Chain Assignment |
| `_BusinessPartner` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_LoanContrCndnHdrData` | | ✓ | | | | |
| `_LoanContrBusPartRelshpData` | | ✓ | | | | |
| `_LoanContrChgPointerData` | | ✓ | | | | |
| `_LoanContrActlDocHdrData` | | ✓ | | | | |
| `_LoanContrPostedItemData` | | ✓ | | | | |
| `_LoanContrPlndItmData` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_LoanArchivingCategory` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_FinancialInstrProdCat` | | ✓ | | | | |
| `_FinancialInstrProductType` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_LoanTypeProdTypeRelshp` | | ✓ | | | | |
| `_LoanType` | | ✓ | | | | |
| `_LoanGroupKey1` | | ✓ | | | | |
| `_LoanGroupKey2` | | ✓ | | | | |
| `_LoanTerm` | | ✓ | | | | |
| `_LoanNonAccptcRsn` | | ✓ | | | | |
| `_LoanAssignmentCreditor` | | ✓ | | | | |
| `_LoanClass` | | ✓ | | | | |
| `_DunningArea` | | ✓ | | | | |
| `_LoanSpecialPostingType` | | ✓ | | | | |
| `_LoanGroupKey3` | | ✓ | | | | |
| `_LoanGroupKey4` | | ✓ | | | | |
| `_LoanIncgPaytDistrCtrl` | | ✓ | | | | |
| `_LoanDrwgRestraintType` | | ✓ | | | | |
| `_LoanSecurityType` | | ✓ | | | | |
| `_TreasuryPortfolio` | | ✓ | | | | |
| `_LoanSalesRegion` | | ✓ | | | | |
| `_LoanBranchOffice` | | ✓ | | | | |
| `_LoanManualDunLevel` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_LoanPaymentStatus` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_LoanContrCndnHdrData` | `I_LoanContrCndnHdrData` | [0..*] |
| `_LoanContrBusPartRelshpData` | `I_LoanContrBusPartRelshpData` | [0..*] |
| `_LoanContrChgPointerData` | `I_LoanContrChgPointerData` | [0..*] |
| `_LoanContrActlDocHdrData` | `I_LoanContrActlDocHdrData` | [0..*] |
| `_LoanContrPostedItemData` | `I_LoanContrPostedItemData` | [0..*] |
| `_LoanContrPlndItmData` | `I_LoanContrPlndItmData` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_LoanArchivingCategory` | `I_LoanArchivingCategory` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_FinancialInstrProdCat` | `I_FinancialInstrProdCat` | [0..1] |
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_HouseBank` | `I_Housebank` | [0..1] |
| `_LoanTypeProdTypeRelshp` | `I_LoanTypeProdTypeRelshp` | [0..1] |
| `_LoanType` | `I_LoanType` | [0..1] |
| `_LoanGroupKey1` | `I_LoanGroupKey1` | [0..1] |
| `_LoanGroupKey2` | `I_LoanGroupKey2` | [0..1] |
| `_LoanTerm` | `I_LoanTerm` | [0..1] |
| `_LoanNonAccptcRsn` | `I_LoanNonAccptcRsn` | [0..1] |
| `_LoanAssignmentCreditor` | `I_LoanAssignmentCreditor` | [0..1] |
| `_LoanClass` | `I_LoanClass` | [0..1] |
| `_DunningArea` | `I_DunningArea` | [0..1] |
| `_LoanSpecialPostingType` | `I_LoanSpecialPostingType` | [0..1] |
| `_LoanGroupKey3` | `I_LoanGroupKey3` | [0..1] |
| `_LoanGroupKey4` | `I_LoanGroupKey4` | [0..1] |
| `_LoanIncgPaytDistrCtrl` | `I_LoanIncgPaytDistrCtrl` | [0..1] |
| `_LoanDrwgRestraintType` | `I_LoanDrwgRestraintType` | [0..1] |
| `_LoanSecurityType` | `I_LoanSecurityType` | [0..1] |
| `_TreasuryPortfolio` | `I_TreasuryPortfolio` | [0..1] |
| `_LoanSalesRegion` | `I_LoanSalesRegion` | [0..1] |
| `_LoanBranchOffice` | `I_LoanBranchOffice` | [0..1] |
| `_LoanManualDunLevel` | `I_LoanManualDunLevel` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_LoanPaymentStatus` | `I_LoanPaymentStatus` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRDATA')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCD',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass:'MASTER'
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE ],
    representativeKey: 'LoanContractID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics: {
  internalName: #LOCAL,
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
        mapping: [ {
           table : 'VDARL',
           role : #MAIN,
           viewElement : ['CompanyCode', 'LoanArchivingCategory', 'LoanContractID'],
           tableElement : ['BUKRS', 'SARCHIV', 'RANL'],
           filter: [{operator: #NOT_EQ, tableElement: 'SARCHIV', value: 'M' } ]
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Contract Master Data'

define view I_LoanContrData
  as select from vdarl
  association [0..1] to I_BusinessPartner            as _BusinessPartner            on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_Customer                   as _Customer                   on  $projection.LoanMainBrwrCustNmbr = _Customer.Customer
  association [0..*] to I_LoanContrCndnHdrData       as _LoanContrCndnHdrData       on  $projection.CompanyCode    = _LoanContrCndnHdrData.CompanyCode
                                                                                    and $projection.LoanContractID = _LoanContrCndnHdrData.LoanContractID
  association [0..*] to I_LoanContrBusPartRelshpData as _LoanContrBusPartRelshpData on  $projection.LoanObjectInternalKey = _LoanContrBusPartRelshpData.LoanBPObjectInternalKey
  association [0..*] to I_LoanContrChgPointerData    as _LoanContrChgPointerData    on  $projection.CompanyCode           = _LoanContrChgPointerData.CompanyCode
                                                                                    and $projection.LoanArchivingCategory = _LoanContrChgPointerData.LoanArchivingCategory
                                                                                    and $projection.LoanContractID        = _LoanContrChgPointerData.LoanContractID
  association [0..*] to I_LoanContrActlDocHdrData    as _LoanContrActlDocHdrData    on  $projection.CompanyCode    = _LoanContrActlDocHdrData.CompanyCode
                                                                                    and $projection.LoanContractID = _LoanContrActlDocHdrData.LoanContractID
  association [0..*] to I_LoanContrPostedItemData    as _LoanContrPostedItemData    on  $projection.CompanyCode    = _LoanContrPostedItemData.CompanyCode
                                                                                    and $projection.LoanContractID = _LoanContrPostedItemData.LoanContractID
  association [0..*] to I_LoanContrPlndItmData       as _LoanContrPlndItmData       on  $projection.CompanyCode    = _LoanContrPlndItmData.CompanyCode
                                                                                    and $projection.LoanContractID = _LoanContrPlndItmData.LoanContractID
  association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_LoanArchivingCategory      as _LoanArchivingCategory      on  $projection.LoanArchivingCategory = _LoanArchivingCategory.LoanArchivingCategory
  association [0..1] to I_Currency                   as _Currency                   on  $projection.LoanContractCurrency = _Currency.Currency
  association [0..1] to I_FinancialInstrProdCat      as _FinancialInstrProdCat      on  $projection.LoanProductCategory = _FinancialInstrProdCat.FinancialInstrProductCategory
  association [0..1] to I_FinancialinstrProductType  as _FinancialInstrProductType  on  $projection.LoanProductType = _FinancialInstrProductType.FinancialInstrumentProductType
  association [0..1] to I_Housebank                  as _HouseBank                  on  $projection.CompanyCode = _HouseBank.CompanyCode
                                                                                    and $projection.HouseBank   = _HouseBank.HouseBank
  association [0..1] to I_LoanTypeProdTypeRelshp     as _LoanTypeProdTypeRelshp     on  $projection.LoanProductType = _LoanTypeProdTypeRelshp.LoanProductType
                                                                                    and $projection.LoanType        = _LoanTypeProdTypeRelshp.LoanType
  association [0..1] to I_LoanType                   as _LoanType                   on  $projection.LoanType = _LoanType.LoanType
  association [0..1] to I_LoanGroupKey1              as _LoanGroupKey1              on  $projection.LoanGroupKey1 = _LoanGroupKey1.LoanGroupKey1
  association [0..1] to I_LoanGroupKey2              as _LoanGroupKey2              on  $projection.LoanGroupKey2 = _LoanGroupKey2.LoanGroupKey2
  association [0..1] to I_LoanTerm                   as _LoanTerm                   on  $projection.LoanTerm = _LoanTerm.LoanTerm
  association [0..1] to I_LoanNonAccptcRsn           as _LoanNonAccptcRsn           on  $projection.CompanyCode      = _LoanNonAccptcRsn.CompanyCode
                                                                                    and $projection.LoanProductType  = _LoanNonAccptcRsn.LoanProductType
                                                                                    and $projection.LoanNonAccptcRsn = _LoanNonAccptcRsn.LoanNonAccptcRsn
  association [0..1] to I_LoanAssignmentCreditor     as _LoanAssignmentCreditor     on  $projection.LoanAssignmentCreditor = _LoanAssignmentCreditor.LoanAssignmentCreditor
  association [0..1] to I_LoanClass                  as _LoanClass                  on  $projection.LoanClass = _LoanClass.LoanClass
  association [0..1] to I_DunningArea                as _DunningArea                on  $projection.CompanyCode = _DunningArea.CompanyCode
                                                                                    and $projection.DunningArea = _DunningArea.DunningArea
  association [0..1] to I_LoanSpecialPostingType     as _LoanSpecialPostingType     on  $projection.CompanyCode            = _LoanSpecialPostingType.CompanyCode
                                                                                    and $projection.LoanSpecialPostingType = _LoanSpecialPostingType.LoanSpecialPostingType
  association [0..1] to I_LoanGroupKey3              as _LoanGroupKey3              on  $projection.LoanGroupKey3 = _LoanGroupKey3.LoanGroupKey3
  association [0..1] to I_LoanGroupKey4              as _LoanGroupKey4              on  $projection.LoanGroupKey4 = _LoanGroupKey4.LoanGroupKey4
  association [0..1] to I_LoanIncgPaytDistrCtrl      as _LoanIncgPaytDistrCtrl      on  $projection.LoanIncgPaytDistrCtrl = _LoanIncgPaytDistrCtrl.LoanIncgPaytDistrCtrl
  association [0..1] to I_LoanDrwgRestraintType      as _LoanDrwgRestraintType      on  $projection.LoanDrwgRestraintType = _LoanDrwgRestraintType.LoanDrwgRestraintType
  association [0..1] to I_LoanSecurityType           as _LoanSecurityType           on  $projection.LoanSecurityType = _LoanSecurityType.LoanSecurityType
  association [0..1] to I_TreasuryPortfolio          as _TreasuryPortfolio          on  $projection.CompanyCode       = _TreasuryPortfolio.CompanyCode
                                                                                    and $projection.LoanPortfolioType = _TreasuryPortfolio.Portfolio
  association [0..1] to I_LoanSalesRegion            as _LoanSalesRegion            on  $projection.LoanSalesRegion = _LoanSalesRegion.LoanSalesRegion
  association [0..1] to I_LoanBranchOffice           as _LoanBranchOffice           on  $projection.LoanBranchOffice = _LoanBranchOffice.LoanBranchOffice
  association [0..1] to I_LoanManualDunLevel         as _LoanManualDunLevel         on  $projection.LoanManualDunLevel = _LoanManualDunLevel.LoanManualDunLevel
  association [0..1] to I_BusinessArea               as _BusinessArea               on  $projection.LoanBusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_LoanPaymentStatus          as _LoanPaymentStatus          on  $projection.LoanPaymentStatus = _LoanPaymentStatus.LoanPaymentStatus
  association [0..1] to I_Country                    as _Country                    on  $projection.LoanCountryID = _Country.Country
  association [0..1] to I_Region                     as _Region                     on  $projection.LoanCountryID       = _Region.Country
                                                                                    and $projection.LoanConcludedRegion = _Region.Region

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key vdarl.bukrs          as CompanyCode,
      @ObjectModel.foreignKey.association: '_LoanArchivingCategory'
  key vdarl.sarchiv        as LoanArchivingCategory,
  key vdarl.ranl           as LoanContractID,

      vdarl.rerf           as LoanContractEnteredBy,
      vdarl.derf           as LoanContractEnteredDate,
      vdarl.terf           as LoanContractEnteredTime,
      vdarl.reher          as LoanContractEnteredSource,
      vdarl.rbear          as LoanContractEditedBy,
      vdarl.dbear          as LoanContractEditedDate,
      vdarl.tbear          as LoanContractEditedTime,
      vdarl.rbher          as LoanContractEditedSource,
      vdarl.sobjekt        as LoanObjectInternalKey,
      vdarl.sstati         as LoanLifeCycleStatus,
      @ObjectModel.foreignKey.association: '_FinancialInstrProdCat'
      vdarl.sanlf          as LoanProductCategory,
      @ObjectModel.foreignKey.association: '_FinancialInstrProductType'
      vdarl.gsart          as LoanProductType,
      vdarl.rrefkont       as LoanAcctAssgmtRef,
      @ObjectModel.foreignKey.association: '_HouseBank'
      vdarl.hbkid          as HouseBank,
      vdarl.hktid          as HouseBankAccount,
      @ObjectModel.foreignKey.association: '_LoanType'
      vdarl.stitel         as LoanType,
      vdarl.sglzb          as StateCntrlBkAstGrp,
      vdarl.sfibg          as FinAcctgAstGrp,
      vdarl.sbilk          as BalanceSheetCode,
      vdarl.xakt           as LoanFileNumber,
      vdarl.ranlalt1       as LoanAlternativeID1,
      vdarl.ranlalt2       as LoanAlternativeID2,
      @ObjectModel.foreignKey.association: '_LoanGroupKey1'
      vdarl.sgr1           as LoanGroupKey1,
      @ObjectModel.foreignKey.association: '_LoanGroupKey2'
      vdarl.sgr2           as LoanGroupKey2,
      vdarl.rklammer       as LoanClassfctnNmbr,
      vdarl.ranlket        as PrncpLoanInvmtNmbr,
      vdarl.rantrag        as LoanApplicationNumber,
      vdarl.ssolist        as LoanIntrstCalcCptlMeth,
      @ObjectModel.foreignKey.association: '_LoanTerm'
      vdarl.sfrist         as LoanTerm,
      @Semantics.amount.currencyCode: 'LoanContractCurrency'
      vdarl.bantrag        as LoanCapitalAppliedAmount,
      @Semantics.currencyCode
      @ObjectModel.foreignKey.association: '_Currency'
      vdarl.santwhr        as LoanContractCurrency,
      vdarl.dantrag        as LoanApplicationEntryDate,
      @Semantics.amount.currencyCode: 'LoanContractCurrency'
      vdarl.bzusage        as LoanCommittedCapitalAmount,
      vdarl.dzusage        as LoanCommitmentDate,
      vdarl.dblfz          as LoanTermStartDate,
      vdarl.delfz          as LoanTermEndDate,
      vdarl.svzweck        as LoanPurpose,
      vdarl.ssonder        as LoanSpecialTreatment,
      @ObjectModel.foreignKey.association: '_Country'
      vdarl.slaender       as LoanCountryID,
      @ObjectModel.foreignKey.association: '_LoanNonAccptcRsn'
      vdarl.snichtab       as LoanNonAccptcRsn,
      vdarl.darchiv        as LoanWithdrawalDate,
      @ObjectModel.foreignKey.association: '_LoanClass'
      vdarl.sdtyp          as LoanClass,
      vdarl.dbewi          as LoanApprovalDate,
      @ObjectModel.foreignKey.association: '_LoanAssignmentCreditor'
      vdarl.sabt           as LoanAssignmentCreditor,
      @ObjectModel.foreignKey.association: '_DunningArea'
      vdarl.maber          as DunningArea,
      vdarl.mahns          as DunningLevel,
      vdarl.madat          as LastDunningDate,
      @ObjectModel.foreignKey.association: '_LoanSpecialPostingType'
      vdarl.sondst         as LoanSpecialPostingType,
      @ObjectModel.foreignKey.association: '_LoanGroupKey3'
      vdarl.sgrp3          as LoanGroupKey3,
      @ObjectModel.foreignKey.association: '_LoanGroupKey4'
      vdarl.sgrp4          as LoanGroupKey4,
      @ObjectModel.foreignKey.association: '_LoanIncgPaytDistrCtrl'
      vdarl.szkey          as LoanIncgPaytDistrCtrl,
      vdarl.begru          as LoanAuthorizationGroup,
      @ObjectModel.foreignKey.association: '_LoanDrwgRestraintType'
      vdarl.sverfu         as LoanDrwgRestraintType,
      @ObjectModel.foreignKey.association: '_LoanSecurityType'
      vdarl.stitart        as LoanSecurityType,
      @ObjectModel.foreignKey.association: '_TreasuryPortfolio'
      vdarl.rportb         as LoanPortfolioType,
      @ObjectModel.foreignKey.association: '_LoanSalesRegion'
      vdarl.sregion        as LoanSalesRegion,
      @ObjectModel.foreignKey.association: '_LoanBranchOffice'
      vdarl.sgesst         as LoanBranchOffice,
      vdarl.sbea           as LoanProcessingControl,
      vdarl.sobez          as LoanOrganizationalDistrict,
      vdarl.sbezirk        as LoanAgentDistrict,
      @ObjectModel.foreignKey.association: '_LoanManualDunLevel'
      vdarl.smahnm         as LoanManualDunLevel,
      vdarl.drueck         as LoanRedeemDate,
      vdarl.sabgrenz       as LoanDiscountMethod,
      vdarl.sfest          as LoanFixedContractControl,
      //      vdarl.srating,
      //      vdarl.sratagen,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      vdarl.rdarnehm       as BusinessPartner,
      vdarl.objnr          as FinTransObjNmbr,
      @ObjectModel.foreignKey.association: '_Customer'
      vdarl.hdn_kunnr      as LoanMainBrwrCustNmbr,
      vdarl.ranlstamnr     as LoanMasterNumber,
      vdarl.sdunncmp       as LoanDunSmmrzn,
      vdarl.xnodunn        as LoanDunRunIsExclude,
      //      vdarl.zuond,
      vdarl.refer          as LoanInternalReference,
      vdarl.merkm          as LoanCharacteristic,
      vdarl.sduncharg      as LoanIsPostDunCharge,
      @Semantics.booleanIndicator: true
      vdarl.saktpas        as LoanIsLiabilityTransaction,
      //      vdarl.rpzahl,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      vdarl.gsber          as LoanBusinessArea,
      vdarl.jnorepay       as LoanIsPayoffLock,
      vdarl.jnodoip        as LoanIsPOffBlkOpnItmClrg,
      vdarl.com_val_class  as LoanGeneralValuationClass,
      @ObjectModel.foreignKey.association: '_LoanPaymentStatus'
      vdarl.paym_status    as LoanPaymentStatus,
      @ObjectModel.foreignKey.association: '_Region'
      vdarl.sstate_of_exec as LoanConcludedRegion,
      vdarl.backoffice_id  as LoanBackOffice,
      vdarl.contract_iban  as LoanContractIBAN,
      vdarl.bpca_type_code as LoanBusProcChnAssgmtType,
      vdarl.bpca_id        as LoanBusProcChnAssgmtID,

      _BusinessPartner,
      _Customer,
      _LoanContrCndnHdrData,
      _LoanContrBusPartRelshpData,
      _LoanContrChgPointerData,
      _LoanContrActlDocHdrData,
      _LoanContrPostedItemData,
      _LoanContrPlndItmData,
      _CompanyCode,
      _LoanArchivingCategory,
      _Currency,
      _FinancialInstrProdCat,
      _FinancialInstrProductType,
      _HouseBank,
      _LoanTypeProdTypeRelshp,
      _LoanType,
      _LoanGroupKey1,
      _LoanGroupKey2,
      _LoanTerm,
      _LoanNonAccptcRsn,
      _LoanAssignmentCreditor,
      _LoanClass,
      _DunningArea,
      _LoanSpecialPostingType,
      _LoanGroupKey3,
      _LoanGroupKey4,
      _LoanIncgPaytDistrCtrl,
      _LoanDrwgRestraintType,
      _LoanSecurityType,
      _TreasuryPortfolio,
      _LoanSalesRegion,
      _LoanBranchOffice,
      _LoanManualDunLevel,
      _BusinessArea,
      _LoanPaymentStatus,
      _Country,
      _Region
}
where
  vdarl.sarchiv <> 'M'
```
