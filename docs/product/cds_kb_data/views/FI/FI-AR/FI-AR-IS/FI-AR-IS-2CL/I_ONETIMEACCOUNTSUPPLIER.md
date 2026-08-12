---
name: I_ONETIMEACCOUNTSUPPLIER
description: "Onetimeaccountsupplier"
app_component: FI-AR-IS-2CL
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
  - FI-AR
  - FI-AR-IS
  - interface-view
  - supplier
  - component:FI-AR-IS-2CL
  - lob:Finance
  - bo:Supplier
---
# I_ONETIMEACCOUNTSUPPLIER

**Onetimeaccountsupplier**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
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
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `AccountingDocument` | ✓ | |  | `belnr` |  |  |
| `FiscalYear` | ✓ | |  | `gjahr` |  |  |
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
| `Region` |  | |  | `regio` |  |  |
| `TaxID1` |  | |  | `stcd1` |  |  |
| `TaxID2` |  | |  | `stcd2` |  |  |
| `TaxID3` |  | |  | `stcd3` |  |  |
| `TaxID4` |  | |  | `stcd4` |  |  |
| `TaxID5` |  | |  | `stcd5` |  |  |
| `StreetAddressName` |  | |  | `stras` |  |  |
| `TaxNumberType` |  | |  | `stcdt` |  |  |
| `AddressID` |  | |  | `adrnr` |  |  |
| `AccountingClerkInternetAddress` |  | |  | `intad` |  |  |
| `IsNaturalPerson` |  | |  | `cast(bsec.stkzn as bu_natural_person)` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `PayeeIsAlternativePayee` |  | |  | `case bsec.xcpdk when 'X' then cast('' as farp_isalternativepayee) else cast ('X' as farp_isalternativepayee) end` |  |  |
| `Supplier` |  | | `_OperationalAcctgDocItem` | `Supplier` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JournalEntry` | `I_JournalEntry` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_Address` | `I_Address` | [0..1] |
| `_OperationalAcctgDocItem` | `I_OperationalAcctgDocItem` | [1..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'One-Time Account Data for Supplier Items'
@Analytics: { dataCategory:#DIMENSION}
@Analytics.internalName:#LOCAL
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IONETIMESUPPLIER'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.buffering.type: #NONE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality:#C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:#MIXED
@ObjectModel.representativeKey: 'AccountingDocumentItem'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AccessControl.privilegedAssociations: ['_Address']

define view I_OneTimeAccountSupplier
  as select from bsec

  association [1..1] to I_CompanyCode              as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_JournalEntry             as _JournalEntry            on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                               and $projection.AccountingDocument = _JournalEntry.AccountingDocument
                                                                               and $projection.FiscalYear         = _JournalEntry.FiscalYear

  association [0..1] to I_FiscalYearForCompanyCode as _FiscalYear              on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                               and $projection.CompanyCode = _FiscalYear.CompanyCode

  association [0..1] to I_Address                  as _Address                 on  $projection.AddressID = _Address.AddressID

  association [1..1] to I_OperationalAcctgDocItem  as _OperationalAcctgDocItem on  _OperationalAcctgDocItem.CompanyCode            = $projection.CompanyCode
                                                                               and _OperationalAcctgDocItem.AccountingDocument     = $projection.AccountingDocument
                                                                               and _OperationalAcctgDocItem.FiscalYear             = $projection.FiscalYear
                                                                               and _OperationalAcctgDocItem.AccountingDocumentItem = $projection.AccountingDocumentItem

  association [1..1] to I_SupplierCompany          as _SupplierCompany         on  _SupplierCompany.CompanyCode = $projection.CompanyCode
                                                                               and _SupplierCompany.Supplier    = $projection.Supplier
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bsec.bukrs                            as CompanyCode,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key bsec.belnr                            as AccountingDocument,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key bsec.gjahr                            as FiscalYear,
  key bsec.buzei                            as AccountingDocumentItem,
      cast(bsec.name1 as ad_name1)          as BusinessPartnerName1,
      cast(bsec.name2 as ad_name2)          as BusinessPartnerName2,
      cast(bsec.name3 as ad_name3)          as BusinessPartnerName3,
      cast(bsec.name4 as ad_name4)          as BusinessPartnerName4,
      bsec.land1                            as Country,
      cast(bsec.ort01 as ad_city1)          as CityName,
      bsec.pfach                            as POBox,
      bsec.pstl2                            as POBoxPostalCode,
      bsec.pstlz                            as PostalCode,
      bsec.regio                            as Region,
      bsec.stcd1                            as TaxID1,
      bsec.stcd2                            as TaxID2,
      bsec.stcd3                            as TaxID3,
      bsec.stcd4                            as TaxID4,
      bsec.stcd5                            as TaxID5,
      bsec.stras                            as StreetAddressName,
      bsec.stcdt                            as TaxNumberType,
      bsec.adrnr                            as AddressID,
      bsec.intad                            as AccountingClerkInternetAddress,
      cast(bsec.stkzn as bu_natural_person) as IsNaturalPerson,
      bsec.begru                            as AuthorizationGroup,
      case bsec.xcpdk when 'X' then cast('' as farp_isalternativepayee) else cast ('X' as farp_isalternativepayee)
      end                                   as PayeeIsAlternativePayee,
      
      _OperationalAcctgDocItem.Supplier     as Supplier,

      _CompanyCode,
      _JournalEntry,
      _FiscalYear,
      _Address,

      _OperationalAcctgDocItem,
      _SupplierCompany
}
where
  _OperationalAcctgDocItem.FinancialAccountType = 'K'
```
