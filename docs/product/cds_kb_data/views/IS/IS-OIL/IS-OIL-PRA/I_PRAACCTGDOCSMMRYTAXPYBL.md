---
name: I_PRAACCTGDOCSMMRYTAXPYBL
description: "PRA Acctg Document Summary Tax Pybl"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYTAXPYBL')/$value
semantic_en: "PRA Acctg Document Summary Tax Pybl"
semantic_vi: "PRA Acctg Document Summary Tax Pybl — CDS view giao diện dựa trên PRA Acctg Document Summary Tax Pybl."
keywords:
  - "pra"
  - "acctg"
  - "document"
  - "summary"
  - "tax"
  - "pybl"
  - "company"
  - "code"
  - "country"
  - "primary"
  - "geogrl"
  - "location"
  - "sales"
  - "date"
  - "product"
tags:
  - IS
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAACCTGDOCSMMRYTAXPYBL

**PRA Acctg Document Summary Tax Pybl**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYTAXPYBL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast ( bukrs as fis_bukrs preserving type )` | `CHAR(4)` | Company Code |
| `Country` | ✓ | |  | `cast( land1 as land1_gp preserving type )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` | ✓ | |  | `pri_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `SalesDate` | ✓ | |  | `sale_dt` | `DATS(8)` | Sales Date / Month |
| `Product` | ✓ | |  | `pd_cd` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `JointVenture` | ✓ | |  | `vname` | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | ✓ | |  | `doi_no` | `CHAR(5)` | Division of Interest (DOI) |
| `SeveranceTaxType` | ✓ | |  | `tax_type_cd` | `CHAR(2)` | Severance Tax Type |
| `GLAccount` | ✓ | |  | `acct_no` | `CHAR(10)` | G/L Account Number |
| `UnitJointVenture` |  | |  | `unit_vname` | `CHAR(6)` | Unit Venture |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `TaxPyblStatus` |  | |  | `status` | `CHAR(2)` | Taxes Payable Status |
| `StatusLastChangedByUser` |  | |  | `status_user` | `CHAR(12)` | Taxes Payable Status User |
| `WriteOffResponsibleUser` |  | |  | `wo_user` | `CHAR(12)` | Taxes Payable Writeoff User |
| `BalAmtAgeCode` |  | |  | `age` | `CHAR(3)` | Taxes Payable Write-off Age |
| `AgingPeriod` |  | |  | `aging_acct_perd` | `CHAR(8)` | Aging Accounting Period(YYYYMM01) |
| `TargetDate` |  | |  | `cast (target_dt as oiu_vdm_fis_period preserving type)` | `ACCP(6)` | Fiscal Period |
| `GLAccountType` |  | |  | `cast( 'TP' as oiuh_acctype)` | `CHAR(2)` | Account Type |
| `BalAmtInCompanyCodeCrcy` |  | |  | `cur_bal` | `CURR(13)` | Current Balance |
| `StatusAmtInCompanyCodeCrcy` |  | |  | `orig_status_amt` | `CURR(13)` | Status Amount |
| `WriteOffAmtInCoCodeCrcy` |  | |  | `wo_amt` | `CURR(13)` | Write Off Amount |
| `_CompanyCode` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_PRAJointVenture` | | ✓ | | | | |
| `_DivisionOfInterest` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_SeveranceTaxType` | | ✓ | | | | |
| `_BalAmtAge` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_TaxPyblStatus` | | ✓ | | | | |
| `_PRAGLAccount` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_Product` | `I_PRAProduct` | [0..1] |
| `_PRAJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_DivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_SeveranceTaxType` | `I_SeveranceTaxType` | [0..1] |
| `_BalAmtAge` | `I_TaxPblBalAmtAge` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_TaxPyblStatus` | `I_PRATaxPyblStatus` | [0..1] |
| `_PRAGLAccount` | `I_PRAGLAccount` | [0..1] |
| `_GLAccountType` | `I_PRAGLAccountType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYTAXPYBL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYTAXPYBL')/$value)*

```abap
@EndUserText.label: 'PRA Acctg Document Summary Tax Pybl'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVSMMRYTAXPYBL'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRATaxPayableAcctgDocSummary'

define view I_PRAAcctgDocSmmryTaxPybl
  as select from /pra/tp_balance
  association [0..1] to I_CompanyCode           as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Country               as _Country               on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation as _PrimaryGeogrlLocation on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                          and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_PRAProduct            as _Product               on  $projection.Product = _Product.Product
  association [0..1] to I_PRAJointVenture       as _PRAJointVenture       on  $projection.CompanyCode  = _PRAJointVenture.CompanyCode
                                                                          and $projection.JointVenture = _PRAJointVenture.PRAJointVenture
  association [0..1] to I_DivisionOfInterest    as _DivisionOfInterest    on  $projection.CompanyCode        = _DivisionOfInterest.CompanyCode
                                                                          and $projection.JointVenture       = _DivisionOfInterest.JointVenture
                                                                          and $projection.DivisionOfInterest = _DivisionOfInterest.DivisionOfInterest
  association [0..1] to I_PRAJointVenture       as _UnitJointVenture      on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                          and $projection.UnitJointVenture = _UnitJointVenture.PRAJointVenture
  association [0..1] to I_SeveranceTaxType      as _SeveranceTaxType      on  $projection.Country               = _SeveranceTaxType.Country
                                                                          and $projection.PrimaryGeogrlLocation = _SeveranceTaxType.PrimaryGeogrlLocation
                                                                          and $projection.SeveranceTaxType      = _SeveranceTaxType.SeveranceTaxType
  association [0..1] to I_TaxPblBalAmtAge       as _BalAmtAge             on  $projection.BalAmtAgeCode = _BalAmtAge.BalAmtAgeCode
  association [0..1] to I_Currency              as _CompanyCodeCurrency   on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency

  association [0..1] to I_PRATaxPyblStatus      as _TaxPyblStatus         on  $projection.TaxPyblStatus = _TaxPyblStatus.TaxPyblStatus
  association [0..1] to I_PRAGLAccount          as _PRAGLAccount          on  $projection.CompanyCode = _PRAGLAccount.CompanyCode
                                                                          and $projection.GLAccount   = _PRAGLAccount.GLAccount
  association [0..1] to I_PRAGLAccountType      as _GLAccountType         on  $projection.GLAccountType = _GLAccountType.GLAccountType
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  //key bukrs                                     as CompanyCode,
  key  cast ( bukrs as fis_bukrs preserving type )                as CompanyCode,
      @ObjectModel.foreignKey.association: '_Country'
  key cast( land1 as land1_gp preserving type ) as Country,

      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
  key pri_geo_loc                               as PrimaryGeogrlLocation,
  key sale_dt                                   as SalesDate,
      @ObjectModel.foreignKey.association: '_Product'
  key pd_cd                                     as Product,
      @ObjectModel.foreignKey.association: '_PRAJointVenture'
  key vname                                     as JointVenture,
      @ObjectModel.foreignKey.association: '_DivisionOfInterest'
  key doi_no                                    as DivisionOfInterest,
      @ObjectModel.foreignKey.association: '_SeveranceTaxType'
  key tax_type_cd                               as SeveranceTaxType,
      @ObjectModel.foreignKey.association: '_PRAGLAccount'
  key acct_no                                   as GLAccount,
      @ObjectModel.foreignKey.association: '_UnitJointVenture'
      unit_vname                                as UnitJointVenture,
      @Semantics.currencyCode: true
      _CompanyCode.Currency                     as CompanyCodeCurrency,
      @ObjectModel.foreignKey.association: '_TaxPyblStatus'
      status                                    as TaxPyblStatus,
      @Semantics.user.lastChangedBy: true
      status_user                               as StatusLastChangedByUser,
      @Semantics.user.lastChangedBy: true
      wo_user                                   as WriteOffResponsibleUser,
      @ObjectModel.foreignKey.association: '_BalAmtAge'
      age                                       as BalAmtAgeCode,
      @Semantics.businessDate.at: true
      aging_acct_perd                           as AgingPeriod,
      @Semantics.businessDate.at: true
      cast (target_dt as oiu_vdm_fis_period preserving type) as TargetDate,
      //    account type needed for auth check
      @ObjectModel.foreignKey.association: '_GLAccountType'
      cast( 'TP' as oiuh_acctype)               as GLAccountType,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cur_bal                                   as BalAmtInCompanyCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      orig_status_amt                           as StatusAmtInCompanyCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      wo_amt                                    as WriteOffAmtInCoCodeCrcy,

      //    associations
      _CompanyCode,
      _Country,
      _PrimaryGeogrlLocation,
      _Product,
      _PRAJointVenture,
      _DivisionOfInterest,
      _SeveranceTaxType,
      _UnitJointVenture,
      _CompanyCodeCurrency,
      _BalAmtAge,
      _TaxPyblStatus,
      _PRAGLAccount,
      _GLAccountType
};
```
