---
name: I_FINANCIALMANAGEMENTAREATEXT
description: "Financialmanagementareatext"
app_component: PSM
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
  - PSM
  - interface-view
  - text-view
  - text
  - component:PSM
  - lob:Other
---
# I_FINANCIALMANAGEMENTAREATEXT

**Financialmanagementareatext**

| Property | Value |
|---|---|
| App Component | `PSM` |
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
| `FinancialManagementArea` | ✓ | |  | `fikrs` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `FinancialManagementAreaName` |  | |  | `fitxt` |  |  |
| `_Language` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Financial Management Area - Text'
@Analytics: { 
              dataExtraction.enabled: true, 
              internalName: #LOCAL 
            }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'FinancialManagementArea'
@ObjectModel.usageType: {
  sizeCategory: #S,
  dataClass:  #MASTER,
  serviceQuality: #A
}
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AbapCatalog.sqlViewName: 'IFMAREATEXT'
define view I_FinancialManagementAreaText
  as select from fm01t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_FinancialManagementArea as _FinancialManagementArea on $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea   //for authorization check
{

  key fikrs                       as FinancialManagementArea,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                       as Language,
      @Semantics.text: true
      fitxt                       as FinancialManagementAreaName,

      _Language,
      _FinancialManagementArea
};
```
