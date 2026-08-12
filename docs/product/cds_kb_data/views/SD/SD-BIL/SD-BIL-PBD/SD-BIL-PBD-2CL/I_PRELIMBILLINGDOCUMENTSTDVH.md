---
name: I_PRELIMBILLINGDOCUMENTSTDVH
description: "PRELIMBilling DocumentUMENTSTDVH"
app_component: SD-BIL-PBD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
  - document
  - component:SD-BIL-PBD-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_PRELIMBILLINGDOCUMENTSTDVH

**PRELIMBilling DocumentUMENTSTDVH**

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
| `BillingDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ISDPREBILDOC_VH',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'PrelimBillingDocument'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Preliminary Billing Document'
define view I_PrelimBillingDocumentStdVH as select from I_PrelimBillingDocument {
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key PrelimBillingDocument,

  @Consumption.hidden: true
  BillingDocumentType,
  @Consumption.hidden: true
  SalesOrganization
}
```
