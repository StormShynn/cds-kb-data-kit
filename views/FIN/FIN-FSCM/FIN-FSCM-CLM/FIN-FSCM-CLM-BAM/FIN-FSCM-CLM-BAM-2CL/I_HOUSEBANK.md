---
name: I_HOUSEBANK
description: "Housebank"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
  - bo:Bank
---
# I_HOUSEBANK

**Housebank**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `HouseBank` | ✓ | |  | `hbkid` |  |  |
| `BankCountry` |  | |  | `banks` |  |  |
| `BankInternalID` |  | |  | `bankl` |  |  |
| `PhoneNumber1` |  | |  | `telf1` |  |  |
| `TaxID1` |  | |  | `stcd1` |  |  |
| `ContactPersonName` |  | |  | `name1` |  |  |
| `Language` |  | |  | `spras` |  |  |
| `BusinessPlace` |  | |  | `bupla` |  |  |
| `EDIPartner` |  | |  | `edipn` |  |  |
| `EDISignatureType` |  | |  | `edisn` |  |  |
| `DataMediumExchangeBank` |  | |  | `dtbid` |  |  |
| `DataMediumReceivingBank` |  | |  | `dtelz` |  |  |
| `CustomerByHouseBank` |  | |  | `dtkid` |  |  |
| `BankControlKey` |  | |  | `dtgko` |  |  |
| `DataExchangeInstruction` |  | |  | `dtaws` |  |  |
| `ExecutionLeadDays` |  | |  | `dtvta` |  |  |
| `CentralBankReportIsRequired` |  | |  | `dtxbb` |  |  |
| `RegionByCentralBank` |  | |  | `dtlbe` |  |  |
| `PaymentIsForwardedToCentralBk` |  | |  | `dtxms` |  |  |
| `ChargeAccountCurrencyISOCode` |  | |  | `dtgis` |  |  |
| `ChargeAccount` |  | |  | `dtgbk` |  |  |
| `ChargeAccountBank` |  | |  | `dtglz` |  |  |
| `OrderingCompanyByBank` |  | |  | `dtfin` |  |  |
| `DefaultPartnerValidToDate` |  | | `_DefaultableBP` | `ValidTo` |  |  |
| `DefaultPartnerValidFromDate` |  | | `_DefaultableBP` | `ValidFrom` |  |  |
| `DefaultPartnerNo` |  | | `_DefaultableBP` | `BusinessPartnerNumber` |  |  |
| `RiskPartnerValidToDate` |  | | `_RiskBP` | `ValidTo` |  |  |
| `RiskPartnerValidFromDate` |  | | `_RiskBP` | `ValidFrom` |  |  |
| `RiskPartnerNo` |  | | `_RiskBP` | `BusinessPartnerNumber` |  |  |
| `DataExchangeInstructionKey` |  | |  | `dtaws` |  |  |
| `HouseBankChargeAccount` |  | |  | `dtgbk` |  |  |
| `HsBkIsInstantBalanceEnabled` |  | |  | `insbalenabled` |  |  |
| `_Bank` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Bank` | `I_Bank` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_DefaultableBP` | `I_DefaultBusinessPartner` | [1..1] |
| `_RiskBP` | `I_RiskBusinessPartner` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Master data for House Bank'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIHOUSEBANK'
@AccessControl.authorizationCheck: #CHECK  //#NOT_REQUIRED
@ObjectModel.representativeKey: 'HouseBank'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.supportedCapabilities:  [ #CDS_MODELING_ASSOCIATION_TARGET,
                                       #SEARCHABLE_ENTITY,                   
                                       #EXTRACTION_DATA_SOURCE  ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.sapObjectNodeType.name: 'HouseBank'
define view I_Housebank
  as select from    t012
    left outer join t012d on  t012d.bukrs = t012.bukrs
                          and t012d.hbkid = t012.hbkid
  association [1..1] to I_Bank                 as _Bank          on  $projection.BankCountry    = _Bank.BankCountry
                                                                   and $projection.BankInternalID = _Bank.BankInternalID
  association [1..1] to I_CompanyCode            as _CompanyCode   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_DefaultBusinessPartner as _DefaultableBP on  $projection.BankCountry    = _DefaultableBP.BankCountry
                                                                   and $projection.BankInternalID = _DefaultableBP.BankInternalID
                                                                   and _DefaultableBP.ValidTo     >= $session.system_date
                                                                   and _DefaultableBP.ValidFrom   <= $session.system_date
  association [1..1] to I_RiskBusinessPartner    as _RiskBP        on  $projection.BankCountry    = _RiskBP.BankCountry
                                                                   and $projection.BankInternalID = _RiskBP.BankInternalID
                                                                   and _RiskBP.ValidTo            >= $session.system_date
                                                                   and _RiskBP.ValidFrom          <= $session.system_date
{
      //--[ GENERATED:012:E6ExH29r7kY4hHBW6NEXPW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED

      @ObjectModel.foreignKey.association: '_CompanyCode'
  key t012.bukrs                           as CompanyCode,
  key t012.hbkid                           as HouseBank,
      t012.banks                           as BankCountry,
      t012.bankl                           as BankInternalID,
      t012.telf1                           as PhoneNumber1,
      t012.stcd1                           as TaxID1,
      t012.name1                           as ContactPersonName,
      t012.spras                           as Language,
      t012.bupla                           as BusinessPlace,
      t012d.edipn                          as EDIPartner,
      t012d.edisn                          as EDISignatureType,
      t012d.dtbid                          as DataMediumExchangeBank,
      t012d.dtelz                          as DataMediumReceivingBank,
      t012d.dtkid                          as CustomerByHouseBank,
      t012d.dtgko                          as BankControlKey,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'DataExchangeInstructionKey'
      t012d.dtaws                          as DataExchangeInstruction,
      t012d.dtvta                          as ExecutionLeadDays,
      t012d.dtxbb                          as CentralBankReportIsRequired,
      t012d.dtlbe                          as RegionByCentralBank,
      t012d.dtxms                          as PaymentIsForwardedToCentralBk,
      t012d.dtgis                          as ChargeAccountCurrencyISOCode,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'HouseBankChargeAccount'      
      t012d.dtgbk                          as ChargeAccount,
      t012d.dtglz                          as ChargeAccountBank,
      t012d.dtfin                          as OrderingCompanyByBank,
      _DefaultableBP.ValidTo               as DefaultPartnerValidToDate,
      _DefaultableBP.ValidFrom             as DefaultPartnerValidFromDate,
      _DefaultableBP.BusinessPartnerNumber as DefaultPartnerNo,
      _RiskBP.ValidTo                      as RiskPartnerValidToDate,
      _RiskBP.ValidFrom                    as RiskPartnerValidFromDate,
      _RiskBP.BusinessPartnerNumber        as RiskPartnerNo,
      _Bank,
      _CompanyCode,
      t012d.dtaws                          as DataExchangeInstructionKey,
      t012d.dtgbk                          as HouseBankChargeAccount,
      t012d.insbalenabled                  as HsBkIsInstantBalanceEnabled
};
```
