---
name: I_HOUSEBANKACCOUNTTEXT
description: "Housebankaccounttext"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - text-view
  - bank
  - text
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
  - bo:Bank
---
# I_HOUSEBANKACCOUNTTEXT

**Housebankaccounttext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `HouseBank` | ✓ | |  | `hbkid` |  |  |
| `HouseBankAccount` | ✓ | |  | `hktid` |  |  |
| `HouseBankAccountDescription` |  | |  | `text1` |  |  |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_HouseBank` | `I_Housebank` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IHOUSEBANKACCTT'
@AbapCatalog.preserveKey:true
@EndUserText.label: 'House Bank Account - Text'
@ObjectModel.representativeKey: 'HouseBankAccount'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
define view I_HouseBankAccountText
  as select from P_HouseBankAccountText
  association [0..1] to I_Language    as _Language    on  $projection.Language = _Language.Language
  association [0..1] to I_CompanyCode as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Housebank   as _HouseBank   on  $projection.HouseBank   = _HouseBank.HouseBank
                                                      and $projection.CompanyCode = _HouseBank.CompanyCode
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras as Language,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs as CompanyCode,
      @ObjectModel.foreignKey.association: '_HouseBank'
  key hbkid as HouseBank,
  key hktid as HouseBankAccount,
      @Semantics.text
      text1 as HouseBankAccountDescription,
      _Language,
      _CompanyCode,
      _HouseBank

}
```
