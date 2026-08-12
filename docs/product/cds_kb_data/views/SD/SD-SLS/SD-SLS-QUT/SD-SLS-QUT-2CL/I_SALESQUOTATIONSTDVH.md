---
name: I_SALESQUOTATIONSTDVH
description: "Salesquotationstdvh"
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - interface-view
  - value-help
  - standard-value-help
  - sales-quotation
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATIONSTDVH

**Salesquotationstdvh**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotation` | ✓ | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesQuotationType` |  | |  |  |  |  |

## Source Code

```abap
//GENERATED:005:GFBfhyK17kY1w9JfZmsJU0
@AbapCatalog.sqlViewName: 'ISDSLSQUOTVH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'SalesQuotation'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Sales Quotation'
define view I_SalesQuotationStdVH as select from I_SalesQuotation {
  key SalesQuotation,

  @Consumption.hidden: true
  DistributionChannel,
  @Consumption.hidden: true
  OrganizationDivision,
  @Consumption.hidden: true
  SalesOrganization,
  @Consumption.hidden: true
  SalesQuotationType
}
```
