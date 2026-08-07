---
name: I_BUSINESSPARTNERGROUPINGTEXT
description: Business PartnerGROUPINGTEXT
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - text-view
  - business-partner
  - text
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERGROUPINGTEXT

**Business PartnerGROUPINGTEXT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |
| `BusinessPartnerGrouping` | ✓ | |  | `bu_group` |
| `BusinessPartnerGroupingText` |  | |  | `txt40` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPGROUPINGTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'BusinessPartnerGrouping',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
}
@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@EndUserText.label: 'Business Partner Grouping - Text'
define view I_BusinessPartnerGroupingText
  as select from tb002 
{
      @Semantics.language: true
  key spras    as Language,
  key bu_group as BusinessPartnerGrouping,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @EndUserText.label: 'Grouping Description'
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Consumption.filter.hidden: true
      txt40    as BusinessPartnerGroupingText
}
```
