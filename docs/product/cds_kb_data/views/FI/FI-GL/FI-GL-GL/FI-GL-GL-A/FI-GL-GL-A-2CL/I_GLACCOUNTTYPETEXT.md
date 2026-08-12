---
name: I_GLACCOUNTTYPETEXT
description: "GL AccountTYPETEXT"
app_component: FI-GL-GL-A-2CL
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
  - text-view
  - gl-account
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_GLACCOUNTTYPETEXT

**GL AccountTYPETEXT**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountType` | ✓ | |  | `domvalue_l` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `GLAccountTypeName` |  | |  | `ddtext` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_GLAccountType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GLAccountType` | `I_GLAccountType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IGLACCTYPETXT'
@EndUserText.label: 'G/L Account Type - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'GLAccountType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #B
@Analytics: { dataExtraction.enabled: true }
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
@Search.searchable: true
define view I_GLAccountTypeText
  as select from dd07t
  association [1..1] to I_GLAccountType as _GLAccountType on $projection.GLAccountType = _GLAccountType.GLAccountType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_GLAccountType'
      @ObjectModel.text.element: ['GLAccountTypeName']
  key domvalue_l as GLAccountType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key ddlanguage as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext     as GLAccountTypeName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      domvalue_l as DomainValue,
      _Language,
      _GLAccountType
}
where
      domname  = 'GLACCOUNT_TYPE'
  and as4local = 'A'
```
