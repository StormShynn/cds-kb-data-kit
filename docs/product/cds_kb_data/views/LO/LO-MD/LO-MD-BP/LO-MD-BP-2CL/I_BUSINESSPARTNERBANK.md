---
name: I_BUSINESSPARTNERBANK
description: "Business PartnerBANK"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - business-partner
  - bank
  - partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:BusinessPartner
  - bo:Bank
---
# I_BUSINESSPARTNERBANK

**Business PartnerBANK**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `BankIdentification` | ✓ | |  | `bkvid` |  |  |
| `BankCountryKey` |  | |  | `banks` |  |  |
| `BankName` |  | | `_Bank` | `BankName` |  |  |
| `BankNumber` |  | |  | `bankl` |  |  |
| `SWIFTCode` |  | | `_Bank` | `SWIFTCode` |  |  |
| `BankControlKey` |  | |  | `bkont` |  |  |
| `BankAccountHolderName` |  | |  | `koinh` |  |  |
| `BankAccountName` |  | |  | `accname` |  |  |
| `ValidityStartDate` |  | |  | `bk_valid_from` |  |  |
| `ValidityEndDate` |  | |  | `bk_valid_to` |  |  |
| `IsActualDate` |  | |  | `case when BusinessPartnerBank.bk_valid_from <= tstmp_current_utctimestamp() and BusinessPartnerBank.bk_valid_to >= tstmp_current_utctimestamp() then cast('X' as boole_d) else cast(' ' as boole_d) end` |  |  |
| `BPIsActualDate` |  | |  | `case when BusinessPartnerBank.bk_valid_from <= tstmp_current_utctimestamp() and BusinessPartnerBank.bk_valid_to >= tstmp_current_utctimestamp() then cast('X' as boole_d) else cast(' ' as boole_d) end` |  |  |
| `IBAN` |  | |  | `case when BusinessPartnerBank.bankn <> '' then _IBAN.IBAN else BusinessPartnerBank.iban end` |  |  |
| `IBANValidityStartDate` |  | | `_IBAN` | `IBANValidityStartDate` |  |  |
| `BankAccount` |  | |  | `bankn` |  |  |
| `BankAccountReferenceText` |  | |  | `bkref` |  |  |
| `CollectionAuthInd` |  | |  | `xezer` |  |  |
| `BusinessPartnerExternalBankID` |  | |  | `bkext` |  |  |
| `BPBankDetailsChangeDate` |  | |  | `bk_move_date` |  |  |
| `BPBankDetailsChangeTargetID` |  | |  | `move_bkvid` |  |  |
| `BPBankIsProtected` |  | |  | `protect` |  |  |
| `BPBankUUID` |  | |  | `bp_bank_guid` |  |  |
| `CityName` |  | | `_Bank` | `CityName` |  |  |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_Bank` | | ✓ | | | | |
| `_IBAN` | | ✓ | | | | |
| `_BusinessPartnerBankAlias` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_Bank` | `I_Bank` | [1..1] |
| `_IBAN` | `I_Iban` | [1..1] |
| `_BusinessPartnerBankAlias` | `I_BusinessPartnerBankAlias` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUPABANK'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: '_BusinessPartner.IsBusinessPurposeCompleted'
//@Analytics: {
 // dataCategory: #DIMENSION,
//  dataExtraction: {
//    enabled: true,
//    delta.changeDataCapture: {
 //     automatic: true
//    }
 // }
//}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'BUT0BK', role: #MAIN,
                    viewElement: ['BusinessPartner','BankIdentification'],
                    tableElement: ['partner','bkvid']
                },
                {
                    table: 'BUT000', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BusinessPartner'],
                    tableElement: ['partner']
                },
                {
                    table: 'BNKA', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BankCountryKey','BankNumber'],
                    tableElement: ['banks', 'bankl']
                },
                
                {
                    table: 'TIBAN', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BankCountryKey','BankNumber','BankAccount','BankControlKey'],
                    tableElement: ['banks', 'bankl','bankn', 'bkont']
                }
               
            ]
        }
    }
 }
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerBank'  
@ObjectModel.representativeKey:'BankIdentification'
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Bank'// data'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
                                    
@ObjectModel.modelingPattern: #NONE                                  
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BusinessPartnerBank
  as select from but0bk as BusinessPartnerBank

  association [1..1] to I_BusinessPartner as _BusinessPartner on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner

  association [1..1] to I_Bank            as _Bank            on  $projection.BankNumber     = _Bank.BankInternalID
                                                              and $projection.BankCountryKey = _Bank.BankCountry

  //  association [1..1] to tiban  as _IBAN on  $projection.BankAccount    = _IBAN.bankn
  //                                        and $projection.BankNumber     = _IBAN.bankl
  //                                        and $projection.BankCountryKey = _IBAN.banks
  //                                        and $projection.BankControlKey = _IBAN.bkont


  association [1..1] to I_Iban            as _IBAN            on  $projection.BankAccount    = _IBAN.BankAccount
                                                              and $projection.BankNumber     = _IBAN.Bank
                                                              and $projection.BankCountryKey = _IBAN.BankCountry
                                                              and $projection.BankControlKey = _IBAN.BankControlKey
                                                              
  association [1..1] to I_BusinessPartnerBankAlias as _BusinessPartnerBankAlias on $projection.BPBankUUID = _BusinessPartnerBankAlias.BPBankUUID
  
{
  @Search.defaultSearchElement: true
  @ObjectModel.foreignKey.association: '_BusinessPartner'
  key BusinessPartnerBank.partner                                            as  BusinessPartner,
  @Search.defaultSearchElement: true
  key BusinessPartnerBank.bkvid                                              as  BankIdentification,
      BusinessPartnerBank.banks                                              as  BankCountryKey,
      _Bank.BankName                                                         as  BankName,
      BusinessPartnerBank.bankl                                              as  BankNumber,
      _Bank.SWIFTCode                                                        as  SWIFTCode,
      BusinessPartnerBank.bkont                                              as  BankControlKey,
      BusinessPartnerBank.koinh                                              as  BankAccountHolderName,
      BusinessPartnerBank.accname                                            as  BankAccountName,
      BusinessPartnerBank.bk_valid_from                                      as  ValidityStartDate,
      BusinessPartnerBank.bk_valid_to                                        as  ValidityEndDate,
      //_IBAN.IBAN                                                             as  IBAN,
      
      @UI.hidden: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BPIsActualDate'
      case
      when BusinessPartnerBank.bk_valid_from <= tstmp_current_utctimestamp()
      and BusinessPartnerBank.bk_valid_to >= tstmp_current_utctimestamp()
      then cast('X' as boole_d)
      else cast(' ' as boole_d)
      end as IsActualDate,
      
       case
      when BusinessPartnerBank.bk_valid_from <= tstmp_current_utctimestamp()
      and BusinessPartnerBank.bk_valid_to >= tstmp_current_utctimestamp()
      then cast('X' as boole_d)
      else cast(' ' as boole_d)
      end as BPIsActualDate,
      
      case
      when BusinessPartnerBank.bankn <> ''
      then _IBAN.IBAN
      else
       BusinessPartnerBank.iban 
      end as IBAN,
      _IBAN.IBANValidityStartDate                                            as  IBANValidityStartDate,
      BusinessPartnerBank.bankn                                              as  BankAccount,
      BusinessPartnerBank.bkref                                              as  BankAccountReferenceText,
      BusinessPartnerBank.xezer                                              as  CollectionAuthInd,
      BusinessPartnerBank.bkext                                              as  BusinessPartnerExternalBankID,
      BusinessPartnerBank.bk_move_date                                       as  BPBankDetailsChangeDate,
      BusinessPartnerBank.move_bkvid                                         as  BPBankDetailsChangeTargetID,
      BusinessPartnerBank.protect                                            as  BPBankIsProtected,
      BusinessPartnerBank.bp_bank_guid                                       as  BPBankUUID,    
      _Bank.CityName                                                         as  CityName,
      _Bank,
      _IBAN,
      _BusinessPartner,
      _BusinessPartnerBankAlias,
      _BusinessPartner.AuthorizationGroup
}
```
