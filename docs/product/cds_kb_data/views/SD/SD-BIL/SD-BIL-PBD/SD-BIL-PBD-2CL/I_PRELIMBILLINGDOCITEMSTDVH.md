---
name: I_PRELIMBILLINGDOCITEMSTDVH
description: "PRELIMBilling DocumentITEMSTDVH"
app_component: SD-BIL-PBD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-PBD
  - interface-view
  - value-help
  - standard-value-help
  - billing-document
  - billing
  - item-level
  - component:SD-BIL-PBD-2CL
  - lob:Sales & Distribution
---
# I_PRELIMBILLINGDOCITEMSTDVH

**PRELIMBilling DocumentITEMSTDVH**

| Property | Value |
|---|---|
| App Component | `SD-BIL-PBD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrelimBillingDocument` | ✓ | |  |  |  |  |
| `PrelimBillingDocumentItem` | ✓ | |  |  |  |  |
| `BillingDocumentItemText` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `_PrelimBillingDocument` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ISDPREBILDOCITVH',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'PrelimBillingDocumentItem'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Preliminary Billing Document Item'
define view I_PrelimBillingDocItemStdVH as select from I_PrelimBillingDocumentItem {
  @ObjectModel.foreignKey.association: '_PrelimBillingDocument'
  key PrelimBillingDocument,
  @ObjectModel.text.element: ['BillingDocumentItemText']
  key PrelimBillingDocumentItem,

  @Semantics.text: true
  BillingDocumentItemText,

  @Consumption.hidden: true
  BillingDocumentType,
  @Consumption.hidden: true
  SalesOrganization,
  @Consumption.hidden: true
  _PrelimBillingDocument
}
```
