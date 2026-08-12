---
name: I_CITCLASSFCTNCONFIGURATIONVH
description: "Citclassfctnconfigurationvh"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - value-help
  - component:FI-LOC-CIT
  - lob:Finance
---
# I_CITCLASSFCTNCONFIGURATIONVH

**Citclassfctnconfigurationvh**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `Ledger` | ✓ | |  |  |  |  |
| `CorporateIncomeTaxHierarchy` | ✓ | |  |  |  |  |
| `CompanyCodeName` |  | | `_CompanyCodeText` | `CompanyCodeName` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_CompanyCodeText` | `I_CompanyCode` | [1..1] |
| `_HierarchyText` | `I_CorporateIncomeTaxHierarchyT` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICITCLSFCNFVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory:#VALUE_HELP
@ObjectModel.representativeKey: 'CorporateIncomeTaxHierarchy'

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SEARCHABLE_ENTITY,
                                     #VALUE_HELP_PROVIDER]

@Search.searchable: true
@Consumption.ranked: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
//@AccessControl.personalData.blocking : #NOT_REQUIRED

@EndUserText.label: 'CIT Classification Configuration'

define view I_CITClassfctnConfigurationVH
  as select distinct from I_CITClassfctnConfiguration
  association [0..*] to I_LedgerText                   as _LedgerText      on $projection.Ledger = _LedgerText.Ledger
  association [1..1] to I_CompanyCode                  as _CompanyCodeText on $projection.CompanyCode = _CompanyCodeText.CompanyCode
  association [1..*] to I_CorporateIncomeTaxHierarchyT as _HierarchyText   on $projection.CorporateIncomeTaxHierarchy = _HierarchyText.CorporateIncomeTaxHierarchy
{
      @UI.lineItem: [{ position: 10 }]
      @ObjectModel.text.element: ['CompanyCodeName']
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key CompanyCode,

      @UI.lineItem: [{ position: 20 }]
      @ObjectModel.text.element: ['LedgerName']
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key Ledger,

      @Search.defaultSearchElement: true
      @UI.lineItem: [{ position: 30 }]
      @ObjectModel.text.element: ['CITHierarchyDescription']
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
  key CorporateIncomeTaxHierarchy,

      @UI.lineItem: [{ position: 11 }]
      _CompanyCodeText.CompanyCodeName,

      @UI.lineItem: [{ position: 21 }]
      _LedgerText[1: Language = $session.system_language].LedgerName,

      @UI.lineItem: [{ position: 31 }]
      _HierarchyText[1: Language = $session.system_language].CITHierarchyDescription
}
```
