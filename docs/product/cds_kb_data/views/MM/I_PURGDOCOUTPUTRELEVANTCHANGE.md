---
name: I_PURGDOCOUTPUTRELEVANTCHANGE
description: "Purgdocoutputrelevantchange"
app_component: MM
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
  - MM
  - interface-view
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGDOCOUTPUTRELEVANTCHANGE

**Purgdocoutputrelevantchange**

| Property | Value |
|---|---|
| App Component | `MM` |
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
| `DatabaseTable` | ✓ | |  | `tname` |  |  |
| `DatabaseTableFieldName` | ✓ | |  | `fname` |  |  |
| `POChangeIsOutputRelevant` |  | |  | `xbest` |  |  |
| `PurchasingChangeTextID` |  | |  | `ctxnr` |  |  |
| `_PurgDocOutputChangeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurgDocOutputChangeText` | `I_PurgDocOutputChangeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPUROUTPRELCHG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Purchasing Doc Output Relevant Change'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_PurgDocOutputRelevantChange
  as select from t166c
  association [0..*] to I_PurgDocOutputChangeText as _PurgDocOutputChangeText on  $projection.PurchasingChangeTextID = _PurgDocOutputChangeText.PurchasingChangeTextID
{
  key tname as DatabaseTable,
  key fname as DatabaseTableFieldName,
      xbest as POChangeIsOutputRelevant,
      @ObjectModel.text.association: '_PurgDocOutputChangeText'
      ctxnr as PurchasingChangeTextID,
      _PurgDocOutputChangeText
}
```
