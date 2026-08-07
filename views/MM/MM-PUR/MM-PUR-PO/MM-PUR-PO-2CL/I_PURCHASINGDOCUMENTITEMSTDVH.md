---
name: I_PURCHASINGDOCUMENTITEMSTDVH
description: Purchasingdocumentitemstdvh
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - value-help
  - standard-value-help
  - document
  - item-level
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASINGDOCUMENTITEMSTDVH

**Purchasingdocumentitemstdvh**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocument` | ✓ | |  |  |  |  |
| `PurchasingDocumentItem` | ✓ | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `_PurchasingDocument` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.preserveKey: true
//GENERATED:003:GlBfhyJl7kU{qsVpXIQ6q0
@AbapCatalog.sqlViewName: 'IPDI__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'PurchasingDocumentItem'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Purchasing Document Item' 
define view I_PurchasingDocumentItemStdVH as select from I_PurchasingDocumentItem {
  @ObjectModel.foreignKey.association: '_PurchasingDocument'
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.9 }
  key PurchasingDocument,
  key PurchasingDocumentItem,

  @Consumption.hidden: true
  Plant,
  @Consumption.hidden: true
  PurchasingDocumentCategory,
  @Consumption.hidden: true
  @Semantics.booleanIndicator: true
  IsEndOfPurposeBlocked,

  @Consumption.hidden: true
  _PurchasingDocument
}
```
