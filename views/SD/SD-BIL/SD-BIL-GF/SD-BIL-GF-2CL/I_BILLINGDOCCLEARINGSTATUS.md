---
name: I_BILLINGDOCCLEARINGSTATUS
description: Billing Document Clearing Status
app_component: SD-BIL-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLINGDOCCLEARINGSTATUS')/$value
semantic_en: Billing Document Clearing Status
semantic_vi: Billing Document Clearing Status — CDS view giao diện dựa trên dd07l.
keywords:
  - billing
  - document
  - clearing
  - status
  - domain
  - value
tags:
  - SD
  - billing
  - bo:billingdocument
  - component:SD-BIL-GF-2CL
  - document
  - interface-view
  - lob:sales & distribution
  - SD-BIL
  - SD-BIL-GF
  - SD-BIL-GF-2CL
---
# I_BILLINGDOCCLEARINGSTATUS

**Billing Document Clearing Status**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLINGDOCCLEARINGSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentClearingStatus` | ✓ | |  | `cast(dd07l.domvalue_l as billing_doc_clearing_status)` | `CHAR(1)` | Billing Document Clearing Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLINGDOCCLEARINGSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLINGDOCCLEARINGSTATUS')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL

@Consumption.ranked: true

@EndUserText.label: 'Billing Document Clearing Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'BillingDocumentClearingStatus'
@ObjectModel.sapObjectNodeType.name: 'BillingDocumentClearingStatus'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType: { dataClass: #META, serviceQuality: #A, sizeCategory: #S }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view entity I_BillingDocClearingStatus
  as select from dd07l

  composition [0..*] of I_BillingDocClearingStatusText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as billing_doc_clearing_status) as BillingDocumentClearingStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                as DomainValue,

      _Text
}

where dd07l.domname = 'CLRST' and dd07l.as4local = 'A' and dd07l.as4vers = '0000'
```
