---
name: I_BILLGDOCITMBSCSTDVH
description: "Billgdocitmbscstdvh"
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - interface-view
  - value-help
  - standard-value-help
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# I_BILLGDOCITMBSCSTDVH

**Billgdocitmbscstdvh**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocument` | ✓ | |  |  |  |  |
| `BillingDocumentItem` | ✓ | |  |  |  |  |
| `BillingDocumentItemText` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `_BillingDocumentBasic` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISDBILDOCITBC_VH'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Item in Billing Process Document'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BillingDocumentItem'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #XL }

@VDM.viewType: #COMPOSITE

define view I_BillgDocItmBscStdVH
  as select from I_BillingDocumentItemBasic

{
      @ObjectModel.foreignKey.association: '_BillingDocumentBasic'
  key BillingDocument,

      @ObjectModel.text.element: [ 'BillingDocumentItemText' ]
  key BillingDocumentItem,

      BillingDocumentItemText,

      @Consumption.hidden: true
      BillingDocumentType,

      @Consumption.hidden: true
      SalesOrganization,

      @Consumption.hidden: true
      _BillingDocumentBasic
}
```
