---
name: I_PURCHASINGDOCUMENTSTDVH
description: "Purchasingdocumentstdvh"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASINGDOCUMENTSTDVH

**Purchasingdocumentstdvh**

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
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentOrigin` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.preserveKey: true
//GENERATED:003:GlBfhyJl7kU{qsVpXIQ6q0
@AbapCatalog.sqlViewName: 'IPD__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'PurchasingDocument'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Purchasing Document'
@Search.searchable: true
define view I_PurchasingDocumentStdVH as select from I_PurchasingDocument {
@Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 1.0,
    ranking: #HIGH
} 
  key PurchasingDocument,

  @Consumption.hidden: true
  @Semantics.booleanIndicator: true
  IsEndOfPurposeBlocked,
  @Consumption.hidden: true
  PurchasingDocumentCategory,
  @Consumption.hidden: true
  PurchasingDocumentOrigin,
  @Consumption.hidden: true
  PurchasingDocumentType,
  @Consumption.hidden: true
  PurchasingGroup,
  @Consumption.hidden: true
  PurchasingOrganization
}
```
