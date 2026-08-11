---
name: I_BANK
description: "This CDS view allows you to read information about bank master data from your SAP S/4HANA system. This CDS view provides the prerequisites for answering the following business question: What is the name of the bank with its specific bank internal ID, bank number, or bank identifier code?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANK')/$value
semantic_en: "This CDS view allows you to read information about bank master data from your SAP S/4HANA system. This CDS view provides the prerequisites for answering the following business question: What is the name of the bank with its specific bank internal ID, bank number, or bank identifier code?"
semantic_vi: "Bank — CDS view giao diện dựa trên bnka."
keywords:
  - "bank"
  - "country"
  - "internal"
  - "creation"
  - "date"
  - "created"
  - "user"
  - "name"
tags:
  - FIN
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - master-data
---
# I_BANK

**This CDS view allows you to read information about bank master data from your SAP S/4HANA system. This CDS view provides the prerequisites for answering the following business question: What is the name of the bank with its specific bank internal ID, bank number, or bank identifier code?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANK')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` | ✓ | |  | `banks` | `CHAR(3)` | Bank Country/Region Key |
| `BankInternalID` | ✓ | |  | `bankl` | `CHAR(15)` | Bank Keys |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Record Created On |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Accounting Clerk Responsible for Adding the Object |
| `BankName` |  | |  | `banka` | `CHAR(60)` | Name of Financial Institution |
| `Region` |  | |  | `provz` | `CHAR(3)` | Region (State, Province, County) |
| `StreetName` |  | |  | `stras` | `CHAR(35)` | Street and House Number |
| `ShortStreetName` |  | |  | `stras` | `CHAR(35)` | Street and House Number |
| `CityName` |  | |  | `ort01` | `CHAR(35)` | City |
| `ShortCityName` |  | |  | `ort01` | `CHAR(35)` | City |
| `SWIFTCode` |  | |  | `swift` | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankGroup` |  | |  | `bgrup` | `CHAR(2)` | Bank group (bank network) |
| `BankNetworkGrouping` |  | |  | `bgrup` | `CHAR(2)` | Bank group (bank network) |
| `IsPostBankAccount` |  | |  | `xpgro` | `CHAR(1)` | Post Office Bank Current Account |
| `IsMarkedForDeletion` |  | |  | `loevm` | `CHAR(1)` | Deletion Indicator |
| `Bank` |  | |  | `bnklz` | `CHAR(15)` | Bank Number |
| `PostOfficeBankAccount` |  | |  | `pskto` | `CHAR(16)` | Post office bank current account number |
| `Branch` |  | |  | `brnch` | `CHAR(40)` | Bank Branch |
| `BankBranch` |  | |  | `brnch` | `CHAR(40)` | Bank Branch |
| `CheckDigitCalculationMethod` |  | |  | `chkme` | `CHAR(4)` | Check digit calculation method |
| `BankDataFileFormat` |  | |  | `vers` | `CHAR(3)` | Format of File with Bank Data |
| `AddressID` |  | |  | `adrnr` | `CHAR(10)` | Address Number |
| `_Address` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_BankAdditionalFields` | | ✓ | | | | |
| `_IntradayRule` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Address` | `I_Address` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_HouseBank` | `I_Housebank` | [0..*] |
| `_Country` | `I_Country` | [0..1] |
| `_BankAdditionalFields` | `I_BankAdditionalFields` | [0..1] |
| `_IntradayRule` | `I_BankIntraStaRule` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANK')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANK')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIBANKMASTER'
@EndUserText.label: 'Bank'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'I_BANK_2'
@ObjectModel.representativeKey: 'BankInternalID'
@AccessControl.authorizationCheck: #CHECK //#NOT_REQUIRED
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Search.searchable: true
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'Bank'
define view I_Bank
  as select from bnka
  //    left outer join adr6 as address_mail on  bnka.adrnr = address_mail.addrnumber
  //and bnka.adrnr <> ''
  association [0..1] to I_Address              as _Address              on  $projection.AddressID = _Address.AddressID
  association [0..1] to I_Region               as _Region               on  $projection.Region      = _Region.Region
                                                                        and $projection.BankCountry = _Region.Country
  association [0..*] to I_Housebank            as _HouseBank            on  $projection.Bank        = _HouseBank.HouseBank
                                                                        and $projection.BankCountry = _HouseBank.BankCountry
  association [0..1] to I_Country              as _Country              on  $projection.BankCountry = _Country.Country
  association [0..1] to I_BankAdditionalFields as _BankAdditionalFields on  $projection.BankCountry    = _BankAdditionalFields.BankCountry
                                                                        and $projection.BankInternalID = _BankAdditionalFields.BankInternalID
  association [0..1] to I_BankIntraStaRule     as _IntradayRule         on  $projection.BankCountry    = _IntradayRule.BankCountry
                                                                        and $projection.BankInternalID = _IntradayRule.BankInternalID

{
      @ObjectModel.foreignKey.association: '_Country'
  key banks as BankCountry,
      @ObjectModel.text.element: 'BankName'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8 
      @Search.ranking: #HIGH
  key bankl as BankInternalID,
      erdat as CreationDate,
      ernam as CreatedByUser,
      @Semantics.text: true
      banka as BankName,
      provz as Region,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ShortStreetName'
      stras as StreetName,
      stras as ShortStreetName, //successor for StreetName
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ShortCityName'      
      ort01 as CityName,
      ort01 as ShortCityName, //successor for CityName
      swift as SWIFTCode,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BankNetworkGrouping'
      bgrup as BankGroup,
      bgrup as BankNetworkGrouping, //successor for BankGroup
      xpgro as IsPostBankAccount,
      loevm as IsMarkedForDeletion,
      bnklz as Bank,
      pskto as PostOfficeBankAccount,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BankBranch'
      brnch as Branch,
      brnch as BankBranch, //successor for Branch
      chkme as CheckDigitCalculationMethod,
      vers  as BankDataFileFormat,
      adrnr as AddressID,
      //      address_mail.smtp_addr as RoleOwnerEmailAddress,
      _Address,
      _Region,
      _HouseBank,
      _Country,
      _BankAdditionalFields,
      _IntradayRule
}
where
     loevm = ''
  or loevm = ' ';
```
