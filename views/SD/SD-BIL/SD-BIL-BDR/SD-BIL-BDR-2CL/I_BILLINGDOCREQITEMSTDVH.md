---
name: I_BILLINGDOCREQITEMSTDVH
description: Billing DocumentREQITEMSTDVH
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - value-help
  - standard-value-help
  - billing-document
  - billing
  - item-level
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_BILLINGDOCREQITEMSTDVH

**Billing DocumentREQITEMSTDVH**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentRequest` | ✓ | |  |  |  |  |
| `BillingDocumentRequestItem` | ✓ | |  |  |  |  |
| `BillingDocumentRequestItemText` |  | |  |  |  |  |
| `BillingDocumentRequestType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `_BillingDocumentRequest` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ISDBILDOCREQITVH',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BillingDocumentRequestItem'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Billing Document Request Item'
define view I_BillingDocReqItemStdVH as select from I_BillingDocumentRequestItem {
  @ObjectModel.foreignKey.association: '_BillingDocumentRequest'
  key BillingDocumentRequest,
  @ObjectModel.text.element: ['BillingDocumentRequestItemText']
  key BillingDocumentRequestItem,

  @Semantics.text: true
  BillingDocumentRequestItemText,

  @Consumption.hidden: true
  BillingDocumentRequestType,
  @Consumption.hidden: true
  SalesOrganization,
  @Consumption.hidden: true
  _BillingDocumentRequest
}
```
