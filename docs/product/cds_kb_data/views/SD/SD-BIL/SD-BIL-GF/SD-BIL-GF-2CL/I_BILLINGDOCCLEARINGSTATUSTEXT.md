---
name: I_BILLINGDOCCLEARINGSTATUSTEXT
description: "Billing Document Clearing Status - Text"
app_component: SD-BIL-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLINGDOCCLEARINGSTATUSTEXT')/$value
semantic_en: "Billing Document Clearing Status - Text"
semantic_vi: "Billing Document Clearing Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "billing"
  - "document"
  - "clearing"
  - "status"
  - "text"
  - "language"
  - "domain"
  - "value"
  - "name"
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
# I_BILLINGDOCCLEARINGSTATUSTEXT

**Billing Document Clearing Status - Text**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLINGDOCCLEARINGSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(dd07t.ddlanguage as spras preserving type)` | `LANG(1)` | Language Key |
| `BillingDocumentClearingStatus` | ✓ | |  | `cast(dd07t.domvalue_l as billing_doc_clearing_status)` | `CHAR(1)` | Billing Document Clearing Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `BillingDocClearingStatusName` |  | |  | `cast(dd07t.ddtext as billg_doc_clearing_status_name preserving type )` | `CHAR(60)` | Billing Document Clearing Status Name |
| `_Language` | | ✓ | | | | |
| `_BillingDocumentClearingStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLINGDOCCLEARINGSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLINGDOCCLEARINGSTATUSTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IBILDOCCLRSTSTEXT'

@EndUserText.label: 'Billing Document Clearing Status - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'BillingDocumentClearingStatus'
@ObjectModel.sapObjectNodeType.name: 'BillingDocClearingStatusText'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType: { dataClass: #META, serviceQuality: #A, sizeCategory: #S }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_BillingDocClearingStatusText
  as select from dd07t

  association [0..1] to I_Language                 as _Language                      on $projection.Language = _Language.Language
  association to parent I_BillingDocClearingStatus as _BillingDocumentClearingStatus on $projection.BillingDocumentClearingStatus = _BillingDocumentClearingStatus.BillingDocumentClearingStatus

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(dd07t.ddlanguage as spras preserving type)       as Language,

      @ObjectModel.foreignKey.association: '_BillingDocumentClearingStatus'
      @ObjectModel.text.element: [ 'BillingDocClearingStatusName' ]
  key cast(dd07t.domvalue_l as billing_doc_clearing_status) as BillingDocumentClearingStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                      as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(dd07t.ddtext as billg_doc_clearing_status_name preserving type ) as BillingDocClearingStatusName,

      _Language,
      _BillingDocumentClearingStatus
}

where dd07t.domname = 'CLRST' and dd07t.as4local = 'A' and dd07t.as4vers = '0000'
```
