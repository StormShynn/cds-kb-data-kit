---
name: I_SELECTEDCURRENCYBRANCHTEXT
description: "Selectedcurrencybranchtext"
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
  - currency
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_SELECTEDCURRENCYBRANCHTEXT

**Selectedcurrencybranchtext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(ddlanguage as spras)` |  |  |
| `SelectedCurrencyBranch` | ✓ | |  | `cast(domvalue_l as fis_selected_currency_branch)` |  |  |
| `SelectedCurrencyBranchName` |  | |  | `cast(ddtext as fis_sel_currency_branch_name)` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFASELCURBRANCHT', preserveKey: true, compiler.compareFilter:true}
@EndUserText.label: 'Selected Currency Branch - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'SelectedCurrencyBranch',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_SelectedCurrencyBranchText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(ddlanguage as spras)                        as Language,
  key cast(domvalue_l as fis_selected_currency_branch) as SelectedCurrencyBranch,

      @Semantics.text: true
      cast(ddtext as fis_sel_currency_branch_name)     as SelectedCurrencyBranchName,

      _Language
}
where
      domname  = 'FIS_SELECTED_CURRENCY_BRANCH'
  and as4local = 'A';
```
