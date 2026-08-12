---
name: I_BILLOFEXCHANGE
description: "Billofexchange"
app_component: FI-LOC-BOE
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-BOE
  - interface-view
  - component:FI-LOC-BOE
  - lob:Finance
---
# I_BILLOFEXCHANGE

**Billofexchange**

| Property | Value |
|---|---|
| App Component | `FI-LOC-BOE` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `AccountingDocument` | ✓ | |  | `belnr` |  |  |
| `FiscalYear` | ✓ | |  | `cast(gjahr as fis_gjahr_no_conv preserving type)` |  |  |
| `AccountingDocumentItem` | ✓ | |  | `buzei` |  |  |
| `Cheque` |  | |  | `cast(boeno as chect)` |  |  |
| `BillOfExchangeIssueDate` |  | |  | `wdate` |  |  |
| `BillOfExchangeUsageDate` |  | |  | `wverd` |  |  |
| `BillOfExchangeUsage` |  | |  | `cast( wevwv as farp_wverw preserving type )` |  |  |
| `PlannedBillOfExchangeUsage` |  | |  | `wevwv` |  |  |
| `BillOfExchangeDrawer` |  | |  | `wname` |  |  |
| `BillOfExchangeDrawerCityName` |  | |  | `wort1` |  |  |
| `BillOfExchangeDrawee` |  | |  | `wbzog` |  |  |
| `BillOfExchangeDraweeCityName` |  | |  | `wort2` |  |  |
| `BillOfExchangeDomicileText` |  | |  | `wbank` |  |  |
| `BillOfExchangeIsAccepted` |  | |  | `xaktz` |  |  |
| `Region` |  | |  | `regio` |  |  |
| `BillOfExchangeDocumentStatus` |  | |  | `wstat` |  |  |
| `BillOfExchangeIsProtested` |  | |  | `wgbkz` |  |  |
| `BillOfExchangeProtest` |  | |  | `wgbkz` |  |  |
| `BillOfExchangeIsOnDemand` |  | |  | `xsiwe` |  |  |
| `BusinessPlace` |  | |  | `bupla` |  |  |
| `BusinessSectionCode` |  | |  | `secco` |  |  |
| `BillOfExchangePortfolio` |  | |  | `portf` |  |  |
| `BillOfExchangeCntrlBankLocText` |  | |  | `wlzbp` |  |  |
| `BOEDraweeBankKey` |  | |  | `bank` |  |  |
| `BillOfExchangeDataAgingDate` |  | |  | `_dataaging` |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `cast( ' ' as cvp_xblck preserving type )` |  |  |
| `AuthorizationGroup` |  | |  | `cast( ' ' as brgru preserving type )` |  |  |
| `BankAccount` |  | |  | `accou` |  |  |
| `BOESupplierForPresentation` |  | |  | `vendr` |  |  |
| `BOEReferenceProcedure` |  | |  | `reference_procedure` |  |  |
| `BOEReferenceObjectKey` |  | |  | `reference_object_key` |  |  |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_BillOfExchange` | [1..1] |
| `_OperationalAcctgDocItem` | `I_OperationalAcctgDocItem` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bill of Exchange'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['IsBusinessPurposeCompleted']
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XXL,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #UI_PROVIDER_PROJECTION_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE                ]
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION           
@ObjectModel.sapObjectNodeType.name: 'JournalEntryItemBillOfExchange'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]      
define view entity I_BillOfExchange as select from bsed
  association [1..1] to E_BillOfExchange          as _Extension               on  $projection.CompanyCode            = _Extension.CompanyCode
                                                                              and $projection.FiscalYear             = _Extension.FiscalYear
                                                                              and $projection.AccountingDocument     = _Extension.AccountingDocument
                                                                              and $projection.AccountingDocumentItem = _Extension.AccountingDocumentItem
  association [1..1] to I_OperationalAcctgDocItem as _OperationalAcctgDocItem on  $projection.CompanyCode            = _OperationalAcctgDocItem.CompanyCode
                                                                              and $projection.FiscalYear             = _OperationalAcctgDocItem.FiscalYear
                                                                              and $projection.AccountingDocument     = _OperationalAcctgDocItem.AccountingDocument
                                                                              and $projection.AccountingDocumentItem = _OperationalAcctgDocItem.AccountingDocumentItem
  association [1..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode                                                                         
  association [0..1] to I_FiscalYearForCompanyCode as _FiscalYear             on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                              and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [1..1] to I_JournalEntry             as _JournalEntry            on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                               and $projection.AccountingDocument = _JournalEntry.AccountingDocument
                                                                               and $projection.FiscalYear         = _JournalEntry.FiscalYear                                                                                                                                                                                                                                                                                               
{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }] 
      @ObjectModel.foreignKey.association: '_CompanyCode' 
  key bukrs                                                                           as CompanyCode,
      _CompanyCode,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key belnr                                                                           as AccountingDocument,
      _JournalEntry,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key cast(gjahr as fis_gjahr_no_conv preserving type)                                as FiscalYear,
      _FiscalYear,
  key buzei                                                                           as AccountingDocumentItem,
      cast(boeno as chect)                                                            as Cheque,
      wdate                                                                           as BillOfExchangeIssueDate,
      wverd                                                                           as BillOfExchangeUsageDate,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PlannedBillOfExchangeUsage'
      cast( wevwv as farp_wverw preserving type )                                     as BillOfExchangeUsage,
      wevwv                                                                           as PlannedBillOfExchangeUsage,
      wname                                                                           as BillOfExchangeDrawer,
      wort1                                                                           as BillOfExchangeDrawerCityName,
      wbzog                                                                           as BillOfExchangeDrawee,
      wort2                                                                           as BillOfExchangeDraweeCityName,
      wbank                                                                           as BillOfExchangeDomicileText,
      @Semantics.booleanIndicator: true
      xaktz                                                                           as BillOfExchangeIsAccepted,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_RegionVH',
                     element: 'Region' }
        }]       
      regio                                                                           as Region,
      wstat                                                                           as BillOfExchangeDocumentStatus,
      @Semantics.booleanIndicator: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfExchangeProtest'
      wgbkz                                                                           as BillOfExchangeIsProtested,
      wgbkz                                                                           as BillOfExchangeProtest,
      @Semantics.booleanIndicator: true
      xsiwe                                                                           as BillOfExchangeIsOnDemand,
      bupla                                                                           as BusinessPlace,
      secco                                                                           as BusinessSectionCode,        
      portf                                                                           as BillOfExchangePortfolio,
      wlzbp                                                                           as BillOfExchangeCntrlBankLocText,
      bank                                                                            as BOEDraweeBankKey,
      _dataaging                                                                      as BillOfExchangeDataAgingDate,
      @Semantics.booleanIndicator: true
      cast( ' ' as cvp_xblck preserving type ) as IsBusinessPurposeCompleted,
      cast( '    ' as brgru preserving type ) as AuthorizationGroup,
      accou as BankAccount, // CM 40121 (2025) Inclusion Fields in I_BILLOFEXCHANGE CDS by Fiona
      vendr as BOESupplierForPresentation, // CM 40121 (2025) Inclusion Fields in I_BILLOFEXCHANGE CDS by Fiona
      reference_procedure as BOEReferenceProcedure,
      reference_object_key as BOEReferenceObjectKey,
      _OperationalAcctgDocItem
}
```
