---
name: I_INVOICELISTTYPESTDVH
description: "Invoicelisttypestdvh"
app_component: SD-BIL-IL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IL
  - interface-view
  - value-help
  - standard-value-help
  - component:SD-BIL-IL-2CL
  - lob:Sales & Distribution
---
# I_INVOICELISTTYPESTDVH

**Invoicelisttypestdvh**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoiceListType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.internalName: #LOCAL

@Consumption.ranked: true

@EndUserText.label: 'Invoice List Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.representativeKey: 'InvoiceListType'
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, serviceQuality: #A, sizeCategory: #S }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

define view entity I_InvoiceListTypeStdVH
  as select from I_InvoiceListType

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key InvoiceListType,

      _Text
}
```
