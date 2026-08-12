---
name: I_BUSINESSPARTNERGROUPTYPETEXT
description: "Business PartnerGROUPTYPETEXT"
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
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
# I_BUSINESSPARTNERGROUPTYPETEXT

**Business PartnerGROUPTYPETEXT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BusinessPartnerGroupType` | ✓ | |  | `partgrptyp` | `CHAR(4)` | Group type |
| `BusPartGroupTypeShortDesc` |  | |  | `textshort` | `CHAR(15)` | Short name |
| `BusinessPartnerGroupTypeDesc` |  | |  | `textlong` | `CHAR(40)` | Description |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPGRPTYPETXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'BusinessPartnerGroupType',
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
@EndUserText.label: 'Business Partner Group Type - Text'
define view I_BusinessPartnerGroupTypeText
  as select from tb026
{
      @Semantics.language: true
  key spras      as Language,
  key partgrptyp as BusinessPartnerGroupType,      
      @Semantics.text: true
      @Search.defaultSearchElement: true      
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Consumption.filter.hidden: true
      textshort  as BusPartGroupTypeShortDesc,
      textlong   as BusinessPartnerGroupTypeDesc
}
```
