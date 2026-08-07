---
name: I_PURGDOCOUTPUTRELEVANTCHANGE
description: Purgdocoutputrelevantchange
app_component: MM
software_component: SAPSCORE
release_state: released
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
