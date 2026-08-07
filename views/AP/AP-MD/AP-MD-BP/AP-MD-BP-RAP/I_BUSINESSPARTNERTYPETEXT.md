---
name: I_BUSINESSPARTNERTYPETEXT
description: Business PartnerTYPETEXT
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
# I_BUSINESSPARTNERTYPETEXT

**Business PartnerTYPETEXT**

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
| `BusinessPartnerType` | ✓ | |  | `bpkind` |
| `BusinessPartnerTypeDesc` |  | |  | `text40` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'BUPA_TYPE_TEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'BusinessPartnerType',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Business Partner Type - Text'
@Metadata.ignorePropagatedAnnotations: true
define view I_BusinessPartnerTypeText
  as select from tb004t
{
      @Semantics.language: true
  key spras  as Language,
  key bpkind as BusinessPartnerType,
      @Semantics.text: true
      @EndUserText.label: 'Business Partner Description'
      text40 as BusinessPartnerTypeDesc
}
```
