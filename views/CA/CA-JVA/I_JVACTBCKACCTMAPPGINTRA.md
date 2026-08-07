---
name: I_JVACTBCKACCTMAPPGINTRA
description: Jvactbckacctmappgintra
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVACTBCKACCTMAPPGINTRA

**Jvactbckacctmappgintra**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `FromGLAccount` | ✓ | |  |  |  |  |
| `ToGLAccount` |  | |  |  |  |  |
| `CutbackAccount` |  | |  |  |  |  |
| `JVAIsToKeepOriginalAccount` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_FromGLAccount` | | ✓ | | | | |
| `_ToGLAccount` | | ✓ | | | | |
| `_CutbackAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FromGLAccount` | `I_GLAccountInCompanyCode` | [0..1] |
| `_ToGLAccount` | `I_GLAccountInCompanyCode` | [0..1] |
| `_CutbackAccount` | `I_GLAccountInCompanyCode` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cutback Account Mapping Intracompany'
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.representativeKey: 'FromGLAccount'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #MIXED
}

define view entity I_JVACtbckAcctMappgIntra

  as select from I_JVACtbckAcctMappgIntraBsc as JVACtbckAcctMappgIntraBsc

  association [0..1] to I_CompanyCode            as _CompanyCode    on  _CompanyCode.CompanyCode = $projection.CompanyCode

  association [0..1] to I_GLAccountInCompanyCode as _FromGLAccount  on  _FromGLAccount.CompanyCode = $projection.CompanyCode
                                                                    and _FromGLAccount.GLAccount   = $projection.FromGLAccount

  association [0..1] to I_GLAccountInCompanyCode as _ToGLAccount    on  _ToGLAccount.CompanyCode = $projection.CompanyCode
                                                                    and _ToGLAccount.GLAccount   = $projection.ToGLAccount

  association [0..1] to I_GLAccountInCompanyCode as _CutbackAccount on  _CutbackAccount.CompanyCode = $projection.CompanyCode
                                                                    and _CutbackAccount.GLAccount   = $projection.CutbackAccount
{
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key JVACtbckAcctMappgIntraBsc.CompanyCode,
  key JVACtbckAcctMappgIntraBsc.FromGLAccount,
      JVACtbckAcctMappgIntraBsc.ToGLAccount,
      JVACtbckAcctMappgIntraBsc.CutbackAccount,
      JVACtbckAcctMappgIntraBsc.JVAIsToKeepOriginalAccount,

      _CompanyCode,
      _FromGLAccount,
      _ToGLAccount,
      _CutbackAccount

}
```
