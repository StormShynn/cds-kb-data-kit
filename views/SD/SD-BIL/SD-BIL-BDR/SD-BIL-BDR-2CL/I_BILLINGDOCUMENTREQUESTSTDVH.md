---
name: I_BILLINGDOCUMENTREQUESTSTDVH
description: Billing DocumentUMENTREQUESTSTDVH
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
  - document
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTREQUESTSTDVH

**Billing DocumentUMENTREQUESTSTDVH**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillingDocumentRequest` | `BillingDocumentRequest` |
| `BillingDocumentRequestType` | `BillingDocumentRequestType` |
| `SalesOrganization` | `SalesOrganization` |

## Source Code

```abap
//GENERATED:005:GlBfhyFV7kY0W}dt2HPJCm
@AbapCatalog: {
  sqlViewName: 'ISDBILDOCREQ_VH',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BillingDocumentRequest'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Billing Document Request'
define view I_BillingDocumentRequestStdVH as select from I_BillingDocumentRequest {
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key BillingDocumentRequest,

  @Consumption.hidden: true
  BillingDocumentRequestType,
  @Consumption.hidden: true
  SalesOrganization
}
```
