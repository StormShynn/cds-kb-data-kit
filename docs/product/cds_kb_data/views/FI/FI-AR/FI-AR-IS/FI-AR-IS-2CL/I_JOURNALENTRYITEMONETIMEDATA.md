---
name: I_JOURNALENTRYITEMONETIMEDATA
description: "Journal EntryITEMONETIMEDATA"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-IS
  - interface-view
  - journal-entry
  - item-level
  - component:FI-AR-IS-2CL
  - lob:Finance
  - bo:JournalEntry
---
# I_JOURNALENTRYITEMONETIMEDATA

**Journal EntryITEMONETIMEDATA**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `AccountingDocument` | ✓ | |  | `belnr` |  |  |
| `FiscalYear` | ✓ | |  | `cast( bsec.gjahr as fis_gjahr_no_conv preserving type )` |  |  |
| `AccountingDocumentItem` | ✓ | |  | `buzei` |  |  |
| `BusinessPartnerName1` |  | |  | `cast(bsec.name1 as ad_name1)` |  |  |
| `BusinessPartnerName2` |  | |  | `cast(bsec.name2 as ad_name2)` |  |  |
| `BusinessPartnerName3` |  | |  | `cast(bsec.name3 as ad_name3)` |  |  |
| `BusinessPartnerName4` |  | |  | `cast(bsec.name4 as ad_name4)` |  |  |
| `Country` |  | |  | `land1` |  |  |
| `CityName` |  | |  | `cast(bsec.ort01 as ad_city1)` |  |  |
| `POBox` |  | |  | `pfach` |  |  |
| `POBoxPostalCode` |  | |  | `pstl2` |  |  |
| `PostalCode` |  | |  | `pstlz` |  |  |
| `IsVATLiable` |  | |  | `stkzu` |  |  |
| `Region` |  | |  | `regio` |  |  |
| `TaxID1` |  | |  | `stcd1` |  |  |
| `TaxID2` |  | |  | `stcd2` |  |  |
| `TaxID3` |  | |  | `stcd3` |  |  |
| `TaxID4` |  | |  | `stcd4` |  |  |
| `TaxID5` |  | |  | `stcd5` |  |  |
| `StreetAddressName` |  | |  | `stras` |  |  |
| `ResponsibleType` |  | |  | `fityp` |  |  |
| `TaxNumberType` |  | |  | `stcdt` |  |  |
| `BusinessType` |  | |  | `j_1kftbus` |  |  |
| `IndustryType` |  | |  | `j_1kftind` |  |  |
| `OneTimeAccountBPSalutationText` |  | |  | `anred` |  |  |
| `AddressID` |  | |  | `adrnr` |  |  |
| `AccountingClerkInternetAddress` |  | |  | `intad` |  |  |
| `BankAccount` |  | |  | `bankn` |  |  |
| `BankNumber` |  | |  | `bankl` |  |  |
| `BankCountry` |  | |  | `banks` |  |  |
| `PostOfficeBankAccount` |  | |  | `pskto` |  |  |
| `PaymentSystem` |  | |  | `payment_system` |  |  |
| `AliasType` |  | |  | `alias_type` |  |  |
| `BPBankAccountAliasName` |  | |  | `bank_alias` |  |  |
| `IsNaturalPerson` |  | |  | `cast(bsec.stkzn as bu_natural_person)` |  |  |
| `IsOneTimeAccount` |  | |  | `xcpdk` |  |  |
| `BankControlKey` |  | |  | `bkont` |  |  |
| `OneTimeAcctCntrySpecificRef1` |  | |  | `glo_re1_ot` |  |  |
| `DataExchangeInstructionKey` |  | |  | `cast(bsec.dtaws as farp_dtaws preserving type)` |  |  |
| `DataMediumExchangeControl` |  | |  | `dtams` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_AccountingDocument` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_IBAN` | | ✓ | | | | |
| `_Bank` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_AccountingDocument` | `I_JournalEntry` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_Address` | `I_Address` | [0..1] |
| `_IBAN` | `I_Iban` | [0..1] |
| `_Bank` | `I_Bank_2` | [0..1] |

## Source Code

```abap
@EndUserText:    { label:                       'One-Time Data for Journal Entry Item' }
@VDM:            { viewType:                    #BASIC }
@Search:         { searchable:                  false }
@AccessControl:  { authorizationCheck: #PRIVILEGED_ONLY,
                   privilegedAssociations: ['_Address'],
                   personalData.blocking: #REQUIRED}
@ObjectModel:    {
                   usageType.serviceQuality:    #A,
                   usageType.sizeCategory:      #M,
                   usageType.dataClass:         #TRANSACTIONAL,
                   representativeKey: 'AccountingDocumentItem',
                   modelingPattern: #ANALYTICAL_DIMENSION,
                   supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ],
                   sapObjectNodeType.name: 'JournalEntryItemOneTimeData'
                   }
@Analytics:      { internalName: #LOCAL,
                   technicalName: 'IJEONETIMEDATA',
                   dataCategory: #DIMENSION,
                    dataExtraction: {
                      enabled: true,
                      delta.changeDataCapture: {
                        mapping: 
                          [
                            { 
                              table: 'BSEC',
                              role: #MAIN,
                              viewElement: ['CompanyCode', 'AccountingDocument', 'FiscalYear', 'AccountingDocumentItem'],
                              tableElement: ['bukrs', 'belnr', 'gjahr', 'buzei']
                            }
                          ] 
                       }
                    }
                   }

@Metadata:       { ignorePropagatedAnnotations: true,
                   allowExtensions:             true }

define view entity I_JournalEntryItemOneTimeData
  as select from bsec

  association [1..1] to I_CompanyCode              as _CompanyCode        on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_JournalEntry             as _AccountingDocument on  $projection.CompanyCode        = _AccountingDocument.CompanyCode
                                                                          and $projection.AccountingDocument = _AccountingDocument.AccountingDocument
                                                                          and $projection.FiscalYear         = _AccountingDocument.FiscalYear

  association [0..1] to I_FiscalYearForCompanyCode as _FiscalYear         on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                          and $projection.CompanyCode = _FiscalYear.CompanyCode

  association [0..1] to I_Address                  as _Address            on  $projection.AddressID = _Address.AddressID

  association [0..1] to I_Iban                     as _IBAN               on  $projection.BankCountry    = _IBAN.BankCountry
                                                                          and $projection.BankNumber     = _IBAN.Bank
                                                                          and $projection.BankAccount    = _IBAN.BankAccount
                                                                          and $projection.BankControlKey = _IBAN.BankControlKey

  association [0..1] to I_Bank_2                   as _Bank               on  $projection.BankCountry = _Bank.BankCountry
                                                                          and $projection.BankNumber  = _Bank.BankInternalID

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bsec.bukrs                                              as CompanyCode,
      @ObjectModel.foreignKey.association: '_AccountingDocument'
  key bsec.belnr                                              as AccountingDocument,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key cast( bsec.gjahr as fis_gjahr_no_conv preserving type ) as FiscalYear,
  key bsec.buzei                                              as AccountingDocumentItem,
      cast(bsec.name1 as ad_name1)                            as BusinessPartnerName1,
      cast(bsec.name2 as ad_name2)                            as BusinessPartnerName2,
      cast(bsec.name3 as ad_name3)                            as BusinessPartnerName3,
      cast(bsec.name4 as ad_name4)                            as BusinessPartnerName4,
      bsec.land1                                              as Country,
      cast(bsec.ort01 as ad_city1)                            as CityName,
      bsec.pfach                                              as POBox,
      bsec.pstl2                                              as POBoxPostalCode,
      bsec.pstlz                                              as PostalCode,
      bsec.stkzu                                              as IsVATLiable,
      bsec.regio                                              as Region,
      bsec.stcd1                                              as TaxID1,
      bsec.stcd2                                              as TaxID2,
      bsec.stcd3                                              as TaxID3,
      bsec.stcd4                                              as TaxID4,
      bsec.stcd5                                              as TaxID5,
      bsec.stras                                              as StreetAddressName,
      bsec.fityp                                              as ResponsibleType,
      bsec.stcdt                                              as TaxNumberType,
      bsec.j_1kftbus                                          as BusinessType,
      bsec.j_1kftind                                          as IndustryType,
      bsec.anred                                              as OneTimeAccountBPSalutationText,
      bsec.adrnr                                              as AddressID,
      bsec.intad                                              as AccountingClerkInternetAddress,
      bsec.bankn                                              as BankAccount,
      bsec.bankl                                              as BankNumber,
      bsec.banks                                              as BankCountry,
      bsec.pskto                                              as PostOfficeBankAccount,
      bsec.payment_system                                     as PaymentSystem,
      bsec.alias_type                                         as AliasType,
      bsec.bank_alias                                         as BPBankAccountAliasName,
      @Semantics.booleanIndicator: true
      cast(bsec.stkzn as bu_natural_person)                   as IsNaturalPerson,
      bsec.xcpdk                                              as IsOneTimeAccount,
      bkont                                                   as BankControlKey,
      glo_re1_ot                                              as OneTimeAcctCntrySpecificRef1,
      cast(bsec.dtaws as farp_dtaws preserving type)          as DataExchangeInstructionKey,
      bsec.dtams                                              as DataMediumExchangeControl,

      _CompanyCode,
      _AccountingDocument,
      _FiscalYear,
      _Address,
      _IBAN,
      _Bank
}
```
