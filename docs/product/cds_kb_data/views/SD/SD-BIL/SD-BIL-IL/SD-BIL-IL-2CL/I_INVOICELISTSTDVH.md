---
name: I_INVOICELISTSTDVH
description: "Invoiceliststdvh"
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
# I_INVOICELISTSTDVH

**Invoiceliststdvh**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoiceList` | ✓ | |  |  |  |  |
| `InvoiceListType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.technicalName: 'ISDINVOICLIST_VH'

@Consumption.ranked: true

@EndUserText.label: 'Invoice List'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'InvoiceList'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #L }

@Search.searchable: true

@VDM.viewType: #COMPOSITE

define view entity I_InvoiceListStdVH
  as select from I_InvoiceList

{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key InvoiceList,

      @Consumption.hidden: true
      InvoiceListType,

      @Consumption.hidden: true
      SalesOrganization
}
```
