---
name: I_BUSPARTINDUSTRYCODETEXT
description: "Business PartnerINDUSTRYCODETEXT"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - text-view
  - business-partner
  - text
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_BUSPARTINDUSTRYCODETEXT

**Business PartnerINDUSTRYCODETEXT**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `BusinessPartnerIndustryCode` | ✓ | |  | `braco` |  |  |
| `CustomerIndustryCodeText` |  | |  | `vtext` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INDUSTRYCODET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'BusinessPartnerIndustryCode',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
}
@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@EndUserText.label: 'BusPartIndustryCode - Text'
define view I_BusPartIndustryCodeText as select from tbrct 

{
    @Semantics.language: true
    key spras as Language,
    
    key braco as BusinessPartnerIndustryCode,
    @Consumption.filter.hidden: true
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @EndUserText.label: 'Industry Code Description'
    vtext as CustomerIndustryCodeText    
}
```
