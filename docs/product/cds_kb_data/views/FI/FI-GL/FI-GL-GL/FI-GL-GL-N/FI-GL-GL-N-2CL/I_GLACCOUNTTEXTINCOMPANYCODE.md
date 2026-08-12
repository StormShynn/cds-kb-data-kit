---
name: I_GLACCOUNTTEXTINCOMPANYCODE
description: "GL AccountTEXTINCompany Code"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - company-code
  - gl-account
  - text
  - component:FI-GL-GL-N-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_GLACCOUNTTEXTINCOMPANYCODE

**GL AccountTEXTINCompany Code**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccount` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `GLAccountName` |  | |  | `cast(I_GLAccountText.GLAccountName as fin_glaccount_name preserving type )` |  |  |
| `GLAccountLongName` |  | |  | `cast(I_GLAccountText.GLAccountLongName as fis_txt50_skat preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIGLACCINCOCDT'
//@ClientDependent: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'G/L Account in Company Code - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
//@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'GLAccount'
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#SEARCHABLE_ENTITY]
define view I_GlAccountTextInCompanycode
as select from I_GLAccountText inner join P_Glacct_In_Cc as I_GLAccountInCompanyCode
   on  I_GLAccountText.ChartOfAccounts = I_GLAccountInCompanyCode.ChartOfAccounts
   and I_GLAccountText.GLAccount       = I_GLAccountInCompanyCode.GLAccount
association[0..1] to I_Language as _Language
   on $projection.Language = _Language.Language
association[0..1] to I_CompanyCode as _CompanyCode
   on  $projection.CompanyCode     = _CompanyCode.CompanyCode
association[0..1] to I_ChartOfAccounts as _ChartOfAccounts
   on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
{
  @Search.defaultSearchElement:true
  @Search.fuzzinessThreshold:0.8
  @Search.ranking:#HIGH
  @ObjectModel.text.element: ['GLAccountName','GLAccountLongName']
  key I_GLAccountText.GLAccount,
  @ObjectModel.foreignKey.association: '_CompanyCode' //Inserted by VDM CDS Suite Plugin
  key I_GLAccountInCompanyCode.CompanyCode,
  @Semantics.language
  @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin 
  key I_GLAccountText.Language,
  @ObjectModel.foreignKey.association: '_ChartOfAccounts' //Inserted by VDM CDS Suite Plugin
  I_GLAccountText.ChartOfAccounts,
  
  @Semantics.text: true
  @Search.defaultSearchElement:true
  @Search.fuzzinessThreshold:0.8
  @Search.ranking:#HIGH
  cast(I_GLAccountText.GLAccountName as fin_glaccount_name preserving type ) as GLAccountName,
  @Semantics.text: true
  @Search.defaultSearchElement:true
  @Search.fuzzinessThreshold:0.8
  @Search.ranking:#HIGH
  cast(I_GLAccountText.GLAccountLongName as fis_txt50_skat preserving type ) as GLAccountLongName,

  _Language,
  _CompanyCode,
  _ChartOfAccounts
}
```
