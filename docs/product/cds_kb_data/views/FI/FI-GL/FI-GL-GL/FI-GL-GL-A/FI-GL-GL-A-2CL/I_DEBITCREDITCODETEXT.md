---
name: I_DEBITCREDITCODETEXT
description: "Debitcreditcodetext"
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
  - text
  - credit
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_DEBITCREDITCODETEXT

**Debitcreditcodetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type )` |  |  |
| `DebitCreditCode` | ✓ | |  | `cast( domvalue_l as fis_shkzg )` |  |  |
| `DebitCreditCodeName` |  | |  | `cast(ddtext as fis_shkzg_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey:true
@EndUserText.label: 'Debit Credit Code - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'DebitCreditCode'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIDECRECODET'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@Analytics: { dataExtraction.enabled: true }
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_DebitCreditCodeText
as
select from dd07t
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
@ObjectModel.foreignKey.association: '_Language'
  @Semantics.language
  key cast(ddlanguage as spras preserving type ) as Language,
  key cast( domvalue_l as fis_shkzg ) as DebitCreditCode,
  @Semantics.text
  cast(ddtext as fis_shkzg_name preserving type ) as DebitCreditCodeName,
  _Language
  
}
where domname = 'SHKZG' and as4local = 'A';
```
