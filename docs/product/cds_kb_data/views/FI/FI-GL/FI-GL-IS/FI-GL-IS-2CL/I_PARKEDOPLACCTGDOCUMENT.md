---
name: I_PARKEDOPLACCTGDOCUMENT
description: "Parkedoplacctgdocument"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - document
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_PARKEDOPLACCTGDOCUMENT

**Parkedoplacctgdocument**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceCompanyCode` | ✓ | |  | `ausbk` |  |  |
| `CompanyCode` | ✓ | |  | `cast( bukrs as fis_bukrs preserving type )` |  |  |
| `SourceAccountingDocument` | ✓ | |  | `cast( belnr as fis_belnr preserving type )` |  |  |
| `SourceFiscalYear` | ✓ | |  | `cast( gjahr as fis_gjahr_no_conv )` |  |  |
| `AccountingDocumentCategory` |  | |  | `cast( bstat as farp_bstat_d preserving type )` |  |  |
| `AccountingDocumentType` |  | |  | `cast( blart as farp_blart preserving type )` |  |  |
| `DocumentDate` |  | |  | `cast( bldat as fis_bldat preserving type )` |  |  |
| `PostingDate` |  | |  | `cast( budat as fis_budat preserving type )` |  |  |
| `FiscalPeriod` |  | |  | `cast( cast( concat( '0', monat ) as abap.numc( 3 ) ) as fins_fiscalperiod )` |  |  |
| `ExchangeRateDate` |  | |  | `cast( wwert as vdm_v_exchange_rate_date preserving type)` |  |  |
| `AccountingDocumentCreationDate` |  | |  | `cast( cpudt as farp_cpudt preserving type )` |  |  |
| `CreationTime` |  | |  | `cast( cputm as ttet_dt_cr_time preserving type )` |  |  |
| `LastManualChangeDate` |  | |  | `cast ( aedat as fis_lastmanualchangedate preserving type )` |  |  |
| `LastAutomaticChangeDate` |  | |  | `cast ( upddt as fis_lastautomaticchangedate preserving type )` |  |  |
| `LastChangeDate` |  | |  | `cast ( case when ( upddt is not initial and upddt > aedat ) then upddt when aedat is not initial then cast ( aedat as ttet_dt_chg_date preserving type ) else cast ( cpudt as ttet_dt_chg_date preserving type ) end as ttet_dt_chg_date )` |  |  |
| `AccountingDocCreatedByUser` |  | |  | `cast( usnam as fis_usnam preserving type)` |  |  |
| `TransactionCode` |  | |  | `tcode` |  |  |
| `IntercompanyTransaction` |  | |  | `cast( bvorg as fac_bvorg preserving type )` |  |  |
| `DocumentReferenceID` |  | |  | `cast( xblnr as fis_xblnr1 preserving type )` |  |  |
| `AccountingDocumentHeaderText` |  | |  | `bktxt` |  |  |
| `FinancialManagementArea` |  | |  | `fikrs` |  |  |
| `TransactionCurrency` |  | |  | `waers` |  |  |
| `CompanyCodeCurrency` |  | |  | `cast( hwaer as fis_hwaer )` |  |  |
| `AdditionalCurrency1` |  | |  | `cast( hwae2 as fis_hwae2 )` |  |  |
| `AdditionalCurrency2` |  | |  | `cast( hwae3 as fis_hwae3 )` |  |  |
| `AdditionalCurrency1Role` |  | |  | `cast( curt2 as fis_adl1_currole )` |  |  |
| `AdditionalCurrency2Role` |  | |  | `cast( curt3 as fis_adl2_currole )` |  |  |
| `ReferenceDocumentType` |  | |  | `cast( awtyp as fis_awtyp preserving type )` |  |  |
| `OriginalReferenceDocument` |  | |  | `cast( awkey as fac_awkey preserving type )` |  |  |
| `ReferenceDocumentLogicalSystem` |  | |  | `cast(awsys as fis_awsys preserving type)` |  |  |
| `Branch` |  | |  | `cast( brnch as fis_j_1abrnch preserving type)` |  |  |
| `InvoiceReceiptDate` |  | |  | `cast( reindat as fis_reindat )` |  |  |
| `LedgerGroup` |  | |  | `ldgrp` |  |  |
| `PartnerCompany` |  | |  | `vbund` |  |  |
| `TaxReportingDate` |  | |  | `vatdate` |  |  |
| `TaxIsCalculatedAutomatically` |  | |  | `cast( xmwst as fis_xmwst )` |  |  |
| `_SourceCompanyCode` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SourceFiscalYear` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_AdditionalCurrency1` | | ✓ | | | | |
| `_AdditionalCurrency2` | | ✓ | | | | |
| `_AdditionalCurrency1Role` | | ✓ | | | | |
| `_AdditionalCurrency2Role` | | ✓ | | | | |
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_RefDocumentLogicalSystem` | | ✓ | | | | |
| `_LedgerGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SourceCompanyCode` | `I_CompanyCode` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_SourceFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_AdditionalCurrency1` | `I_Currency` | [0..1] |
| `_AdditionalCurrency2` | `I_Currency` | [0..1] |
| `_AdditionalCurrency1Role` | `I_CurrencyRole` | [0..1] |
| `_AdditionalCurrency2Role` | `I_CurrencyRole` | [0..1] |
| `_AccountingDocumentCategory` | `I_AccountingDocumentCategory` | [0..1] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_RefDocumentLogicalSystem` | `I_LogicalSystem` | [0..1] |
| `_LedgerGroup` | `I_LedgerGroup` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Parked Accounting Document'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics.internalName: #LOCAL
@Analytics: { 
      dataCategory: #DIMENSION, 
      dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping: 
            [
              { 
                table: 'VBKPF',
                role: #MAIN,
                viewElement: ['SourceCompanyCode', 'CompanyCode', 'SourceAccountingDocument', 'SourceFiscalYear'],
                tableElement: ['ausbk', 'bukrs', 'belnr', 'gjahr']
              }
            ] 
         }
      }
    }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'SourceAccountingDocument'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

@ObjectModel.sapObjectNodeType.name: 'JournalEntry' 

define view entity I_ParkedOplAcctgDocument
  as select from vbkpf

  association [0..1] to I_CompanyCode                  as _SourceCompanyCode            on $projection.SourceCompanyCode               = _SourceCompanyCode.CompanyCode
  association [0..1] to I_CompanyCode                  as _CompanyCode                  on $projection.CompanyCode                     = _CompanyCode.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode     as _SourceFiscalYear             on $projection.SourceFiscalYear                = _SourceFiscalYear.FiscalYear
                                                                                       and $projection.CompanyCode                     = _SourceFiscalYear.CompanyCode
  association [0..1] to I_AccountingDocumentType       as _AccountingDocumentType       on $projection.AccountingDocumentType          = _AccountingDocumentType.AccountingDocumentType
  association [1..1] to I_Currency                     as _CompanyCodeCurrency          on $projection.CompanyCodeCurrency             = _CompanyCodeCurrency.Currency 
  association [0..1] to I_Currency                     as _TransactionCurrency          on $projection.TransactionCurrency             = _TransactionCurrency.Currency
  association [0..1] to I_Currency                     as _AdditionalCurrency1          on $projection.AdditionalCurrency1             = _AdditionalCurrency1.Currency 
  association [0..1] to I_Currency                     as _AdditionalCurrency2          on $projection.AdditionalCurrency2             = _AdditionalCurrency2.Currency  
  association [0..1] to I_CurrencyRole                 as _AdditionalCurrency1Role      on $projection.AdditionalCurrency1Role         = _AdditionalCurrency1Role.CurrencyRole
  association [0..1] to I_CurrencyRole                 as _AdditionalCurrency2Role      on $projection.AdditionalCurrency2Role         = _AdditionalCurrency2Role.CurrencyRole
  association [0..1] to I_AccountingDocumentCategory   as _AccountingDocumentCategory   on $projection.AccountingDocumentCategory      = _AccountingDocumentCategory.AccountingDocumentCategory
  association [0..1] to I_FinancialManagementArea      as _FinancialManagementArea      on $projection.FinancialManagementArea         = _FinancialManagementArea.FinancialManagementArea                                                                                                                                                                                                                                                            
  association [0..1] to I_ReferenceDocumentType        as _ReferenceDocumentType        on $projection.ReferenceDocumentType           = _ReferenceDocumentType.ReferenceDocumentType
  association [0..1] to I_LogicalSystem                as _RefDocumentLogicalSystem     on $projection.ReferenceDocumentLogicalSystem  = _RefDocumentLogicalSystem.LogicalSystem
  association [0..1] to I_LedgerGroup                  as _LedgerGroup                  on $projection.LedgerGroup = _LedgerGroup.LedgerGroup
                                                                                   
{
    @ObjectModel.foreignKey.association: '_SourceCompanyCode'
key ausbk                                                                                 as SourceCompanyCode,
    @ObjectModel.foreignKey.association: '_CompanyCode'
key cast( bukrs as fis_bukrs preserving type )                                            as CompanyCode,
key cast( belnr as fis_belnr preserving type )                                            as SourceAccountingDocument,
    @ObjectModel.foreignKey.association: '_SourceFiscalYear'
key cast( gjahr as fis_gjahr_no_conv )                                                    as SourceFiscalYear,

    @ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
    cast( bstat as farp_bstat_d preserving type )                                         as AccountingDocumentCategory,
    @ObjectModel.foreignKey.association: '_AccountingDocumentType'
    cast( blart as farp_blart preserving type )                                           as AccountingDocumentType,
    cast( bldat as fis_bldat preserving type )                                            as DocumentDate,
    cast( budat as fis_budat preserving type )                                            as PostingDate,
    cast( cast( concat( '0', monat ) as abap.numc( 3 ) ) as fins_fiscalperiod )           as FiscalPeriod,
    cast( wwert as vdm_v_exchange_rate_date preserving type)                              as ExchangeRateDate,
    cast( cpudt as farp_cpudt preserving type )                                           as AccountingDocumentCreationDate,
    cast( cputm as ttet_dt_cr_time preserving type )                                      as CreationTime,
    cast ( aedat as fis_lastmanualchangedate preserving type )                            as LastManualChangeDate,
    cast ( upddt as fis_lastautomaticchangedate preserving type )                         as LastAutomaticChangeDate,
    cast ( case 
             when ( upddt is not initial  and upddt > aedat ) then upddt  
             when aedat is not initial then cast ( aedat as ttet_dt_chg_date preserving type )
             else cast ( cpudt as ttet_dt_chg_date preserving type )
           end as ttet_dt_chg_date )                                                      as LastChangeDate,
    cast( usnam as fis_usnam preserving type)                                             as AccountingDocCreatedByUser,
    tcode                                                                                 as TransactionCode,
    cast( bvorg as fac_bvorg preserving type )                                            as IntercompanyTransaction,
    cast( xblnr as fis_xblnr1 preserving type )                                           as DocumentReferenceID,
    bktxt                                                                                 as AccountingDocumentHeaderText,
    @ObjectModel.foreignKey.association: '_FinancialManagementArea'
    fikrs                                                                                 as FinancialManagementArea,
    @ObjectModel.foreignKey.association: '_TransactionCurrency'
    waers                                                                                 as TransactionCurrency,
    @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
    cast( hwaer as fis_hwaer )                                                            as CompanyCodeCurrency,
    @ObjectModel.foreignKey.association: '_AdditionalCurrency1'
    cast( hwae2 as fis_hwae2 )                                                            as AdditionalCurrency1, 
    @ObjectModel.foreignKey.association: '_AdditionalCurrency2'
    cast( hwae3 as fis_hwae3 )                                                            as AdditionalCurrency2,
    @ObjectModel.foreignKey.association: '_AdditionalCurrency1Role'
    cast( curt2 as fis_adl1_currole )                                                     as AdditionalCurrency1Role,
    @ObjectModel.foreignKey.association: '_AdditionalCurrency2Role'
    cast( curt3 as fis_adl2_currole )                                                     as AdditionalCurrency2Role,
    @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
    cast( awtyp as fis_awtyp preserving type )                                            as ReferenceDocumentType,
    cast( awkey as fac_awkey preserving type )                                            as OriginalReferenceDocument,
    @ObjectModel.foreignKey.association: '_RefDocumentLogicalSystem'
    cast(awsys as fis_awsys preserving type)                                              as ReferenceDocumentLogicalSystem,
    cast( brnch as fis_j_1abrnch preserving type)                                         as Branch,
    cast( reindat as fis_reindat )                                                        as InvoiceReceiptDate,
    @ObjectModel.foreignKey.association: '_LedgerGroup'
    ldgrp                                                                                 as LedgerGroup,
    vbund                                                                                 as PartnerCompany,
    vatdate                                                                               as TaxReportingDate,
    cast( xmwst as fis_xmwst )                                                            as TaxIsCalculatedAutomatically,
    
    _SourceCompanyCode,
    _CompanyCode,
    _SourceFiscalYear,
    _CompanyCodeCurrency,
    _TransactionCurrency,
    _AdditionalCurrency1,
    _AdditionalCurrency2,
    _AdditionalCurrency1Role,
    _AdditionalCurrency2Role,
    _FinancialManagementArea,
    _AccountingDocumentCategory,
    _AccountingDocumentType,
    _ReferenceDocumentType,
    _RefDocumentLogicalSystem,
    _LedgerGroup
}
```
