---
name: I_SPECIALGLCODETEXT
description: "Specialglcodetext"
app_component: FI-GL-IS-2CL
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
  - FI-GL-IS
  - interface-view
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_SPECIALGLCODETEXT

**Specialglcodetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialAccountType` | ✓ | |  | `koart` |  |  |
| `SpecialGLCode` | ✓ | |  | `shbkz` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SpecialGLCodeName` |  | |  | `ktext` |  |  |
| `SpecialGLCodeLongName` |  | |  | `ltext` |  |  |
| `_Language` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Special General Ledger Code - Text'
@Analytics: { dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFISPECGLCODET'
@ObjectModel.representativeKey: 'SpecialGLCode'
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.numberOfKeyFields: 1
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
define view I_SpecialGLCodeText
  as select from t074t
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
  association [1..1] to I_FinancialAccountType as _FinancialAccountType on $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
{
      @ObjectModel.foreignKey.association: '_FinancialAccountType' //Inserted by VDM CDS Suite Plugin
  key koart as FinancialAccountType,
      @ObjectModel.text.element: ['SpecialGLCodeLongName', 'SpecialGLCodeName']
  key shbkz as SpecialGLCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @Semantics.text: true
      ktext as SpecialGLCodeName,
      @Semantics.text: true
      ltext as SpecialGLCodeLongName,
      _Language,
      _FinancialAccountType
};
```
