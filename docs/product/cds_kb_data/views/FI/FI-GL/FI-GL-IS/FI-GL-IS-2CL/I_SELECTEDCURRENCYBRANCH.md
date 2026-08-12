---
name: I_SELECTEDCURRENCYBRANCH
description: "Selectedcurrencybranch"
app_component: FI-GL-IS-2CL
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
  - FI-GL
  - FI-GL-IS
  - interface-view
  - currency
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_SELECTEDCURRENCYBRANCH

**Selectedcurrencybranch**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `SelectedCurrencyBranch` | ✓ | |  | `cast(domvalue_l as fis_selected_currency_branch)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SelectedCurrencyBranchText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFASELCURRBRANCH', preserveKey: true, compiler.compareFilter:true}
@Analytics: { dataCategory: #DIMENSION, internalName: #LOCAL }
@EndUserText.label: 'Selected Currency Branch'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'SelectedCurrencyBranch',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_SelectedCurrencyBranch
  as select from dd07l

  association [0..*] to I_SelectedCurrencyBranchText as _Text on $projection.SelectedCurrencyBranch = _Text.SelectedCurrencyBranch
{
      @ObjectModel.text.association: '_Text'
  key cast(domvalue_l as fis_selected_currency_branch) as SelectedCurrencyBranch,

      _Text
}

where
      dd07l.domname  = 'FIS_SELECTED_CURRENCY_BRANCH'
  and dd07l.as4local = 'A';
```
